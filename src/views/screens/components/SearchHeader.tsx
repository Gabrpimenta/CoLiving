import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { View } from 'react-native';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { styles } from './styles/SearchHeader.styles';

interface SearchHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterToggle: () => void;
  hasActiveFilters: boolean;
}

export function SearchHeader({
  searchQuery,
  onSearchChange,
  onFilterToggle,
  hasActiveFilters,
}: SearchHeaderProps) {
  return (
    <HStack space="sm" className="items-center">
      <View style={styles.searchContainer}>
        <Search size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search spaces..."
          value={searchQuery}
          onChangeText={onSearchChange}
          placeholderTextColor="#9CA3AF"
          accessible
          accessibilityLabel="Search spaces"
          accessibilityHint="Type to search for spaces by name, type, or description"
        />
      </View>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={onFilterToggle}
        accessible
        accessibilityLabel="Toggle filters"
        accessibilityRole="button"
        accessibilityHint="Show or hide filter options"
      >
        <SlidersHorizontal size={20} color="#374151" />
        {hasActiveFilters && <View style={styles.filterDot} />}
      </TouchableOpacity>
    </HStack>
  );
}
