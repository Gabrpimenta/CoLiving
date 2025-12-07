import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, Observable } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import 'react-native-url-polyfill/auto';
import { supabase } from './supabase';

const getEnvVar = (key: string, defaultValue: string): string => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] ?? defaultValue;
  }
  return defaultValue;
};

const SUPABASE_URL = getEnvVar(
  'EXPO_PUBLIC_SUPABASE_URL',
  'https://slconxrxinaijyzlxgrm.supabase.co'
);
const SUPABASE_ANON_KEY = getEnvVar(
  'EXPO_PUBLIC_SUPABASE_ANON_KEY',
  'sb_publishable_fihjzTEpujCcr8qwZD_mVw_18pgCyK-'
);

const authLink = new ApolloLink((operation, forward) => {
  return new Observable((observer) => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        const token = session?.access_token;

        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...headers,
            apiKey: SUPABASE_ANON_KEY,
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }));
      })
      .catch(() => {
        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...headers,
            apiKey: SUPABASE_ANON_KEY,
          },
        }));
      })
      .finally(() => {
        const subscription = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });

        return () => subscription.unsubscribe();
      });
  });
});

const httpLink = new HttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        spacesCollection: relayStylePagination(),
        bookingsCollection: relayStylePagination(),
        eventsCollection: relayStylePagination(),
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});
