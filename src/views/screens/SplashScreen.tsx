import React from 'react';
import { ActivityIndicator } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';

export const SplashScreen = () => {
  return (
    <VStack space="lg" className="flex-1 items-center justify-center bg-background-0">
      <Text size="4xl" bold>
        CoLiving
      </Text>
      <ActivityIndicator size="large" color="#007AFF" />
    </VStack>
  );
};

