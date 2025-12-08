import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react-native';
import { useAuthContext } from '@/contexts/AuthContext';
import type { AuthStackScreenProps } from '@/navigation/types';

type Props = AuthStackScreenProps<'ForgotPassword'>;

export const ForgotPasswordScreen = ({ navigation }: Props) => {
  const { resetPassword, isLoading, error } = useAuthContext();
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    try {
      await resetPassword(email);
      navigation.navigate('Login');
    } catch (err) {
      console.error('Reset password failed:', err);
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
            Reset Password
          </Text>

          <Text className="mb-4 text-center">
            Enter your email address and we'll send you a link to reset your password.
          </Text>

          {error && <Text className="text-error-500 mb-4">{error}</Text>}

          <VStack space="xs" className="w-full">
            <Text size="sm" className="text-typography-600">
              Email
            </Text>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              className="w-full"
            />
          </VStack>

          <Button onPress={handleReset} isDisabled={isLoading || !email} className="w-full">
            <ButtonIcon>
              <Mail size={20} color="white" />
            </ButtonIcon>
            <ButtonText>{isLoading ? 'Sending...' : 'Send Reset Link'}</ButtonText>
            <ButtonIcon>
              <ArrowRight size={20} color="white" />
            </ButtonIcon>
          </Button>

          <Button variant="link" onPress={() => navigation.navigate('Login')}>
            <ButtonText>Back to Sign In</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

