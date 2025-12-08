import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonText } from '@/components/ui/button';
import { View } from 'react-native';
import { SpaceType } from '@/viewmodels/useSpaceListViewModel';

interface FilterSectionProps {
  selectedType: SpaceType;
  minCapacity: number | null;
  hasActiveFilters: boolean;
  onTypeFilter: (type: SpaceType) => void;
  onCapacityFilter: (capacity: number | null) => void;
  onClearFilters: () => void;
}

const SPACE_TYPES: { value: SpaceType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'meeting_room', label: 'Meeting Room' },
  { value: 'hot_desk', label: 'Hot Desk' },
  { value: 'private_office', label: 'Private Office' },
  { value: 'event_space', label: 'Event Space' },
];

const CAPACITY_FILTERS = [
  { value: null, label: 'Any' },
  { value: 4, label: '4+' },
  { value: 8, label: '8+' },
  { value: 12, label: '12+' },
];

export function FilterSection({
  selectedType,
  minCapacity,
  hasActiveFilters,
  onTypeFilter,
  onCapacityFilter,
  onClearFilters,
}: FilterSectionProps) {
  return (
    <VStack space="sm" className="mt-3">
      <View>
        <Text size="sm" className="text-typography-600 mb-2" bold>
          Space Type
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="xs">
            {SPACE_TYPES.map((type) => (
              <TouchableOpacity
                key={type.value}
                onPress={() => onTypeFilter(type.value)}
                accessible
                accessibilityLabel={`Filter by ${type.label}`}
                accessibilityRole="button"
                accessibilityState={{ selected: selectedType === type.value }}
              >
                <Badge
                  action={selectedType === type.value ? 'primary' : 'muted'}
                  variant="solid"
                  size="md"
                >
                  <BadgeText>{type.label}</BadgeText>
                </Badge>
              </TouchableOpacity>
            ))}
          </HStack>
        </ScrollView>
      </View>

      <View>
        <Text size="sm" className="text-typography-600 mb-2" bold>
          Capacity
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="xs">
            {CAPACITY_FILTERS.map((filter) => (
              <TouchableOpacity
                key={filter.label}
                onPress={() => onCapacityFilter(filter.value)}
                accessible
                accessibilityLabel={`Filter by capacity ${filter.label}`}
                accessibilityRole="button"
                accessibilityState={{ selected: minCapacity === filter.value }}
              >
                <Badge
                  action={minCapacity === filter.value ? 'primary' : 'muted'}
                  variant="solid"
                  size="md"
                >
                  <BadgeText>{filter.label}</BadgeText>
                </Badge>
              </TouchableOpacity>
            ))}
          </HStack>
        </ScrollView>
      </View>

      {hasActiveFilters && (
        <Button action="secondary" onPress={onClearFilters} size="sm">
          <ButtonText>Clear Filters</ButtonText>
        </Button>
      )}
    </VStack>
  );
}
