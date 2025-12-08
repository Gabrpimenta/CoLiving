import { MMKV } from 'react-native-mmkv';
import * as Crypto from 'expo-crypto';

const generalStorage = new MMKV({
  id: 'coliving-storage',
  encryptionKey: undefined,
});

const getEncryptionKey = (): string => {
  const KEY_STORAGE = 'mmkv_encryption_key';
  const existingKey = generalStorage.getString(KEY_STORAGE);

  if (existingKey) {
    return existingKey;
  }

  const newKey = Crypto.randomUUID();
  generalStorage.set(KEY_STORAGE, newKey);
  return newKey;
};

export const storage = generalStorage;

export const secureStorage = new MMKV({
  id: 'coliving-secure-storage',
  encryptionKey: getEncryptionKey(),
});

export const cacheStorage = new MMKV({
  id: 'coliving-cache-storage',
  encryptionKey: undefined,
});

export const clearCache = (): void => {
  cacheStorage.clearAll();
};

export const getStorageSize = (): { storage: number; secure: number; cache: number } => {
  return {
    storage: storage.getAllKeys().length,
    secure: secureStorage.getAllKeys().length,
    cache: cacheStorage.getAllKeys().length,
  };
};

export const migrateStorage = (
  oldKey: string,
  newKey: string,
  targetStorage: MMKV = storage
): void => {
  const value = storage.getString(oldKey);
  if (value) {
    targetStorage.set(newKey, value);
    storage.delete(oldKey);
  }
};
