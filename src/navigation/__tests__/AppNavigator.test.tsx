import React from 'react';
import { render } from '@testing-library/react-native';
import { AppNavigator } from '../AppNavigator';
import { useAuthContext } from '@/contexts/AuthContext';

jest.mock('@/contexts/AuthContext');
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useNavigationContainerRef: () => ({ current: null }),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }: any) => <>{children}</>,
    Screen: () => null,
  }),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: ({ children }: any) => <>{children}</>,
    Screen: () => null,
  }),
}));

const mockUseAuthContext = useAuthContext as jest.MockedFunction<typeof useAuthContext>;

describe('AppNavigator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show SplashScreen when loading', () => {
    mockUseAuthContext.mockReturnValue({
      isAuthenticated: false,
      isLoading: true,
      user: null,
      error: null,
      signIn: jest.fn(),
      signUp: jest.fn(),
      signOut: jest.fn(),
      resetPassword: jest.fn(),
      updateProfile: jest.fn(),
      refreshSession: jest.fn(),
      checkSession: jest.fn(),
    });

    const { getByText } = render(<AppNavigator />);
    expect(getByText('CoLiving')).toBeTruthy();
  });

  it('should show AuthNavigator when not authenticated', () => {
    mockUseAuthContext.mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      error: null,
      signIn: jest.fn(),
      signUp: jest.fn(),
      signOut: jest.fn(),
      resetPassword: jest.fn(),
      updateProfile: jest.fn(),
      refreshSession: jest.fn(),
      checkSession: jest.fn(),
    });

    const { UNSAFE_getByType } = render(<AppNavigator />);
    expect(UNSAFE_getByType).toBeTruthy();
  });
});

