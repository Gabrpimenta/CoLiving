import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import type { HomeStackParamList } from './types';
import { SpaceListScreen } from '@/views/screens/SpaceListScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const PlaceholderScreen = ({ route }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{route?.name || 'Placeholder'}</Text>
  </View>
);

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="SpaceList" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={PlaceholderScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="SpaceList" component={SpaceListScreen} options={{ title: 'Spaces' }} />
      <Stack.Screen
        name="SpaceDetail"
        component={PlaceholderScreen}
        options={{ title: 'Space Details' }}
      />
      <Stack.Screen
        name="CreateBooking"
        component={PlaceholderScreen}
        options={{ title: 'Book Space' }}
      />
      <Stack.Screen
        name="BookingConfirmation"
        component={PlaceholderScreen}
        options={{ title: 'Confirmation' }}
      />
    </Stack.Navigator>
  );
};

