import React from 'react';
import { View } from 'react-native';

export const VStack = ({ children, ...props }: any) => <View {...props}>{children}</View>;

