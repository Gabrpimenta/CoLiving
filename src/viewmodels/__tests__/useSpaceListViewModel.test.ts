import { renderHook, act, waitFor } from '@testing-library/react-hooks';
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
});
