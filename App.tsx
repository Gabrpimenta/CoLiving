import './global.css';
import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { apolloClient } from '@/config/apolloClient';
import { AppNavigator } from '@/navigation/AppNavigator';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

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
