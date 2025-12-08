export const ApolloClient = jest.fn().mockImplementation(() => ({
  query: jest.fn(),
  mutate: jest.fn(),
  clearStore: jest.fn(),
}));

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => children;

const ApolloLinkClass = jest.fn().mockImplementation((handler) => handler);
ApolloLinkClass.from = jest.fn((links) => links[0]);

export const ApolloLink = ApolloLinkClass;

export const HttpLink = jest.fn().mockImplementation(() => ({}));

export const InMemoryCache = jest.fn().mockImplementation(() => ({}));

export const useQuery = jest.fn();
export const useMutation = jest.fn();
export const gql = jest.fn((query) => query);

export const Observable = jest.fn().mockImplementation((subscriber) => {
  const observer = {
    next: jest.fn(),
    error: jest.fn(),
    complete: jest.fn(),
  };
  const subscription = {
    unsubscribe: jest.fn(),
  };
  subscriber(observer);
  return subscription;
});

