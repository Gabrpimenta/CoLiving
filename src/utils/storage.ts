import { MMKV } from 'react-native-mmkv';

const storageInstance = new MMKV({
  id: 'coliving-storage',
});

export const storage = storageInstance;

export const mmkvStorage = {
  getItem: (key: string): string | null => {
    const value = storageInstance.getString(key);
    return value ?? null;
  },
  setItem: (key: string, value: string): void => {
    storageInstance.set(key, value);
  },
  removeItem: (key: string): void => {
    storageInstance.delete(key);
  },
};
