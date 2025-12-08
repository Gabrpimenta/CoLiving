import { StateStorage } from 'zustand/middleware';
import { storage, secureStorage, cacheStorage } from './mmkv';

export const zustandStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const value = storage.getString(name);
    return value ?? null;
  },
  setItem: (name: string, value: string): void => {
    storage.set(name, value);
  },
  removeItem: (name: string): void => {
    storage.delete(name);
  },
};

export const zustandSecureStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const value = secureStorage.getString(name);
    return value ?? null;
  },
  setItem: (name: string, value: string): void => {
    secureStorage.set(name, value);
  },
  removeItem: (name: string): void => {
    secureStorage.delete(name);
  },
};

export const apolloCacheStorage = {
  getItem: (key: string): Promise<string | null> => {
    return Promise.resolve(cacheStorage.getString(key) ?? null);
  },
  setItem: (key: string, value: string): Promise<void> => {
    return Promise.resolve(cacheStorage.set(key, value));
  },
  removeItem: (key: string): Promise<void> => {
    return Promise.resolve(cacheStorage.delete(key));
  },
};

export const asyncStoragePolyfill = {
  getItem: (key: string): Promise<string | null> => {
    return Promise.resolve(storage.getString(key) ?? null);
  },
  setItem: (key: string, value: string): Promise<void> => {
    storage.set(key, value);
    return Promise.resolve();
  },
  removeItem: (key: string): Promise<void> => {
    storage.delete(key);
    return Promise.resolve();
  },
  getAllKeys: (): Promise<string[]> => {
    return Promise.resolve(storage.getAllKeys());
  },
  multiGet: (keys: string[]): Promise<Array<[string, string | null]>> => {
    const result: Array<[string, string | null]> = keys.map((key) => [
      key,
      storage.getString(key) ?? null,
    ]);
    return Promise.resolve(result);
  },
  multiSet: (keyValuePairs: Array<[string, string]>): Promise<void> => {
    keyValuePairs.forEach(([key, value]) => {
      storage.set(key, value);
    });
    return Promise.resolve();
  },
  multiRemove: (keys: string[]): Promise<void> => {
    keys.forEach((key) => {
      storage.delete(key);
    });
    return Promise.resolve();
  },
  clear: (): Promise<void> => {
    storage.clearAll();
    return Promise.resolve();
  },
};

export const mmkvStorage = {
  getItem: (key: string): string | null => {
    return secureStorage.getString(key) ?? null;
  },
  setItem: (key: string, value: string): void => {
    secureStorage.set(key, value);
  },
  removeItem: (key: string): void => {
    secureStorage.delete(key);
  },
};
