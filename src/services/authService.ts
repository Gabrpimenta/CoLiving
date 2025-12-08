import { supabase } from '@/config/supabase';
import { apolloClient } from '@/config/apolloClient';
import { useAuthStore } from '@/stores/authStore';
import { useOfflineStore } from '@/stores/offlineStore';
import type { User } from '@/types/stores';
import { gql } from '@apollo/client';

const CREATE_PROFILE = gql`
  mutation CreateProfile($input: ProfilesInsertInput!) {
    insertIntoProfilesCollection(objects: [$input]) {
      records {
        id
        fullName
        role
        createdAt
      }
    }
  }
`;

const mapSupabaseUser = (supabaseUser: any): User => {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email,
    fullName: supabaseUser.user_metadata?.full_name || null,
    role: (supabaseUser.user_metadata?.role as 'resident' | 'admin' | 'staff') || 'resident',
    profileId: supabaseUser.user_metadata?.profile_id || null,
    avatarUrl: supabaseUser.user_metadata?.avatar_url || null,
    createdAt: supabaseUser.created_at,
    updatedAt: supabaseUser.updated_at || supabaseUser.created_at,
  };
};

export class AuthService {
  static async signIn(email: string, password: string): Promise<User> {
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message || 'Failed to sign in');
    }

    if (!data.session || !data.user) {
      throw new Error('No session data returned');
    }

    const { access_token, refresh_token } = data.session;
    const user = mapSupabaseUser(data.user);

    const authStore = useAuthStore.getState();
    authStore.setUser(user);
    authStore.setTokens(access_token, refresh_token || '');

    await supabase.auth.setSession(data.session);

    return user;
  }

  static async signUp(
    email: string,
    password: string,
    fullName: string
  ): Promise<{ user: User; requiresConfirmation: boolean }> {
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }
    if (!password || password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }
    if (!fullName || fullName.trim().length < 2) {
      throw new Error('Full name is required');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'resident',
        },
      },
    });

    if (error) {
      throw new Error(error.message || 'Failed to sign up');
    }

    if (!data.user) {
      throw new Error('No user data returned');
    }

    const user = mapSupabaseUser(data.user);
    const requiresConfirmation = !data.session;

    if (data.session) {
      const { access_token, refresh_token } = data.session;

      try {
        await apolloClient.mutate({
          mutation: CREATE_PROFILE,
          variables: {
            input: {
              id: user.id,
              fullName: fullName,
              role: 'resident',
            },
          },
        });

        user.profileId = user.id;
      } catch (profileError: any) {
        console.warn('Failed to create profile:', profileError);
      }

      const authStore = useAuthStore.getState();
      authStore.setUser(user);
      authStore.setTokens(access_token, refresh_token || '');

      await supabase.auth.setSession(data.session);
    } else {
      const authStore = useAuthStore.getState();
      authStore.setUser(user);
    }

    return { user, requiresConfirmation };
  }

  static async signOut(): Promise<void> {
    const authStore = useAuthStore.getState();
    const offlineStore = useOfflineStore.getState();

    await supabase.auth.signOut();
    authStore.clearAuth();
    await apolloClient.clearStore();
    offlineStore.clearQueue();
  }

  static async resetPassword(email: string): Promise<void> {
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'colive://reset-password',
    });

    if (error) {
      throw new Error(error.message || 'Failed to send password reset email');
    }
  }

  static async updatePassword(newPassword: string): Promise<void> {
    if (!newPassword || newPassword.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      throw new Error(error.message || 'Failed to update password');
    }
  }

  static async updateProfile(updates: Partial<User>): Promise<User> {
    const authStore = useAuthStore.getState();
    const currentUser = authStore.user;

    if (!currentUser) {
      throw new Error('No user logged in');
    }

    const { data, error } = await supabase.auth.updateUser({
      data: {
        full_name: updates.fullName || currentUser.fullName,
        avatar_url: updates.avatarUrl || currentUser.avatarUrl,
        role: updates.role || currentUser.role,
      },
    });

    if (error) {
      throw new Error(error.message || 'Failed to update profile');
    }

    if (!data.user) {
      throw new Error('No user data returned');
    }

    const updatedUser = mapSupabaseUser(data.user);
    authStore.setUser(updatedUser);

    return updatedUser;
  }

  static async refreshSession(): Promise<void> {
    const authStore = useAuthStore.getState();
    await authStore.refreshSession();
  }

  static async checkSession(): Promise<boolean> {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        return false;
      }

      const expiresAt = data.session.expires_at;
      if (expiresAt && expiresAt * 1000 < Date.now()) {
        await AuthService.refreshSession();
        return true;
      }

      const user = mapSupabaseUser(data.session.user);
      const authStore = useAuthStore.getState();
      authStore.setUser(user);
      authStore.setTokens(data.session.access_token, data.session.refresh_token || '');

      return true;
    } catch {
      return false;
    }
  }
}

export const authService = AuthService;
