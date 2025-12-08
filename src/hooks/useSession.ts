import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useAuthStore } from '@/stores/authStore';
import { AuthService } from '@/services/authService';
import NetInfo from '@react-native-community/netinfo';

const SESSION_CHECK_INTERVAL = 5 * 60 * 1000;

export const useSession = () => {
  const { accessToken, refreshSession } = useAuthStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const appStateRef = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    const checkInitialSession = async () => {
      await AuthService.checkSession();
    };
    checkInitialSession();

    intervalRef.current = setInterval(async () => {
      const isConnected = (await NetInfo.fetch()).isConnected;

      if (isConnected && accessToken) {
        try {
          await refreshSession();
        } catch (error) {
          console.warn('Session refresh failed:', error);
        }
      }
    }, SESSION_CHECK_INTERVAL);

    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (appStateRef.current.match(/inactive|background/) && nextAppState === 'active') {
        const isConnected = (await NetInfo.fetch()).isConnected;
        if (isConnected) {
          try {
            await AuthService.checkSession();
          } catch (error) {
            console.warn('Session check failed on foreground:', error);
          }
        }
      }
      appStateRef.current = nextAppState;
    });

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      subscription.remove();
    };
  }, [accessToken, refreshSession]);

  return {};
};
