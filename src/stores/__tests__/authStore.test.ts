import { renderHook, act } from '@testing-library/react-hooks';
import { useAuthStore } from '../authStore';
import { supabase } from '@/config/supabase';
import type { User } from '@/types/stores';

jest.mock('@/config/supabase');

const mockSupabase = supabase as jest.Mocked<typeof supabase>;

describe('authStore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Operations', () => {
    it('should initialize with default state', () => {
      const { result } = renderHook(() => useAuthStore());
      expect(result.current.user).toBeNull();
      expect(result.current.isAuthenticated).toBe(false);
      expect(result.current.isLoading).toBe(true); // Initial loading state
      expect(result.current.error).toBeNull();
      expect(result.current.accessToken).toBeNull();
      expect(result.current.refreshToken).toBeNull();
    });

    it('should set user and authenticate', () => {
      const { result } = renderHook(() => useAuthStore());
      const mockUser: User = {
        id: '123',
        email: 'test@example.com',
        fullName: 'Test User',
        role: 'resident',
      };

      act(() => {
        result.current.setUser(mockUser);
      });

      expect(result.current.user).toEqual(mockUser);
      expect(result.current.isAuthenticated).toBe(true);
    });

    it('should set tokens', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setTokens('access-token', 'refresh-token');
      });

      expect(result.current.accessToken).toBe('access-token');
      expect(result.current.refreshToken).toBe('refresh-token');
    });

    it('should clear auth state', () => {
      const { result } = renderHook(() => useAuthStore());
      const mockUser: User = {
        id: '123',
        email: 'test@example.com',
        fullName: 'Test User',
        role: 'resident',
      };

      act(() => {
        result.current.setUser(mockUser);
        result.current.setTokens('access', 'refresh');
        result.current.setLoading(true);
        result.current.setError('Some error');
      });

      act(() => {
        result.current.clearAuth();
      });

      expect(result.current.user).toBeNull();
      expect(result.current.isAuthenticated).toBe(false);
      expect(result.current.accessToken).toBeNull();
      expect(result.current.refreshToken).toBeNull();
      expect(result.current.error).toBeNull();
      expect(result.current.isLoading).toBe(false);
    });

    it('should set loading state', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setLoading(true);
      });

      expect(result.current.isLoading).toBe(true);

      act(() => {
        result.current.setLoading(false);
      });

      expect(result.current.isLoading).toBe(false);
    });

    it('should set error', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setError('Test error');
      });

      expect(result.current.error).toBe('Test error');

      act(() => {
        result.current.setError(null);
      });

      expect(result.current.error).toBeNull();
    });
  });

  describe('Session Refresh', () => {
    it('should throw error if no refresh token', async () => {
      const { result } = renderHook(() => useAuthStore());

      await expect(
        act(async () => {
          await result.current.refreshSession();
        })
      ).rejects.toThrow('No refresh token available');
    });

    it('should refresh session successfully', async () => {
      const mockSession = {
        access_token: 'new-access-token',
        refresh_token: 'new-refresh-token',
        user: {
          id: '123',
          email: 'test@example.com',
          user_metadata: {
            full_name: 'Test User',
            role: 'resident',
          },
        },
      };

      mockSupabase.auth.refreshSession.mockResolvedValue({
        data: { session: mockSession as any },
        error: null,
      });
      mockSupabase.auth.setSession.mockResolvedValue({} as any);

      const { result } = renderHook(() => useAuthStore());
      
      act(() => {
        result.current.setTokens('old-access', 'old-refresh');
      });

      await act(async () => {
        await result.current.refreshSession();
      });

      expect(result.current.accessToken).toBe('new-access-token');
      expect(result.current.refreshToken).toBe('new-refresh-token');
    });

    it('should handle refresh session with no session returned', async () => {
      mockSupabase.auth.refreshSession.mockResolvedValue({
        data: { session: null },
        error: null,
      });

      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setTokens('old', 'old-refresh');
      });

      await act(async () => {
        await result.current.refreshSession();
      });

      expect(result.current.user).toBeNull();
      expect(result.current.accessToken).toBeNull();
      expect(result.current.refreshToken).toBeNull();
    });

    it('should handle refresh session error', async () => {
      const error = { message: 'Refresh failed' };
      mockSupabase.auth.refreshSession.mockResolvedValue({
        data: { session: null },
        error: error as any,
      });

      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setTokens('old', 'old-refresh');
      });

      await expect(
        act(async () => {
          await result.current.refreshSession();
        })
      ).rejects.toEqual(error);
    });
  });

  describe('Branch Coverage - Edge Cases', () => {
    it('should handle null user in setUser', () => {
      const { result } = renderHook(() => useAuthStore());
      const mockUser: User = {
        id: '123',
        email: 'test@example.com',
        fullName: 'Test User',
        role: 'resident',
      };

      act(() => {
        result.current.setUser(mockUser);
      });
      expect(result.current.isAuthenticated).toBe(true);

      act(() => {
        result.current.setUser(null);
      });
      expect(result.current.isAuthenticated).toBe(false);
    });

    it('should handle multiple setLoading calls', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setLoading(true);
        result.current.setLoading(false);
        result.current.setLoading(true);
      });

      expect(result.current.isLoading).toBe(true);
    });

    it('should handle multiple setError calls', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setError('Error 1');
        result.current.setError('Error 2');
        result.current.setError(null);
      });

      expect(result.current.error).toBeNull();
    });

    it('should handle setTokens with null values', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setTokens('access', 'refresh');
      });
      expect(result.current.accessToken).toBe('access');

      act(() => {
        result.current.setTokens(null, null);
      });
      expect(result.current.accessToken).toBeNull();
      expect(result.current.refreshToken).toBeNull();
    });

    it('should maintain isAuthenticated based on user presence', () => {
      const { result } = renderHook(() => useAuthStore());

      expect(result.current.isAuthenticated).toBe(false);

      act(() => {
        result.current.setUser({
          id: '1',
          email: 'test@example.com',
          fullName: 'Test',
          role: 'resident',
        });
      });
      expect(result.current.isAuthenticated).toBe(true);

      act(() => {
        result.current.clearAuth();
      });
      expect(result.current.isAuthenticated).toBe(false);
    });

    it('should handle refresh with missing user metadata', async () => {
      mockSupabase.auth.refreshSession.mockResolvedValue({
        data: {
          session: {
            access_token: 'token',
            refresh_token: 'refresh',
            user: {
              id: '123',
              email: 'test@example.com',
              user_metadata: {},
            },
          } as any,
        },
        error: null,
      });
      mockSupabase.auth.setSession.mockResolvedValue({} as any);

      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setTokens('old', 'old-refresh');
      });

      await act(async () => {
        await result.current.refreshSession();
      });

      expect(result.current.user?.fullName).toBeNull();
      expect(result.current.user?.role).toBe('resident');
    });

    it('should handle different user roles', () => {
      const { result } = renderHook(() => useAuthStore());

      const roles: Array<'resident' | 'staff' | 'manager' | 'admin'> = [
        'resident',
        'staff',
        'manager',
        'admin',
      ];

      roles.forEach((role) => {
        act(() => {
          result.current.setUser({
            id: '1',
            email: 'test@example.com',
            fullName: 'Test',
            role,
          });
        });
        expect(result.current.user?.role).toBe(role);
      });
    });
  });

  describe('State Persistence', () => {
    it('should update user while maintaining tokens', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setTokens('access', 'refresh');
        result.current.setUser({
          id: '1',
          email: 'old@example.com',
          fullName: 'Old Name',
          role: 'resident',
        });
      });

      act(() => {
        result.current.setUser({
          id: '1',
          email: 'new@example.com',
          fullName: 'New Name',
          role: 'manager',
        });
      });

      expect(result.current.user?.email).toBe('new@example.com');
      expect(result.current.accessToken).toBe('access');
      expect(result.current.refreshToken).toBe('refresh');
    });

    it('should handle concurrent state updates', () => {
      const { result } = renderHook(() => useAuthStore());

      act(() => {
        result.current.setLoading(true);
        result.current.setError('Error');
        result.current.setUser({
          id: '1',
          email: 'test@example.com',
          fullName: 'Test',
          role: 'resident',
        });
        result.current.setTokens('access', 'refresh');
      });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.error).toBe('Error');
      expect(result.current.user).not.toBeNull();
      expect(result.current.accessToken).toBe('access');
    });
  });
});
