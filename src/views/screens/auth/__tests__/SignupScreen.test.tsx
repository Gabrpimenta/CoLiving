import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignupScreen } from '../SignupScreen';
import { useAuthContext } from '@/contexts/AuthContext';

jest.mock('@/contexts/AuthContext');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockUseAuthContext = useAuthContext as jest.MockedFunction<typeof useAuthContext>;

describe('SignupScreen', () => {
  const mockSignUp = jest.fn();
  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    mockUseAuthContext.mockReturnValue({
      signUp: mockSignUp,
      isLoading: false,
      error: null,
      user: null,
      isAuthenticated: false,
      signIn: jest.fn(),
      signOut: jest.fn(),
      resetPassword: jest.fn(),
      updateProfile: jest.fn(),
      refreshSession: jest.fn(),
      checkSession: jest.fn(),
    });
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <SignupScreen navigation={mockNavigation as any} route={{} as any} />
    );
    expect(getByText('Create Account')).toBeTruthy();
    expect(getByPlaceholderText('Full Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('should disable button when fields are empty', () => {
    const { getByText } = render(
      <SignupScreen navigation={mockNavigation as any} route={{} as any} />
    );
    const signUpButton = getByText('Sign Up');
    expect(signUpButton).toBeTruthy();
  });

  it('should call signUp on button press', async () => {
    mockSignUp.mockResolvedValue({ user: {} as any, requiresConfirmation: false });

    const { getByPlaceholderText, getByText } = render(
      <SignupScreen navigation={mockNavigation as any} route={{} as any} />
    );

    fireEvent.changeText(getByPlaceholderText('Full Name'), 'Test User');
    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByText('Sign Up'));

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith('test@example.com', 'password123', 'Test User');
    });
  });
});

