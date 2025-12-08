import { renderHook, act } from '@testing-library/react-hooks';
import { useSpaceListViewModel } from '../useSpaceListViewModel';
import { useQuery } from '@apollo/client/react';

jest.mock('@apollo/client/react');

const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>;

describe('useSpaceListViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Operations', () => {
    it('should return initial state', () => {
      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      expect(result.current.spaces).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.refreshing).toBe(false);
      expect(result.current.hasMore).toBe(false);
      expect(result.current.searchQuery).toBe('');
      expect(result.current.selectedType).toBe('all');
      expect(result.current.minCapacity).toBeNull();
      expect(result.current.hasActiveFilters).toBe(false);
    });

    it('should map spaces from query data', () => {
      const mockSpace = { id: '1', name: 'Test Space' };
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [{ node: mockSpace }],
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      expect(result.current.spaces).toEqual([mockSpace]);
    });

    it('should handle refresh', async () => {
      const mockRefetch = jest.fn().mockResolvedValue({});
      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        error: undefined,
        refetch: mockRefetch,
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      await act(async () => {
        await result.current.handleRefresh();
      });

      expect(mockRefetch).toHaveBeenCalled();
      expect(result.current.refreshing).toBe(false);
    });

    it('should handle load more', () => {
      const mockFetchMore = jest.fn();
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [],
            pageInfo: { hasNextPage: true, endCursor: 'cursor-123' },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: mockFetchMore,
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleLoadMore();
      });

      expect(mockFetchMore).toHaveBeenCalledWith({
        variables: { after: 'cursor-123' },
      });
    });
  });

  describe('Branch Coverage - Edge Cases', () => {
    it('should handle empty edges', () => {
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: null,
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      expect(result.current.spaces).toEqual([]);
    });

    it('should handle missing pageInfo', () => {
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [],
            pageInfo: null,
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      expect(result.current.hasMore).toBe(false);
      expect(result.current.spaces).toEqual([]);
    });

    it('should not load more if already loading', () => {
      const mockFetchMore = jest.fn();
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [],
            pageInfo: { hasNextPage: true, endCursor: 'cursor' },
          },
        },
        loading: true,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: mockFetchMore,
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleLoadMore();
      });

      expect(mockFetchMore).not.toHaveBeenCalled();
    });

    it('should not load more if no more pages', () => {
      const mockFetchMore = jest.fn();
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [],
            pageInfo: { hasNextPage: false, endCursor: 'cursor' },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: mockFetchMore,
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleLoadMore();
      });

      expect(mockFetchMore).not.toHaveBeenCalled();
    });

    it('should not load more if no cursor', () => {
      const mockFetchMore = jest.fn();
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [],
            pageInfo: { hasNextPage: true, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: mockFetchMore,
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleLoadMore();
      });

      expect(mockFetchMore).not.toHaveBeenCalled();
    });

    it('should not load more if fetchMore is undefined', () => {
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [],
            pageInfo: { hasNextPage: true, endCursor: 'cursor' },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: undefined,
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleLoadMore();
      });

      // Should not throw
    });

    it('should handle refresh error', async () => {
      const mockRefetch = jest.fn().mockRejectedValue(new Error('Refresh failed'));
      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        error: undefined,
        refetch: mockRefetch,
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      await act(async () => {
        try {
          await result.current.handleRefresh();
        } catch (e) {
          // Expected
        }
      });

      expect(mockRefetch).toHaveBeenCalled();
      expect(result.current.refreshing).toBe(false);
    });
  });

  describe('Search and Filters', () => {
    it('should filter spaces by search query', () => {
      const mockSpaces = [
        { id: '1', name: 'Meeting Room A', type: 'meeting_room', capacity: 10, description: 'First floor' },
        { id: '2', name: 'Hot Desk B', type: 'hot_desk', capacity: 1, description: 'Second floor' },
      ];
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: mockSpaces.map(space => ({ node: space })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleSearch('meeting');
      });

      expect(result.current.spaces).toHaveLength(1);
      expect(result.current.spaces[0].name).toBe('Meeting Room A');
      expect(result.current.hasActiveFilters).toBe(true);
    });

    it('should filter spaces by type', () => {
      const mockSpaces = [
        { id: '1', name: 'Meeting Room A', type: 'meeting_room', capacity: 10 },
        { id: '2', name: 'Hot Desk B', type: 'hot_desk', capacity: 1 },
      ];
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: mockSpaces.map(space => ({ node: space })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleTypeFilter('hot_desk');
      });

      expect(result.current.spaces).toHaveLength(1);
      expect(result.current.spaces[0].type).toBe('hot_desk');
      expect(result.current.hasActiveFilters).toBe(true);
    });

    it('should filter spaces by minimum capacity', () => {
      const mockSpaces = [
        { id: '1', name: 'Meeting Room A', type: 'meeting_room', capacity: 10 },
        { id: '2', name: 'Hot Desk B', type: 'hot_desk', capacity: 1 },
        { id: '3', name: 'Conference Room', type: 'meeting_room', capacity: 15 },
      ];
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: mockSpaces.map(space => ({ node: space })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleCapacityFilter(8);
      });

      expect(result.current.spaces).toHaveLength(2);
      expect(result.current.spaces.every(s => s.capacity >= 8)).toBe(true);
      expect(result.current.hasActiveFilters).toBe(true);
    });

    it('should combine multiple filters', () => {
      const mockSpaces = [
        { id: '1', name: 'Meeting Room A', type: 'meeting_room', capacity: 10, description: 'Main' },
        { id: '2', name: 'Meeting Room B', type: 'meeting_room', capacity: 5, description: 'Small' },
        { id: '3', name: 'Hot Desk', type: 'hot_desk', capacity: 1, description: 'Desk' },
      ];
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: mockSpaces.map(space => ({ node: space })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleSearch('meeting');
        result.current.handleTypeFilter('meeting_room');
        result.current.handleCapacityFilter(8);
      });

      expect(result.current.spaces).toHaveLength(1);
      expect(result.current.spaces[0].id).toBe('1');
    });

    it('should clear all filters', () => {
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: [],
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleSearch('test');
        result.current.handleTypeFilter('meeting_room');
        result.current.handleCapacityFilter(10);
      });

      expect(result.current.hasActiveFilters).toBe(true);

      act(() => {
        result.current.clearFilters();
      });

      expect(result.current.searchQuery).toBe('');
      expect(result.current.selectedType).toBe('all');
      expect(result.current.minCapacity).toBeNull();
      expect(result.current.hasActiveFilters).toBe(false);
    });

    it('should search in description', () => {
      const mockSpaces = [
        { id: '1', name: 'Room A', type: 'meeting_room', capacity: 10, description: 'Beautiful space' },
        { id: '2', name: 'Room B', type: 'hot_desk', capacity: 1, description: 'Small desk' },
      ];
      mockUseQuery.mockReturnValue({
        data: {
          spacesCollection: {
            edges: mockSpaces.map(space => ({ node: space })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
        loading: false,
        error: undefined,
        refetch: jest.fn(),
        fetchMore: jest.fn(),
      } as any);

      const { result } = renderHook(() => useSpaceListViewModel());

      act(() => {
        result.current.handleSearch('beautiful');
      });

      expect(result.current.spaces).toHaveLength(1);
      expect(result.current.spaces[0].id).toBe('1');
    });
  });
});
