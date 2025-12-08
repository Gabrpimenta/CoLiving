import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import type { RootStackParamList } from './types';
import { SplashScreen } from '@/views/screens/SplashScreen';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Main' : 'Auth'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
