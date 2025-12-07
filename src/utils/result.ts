/**
 * Utility functions for Result type pattern
 */

import { Result } from '@/types';

export function ok<T>(data: T): Result<T, never> {
  return { success: true, data };
}

export function err<E extends Error>(error: E): Result<never, E> {
  return { success: false, error };
}

export function mapResult<T, U, E>(result: Result<T, E>, fn: (data: T) => U): Result<U, E> {
  if (result.success) {
    return ok(fn(result.data));
  }
  return result;
}

export function mapError<T, E, F>(result: Result<T, E>, fn: (error: E) => F): Result<T, F> {
  if (!result.success) {
    return { success: false, error: fn(result.error) };
  }
  return result;
}

export function flatMap<T, U, E>(
  result: Result<T, E>,
  fn: (data: T) => Result<U, E>
): Result<U, E> {
  if (result.success) {
    return fn(result.data);
  }
  return result;
}
