import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User } from 'lucide-react-native';
import { useAuthContext } from '@/contexts/AuthContext';
import type { AuthStackScreenProps } from '@/navigation/types';

type Props = AuthStackScreenProps<'Signup'>;

export const SignupScreen = ({ navigation }: Props) => {
  const { signUp, isLoading, error } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSignup = async () => {
    try {
      await signUp(email, password, fullName);
    } catch (err) {
      console.error('Signup failed:', err);
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
            Create Account
          </Text>

          {error && <Text className="text-error-500 mb-4">{error}</Text>}

          <VStack space="md" className="w-full">
            <VStack space="xs" className="w-full">
              <Text size="sm" className="text-typography-600">
                Full Name
              </Text>
              <Input
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
                className="w-full"
              />
            </VStack>

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
            onPress={handleSignup}
            isDisabled={isLoading || !email || !password || !fullName}
            className="w-full"
          >
            <ButtonIcon>
              <User size={20} color="white" />
            </ButtonIcon>
            <ButtonText>{isLoading ? 'Creating account...' : 'Sign Up'}</ButtonText>
          </Button>

          <Button variant="link" onPress={() => navigation.navigate('Login')}>
            <ButtonText>Already have an account? Sign in</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

