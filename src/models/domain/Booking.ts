import { BaseEntity, BookingStatus } from '@/types';

/**
 * Booking Domain Model
 *
 * Pure business entity representing a space booking
 */

export interface Booking extends BaseEntity {
  spaceId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  status: BookingStatus;
}

/**
 * Booking validation and business logic
 */
export class BookingModel {
  constructor(private booking: Booking) {
    this.validate();
  }

  private validate(): void {
    if (!this.booking.spaceId) {
      throw new Error('Space ID is required');
    }

    if (!this.booking.userId) {
      throw new Error('User ID is required');
    }

    if (this.booking.endTime <= this.booking.startTime) {
      throw new Error('End time must be after start time');
    }

    const duration = this.booking.endTime.getTime() - this.booking.startTime.getTime();
    const maxDuration = 4 * 60 * 60 * 1000; // 4 hours in milliseconds

    if (duration > maxDuration) {
      throw new Error('Booking duration cannot exceed 4 hours');
    }
  }

  getDurationMinutes(): number {
    const duration = this.booking.endTime.getTime() - this.booking.startTime.getTime();
    return Math.round(duration / (1000 * 60));
  }

  isActive(): boolean {
    const now = new Date();
    return (
      this.booking.startTime <= now &&
      now <= this.booking.endTime &&
      this.booking.status === 'confirmed'
    );
  }

  isUpcoming(): boolean {
    const now = new Date();
    return this.booking.startTime > now && this.booking.status === 'confirmed';
  }

  canBeCancelled(): boolean {
    const now = new Date();
    const hoursUntilStart = (this.booking.startTime.getTime() - now.getTime()) / (1000 * 60 * 60);

    return this.booking.status === 'confirmed' && hoursUntilStart >= 1 && !this.isActive();
  }

  getEntity(): Booking {
    return { ...this.booking };
  }
}
