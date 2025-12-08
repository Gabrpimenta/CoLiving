import './global.css';
import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { apolloClient } from '@/config/apolloClient';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { AppNavigator } from '@/navigation/AppNavigator';

export default function App(): React.JSX.Element {
  return (
    <GluestackUIProvider>
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <AppNavigator />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </ApolloProvider>
    </GluestackUIProvider>
  );
}
