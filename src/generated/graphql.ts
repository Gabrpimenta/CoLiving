import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: string; output: string; }
  Date: { input: string; output: string; }
  Datetime: { input: string; output: string; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Blog = Node & {
  __typename?: 'Blog';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type BlogConnection = {
  __typename?: 'BlogConnection';
  edges: Array<BlogEdge>;
  pageInfo: PageInfo;
};

export type BlogDeleteResponse = {
  __typename?: 'BlogDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog>;
};

export type BlogEdge = {
  __typename?: 'BlogEdge';
  cursor: Scalars['String']['output'];
  node: Blog;
};

export type BlogFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<BlogFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<BlogFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<BlogFilter>>;
};

export type BlogInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BlogInsertResponse = {
  __typename?: 'BlogInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog>;
};

export type BlogOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type BlogUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BlogUpdateResponse = {
  __typename?: 'BlogUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog>;
};

export type Bookings = Node & {
  __typename?: 'Bookings';
  checkedIn?: Maybe<Scalars['Boolean']['output']>;
  checkedInAt?: Maybe<Scalars['Datetime']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  endTime: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  qrCode?: Maybe<Scalars['String']['output']>;
  space?: Maybe<Spaces>;
  spaceId: Scalars['UUID']['output'];
  startTime: Scalars['Datetime']['output'];
  status?: Maybe<Scalars['String']['output']>;
  synced?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  user?: Maybe<Profiles>;
  userId: Scalars['UUID']['output'];
};

export type BookingsConnection = {
  __typename?: 'BookingsConnection';
  edges: Array<BookingsEdge>;
  pageInfo: PageInfo;
};

export type BookingsDeleteResponse = {
  __typename?: 'BookingsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Bookings>;
};

export type BookingsEdge = {
  __typename?: 'BookingsEdge';
  cursor: Scalars['String']['output'];
  node: Bookings;
};

export type BookingsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<BookingsFilter>>;
  checkedIn?: InputMaybe<BooleanFilter>;
  checkedInAt?: InputMaybe<DatetimeFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  endTime?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<BookingsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<BookingsFilter>>;
  qrCode?: InputMaybe<StringFilter>;
  spaceId?: InputMaybe<UuidFilter>;
  startTime?: InputMaybe<DatetimeFilter>;
  status?: InputMaybe<StringFilter>;
  synced?: InputMaybe<BooleanFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type BookingsInsertInput = {
  checkedIn?: InputMaybe<Scalars['Boolean']['input']>;
  checkedInAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  qrCode?: InputMaybe<Scalars['String']['input']>;
  spaceId?: InputMaybe<Scalars['UUID']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  synced?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type BookingsInsertResponse = {
  __typename?: 'BookingsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Bookings>;
};

export type BookingsOrderBy = {
  checkedIn?: InputMaybe<OrderByDirection>;
  checkedInAt?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  endTime?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  qrCode?: InputMaybe<OrderByDirection>;
  spaceId?: InputMaybe<OrderByDirection>;
  startTime?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  synced?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type BookingsUpdateInput = {
  checkedIn?: InputMaybe<Scalars['Boolean']['input']>;
  checkedInAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  qrCode?: InputMaybe<Scalars['String']['input']>;
  spaceId?: InputMaybe<Scalars['UUID']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  synced?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type BookingsUpdateResponse = {
  __typename?: 'BookingsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Bookings>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type EventRsvps = Node & {
  __typename?: 'EventRsvps';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  event?: Maybe<Events>;
  eventId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Profiles>;
  userId: Scalars['UUID']['output'];
};

export type EventRsvpsConnection = {
  __typename?: 'EventRsvpsConnection';
  edges: Array<EventRsvpsEdge>;
  pageInfo: PageInfo;
};

export type EventRsvpsDeleteResponse = {
  __typename?: 'EventRsvpsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EventRsvps>;
};

export type EventRsvpsEdge = {
  __typename?: 'EventRsvpsEdge';
  cursor: Scalars['String']['output'];
  node: EventRsvps;
};

export type EventRsvpsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EventRsvpsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  eventId?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<EventRsvpsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EventRsvpsFilter>>;
  status?: InputMaybe<StringFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type EventRsvpsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type EventRsvpsInsertResponse = {
  __typename?: 'EventRsvpsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EventRsvps>;
};

export type EventRsvpsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  eventId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type EventRsvpsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type EventRsvpsUpdateResponse = {
  __typename?: 'EventRsvpsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EventRsvps>;
};

export type Events = Node & {
  __typename?: 'Events';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eventDate: Scalars['Datetime']['output'];
  eventRsvpsCollection?: Maybe<EventRsvpsConnection>;
  id: Scalars['UUID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxAttendees?: Maybe<Scalars['Int']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organizer?: Maybe<Profiles>;
  organizerId?: Maybe<Scalars['UUID']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type EventsEventRsvpsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventRsvpsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventRsvpsOrderBy>>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventsEdge>;
  pageInfo: PageInfo;
};

export type EventsDeleteResponse = {
  __typename?: 'EventsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type EventsEdge = {
  __typename?: 'EventsEdge';
  cursor: Scalars['String']['output'];
  node: Events;
};

export type EventsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EventsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  eventDate?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  maxAttendees?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<EventsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EventsFilter>>;
  organizerId?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type EventsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxAttendees?: InputMaybe<Scalars['Int']['input']>;
  organizerId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type EventsInsertResponse = {
  __typename?: 'EventsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type EventsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  eventDate?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  imageUrl?: InputMaybe<OrderByDirection>;
  location?: InputMaybe<OrderByDirection>;
  maxAttendees?: InputMaybe<OrderByDirection>;
  organizerId?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type EventsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxAttendees?: InputMaybe<Scalars['Int']['input']>;
  organizerId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type EventsUpdateResponse = {
  __typename?: 'EventsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type FilterIs =
  | 'NOT_NULL'
  | 'NULL';

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type MaintenanceRequests = Node & {
  __typename?: 'MaintenanceRequests';
  assignedTo?: Maybe<Scalars['UUID']['output']>;
  category: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  imageUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  profiles?: Maybe<Profiles>;
  resolvedAt?: Maybe<Scalars['Datetime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  user?: Maybe<Profiles>;
  userId: Scalars['UUID']['output'];
};

export type MaintenanceRequestsConnection = {
  __typename?: 'MaintenanceRequestsConnection';
  edges: Array<MaintenanceRequestsEdge>;
  pageInfo: PageInfo;
};

export type MaintenanceRequestsDeleteResponse = {
  __typename?: 'MaintenanceRequestsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MaintenanceRequests>;
};

export type MaintenanceRequestsEdge = {
  __typename?: 'MaintenanceRequestsEdge';
  cursor: Scalars['String']['output'];
  node: MaintenanceRequests;
};

export type MaintenanceRequestsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MaintenanceRequestsFilter>>;
  assignedTo?: InputMaybe<UuidFilter>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  imageUrls?: InputMaybe<StringListFilter>;
  location?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MaintenanceRequestsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MaintenanceRequestsFilter>>;
  priority?: InputMaybe<StringFilter>;
  resolvedAt?: InputMaybe<DatetimeFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type MaintenanceRequestsInsertInput = {
  assignedTo?: InputMaybe<Scalars['UUID']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imageUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type MaintenanceRequestsInsertResponse = {
  __typename?: 'MaintenanceRequestsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MaintenanceRequests>;
};

export type MaintenanceRequestsOrderBy = {
  assignedTo?: InputMaybe<OrderByDirection>;
  category?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  location?: InputMaybe<OrderByDirection>;
  priority?: InputMaybe<OrderByDirection>;
  resolvedAt?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type MaintenanceRequestsUpdateInput = {
  assignedTo?: InputMaybe<Scalars['UUID']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imageUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type MaintenanceRequestsUpdateResponse = {
  __typename?: 'MaintenanceRequestsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MaintenanceRequests>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Blog` collection */
  deleteFromBlogCollection: BlogDeleteResponse;
  /** Deletes zero or more records from the `Bookings` collection */
  deleteFromBookingsCollection: BookingsDeleteResponse;
  /** Deletes zero or more records from the `EventRsvps` collection */
  deleteFromEventRsvpsCollection: EventRsvpsDeleteResponse;
  /** Deletes zero or more records from the `Events` collection */
  deleteFromEventsCollection: EventsDeleteResponse;
  /** Deletes zero or more records from the `MaintenanceRequests` collection */
  deleteFromMaintenanceRequestsCollection: MaintenanceRequestsDeleteResponse;
  /** Deletes zero or more records from the `Profiles` collection */
  deleteFromProfilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the `Spaces` collection */
  deleteFromSpacesCollection: SpacesDeleteResponse;
  /** Adds one or more `Blog` records to the collection */
  insertIntoBlogCollection?: Maybe<BlogInsertResponse>;
  /** Adds one or more `Bookings` records to the collection */
  insertIntoBookingsCollection?: Maybe<BookingsInsertResponse>;
  /** Adds one or more `EventRsvps` records to the collection */
  insertIntoEventRsvpsCollection?: Maybe<EventRsvpsInsertResponse>;
  /** Adds one or more `Events` records to the collection */
  insertIntoEventsCollection?: Maybe<EventsInsertResponse>;
  /** Adds one or more `MaintenanceRequests` records to the collection */
  insertIntoMaintenanceRequestsCollection?: Maybe<MaintenanceRequestsInsertResponse>;
  /** Adds one or more `Profiles` records to the collection */
  insertIntoProfilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `Spaces` records to the collection */
  insertIntoSpacesCollection?: Maybe<SpacesInsertResponse>;
  /** Updates zero or more records in the `Blog` collection */
  updateBlogCollection: BlogUpdateResponse;
  /** Updates zero or more records in the `Bookings` collection */
  updateBookingsCollection: BookingsUpdateResponse;
  /** Updates zero or more records in the `EventRsvps` collection */
  updateEventRsvpsCollection: EventRsvpsUpdateResponse;
  /** Updates zero or more records in the `Events` collection */
  updateEventsCollection: EventsUpdateResponse;
  /** Updates zero or more records in the `MaintenanceRequests` collection */
  updateMaintenanceRequestsCollection: MaintenanceRequestsUpdateResponse;
  /** Updates zero or more records in the `Profiles` collection */
  updateProfilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the `Spaces` collection */
  updateSpacesCollection: SpacesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromBlogCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BlogFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromBookingsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BookingsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromEventRsvpsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventRsvpsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromEventsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromMaintenanceRequestsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MaintenanceRequestsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromSpacesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SpacesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoBlogCollectionArgs = {
  objects: Array<BlogInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoBookingsCollectionArgs = {
  objects: Array<BookingsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoEventRsvpsCollectionArgs = {
  objects: Array<EventRsvpsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoEventsCollectionArgs = {
  objects: Array<EventsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoMaintenanceRequestsCollectionArgs = {
  objects: Array<MaintenanceRequestsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProfilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoSpacesCollectionArgs = {
  objects: Array<SpacesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateBlogCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BlogFilter>;
  set: BlogUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateBookingsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BookingsFilter>;
  set: BookingsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateEventRsvpsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventRsvpsFilter>;
  set: EventRsvpsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateEventsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventsFilter>;
  set: EventsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateMaintenanceRequestsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MaintenanceRequestsFilter>;
  set: MaintenanceRequestsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateSpacesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SpacesFilter>;
  set: SpacesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export type OrderByDirection =
  /** Ascending order, nulls first */
  | 'AscNullsFirst'
  /** Ascending order, nulls last */
  | 'AscNullsLast'
  /** Descending order, nulls first */
  | 'DescNullsFirst'
  /** Descending order, nulls last */
  | 'DescNullsLast';

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Profiles = Node & {
  __typename?: 'Profiles';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bookingsCollection?: Maybe<BookingsConnection>;
  building?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  eventRsvpsCollection?: Maybe<EventRsvpsConnection>;
  eventsCollection?: Maybe<EventsConnection>;
  floor?: Maybe<Scalars['Int']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  maintenanceRequestsCollection?: Maybe<MaintenanceRequestsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  room?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type ProfilesBookingsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BookingsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


export type ProfilesEventRsvpsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventRsvpsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventRsvpsOrderBy>>;
};


export type ProfilesEventsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


export type ProfilesMaintenanceRequestsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MaintenanceRequestsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MaintenanceRequestsOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: 'ProfilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: 'ProfilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'ProfilesEdge';
  cursor: Scalars['String']['output'];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  avatarUrl?: InputMaybe<StringFilter>;
  building?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  floor?: InputMaybe<IntFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  phone?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  room?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type ProfilesInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  floor?: InputMaybe<Scalars['Int']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  room?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'ProfilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>;
  building?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  floor?: InputMaybe<OrderByDirection>;
  fullName?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  room?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  floor?: InputMaybe<Scalars['Int']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  room?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'ProfilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `Blog` */
  blogCollection?: Maybe<BlogConnection>;
  /** A pagable collection of type `Bookings` */
  bookingsCollection?: Maybe<BookingsConnection>;
  /** A pagable collection of type `EventRsvps` */
  eventRsvpsCollection?: Maybe<EventRsvpsConnection>;
  /** A pagable collection of type `Events` */
  eventsCollection?: Maybe<EventsConnection>;
  /** A pagable collection of type `MaintenanceRequests` */
  maintenanceRequestsCollection?: Maybe<MaintenanceRequestsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  /** A pagable collection of type `Spaces` */
  spacesCollection?: Maybe<SpacesConnection>;
};


/** The root type for querying data */
export type QueryBlogCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BlogFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlogOrderBy>>;
};


/** The root type for querying data */
export type QueryBookingsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BookingsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


/** The root type for querying data */
export type QueryEventRsvpsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventRsvpsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventRsvpsOrderBy>>;
};


/** The root type for querying data */
export type QueryEventsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


/** The root type for querying data */
export type QueryMaintenanceRequestsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MaintenanceRequestsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MaintenanceRequestsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};


/** The root type for querying data */
export type QuerySpacesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SpacesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SpacesOrderBy>>;
};

export type Spaces = Node & {
  __typename?: 'Spaces';
  amenities?: Maybe<Scalars['JSON']['output']>;
  available?: Maybe<Scalars['Boolean']['output']>;
  bookingsCollection?: Maybe<BookingsConnection>;
  capacity: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  floor?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type SpacesBookingsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BookingsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export type SpacesConnection = {
  __typename?: 'SpacesConnection';
  edges: Array<SpacesEdge>;
  pageInfo: PageInfo;
};

export type SpacesDeleteResponse = {
  __typename?: 'SpacesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Spaces>;
};

export type SpacesEdge = {
  __typename?: 'SpacesEdge';
  cursor: Scalars['String']['output'];
  node: Spaces;
};

export type SpacesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SpacesFilter>>;
  available?: InputMaybe<BooleanFilter>;
  capacity?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  floor?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<SpacesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SpacesFilter>>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type SpacesInsertInput = {
  amenities?: InputMaybe<Scalars['JSON']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SpacesInsertResponse = {
  __typename?: 'SpacesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Spaces>;
};

export type SpacesOrderBy = {
  available?: InputMaybe<OrderByDirection>;
  capacity?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  floor?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  imageUrl?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type SpacesUpdateInput = {
  amenities?: InputMaybe<Scalars['JSON']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SpacesUpdateResponse = {
  __typename?: 'SpacesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Spaces>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type GetMyBookingsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetMyBookingsQuery = { __typename?: 'Query', bookingsCollection?: { __typename?: 'BookingsConnection', edges: Array<{ __typename?: 'BookingsEdge', cursor: string, node: { __typename?: 'Bookings', id: string, nodeId: string, startTime: string, endTime: string, status?: string | null, notes?: string | null, checkedIn?: boolean | null, checkedInAt?: string | null, qrCode?: string | null, createdAt?: string | null, updatedAt?: string | null, space?: { __typename?: 'Spaces', id: string, name: string, type: string, capacity: number, imageUrl?: string | null, floor?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor?: string | null, startCursor?: string | null } } | null };

export type GetUpcomingBookingsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  currentTime: Scalars['Datetime']['input'];
}>;


export type GetUpcomingBookingsQuery = { __typename?: 'Query', bookingsCollection?: { __typename?: 'BookingsConnection', edges: Array<{ __typename?: 'BookingsEdge', node: { __typename?: 'Bookings', id: string, startTime: string, endTime: string, status?: string | null, notes?: string | null, checkedIn?: boolean | null, space?: { __typename?: 'Spaces', id: string, name: string, type: string, imageUrl?: string | null, floor?: number | null } | null } }> } | null };

export type GetPastBookingsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  currentTime: Scalars['Datetime']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetPastBookingsQuery = { __typename?: 'Query', bookingsCollection?: { __typename?: 'BookingsConnection', edges: Array<{ __typename?: 'BookingsEdge', cursor: string, node: { __typename?: 'Bookings', id: string, startTime: string, endTime: string, status?: string | null, checkedIn?: boolean | null, space?: { __typename?: 'Spaces', name: string, type: string, imageUrl?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export type GetBookingByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetBookingByIdQuery = { __typename?: 'Query', bookingsCollection?: { __typename?: 'BookingsConnection', edges: Array<{ __typename?: 'BookingsEdge', node: { __typename?: 'Bookings', id: string, startTime: string, endTime: string, status?: string | null, notes?: string | null, checkedIn?: boolean | null, checkedInAt?: string | null, qrCode?: string | null, createdAt?: string | null, space?: { __typename?: 'Spaces', id: string, name: string, type: string, capacity: number, description?: string | null, imageUrl?: string | null, floor?: number | null } | null, user?: { __typename?: 'Profiles', id: string, fullName?: string | null, role?: string | null, building?: string | null, floor?: number | null, room?: string | null } | null } }> } | null };

export type CheckBookingConflictsQueryVariables = Exact<{
  spaceId: Scalars['UUID']['input'];
  startTime: Scalars['Datetime']['input'];
  endTime: Scalars['Datetime']['input'];
}>;


export type CheckBookingConflictsQuery = { __typename?: 'Query', bookingsCollection?: { __typename?: 'BookingsConnection', edges: Array<{ __typename?: 'BookingsEdge', node: { __typename?: 'Bookings', id: string, startTime: string, endTime: string, status?: string | null } }> } | null };

export type CreateBookingMutationVariables = Exact<{
  input: BookingsInsertInput;
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', insertIntoBookingsCollection?: { __typename?: 'BookingsInsertResponse', records: Array<{ __typename?: 'Bookings', id: string, spaceId: string, userId: string, startTime: string, endTime: string, status?: string | null, notes?: string | null, createdAt?: string | null }> } | null };

export type UpdateBookingMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: BookingsUpdateInput;
}>;


export type UpdateBookingMutation = { __typename?: 'Mutation', updateBookingsCollection: { __typename?: 'BookingsUpdateResponse', records: Array<{ __typename?: 'Bookings', id: string, startTime: string, endTime: string, status?: string | null, notes?: string | null, updatedAt?: string | null }> } };

export type CancelBookingMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type CancelBookingMutation = { __typename?: 'Mutation', updateBookingsCollection: { __typename?: 'BookingsUpdateResponse', records: Array<{ __typename?: 'Bookings', id: string, status?: string | null, updatedAt?: string | null }> } };

export type CheckInBookingMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  now: Scalars['Datetime']['input'];
}>;


export type CheckInBookingMutation = { __typename?: 'Mutation', updateBookingsCollection: { __typename?: 'BookingsUpdateResponse', records: Array<{ __typename?: 'Bookings', id: string, checkedIn?: boolean | null, checkedInAt?: string | null, qrCode?: string | null }> } };

export type GenerateQrCodeMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  qrCode: Scalars['String']['input'];
}>;


export type GenerateQrCodeMutation = { __typename?: 'Mutation', updateBookingsCollection: { __typename?: 'BookingsUpdateResponse', records: Array<{ __typename?: 'Bookings', id: string, qrCode?: string | null }> } };

export type GetUpcomingEventsQueryVariables = Exact<{
  currentTime: Scalars['Datetime']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetUpcomingEventsQuery = { __typename?: 'Query', eventsCollection?: { __typename?: 'EventsConnection', edges: Array<{ __typename?: 'EventsEdge', cursor: string, node: { __typename?: 'Events', id: string, title: string, description?: string | null, eventDate: string, location?: string | null, maxAttendees?: number | null, imageUrl?: string | null, createdAt?: string | null, organizer?: { __typename?: 'Profiles', id: string, fullName?: string | null, avatarUrl?: string | null } | null, eventRsvpsCollection?: { __typename?: 'EventRsvpsConnection', edges: Array<{ __typename?: 'EventRsvpsEdge', node: { __typename?: 'EventRsvps', id: string, status?: string | null, user?: { __typename?: 'Profiles', id: string, fullName?: string | null } | null } }> } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export type GetEventByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetEventByIdQuery = { __typename?: 'Query', eventsCollection?: { __typename?: 'EventsConnection', edges: Array<{ __typename?: 'EventsEdge', node: { __typename?: 'Events', id: string, title: string, description?: string | null, eventDate: string, location?: string | null, maxAttendees?: number | null, imageUrl?: string | null, createdAt?: string | null, organizer?: { __typename?: 'Profiles', id: string, fullName?: string | null, avatarUrl?: string | null, role?: string | null } | null, eventRsvpsCollection?: { __typename?: 'EventRsvpsConnection', edges: Array<{ __typename?: 'EventRsvpsEdge', node: { __typename?: 'EventRsvps', id: string, status?: string | null, createdAt?: string | null, user?: { __typename?: 'Profiles', id: string, fullName?: string | null, avatarUrl?: string | null } | null } }> } | null } }> } | null };

export type GetMyRsvpsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetMyRsvpsQuery = { __typename?: 'Query', eventRsvpsCollection?: { __typename?: 'EventRsvpsConnection', edges: Array<{ __typename?: 'EventRsvpsEdge', cursor: string, node: { __typename?: 'EventRsvps', id: string, status?: string | null, createdAt?: string | null, event?: { __typename?: 'Events', id: string, title: string, description?: string | null, eventDate: string, location?: string | null, imageUrl?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export type CreateEventMutationVariables = Exact<{
  input: EventsInsertInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', insertIntoEventsCollection?: { __typename?: 'EventsInsertResponse', records: Array<{ __typename?: 'Events', id: string, title: string, description?: string | null, eventDate: string, location?: string | null, maxAttendees?: number | null, organizerId?: string | null, createdAt?: string | null }> } | null };

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: EventsUpdateInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEventsCollection: { __typename?: 'EventsUpdateResponse', records: Array<{ __typename?: 'Events', id: string, title: string, description?: string | null, eventDate: string, location?: string | null, maxAttendees?: number | null, updatedAt?: string | null }> } };

export type UpsertRsvpMutationVariables = Exact<{
  input: EventRsvpsInsertInput;
}>;


export type UpsertRsvpMutation = { __typename?: 'Mutation', insertIntoEventRsvpsCollection?: { __typename?: 'EventRsvpsInsertResponse', records: Array<{ __typename?: 'EventRsvps', id: string, eventId: string, userId: string, status?: string | null, createdAt?: string | null }> } | null };

export type CancelRsvpMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type CancelRsvpMutation = { __typename?: 'Mutation', deleteFromEventRsvpsCollection: { __typename?: 'EventRsvpsDeleteResponse', records: Array<{ __typename?: 'EventRsvps', id: string }> } };

export type GetMyMaintenanceRequestsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetMyMaintenanceRequestsQuery = { __typename?: 'Query', maintenanceRequestsCollection?: { __typename?: 'MaintenanceRequestsConnection', edges: Array<{ __typename?: 'MaintenanceRequestsEdge', cursor: string, node: { __typename?: 'MaintenanceRequests', id: string, title: string, description: string, category: string, priority?: string | null, status?: string | null, location?: string | null, imageUrls?: Array<string | null> | null, createdAt?: string | null, updatedAt?: string | null, resolvedAt?: string | null, assignedTo?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export type GetMaintenanceRequestByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetMaintenanceRequestByIdQuery = { __typename?: 'Query', maintenanceRequestsCollection?: { __typename?: 'MaintenanceRequestsConnection', edges: Array<{ __typename?: 'MaintenanceRequestsEdge', node: { __typename?: 'MaintenanceRequests', id: string, title: string, description: string, category: string, priority?: string | null, status?: string | null, location?: string | null, imageUrls?: Array<string | null> | null, createdAt?: string | null, updatedAt?: string | null, resolvedAt?: string | null, assignedTo?: string | null, user?: { __typename?: 'Profiles', id: string, fullName?: string | null, building?: string | null, floor?: number | null, room?: string | null, phone?: string | null } | null } }> } | null };

export type GetMaintenanceByStatusQueryVariables = Exact<{
  status: Scalars['String']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetMaintenanceByStatusQuery = { __typename?: 'Query', maintenanceRequestsCollection?: { __typename?: 'MaintenanceRequestsConnection', edges: Array<{ __typename?: 'MaintenanceRequestsEdge', cursor: string, node: { __typename?: 'MaintenanceRequests', id: string, title: string, category: string, priority?: string | null, status?: string | null, location?: string | null, createdAt?: string | null, user?: { __typename?: 'Profiles', fullName?: string | null, building?: string | null, floor?: number | null, room?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export type CreateMaintenanceRequestMutationVariables = Exact<{
  input: MaintenanceRequestsInsertInput;
}>;


export type CreateMaintenanceRequestMutation = { __typename?: 'Mutation', insertIntoMaintenanceRequestsCollection?: { __typename?: 'MaintenanceRequestsInsertResponse', records: Array<{ __typename?: 'MaintenanceRequests', id: string, userId: string, title: string, description: string, category: string, priority?: string | null, status?: string | null, location?: string | null, imageUrls?: Array<string | null> | null, createdAt?: string | null }> } | null };

export type UpdateMaintenanceRequestMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: MaintenanceRequestsUpdateInput;
}>;


export type UpdateMaintenanceRequestMutation = { __typename?: 'Mutation', updateMaintenanceRequestsCollection: { __typename?: 'MaintenanceRequestsUpdateResponse', records: Array<{ __typename?: 'MaintenanceRequests', id: string, status?: string | null, assignedTo?: string | null, resolvedAt?: string | null, updatedAt?: string | null }> } };

export type ResolveMaintenanceRequestMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  resolvedAt: Scalars['Datetime']['input'];
}>;


export type ResolveMaintenanceRequestMutation = { __typename?: 'Mutation', updateMaintenanceRequestsCollection: { __typename?: 'MaintenanceRequestsUpdateResponse', records: Array<{ __typename?: 'MaintenanceRequests', id: string, status?: string | null, resolvedAt?: string | null }> } };

export type GetMyProfileQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type GetMyProfileQuery = { __typename?: 'Query', profilesCollection?: { __typename?: 'ProfilesConnection', edges: Array<{ __typename?: 'ProfilesEdge', node: { __typename?: 'Profiles', id: string, fullName?: string | null, avatarUrl?: string | null, role?: string | null, building?: string | null, floor?: number | null, room?: string | null, phone?: string | null, createdAt?: string | null, updatedAt?: string | null } }> } | null };

export type GetResidentsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetResidentsQuery = { __typename?: 'Query', profilesCollection?: { __typename?: 'ProfilesConnection', edges: Array<{ __typename?: 'ProfilesEdge', cursor: string, node: { __typename?: 'Profiles', id: string, fullName?: string | null, avatarUrl?: string | null, building?: string | null, floor?: number | null, room?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export type GetProfileByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetProfileByIdQuery = { __typename?: 'Query', profilesCollection?: { __typename?: 'ProfilesConnection', edges: Array<{ __typename?: 'ProfilesEdge', node: { __typename?: 'Profiles', id: string, fullName?: string | null, avatarUrl?: string | null, role?: string | null, building?: string | null, floor?: number | null, room?: string | null, phone?: string | null, createdAt?: string | null } }> } | null };

export type UpdateProfileMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: ProfilesUpdateInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfilesCollection: { __typename?: 'ProfilesUpdateResponse', records: Array<{ __typename?: 'Profiles', id: string, fullName?: string | null, avatarUrl?: string | null, building?: string | null, floor?: number | null, room?: string | null, phone?: string | null, updatedAt?: string | null }> } };

export type CreateProfileMutationVariables = Exact<{
  input: ProfilesInsertInput;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', insertIntoProfilesCollection?: { __typename?: 'ProfilesInsertResponse', records: Array<{ __typename?: 'Profiles', id: string, fullName?: string | null, role?: string | null, createdAt?: string | null }> } | null };

export type GetSpacesQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetSpacesQuery = { __typename?: 'Query', spacesCollection?: { __typename?: 'SpacesConnection', edges: Array<{ __typename?: 'SpacesEdge', cursor: string, node: { __typename?: 'Spaces', id: string, nodeId: string, name: string, type: string, capacity: number, description?: string | null, amenities?: any | null, imageUrl?: string | null, floor?: number | null, available?: boolean | null, createdAt?: string | null, updatedAt?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };

export type GetSpaceByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetSpaceByIdQuery = { __typename?: 'Query', spacesCollection?: { __typename?: 'SpacesConnection', edges: Array<{ __typename?: 'SpacesEdge', node: { __typename?: 'Spaces', id: string, name: string, type: string, capacity: number, description?: string | null, amenities?: any | null, imageUrl?: string | null, floor?: number | null, available?: boolean | null, createdAt?: string | null, updatedAt?: string | null } }> } | null };

export type GetSpacesByTypeQueryVariables = Exact<{
  type: Scalars['String']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetSpacesByTypeQuery = { __typename?: 'Query', spacesCollection?: { __typename?: 'SpacesConnection', edges: Array<{ __typename?: 'SpacesEdge', cursor: string, node: { __typename?: 'Spaces', id: string, name: string, type: string, capacity: number, description?: string | null, imageUrl?: string | null, floor?: number | null, available?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };

export type GetSpaceWithBookingsQueryVariables = Exact<{
  spaceId: Scalars['UUID']['input'];
  startDate: Scalars['Datetime']['input'];
}>;


export type GetSpaceWithBookingsQuery = { __typename?: 'Query', spacesCollection?: { __typename?: 'SpacesConnection', edges: Array<{ __typename?: 'SpacesEdge', node: { __typename?: 'Spaces', id: string, name: string, type: string, capacity: number, description?: string | null, imageUrl?: string | null, floor?: number | null, available?: boolean | null, bookingsCollection?: { __typename?: 'BookingsConnection', edges: Array<{ __typename?: 'BookingsEdge', node: { __typename?: 'Bookings', id: string, startTime: string, endTime: string, status?: string | null, user?: { __typename?: 'Profiles', fullName?: string | null } | null } }> } | null } }> } | null };

export type GetAvailableSpacesQueryVariables = Exact<{
  startTime: Scalars['Datetime']['input'];
  endTime: Scalars['Datetime']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetAvailableSpacesQuery = { __typename?: 'Query', spacesCollection?: { __typename?: 'SpacesConnection', edges: Array<{ __typename?: 'SpacesEdge', node: { __typename?: 'Spaces', id: string, name: string, type: string, capacity: number, description?: string | null, imageUrl?: string | null, floor?: number | null } }> } | null };


export const GetMyBookingsDocument = gql`
    query GetMyBookings($userId: UUID!, $first: Int!, $after: Cursor) {
  bookingsCollection(
    first: $first
    after: $after
    filter: {userId: {eq: $userId}}
    orderBy: {startTime: DescNullsLast}
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

/**
 * __useGetMyBookingsQuery__
 *
 * To run a query within a React component, call `useGetMyBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBookingsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetMyBookingsQuery(baseOptions: Apollo.QueryHookOptions<GetMyBookingsQuery, GetMyBookingsQueryVariables> & ({ variables: GetMyBookingsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyBookingsQuery, GetMyBookingsQueryVariables>(GetMyBookingsDocument, options);
      }
export function useGetMyBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBookingsQuery, GetMyBookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyBookingsQuery, GetMyBookingsQueryVariables>(GetMyBookingsDocument, options);
        }
export function useGetMyBookingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMyBookingsQuery, GetMyBookingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyBookingsQuery, GetMyBookingsQueryVariables>(GetMyBookingsDocument, options);
        }
export type GetMyBookingsQueryHookResult = ReturnType<typeof useGetMyBookingsQuery>;
export type GetMyBookingsLazyQueryHookResult = ReturnType<typeof useGetMyBookingsLazyQuery>;
export type GetMyBookingsSuspenseQueryHookResult = ReturnType<typeof useGetMyBookingsSuspenseQuery>;
export type GetMyBookingsQueryResult = Apollo.QueryResult<GetMyBookingsQuery, GetMyBookingsQueryVariables>;
export const GetUpcomingBookingsDocument = gql`
    query GetUpcomingBookings($userId: UUID!, $currentTime: Datetime!) {
  bookingsCollection(
    first: 20
    filter: {userId: {eq: $userId}, startTime: {gte: $currentTime}, status: {in: ["confirmed", "pending"]}}
    orderBy: {startTime: AscNullsLast}
  ) {
    edges {
      node {
        id
        startTime
        endTime
        status
        notes
        checkedIn
        space {
          id
          name
          type
          imageUrl
          floor
        }
      }
    }
  }
}
    `;

/**
 * __useGetUpcomingBookingsQuery__
 *
 * To run a query within a React component, call `useGetUpcomingBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingBookingsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      currentTime: // value for 'currentTime'
 *   },
 * });
 */
export function useGetUpcomingBookingsQuery(baseOptions: Apollo.QueryHookOptions<GetUpcomingBookingsQuery, GetUpcomingBookingsQueryVariables> & ({ variables: GetUpcomingBookingsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingBookingsQuery, GetUpcomingBookingsQueryVariables>(GetUpcomingBookingsDocument, options);
      }
export function useGetUpcomingBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingBookingsQuery, GetUpcomingBookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingBookingsQuery, GetUpcomingBookingsQueryVariables>(GetUpcomingBookingsDocument, options);
        }
export function useGetUpcomingBookingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUpcomingBookingsQuery, GetUpcomingBookingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUpcomingBookingsQuery, GetUpcomingBookingsQueryVariables>(GetUpcomingBookingsDocument, options);
        }
export type GetUpcomingBookingsQueryHookResult = ReturnType<typeof useGetUpcomingBookingsQuery>;
export type GetUpcomingBookingsLazyQueryHookResult = ReturnType<typeof useGetUpcomingBookingsLazyQuery>;
export type GetUpcomingBookingsSuspenseQueryHookResult = ReturnType<typeof useGetUpcomingBookingsSuspenseQuery>;
export type GetUpcomingBookingsQueryResult = Apollo.QueryResult<GetUpcomingBookingsQuery, GetUpcomingBookingsQueryVariables>;
export const GetPastBookingsDocument = gql`
    query GetPastBookings($userId: UUID!, $currentTime: Datetime!, $first: Int!) {
  bookingsCollection(
    first: $first
    filter: {userId: {eq: $userId}, endTime: {lt: $currentTime}}
    orderBy: {endTime: DescNullsLast}
  ) {
    edges {
      node {
        id
        startTime
        endTime
        status
        checkedIn
        space {
          name
          type
          imageUrl
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useGetPastBookingsQuery__
 *
 * To run a query within a React component, call `useGetPastBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPastBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPastBookingsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      currentTime: // value for 'currentTime'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPastBookingsQuery(baseOptions: Apollo.QueryHookOptions<GetPastBookingsQuery, GetPastBookingsQueryVariables> & ({ variables: GetPastBookingsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPastBookingsQuery, GetPastBookingsQueryVariables>(GetPastBookingsDocument, options);
      }
export function useGetPastBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPastBookingsQuery, GetPastBookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPastBookingsQuery, GetPastBookingsQueryVariables>(GetPastBookingsDocument, options);
        }
export function useGetPastBookingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPastBookingsQuery, GetPastBookingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPastBookingsQuery, GetPastBookingsQueryVariables>(GetPastBookingsDocument, options);
        }
export type GetPastBookingsQueryHookResult = ReturnType<typeof useGetPastBookingsQuery>;
export type GetPastBookingsLazyQueryHookResult = ReturnType<typeof useGetPastBookingsLazyQuery>;
export type GetPastBookingsSuspenseQueryHookResult = ReturnType<typeof useGetPastBookingsSuspenseQuery>;
export type GetPastBookingsQueryResult = Apollo.QueryResult<GetPastBookingsQuery, GetPastBookingsQueryVariables>;
export const GetBookingByIdDocument = gql`
    query GetBookingById($id: UUID!) {
  bookingsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        startTime
        endTime
        status
        notes
        checkedIn
        checkedInAt
        qrCode
        createdAt
        space {
          id
          name
          type
          capacity
          description
          imageUrl
          floor
        }
        user {
          id
          fullName
          role
          building
          floor
          room
        }
      }
    }
  }
}
    `;

/**
 * __useGetBookingByIdQuery__
 *
 * To run a query within a React component, call `useGetBookingByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookingByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables> & ({ variables: GetBookingByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
      }
export function useGetBookingByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
        }
export function useGetBookingByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
        }
export type GetBookingByIdQueryHookResult = ReturnType<typeof useGetBookingByIdQuery>;
export type GetBookingByIdLazyQueryHookResult = ReturnType<typeof useGetBookingByIdLazyQuery>;
export type GetBookingByIdSuspenseQueryHookResult = ReturnType<typeof useGetBookingByIdSuspenseQuery>;
export type GetBookingByIdQueryResult = Apollo.QueryResult<GetBookingByIdQuery, GetBookingByIdQueryVariables>;
export const CheckBookingConflictsDocument = gql`
    query CheckBookingConflicts($spaceId: UUID!, $startTime: Datetime!, $endTime: Datetime!) {
  bookingsCollection(
    filter: {spaceId: {eq: $spaceId}, status: {in: ["confirmed", "pending"]}, startTime: {lt: $endTime}, endTime: {gt: $startTime}}
  ) {
    edges {
      node {
        id
        startTime
        endTime
        status
      }
    }
  }
}
    `;

/**
 * __useCheckBookingConflictsQuery__
 *
 * To run a query within a React component, call `useCheckBookingConflictsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckBookingConflictsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckBookingConflictsQuery({
 *   variables: {
 *      spaceId: // value for 'spaceId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *   },
 * });
 */
export function useCheckBookingConflictsQuery(baseOptions: Apollo.QueryHookOptions<CheckBookingConflictsQuery, CheckBookingConflictsQueryVariables> & ({ variables: CheckBookingConflictsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckBookingConflictsQuery, CheckBookingConflictsQueryVariables>(CheckBookingConflictsDocument, options);
      }
export function useCheckBookingConflictsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckBookingConflictsQuery, CheckBookingConflictsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckBookingConflictsQuery, CheckBookingConflictsQueryVariables>(CheckBookingConflictsDocument, options);
        }
export function useCheckBookingConflictsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CheckBookingConflictsQuery, CheckBookingConflictsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckBookingConflictsQuery, CheckBookingConflictsQueryVariables>(CheckBookingConflictsDocument, options);
        }
export type CheckBookingConflictsQueryHookResult = ReturnType<typeof useCheckBookingConflictsQuery>;
export type CheckBookingConflictsLazyQueryHookResult = ReturnType<typeof useCheckBookingConflictsLazyQuery>;
export type CheckBookingConflictsSuspenseQueryHookResult = ReturnType<typeof useCheckBookingConflictsSuspenseQuery>;
export type CheckBookingConflictsQueryResult = Apollo.QueryResult<CheckBookingConflictsQuery, CheckBookingConflictsQueryVariables>;
export const CreateBookingDocument = gql`
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
export type CreateBookingMutationFn = Apollo.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, options);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const UpdateBookingDocument = gql`
    mutation UpdateBooking($id: UUID!, $set: BookingsUpdateInput!) {
  updateBookingsCollection(filter: {id: {eq: $id}}, set: $set) {
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
export type UpdateBookingMutationFn = Apollo.MutationFunction<UpdateBookingMutation, UpdateBookingMutationVariables>;

/**
 * __useUpdateBookingMutation__
 *
 * To run a mutation, you first call `useUpdateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookingMutation, { data, loading, error }] = useUpdateBookingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateBookingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookingMutation, UpdateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookingMutation, UpdateBookingMutationVariables>(UpdateBookingDocument, options);
      }
export type UpdateBookingMutationHookResult = ReturnType<typeof useUpdateBookingMutation>;
export type UpdateBookingMutationResult = Apollo.MutationResult<UpdateBookingMutation>;
export type UpdateBookingMutationOptions = Apollo.BaseMutationOptions<UpdateBookingMutation, UpdateBookingMutationVariables>;
export const CancelBookingDocument = gql`
    mutation CancelBooking($id: UUID!) {
  updateBookingsCollection(filter: {id: {eq: $id}}, set: {status: "cancelled"}) {
    records {
      id
      status
      updatedAt
    }
  }
}
    `;
export type CancelBookingMutationFn = Apollo.MutationFunction<CancelBookingMutation, CancelBookingMutationVariables>;

/**
 * __useCancelBookingMutation__
 *
 * To run a mutation, you first call `useCancelBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelBookingMutation, { data, loading, error }] = useCancelBookingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelBookingMutation(baseOptions?: Apollo.MutationHookOptions<CancelBookingMutation, CancelBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelBookingMutation, CancelBookingMutationVariables>(CancelBookingDocument, options);
      }
export type CancelBookingMutationHookResult = ReturnType<typeof useCancelBookingMutation>;
export type CancelBookingMutationResult = Apollo.MutationResult<CancelBookingMutation>;
export type CancelBookingMutationOptions = Apollo.BaseMutationOptions<CancelBookingMutation, CancelBookingMutationVariables>;
export const CheckInBookingDocument = gql`
    mutation CheckInBooking($id: UUID!, $now: Datetime!) {
  updateBookingsCollection(
    filter: {id: {eq: $id}}
    set: {checkedIn: true, checkedInAt: $now}
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
export type CheckInBookingMutationFn = Apollo.MutationFunction<CheckInBookingMutation, CheckInBookingMutationVariables>;

/**
 * __useCheckInBookingMutation__
 *
 * To run a mutation, you first call `useCheckInBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckInBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkInBookingMutation, { data, loading, error }] = useCheckInBookingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      now: // value for 'now'
 *   },
 * });
 */
export function useCheckInBookingMutation(baseOptions?: Apollo.MutationHookOptions<CheckInBookingMutation, CheckInBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckInBookingMutation, CheckInBookingMutationVariables>(CheckInBookingDocument, options);
      }
export type CheckInBookingMutationHookResult = ReturnType<typeof useCheckInBookingMutation>;
export type CheckInBookingMutationResult = Apollo.MutationResult<CheckInBookingMutation>;
export type CheckInBookingMutationOptions = Apollo.BaseMutationOptions<CheckInBookingMutation, CheckInBookingMutationVariables>;
export const GenerateQrCodeDocument = gql`
    mutation GenerateQRCode($id: UUID!, $qrCode: String!) {
  updateBookingsCollection(filter: {id: {eq: $id}}, set: {qrCode: $qrCode}) {
    records {
      id
      qrCode
    }
  }
}
    `;
export type GenerateQrCodeMutationFn = Apollo.MutationFunction<GenerateQrCodeMutation, GenerateQrCodeMutationVariables>;

/**
 * __useGenerateQrCodeMutation__
 *
 * To run a mutation, you first call `useGenerateQrCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateQrCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateQrCodeMutation, { data, loading, error }] = useGenerateQrCodeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      qrCode: // value for 'qrCode'
 *   },
 * });
 */
export function useGenerateQrCodeMutation(baseOptions?: Apollo.MutationHookOptions<GenerateQrCodeMutation, GenerateQrCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateQrCodeMutation, GenerateQrCodeMutationVariables>(GenerateQrCodeDocument, options);
      }
export type GenerateQrCodeMutationHookResult = ReturnType<typeof useGenerateQrCodeMutation>;
export type GenerateQrCodeMutationResult = Apollo.MutationResult<GenerateQrCodeMutation>;
export type GenerateQrCodeMutationOptions = Apollo.BaseMutationOptions<GenerateQrCodeMutation, GenerateQrCodeMutationVariables>;
export const GetUpcomingEventsDocument = gql`
    query GetUpcomingEvents($currentTime: Datetime!, $first: Int!) {
  eventsCollection(
    first: $first
    filter: {eventDate: {gte: $currentTime}}
    orderBy: {eventDate: AscNullsLast}
  ) {
    edges {
      node {
        id
        title
        description
        eventDate
        location
        maxAttendees
        imageUrl
        createdAt
        organizer {
          id
          fullName
          avatarUrl
        }
        eventRsvpsCollection {
          edges {
            node {
              id
              status
              user {
                id
                fullName
              }
            }
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useGetUpcomingEventsQuery__
 *
 * To run a query within a React component, call `useGetUpcomingEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingEventsQuery({
 *   variables: {
 *      currentTime: // value for 'currentTime'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetUpcomingEventsQuery(baseOptions: Apollo.QueryHookOptions<GetUpcomingEventsQuery, GetUpcomingEventsQueryVariables> & ({ variables: GetUpcomingEventsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingEventsQuery, GetUpcomingEventsQueryVariables>(GetUpcomingEventsDocument, options);
      }
export function useGetUpcomingEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingEventsQuery, GetUpcomingEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingEventsQuery, GetUpcomingEventsQueryVariables>(GetUpcomingEventsDocument, options);
        }
export function useGetUpcomingEventsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUpcomingEventsQuery, GetUpcomingEventsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUpcomingEventsQuery, GetUpcomingEventsQueryVariables>(GetUpcomingEventsDocument, options);
        }
export type GetUpcomingEventsQueryHookResult = ReturnType<typeof useGetUpcomingEventsQuery>;
export type GetUpcomingEventsLazyQueryHookResult = ReturnType<typeof useGetUpcomingEventsLazyQuery>;
export type GetUpcomingEventsSuspenseQueryHookResult = ReturnType<typeof useGetUpcomingEventsSuspenseQuery>;
export type GetUpcomingEventsQueryResult = Apollo.QueryResult<GetUpcomingEventsQuery, GetUpcomingEventsQueryVariables>;
export const GetEventByIdDocument = gql`
    query GetEventById($id: UUID!) {
  eventsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        title
        description
        eventDate
        location
        maxAttendees
        imageUrl
        createdAt
        organizer {
          id
          fullName
          avatarUrl
          role
        }
        eventRsvpsCollection {
          edges {
            node {
              id
              status
              createdAt
              user {
                id
                fullName
                avatarUrl
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetEventByIdQuery__
 *
 * To run a query within a React component, call `useGetEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables> & ({ variables: GetEventByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
      }
export function useGetEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
        }
export function useGetEventByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
        }
export type GetEventByIdQueryHookResult = ReturnType<typeof useGetEventByIdQuery>;
export type GetEventByIdLazyQueryHookResult = ReturnType<typeof useGetEventByIdLazyQuery>;
export type GetEventByIdSuspenseQueryHookResult = ReturnType<typeof useGetEventByIdSuspenseQuery>;
export type GetEventByIdQueryResult = Apollo.QueryResult<GetEventByIdQuery, GetEventByIdQueryVariables>;
export const GetMyRsvpsDocument = gql`
    query GetMyRsvps($userId: UUID!, $first: Int!) {
  eventRsvpsCollection(
    first: $first
    filter: {userId: {eq: $userId}}
    orderBy: {createdAt: DescNullsLast}
  ) {
    edges {
      node {
        id
        status
        createdAt
        event {
          id
          title
          description
          eventDate
          location
          imageUrl
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useGetMyRsvpsQuery__
 *
 * To run a query within a React component, call `useGetMyRsvpsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyRsvpsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyRsvpsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetMyRsvpsQuery(baseOptions: Apollo.QueryHookOptions<GetMyRsvpsQuery, GetMyRsvpsQueryVariables> & ({ variables: GetMyRsvpsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyRsvpsQuery, GetMyRsvpsQueryVariables>(GetMyRsvpsDocument, options);
      }
export function useGetMyRsvpsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyRsvpsQuery, GetMyRsvpsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyRsvpsQuery, GetMyRsvpsQueryVariables>(GetMyRsvpsDocument, options);
        }
export function useGetMyRsvpsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMyRsvpsQuery, GetMyRsvpsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyRsvpsQuery, GetMyRsvpsQueryVariables>(GetMyRsvpsDocument, options);
        }
export type GetMyRsvpsQueryHookResult = ReturnType<typeof useGetMyRsvpsQuery>;
export type GetMyRsvpsLazyQueryHookResult = ReturnType<typeof useGetMyRsvpsLazyQuery>;
export type GetMyRsvpsSuspenseQueryHookResult = ReturnType<typeof useGetMyRsvpsSuspenseQuery>;
export type GetMyRsvpsQueryResult = Apollo.QueryResult<GetMyRsvpsQuery, GetMyRsvpsQueryVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($input: EventsInsertInput!) {
  insertIntoEventsCollection(objects: [$input]) {
    records {
      id
      title
      description
      eventDate
      location
      maxAttendees
      organizerId
      createdAt
    }
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($id: UUID!, $set: EventsUpdateInput!) {
  updateEventsCollection(filter: {id: {eq: $id}}, set: $set) {
    records {
      id
      title
      description
      eventDate
      location
      maxAttendees
      updatedAt
    }
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const UpsertRsvpDocument = gql`
    mutation UpsertRsvp($input: EventRsvpsInsertInput!) {
  insertIntoEventRsvpsCollection(objects: [$input]) {
    records {
      id
      eventId
      userId
      status
      createdAt
    }
  }
}
    `;
export type UpsertRsvpMutationFn = Apollo.MutationFunction<UpsertRsvpMutation, UpsertRsvpMutationVariables>;

/**
 * __useUpsertRsvpMutation__
 *
 * To run a mutation, you first call `useUpsertRsvpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertRsvpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertRsvpMutation, { data, loading, error }] = useUpsertRsvpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertRsvpMutation(baseOptions?: Apollo.MutationHookOptions<UpsertRsvpMutation, UpsertRsvpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertRsvpMutation, UpsertRsvpMutationVariables>(UpsertRsvpDocument, options);
      }
export type UpsertRsvpMutationHookResult = ReturnType<typeof useUpsertRsvpMutation>;
export type UpsertRsvpMutationResult = Apollo.MutationResult<UpsertRsvpMutation>;
export type UpsertRsvpMutationOptions = Apollo.BaseMutationOptions<UpsertRsvpMutation, UpsertRsvpMutationVariables>;
export const CancelRsvpDocument = gql`
    mutation CancelRsvp($id: UUID!) {
  deleteFromEventRsvpsCollection(filter: {id: {eq: $id}}) {
    records {
      id
    }
  }
}
    `;
export type CancelRsvpMutationFn = Apollo.MutationFunction<CancelRsvpMutation, CancelRsvpMutationVariables>;

/**
 * __useCancelRsvpMutation__
 *
 * To run a mutation, you first call `useCancelRsvpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelRsvpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelRsvpMutation, { data, loading, error }] = useCancelRsvpMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelRsvpMutation(baseOptions?: Apollo.MutationHookOptions<CancelRsvpMutation, CancelRsvpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelRsvpMutation, CancelRsvpMutationVariables>(CancelRsvpDocument, options);
      }
export type CancelRsvpMutationHookResult = ReturnType<typeof useCancelRsvpMutation>;
export type CancelRsvpMutationResult = Apollo.MutationResult<CancelRsvpMutation>;
export type CancelRsvpMutationOptions = Apollo.BaseMutationOptions<CancelRsvpMutation, CancelRsvpMutationVariables>;
export const GetMyMaintenanceRequestsDocument = gql`
    query GetMyMaintenanceRequests($userId: UUID!, $first: Int!, $after: Cursor) {
  maintenanceRequestsCollection(
    first: $first
    after: $after
    filter: {userId: {eq: $userId}}
    orderBy: {createdAt: DescNullsLast}
  ) {
    edges {
      node {
        id
        title
        description
        category
        priority
        status
        location
        imageUrls
        createdAt
        updatedAt
        resolvedAt
        assignedTo
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useGetMyMaintenanceRequestsQuery__
 *
 * To run a query within a React component, call `useGetMyMaintenanceRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyMaintenanceRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyMaintenanceRequestsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetMyMaintenanceRequestsQuery(baseOptions: Apollo.QueryHookOptions<GetMyMaintenanceRequestsQuery, GetMyMaintenanceRequestsQueryVariables> & ({ variables: GetMyMaintenanceRequestsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyMaintenanceRequestsQuery, GetMyMaintenanceRequestsQueryVariables>(GetMyMaintenanceRequestsDocument, options);
      }
export function useGetMyMaintenanceRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyMaintenanceRequestsQuery, GetMyMaintenanceRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyMaintenanceRequestsQuery, GetMyMaintenanceRequestsQueryVariables>(GetMyMaintenanceRequestsDocument, options);
        }
export function useGetMyMaintenanceRequestsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMyMaintenanceRequestsQuery, GetMyMaintenanceRequestsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyMaintenanceRequestsQuery, GetMyMaintenanceRequestsQueryVariables>(GetMyMaintenanceRequestsDocument, options);
        }
export type GetMyMaintenanceRequestsQueryHookResult = ReturnType<typeof useGetMyMaintenanceRequestsQuery>;
export type GetMyMaintenanceRequestsLazyQueryHookResult = ReturnType<typeof useGetMyMaintenanceRequestsLazyQuery>;
export type GetMyMaintenanceRequestsSuspenseQueryHookResult = ReturnType<typeof useGetMyMaintenanceRequestsSuspenseQuery>;
export type GetMyMaintenanceRequestsQueryResult = Apollo.QueryResult<GetMyMaintenanceRequestsQuery, GetMyMaintenanceRequestsQueryVariables>;
export const GetMaintenanceRequestByIdDocument = gql`
    query GetMaintenanceRequestById($id: UUID!) {
  maintenanceRequestsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        title
        description
        category
        priority
        status
        location
        imageUrls
        createdAt
        updatedAt
        resolvedAt
        user {
          id
          fullName
          building
          floor
          room
          phone
        }
        assignedTo
      }
    }
  }
}
    `;

/**
 * __useGetMaintenanceRequestByIdQuery__
 *
 * To run a query within a React component, call `useGetMaintenanceRequestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaintenanceRequestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaintenanceRequestByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMaintenanceRequestByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMaintenanceRequestByIdQuery, GetMaintenanceRequestByIdQueryVariables> & ({ variables: GetMaintenanceRequestByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaintenanceRequestByIdQuery, GetMaintenanceRequestByIdQueryVariables>(GetMaintenanceRequestByIdDocument, options);
      }
export function useGetMaintenanceRequestByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaintenanceRequestByIdQuery, GetMaintenanceRequestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaintenanceRequestByIdQuery, GetMaintenanceRequestByIdQueryVariables>(GetMaintenanceRequestByIdDocument, options);
        }
export function useGetMaintenanceRequestByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMaintenanceRequestByIdQuery, GetMaintenanceRequestByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMaintenanceRequestByIdQuery, GetMaintenanceRequestByIdQueryVariables>(GetMaintenanceRequestByIdDocument, options);
        }
export type GetMaintenanceRequestByIdQueryHookResult = ReturnType<typeof useGetMaintenanceRequestByIdQuery>;
export type GetMaintenanceRequestByIdLazyQueryHookResult = ReturnType<typeof useGetMaintenanceRequestByIdLazyQuery>;
export type GetMaintenanceRequestByIdSuspenseQueryHookResult = ReturnType<typeof useGetMaintenanceRequestByIdSuspenseQuery>;
export type GetMaintenanceRequestByIdQueryResult = Apollo.QueryResult<GetMaintenanceRequestByIdQuery, GetMaintenanceRequestByIdQueryVariables>;
export const GetMaintenanceByStatusDocument = gql`
    query GetMaintenanceByStatus($status: String!, $first: Int!) {
  maintenanceRequestsCollection(
    first: $first
    filter: {status: {eq: $status}}
    orderBy: {createdAt: DescNullsLast}
  ) {
    edges {
      node {
        id
        title
        category
        priority
        status
        location
        createdAt
        user {
          fullName
          building
          floor
          room
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useGetMaintenanceByStatusQuery__
 *
 * To run a query within a React component, call `useGetMaintenanceByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaintenanceByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaintenanceByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetMaintenanceByStatusQuery(baseOptions: Apollo.QueryHookOptions<GetMaintenanceByStatusQuery, GetMaintenanceByStatusQueryVariables> & ({ variables: GetMaintenanceByStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaintenanceByStatusQuery, GetMaintenanceByStatusQueryVariables>(GetMaintenanceByStatusDocument, options);
      }
export function useGetMaintenanceByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaintenanceByStatusQuery, GetMaintenanceByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaintenanceByStatusQuery, GetMaintenanceByStatusQueryVariables>(GetMaintenanceByStatusDocument, options);
        }
export function useGetMaintenanceByStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMaintenanceByStatusQuery, GetMaintenanceByStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMaintenanceByStatusQuery, GetMaintenanceByStatusQueryVariables>(GetMaintenanceByStatusDocument, options);
        }
export type GetMaintenanceByStatusQueryHookResult = ReturnType<typeof useGetMaintenanceByStatusQuery>;
export type GetMaintenanceByStatusLazyQueryHookResult = ReturnType<typeof useGetMaintenanceByStatusLazyQuery>;
export type GetMaintenanceByStatusSuspenseQueryHookResult = ReturnType<typeof useGetMaintenanceByStatusSuspenseQuery>;
export type GetMaintenanceByStatusQueryResult = Apollo.QueryResult<GetMaintenanceByStatusQuery, GetMaintenanceByStatusQueryVariables>;
export const CreateMaintenanceRequestDocument = gql`
    mutation CreateMaintenanceRequest($input: MaintenanceRequestsInsertInput!) {
  insertIntoMaintenanceRequestsCollection(objects: [$input]) {
    records {
      id
      userId
      title
      description
      category
      priority
      status
      location
      imageUrls
      createdAt
    }
  }
}
    `;
export type CreateMaintenanceRequestMutationFn = Apollo.MutationFunction<CreateMaintenanceRequestMutation, CreateMaintenanceRequestMutationVariables>;

/**
 * __useCreateMaintenanceRequestMutation__
 *
 * To run a mutation, you first call `useCreateMaintenanceRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaintenanceRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaintenanceRequestMutation, { data, loading, error }] = useCreateMaintenanceRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMaintenanceRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateMaintenanceRequestMutation, CreateMaintenanceRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMaintenanceRequestMutation, CreateMaintenanceRequestMutationVariables>(CreateMaintenanceRequestDocument, options);
      }
export type CreateMaintenanceRequestMutationHookResult = ReturnType<typeof useCreateMaintenanceRequestMutation>;
export type CreateMaintenanceRequestMutationResult = Apollo.MutationResult<CreateMaintenanceRequestMutation>;
export type CreateMaintenanceRequestMutationOptions = Apollo.BaseMutationOptions<CreateMaintenanceRequestMutation, CreateMaintenanceRequestMutationVariables>;
export const UpdateMaintenanceRequestDocument = gql`
    mutation UpdateMaintenanceRequest($id: UUID!, $set: MaintenanceRequestsUpdateInput!) {
  updateMaintenanceRequestsCollection(filter: {id: {eq: $id}}, set: $set) {
    records {
      id
      status
      assignedTo
      resolvedAt
      updatedAt
    }
  }
}
    `;
export type UpdateMaintenanceRequestMutationFn = Apollo.MutationFunction<UpdateMaintenanceRequestMutation, UpdateMaintenanceRequestMutationVariables>;

/**
 * __useUpdateMaintenanceRequestMutation__
 *
 * To run a mutation, you first call `useUpdateMaintenanceRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMaintenanceRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMaintenanceRequestMutation, { data, loading, error }] = useUpdateMaintenanceRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateMaintenanceRequestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMaintenanceRequestMutation, UpdateMaintenanceRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMaintenanceRequestMutation, UpdateMaintenanceRequestMutationVariables>(UpdateMaintenanceRequestDocument, options);
      }
export type UpdateMaintenanceRequestMutationHookResult = ReturnType<typeof useUpdateMaintenanceRequestMutation>;
export type UpdateMaintenanceRequestMutationResult = Apollo.MutationResult<UpdateMaintenanceRequestMutation>;
export type UpdateMaintenanceRequestMutationOptions = Apollo.BaseMutationOptions<UpdateMaintenanceRequestMutation, UpdateMaintenanceRequestMutationVariables>;
export const ResolveMaintenanceRequestDocument = gql`
    mutation ResolveMaintenanceRequest($id: UUID!, $resolvedAt: Datetime!) {
  updateMaintenanceRequestsCollection(
    filter: {id: {eq: $id}}
    set: {status: "resolved", resolvedAt: $resolvedAt}
  ) {
    records {
      id
      status
      resolvedAt
    }
  }
}
    `;
export type ResolveMaintenanceRequestMutationFn = Apollo.MutationFunction<ResolveMaintenanceRequestMutation, ResolveMaintenanceRequestMutationVariables>;

/**
 * __useResolveMaintenanceRequestMutation__
 *
 * To run a mutation, you first call `useResolveMaintenanceRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResolveMaintenanceRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resolveMaintenanceRequestMutation, { data, loading, error }] = useResolveMaintenanceRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resolvedAt: // value for 'resolvedAt'
 *   },
 * });
 */
export function useResolveMaintenanceRequestMutation(baseOptions?: Apollo.MutationHookOptions<ResolveMaintenanceRequestMutation, ResolveMaintenanceRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResolveMaintenanceRequestMutation, ResolveMaintenanceRequestMutationVariables>(ResolveMaintenanceRequestDocument, options);
      }
export type ResolveMaintenanceRequestMutationHookResult = ReturnType<typeof useResolveMaintenanceRequestMutation>;
export type ResolveMaintenanceRequestMutationResult = Apollo.MutationResult<ResolveMaintenanceRequestMutation>;
export type ResolveMaintenanceRequestMutationOptions = Apollo.BaseMutationOptions<ResolveMaintenanceRequestMutation, ResolveMaintenanceRequestMutationVariables>;
export const GetMyProfileDocument = gql`
    query GetMyProfile($userId: UUID!) {
  profilesCollection(filter: {id: {eq: $userId}}) {
    edges {
      node {
        id
        fullName
        avatarUrl
        role
        building
        floor
        room
        phone
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useGetMyProfileQuery__
 *
 * To run a query within a React component, call `useGetMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetMyProfileQuery(baseOptions: Apollo.QueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables> & ({ variables: GetMyProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
      }
export function useGetMyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
        }
export function useGetMyProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
        }
export type GetMyProfileQueryHookResult = ReturnType<typeof useGetMyProfileQuery>;
export type GetMyProfileLazyQueryHookResult = ReturnType<typeof useGetMyProfileLazyQuery>;
export type GetMyProfileSuspenseQueryHookResult = ReturnType<typeof useGetMyProfileSuspenseQuery>;
export type GetMyProfileQueryResult = Apollo.QueryResult<GetMyProfileQuery, GetMyProfileQueryVariables>;
export const GetResidentsDocument = gql`
    query GetResidents($first: Int!, $after: Cursor) {
  profilesCollection(
    first: $first
    after: $after
    filter: {role: {eq: "resident"}}
    orderBy: {fullName: AscNullsLast}
  ) {
    edges {
      node {
        id
        fullName
        avatarUrl
        building
        floor
        room
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useGetResidentsQuery__
 *
 * To run a query within a React component, call `useGetResidentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResidentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResidentsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetResidentsQuery(baseOptions: Apollo.QueryHookOptions<GetResidentsQuery, GetResidentsQueryVariables> & ({ variables: GetResidentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResidentsQuery, GetResidentsQueryVariables>(GetResidentsDocument, options);
      }
export function useGetResidentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResidentsQuery, GetResidentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResidentsQuery, GetResidentsQueryVariables>(GetResidentsDocument, options);
        }
export function useGetResidentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetResidentsQuery, GetResidentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetResidentsQuery, GetResidentsQueryVariables>(GetResidentsDocument, options);
        }
export type GetResidentsQueryHookResult = ReturnType<typeof useGetResidentsQuery>;
export type GetResidentsLazyQueryHookResult = ReturnType<typeof useGetResidentsLazyQuery>;
export type GetResidentsSuspenseQueryHookResult = ReturnType<typeof useGetResidentsSuspenseQuery>;
export type GetResidentsQueryResult = Apollo.QueryResult<GetResidentsQuery, GetResidentsQueryVariables>;
export const GetProfileByIdDocument = gql`
    query GetProfileById($id: UUID!) {
  profilesCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        fullName
        avatarUrl
        role
        building
        floor
        room
        phone
        createdAt
      }
    }
  }
}
    `;

/**
 * __useGetProfileByIdQuery__
 *
 * To run a query within a React component, call `useGetProfileByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables> & ({ variables: GetProfileByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
      }
export function useGetProfileByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export function useGetProfileByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export type GetProfileByIdQueryHookResult = ReturnType<typeof useGetProfileByIdQuery>;
export type GetProfileByIdLazyQueryHookResult = ReturnType<typeof useGetProfileByIdLazyQuery>;
export type GetProfileByIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileByIdSuspenseQuery>;
export type GetProfileByIdQueryResult = Apollo.QueryResult<GetProfileByIdQuery, GetProfileByIdQueryVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($id: UUID!, $set: ProfilesUpdateInput!) {
  updateProfilesCollection(filter: {id: {eq: $id}}, set: $set) {
    records {
      id
      fullName
      avatarUrl
      building
      floor
      room
      phone
      updatedAt
    }
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const CreateProfileDocument = gql`
    mutation CreateProfile($input: ProfilesInsertInput!) {
  insertIntoProfilesCollection(objects: [$input]) {
    records {
      id
      fullName
      role
      createdAt
    }
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const GetSpacesDocument = gql`
    query GetSpaces($first: Int!, $after: Cursor) {
  spacesCollection(
    first: $first
    after: $after
    filter: {available: {eq: true}}
    orderBy: {name: AscNullsLast}
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

/**
 * __useGetSpacesQuery__
 *
 * To run a query within a React component, call `useGetSpacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpacesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetSpacesQuery(baseOptions: Apollo.QueryHookOptions<GetSpacesQuery, GetSpacesQueryVariables> & ({ variables: GetSpacesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpacesQuery, GetSpacesQueryVariables>(GetSpacesDocument, options);
      }
export function useGetSpacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpacesQuery, GetSpacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpacesQuery, GetSpacesQueryVariables>(GetSpacesDocument, options);
        }
export function useGetSpacesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSpacesQuery, GetSpacesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSpacesQuery, GetSpacesQueryVariables>(GetSpacesDocument, options);
        }
export type GetSpacesQueryHookResult = ReturnType<typeof useGetSpacesQuery>;
export type GetSpacesLazyQueryHookResult = ReturnType<typeof useGetSpacesLazyQuery>;
export type GetSpacesSuspenseQueryHookResult = ReturnType<typeof useGetSpacesSuspenseQuery>;
export type GetSpacesQueryResult = Apollo.QueryResult<GetSpacesQuery, GetSpacesQueryVariables>;
export const GetSpaceByIdDocument = gql`
    query GetSpaceById($id: UUID!) {
  spacesCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
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
    }
  }
}
    `;

/**
 * __useGetSpaceByIdQuery__
 *
 * To run a query within a React component, call `useGetSpaceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpaceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpaceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpaceByIdQuery(baseOptions: Apollo.QueryHookOptions<GetSpaceByIdQuery, GetSpaceByIdQueryVariables> & ({ variables: GetSpaceByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpaceByIdQuery, GetSpaceByIdQueryVariables>(GetSpaceByIdDocument, options);
      }
export function useGetSpaceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpaceByIdQuery, GetSpaceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpaceByIdQuery, GetSpaceByIdQueryVariables>(GetSpaceByIdDocument, options);
        }
export function useGetSpaceByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSpaceByIdQuery, GetSpaceByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSpaceByIdQuery, GetSpaceByIdQueryVariables>(GetSpaceByIdDocument, options);
        }
export type GetSpaceByIdQueryHookResult = ReturnType<typeof useGetSpaceByIdQuery>;
export type GetSpaceByIdLazyQueryHookResult = ReturnType<typeof useGetSpaceByIdLazyQuery>;
export type GetSpaceByIdSuspenseQueryHookResult = ReturnType<typeof useGetSpaceByIdSuspenseQuery>;
export type GetSpaceByIdQueryResult = Apollo.QueryResult<GetSpaceByIdQuery, GetSpaceByIdQueryVariables>;
export const GetSpacesByTypeDocument = gql`
    query GetSpacesByType($type: String!, $first: Int!) {
  spacesCollection(
    first: $first
    filter: {type: {eq: $type}, available: {eq: true}}
    orderBy: {capacity: DescNullsLast}
  ) {
    edges {
      node {
        id
        name
        type
        capacity
        description
        imageUrl
        floor
        available
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useGetSpacesByTypeQuery__
 *
 * To run a query within a React component, call `useGetSpacesByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpacesByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpacesByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetSpacesByTypeQuery(baseOptions: Apollo.QueryHookOptions<GetSpacesByTypeQuery, GetSpacesByTypeQueryVariables> & ({ variables: GetSpacesByTypeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpacesByTypeQuery, GetSpacesByTypeQueryVariables>(GetSpacesByTypeDocument, options);
      }
export function useGetSpacesByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpacesByTypeQuery, GetSpacesByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpacesByTypeQuery, GetSpacesByTypeQueryVariables>(GetSpacesByTypeDocument, options);
        }
export function useGetSpacesByTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSpacesByTypeQuery, GetSpacesByTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSpacesByTypeQuery, GetSpacesByTypeQueryVariables>(GetSpacesByTypeDocument, options);
        }
export type GetSpacesByTypeQueryHookResult = ReturnType<typeof useGetSpacesByTypeQuery>;
export type GetSpacesByTypeLazyQueryHookResult = ReturnType<typeof useGetSpacesByTypeLazyQuery>;
export type GetSpacesByTypeSuspenseQueryHookResult = ReturnType<typeof useGetSpacesByTypeSuspenseQuery>;
export type GetSpacesByTypeQueryResult = Apollo.QueryResult<GetSpacesByTypeQuery, GetSpacesByTypeQueryVariables>;
export const GetSpaceWithBookingsDocument = gql`
    query GetSpaceWithBookings($spaceId: UUID!, $startDate: Datetime!) {
  spacesCollection(filter: {id: {eq: $spaceId}}) {
    edges {
      node {
        id
        name
        type
        capacity
        description
        imageUrl
        floor
        available
        bookingsCollection(
          filter: {startTime: {gte: $startDate}, status: {in: ["confirmed", "pending"]}}
          orderBy: {startTime: AscNullsLast}
        ) {
          edges {
            node {
              id
              startTime
              endTime
              status
              user {
                fullName
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSpaceWithBookingsQuery__
 *
 * To run a query within a React component, call `useGetSpaceWithBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpaceWithBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpaceWithBookingsQuery({
 *   variables: {
 *      spaceId: // value for 'spaceId'
 *      startDate: // value for 'startDate'
 *   },
 * });
 */
export function useGetSpaceWithBookingsQuery(baseOptions: Apollo.QueryHookOptions<GetSpaceWithBookingsQuery, GetSpaceWithBookingsQueryVariables> & ({ variables: GetSpaceWithBookingsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpaceWithBookingsQuery, GetSpaceWithBookingsQueryVariables>(GetSpaceWithBookingsDocument, options);
      }
export function useGetSpaceWithBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpaceWithBookingsQuery, GetSpaceWithBookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpaceWithBookingsQuery, GetSpaceWithBookingsQueryVariables>(GetSpaceWithBookingsDocument, options);
        }
export function useGetSpaceWithBookingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSpaceWithBookingsQuery, GetSpaceWithBookingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSpaceWithBookingsQuery, GetSpaceWithBookingsQueryVariables>(GetSpaceWithBookingsDocument, options);
        }
export type GetSpaceWithBookingsQueryHookResult = ReturnType<typeof useGetSpaceWithBookingsQuery>;
export type GetSpaceWithBookingsLazyQueryHookResult = ReturnType<typeof useGetSpaceWithBookingsLazyQuery>;
export type GetSpaceWithBookingsSuspenseQueryHookResult = ReturnType<typeof useGetSpaceWithBookingsSuspenseQuery>;
export type GetSpaceWithBookingsQueryResult = Apollo.QueryResult<GetSpaceWithBookingsQuery, GetSpaceWithBookingsQueryVariables>;
export const GetAvailableSpacesDocument = gql`
    query GetAvailableSpaces($startTime: Datetime!, $endTime: Datetime!, $first: Int!) {
  spacesCollection(
    first: $first
    filter: {available: {eq: true}}
    orderBy: {name: AscNullsLast}
  ) {
    edges {
      node {
        id
        name
        type
        capacity
        description
        imageUrl
        floor
      }
    }
  }
}
    `;

/**
 * __useGetAvailableSpacesQuery__
 *
 * To run a query within a React component, call `useGetAvailableSpacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailableSpacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailableSpacesQuery({
 *   variables: {
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetAvailableSpacesQuery(baseOptions: Apollo.QueryHookOptions<GetAvailableSpacesQuery, GetAvailableSpacesQueryVariables> & ({ variables: GetAvailableSpacesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvailableSpacesQuery, GetAvailableSpacesQueryVariables>(GetAvailableSpacesDocument, options);
      }
export function useGetAvailableSpacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvailableSpacesQuery, GetAvailableSpacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvailableSpacesQuery, GetAvailableSpacesQueryVariables>(GetAvailableSpacesDocument, options);
        }
export function useGetAvailableSpacesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAvailableSpacesQuery, GetAvailableSpacesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAvailableSpacesQuery, GetAvailableSpacesQueryVariables>(GetAvailableSpacesDocument, options);
        }
export type GetAvailableSpacesQueryHookResult = ReturnType<typeof useGetAvailableSpacesQuery>;
export type GetAvailableSpacesLazyQueryHookResult = ReturnType<typeof useGetAvailableSpacesLazyQuery>;
export type GetAvailableSpacesSuspenseQueryHookResult = ReturnType<typeof useGetAvailableSpacesSuspenseQuery>;
export type GetAvailableSpacesQueryResult = Apollo.QueryResult<GetAvailableSpacesQuery, GetAvailableSpacesQueryVariables>;