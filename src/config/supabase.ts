import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const getEnvVar = (key: string, defaultValue: string): string => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  return defaultValue;
};

const supabaseUrl = getEnvVar(
  'EXPO_PUBLIC_SUPABASE_URL',
  'https://slconxrxinaijyzlxgrm.supabase.co'
);
const supabaseAnonKey = getEnvVar(
  'EXPO_PUBLIC_SUPABASE_ANON_KEY',
  'sb_publishable_fihjzTEpujCcr8qwZD_mVw_18pgCyK-'
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
