import { renderHook, act, waitFor } from '@testing-library/react-hooks';
import { useBookingViewModel } from '../useBookingViewModel';
import { useQuery, useMutation } from '@apollo/client/react';
import { supabase } from '@/config/supabase';

jest.mock('@apollo/client/react');
jest.mock('@/config/supabase');

const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>;
const mockUseMutation = useMutation as jest.MockedFunction<typeof useMutation>;
const mockSupabase = supabase as jest.Mocked<typeof supabase>;

describe('useBookingViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Operations', () => {
    it('should return initial state', () => {
      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        refetch: jest.fn(),
      } as any);

      mockUseMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      expect(result.current.bookings).toEqual([]);
      expect(result.current.loading).toBe(false);
    });

    it('should get current user', async () => {
      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        refetch: jest.fn(),
      } as any);

      mockUseMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: undefined },
      ] as any);

      mockSupabase.auth.getUser = jest.fn().mockResolvedValue({
        data: { user: { id: 'user-123' } as any },
        error: null,
      });

      const { result } = renderHook(() => useBookingViewModel());

      await act(async () => {
        await result.current.getCurrentUser();
      });

      expect(mockSupabase.auth.getUser).toHaveBeenCalled();
    });

    it('should create booking', async () => {
      const mockCreateMutation = jest.fn().mockResolvedValue({
        data: { insertIntoBookingsCollection: { records: [{ id: 'booking-1' }] } },
      });

      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        refetch: jest.fn().mockResolvedValue({}),
      } as any);

      mockUseMutation.mockReturnValue([
        mockCreateMutation,
        { loading: false, error: undefined },
      ] as any);

      mockSupabase.auth.getUser = jest.fn().mockResolvedValue({
        data: { user: { id: 'user-123' } as any },
        error: null,
      });

      const { result } = renderHook(() => useBookingViewModel());

      await act(async () => {
        await result.current.createBooking('space-1', '2024-01-01T10:00:00Z', '2024-01-01T12:00:00Z');
      });

      expect(mockCreateMutation).toHaveBeenCalled();
    });
  });

  describe('Branch Coverage - Edge Cases', () => {
    it('should handle null edges in bookings data', () => {
      mockUseQuery.mockReturnValue({
        data: {
          bookingsCollection: {
            edges: null,
          },
        },
        loading: false,
        refetch: jest.fn(),
      } as any);

      mockUseMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      expect(result.current.bookings).toEqual([]);
    });

    it('should filter out null nodes', () => {
      mockUseQuery.mockReturnValue({
        data: {
          bookingsCollection: {
            edges: [{ node: { id: '1' } }, { node: null }, { node: { id: '2' } }],
          },
        },
        loading: false,
        refetch: jest.fn(),
      } as any);

      mockUseMutation.mockReturnValue([
        jest.fn(),
        { loading: false, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      expect(result.current.bookings).toHaveLength(2);
    });

    it('should return null when no booking data returned', async () => {
      const mockUpdateMutation = jest.fn().mockResolvedValue({
        data: { updateBookingsCollection: { records: [] } },
      });

      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        refetch: jest.fn().mockResolvedValue({}),
      } as any);

      mockUseMutation.mockReturnValue([
        mockUpdateMutation,
        { loading: false, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      const updated = await act(async () => {
        return await result.current.updateBooking('1', { status: 'cancelled' });
      });

      expect(updated).toBeNull();
    });

    it('should handle cancel mutation', async () => {
      const mockCancelMutation = jest.fn().mockResolvedValue({
        data: { updateBookingsCollection: { records: [{ id: '1', status: 'cancelled' }] } },
      });

      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        refetch: jest.fn().mockResolvedValue({}),
      } as any);

      mockUseMutation.mockReturnValue([
        mockCancelMutation,
        { loading: false, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      const cancelled = await act(async () => {
        return await result.current.cancelBooking('1');
      });

      expect(mockCancelMutation).toHaveBeenCalled();
    });

    it('should handle check-in mutation', async () => {
      const mockCheckInMutation = jest.fn().mockResolvedValue({
        data: { updateBookingsCollection: { records: [{ id: '1' }] } },
      });

      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        refetch: jest.fn().mockResolvedValue({}),
      } as any);

      mockUseMutation.mockReturnValue([
        mockCheckInMutation,
        { loading: false, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      const checkedIn = await act(async () => {
        return await result.current.checkIn('1');
      });

      expect(mockCheckInMutation).toHaveBeenCalled();
    });

    it('should aggregate loading states', () => {
      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: true,
        refetch: jest.fn(),
      } as any);

      mockUseMutation.mockReturnValue([
        jest.fn(),
        { loading: true, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      expect(result.current.loading).toBe(true);
    });

    it('should throw error when not authenticated', async () => {
      mockSupabase.auth.getUser = jest.fn().mockResolvedValue({
        data: { user: null },
        error: null,
      });

      const mockCreateMutation = jest.fn();
      mockUseQuery.mockReturnValue({
        data: undefined,
        loading: false,
        refetch: jest.fn(),
      } as any);

      mockUseMutation.mockReturnValue([
        mockCreateMutation,
        { loading: false, error: undefined },
      ] as any);

      const { result } = renderHook(() => useBookingViewModel());

      await expect(
        act(async () => {
          await result.current.createBooking('space-1', '2024-01-01T10:00:00Z', '2024-01-01T12:00:00Z');
        })
      ).rejects.toThrow('Not authenticated');
    });
  });
});
