import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ForgotPasswordScreen } from '../ForgotPasswordScreen';
import { useAuthContext } from '@/contexts/AuthContext';

jest.mock('@/contexts/AuthContext');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockUseAuthContext = useAuthContext as jest.MockedFunction<typeof useAuthContext>;

describe('ForgotPasswordScreen', () => {
  const mockResetPassword = jest.fn();
  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    mockUseAuthContext.mockReturnValue({
      resetPassword: mockResetPassword,
      isLoading: false,
      error: null,
      user: null,
      isAuthenticated: false,
      signIn: jest.fn(),
      signUp: jest.fn(),
      signOut: jest.fn(),
      updateProfile: jest.fn(),
      refreshSession: jest.fn(),
      checkSession: jest.fn(),
    });
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <ForgotPasswordScreen navigation={mockNavigation as any} route={{} as any} />
    );
    expect(getByText('Reset Password')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
  });

  it('should call resetPassword on button press', async () => {
    mockResetPassword.mockResolvedValue(undefined);

    const { getByPlaceholderText, getByText } = render(
      <ForgotPasswordScreen navigation={mockNavigation as any} route={{} as any} />
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.press(getByText('Send Reset Link'));

    await waitFor(() => {
      expect(mockResetPassword).toHaveBeenCalledWith('test@example.com');
    });
  });
});

