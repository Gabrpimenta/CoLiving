import { useState, useCallback } from 'react';
import { useQuery } from '@apollo/client/react';
import type { GetSpacesQuery } from '@/generated/graphql';
import { GET_SPACES } from '@/constants';

/**
 * ViewModel for Space List Screen
 *
 * Manages space listing with pagination, refresh, and loading states
 */
export function useSpaceListViewModel() {
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, fetchMore, refetch } = useQuery<GetSpacesQuery>(GET_SPACES, {
    variables: { first: 20 },
    notifyOnNetworkStatusChange: true,
  });

  const spaces = (() => {
    const edges = data?.spacesCollection?.edges;
    if (!edges) return [];
    return edges.map((edge) => edge.node);
  })();
  const hasMore = data?.spacesCollection?.pageInfo?.hasNextPage ?? false;
  const endCursor = data?.spacesCollection?.pageInfo?.endCursor ?? null;

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore && endCursor && fetchMore) {
      fetchMore({
        variables: {
          after: endCursor,
        },
      });
    }
  }, [loading, hasMore, endCursor, fetchMore]);

  return {
    spaces,
    loading,
    error,
    refreshing,
    hasMore,
    handleRefresh,
    handleLoadMore,
  };
}
