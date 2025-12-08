import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/config/supabase';
import { useAuthStore } from '@/stores/authStore';
import { AuthService } from '@/services/authService';
import { useSession } from '@/hooks/useSession';
import NetInfo from '@react-native-community/netinfo';
import type { User } from '@/types/stores';
import { useOfflineStore } from '@/stores';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<{ user: User; requiresConfirmation: boolean }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  refreshSession: () => Promise<void>;
  checkSession: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { user, isAuthenticated, isLoading, error, setLoading, setError, setUser, refreshSession } =
    useAuthStore();

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      try {
        const hasSession = await AuthService.checkSession();
        if (!hasSession) {
          useAuthStore.getState().clearAuth();
        }
      } catch (error: any) {
        console.warn('Auth initialization error:', error);
        useAuthStore.getState().clearAuth();
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    initializeAuth();
  }, [setLoading]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.id);

      switch (event) {
        case 'SIGNED_IN':
          if (session?.user) {
            const user = {
              id: session.user.id,
              email: session.user.email || '',
              fullName: session.user.user_metadata?.full_name || null,
              role:
                (session.user.user_metadata?.role as 'resident' | 'admin' | 'staff') || 'resident',
              profileId: session.user.user_metadata?.profile_id || null,
              avatarUrl: session.user.user_metadata?.avatar_url || null,
              createdAt: session.user.created_at,
              updatedAt: session.user.updated_at || session.user.created_at,
            };
            setUser(user);
            useAuthStore.getState().setTokens(session.access_token, session.refresh_token || '');
          }
          break;

        case 'SIGNED_OUT':
          useAuthStore.getState().clearAuth();
          break;

        case 'TOKEN_REFRESHED':
          if (session) {
            useAuthStore.getState().setTokens(session.access_token, session.refresh_token || '');
          }
          break;

        case 'USER_UPDATED':
          if (session?.user) {
            const user = {
              id: session.user.id,
              email: session.user.email || '',
              fullName: session.user.user_metadata?.full_name || null,
              role:
                (session.user.user_metadata?.role as 'resident' | 'admin' | 'staff') || 'resident',
              profileId: session.user.user_metadata?.profile_id || null,
              avatarUrl: session.user.user_metadata?.avatar_url || null,
              createdAt: session.user.created_at,
              updatedAt: session.user.updated_at || session.user.created_at,
            };
            setUser(user);
          }
          break;
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setUser]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isOnline = state.isConnected ?? false;
      useOfflineStore.getState().setOnlineStatus(isOnline);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useSession();

  const signIn = async (email: string, password: string): Promise<void> => {
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
  };

  const signUp = async (
    email: string,
    password: string,
    fullName: string
  ): Promise<{ user: User; requiresConfirmation: boolean }> => {
    try {
      setLoading(true);
      setError(null);
      return await AuthService.signUp(email, password, fullName);
    } catch (err: any) {
      setError(err.message || 'Failed to sign up');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
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
  };

  const resetPassword = async (email: string): Promise<void> => {
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
  };

  const updateProfile = async (data: Partial<User>): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await AuthService.updateProfile(data);
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextValue = {
    user,
    isAuthenticated,
    isLoading: isLoading || !initialized,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
    refreshSession,
    checkSession: AuthService.checkSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
