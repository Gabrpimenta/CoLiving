import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react-native';
import { AuthService } from '@/services/authService';
import type { AuthStackScreenProps } from '@/navigation/types';

type Props = AuthStackScreenProps<'ResetPassword'>;

export const ResetPasswordScreen = ({ navigation }: Props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      await AuthService.updatePassword(password);
      navigation.navigate('Login');
    } catch (err: any) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack space="xl" className="flex-1 justify-center p-5">
          <Text size="4xl" bold className="mb-8 text-center">
            New Password
          </Text>

          {error && <Text className="text-error-500 mb-4">{error}</Text>}

          <VStack space="md" className="w-full">
            <VStack space="xs" className="w-full">
              <Text size="sm" className="text-typography-600">
                New Password
              </Text>
              <Input
                placeholder="New Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                className="w-full"
              />
            </VStack>

            <VStack space="xs" className="w-full">
              <Text size="sm" className="text-typography-600">
                Confirm Password
              </Text>
              <Input
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
                className="w-full"
              />
            </VStack>
          </VStack>

          <Button
            onPress={handleReset}
            isDisabled={isLoading || !password || !confirmPassword}
            className="w-full"
          >
            <ButtonIcon>
              <Lock size={20} color="white" />
            </ButtonIcon>
            <ButtonText>{isLoading ? 'Resetting...' : 'Reset Password'}</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

