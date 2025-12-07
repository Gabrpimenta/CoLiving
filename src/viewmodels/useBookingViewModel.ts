import { useState, useCallback } from 'react';
import {
  useGetMyBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useCancelBookingMutation,
  useCheckInBookingMutation,
  BookingsInsertInput,
  BookingsUpdateInput,
} from '@/generated/graphql';
import { supabase } from '@/config/supabase';

/**
 * ViewModel for Booking Management
 * 
 * Manages booking creation, updates, cancellation, and check-in
 */
export function useBookingViewModel() {
  const [userId, setUserId] = useState<string | null>(null);

  const getCurrentUser = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setUserId(user.id);
    }
    return user;
  }, []);

  const {
    data: bookingsData,
    loading: loadingBookings,
    refetch: refetchBookings,
  } = useGetMyBookingsQuery({
    variables: { userId: userId || '', first: 20 },
    skip: !userId,
  });

  const [createBookingMutation, { loading: creating }] =
    useCreateBookingMutation();
  const [updateBookingMutation, { loading: updating }] =
    useUpdateBookingMutation();
  const [cancelBookingMutation, { loading: cancelling }] =
    useCancelBookingMutation();
  const [checkInMutation, { loading: checkingIn }] =
    useCheckInBookingMutation();

  const bookings =
    bookingsData?.bookingsCollection?.edges?.map((edge) => edge?.node).filter(Boolean) ?? [];

  const createBooking = useCallback(
    async (
      spaceId: string,
      startTime: string,
      endTime: string,
      notes?: string
    ) => {
      const user = await getCurrentUser();
      if (!user) throw new Error('Not authenticated');

      const { data } = await createBookingMutation({
        variables: {
          input: {
            spaceId,
            userId: user.id,
            startTime,
            endTime,
            status: 'confirmed',
            notes,
          } as BookingsInsertInput,
        },
      });

      await refetchBookings();
      return data?.insertIntoBookingsCollection?.records?.[0] ?? null;
    },
    [createBookingMutation, getCurrentUser, refetchBookings]
  );

  const updateBooking = useCallback(
    async (id: string, updates: BookingsUpdateInput) => {
      const { data } = await updateBookingMutation({
        variables: {
          id,
          set: updates,
        },
      });

      await refetchBookings();
      return data?.updateBookingsCollection?.records?.[0] ?? null;
    },
    [updateBookingMutation, refetchBookings]
  );

  const cancelBooking = useCallback(
    async (id: string) => {
      const { data } = await cancelBookingMutation({
        variables: { id },
      });

      await refetchBookings();
      return data?.updateBookingsCollection?.records?.[0] ?? null;
    },
    [cancelBookingMutation, refetchBookings]
  );

  const checkIn = useCallback(
    async (id: string) => {
      const { data } = await checkInMutation({
        variables: {
          id,
          now: new Date().toISOString(),
        },
      });

      await refetchBookings();
      return data?.updateBookingsCollection?.records?.[0] ?? null;
    },
    [checkInMutation, refetchBookings]
  );

  return {
    bookings,
    loading: loadingBookings || creating || updating || cancelling || checkingIn,
    createBooking,
    updateBooking,
    cancelBooking,
    checkIn,
    refetch: refetchBookings,
    getCurrentUser,
  };
}

