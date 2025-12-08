import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ResetPasswordScreen } from '../ResetPasswordScreen';
import { AuthService } from '@/services/authService';

jest.mock('@/services/authService');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockAuthService = AuthService as jest.Mocked<typeof AuthService>;

describe('ResetPasswordScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    mockAuthService.updatePassword.mockResolvedValue();
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { getAllByText, getByPlaceholderText } = render(
      <ResetPasswordScreen navigation={mockNavigation as any} route={{} as any} />
    );
    expect(getAllByText('New Password').length).toBeGreaterThan(0);
    expect(getByPlaceholderText('New Password')).toBeTruthy();
  });

  it('should show error if passwords do not match', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ResetPasswordScreen navigation={mockNavigation as any} route={{} as any} />
    );

    fireEvent.changeText(getByPlaceholderText('New Password'), 'password123');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'different');
    fireEvent.press(getByText('Reset Password'));

    await waitFor(() => {
      expect(getByText('Passwords do not match')).toBeTruthy();
    });
  });

  it('should call updatePassword on valid input', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ResetPasswordScreen navigation={mockNavigation as any} route={{} as any} />
    );

    fireEvent.changeText(getByPlaceholderText('New Password'), 'password123');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'password123');
    fireEvent.press(getByText('Reset Password'));

    await waitFor(() => {
      expect(mockAuthService.updatePassword).toHaveBeenCalledWith('password123');
    });
  });
});

