type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

/** Meta information about the query. */
export type _QueryMeta = {
  count: Scalars['Int'];
};

export type AddToSessionOnTracksPayload = {
  sessionSession?: Maybe<Session>;
  tracksesTracks?: Maybe<Tracks>;
};

export type CreateFile = {
  name: Scalars['String'];
};

export type CreateSession = {
  hostID: Scalars['String'];
  sessionID: Scalars['String'];
  shortCode: Scalars['String'];
  tracksesIds?: Maybe<Array<Scalars['ID']>>;
  trackses?: Maybe<Array<SessiontracksesTracks>>;
};

export type CreateTracks = {
  trackID: Scalars['String'];
  sessionId?: Maybe<Scalars['ID']>;
  session?: Maybe<TrackssessionSession>;
};

export type File = Node & {
  contentType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  secret: Scalars['String'];
  size: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type FileFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileFilter>>;
  contentType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contentType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contentType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contentType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  contentType_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  contentType_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  contentType_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  contentType_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  contentType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contentType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contentType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contentType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  secret_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secret_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  secret_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  secret_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  secret_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  secret_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  secret_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  secret_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  secret_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  secret_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  secret_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  secret_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  secret_not_ends_with?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FileOrderBy {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export type FilePreviousValues = {
  contentType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  secret: Scalars['String'];
  size: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type FileSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<FileSubscriptionFilterNode>;
};

export type FileSubscriptionFilterNode = {
  contentType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contentType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contentType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contentType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  contentType_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  contentType_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  contentType_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  contentType_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  contentType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contentType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contentType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contentType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  secret_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secret_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  secret_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  secret_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  secret_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  secret_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  secret_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  secret_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  secret_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  secret_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  secret_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  secret_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  secret_not_ends_with?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
};

export type FileSubscriptionPayload = {
  mutation: _ModelMutationType;
  node?: Maybe<File>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<FilePreviousValues>;
};

export type InvokeFunctionInput = {
  name: Scalars['String'];
  input: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InvokeFunctionPayload = {
  result: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  createFile?: Maybe<File>;
  createSession?: Maybe<Session>;
  createTracks?: Maybe<Tracks>;
  updateFile?: Maybe<File>;
  updateSession?: Maybe<Session>;
  updateTracks?: Maybe<Tracks>;
  updateUser?: Maybe<User>;
  updateOrCreateFile?: Maybe<File>;
  updateOrCreateSession?: Maybe<Session>;
  updateOrCreateTracks?: Maybe<Tracks>;
  updateOrCreateUser?: Maybe<User>;
  deleteFile?: Maybe<File>;
  deleteSession?: Maybe<Session>;
  deleteTracks?: Maybe<Tracks>;
  deleteUser?: Maybe<User>;
  addToSessionOnTracks?: Maybe<AddToSessionOnTracksPayload>;
  removeFromSessionOnTracks?: Maybe<RemoveFromSessionOnTracksPayload>;
  createUser?: Maybe<User>;
  invokeFunction?: Maybe<InvokeFunctionPayload>;
};

export type MutationCreateFileArgs = {
  name: Scalars['String'];
};

export type MutationCreateSessionArgs = {
  hostID: Scalars['String'];
  sessionID: Scalars['String'];
  shortCode: Scalars['String'];
  tracksesIds?: Maybe<Array<Scalars['ID']>>;
  trackses?: Maybe<Array<SessiontracksesTracks>>;
};

export type MutationCreateTracksArgs = {
  trackID: Scalars['String'];
  sessionId?: Maybe<Scalars['ID']>;
  session?: Maybe<TrackssessionSession>;
};

export type MutationUpdateFileArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MutationUpdateSessionArgs = {
  hostID?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sessionID?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
  tracksesIds?: Maybe<Array<Scalars['ID']>>;
  trackses?: Maybe<Array<SessiontracksesTracks>>;
};

export type MutationUpdateTracksArgs = {
  id: Scalars['ID'];
  trackID?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['ID']>;
  session?: Maybe<TrackssessionSession>;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateOrCreateFileArgs = {
  update: UpdateFile;
  create: CreateFile;
};

export type MutationUpdateOrCreateSessionArgs = {
  update: UpdateSession;
  create: CreateSession;
};

export type MutationUpdateOrCreateTracksArgs = {
  update: UpdateTracks;
  create: CreateTracks;
};

export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser;
};

export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSessionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTracksArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationAddToSessionOnTracksArgs = {
  tracksesTracksId: Scalars['ID'];
  sessionSessionId: Scalars['ID'];
};

export type MutationRemoveFromSessionOnTracksArgs = {
  tracksesTracksId: Scalars['ID'];
  sessionSessionId: Scalars['ID'];
};

export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Query = {
  allFiles: Array<File>;
  allSessions: Array<Session>;
  allTrackses: Array<Tracks>;
  allUsers: Array<User>;
  _allFilesMeta: _QueryMeta;
  _allSessionsMeta: _QueryMeta;
  _allTracksesMeta: _QueryMeta;
  _allUsersMeta: _QueryMeta;
  File?: Maybe<File>;
  Session?: Maybe<Session>;
  Tracks?: Maybe<Tracks>;
  User?: Maybe<User>;
  user?: Maybe<User>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};

export type QueryAllFilesArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<FileOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAllSessionsArgs = {
  filter?: Maybe<SessionFilter>;
  orderBy?: Maybe<SessionOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAllTracksesArgs = {
  filter?: Maybe<TracksFilter>;
  orderBy?: Maybe<TracksOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query_AllFilesMetaArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<FileOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query_AllSessionsMetaArgs = {
  filter?: Maybe<SessionFilter>;
  orderBy?: Maybe<SessionOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query_AllTracksesMetaArgs = {
  filter?: Maybe<TracksFilter>;
  orderBy?: Maybe<TracksOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<UserOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>;
  secret?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type QuerySessionArgs = {
  id?: Maybe<Scalars['ID']>;
  sessionID?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
};

export type QueryTracksArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type RemoveFromSessionOnTracksPayload = {
  sessionSession?: Maybe<Session>;
  tracksesTracks?: Maybe<Tracks>;
};

export type Session = Node & {
  hostID: Scalars['String'];
  id: Scalars['ID'];
  sessionID: Scalars['String'];
  shortCode: Scalars['String'];
  trackses?: Maybe<Array<Tracks>>;
  /** Meta information about the query. */
  _tracksesMeta: _QueryMeta;
};

export type SessionTracksesArgs = {
  filter?: Maybe<TracksFilter>;
  orderBy?: Maybe<TracksOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Session_TracksesMetaArgs = {
  filter?: Maybe<TracksFilter>;
  orderBy?: Maybe<TracksOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SessionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionFilter>>;
  hostID?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hostID_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hostID_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hostID_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hostID_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hostID_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hostID_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hostID_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hostID_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hostID_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hostID_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hostID_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hostID_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hostID_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  sessionID?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  sessionID_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sessionID_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  sessionID_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  sessionID_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  sessionID_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  sessionID_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  sessionID_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  sessionID_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  sessionID_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  sessionID_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  sessionID_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  sessionID_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  sessionID_not_ends_with?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  shortCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  shortCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  shortCode_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  shortCode_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  shortCode_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  shortCode_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  shortCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  shortCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  shortCode_not_ends_with?: Maybe<Scalars['String']>;
  trackses_every?: Maybe<TracksFilter>;
  trackses_some?: Maybe<TracksFilter>;
  trackses_none?: Maybe<TracksFilter>;
};

export enum SessionOrderBy {
  HostIdAsc = 'hostID_ASC',
  HostIdDesc = 'hostID_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SessionIdAsc = 'sessionID_ASC',
  SessionIdDesc = 'sessionID_DESC',
  ShortCodeAsc = 'shortCode_ASC',
  ShortCodeDesc = 'shortCode_DESC',
}

export type SessionPreviousValues = {
  hostID: Scalars['String'];
  id: Scalars['ID'];
  sessionID: Scalars['String'];
  shortCode: Scalars['String'];
};

export type SessionSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SessionSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SessionSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<SessionSubscriptionFilterNode>;
};

export type SessionSubscriptionFilterNode = {
  hostID?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hostID_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hostID_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hostID_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hostID_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hostID_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hostID_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hostID_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hostID_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hostID_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hostID_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hostID_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hostID_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hostID_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  sessionID?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  sessionID_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sessionID_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  sessionID_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  sessionID_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  sessionID_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  sessionID_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  sessionID_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  sessionID_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  sessionID_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  sessionID_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  sessionID_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  sessionID_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  sessionID_not_ends_with?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  shortCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  shortCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  shortCode_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  shortCode_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  shortCode_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  shortCode_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  shortCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  shortCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  shortCode_not_ends_with?: Maybe<Scalars['String']>;
  trackses_every?: Maybe<TracksFilter>;
  trackses_some?: Maybe<TracksFilter>;
  trackses_none?: Maybe<TracksFilter>;
};

export type SessionSubscriptionPayload = {
  mutation: _ModelMutationType;
  node?: Maybe<Session>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<SessionPreviousValues>;
};

export type SessiontracksesTracks = {
  trackID: Scalars['String'];
};

export type Subscription = {
  File?: Maybe<FileSubscriptionPayload>;
  Session?: Maybe<SessionSubscriptionPayload>;
  Tracks?: Maybe<TracksSubscriptionPayload>;
  User?: Maybe<UserSubscriptionPayload>;
};

export type SubscriptionFileArgs = {
  filter?: Maybe<FileSubscriptionFilter>;
};

export type SubscriptionSessionArgs = {
  filter?: Maybe<SessionSubscriptionFilter>;
};

export type SubscriptionTracksArgs = {
  filter?: Maybe<TracksSubscriptionFilter>;
};

export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type Tracks = Node & {
  id: Scalars['ID'];
  session?: Maybe<Session>;
  trackID: Scalars['String'];
};

export type TracksSessionArgs = {
  filter?: Maybe<SessionFilter>;
};

export type TracksFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TracksFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TracksFilter>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  trackID?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  trackID_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  trackID_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  trackID_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  trackID_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  trackID_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  trackID_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  trackID_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  trackID_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  trackID_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  trackID_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  trackID_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  trackID_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  trackID_not_ends_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionFilter>;
};

export enum TracksOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TrackIdAsc = 'trackID_ASC',
  TrackIdDesc = 'trackID_DESC',
}

export type TracksPreviousValues = {
  id: Scalars['ID'];
  trackID: Scalars['String'];
};

export type TrackssessionSession = {
  hostID: Scalars['String'];
  sessionID: Scalars['String'];
  shortCode: Scalars['String'];
  tracksesIds?: Maybe<Array<Scalars['ID']>>;
  trackses?: Maybe<Array<SessiontracksesTracks>>;
};

export type TracksSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TracksSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TracksSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TracksSubscriptionFilterNode>;
};

export type TracksSubscriptionFilterNode = {
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  trackID?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  trackID_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  trackID_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  trackID_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  trackID_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  trackID_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  trackID_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  trackID_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  trackID_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  trackID_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  trackID_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  trackID_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  trackID_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  trackID_not_ends_with?: Maybe<Scalars['String']>;
  session?: Maybe<SessionFilter>;
};

export type TracksSubscriptionPayload = {
  mutation: _ModelMutationType;
  node?: Maybe<Tracks>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TracksPreviousValues>;
};

export type UpdateFile = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateSession = {
  hostID?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sessionID?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
  tracksesIds?: Maybe<Array<Scalars['ID']>>;
  trackses?: Maybe<Array<SessiontracksesTracks>>;
};

export type UpdateTracks = {
  id: Scalars['ID'];
  trackID?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['ID']>;
  session?: Maybe<TrackssessionSession>;
};

export type UpdateUser = {
  id: Scalars['ID'];
};

export type User = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type UserFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserFilter>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserPreviousValues = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type UserSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserSubscriptionFilterNode>;
};

export type UserSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type UserSubscriptionPayload = {
  mutation: _ModelMutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserPreviousValues>;
};
export type DeleteTrackRequestMutationVariables = {
  graphID: Scalars['ID'];
};

export type DeleteTrackRequestMutation = { __typename?: 'Mutation' } & {
  deleteTracks: Maybe<
    { __typename?: 'Tracks' } & Pick<Tracks, 'id' | 'trackID'>
  >;
};

export type CreateSessionMutationVariables = {
  sessionID: Scalars['String'];
  shortCode: Scalars['String'];
  hostID: Scalars['String'];
};

export type CreateSessionMutation = { __typename?: 'Mutation' } & {
  createSession: Maybe<
    { __typename?: 'Session' } & Pick<
      Session,
      'id' | 'shortCode' | 'sessionID' | 'hostID'
    >
  >;
};

export type CreateTrackMutationVariables = {
  trackID: Scalars['String'];
  sessionGID: Scalars['ID'];
};

export type CreateTrackMutation = { __typename?: 'Mutation' } & {
  createTracks: Maybe<
    { __typename?: 'Tracks' } & Pick<Tracks, 'id' | 'trackID'>
  >;
};

export type GetSessionQueryVariables = {
  shortCode: Scalars['String'];
};

export type GetSessionQuery = { __typename?: 'Query' } & {
  Session: Maybe<
    { __typename?: 'Session' } & Pick<
      Session,
      'id' | 'sessionID' | 'hostID'
    > & {
        trackses: Maybe<
          Array<{ __typename?: 'Tracks' } & Pick<Tracks, 'trackID' | 'id'>>
        >;
      }
  >;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';

export const DeleteTrackRequestDocument = gql`
  mutation deleteTrackRequest($graphID: ID!) {
    deleteTracks(id: $graphID) {
      id
      trackID
    }
  }
`;

export class DeleteTrackRequestComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      DeleteTrackRequestMutation,
      DeleteTrackRequestMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        DeleteTrackRequestMutation,
        DeleteTrackRequestMutationVariables
      >
        mutation={DeleteTrackRequestDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type DeleteTrackRequestProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    DeleteTrackRequestMutation,
    DeleteTrackRequestMutationVariables
  >
> &
  TChildProps;
export type DeleteTrackRequestMutationFn = ReactApollo.MutationFn<
  DeleteTrackRequestMutation,
  DeleteTrackRequestMutationVariables
>;
export function withDeleteTrackRequest<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteTrackRequestMutation,
        DeleteTrackRequestMutationVariables,
        DeleteTrackRequestProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    DeleteTrackRequestMutation,
    DeleteTrackRequestMutationVariables,
    DeleteTrackRequestProps<TChildProps>
  >(DeleteTrackRequestDocument, operationOptions);
}
export const CreateSessionDocument = gql`
  mutation createSession(
    $sessionID: String!
    $shortCode: String!
    $hostID: String!
  ) {
    createSession(
      sessionID: $sessionID
      shortCode: $shortCode
      hostID: $hostID
    ) {
      id
      shortCode
      sessionID
      hostID
    }
  }
`;

export class CreateSessionComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateSessionMutation,
      CreateSessionMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateSessionMutation,
        CreateSessionMutationVariables
      >
        mutation={CreateSessionDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateSessionProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateSessionMutation, CreateSessionMutationVariables>
> &
  TChildProps;
export type CreateSessionMutationFn = ReactApollo.MutationFn<
  CreateSessionMutation,
  CreateSessionMutationVariables
>;
export function withCreateSession<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateSessionMutation,
        CreateSessionMutationVariables,
        CreateSessionProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    CreateSessionMutation,
    CreateSessionMutationVariables,
    CreateSessionProps<TChildProps>
  >(CreateSessionDocument, operationOptions);
}
export const CreateTrackDocument = gql`
  mutation createTrack($trackID: String!, $sessionGID: ID!) {
    createTracks(trackID: $trackID, sessionId: $sessionGID) {
      id
      trackID
    }
  }
`;

export class CreateTrackComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateTrackMutation, CreateTrackMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateTrackMutation, CreateTrackMutationVariables>
        mutation={CreateTrackDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateTrackProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateTrackMutation, CreateTrackMutationVariables>
> &
  TChildProps;
export type CreateTrackMutationFn = ReactApollo.MutationFn<
  CreateTrackMutation,
  CreateTrackMutationVariables
>;
export function withCreateTrack<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateTrackMutation,
        CreateTrackMutationVariables,
        CreateTrackProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    CreateTrackMutation,
    CreateTrackMutationVariables,
    CreateTrackProps<TChildProps>
  >(CreateTrackDocument, operationOptions);
}
export const GetSessionDocument = gql`
  query getSession($shortCode: String!) {
    Session(shortCode: $shortCode) {
      id
      trackses {
        trackID
        id
      }
      sessionID
      hostID
    }
  }
`;

export class GetSessionComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetSessionQuery, GetSessionQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetSessionQuery, GetSessionQueryVariables>
        query={GetSessionDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetSessionProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetSessionQuery, GetSessionQueryVariables>
> &
  TChildProps;
export function withGetSession<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetSessionQuery,
        GetSessionQueryVariables,
        GetSessionProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetSessionQuery,
    GetSessionQueryVariables,
    GetSessionProps<TChildProps>
  >(GetSessionDocument, operationOptions);
}
