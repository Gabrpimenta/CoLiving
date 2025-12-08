import { BookingModel, type Booking } from '../Booking';
import type { BookingStatus } from '@/types';

describe('BookingModel', () => {
  const createBooking = (overrides?: Partial<Booking>): Booking => {
    const now = new Date();
    const endTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
    return {
      id: '1',
      spaceId: 'space-1',
      userId: 'user-1',
      startTime: now,
      endTime,
      status: 'confirmed' as BookingStatus,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
      ...overrides,
    };
  };

  describe('Basic Operations', () => {
    it('should create valid booking', () => {
      const booking = createBooking();
      const model = new BookingModel(booking);
      expect(model.getEntity()).toEqual(booking);
    });

    it('should calculate duration in minutes', () => {
      const now = new Date();
      const endTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      const booking = createBooking({ startTime: now, endTime });
      const model = new BookingModel(booking);
      expect(model.getDurationMinutes()).toBe(120);
    });

    it('should check if booking is active', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() - 1000);
      const endTime = new Date(now.getTime() + 1000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.isActive()).toBe(true);
    });

    it('should check if booking is upcoming', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() + 1000);
      const endTime = new Date(now.getTime() + 2000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.isUpcoming()).toBe(true);
    });

    it('should check if booking can be cancelled', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      const endTime = new Date(now.getTime() + 3 * 60 * 60 * 1000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.canBeCancelled()).toBe(true);
    });
  });

  describe('Validation', () => {
    it('should throw error for missing spaceId', () => {
      const booking = createBooking({ spaceId: '' });
      expect(() => new BookingModel(booking)).toThrow('Space ID is required');
    });

    it('should throw error for missing userId', () => {
      const booking = createBooking({ userId: '' });
      expect(() => new BookingModel(booking)).toThrow('User ID is required');
    });

    it('should throw error if endTime is before startTime', () => {
      const now = new Date();
      const past = new Date(now.getTime() - 1000);
      const booking = createBooking({ startTime: now, endTime: past });
      expect(() => new BookingModel(booking)).toThrow('End time must be after start time');
    });

    it('should throw error if duration exceeds 4 hours', () => {
      const now = new Date();
      const endTime = new Date(now.getTime() + 5 * 60 * 60 * 1000);
      const booking = createBooking({ startTime: now, endTime });
      expect(() => new BookingModel(booking)).toThrow('Booking duration cannot exceed 4 hours');
    });
  });

  describe('Branch Coverage - Edge Cases', () => {
    it('should not be active when status is not confirmed', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() - 1000);
      const endTime = new Date(now.getTime() + 1000);
      const booking = createBooking({ startTime, endTime, status: 'cancelled' });
      const model = new BookingModel(booking);
      expect(model.isActive()).toBe(false);
    });

    it('should not be active when before start time', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() + 1000);
      const endTime = new Date(now.getTime() + 2000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.isActive()).toBe(false);
    });

    it('should not be active when after end time', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() - 2000);
      const endTime = new Date(now.getTime() - 1000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.isActive()).toBe(false);
    });

    it('should not be upcoming when status is not confirmed', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() + 1000);
      const endTime = new Date(now.getTime() + 2000);
      const booking = createBooking({ startTime, endTime, status: 'cancelled' });
      const model = new BookingModel(booking);
      expect(model.isUpcoming()).toBe(false);
    });

    it('should not be upcoming when in the past', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() - 1000);
      const endTime = new Date(now.getTime() + 1000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.isUpcoming()).toBe(false);
    });

    it('should not be cancellable when status is not confirmed', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      const endTime = new Date(now.getTime() + 3 * 60 * 60 * 1000);
      const booking = createBooking({ startTime, endTime, status: 'cancelled' });
      const model = new BookingModel(booking);
      expect(model.canBeCancelled()).toBe(false);
    });

    it('should not be cancellable when less than 1 hour until start', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() + 30 * 60 * 1000);
      const endTime = new Date(now.getTime() + 90 * 60 * 1000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.canBeCancelled()).toBe(false);
    });

    it('should not be cancellable when active', () => {
      const now = new Date();
      const startTime = new Date(now.getTime() - 1000);
      const endTime = new Date(now.getTime() + 1000);
      const booking = createBooking({ startTime, endTime, status: 'confirmed' });
      const model = new BookingModel(booking);
      expect(model.canBeCancelled()).toBe(false);
    });

    it('should calculate duration for exactly 1 hour', () => {
      const now = new Date();
      const endTime = new Date(now.getTime() + 60 * 60 * 1000);
      const booking = createBooking({ startTime: now, endTime });
      const model = new BookingModel(booking);
      expect(model.getDurationMinutes()).toBe(60);
    });

    it('should return copy of entity', () => {
      const booking = createBooking();
      const model = new BookingModel(booking);
      const entity1 = model.getEntity();
      const entity2 = model.getEntity();

      expect(entity1).toEqual(entity2);
      expect(entity1).not.toBe(entity2);
    });
  });
});
