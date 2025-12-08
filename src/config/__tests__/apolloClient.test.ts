import { apolloClient } from '../apolloClient';

jest.mock('@apollo/client');
jest.mock('../supabase', () => ({
  supabase: {
    auth: {
      getSession: jest.fn(),
    },
  },
}));

describe('apolloClient', () => {
  it('should export apollo client', () => {
    expect(apolloClient).toBeDefined();
    expect(apolloClient.query).toBeDefined();
    expect(apolloClient.mutate).toBeDefined();
  });

  it('should have query method', () => {
    expect(apolloClient.query).toBeDefined();
  });

  it('should have mutate method', () => {
    expect(apolloClient.mutate).toBeDefined();
  });

  it('should have clearStore method', () => {
    expect(apolloClient.clearStore).toBeDefined();
  });
});
