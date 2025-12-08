/**
 * User model
 */
export interface User {
  id: string;
  email: string;
  fullName: string | null;
  role: 'resident' | 'admin' | 'staff';
  profileId: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * Authentication State
 */
export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

/**
 * Authentication Actions
 */
export interface AuthActions {
  setUser: (user: User | null) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  refreshSession: () => Promise<void>;
}

/**
 * App Settings State
 */
export type Theme = 'light' | 'dark' | 'system';
export type Language = 'pt-BR' | 'en-US';

export interface NotificationPreferences {
  enabled: boolean;
  bookingReminders: boolean;
  eventReminders: boolean;
  maintenanceUpdates: boolean;
}

export interface OnboardingState {
  completed: boolean;
  currentStep: number;
}

export interface AppState {
  theme: Theme;
  language: Language;
  notifications: NotificationPreferences;
  onboarding: OnboardingState;
  featureFlags: Record<string, boolean>;
}

/**
 * App Settings Actions
 */
export interface AppActions {
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  updateNotificationPreference: (key: keyof NotificationPreferences, value: boolean) => void;
  completeOnboarding: () => void;
  setOnboardingStep: (step: number) => void;
  toggleFeature: (featureName: string) => void;
  setFeatureFlag: (featureName: string, enabled: boolean) => void;
}

/**
 * Pending Mutation Types
 */
export type MutationType =
  | 'CREATE_BOOKING'
  | 'UPDATE_BOOKING'
  | 'CANCEL_BOOKING'
  | 'UPDATE_PROFILE'
  | 'CREATE_EVENT'
  | 'UPDATE_EVENT'
  | 'RSVP_EVENT'
  | 'OTHER';

/**
 * Pending Mutation
 */
export interface PendingMutation {
  id: string;
  type: MutationType;
  operation: string; // GraphQL mutation string
  variables: Record<string, any>;
  timestamp: number;
  retryCount: number;
}

/**
 * Failed Mutation
 */
export interface FailedMutation extends PendingMutation {
  error: string;
  lastAttemptAt: number;
}

/**
 * Sync Error
 */
export interface SyncError {
  id: string;
  mutationId: string;
  message: string;
  timestamp: number;
  resolved: boolean;
}

/**
 * Offline State
 */
export interface OfflineState {
  isOnline: boolean;
  isSyncing: boolean;
  lastSyncedAt: number | null;
  pendingMutations: PendingMutation[];
  failedMutations: FailedMutation[];
  syncErrors: SyncError[];
}

/**
 * Offline Actions
 */
export interface OfflineActions {
  setOnlineStatus: (isOnline: boolean) => void;
  setIsSyncing: (isSyncing: boolean) => void;
  setLastSyncedAt: (timestamp: number) => void;
  addPendingMutation: (
    mutation: Omit<PendingMutation, 'id' | 'timestamp' | 'retryCount'>
  ) => string;
  removePendingMutation: (id: string) => void;
  markMutationFailed: (id: string, error: string) => void;
  retryFailedMutation: (id: string) => void;
  retryAllFailedMutations: () => void;
  clearQueue: () => void;
  addSyncError: (mutationId: string, message: string) => string;
  resolveSyncError: (id: string) => void;
}

/**
 * Combined Store Types
 */
export type AuthStore = AuthState & AuthActions;
export type AppStore = AppState & AppActions;
export type OfflineStore = OfflineState & OfflineActions;
