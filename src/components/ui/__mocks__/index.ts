import React from 'react';
import { View, Text as RNText, Pressable as RNPressable, ActivityIndicator } from 'react-native';

export const VStack = ({ children, ...props }: any) => <View {...props}>{children}</View>;
export const HStack = ({ children, ...props }: any) => <View {...props}>{children}</View>;
export const Text = ({ children, ...props }: any) => <RNText {...props}>{children}</RNText>;
export const Button = ({ children, onPress, ...props }: any) => (
  <RNPressable onPress={onPress} {...props}>
    {children}
  </RNPressable>
);
export const ButtonText = ({ children, ...props }: any) => <RNText {...props}>{children}</RNText>;
export const ButtonIcon = ({ children, ...props }: any) => <View {...props}>{children}</View>;
export const Input = (props: any) => <RNText {...props} />;
export const Card = ({ children, ...props }: any) => <View {...props}>{children}</View>;
export const Badge = ({ children, ...props }: any) => <View {...props}>{children}</View>;
export const BadgeText = ({ children, ...props }: any) => <RNText {...props}>{children}</RNText>;
export const Spinner = (props: any) => <ActivityIndicator {...props} />;
export const Pressable = ({ children, onPress, ...props }: any) => (
  <RNPressable onPress={onPress} {...props}>
    {children}
  </RNPressable>
);

