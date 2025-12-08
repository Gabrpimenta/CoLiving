import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  BookingsTab: NavigatorScreenParams<BookingsStackParamList>;
  EventsTab: NavigatorScreenParams<EventsStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  SpaceList: undefined;
  SpaceDetail: { spaceId: string };
  CreateBooking: { spaceId: string; date?: string };
  BookingConfirmation: { bookingId: string };
};

export type BookingsStackParamList = {
  MyBookings: undefined;
  BookingDetail: { bookingId: string };
  RescheduleBooking: { bookingId: string };
  CancelBooking: { bookingId: string };
};

export type EventsStackParamList = {
  EventList: undefined;
  EventDetail: { eventId: string };
  CreateEvent: undefined;
  MyEvents: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  Settings: undefined;
  NotificationPreferences: undefined;
  ResidentDirectory: undefined;
  About: undefined;
};

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  T
>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = NativeStackScreenProps<
  HomeStackParamList,
  T
>;

export type BookingsStackScreenProps<T extends keyof BookingsStackParamList> =
  NativeStackScreenProps<BookingsStackParamList, T>;

export type EventsStackScreenProps<T extends keyof EventsStackParamList> = NativeStackScreenProps<
  EventsStackParamList,
  T
>;

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = NativeStackScreenProps<
  ProfileStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
