import React from 'react';
import { RefreshControl } from 'react-native';
import { FlatList } from '@/components/ui/flat-list';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { useSpaceListViewModel } from '@/viewmodels/useSpaceListViewModel';
import { View } from 'react-native';

interface SpaceListScreenProps {
  navigation: {
    navigate: (screen: string, params?: { spaceId: string }) => void;
  };
}

export function SpaceListScreen({ navigation }: SpaceListScreenProps) {
  const { spaces, loading, error, refreshing, hasMore, handleRefresh, handleLoadMore } =
    useSpaceListViewModel();

  if (loading && !refreshing && spaces.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-background-50">
        <Spinner size="large" color="#0066CC" />
        <Text className="mt-4 text-typography-600" size="md">
          Loading spaces...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-background-50 p-6">
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
    <View className="flex-1 bg-background-50">
      <FlatList
        data={spaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('SpaceDetail', { spaceId: item.id })}
            accessible={true}
            accessibilityLabel={`${item.name}, ${item.type}`}
            accessibilityHint="Double tap to view details and book"
            accessibilityRole="button"
            className="px-4 py-2"
          >
            <Card variant="elevated" size="md" className="mb-3 shadow-md">
              <VStack space="sm">
                <HStack space="md" className="items-start justify-between">
                  <VStack space="xs" className="flex-1">
                    <Text size="lg" bold className="text-typography-900">
                      {item.name}
                    </Text>
                    <Text size="sm" className="text-primary-600 uppercase tracking-wide">
                      {item.type}
                    </Text>
                  </VStack>
                  <Badge action={item.available ? 'success' : 'error'} variant="solid" size="md">
                    <BadgeText>{item.available ? 'Available' : 'Occupied'}</BadgeText>
                  </Badge>
                </HStack>

                <HStack space="sm" className="items-center">
                  <Text size="sm" className="text-typography-600">
                    👥
                  </Text>
                  <Text size="sm" className="text-typography-600">
                    Capacity: {item.capacity} people
                  </Text>
                </HStack>

                {item.floor !== null && item.floor !== undefined && (
                  <HStack space="sm" className="items-center">
                    <Text size="sm" className="text-typography-600">
                      📍
                    </Text>
                    <Text size="sm" className="text-typography-600">
                      Floor {item.floor}
                    </Text>
                  </HStack>
                )}

                {item.description && (
                  <Text size="sm" className="text-typography-600" numberOfLines={2} isTruncated>
                    {item.description}
                  </Text>
                )}
              </VStack>
            </Card>
          </Pressable>
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
                No spaces available
              </Text>
              <Text size="sm" className="text-typography-500 text-center mt-2">
                Check back later for new spaces
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}
