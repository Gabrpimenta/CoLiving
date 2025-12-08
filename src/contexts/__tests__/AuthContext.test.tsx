import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuthContext } from '../AuthContext';
import { useAuthStore } from '@/stores/authStore';
import { AuthService } from '@/services/authService';
import { supabase } from '@/config/supabase';
import NetInfo from '@react-native-community/netinfo';
import { useSession } from '@/hooks/useSession';
import { useOfflineStore } from '@/stores';

jest.mock('@/stores/authStore');
jest.mock('@/services/authService');
jest.mock('@/config/supabase');
jest.mock('@react-native-community/netinfo');
jest.mock('@/hooks/useSession');
jest.mock('@/stores');

const mockUseAuthStore = useAuthStore as jest.MockedFunction<typeof useAuthStore>;
const mockAuthService = AuthService as jest.Mocked<typeof AuthService>;
const mockSupabase = supabase as jest.Mocked<typeof supabase>;
const mockNetInfo = NetInfo as jest.Mocked<typeof NetInfo>;
const mockUseOfflineStore = useOfflineStore as jest.MockedFunction<typeof useOfflineStore>;

describe('AuthContext', () => {
  const mockSetLoading = jest.fn();
  const mockSetError = jest.fn();
  const mockSetUser = jest.fn();
  const mockClearAuth = jest.fn();
  const mockSetTokens = jest.fn();
  const mockRefreshSession = jest.fn();
  const mockSetOnlineStatus = jest.fn();

  let authStateChangeCallback: any;

  beforeEach(() => {
    mockUseAuthStore.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      setLoading: mockSetLoading,
      setError: mockSetError,
      setUser: mockSetUser,
      clearAuth: mockClearAuth,
      setTokens: mockSetTokens,
      refreshSession: mockRefreshSession,
      accessToken: null,
      refreshToken: null,
    });

    (mockUseAuthStore as any).getState = jest.fn(() => ({
      clearAuth: mockClearAuth,
      setTokens: mockSetTokens,
    }));

    mockUseOfflineStore.mockReturnValue({
      setOnlineStatus: mockSetOnlineStatus,
    } as any);

    (mockUseOfflineStore as any).getState = jest.fn(() => ({
      setOnlineStatus: mockSetOnlineStatus,
    }));

    mockSupabase.auth = {
      onAuthStateChange: jest.fn((callback) => {
        authStateChangeCallback = callback;
        return {
          data: {
            subscription: {
              unsubscribe: jest.fn(),
            },
          },
        };
      }),
    } as any;

    mockNetInfo.addEventListener = jest.fn(() => jest.fn());
    mockAuthService.checkSession = jest.fn().mockResolvedValue(true);

    jest.clearAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  it('should throw error when useAuthContext is used outside provider', () => {
    const { result } = renderHook(() => useAuthContext());
    expect(result.error).toEqual(Error('useAuthContext must be used within an AuthProvider'));
  });

  it('should provide auth context', () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });

    expect(result.current).toBeDefined();
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should initialize auth on mount', async () => {
    renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(mockAuthService.checkSession).toHaveBeenCalled();
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it('should clear auth when checkSession returns false', async () => {
    mockAuthService.checkSession.mockResolvedValue(false);

    renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(mockClearAuth).toHaveBeenCalled();
  });

  it('should clear auth when initialization fails', async () => {
    mockAuthService.checkSession.mockRejectedValue(new Error('Session check failed'));

    renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(mockClearAuth).toHaveBeenCalled();
  });

  it('should handle signIn successfully', async () => {
    mockAuthService.signIn.mockResolvedValue({
      id: '1',
      email: 'test@example.com',
      fullName: 'Test User',
      role: 'resident',
    } as any);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await result.current.signIn('test@example.com', 'password123');
    });

    expect(mockAuthService.signIn).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(mockSetError).toHaveBeenCalledWith(null);
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it('should handle signIn error', async () => {
    const error = new Error('Invalid credentials');
    mockAuthService.signIn.mockRejectedValue(error);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await expect(result.current.signIn('test@example.com', 'wrong')).rejects.toThrow();
    });

    expect(mockSetError).toHaveBeenCalledWith('Invalid credentials');
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it('should handle signUp successfully', async () => {
    const mockResult = {
      user: { id: '1', email: 'test@example.com' } as any,
      requiresConfirmation: false,
    };
    mockAuthService.signUp.mockResolvedValue(mockResult);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    let response: any;
    await act(async () => {
      response = await result.current.signUp('test@example.com', 'password123', 'Test User');
    });

    expect(response).toEqual(mockResult);
    expect(mockAuthService.signUp).toHaveBeenCalledWith('test@example.com', 'password123', 'Test User');
  });

  it('should handle signUp error', async () => {
    const error = new Error('Signup failed');
    mockAuthService.signUp.mockRejectedValue(error);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await expect(result.current.signUp('test@example.com', 'password', 'Test')).rejects.toThrow();
    });

    expect(mockSetError).toHaveBeenCalledWith('Signup failed');
  });

  it('should handle signOut successfully', async () => {
    mockAuthService.signOut.mockResolvedValue();

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await result.current.signOut();
    });

    expect(mockAuthService.signOut).toHaveBeenCalled();
    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(mockSetError).toHaveBeenCalledWith(null);
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it('should handle signOut error', async () => {
    const error = new Error('Signout failed');
    mockAuthService.signOut.mockRejectedValue(error);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await expect(result.current.signOut()).rejects.toThrow();
    });

    expect(mockSetError).toHaveBeenCalledWith('Signout failed');
  });

  it('should handle resetPassword successfully', async () => {
    mockAuthService.resetPassword.mockResolvedValue();

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await result.current.resetPassword('test@example.com');
    });

    expect(mockAuthService.resetPassword).toHaveBeenCalledWith('test@example.com');
  });

  it('should handle resetPassword error', async () => {
    const error = new Error('Reset failed');
    mockAuthService.resetPassword.mockRejectedValue(error);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await expect(result.current.resetPassword('test@example.com')).rejects.toThrow();
    });

    expect(mockSetError).toHaveBeenCalledWith('Reset failed');
  });

  it('should handle updateProfile successfully', async () => {
    mockAuthService.updateProfile.mockResolvedValue({ id: '1', fullName: 'Updated' } as any);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await result.current.updateProfile({ fullName: 'Updated' });
    });

    expect(mockAuthService.updateProfile).toHaveBeenCalledWith({ fullName: 'Updated' });
  });

  it('should handle updateProfile error', async () => {
    const error = new Error('Update failed');
    mockAuthService.updateProfile.mockRejectedValue(error);

    const { result } = renderHook(() => useAuthContext(), { wrapper });

    await act(async () => {
      await expect(result.current.updateProfile({ fullName: 'New' })).rejects.toThrow();
    });

    expect(mockSetError).toHaveBeenCalledWith('Update failed');
  });

  it('should handle SIGNED_IN auth state change', () => {
    renderHook(() => useAuthContext(), { wrapper });

    const mockSession = {
      user: {
        id: '1',
        email: 'test@example.com',
        user_metadata: {
          full_name: 'Test User',
          role: 'resident',
        },
        created_at: '2023-01-01',
      },
      access_token: 'token',
      refresh_token: 'refresh',
    };

    act(() => {
      authStateChangeCallback('SIGNED_IN', mockSession);
    });

    expect(mockSetUser).toHaveBeenCalledWith({
      id: '1',
      email: 'test@example.com',
      fullName: 'Test User',
      role: 'resident',
      profileId: null,
      avatarUrl: null,
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
    });
    expect(mockSetTokens).toHaveBeenCalledWith('token', 'refresh');
  });

  it('should handle SIGNED_OUT auth state change', () => {
    renderHook(() => useAuthContext(), { wrapper });

    act(() => {
      authStateChangeCallback('SIGNED_OUT', null);
    });

    expect(mockClearAuth).toHaveBeenCalled();
  });

  it('should handle TOKEN_REFRESHED auth state change', () => {
    renderHook(() => useAuthContext(), { wrapper });

    const mockSession = {
      access_token: 'new-token',
      refresh_token: 'new-refresh',
    };

    act(() => {
      authStateChangeCallback('TOKEN_REFRESHED', mockSession);
    });

    expect(mockSetTokens).toHaveBeenCalledWith('new-token', 'new-refresh');
  });

  it('should handle USER_UPDATED auth state change', () => {
    renderHook(() => useAuthContext(), { wrapper });

    const mockSession = {
      user: {
        id: '1',
        email: 'updated@example.com',
        user_metadata: {
          full_name: 'Updated Name',
          role: 'admin',
        },
        created_at: '2023-01-01',
        updated_at: '2023-01-02',
      },
    };

    act(() => {
      authStateChangeCallback('USER_UPDATED', mockSession);
    });

    expect(mockSetUser).toHaveBeenCalledWith({
      id: '1',
      email: 'updated@example.com',
      fullName: 'Updated Name',
      role: 'admin',
      profileId: null,
      avatarUrl: null,
      createdAt: '2023-01-01',
      updatedAt: '2023-01-02',
    });
  });

  it('should listen to network status changes', async () => {
    let networkCallback: any;
    mockNetInfo.addEventListener.mockImplementation((callback) => {
      networkCallback = callback;
      return jest.fn();
    });

    renderHook(() => useAuthContext(), { wrapper });

    expect(mockNetInfo.addEventListener).toHaveBeenCalled();

    act(() => {
      networkCallback({ isConnected: true });
    });

    expect(mockSetOnlineStatus).toHaveBeenCalledWith(true);

    act(() => {
      networkCallback({ isConnected: false });
    });

    expect(mockSetOnlineStatus).toHaveBeenCalledWith(false);
  });

  it('should handle null network state', async () => {
    let networkCallback: any;
    mockNetInfo.addEventListener.mockImplementation((callback) => {
      networkCallback = callback;
      return jest.fn();
    });

    renderHook(() => useAuthContext(), { wrapper });

    act(() => {
      networkCallback({ isConnected: null });
    });

    expect(mockSetOnlineStatus).toHaveBeenCalledWith(false);
  });
});
