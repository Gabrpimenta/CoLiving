import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import type { User, AuthState, AuthActions } from '@/types/stores';
import { zustandSecureStorage } from '@/lib/storage';
import { supabase } from '@/config/supabase';

interface AuthStore extends AuthState, AuthActions {}

const isDev = __DEV__;

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: true,
        error: null,

        setUser: (user: User | null) => {
          set((state) => {
            state.user = user;
            state.isAuthenticated = user !== null;
          });
        },

        setTokens: (accessToken: string, refreshToken: string) => {
          set((state) => {
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
          });
        },

        clearAuth: () => {
          set((state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            state.error = null;
          });
        },

        setLoading: (isLoading: boolean) => {
          set((state) => {
            state.isLoading = isLoading;
          });
        },

        setError: (error: string | null) => {
          set((state) => {
            state.error = error;
          });
        },

        refreshSession: async () => {
          const state = get();
          if (!state.refreshToken) {
            throw new Error('No refresh token available');
          }

          try {
            set((draft) => {
              draft.isLoading = true;
              draft.error = null;
            });

            const { data, error } = await supabase.auth.refreshSession({
              refresh_token: state.refreshToken,
            });

            if (error) throw error;

            if (data.session) {
              const { access_token, refresh_token } = data.session;

              set((draft) => {
                draft.accessToken = access_token;
                draft.refreshToken = refresh_token || state.refreshToken;
                draft.isLoading = false;
              });

              await supabase.auth.setSession(data.session);
            }
          } catch (error: any) {
            set((draft) => {
              draft.error = error.message || 'Failed to refresh session';
              draft.isLoading = false;
            });

            if (
              error.message?.includes('refresh_token_not_found') ||
              error.message?.includes('invalid_grant')
            ) {
              get().clearAuth();
            }

            throw error;
          }
        },
      })),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => zustandSecureStorage),
        partialize: (state) => ({
          user: state.user,
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    { name: 'AuthStore', enabled: isDev }
  )
);
