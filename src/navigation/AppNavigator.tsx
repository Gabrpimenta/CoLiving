import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SpaceListScreen } from '@/views/screens/SpaceListScreen';
import { Colors } from '@/constants/colors';

export type RootStackParamList = {
  Home: undefined;
  SpaceList: undefined;
  SpaceDetail: { spaceId: string };
  Booking: { spaceId: string };
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PlaceholderScreen = ({ route }: { route: { name: string } }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{route.name} Screen</Text>
    <Text style={styles.subtext}>Coming soon...</Text>
  </View>
);

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SpaceList"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.textInverse,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="SpaceList"
          component={SpaceListScreen}
          options={{ title: 'CoLiving - Spaces' }}
        />
        <Stack.Screen name="Home" component={PlaceholderScreen} options={{ title: 'CoLiving' }} />
        <Stack.Screen
          name="SpaceDetail"
          component={PlaceholderScreen}
          options={{ title: 'Space Details' }}
        />
        <Stack.Screen
          name="Booking"
          component={PlaceholderScreen}
          options={{ title: 'Book Space' }}
        />
        <Stack.Screen name="Profile" component={PlaceholderScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.text,
  },
  subtext: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
});
