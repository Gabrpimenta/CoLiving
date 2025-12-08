import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home, Calendar, CalendarDays, User } from 'lucide-react-native';
import type { MainTabParamList } from './types';
import { HomeStack } from './HomeStack';
import { BookingsStack } from './BookingsStack';
import { EventsStack } from './EventsStack';
import { ProfileStack } from './ProfileStack';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size || 24} color={color || '#8E8E93'} />,
        }}
      />
      <Tab.Screen
        name="BookingsTab"
        component={BookingsStack}
        options={{
          title: 'Bookings',
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size || 24} color={color || '#8E8E93'} />
          ),
        }}
      />
      <Tab.Screen
        name="EventsTab"
        component={EventsStack}
        options={{
          title: 'Events',
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <CalendarDays size={size || 24} color={color || '#8E8E93'} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size || 24} color={color || '#8E8E93'} />,
        }}
      />
    </Tab.Navigator>
  );
};
