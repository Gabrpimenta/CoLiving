import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useSpaceListViewModel } from '@/viewmodels/useSpaceListViewModel';
import { Colors } from '@/constants/colors';

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
    handleRefresh,
    handleLoadMore,
  } = useSpaceListViewModel();

  if (loading && !refreshing && spaces.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading spaces...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={handleRefresh}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={spaces}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('SpaceDetail', { spaceId: item.id })}
            accessible={true}
            accessibilityLabel={`${item.name}, ${item.type}`}
            accessibilityHint="Double tap to view details and book"
            accessibilityRole="button"
          >
            <View style={styles.cardHeader}>
              <Text style={styles.title}>{item.name}</Text>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: item.available
                      ? Colors.success
                      : Colors.error,
                  },
                ]}
              >
                <Text style={styles.badgeText}>
                  {item.available ? 'Available' : 'Occupied'}
                </Text>
              </View>
            </View>

            <Text style={styles.type}>{item.type?.toUpperCase()}</Text>
            <Text style={styles.capacity}>
              👥 Capacity: {item.capacity} people
            </Text>

            {item.floor !== null && item.floor !== undefined && (
              <Text style={styles.floor}>📍 Floor {item.floor}</Text>
            )}

            {item.description && (
              <Text style={styles.description} numberOfLines={2}>
                {item.description}
              </Text>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={Colors.primary}
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          hasMore ? (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color={Colors.primary} />
            </View>
          ) : null
        }
        ListEmptyComponent={
          !loading ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No spaces available</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textInverse,
  },
  type: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 8,
  },
  capacity: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  floor: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  errorText: {
    fontSize: 16,
    color: Colors.error,
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: Colors.textInverse,
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
});

