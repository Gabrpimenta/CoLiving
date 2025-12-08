import React from 'react';
import { Pressable, Text, View, ActivityIndicator } from 'react-native';

export const Button = ({ children, onPress, ...props }: any) => (
  <Pressable onPress={onPress} {...props}>
    {children}
  </Pressable>
);

export const ButtonText = ({ children, ...props }: any) => <Text {...props}>{children}</Text>;
export const ButtonIcon = ({ children, ...props }: any) => <View {...props}>{children}</View>;
export const ButtonSpinner = (props: any) => <ActivityIndicator {...props} />;
export const ButtonGroup = ({ children, ...props }: any) => <View {...props}>{children}</View>;

