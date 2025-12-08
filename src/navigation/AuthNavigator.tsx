import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { AuthStackParamList } from './types';
import { LoginScreen } from '@/views/screens/auth/LoginScreen';
import { SignupScreen } from '@/views/screens/auth/SignupScreen';
import { ForgotPasswordScreen } from '@/views/screens/auth/ForgotPasswordScreen';
import { ResetPasswordScreen } from '@/views/screens/auth/ResetPasswordScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

