import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import type { ProfileStackParamList } from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const PlaceholderScreen = ({ route }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{route?.name || 'Placeholder'}</Text>
  </View>
);

export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Profile" component={PlaceholderScreen} options={{ title: 'Profile' }} />
      <Stack.Screen
        name="EditProfile"
        component={PlaceholderScreen}
        options={{ title: 'Edit Profile' }}
      />
      <Stack.Screen name="Settings" component={PlaceholderScreen} options={{ title: 'Settings' }} />
      <Stack.Screen
        name="NotificationPreferences"
        component={PlaceholderScreen}
        options={{ title: 'Notifications' }}
      />
      <Stack.Screen
        name="ResidentDirectory"
        component={PlaceholderScreen}
        options={{ title: 'Residents' }}
      />
      <Stack.Screen name="About" component={PlaceholderScreen} options={{ title: 'About' }} />
    </Stack.Navigator>
  );
};
