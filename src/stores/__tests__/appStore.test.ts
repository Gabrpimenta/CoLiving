import { renderHook, act } from '@testing-library/react-hooks';
import { useAppStore } from '../appStore';

describe('appStore', () => {
  beforeEach(() => {
    useAppStore.setState({
      theme: 'system',
      language: 'pt-BR',
      notifications: {
        enabled: true,
        bookingReminders: true,
        eventReminders: true,
        maintenanceUpdates: true,
      },
      onboarding: {
        completed: false,
        currentStep: 0,
      },
      featureFlags: {},
    });
  });

  describe('Basic Operations', () => {
    it('should initialize with default values', () => {
      const { result } = renderHook(() => useAppStore());
      expect(result.current.theme).toBe('system');
      expect(result.current.language).toBe('pt-BR');
      expect(result.current.notifications.enabled).toBe(true);
      expect(result.current.onboarding.completed).toBe(false);
    });

    it('should set theme', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setTheme('dark');
      });

      expect(result.current.theme).toBe('dark');
    });

    it('should set language', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setLanguage('en-US');
      });

      expect(result.current.language).toBe('en-US');
    });

    it('should update notification preferences', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.updateNotificationPreference('enabled', false);
      });

      expect(result.current.notifications.enabled).toBe(false);
    });

    it('should set onboarding step', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setOnboardingStep(1);
      });

      expect(result.current.onboarding.currentStep).toBe(1);
    });

    it('should complete onboarding', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setOnboardingStep(2);
        result.current.completeOnboarding();
      });

      expect(result.current.onboarding.completed).toBe(true);
      expect(result.current.onboarding.currentStep).toBe(0);
    });

    it('should toggle feature flag', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.toggleFeature('newFeature');
      });

      expect(result.current.featureFlags.newFeature).toBe(true);

      act(() => {
        result.current.toggleFeature('newFeature');
      });

      expect(result.current.featureFlags.newFeature).toBe(false);
    });

    it('should set feature flag', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setFeatureFlag('testFeature', true);
      });

      expect(result.current.featureFlags.testFeature).toBe(true);
    });
  });

  describe('Branch Coverage - All Notification Types', () => {
    it('should toggle all notification types', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.updateNotificationPreference('enabled', false);
      });
      expect(result.current.notifications.enabled).toBe(false);

      act(() => {
        result.current.updateNotificationPreference('bookingReminders', false);
      });
      expect(result.current.notifications.bookingReminders).toBe(false);

      act(() => {
        result.current.updateNotificationPreference('eventReminders', false);
      });
      expect(result.current.notifications.eventReminders).toBe(false);

      act(() => {
        result.current.updateNotificationPreference('maintenanceUpdates', false);
      });
      expect(result.current.notifications.maintenanceUpdates).toBe(false);
    });

    it('should set all theme options', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setTheme('light');
      });
      expect(result.current.theme).toBe('light');

      act(() => {
        result.current.setTheme('dark');
      });
      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.setTheme('system');
      });
      expect(result.current.theme).toBe('system');
    });

    it('should set different languages', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setLanguage('en-US');
      });
      expect(result.current.language).toBe('en-US');

      act(() => {
        result.current.setLanguage('es-ES');
      });
      expect(result.current.language).toBe('es-ES');

      act(() => {
        result.current.setLanguage('pt-BR');
      });
      expect(result.current.language).toBe('pt-BR');
    });

    it('should manage onboarding steps', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setOnboardingStep(1);
      });
      expect(result.current.onboarding.currentStep).toBe(1);

      act(() => {
        result.current.setOnboardingStep(2);
      });
      expect(result.current.onboarding.currentStep).toBe(2);

      act(() => {
        result.current.completeOnboarding();
      });
      expect(result.current.onboarding.completed).toBe(true);
      expect(result.current.onboarding.currentStep).toBe(0);
    });

    it('should toggle feature flags multiple times', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.toggleFeature('feature1');
      });
      expect(result.current.featureFlags.feature1).toBe(true);

      act(() => {
        result.current.toggleFeature('feature1');
      });
      expect(result.current.featureFlags.feature1).toBe(false);

      act(() => {
        result.current.toggleFeature('feature1');
      });
      expect(result.current.featureFlags.feature1).toBe(true);
    });

    it('should set multiple feature flags', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setFeatureFlag('feature1', true);
        result.current.setFeatureFlag('feature2', false);
        result.current.setFeatureFlag('feature3', true);
      });

      expect(result.current.featureFlags).toEqual({
        feature1: true,
        feature2: false,
        feature3: true,
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle notification preference updates correctly', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.updateNotificationPreference('enabled', false);
        result.current.updateNotificationPreference('bookingReminders', true);
      });

      expect(result.current.notifications.enabled).toBe(false);
      expect(result.current.notifications.bookingReminders).toBe(true);
    });

    it('should handle onboarding completion at any step', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.setOnboardingStep(5);
        result.current.completeOnboarding();
      });

      expect(result.current.onboarding.completed).toBe(true);
      expect(result.current.onboarding.currentStep).toBe(0);
    });

    it('should handle feature flag toggle for undefined flag', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        result.current.toggleFeature('undefinedFeature');
      });

      expect(result.current.featureFlags.undefinedFeature).toBe(true);
    });
  });
});
