import {
  zustandStorage,
  zustandSecureStorage,
  apolloCacheStorage,
  asyncStoragePolyfill,
  mmkvStorage,
} from '../storage';
import { storage, secureStorage, cacheStorage } from '../mmkv';

jest.mock('../mmkv');

const mockStorage = storage as jest.Mocked<typeof storage>;
const mockSecureStorage = secureStorage as jest.Mocked<typeof secureStorage>;
const mockCacheStorage = cacheStorage as jest.Mocked<typeof cacheStorage>;

describe('storage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('zustandStorage', () => {
    it('should get item', () => {
      mockStorage.getString.mockReturnValue('test-value');
      const value = zustandStorage.getItem('test-key');
      expect(value).toBe('test-value');
      expect(mockStorage.getString).toHaveBeenCalledWith('test-key');
    });

    it('should return null if item does not exist', () => {
      mockStorage.getString.mockReturnValue(undefined);
      const value = zustandStorage.getItem('test-key');
      expect(value).toBeNull();
    });

    it('should return null for undefined value', () => {
      mockStorage.getString.mockReturnValue(undefined);
      const value = zustandStorage.getItem('undefined-key');
      expect(value).toBeNull();
    });

    it('should set item', () => {
      zustandStorage.setItem('test-key', 'test-value');
      expect(mockStorage.set).toHaveBeenCalledWith('test-key', 'test-value');
    });

    it('should remove item', () => {
      zustandStorage.removeItem('test-key');
      expect(mockStorage.delete).toHaveBeenCalledWith('test-key');
    });
  });

  describe('zustandSecureStorage', () => {
    it('should get item from secure storage', () => {
      mockSecureStorage.getString.mockReturnValue('secure-value');
      const value = zustandSecureStorage.getItem('test-key');
      expect(value).toBe('secure-value');
    });

    it('should return null for undefined value', () => {
      mockSecureStorage.getString.mockReturnValue(undefined);
      const value = zustandSecureStorage.getItem('undefined-key');
      expect(value).toBeNull();
    });

    it('should set item to secure storage', () => {
      zustandSecureStorage.setItem('test-key', 'secure-value');
      expect(mockSecureStorage.set).toHaveBeenCalledWith('test-key', 'secure-value');
    });

    it('should remove item from secure storage', () => {
      zustandSecureStorage.removeItem('test-key');
      expect(mockSecureStorage.delete).toHaveBeenCalledWith('test-key');
    });
  });

  describe('apolloCacheStorage', () => {
    it('should get item from cache', async () => {
      mockCacheStorage.getString.mockReturnValue('cached-value');
      const value = await apolloCacheStorage.getItem('test-key');
      expect(value).toBe('cached-value');
    });

    it('should return null for non-existent cache key', async () => {
      mockCacheStorage.getString.mockReturnValue(undefined);
      const value = await apolloCacheStorage.getItem('cache-key');
      expect(value).toBeNull();
    });

    it('should handle undefined return from cache', async () => {
      mockCacheStorage.getString.mockReturnValue(undefined);
      const value = await apolloCacheStorage.getItem('undefined-key');
      expect(value).toBeNull();
    });

    it('should set item to cache', async () => {
      await apolloCacheStorage.setItem('test-key', 'cached-value');
      expect(mockCacheStorage.set).toHaveBeenCalledWith('test-key', 'cached-value');
    });

    it('should remove item from cache', async () => {
      await apolloCacheStorage.removeItem('test-key');
      expect(mockCacheStorage.delete).toHaveBeenCalledWith('test-key');
    });
  });

  describe('asyncStoragePolyfill', () => {
    it('should get item', async () => {
      mockStorage.getString.mockReturnValue('async-value');
      const value = await asyncStoragePolyfill.getItem('test-key');
      expect(value).toBe('async-value');
    });

    it('should set item', async () => {
      await asyncStoragePolyfill.setItem('test-key', 'async-value');
      expect(mockStorage.set).toHaveBeenCalledWith('test-key', 'async-value');
    });

    it('should remove item', async () => {
      await asyncStoragePolyfill.removeItem('test-key');
      expect(mockStorage.delete).toHaveBeenCalledWith('test-key');
    });

    it('should get all keys', async () => {
      mockStorage.getAllKeys.mockReturnValue(['key1', 'key2']);
      const keys = await asyncStoragePolyfill.getAllKeys();
      expect(keys).toEqual(['key1', 'key2']);
    });

    it('should handle getAllKeys with empty storage', async () => {
      mockStorage.getAllKeys.mockReturnValue([]);
      const keys = await asyncStoragePolyfill.getAllKeys();
      expect(keys).toEqual([]);
    });

    it('should handle getAllKeys with multiple keys', async () => {
      mockStorage.getAllKeys.mockReturnValue(['key1', 'key2', 'key3']);
      const keys = await asyncStoragePolyfill.getAllKeys();
      expect(keys).toEqual(['key1', 'key2', 'key3']);
    });

    it('should multi get', async () => {
      mockStorage.getString.mockImplementation((key) => {
        if (key === 'key1') return 'value1';
        if (key === 'key2') return 'value2';
        return undefined;
      });

      const result = await asyncStoragePolyfill.multiGet(['key1', 'key2']);
      expect(result).toEqual([
        ['key1', 'value1'],
        ['key2', 'value2'],
      ]);
    });

    it('should return null for non-existent key in multiGet', async () => {
      mockStorage.getString.mockReturnValue(undefined);

      const result = await asyncStoragePolyfill.multiGet(['key1', 'key2']);

      expect(result).toEqual([
        ['key1', null],
        ['key2', null],
      ]);
    });

    it('should handle mixed existing and non-existing keys', async () => {
      mockStorage.getString.mockImplementation((key) => {
        if (key === 'key1') return 'value1';
        return undefined;
      });

      const result = await asyncStoragePolyfill.multiGet(['key1', 'key2', 'key3']);

      expect(result).toEqual([
        ['key1', 'value1'],
        ['key2', null],
        ['key3', null],
      ]);
    });

    it('should multi set', async () => {
      await asyncStoragePolyfill.multiSet([
        ['key1', 'value1'],
        ['key2', 'value2'],
      ]);

      expect(mockStorage.set).toHaveBeenCalledWith('key1', 'value1');
      expect(mockStorage.set).toHaveBeenCalledWith('key2', 'value2');
    });

    it('should handle empty multiSet', async () => {
      await asyncStoragePolyfill.multiSet([]);
      expect(mockStorage.set).not.toHaveBeenCalled();
    });

    it('should multi remove', async () => {
      await asyncStoragePolyfill.multiRemove(['key1', 'key2']);
      expect(mockStorage.delete).toHaveBeenCalledWith('key1');
      expect(mockStorage.delete).toHaveBeenCalledWith('key2');
    });

    it('should handle empty multiRemove', async () => {
      await asyncStoragePolyfill.multiRemove([]);
      expect(mockStorage.delete).not.toHaveBeenCalled();
    });

    it('should clear all', async () => {
      await asyncStoragePolyfill.clear();
      expect(mockStorage.clearAll).toHaveBeenCalled();
    });
  });

  describe('mmkvStorage', () => {
    it('should get item from secure storage', () => {
      mockSecureStorage.getString.mockReturnValue('mmkv-value');
      const value = mmkvStorage.getItem('test-key');
      expect(value).toBe('mmkv-value');
    });

    it('should return null for non-existent secure key', () => {
      mockSecureStorage.getString.mockReturnValue(undefined);
      const value = mmkvStorage.getItem('secure-key');
      expect(value).toBeNull();
    });

    it('should set item to secure storage', () => {
      mmkvStorage.setItem('test-key', 'mmkv-value');
      expect(mockSecureStorage.set).toHaveBeenCalledWith('test-key', 'mmkv-value');
    });

    it('should remove item from secure storage', () => {
      mmkvStorage.removeItem('test-key');
      expect(mockSecureStorage.delete).toHaveBeenCalledWith('test-key');
    });
  });

  describe('operations on all storage types', () => {
    it('should set and get from zustandStorage', () => {
      mockStorage.getString.mockReturnValue('test-value');
      zustandStorage.setItem('key', 'test-value');
      const value = zustandStorage.getItem('key');
      
      expect(mockStorage.set).toHaveBeenCalledWith('key', 'test-value');
      expect(value).toBe('test-value');
    });

    it('should set and get from zustandSecureStorage', () => {
      mockSecureStorage.getString.mockReturnValue('secure-value');
      zustandSecureStorage.setItem('key', 'secure-value');
      const value = zustandSecureStorage.getItem('key');
      
      expect(mockSecureStorage.set).toHaveBeenCalledWith('key', 'secure-value');
      expect(value).toBe('secure-value');
    });

    it('should set and get from apolloCacheStorage', async () => {
      mockCacheStorage.getString.mockReturnValue('cache-value');
      await apolloCacheStorage.setItem('key', 'cache-value');
      const value = await apolloCacheStorage.getItem('key');
      
      expect(mockCacheStorage.set).toHaveBeenCalledWith('key', 'cache-value');
      expect(value).toBe('cache-value');
    });
  });
});
