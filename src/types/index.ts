/**
 * Core type definitions for CoLiving
 */

export type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E };

// Sync status for offline-first architecture
export type SyncStatus = 'pending' | 'syncing' | 'synced' | 'error';

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  syncStatus: SyncStatus;
  lastSyncedAt?: Date;
}

export type UserRole = 'resident' | 'guest' | 'admin' | 'manager';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type BookingStatus = 'pending' | 'confirmed' | 'checked-in' | 'completed' | 'cancelled';
