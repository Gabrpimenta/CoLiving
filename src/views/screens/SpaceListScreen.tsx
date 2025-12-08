import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import { FlatList } from '@/components/ui/flat-list';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useSpaceListViewModel } from '@/viewmodels/useSpaceListViewModel';
import { View } from 'react-native';
import { SearchHeader } from './components/SearchHeader';
import { FilterSection } from './components/FilterSection';
import { SpaceCard } from './components/SpaceCard';
import { styles } from './styles/SpaceListScreen.styles';

interface SpaceListScreenProps {
  navigation: {
    navigate: (screen: string, params?: { spaceId: string }) => void;
  };
}

export function SpaceListScreen({ navigation }: SpaceListScreenProps) {
  const {
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
  } = useSpaceListViewModel();

  const [showFilters, setShowFilters] = useState(false);

  if (loading && !refreshing && spaces.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Spinner size="large" color="#0066CC" />
        <Text className="mt-4 text-typography-600" size="md">
          Loading spaces...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.centerContainer, styles.errorContainer]}>
        <Text className="mb-4 text-center text-typography-900" size="lg" bold>
          Error loading spaces
        </Text>
        <Text className="mb-6 text-center text-error-600" size="md">
          {error.message}
        </Text>
        <Button action="primary" onPress={handleRefresh} size="md">
          <ButtonText>Retry</ButtonText>
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchHeader
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          onFilterToggle={() => setShowFilters(!showFilters)}
          hasActiveFilters={hasActiveFilters}
        />
        {showFilters && (
          <FilterSection
            selectedType={selectedType}
            minCapacity={minCapacity}
            hasActiveFilters={hasActiveFilters}
            onTypeFilter={handleTypeFilter}
            onCapacityFilter={handleCapacityFilter}
            onClearFilters={clearFilters}
          />
        )}
      </View>

      <FlatList
        data={spaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SpaceCard space={item} onPress={() => navigation.navigate('SpaceDetail', { spaceId: item.id })} />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#0066CC" />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          hasMore ? (
            <View className="py-6 items-center">
              <Spinner size="small" color="#0066CC" />
            </View>
          ) : null
        }
        ListEmptyComponent={
          !loading ? (
            <View className="py-16 items-center px-6">
              <Text size="lg" className="text-typography-600 text-center">
                {hasActiveFilters ? 'No spaces match your filters' : 'No spaces available'}
              </Text>
              <Text size="sm" className="text-typography-500 text-center mt-2">
                {hasActiveFilters ? 'Try adjusting your filters' : 'Check back later for new spaces'}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}
