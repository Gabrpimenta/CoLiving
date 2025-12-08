// Jest setup file
import '@testing-library/jest-native/extend-expect';

// Mock React Native modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock MMKV
jest.mock('react-native-mmkv', () => ({
  MMKV: jest.fn().mockImplementation(() => ({
    getString: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
    clearAll: jest.fn(),
    getAllKeys: jest.fn(() => []),
  })),
}));

// Mock expo-crypto
jest.mock('expo-crypto', () => ({
  randomUUID: jest.fn(() => 'mock-uuid-123'),
}));

// Mock @react-native-community/netinfo
jest.mock('@react-native-community/netinfo', () => ({
  default: {
    fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
    addEventListener: jest.fn(() => jest.fn()),
  },
}));

// Mock nativewind cssInterop
jest.mock('nativewind', () => ({
  cssInterop: jest.fn(),
}));

// Mock Apollo Client
jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(() => ({
    data: undefined,
    loading: false,
    error: undefined,
  })),
  useMutation: jest.fn(() => [jest.fn(), { loading: false, error: undefined }]),
  ApolloProvider: ({ children }) => children,
}));

// Silence console warnings in tests (optional)
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

