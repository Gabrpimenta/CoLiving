import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react-native';
import { useAuthContext } from '@/contexts/AuthContext';
import type { AuthStackScreenProps } from '@/navigation/types';

type Props = AuthStackScreenProps<'Login'>;

export const LoginScreen = ({ navigation }: Props) => {
  const { signIn, isLoading, error } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn(email, password);
    } catch (err) {
      console.error('Login failed:', err);
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
            Welcome Back
          </Text>

          {error && <Text className="text-error-500 mb-4">{error}</Text>}

          <VStack space="md" className="w-full">
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

            <VStack space="xs" className="w-full">
              <Text size="sm" className="text-typography-600">
                Password
              </Text>
              <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
                className="w-full"
              />
            </VStack>
          </VStack>

          <Button
            onPress={handleLogin}
            isDisabled={isLoading || !email || !password}
            className="w-full"
          >
            <ButtonIcon>
              <Lock size={20} color="white" />
            </ButtonIcon>
            <ButtonText>{isLoading ? 'Signing in...' : 'Sign In'}</ButtonText>
          </Button>

          <Button variant="link" onPress={() => navigation.navigate('Signup')}>
            <ButtonText>Don't have an account? Sign up</ButtonText>
          </Button>

          <Button variant="link" onPress={() => navigation.navigate('ForgotPassword')}>
            <ButtonText>Forgot password?</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
