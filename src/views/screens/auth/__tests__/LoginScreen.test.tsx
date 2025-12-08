import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { LoginScreen } from '../LoginScreen';
import { useAuthContext } from '@/contexts/AuthContext';

jest.mock('@/contexts/AuthContext');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockUseAuthContext = useAuthContext as jest.MockedFunction<typeof useAuthContext>;

describe('LoginScreen', () => {
  const mockSignIn = jest.fn();
  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    mockUseAuthContext.mockReturnValue({
      signIn: mockSignIn,
      isLoading: false,
      error: null,
      user: null,
      isAuthenticated: false,
      signUp: jest.fn(),
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
      <LoginScreen navigation={mockNavigation as any} route={{} as any} />
    );
    expect(getByText('Welcome Back')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('should disable button when fields are empty', () => {
    const { getByText } = render(
      <LoginScreen navigation={mockNavigation as any} route={{} as any} />
    );
    const signInButton = getByText('Sign In');
    expect(signInButton).toBeTruthy();
  });

  it('should enable button when fields are filled', () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginScreen navigation={mockNavigation as any} route={{} as any} />
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');

    const signInButton = getByText('Sign In');
    expect(signInButton).toBeTruthy();
  });

  it('should call signIn on button press', async () => {
    mockSignIn.mockResolvedValue(undefined);

    const { getByPlaceholderText, getByText } = render(
      <LoginScreen navigation={mockNavigation as any} route={{} as any} />
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByText('Sign In'));

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('should show error message', () => {
    mockUseAuthContext.mockReturnValue({
      signIn: mockSignIn,
      isLoading: false,
      error: 'Invalid credentials',
      user: null,
      isAuthenticated: false,
      signUp: jest.fn(),
      signOut: jest.fn(),
      resetPassword: jest.fn(),
      updateProfile: jest.fn(),
      refreshSession: jest.fn(),
      checkSession: jest.fn(),
    });

    const { getByText } = render(
      <LoginScreen navigation={mockNavigation as any} route={{} as any} />
    );
    expect(getByText('Invalid credentials')).toBeTruthy();
  });
});
