import { useCallback } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { AuthService } from '@/services/authService';
import type { User } from '@/types/stores';

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, error, setLoading, setError } = useAuthStore();

  const signIn = useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        await AuthService.signIn(email, password);
      } catch (err: any) {
        setError(err.message || 'Failed to sign in');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  const signUp = useCallback(
    async (
      email: string,
      password: string,
      fullName: string
    ): Promise<{ user: User; requiresConfirmation: boolean }> => {
      try {
        setLoading(true);
        setError(null);
        const result = await AuthService.signUp(email, password, fullName);
        return result;
      } catch (err: any) {
        setError(err.message || 'Failed to sign up');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  const signOut = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await AuthService.signOut();
    } catch (err: any) {
      setError(err.message || 'Failed to sign out');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError]);

  const resetPassword = useCallback(
    async (email: string): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        await AuthService.resetPassword(email);
      } catch (err: any) {
        setError(err.message || 'Failed to reset password');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  const updateProfile = useCallback(
    async (updates: Partial<User>): Promise<User> => {
      try {
        setLoading(true);
        setError(null);
        const updatedUser = await AuthService.updateProfile(updates);
        return updatedUser;
      } catch (err: any) {
        setError(err.message || 'Failed to update profile');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
  };
};
