import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import type { AppState, AppActions, Theme, Language } from '@/types/stores';
import { zustandStorage } from '@/lib/storage';

interface AppStore extends AppState, AppActions {}

const isDev = __DEV__;

const defaultNotificationPreferences = {
  enabled: true,
  bookingReminders: true,
  eventReminders: true,
  maintenanceUpdates: true,
};

const defaultOnboarding = {
  completed: false,
  currentStep: 0,
};

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      immer((set) => ({
        theme: 'system' as Theme,
        language: 'pt-BR' as Language,
        notifications: defaultNotificationPreferences,
        onboarding: defaultOnboarding,
        featureFlags: {},

        setTheme: (theme: Theme) => {
          set((state) => {
            state.theme = theme;
          });
        },

        setLanguage: (language: Language) => {
          set((state) => {
            state.language = language;
          });
        },

        updateNotificationPreference: (key: keyof AppState['notifications'], value: boolean) => {
          set((state) => {
            state.notifications[key] = value;
          });
        },

        completeOnboarding: () => {
          set((state) => {
            state.onboarding.completed = true;
            state.onboarding.currentStep = 0;
          });
        },

        setOnboardingStep: (step: number) => {
          set((state) => {
            state.onboarding.currentStep = step;
          });
        },

        toggleFeature: (featureName: string) => {
          set((state) => {
            state.featureFlags[featureName] = !state.featureFlags[featureName];
          });
        },

        setFeatureFlag: (featureName: string, enabled: boolean) => {
          set((state) => {
            state.featureFlags[featureName] = enabled;
          });
        },
      })),
      {
        name: 'app-storage',
        storage: createJSONStorage(() => zustandStorage),
      }
    ),
    { name: 'AppStore', enabled: isDev }
  )
);
