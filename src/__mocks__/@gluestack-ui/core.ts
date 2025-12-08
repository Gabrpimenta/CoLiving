import React from 'react';
import { Pressable, Text, View, ActivityIndicator } from 'react-native';

const MockButton: any = React.forwardRef(({ children, ...rest }: any, ref: any) =>
  React.createElement(Pressable, { ref, ...rest }, children)
);

MockButton.Text = Text;
MockButton.Group = View;
MockButton.Spinner = ActivityIndicator;
MockButton.Icon = View;

export const createButton = jest.fn(() => MockButton);

export const createIcon = jest.fn(() => jest.fn());

const MockPressable: any = Pressable;
Object.assign(MockPressable, { Root: Pressable });

export const createPressable = jest.fn(() => MockPressable);

export const PrimitiveIcon = jest.fn(({ children }: any) => children);
export const UIIcon = View;

