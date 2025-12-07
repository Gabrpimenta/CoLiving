export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: unknown; output: unknown; }
  BigInt: { input: unknown; output: unknown; }
  Cursor: { input: string; output: string; }
  Date: { input: string; output: string; }
  Datetime: { input: string; output: string; }
  JSON: { input: unknown; output: unknown; }
  Opaque: { input: unknown; output: unknown; }
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
  __typename: 'Blog';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type BlogConnection = {
  __typename: 'BlogConnection';
  edges: Array<BlogEdge>;
  pageInfo: PageInfo;
};

export type BlogDeleteResponse = {
  __typename: 'BlogDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog>;
};

export type BlogEdge = {
  __typename: 'BlogEdge';
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
  __typename: 'BlogInsertResponse';
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
  __typename: 'BlogUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog>;
};

export type Bookings = Node & {
  __typename: 'Bookings';
  checkedIn: Maybe<Scalars['Boolean']['output']>;
  checkedInAt: Maybe<Scalars['Datetime']['output']>;
  createdAt: Maybe<Scalars['Datetime']['output']>;
  endTime: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes: Maybe<Scalars['String']['output']>;
  qrCode: Maybe<Scalars['String']['output']>;
  space: Maybe<Spaces>;
  spaceId: Scalars['UUID']['output'];
  startTime: Scalars['Datetime']['output'];
  status: Maybe<Scalars['String']['output']>;
  synced: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Maybe<Scalars['Datetime']['output']>;
  user: Maybe<Profiles>;
  userId: Scalars['UUID']['output'];
};

export type BookingsConnection = {
  __typename: 'BookingsConnection';
  edges: Array<BookingsEdge>;
  pageInfo: PageInfo;
};

export type BookingsDeleteResponse = {
  __typename: 'BookingsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Bookings>;
};

export type BookingsEdge = {
  __typename: 'BookingsEdge';
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
  __typename: 'BookingsInsertResponse';
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
  __typename: 'BookingsUpdateResponse';
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
  __typename: 'EventRsvps';
  createdAt: Maybe<Scalars['Datetime']['output']>;
  event: Maybe<Events>;
  eventId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  status: Maybe<Scalars['String']['output']>;
  user: Maybe<Profiles>;
  userId: Scalars['UUID']['output'];
};

export type EventRsvpsConnection = {
  __typename: 'EventRsvpsConnection';
  edges: Array<EventRsvpsEdge>;
  pageInfo: PageInfo;
};

export type EventRsvpsDeleteResponse = {
  __typename: 'EventRsvpsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EventRsvps>;
};

export type EventRsvpsEdge = {
  __typename: 'EventRsvpsEdge';
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
  __typename: 'EventRsvpsInsertResponse';
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
  __typename: 'EventRsvpsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EventRsvps>;
};

export type Events = Node & {
  __typename: 'Events';
  createdAt: Maybe<Scalars['Datetime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  eventDate: Scalars['Datetime']['output'];
  eventRsvpsCollection: Maybe<EventRsvpsConnection>;
  id: Scalars['UUID']['output'];
  imageUrl: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  maxAttendees: Maybe<Scalars['Int']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organizer: Maybe<Profiles>;
  organizerId: Maybe<Scalars['UUID']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['Datetime']['output']>;
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
  __typename: 'EventsConnection';
  edges: Array<EventsEdge>;
  pageInfo: PageInfo;
};

export type EventsDeleteResponse = {
  __typename: 'EventsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type EventsEdge = {
  __typename: 'EventsEdge';
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
  __typename: 'EventsInsertResponse';
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
  __typename: 'EventsUpdateResponse';
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
  __typename: 'MaintenanceRequests';
  assignedTo: Maybe<Scalars['UUID']['output']>;
  category: Scalars['String']['output'];
  createdAt: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  imageUrls: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  priority: Maybe<Scalars['String']['output']>;
  profiles: Maybe<Profiles>;
  resolvedAt: Maybe<Scalars['Datetime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['Datetime']['output']>;
  user: Maybe<Profiles>;
  userId: Scalars['UUID']['output'];
};

export type MaintenanceRequestsConnection = {
  __typename: 'MaintenanceRequestsConnection';
  edges: Array<MaintenanceRequestsEdge>;
  pageInfo: PageInfo;
};

export type MaintenanceRequestsDeleteResponse = {
  __typename: 'MaintenanceRequestsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MaintenanceRequests>;
};

export type MaintenanceRequestsEdge = {
  __typename: 'MaintenanceRequestsEdge';
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
  __typename: 'MaintenanceRequestsInsertResponse';
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
  __typename: 'MaintenanceRequestsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MaintenanceRequests>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename: 'Mutation';
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
  insertIntoBlogCollection: Maybe<BlogInsertResponse>;
  /** Adds one or more `Bookings` records to the collection */
  insertIntoBookingsCollection: Maybe<BookingsInsertResponse>;
  /** Adds one or more `EventRsvps` records to the collection */
  insertIntoEventRsvpsCollection: Maybe<EventRsvpsInsertResponse>;
  /** Adds one or more `Events` records to the collection */
  insertIntoEventsCollection: Maybe<EventsInsertResponse>;
  /** Adds one or more `MaintenanceRequests` records to the collection */
  insertIntoMaintenanceRequestsCollection: Maybe<MaintenanceRequestsInsertResponse>;
  /** Adds one or more `Profiles` records to the collection */
  insertIntoProfilesCollection: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `Spaces` records to the collection */
  insertIntoSpacesCollection: Maybe<SpacesInsertResponse>;
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
  __typename: 'PageInfo';
  endCursor: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Maybe<Scalars['String']['output']>;
};

export type Profiles = Node & {
  __typename: 'Profiles';
  avatarUrl: Maybe<Scalars['String']['output']>;
  bookingsCollection: Maybe<BookingsConnection>;
  building: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Datetime']['output']>;
  eventRsvpsCollection: Maybe<EventRsvpsConnection>;
  eventsCollection: Maybe<EventsConnection>;
  floor: Maybe<Scalars['Int']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  maintenanceRequestsCollection: Maybe<MaintenanceRequestsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone: Maybe<Scalars['String']['output']>;
  role: Maybe<Scalars['String']['output']>;
  room: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['Datetime']['output']>;
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
  __typename: 'ProfilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename: 'ProfilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename: 'ProfilesEdge';
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
  __typename: 'ProfilesInsertResponse';
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
  __typename: 'ProfilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

/** The root type for querying data */
export type Query = {
  __typename: 'Query';
  /** A pagable collection of type `Blog` */
  blogCollection: Maybe<BlogConnection>;
  /** A pagable collection of type `Bookings` */
  bookingsCollection: Maybe<BookingsConnection>;
  /** A pagable collection of type `EventRsvps` */
  eventRsvpsCollection: Maybe<EventRsvpsConnection>;
  /** A pagable collection of type `Events` */
  eventsCollection: Maybe<EventsConnection>;
  /** A pagable collection of type `MaintenanceRequests` */
  maintenanceRequestsCollection: Maybe<MaintenanceRequestsConnection>;
  /** Retrieve a record by its `ID` */
  node: Maybe<Node>;
  /** A pagable collection of type `Profiles` */
  profilesCollection: Maybe<ProfilesConnection>;
  /** A pagable collection of type `Spaces` */
  spacesCollection: Maybe<SpacesConnection>;
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
  __typename: 'Spaces';
  amenities: Maybe<Scalars['JSON']['output']>;
  available: Maybe<Scalars['Boolean']['output']>;
  bookingsCollection: Maybe<BookingsConnection>;
  capacity: Scalars['Int']['output'];
  createdAt: Maybe<Scalars['Datetime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  floor: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  imageUrl: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['Datetime']['output']>;
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
  __typename: 'SpacesConnection';
  edges: Array<SpacesEdge>;
  pageInfo: PageInfo;
};

export type SpacesDeleteResponse = {
  __typename: 'SpacesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Spaces>;
};

export type SpacesEdge = {
  __typename: 'SpacesEdge';
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
  __typename: 'SpacesInsertResponse';
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
  __typename: 'SpacesUpdateResponse';
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


export type GetMyBookingsQuery = { __typename: 'Query', bookingsCollection: { __typename: 'BookingsConnection', edges: Array<{ __typename: 'BookingsEdge', cursor: string, node: { __typename: 'Bookings', id: string, nodeId: string, startTime: string, endTime: string, status: string | null, notes: string | null, checkedIn: boolean | null, checkedInAt: string | null, qrCode: string | null, createdAt: string | null, updatedAt: string | null, space: { __typename: 'Spaces', id: string, name: string, type: string, capacity: number, imageUrl: string | null, floor: number | null } | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor: string | null, startCursor: string | null } } | null };

export type GetUpcomingBookingsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  currentTime: Scalars['Datetime']['input'];
}>;


export type GetUpcomingBookingsQuery = { __typename: 'Query', bookingsCollection: { __typename: 'BookingsConnection', edges: Array<{ __typename: 'BookingsEdge', node: { __typename: 'Bookings', id: string, startTime: string, endTime: string, status: string | null, notes: string | null, checkedIn: boolean | null, space: { __typename: 'Spaces', id: string, name: string, type: string, imageUrl: string | null, floor: number | null } | null } }> } | null };

export type GetPastBookingsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  currentTime: Scalars['Datetime']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetPastBookingsQuery = { __typename: 'Query', bookingsCollection: { __typename: 'BookingsConnection', edges: Array<{ __typename: 'BookingsEdge', cursor: string, node: { __typename: 'Bookings', id: string, startTime: string, endTime: string, status: string | null, checkedIn: boolean | null, space: { __typename: 'Spaces', name: string, type: string, imageUrl: string | null } | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | null };

export type GetBookingByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetBookingByIdQuery = { __typename: 'Query', bookingsCollection: { __typename: 'BookingsConnection', edges: Array<{ __typename: 'BookingsEdge', node: { __typename: 'Bookings', id: string, startTime: string, endTime: string, status: string | null, notes: string | null, checkedIn: boolean | null, checkedInAt: string | null, qrCode: string | null, createdAt: string | null, space: { __typename: 'Spaces', id: string, name: string, type: string, capacity: number, description: string | null, imageUrl: string | null, floor: number | null } | null, user: { __typename: 'Profiles', id: string, fullName: string | null, role: string | null, building: string | null, floor: number | null, room: string | null } | null } }> } | null };

export type CheckBookingConflictsQueryVariables = Exact<{
  spaceId: Scalars['UUID']['input'];
  startTime: Scalars['Datetime']['input'];
  endTime: Scalars['Datetime']['input'];
}>;


export type CheckBookingConflictsQuery = { __typename: 'Query', bookingsCollection: { __typename: 'BookingsConnection', edges: Array<{ __typename: 'BookingsEdge', node: { __typename: 'Bookings', id: string, startTime: string, endTime: string, status: string | null } }> } | null };

export type CreateBookingMutationVariables = Exact<{
  input: BookingsInsertInput;
}>;


export type CreateBookingMutation = { __typename: 'Mutation', insertIntoBookingsCollection: { __typename: 'BookingsInsertResponse', records: Array<{ __typename: 'Bookings', id: string, spaceId: string, userId: string, startTime: string, endTime: string, status: string | null, notes: string | null, createdAt: string | null }> } | null };

export type UpdateBookingMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: BookingsUpdateInput;
}>;


export type UpdateBookingMutation = { __typename: 'Mutation', updateBookingsCollection: { __typename: 'BookingsUpdateResponse', records: Array<{ __typename: 'Bookings', id: string, startTime: string, endTime: string, status: string | null, notes: string | null, updatedAt: string | null }> } };

export type CancelBookingMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type CancelBookingMutation = { __typename: 'Mutation', updateBookingsCollection: { __typename: 'BookingsUpdateResponse', records: Array<{ __typename: 'Bookings', id: string, status: string | null, updatedAt: string | null }> } };

export type CheckInBookingMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  now: Scalars['Datetime']['input'];
}>;


export type CheckInBookingMutation = { __typename: 'Mutation', updateBookingsCollection: { __typename: 'BookingsUpdateResponse', records: Array<{ __typename: 'Bookings', id: string, checkedIn: boolean | null, checkedInAt: string | null, qrCode: string | null }> } };

export type GenerateQrCodeMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  qrCode: Scalars['String']['input'];
}>;


export type GenerateQrCodeMutation = { __typename: 'Mutation', updateBookingsCollection: { __typename: 'BookingsUpdateResponse', records: Array<{ __typename: 'Bookings', id: string, qrCode: string | null }> } };

export type GetUpcomingEventsQueryVariables = Exact<{
  currentTime: Scalars['Datetime']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetUpcomingEventsQuery = { __typename: 'Query', eventsCollection: { __typename: 'EventsConnection', edges: Array<{ __typename: 'EventsEdge', cursor: string, node: { __typename: 'Events', id: string, title: string, description: string | null, eventDate: string, location: string | null, maxAttendees: number | null, imageUrl: string | null, createdAt: string | null, organizer: { __typename: 'Profiles', id: string, fullName: string | null, avatarUrl: string | null } | null, eventRsvpsCollection: { __typename: 'EventRsvpsConnection', edges: Array<{ __typename: 'EventRsvpsEdge', node: { __typename: 'EventRsvps', id: string, status: string | null, user: { __typename: 'Profiles', id: string, fullName: string | null } | null } }> } | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | null };

export type GetEventByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetEventByIdQuery = { __typename: 'Query', eventsCollection: { __typename: 'EventsConnection', edges: Array<{ __typename: 'EventsEdge', node: { __typename: 'Events', id: string, title: string, description: string | null, eventDate: string, location: string | null, maxAttendees: number | null, imageUrl: string | null, createdAt: string | null, organizer: { __typename: 'Profiles', id: string, fullName: string | null, avatarUrl: string | null, role: string | null } | null, eventRsvpsCollection: { __typename: 'EventRsvpsConnection', edges: Array<{ __typename: 'EventRsvpsEdge', node: { __typename: 'EventRsvps', id: string, status: string | null, createdAt: string | null, user: { __typename: 'Profiles', id: string, fullName: string | null, avatarUrl: string | null } | null } }> } | null } }> } | null };

export type GetMyRsvpsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetMyRsvpsQuery = { __typename: 'Query', eventRsvpsCollection: { __typename: 'EventRsvpsConnection', edges: Array<{ __typename: 'EventRsvpsEdge', cursor: string, node: { __typename: 'EventRsvps', id: string, status: string | null, createdAt: string | null, event: { __typename: 'Events', id: string, title: string, description: string | null, eventDate: string, location: string | null, imageUrl: string | null } | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | null };

export type CreateEventMutationVariables = Exact<{
  input: EventsInsertInput;
}>;


export type CreateEventMutation = { __typename: 'Mutation', insertIntoEventsCollection: { __typename: 'EventsInsertResponse', records: Array<{ __typename: 'Events', id: string, title: string, description: string | null, eventDate: string, location: string | null, maxAttendees: number | null, organizerId: string | null, createdAt: string | null }> } | null };

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: EventsUpdateInput;
}>;


export type UpdateEventMutation = { __typename: 'Mutation', updateEventsCollection: { __typename: 'EventsUpdateResponse', records: Array<{ __typename: 'Events', id: string, title: string, description: string | null, eventDate: string, location: string | null, maxAttendees: number | null, updatedAt: string | null }> } };

export type UpsertRsvpMutationVariables = Exact<{
  input: EventRsvpsInsertInput;
}>;


export type UpsertRsvpMutation = { __typename: 'Mutation', insertIntoEventRsvpsCollection: { __typename: 'EventRsvpsInsertResponse', records: Array<{ __typename: 'EventRsvps', id: string, eventId: string, userId: string, status: string | null, createdAt: string | null }> } | null };

export type CancelRsvpMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type CancelRsvpMutation = { __typename: 'Mutation', deleteFromEventRsvpsCollection: { __typename: 'EventRsvpsDeleteResponse', records: Array<{ __typename: 'EventRsvps', id: string }> } };

export type GetMyMaintenanceRequestsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetMyMaintenanceRequestsQuery = { __typename: 'Query', maintenanceRequestsCollection: { __typename: 'MaintenanceRequestsConnection', edges: Array<{ __typename: 'MaintenanceRequestsEdge', cursor: string, node: { __typename: 'MaintenanceRequests', id: string, title: string, description: string, category: string, priority: string | null, status: string | null, location: string | null, imageUrls: Array<string | null> | null, createdAt: string | null, updatedAt: string | null, resolvedAt: string | null, assignedTo: string | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | null };

export type GetMaintenanceRequestByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetMaintenanceRequestByIdQuery = { __typename: 'Query', maintenanceRequestsCollection: { __typename: 'MaintenanceRequestsConnection', edges: Array<{ __typename: 'MaintenanceRequestsEdge', node: { __typename: 'MaintenanceRequests', id: string, title: string, description: string, category: string, priority: string | null, status: string | null, location: string | null, imageUrls: Array<string | null> | null, createdAt: string | null, updatedAt: string | null, resolvedAt: string | null, assignedTo: string | null, user: { __typename: 'Profiles', id: string, fullName: string | null, building: string | null, floor: number | null, room: string | null, phone: string | null } | null } }> } | null };

export type GetMaintenanceByStatusQueryVariables = Exact<{
  status: Scalars['String']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetMaintenanceByStatusQuery = { __typename: 'Query', maintenanceRequestsCollection: { __typename: 'MaintenanceRequestsConnection', edges: Array<{ __typename: 'MaintenanceRequestsEdge', cursor: string, node: { __typename: 'MaintenanceRequests', id: string, title: string, category: string, priority: string | null, status: string | null, location: string | null, createdAt: string | null, user: { __typename: 'Profiles', fullName: string | null, building: string | null, floor: number | null, room: string | null } | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | null };

export type CreateMaintenanceRequestMutationVariables = Exact<{
  input: MaintenanceRequestsInsertInput;
}>;


export type CreateMaintenanceRequestMutation = { __typename: 'Mutation', insertIntoMaintenanceRequestsCollection: { __typename: 'MaintenanceRequestsInsertResponse', records: Array<{ __typename: 'MaintenanceRequests', id: string, userId: string, title: string, description: string, category: string, priority: string | null, status: string | null, location: string | null, imageUrls: Array<string | null> | null, createdAt: string | null }> } | null };

export type UpdateMaintenanceRequestMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: MaintenanceRequestsUpdateInput;
}>;


export type UpdateMaintenanceRequestMutation = { __typename: 'Mutation', updateMaintenanceRequestsCollection: { __typename: 'MaintenanceRequestsUpdateResponse', records: Array<{ __typename: 'MaintenanceRequests', id: string, status: string | null, assignedTo: string | null, resolvedAt: string | null, updatedAt: string | null }> } };

export type ResolveMaintenanceRequestMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  resolvedAt: Scalars['Datetime']['input'];
}>;


export type ResolveMaintenanceRequestMutation = { __typename: 'Mutation', updateMaintenanceRequestsCollection: { __typename: 'MaintenanceRequestsUpdateResponse', records: Array<{ __typename: 'MaintenanceRequests', id: string, status: string | null, resolvedAt: string | null }> } };

export type GetMyProfileQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type GetMyProfileQuery = { __typename: 'Query', profilesCollection: { __typename: 'ProfilesConnection', edges: Array<{ __typename: 'ProfilesEdge', node: { __typename: 'Profiles', id: string, fullName: string | null, avatarUrl: string | null, role: string | null, building: string | null, floor: number | null, room: string | null, phone: string | null, createdAt: string | null, updatedAt: string | null } }> } | null };

export type GetResidentsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetResidentsQuery = { __typename: 'Query', profilesCollection: { __typename: 'ProfilesConnection', edges: Array<{ __typename: 'ProfilesEdge', cursor: string, node: { __typename: 'Profiles', id: string, fullName: string | null, avatarUrl: string | null, building: string | null, floor: number | null, room: string | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | null };

export type GetProfileByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetProfileByIdQuery = { __typename: 'Query', profilesCollection: { __typename: 'ProfilesConnection', edges: Array<{ __typename: 'ProfilesEdge', node: { __typename: 'Profiles', id: string, fullName: string | null, avatarUrl: string | null, role: string | null, building: string | null, floor: number | null, room: string | null, phone: string | null, createdAt: string | null } }> } | null };

export type UpdateProfileMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  set: ProfilesUpdateInput;
}>;


export type UpdateProfileMutation = { __typename: 'Mutation', updateProfilesCollection: { __typename: 'ProfilesUpdateResponse', records: Array<{ __typename: 'Profiles', id: string, fullName: string | null, avatarUrl: string | null, building: string | null, floor: number | null, room: string | null, phone: string | null, updatedAt: string | null }> } };

export type CreateProfileMutationVariables = Exact<{
  input: ProfilesInsertInput;
}>;


export type CreateProfileMutation = { __typename: 'Mutation', insertIntoProfilesCollection: { __typename: 'ProfilesInsertResponse', records: Array<{ __typename: 'Profiles', id: string, fullName: string | null, role: string | null, createdAt: string | null }> } | null };

export type GetSpacesQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetSpacesQuery = { __typename: 'Query', spacesCollection: { __typename: 'SpacesConnection', edges: Array<{ __typename: 'SpacesEdge', cursor: string, node: { __typename: 'Spaces', id: string, nodeId: string, name: string, type: string, capacity: number, description: string | null, amenities: unknown | null, imageUrl: string | null, floor: number | null, available: boolean | null, createdAt: string | null, updatedAt: string | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null };

export type GetSpaceByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetSpaceByIdQuery = { __typename: 'Query', spacesCollection: { __typename: 'SpacesConnection', edges: Array<{ __typename: 'SpacesEdge', node: { __typename: 'Spaces', id: string, name: string, type: string, capacity: number, description: string | null, amenities: unknown | null, imageUrl: string | null, floor: number | null, available: boolean | null, createdAt: string | null, updatedAt: string | null } }> } | null };

export type GetSpacesByTypeQueryVariables = Exact<{
  type: Scalars['String']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetSpacesByTypeQuery = { __typename: 'Query', spacesCollection: { __typename: 'SpacesConnection', edges: Array<{ __typename: 'SpacesEdge', cursor: string, node: { __typename: 'Spaces', id: string, name: string, type: string, capacity: number, description: string | null, imageUrl: string | null, floor: number | null, available: boolean | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | null };

export type GetSpaceWithBookingsQueryVariables = Exact<{
  spaceId: Scalars['UUID']['input'];
  startDate: Scalars['Datetime']['input'];
}>;


export type GetSpaceWithBookingsQuery = { __typename: 'Query', spacesCollection: { __typename: 'SpacesConnection', edges: Array<{ __typename: 'SpacesEdge', node: { __typename: 'Spaces', id: string, name: string, type: string, capacity: number, description: string | null, imageUrl: string | null, floor: number | null, available: boolean | null, bookingsCollection: { __typename: 'BookingsConnection', edges: Array<{ __typename: 'BookingsEdge', node: { __typename: 'Bookings', id: string, startTime: string, endTime: string, status: string | null, user: { __typename: 'Profiles', fullName: string | null } | null } }> } | null } }> } | null };

export type GetAvailableSpacesQueryVariables = Exact<{
  startTime: Scalars['Datetime']['input'];
  endTime: Scalars['Datetime']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetAvailableSpacesQuery = { __typename: 'Query', spacesCollection: { __typename: 'SpacesConnection', edges: Array<{ __typename: 'SpacesEdge', node: { __typename: 'Spaces', id: string, name: string, type: string, capacity: number, description: string | null, imageUrl: string | null, floor: number | null } }> } | null };
