import { renderHook, act } from '@testing-library/react-hooks';
import { useOfflineStore } from '../offlineStore';
import * as Crypto from 'expo-crypto';
import { FailedMutation, PendingMutation, SyncError } from '@/types/stores';

jest.mock('expo-crypto');

describe('offlineStore', () => {
  beforeEach(() => {
    useOfflineStore.getState().clearQueue();
    (Crypto.randomUUID as jest.Mock).mockClear();
  });

  describe('Basic Operations', () => {
    it('should initialize with default values', () => {
      const { result } = renderHook(() => useOfflineStore());
      expect(result.current.pendingMutations).toEqual([]);
      expect(result.current.failedMutations).toEqual([]);
      expect(result.current.syncErrors).toEqual([]);
      expect(result.current.isOnline).toBe(true);
      expect(result.current.isSyncing).toBe(false);
      expect(result.current.lastSyncedAt).toBeNull();
    });

    it('should add pending mutation', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValue('uuid-123');
      const { result } = renderHook(() => useOfflineStore());
      const mutation = {
        type: 'CREATE_BOOKING' as const,
        operation: 'mutation CreateBooking { ... }',
        variables: { spaceId: '1', startTime: '2024-01-01' },
      };

      let mutationId: string | undefined;
      act(() => {
        mutationId = result.current.addPendingMutation(mutation);
      });

      expect(mutationId).toBe('uuid-123');
      expect(result.current.pendingMutations).toHaveLength(1);
      expect(result.current.pendingMutations[0]).toMatchObject({
        id: 'uuid-123',
        type: 'CREATE_BOOKING',
        operation: mutation.operation,
        variables: mutation.variables,
        retryCount: 0,
      });
      expect(result.current.pendingMutations[0].timestamp).toBeGreaterThan(0);
    });

    it('should remove pending mutation', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValue('uuid-123');
      const { result } = renderHook(() => useOfflineStore());

      let mutationId: string | undefined;
      act(() => {
        mutationId = result.current.addPendingMutation({
          type: 'CREATE_BOOKING',
          operation: 'mutation {}',
          variables: {},
        });
      });

      act(() => {
        if (mutationId) result.current.removePendingMutation(mutationId);
      });

      expect(result.current.pendingMutations).toHaveLength(0);
    });

    it('should mark mutation as failed', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValue('uuid-123');
      const { result } = renderHook(() => useOfflineStore());

      let mutationId: string | undefined;
      act(() => {
        mutationId = result.current.addPendingMutation({
          type: 'CREATE_BOOKING',
          operation: 'mutation {}',
          variables: {},
        });
      });

      act(() => {
        if (mutationId) result.current.markMutationFailed(mutationId, 'Network error');
      });

      expect(result.current.pendingMutations).toHaveLength(0);
      expect(result.current.failedMutations).toHaveLength(1);
      expect(result.current.failedMutations[0].error).toBe('Network error');
    });

    it('should retry failed mutation', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValue('uuid-123');
      const { result } = renderHook(() => useOfflineStore());

      let mutationId: string | undefined;
      act(() => {
        mutationId = result.current.addPendingMutation({
          type: 'CREATE_BOOKING',
          operation: 'mutation {}',
          variables: {},
        });
        if (mutationId) result.current.markMutationFailed(mutationId, 'Error');
      });

      act(() => {
        if (mutationId) result.current.retryFailedMutation(mutationId);
      });

      expect(result.current.failedMutations).toHaveLength(0);
      expect(result.current.pendingMutations).toHaveLength(1);
      expect(result.current.pendingMutations[0].retryCount).toBe(1);
    });

    it('should set online status', () => {
      const { result } = renderHook(() => useOfflineStore());

      act(() => {
        result.current.setOnlineStatus(false);
      });

      expect(result.current.isOnline).toBe(false);

      act(() => {
        result.current.setOnlineStatus(true);
      });

      expect(result.current.isOnline).toBe(true);
    });

    it('should set syncing status', () => {
      const { result } = renderHook(() => useOfflineStore());

      act(() => {
        result.current.setIsSyncing(true);
      });

      expect(result.current.isSyncing).toBe(true);

      act(() => {
        result.current.setIsSyncing(false);
      });

      expect(result.current.isSyncing).toBe(false);
    });

    it('should set last synced timestamp', () => {
      const { result } = renderHook(() => useOfflineStore());
      const timestamp = Date.now();

      act(() => {
        result.current.setLastSyncedAt(timestamp);
      });

      expect(result.current.lastSyncedAt).toBe(timestamp);
    });

    it('should add sync error', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValue('error-uuid');
      const { result } = renderHook(() => useOfflineStore());

      let errorId: string | undefined;
      act(() => {
        errorId = result.current.addSyncError('mutation-123', 'Sync failed');
      });

      expect(errorId).toBe('error-uuid');
      expect(result.current.syncErrors).toHaveLength(1);
      expect(result.current.syncErrors[0]).toMatchObject({
        id: 'error-uuid',
        mutationId: 'mutation-123',
        message: 'Sync failed',
        resolved: false,
      });
    });

    it('should resolve sync error', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValue('error-uuid');
      const { result } = renderHook(() => useOfflineStore());

      let errorId: string | undefined;
      act(() => {
        errorId = result.current.addSyncError('mutation-123', 'Sync failed');
        if (errorId) result.current.resolveSyncError(errorId);
      });

      expect(result.current.syncErrors[0].resolved).toBe(true);
    });

    it('should clear all queues', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValue('uuid-123');
      const { result } = renderHook(() => useOfflineStore());

      act(() => {
        result.current.addPendingMutation({
          type: 'CREATE_BOOKING',
          operation: 'mutation {}',
          variables: {},
        });
        result.current.addSyncError('mutation-1', 'Error');
        result.current.clearQueue();
      });

      expect(result.current.pendingMutations).toHaveLength(0);
      expect(result.current.failedMutations).toHaveLength(0);
      expect(result.current.syncErrors).toHaveLength(0);
    });
  });

  describe('Branch Coverage - Edge Cases', () => {
    it('should generate a unique ID and set timestamp when adding mutation', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValueOnce('uuid-1');
      const { result } = renderHook(() => useOfflineStore());
      const mutation = { type: 'CREATE_BOOKING', operation: 'mutation {}', variables: {} };

      let id: string;
      act(() => {
        id = result.current.addPendingMutation(mutation);
      });

      expect(id).toBe('uuid-1');
      expect(result.current.pendingMutations[0].id).toBe('uuid-1');
      expect(result.current.pendingMutations[0].timestamp).toBeGreaterThan(0);
      expect(result.current.pendingMutations[0].retryCount).toBe(0);
    });

    it('should do nothing when removing non-existent mutation', () => {
      const { result } = renderHook(() => useOfflineStore());
      act(() => {
        result.current.removePendingMutation('non-existent-id');
      });
      expect(result.current.pendingMutations).toHaveLength(0);
    });

    it('should do nothing when marking non-existent mutation as failed', () => {
      const { result } = renderHook(() => useOfflineStore());
      act(() => {
        result.current.markMutationFailed('non-existent-id', 'Error');
      });
      expect(result.current.failedMutations).toHaveLength(0);
    });

    it('should do nothing when retrying non-existent failed mutation', () => {
      const { result } = renderHook(() => useOfflineStore());
      act(() => {
        result.current.retryFailedMutation('non-existent-id');
      });
      expect(result.current.pendingMutations).toHaveLength(0);
      expect(result.current.failedMutations).toHaveLength(0);
    });

    it('should generate unique ID for sync errors', () => {
      (Crypto.randomUUID as jest.Mock).mockReturnValueOnce('error-uuid-1');
      const { result } = renderHook(() => useOfflineStore());

      let errorId: string;
      act(() => {
        errorId = result.current.addSyncError('mutation-123', 'Sync failed');
      });

      expect(errorId).toBe('error-uuid-1');
      expect(result.current.syncErrors[0].id).toBe('error-uuid-1');
      expect(result.current.syncErrors[0].timestamp).toBeGreaterThan(0);
      expect(result.current.syncErrors[0].resolved).toBe(false);
    });

    it('should do nothing when resolving non-existent sync error', () => {
      const { result } = renderHook(() => useOfflineStore());
      act(() => {
        result.current.resolveSyncError('non-existent-error-id');
      });
      expect(result.current.syncErrors).toHaveLength(0);
    });

    it('should retry multiple failed mutations', () => {
      const { result } = renderHook(() => useOfflineStore());
      (Crypto.randomUUID as jest.Mock)
        .mockReturnValueOnce('mutation-1')
        .mockReturnValueOnce('mutation-2');

      act(() => {
        result.current.addPendingMutation({
          type: 'CREATE_BOOKING',
          operation: 'mutation {}',
          variables: { spaceId: '1' },
        });
        result.current.addPendingMutation({
          type: 'UPDATE_PROFILE',
          operation: 'mutation {}',
          variables: { userId: '2' },
        });
      });

      act(() => {
        result.current.markMutationFailed('mutation-1', 'Error 1');
        result.current.markMutationFailed('mutation-2', 'Error 2');
      });

      expect(result.current.failedMutations).toHaveLength(2);
      expect(result.current.pendingMutations).toHaveLength(0);

      act(() => {
        result.current.retryAllFailedMutations();
      });

      expect(result.current.failedMutations).toHaveLength(0);
      expect(result.current.pendingMutations).toHaveLength(2);
      expect(result.current.pendingMutations[0].retryCount).toBe(1);
      expect(result.current.pendingMutations[1].retryCount).toBe(1);
    });
  });

  describe('Comprehensive Tests', () => {
    it('should add multiple pending mutations', () => {
      const { result } = renderHook(() => useOfflineStore());
      const mutation1 = {
        type: 'CREATE_BOOKING' as const,
        operation: 'mutation1',
        variables: { id: '1' },
      };
      const mutation2 = {
        type: 'UPDATE_PROFILE' as const,
        operation: 'mutation2',
        variables: { id: '2' },
      };
      const mutation3 = {
        type: 'CANCEL_BOOKING' as const,
        operation: 'mutation3',
        variables: { id: '3' },
      };

      act(() => {
        result.current.addPendingMutation(mutation1);
        result.current.addPendingMutation(mutation2);
        result.current.addPendingMutation(mutation3);
      });

      expect(result.current.pendingMutations).toHaveLength(3);
    });

    it('should handle multiple setIsSyncing calls', () => {
      const { result } = renderHook(() => useOfflineStore());

      act(() => {
        result.current.setIsSyncing(true);
      });
      expect(result.current.isSyncing).toBe(true);

      act(() => {
        result.current.setIsSyncing(false);
      });
      expect(result.current.isSyncing).toBe(false);

      act(() => {
        result.current.setIsSyncing(true);
      });
      expect(result.current.isSyncing).toBe(true);
    });

    it('should handle multiple online status changes', () => {
      const { result } = renderHook(() => useOfflineStore());

      act(() => {
        result.current.setOnlineStatus(false);
      });
      expect(result.current.isOnline).toBe(false);

      act(() => {
        result.current.setOnlineStatus(true);
      });
      expect(result.current.isOnline).toBe(true);

      act(() => {
        result.current.setOnlineStatus(false);
      });
      expect(result.current.isOnline).toBe(false);
    });

    it('should update lastSyncedAt multiple times', () => {
      const { result } = renderHook(() => useOfflineStore());
      const timestamp1 = Date.now();
      const timestamp2 = Date.now() + 1000;

      act(() => {
        result.current.setLastSyncedAt(timestamp1);
      });
      expect(result.current.lastSyncedAt).toBe(timestamp1);

      act(() => {
        result.current.setLastSyncedAt(timestamp2);
      });
      expect(result.current.lastSyncedAt).toBe(timestamp2);
    });

    it('should handle multiple sync errors', () => {
      const { result } = renderHook(() => useOfflineStore());

      let errorId1: string | undefined;
      let errorId2: string | undefined;
      let errorId3: string | undefined;

      act(() => {
        errorId1 = result.current.addSyncError('mutation-1', 'Error 1');
        errorId2 = result.current.addSyncError('mutation-2', 'Error 2');
        errorId3 = result.current.addSyncError('mutation-3', 'Error 3');
      });

      expect(result.current.syncErrors).toHaveLength(3);

      if (errorId1) {
        act(() => {
          result.current.resolveSyncError(errorId1!);
        });
        expect(result.current.syncErrors[0].resolved).toBe(true);
      }
    });

    it('should clear all data', () => {
      const { result } = renderHook(() => useOfflineStore());

      act(() => {
        result.current.addPendingMutation({
          type: 'CREATE_BOOKING',
          operation: 'mutation',
          variables: {},
        });
        result.current.addSyncError('mutation-1', 'Error');
        result.current.setLastSyncedAt(Date.now());
        result.current.clearQueue();
      });

      expect(result.current.pendingMutations).toHaveLength(0);
      expect(result.current.failedMutations).toHaveLength(0);
      expect(result.current.syncErrors).toHaveLength(0);
    });
  });
});
