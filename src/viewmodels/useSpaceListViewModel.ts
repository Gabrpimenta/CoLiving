import { useState, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/client/react';
import type { GetSpacesQuery } from '@/generated/graphql';
import { GET_SPACES } from '@/constants';

export type SpaceType = 'all' | 'meeting_room' | 'hot_desk' | 'private_office' | 'event_space';

export function useSpaceListViewModel() {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<SpaceType>('all');
  const [minCapacity, setMinCapacity] = useState<number | null>(null);

  const { data, loading, error, fetchMore, refetch } = useQuery<GetSpacesQuery>(GET_SPACES, {
    variables: { first: 20 },
    notifyOnNetworkStatusChange: true,
  });

  const rawSpaces = useMemo(() => {
    const edges = data?.spacesCollection?.edges;
    if (!edges) return [];
    return edges.map((edge) => edge.node);
  }, [data]);

  const spaces = useMemo(() => {
    let filtered = rawSpaces;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (space) =>
          space.name.toLowerCase().includes(query) ||
          space.type.toLowerCase().includes(query) ||
          space.description?.toLowerCase().includes(query)
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter((space) => space.type.toLowerCase() === selectedType);
    }

    if (minCapacity !== null) {
      filtered = filtered.filter((space) => space.capacity >= minCapacity);
    }

    return filtered;
  }, [rawSpaces, searchQuery, selectedType, minCapacity]);

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

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleTypeFilter = useCallback((type: SpaceType) => {
    setSelectedType(type);
  }, []);

  const handleCapacityFilter = useCallback((capacity: number | null) => {
    setMinCapacity(capacity);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedType('all');
    setMinCapacity(null);
  }, []);

  const hasActiveFilters = Boolean(searchQuery.trim()) || selectedType !== 'all' || minCapacity !== null;

  return {
    spaces,
    loading,
    error,
    refreshing,
    hasMore,
    searchQuery,
    selectedType,
    minCapacity,
    hasActiveFilters,
    handleRefresh,
    handleLoadMore,
    handleSearch,
    handleTypeFilter,
    handleCapacityFilter,
    clearFilters,
  };
}
