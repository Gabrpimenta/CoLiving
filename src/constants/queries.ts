import { gql } from '@apollo/client';

export const GET_SPACES = gql`
  query GetSpaces($first: Int!, $after: Cursor) {
    spacesCollection(
      first: $first
      after: $after
      filter: { available: { eq: true } }
      orderBy: { name: AscNullsLast }
    ) {
      edges {
        node {
          id
          nodeId
          name
          type
          capacity
          description
          amenities
          imageUrl
          floor
          available
          createdAt
          updatedAt
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const GET_MY_BOOKINGS = gql`
  query GetMyBookings($userId: UUID!, $first: Int!, $after: Cursor) {
    bookingsCollection(
      first: $first
      after: $after
      filter: { userId: { eq: $userId } }
      orderBy: { startTime: DescNullsLast }
    ) {
      edges {
        node {
          id
          nodeId
          startTime
          endTime
          status
          notes
          checkedIn
          checkedInAt
          qrCode
          createdAt
          updatedAt
          space {
            id
            name
            type
            capacity
            imageUrl
            floor
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation CreateBooking($input: BookingsInsertInput!) {
    insertIntoBookingsCollection(objects: [$input]) {
      records {
        id
        spaceId
        userId
        startTime
        endTime
        status
        notes
        createdAt
      }
    }
  }
`;

export const UPDATE_BOOKING = gql`
  mutation UpdateBooking($id: UUID!, $set: BookingsUpdateInput!) {
    updateBookingsCollection(filter: { id: { eq: $id } }, set: $set) {
      records {
        id
        startTime
        endTime
        status
        notes
        updatedAt
      }
    }
  }
`;

export const CANCEL_BOOKING = gql`
  mutation CancelBooking($id: UUID!) {
    updateBookingsCollection(filter: { id: { eq: $id } }, set: { status: "cancelled" }) {
      records {
        id
        status
        updatedAt
      }
    }
  }
`;

export const CHECK_IN_BOOKING = gql`
  mutation CheckInBooking($id: UUID!, $now: Datetime!) {
    updateBookingsCollection(
      filter: { id: { eq: $id } }
      set: { checkedIn: true, checkedInAt: $now }
    ) {
      records {
        id
        checkedIn
        checkedInAt
        qrCode
      }
    }
  }
`;

