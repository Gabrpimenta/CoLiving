import { supabase } from '../supabase';

jest.mock('@supabase/supabase-js');
jest.mock('react-native-url-polyfill/auto');
jest.mock('@/lib/storage', () => ({
  mmkvStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  },
}));

describe('supabase config', () => {
  it('should export supabase client', () => {
    expect(supabase).toBeDefined();
    expect(supabase.auth).toBeDefined();
  });
});

