import { storage, secureStorage, cacheStorage, clearCache, getStorageSize, migrateStorage } from '../mmkv';

jest.mock('react-native-mmkv');
jest.mock('expo-crypto', () => ({
  randomUUID: jest.fn(() => 'mock-uuid-123'),
}));

describe('mmkv', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should export storage instances', () => {
    expect(storage).toBeDefined();
    expect(secureStorage).toBeDefined();
    expect(cacheStorage).toBeDefined();
  });

  it('should clear cache', () => {
    clearCache();
    expect(cacheStorage.clearAll).toBeDefined();
  });

  it('should get storage sizes', () => {
    const sizes = getStorageSize();
    expect(sizes).toHaveProperty('storage');
    expect(sizes).toHaveProperty('secure');
    expect(sizes).toHaveProperty('cache');
  });

  it('should migrate storage with default target', () => {
    migrateStorage('old-key', 'new-key');
    // Should not throw
  });
});

