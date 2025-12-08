import { AuthService } from '../authService';
import { supabase } from '@/config/supabase';
import { apolloClient } from '@/config/apolloClient';
import { useAuthStore } from '@/stores/authStore';
import { useOfflineStore } from '@/stores/offlineStore';

jest.mock('@/config/supabase');
jest.mock('@/config/apolloClient');
jest.mock('@/stores/authStore');
jest.mock('@/stores/offlineStore');

const mockSetUser = jest.fn();
const mockSetTokens = jest.fn();
const mockClearAuth = jest.fn();
const mockClearQueue = jest.fn();

describe('AuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSetUser.mockClear();
    mockSetTokens.mockClear();
    mockClearAuth.mockClear();
    mockClearQueue.mockClear();

    (useAuthStore.getState as jest.Mock).mockReturnValue({
      setUser: mockSetUser,
      setTokens: mockSetTokens,
      clearAuth: mockClearAuth,
    });

    (useOfflineStore.getState as jest.Mock).mockReturnValue({
      clearQueue: mockClearQueue,
    });
  });

  describe('signIn', () => {
    it('should throw error for invalid email', async () => {
      await expect(AuthService.signIn('invalid-email', 'password123')).rejects.toThrow(
        'Invalid email address'
      );
    });

    it('should throw error for short password', async () => {
      await expect(AuthService.signIn('test@example.com', '12345')).rejects.toThrow(
        'Password must be at least 6 characters'
      );
    });

    it('should sign in successfully', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        user_metadata: { full_name: 'Test User', role: 'resident' },
        created_at: '2024-01-01',
        updated_at: '2024-01-01',
      };

      const mockSession = {
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        user: mockUser,
      };

      (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
        data: { session: mockSession, user: mockUser },
        error: null,
      });

      (supabase.auth.setSession as jest.Mock).mockResolvedValue({});

      const user = await AuthService.signIn('test@example.com', 'password123');

      expect(user.email).toBe('test@example.com');
      expect(mockSetUser).toHaveBeenCalled();
      expect(mockSetTokens).toHaveBeenCalled();
    });
  });

  describe('signUp', () => {
    it('should throw error for invalid email', async () => {
      await expect(AuthService.signUp('invalid-email', 'password123', 'Test User')).rejects.toThrow(
        'Invalid email address'
      );
    });

    it('should throw error for short password', async () => {
      await expect(AuthService.signUp('test@example.com', '12345', 'Test User')).rejects.toThrow(
        'Password must be at least 8 characters'
      );
    });

    it('should sign up successfully', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        user_metadata: { full_name: 'Test User', role: 'resident' },
        created_at: '2024-01-01',
        updated_at: '2024-01-01',
      };

      const mockSession = {
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        user: mockUser,
      };

      (supabase.auth.signUp as jest.Mock).mockResolvedValue({
        data: { session: mockSession, user: mockUser },
        error: null,
      });

      (apolloClient.mutate as jest.Mock).mockResolvedValue({});
      (supabase.auth.setSession as jest.Mock).mockResolvedValue({});

      const result = await AuthService.signUp('test@example.com', 'password123', 'Test User');

      expect(result.user.email).toBe('test@example.com');
      expect(result.requiresConfirmation).toBe(false);
    });
  });

  describe('signOut', () => {
    it('should sign out successfully', async () => {
      (supabase.auth.signOut as jest.Mock).mockResolvedValue({});
      (apolloClient.clearStore as jest.Mock).mockResolvedValue({});

      await AuthService.signOut();

      expect(supabase.auth.signOut).toHaveBeenCalled();
      expect(mockClearAuth).toHaveBeenCalled();
    });
  });

  describe('checkSession', () => {
    it('should return true if session exists', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        user_metadata: { full_name: 'Test User', role: 'resident' },
        created_at: '2024-01-01',
        updated_at: '2024-01-01',
      };

      const mockSession = {
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        user: mockUser,
      };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      });

      (useAuthStore.getState as jest.Mock).mockReturnValue({
        setUser: mockSetUser,
        setTokens: mockSetTokens,
        clearAuth: mockClearAuth,
      });

      const result = await AuthService.checkSession();

      expect(result).toBe(true);
      expect(mockSetUser).toHaveBeenCalled();
      expect(mockSetTokens).toHaveBeenCalled();
    });

    it('should return false if no session', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: null },
        error: null,
      });

      const result = await AuthService.checkSession();

      expect(result).toBe(false);
    });
  });
});
