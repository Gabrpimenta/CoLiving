import React from 'react';
import { Card } from '@/components/ui/card';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Pressable } from '@/components/ui/pressable';
import { Users, MapPin } from 'lucide-react-native';

interface Space {
  id: string;
  name: string;
  type: string;
  capacity: number;
  available: boolean | null;
  floor?: number | null;
  description?: string | null;
}

interface SpaceCardProps {
  space: Space;
  onPress: () => void;
}

export function SpaceCard({ space, onPress }: SpaceCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessible={true}
      accessibilityLabel={`${space.name}, ${space.type}`}
      accessibilityHint="Double tap to view details and book"
      accessibilityRole="button"
      className="px-4 py-2"
    >
      <Card variant="elevated" size="md" className="mb-3 shadow-md">
        <VStack space="sm">
          <HStack space="md" className="items-start justify-between">
            <VStack space="xs" className="flex-1">
              <Text size="lg" bold className="text-typography-900">
                {space.name}
              </Text>
              <Text size="sm" className="text-primary-600 uppercase tracking-wide">
                {space.type.replace('_', ' ')}
              </Text>
            </VStack>
            <Badge action={space.available ? 'success' : 'error'} variant="solid" size="md">
              <BadgeText>{space.available ? 'Available' : 'Occupied'}</BadgeText>
            </Badge>
          </HStack>

          <HStack space="sm" className="items-center">
            <Users size={16} color="#6B7280" />
            <Text size="sm" className="text-typography-600">
              Capacity: {space.capacity} people
            </Text>
          </HStack>

          {space.floor !== null && space.floor !== undefined && (
            <HStack space="sm" className="items-center">
              <MapPin size={16} color="#6B7280" />
              <Text size="sm" className="text-typography-600">
                Floor {space.floor}
              </Text>
            </HStack>
          )}

          {space.description && (
            <Text size="sm" className="text-typography-600" numberOfLines={2} isTruncated>
              {space.description}
            </Text>
          )}
        </VStack>
      </Card>
    </Pressable>
  );
}
