import { renderHook, act, waitFor } from '@testing-library/react-hooks';
import { useAuth } from '../useAuth';
import { useAuthStore } from '@/stores/authStore';
import { AuthService } from '@/services/authService';

jest.mock('@/stores/authStore');
jest.mock('@/services/authService');

const mockUseAuthStore = useAuthStore as jest.MockedFunction<typeof useAuthStore>;
const mockAuthService = AuthService as jest.Mocked<typeof AuthService>;

describe('useAuth', () => {
  const mockSetLoading = jest.fn();
  const mockSetError = jest.fn();

  beforeEach(() => {
    mockUseAuthStore.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      setLoading: mockSetLoading,
      setError: mockSetError,
      accessToken: null,
      refreshToken: null,
      setUser: jest.fn(),
      setTokens: jest.fn(),
      clearAuth: jest.fn(),
      refreshSession: jest.fn(),
    });
    jest.clearAllMocks();
  });

  describe('basic functionality', () => {
    it('should return auth state', () => {
      const { result } = renderHook(() => useAuth());
      expect(result.current.user).toBeNull();
      expect(result.current.isAuthenticated).toBe(false);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it('should sign in successfully', async () => {
      const mockUser = { id: '1', email: 'test@example.com' } as any;
      mockAuthService.signIn.mockResolvedValue(mockUser);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        await result.current.signIn('test@example.com', 'password123');
      });

      expect(mockSetLoading).toHaveBeenCalledWith(true);
      expect(mockSetLoading).toHaveBeenCalledWith(false);
      expect(mockAuthService.signIn).toHaveBeenCalledWith('test@example.com', 'password123');
    });

    it('should sign up successfully', async () => {
      const mockUser = { id: '1', email: 'test@example.com' } as any;
      mockAuthService.signUp.mockResolvedValue({ user: mockUser, requiresConfirmation: false });

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        const response = await result.current.signUp('test@example.com', 'password123', 'Test User');
        expect(response.user).toEqual(mockUser);
      });

      expect(mockAuthService.signUp).toHaveBeenCalledWith('test@example.com', 'password123', 'Test User');
    });

    it('should sign out successfully', async () => {
      mockAuthService.signOut.mockResolvedValue();

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        await result.current.signOut();
      });

      expect(mockAuthService.signOut).toHaveBeenCalled();
    });

    it('should reset password successfully', async () => {
      mockAuthService.resetPassword.mockResolvedValue();

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        await result.current.resetPassword('test@example.com');
      });

      expect(mockAuthService.resetPassword).toHaveBeenCalledWith('test@example.com');
    });

    it('should update profile successfully', async () => {
      const mockUser = { id: '1', email: 'test@example.com', fullName: 'Updated Name' } as any;
      mockAuthService.updateProfile.mockResolvedValue(mockUser);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        const updated = await result.current.updateProfile({ fullName: 'Updated Name' });
        expect(updated).toEqual(mockUser);
      });

      expect(mockAuthService.updateProfile).toHaveBeenCalledWith({ fullName: 'Updated Name' });
    });
  });

  describe('error handling with messages', () => {
    it('should handle sign in error', async () => {
      const error = new Error('Invalid credentials');
      mockAuthService.signIn.mockRejectedValue(error);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        await expect(result.current.signIn('test@example.com', 'wrong')).rejects.toThrow();
      });

      expect(mockSetError).toHaveBeenCalledWith('Invalid credentials');
    });

    it('should handle sign up error', async () => {
      const error = new Error('Sign up failed');
      mockAuthService.signUp.mockRejectedValue(error);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        try {
          await result.current.signUp('test@example.com', 'password', 'Test User');
        } catch (e) {
          expect(e).toBe(error);
        }
      });

      expect(mockSetError).toHaveBeenCalledWith('Sign up failed');
    });

    it('should handle sign out error', async () => {
      const error = new Error('Sign out failed');
      mockAuthService.signOut.mockRejectedValue(error);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        try {
          await result.current.signOut();
        } catch (e) {
          expect(e).toBe(error);
        }
      });

      expect(mockSetError).toHaveBeenCalledWith('Sign out failed');
    });

    it('should handle reset password error', async () => {
      const error = new Error('Reset failed');
      mockAuthService.resetPassword.mockRejectedValue(error);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        try {
          await result.current.resetPassword('test@example.com');
        } catch (e) {
          expect(e).toBe(error);
        }
      });

      expect(mockSetError).toHaveBeenCalledWith('Reset failed');
    });

    it('should handle update profile error', async () => {
      const error = new Error('Update failed');
      mockAuthService.updateProfile.mockRejectedValue(error);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        try {
          await result.current.updateProfile({ fullName: 'New Name' });
        } catch (e) {
          expect(e).toBe(error);
        }
      });

      expect(mockSetError).toHaveBeenCalledWith('Update failed');
    });
  });

  describe('error handling without messages', () => {
    it('should use default error message for sign in', async () => {
      const error = new Error();
      error.message = '';
      mockAuthService.signIn.mockRejectedValue(error);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        try {
          await result.current.signIn('test@example.com', 'password');
        } catch (e) {
          // Expected
        }
      });

      expect(mockSetError).toHaveBeenCalledWith('Failed to sign in');
    });

    it('should use default error message for sign up', async () => {
      const error = new Error();
      error.message = '';
      mockAuthService.signUp.mockRejectedValue(error);

      const { result } = renderHook(() => useAuth());

      await act(async () => {
        try {
          await result.current.signUp('test@example.com', 'password', 'Test');
        } catch (e) {
          // Expected
        }
      });

      expect(mockSetError).toHaveBeenCalledWith('Failed to sign up');
    });
  });
});
