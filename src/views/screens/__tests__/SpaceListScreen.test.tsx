import React from 'react';
import { render } from '@testing-library/react-native';
import { SpaceListScreen } from '../SpaceListScreen';

jest.mock('@/viewmodels/useSpaceListViewModel', () => ({
  useSpaceListViewModel: () => ({
    spaces: [
      {
        id: '1',
        name: 'Test Space',
        type: 'gym',
        capacity: 10,
        available: true,
        description: 'Test description',
        floor: 1,
      },
    ],
    loading: false,
    error: null,
    refreshing: false,
    hasMore: false,
    handleRefresh: jest.fn(),
    handleLoadMore: jest.fn(),
  }),
}));

describe('SpaceListScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  it('should render without crashing', () => {
    const { UNSAFE_root } = render(
      <SpaceListScreen navigation={mockNavigation as any} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should render space name', () => {
    const { getByText } = render(
      <SpaceListScreen navigation={mockNavigation as any} />
    );
    expect(getByText('Test Space')).toBeTruthy();
  });
});

