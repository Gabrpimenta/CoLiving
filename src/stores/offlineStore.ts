import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import type {
  OfflineState,
  OfflineActions,
  PendingMutation,
  FailedMutation,
  SyncError,
} from '@/types/stores';
import { zustandStorage } from '@/lib/storage';
import * as Crypto from 'expo-crypto';

interface OfflineStore extends OfflineState, OfflineActions {}

const isDev = __DEV__;

export const useOfflineStore = create<OfflineStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        isOnline: true,
        isSyncing: false,
        lastSyncedAt: null,
        pendingMutations: [],
        failedMutations: [],
        syncErrors: [],

        setOnlineStatus: (isOnline: boolean) => {
          set((state) => {
            state.isOnline = isOnline;
          });
        },

        setIsSyncing: (isSyncing: boolean) => {
          set((state) => {
            state.isSyncing = isSyncing;
          });
        },

        setLastSyncedAt: (timestamp: number) => {
          set((state) => {
            state.lastSyncedAt = timestamp;
          });
        },

        addPendingMutation: (
          mutation: Omit<PendingMutation, 'id' | 'timestamp' | 'retryCount'>
        ): string => {
          const id = Crypto.randomUUID();
          const pendingMutation: PendingMutation = {
            ...mutation,
            id,
            timestamp: Date.now(),
            retryCount: 0,
          };

          set((state) => {
            state.pendingMutations.push(pendingMutation);
          });

          return id;
        },

        removePendingMutation: (id: string) => {
          set((state) => {
            state.pendingMutations = state.pendingMutations.filter(
              (m: PendingMutation) => m.id !== id
            );
          });
        },

        markMutationFailed: (id: string, error: string) => {
          const state = get();
          const mutation = state.pendingMutations.find((m: PendingMutation) => m.id === id);

          if (mutation) {
            const failedMutation: FailedMutation = {
              ...mutation,
              error,
              lastAttemptAt: Date.now(),
            };

            set((draft) => {
              draft.pendingMutations = draft.pendingMutations.filter(
                (m: PendingMutation) => m.id !== id
              );
              draft.failedMutations.push(failedMutation);
            });
          }
        },

        retryFailedMutation: (id: string) => {
          const state = get();
          const failedMutation = state.failedMutations.find((m: FailedMutation) => m.id === id);

          if (failedMutation) {
            const { error, lastAttemptAt, ...mutation } = failedMutation;
            const pendingMutation: PendingMutation = {
              ...mutation,
              retryCount: failedMutation.retryCount + 1,
              timestamp: Date.now(),
            };

            set((draft) => {
              draft.failedMutations = draft.failedMutations.filter(
                (m: FailedMutation) => m.id !== id
              );
              draft.pendingMutations.push(pendingMutation);
            });
          }
        },

        retryAllFailedMutations: () => {
          const state = get();
          const failedMutations = [...state.failedMutations];

          set((draft) => {
            draft.failedMutations = [];
          });

          failedMutations.forEach((failedMutation) => {
            const { error, lastAttemptAt, ...mutation } = failedMutation;
            const pendingMutation: PendingMutation = {
              ...mutation,
              retryCount: failedMutation.retryCount + 1,
              timestamp: Date.now(),
            };

            set((draft) => {
              draft.pendingMutations.push(pendingMutation);
            });
          });
        },

        clearQueue: () => {
          set((state) => {
            state.pendingMutations = [];
            state.failedMutations = [];
            state.syncErrors = [];
          });
        },

        addSyncError: (mutationId: string, message: string): string => {
          const id = Crypto.randomUUID();
          const syncError: SyncError = {
            id,
            mutationId,
            message,
            timestamp: Date.now(),
            resolved: false,
          };

          set((state) => {
            state.syncErrors.push(syncError);
          });

          return id;
        },

        resolveSyncError: (id: string) => {
          set((state) => {
            const error = state.syncErrors.find((e: SyncError) => e.id === id);
            if (error) {
              error.resolved = true;
            }
          });
        },
      })),
      {
        name: 'offline-storage',
        storage: createJSONStorage(() => zustandStorage),
      }
    ),
    { name: 'OfflineStore', enabled: isDev }
  )
);
