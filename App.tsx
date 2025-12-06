import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { apolloClient } from '@/config/apolloClient';
import { AppNavigator } from '@/navigation/AppNavigator';

/**
 * CoLiving - Main App Component
 *
 * Enterprise-Grade Coliving Community Platform
 */
export default function App(): React.JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
