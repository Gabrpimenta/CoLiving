import { BaseEntity } from '@/types';

/**
 * Space Domain Model
 *
 * Pure business entity representing a bookable space in the coliving facility
 */

export type SpaceType =
  | 'gym'
  | 'coworking'
  | 'kitchen'
  | 'laundry'
  | 'rooftop'
  | 'meeting-room'
  | 'cinema';

export interface Space extends BaseEntity {
  name: string;
  type: SpaceType;
  description: string;
  capacity: number;
  amenities: string[];
  imageUrl?: string;
}

export class SpaceModel {
  constructor(private space: Space) {
    this.validate();
  }

  private validate(): void {
    if (!this.space.name || this.space.name.trim().length === 0) {
      throw new Error('Space name is required');
    }

    if (this.space.capacity <= 0) {
      throw new Error('Space capacity must be greater than 0');
    }

    if (!this.space.type) {
      throw new Error('Space type is required');
    }
  }

  isAvailable(startTime: Date, endTime: Date): boolean {
    return true;
  }

  getTypeDisplayName(): string {
    const typeMap: Record<SpaceType, string> = {
      gym: 'Gym',
      coworking: 'Coworking Space',
      kitchen: 'Kitchen',
      laundry: 'Laundry Room',
      rooftop: 'Rooftop',
      'meeting-room': 'Meeting Room',
      cinema: 'Cinema',
    };

    return typeMap[this.space.type] || this.space.type;
  }

  getEntity(): Space {
    return { ...this.space };
  }
}
