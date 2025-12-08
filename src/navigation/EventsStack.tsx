import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import type { EventsStackParamList } from './types';

const Stack = createNativeStackNavigator<EventsStackParamList>();

const PlaceholderScreen = ({ route }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{route?.name || 'Placeholder'}</Text>
  </View>
);

export const EventsStack = () => {
  return (
    <Stack.Navigator initialRouteName="EventList" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="EventList" component={PlaceholderScreen} options={{ title: 'Events' }} />
      <Stack.Screen
        name="EventDetail"
        component={PlaceholderScreen}
        options={{ title: 'Event Details' }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={PlaceholderScreen}
        options={{ title: 'Create Event' }}
      />
      <Stack.Screen
        name="MyEvents"
        component={PlaceholderScreen}
        options={{ title: 'My Events' }}
      />
    </Stack.Navigator>
  );
};

