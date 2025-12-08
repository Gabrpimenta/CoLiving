import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import type { BookingsStackParamList } from './types';

const Stack = createNativeStackNavigator<BookingsStackParamList>();

const PlaceholderScreen = ({ route }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{route?.name || 'Placeholder'}</Text>
  </View>
);

export const BookingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="MyBookings" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="MyBookings" component={PlaceholderScreen} options={{ title: 'My Bookings' }} />
      <Stack.Screen name="BookingDetail" component={PlaceholderScreen} options={{ title: 'Booking Details' }} />
      <Stack.Screen name="RescheduleBooking" component={PlaceholderScreen} options={{ title: 'Reschedule' }} />
      <Stack.Screen name="CancelBooking" component={PlaceholderScreen} options={{ title: 'Cancel Booking' }} />
    </Stack.Navigator>
  );
};

