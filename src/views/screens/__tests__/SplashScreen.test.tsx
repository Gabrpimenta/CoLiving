import React from 'react';
import { render } from '@testing-library/react-native';
import { SplashScreen } from '../SplashScreen';

describe('SplashScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SplashScreen />);
    expect(getByText('CoLiving')).toBeTruthy();
  });

  it('should show loading indicator', () => {
    const { UNSAFE_getByType } = render(<SplashScreen />);
    const activityIndicator = UNSAFE_getByType('ActivityIndicator');
    expect(activityIndicator).toBeTruthy();
  });
});

