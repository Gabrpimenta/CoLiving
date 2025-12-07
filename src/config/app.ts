const getEnvVar = (key: string, defaultValue: string): string => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] ?? defaultValue;
  }
  return defaultValue;
};

export const AppConfig = {
  name: 'CoLiving',
  version: '1.0.0',
  api: {
    baseUrl: getEnvVar('EXPO_PUBLIC_API_BASE_URL', 'https://api.coliving.com'),
    timeout: 30000,
  },
  sync: {
    interval: 5 * 60 * 1000, // 5 minutes
    retryAttempts: 5,
    retryBackoffMultiplier: 2,
    maxRetryDelay: 60000, // 60 seconds
  },
  security: {
    accessTokenExpiry: 15 * 60 * 1000, // 15 minutes
    refreshTokenExpiry: 7 * 24 * 60 * 60 * 1000, // 7 days
    sessionTimeout: 15 * 60 * 1000, // 15 minutes
  },
  accessibility: {
    minimumTouchTarget: {
      ios: 44, // points
      android: 48, // dp
    },
  },
} as const;
