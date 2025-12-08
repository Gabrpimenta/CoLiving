export default {
  fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
  addEventListener: jest.fn(() => jest.fn()),
  getCurrentConnectivity: jest.fn(() => Promise.resolve({ isConnected: true })),
};

