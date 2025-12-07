/**
 * Service interfaces
 *
 * Defines contracts for all services in the application.
 */

import { Result } from '@/types';

export interface IService {
  initialize?(): Promise<void>;
  cleanup?(): Promise<void>;
}

/**
 * Network service interface for API communication
 */
export interface INetworkService extends IService {
  get<T>(url: string, config?: RequestInit): Promise<Result<T>>;
  post<T>(url: string, data: unknown, config?: RequestInit): Promise<Result<T>>;
  put<T>(url: string, data: unknown, config?: RequestInit): Promise<Result<T>>;
  delete<T>(url: string, config?: RequestInit): Promise<Result<T>>;
}

/**
 * Sync service interface for offline-first functionality
 */
export interface ISyncService extends IService {
  sync(): Promise<Result<void>>;
  getSyncStatus(): 'pending' | 'syncing' | 'synced' | 'error';
  forceSync(): Promise<Result<void>>;
}

/**
 * Storage service interface for secure data storage
 */
export interface IStorageService extends IService {
  get<T>(key: string): Promise<Result<T | null>>;
  set<T>(key: string, value: T): Promise<Result<void>>;
  remove(key: string): Promise<Result<void>>;
  clear(): Promise<Result<void>>;
}

/**
 * Authentication service interface
 */
export interface IAuthService extends IService {
  login(
    email: string,
    password: string
  ): Promise<Result<{ accessToken: string; refreshToken: string }>>;
  logout(): Promise<Result<void>>;
  refreshToken(refreshToken: string): Promise<Result<{ accessToken: string }>>;
  isAuthenticated(): Promise<boolean>;
  getCurrentUser(): Promise<Result<{ id: string; email: string; role: string } | null>>;
}
