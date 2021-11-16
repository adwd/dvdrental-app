import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  Year: any;
};

export type Actor = Node & {
  __typename?: 'Actor';
  actorId: Scalars['Int'];
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActors: FilmActorsConnection;
  firstName: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastName: Scalars['String'];
  lastUpdate: Scalars['Datetime'];
  score?: Maybe<Scalars['Int']>;
};


export type ActorFilmActorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};

export type ActorAggregates = {
  __typename?: 'ActorAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<ActorAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ActorDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<ActorMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<ActorMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<ActorStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<ActorStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<ActorSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<ActorVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<ActorVarianceSampleAggregates>;
};

export type ActorAverageAggregates = {
  __typename?: 'ActorAverageAggregates';
  /** Mean average of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Actor` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type ActorDistinctCountAggregates = {
  __typename?: 'ActorDistinctCountAggregates';
  /** Distinct count of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of firstName across the matching connection */
  firstName?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastName across the matching connection */
  lastName?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Actor` for usage during aggregation. */
export enum ActorGroupBy {
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR'
}

export type ActorHavingAverageInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorHavingDistinctCountInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Actor` aggregates. */
export type ActorHavingInput = {
  AND?: InputMaybe<Array<ActorHavingInput>>;
  OR?: InputMaybe<Array<ActorHavingInput>>;
  average?: InputMaybe<ActorHavingAverageInput>;
  distinctCount?: InputMaybe<ActorHavingDistinctCountInput>;
  max?: InputMaybe<ActorHavingMaxInput>;
  min?: InputMaybe<ActorHavingMinInput>;
  stddevPopulation?: InputMaybe<ActorHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<ActorHavingStddevSampleInput>;
  sum?: InputMaybe<ActorHavingSumInput>;
  variancePopulation?: InputMaybe<ActorHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<ActorHavingVarianceSampleInput>;
};

export type ActorHavingMaxInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorHavingMinInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorHavingStddevPopulationInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorHavingStddevSampleInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorHavingSumInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorHavingVariancePopulationInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorHavingVarianceSampleInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type ActorInfo = {
  __typename?: 'ActorInfo';
  actorId?: Maybe<Scalars['Int']>;
  filmInfo?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type ActorInfoAggregates = {
  __typename?: 'ActorInfoAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<ActorInfoAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ActorInfoDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<ActorInfoMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<ActorInfoMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<ActorInfoStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<ActorInfoStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<ActorInfoSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<ActorInfoVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<ActorInfoVarianceSampleAggregates>;
};

export type ActorInfoAverageAggregates = {
  __typename?: 'ActorInfoAverageAggregates';
  /** Mean average of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `ActorInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ActorInfoCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `filmInfo` field. */
  filmInfo?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
};

export type ActorInfoDistinctCountAggregates = {
  __typename?: 'ActorInfoDistinctCountAggregates';
  /** Distinct count of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of filmInfo across the matching connection */
  filmInfo?: Maybe<Scalars['BigInt']>;
  /** Distinct count of firstName across the matching connection */
  firstName?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastName across the matching connection */
  lastName?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `ActorInfo` for usage during aggregation. */
export enum ActorInfoGroupBy {
  ActorId = 'ACTOR_ID',
  FilmInfo = 'FILM_INFO',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME'
}

export type ActorInfoHavingAverageInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoHavingDistinctCountInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `ActorInfo` aggregates. */
export type ActorInfoHavingInput = {
  AND?: InputMaybe<Array<ActorInfoHavingInput>>;
  OR?: InputMaybe<Array<ActorInfoHavingInput>>;
  average?: InputMaybe<ActorInfoHavingAverageInput>;
  distinctCount?: InputMaybe<ActorInfoHavingDistinctCountInput>;
  max?: InputMaybe<ActorInfoHavingMaxInput>;
  min?: InputMaybe<ActorInfoHavingMinInput>;
  stddevPopulation?: InputMaybe<ActorInfoHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<ActorInfoHavingStddevSampleInput>;
  sum?: InputMaybe<ActorInfoHavingSumInput>;
  variancePopulation?: InputMaybe<ActorInfoHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<ActorInfoHavingVarianceSampleInput>;
};

export type ActorInfoHavingMaxInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoHavingMinInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoHavingStddevPopulationInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoHavingStddevSampleInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoHavingSumInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoHavingVariancePopulationInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoHavingVarianceSampleInput = {
  actorId?: InputMaybe<HavingIntFilter>;
};

export type ActorInfoMaxAggregates = {
  __typename?: 'ActorInfoMaxAggregates';
  /** Maximum of actorId across the matching connection */
  actorId?: Maybe<Scalars['Int']>;
};

export type ActorInfoMinAggregates = {
  __typename?: 'ActorInfoMinAggregates';
  /** Minimum of actorId across the matching connection */
  actorId?: Maybe<Scalars['Int']>;
};

export type ActorInfoStddevPopulationAggregates = {
  __typename?: 'ActorInfoStddevPopulationAggregates';
  /** Population standard deviation of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

export type ActorInfoStddevSampleAggregates = {
  __typename?: 'ActorInfoStddevSampleAggregates';
  /** Sample standard deviation of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

export type ActorInfoSumAggregates = {
  __typename?: 'ActorInfoSumAggregates';
  /** Sum of actorId across the matching connection */
  actorId: Scalars['BigInt'];
};

export type ActorInfoVariancePopulationAggregates = {
  __typename?: 'ActorInfoVariancePopulationAggregates';
  /** Population variance of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

export type ActorInfoVarianceSampleAggregates = {
  __typename?: 'ActorInfoVarianceSampleAggregates';
  /** Sample variance of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `ActorInfo` values. */
export type ActorInfosConnection = {
  __typename?: 'ActorInfosConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ActorInfoAggregates>;
  /** A list of edges which contains the `ActorInfo` and cursor to aid in pagination. */
  edges: Array<ActorInfosEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ActorInfoAggregates>>;
  /** A list of `ActorInfo` objects. */
  nodes: Array<Maybe<ActorInfo>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ActorInfo` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `ActorInfo` values. */
export type ActorInfosConnectionGroupedAggregatesArgs = {
  groupBy: Array<ActorInfoGroupBy>;
  having?: InputMaybe<ActorInfoHavingInput>;
};

/** A `ActorInfo` edge in the connection. */
export type ActorInfosEdge = {
  __typename?: 'ActorInfosEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ActorInfo` at the end of the edge. */
  node?: Maybe<ActorInfo>;
};

/** Methods to use when ordering `ActorInfo`. */
export enum ActorInfosOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FilmInfoAsc = 'FILM_INFO_ASC',
  FilmInfoDesc = 'FILM_INFO_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL'
}

/** An input for mutations affecting `Actor` */
export type ActorInput = {
  actorId?: InputMaybe<Scalars['Int']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type ActorMaxAggregates = {
  __typename?: 'ActorMaxAggregates';
  /** Maximum of actorId across the matching connection */
  actorId?: Maybe<Scalars['Int']>;
};

export type ActorMinAggregates = {
  __typename?: 'ActorMinAggregates';
  /** Minimum of actorId across the matching connection */
  actorId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Actor`. Fields that are set will be updated. */
export type ActorPatch = {
  actorId?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type ActorStddevPopulationAggregates = {
  __typename?: 'ActorStddevPopulationAggregates';
  /** Population standard deviation of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

export type ActorStddevSampleAggregates = {
  __typename?: 'ActorStddevSampleAggregates';
  /** Sample standard deviation of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

export type ActorSumAggregates = {
  __typename?: 'ActorSumAggregates';
  /** Sum of actorId across the matching connection */
  actorId: Scalars['BigInt'];
};

export type ActorVariancePopulationAggregates = {
  __typename?: 'ActorVariancePopulationAggregates';
  /** Population variance of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

export type ActorVarianceSampleAggregates = {
  __typename?: 'ActorVarianceSampleAggregates';
  /** Sample variance of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Actor` values. */
export type ActorsConnection = {
  __typename?: 'ActorsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ActorAggregates>;
  /** A list of edges which contains the `Actor` and cursor to aid in pagination. */
  edges: Array<ActorsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ActorAggregates>>;
  /** A list of `Actor` objects. */
  nodes: Array<Maybe<Actor>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Actor` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Actor` values. */
export type ActorsConnectionGroupedAggregatesArgs = {
  groupBy: Array<ActorGroupBy>;
  having?: InputMaybe<ActorHavingInput>;
};

/** A `Actor` edge in the connection. */
export type ActorsEdge = {
  __typename?: 'ActorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Actor` at the end of the edge. */
  node?: Maybe<Actor>;
};

/** Methods to use when ordering `Actor`. */
export enum ActorsOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FilmActorsAverageActorIdAsc = 'FILM_ACTORS_AVERAGE_ACTOR_ID_ASC',
  FilmActorsAverageActorIdDesc = 'FILM_ACTORS_AVERAGE_ACTOR_ID_DESC',
  FilmActorsAverageFilmIdAsc = 'FILM_ACTORS_AVERAGE_FILM_ID_ASC',
  FilmActorsAverageFilmIdDesc = 'FILM_ACTORS_AVERAGE_FILM_ID_DESC',
  FilmActorsAverageLastUpdateAsc = 'FILM_ACTORS_AVERAGE_LAST_UPDATE_ASC',
  FilmActorsAverageLastUpdateDesc = 'FILM_ACTORS_AVERAGE_LAST_UPDATE_DESC',
  FilmActorsCountAsc = 'FILM_ACTORS_COUNT_ASC',
  FilmActorsCountDesc = 'FILM_ACTORS_COUNT_DESC',
  FilmActorsDistinctCountActorIdAsc = 'FILM_ACTORS_DISTINCT_COUNT_ACTOR_ID_ASC',
  FilmActorsDistinctCountActorIdDesc = 'FILM_ACTORS_DISTINCT_COUNT_ACTOR_ID_DESC',
  FilmActorsDistinctCountFilmIdAsc = 'FILM_ACTORS_DISTINCT_COUNT_FILM_ID_ASC',
  FilmActorsDistinctCountFilmIdDesc = 'FILM_ACTORS_DISTINCT_COUNT_FILM_ID_DESC',
  FilmActorsDistinctCountLastUpdateAsc = 'FILM_ACTORS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  FilmActorsDistinctCountLastUpdateDesc = 'FILM_ACTORS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  FilmActorsMaxActorIdAsc = 'FILM_ACTORS_MAX_ACTOR_ID_ASC',
  FilmActorsMaxActorIdDesc = 'FILM_ACTORS_MAX_ACTOR_ID_DESC',
  FilmActorsMaxFilmIdAsc = 'FILM_ACTORS_MAX_FILM_ID_ASC',
  FilmActorsMaxFilmIdDesc = 'FILM_ACTORS_MAX_FILM_ID_DESC',
  FilmActorsMaxLastUpdateAsc = 'FILM_ACTORS_MAX_LAST_UPDATE_ASC',
  FilmActorsMaxLastUpdateDesc = 'FILM_ACTORS_MAX_LAST_UPDATE_DESC',
  FilmActorsMinActorIdAsc = 'FILM_ACTORS_MIN_ACTOR_ID_ASC',
  FilmActorsMinActorIdDesc = 'FILM_ACTORS_MIN_ACTOR_ID_DESC',
  FilmActorsMinFilmIdAsc = 'FILM_ACTORS_MIN_FILM_ID_ASC',
  FilmActorsMinFilmIdDesc = 'FILM_ACTORS_MIN_FILM_ID_DESC',
  FilmActorsMinLastUpdateAsc = 'FILM_ACTORS_MIN_LAST_UPDATE_ASC',
  FilmActorsMinLastUpdateDesc = 'FILM_ACTORS_MIN_LAST_UPDATE_DESC',
  FilmActorsStddevPopulationActorIdAsc = 'FILM_ACTORS_STDDEV_POPULATION_ACTOR_ID_ASC',
  FilmActorsStddevPopulationActorIdDesc = 'FILM_ACTORS_STDDEV_POPULATION_ACTOR_ID_DESC',
  FilmActorsStddevPopulationFilmIdAsc = 'FILM_ACTORS_STDDEV_POPULATION_FILM_ID_ASC',
  FilmActorsStddevPopulationFilmIdDesc = 'FILM_ACTORS_STDDEV_POPULATION_FILM_ID_DESC',
  FilmActorsStddevPopulationLastUpdateAsc = 'FILM_ACTORS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  FilmActorsStddevPopulationLastUpdateDesc = 'FILM_ACTORS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  FilmActorsStddevSampleActorIdAsc = 'FILM_ACTORS_STDDEV_SAMPLE_ACTOR_ID_ASC',
  FilmActorsStddevSampleActorIdDesc = 'FILM_ACTORS_STDDEV_SAMPLE_ACTOR_ID_DESC',
  FilmActorsStddevSampleFilmIdAsc = 'FILM_ACTORS_STDDEV_SAMPLE_FILM_ID_ASC',
  FilmActorsStddevSampleFilmIdDesc = 'FILM_ACTORS_STDDEV_SAMPLE_FILM_ID_DESC',
  FilmActorsStddevSampleLastUpdateAsc = 'FILM_ACTORS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  FilmActorsStddevSampleLastUpdateDesc = 'FILM_ACTORS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  FilmActorsSumActorIdAsc = 'FILM_ACTORS_SUM_ACTOR_ID_ASC',
  FilmActorsSumActorIdDesc = 'FILM_ACTORS_SUM_ACTOR_ID_DESC',
  FilmActorsSumFilmIdAsc = 'FILM_ACTORS_SUM_FILM_ID_ASC',
  FilmActorsSumFilmIdDesc = 'FILM_ACTORS_SUM_FILM_ID_DESC',
  FilmActorsSumLastUpdateAsc = 'FILM_ACTORS_SUM_LAST_UPDATE_ASC',
  FilmActorsSumLastUpdateDesc = 'FILM_ACTORS_SUM_LAST_UPDATE_DESC',
  FilmActorsVariancePopulationActorIdAsc = 'FILM_ACTORS_VARIANCE_POPULATION_ACTOR_ID_ASC',
  FilmActorsVariancePopulationActorIdDesc = 'FILM_ACTORS_VARIANCE_POPULATION_ACTOR_ID_DESC',
  FilmActorsVariancePopulationFilmIdAsc = 'FILM_ACTORS_VARIANCE_POPULATION_FILM_ID_ASC',
  FilmActorsVariancePopulationFilmIdDesc = 'FILM_ACTORS_VARIANCE_POPULATION_FILM_ID_DESC',
  FilmActorsVariancePopulationLastUpdateAsc = 'FILM_ACTORS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  FilmActorsVariancePopulationLastUpdateDesc = 'FILM_ACTORS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  FilmActorsVarianceSampleActorIdAsc = 'FILM_ACTORS_VARIANCE_SAMPLE_ACTOR_ID_ASC',
  FilmActorsVarianceSampleActorIdDesc = 'FILM_ACTORS_VARIANCE_SAMPLE_ACTOR_ID_DESC',
  FilmActorsVarianceSampleFilmIdAsc = 'FILM_ACTORS_VARIANCE_SAMPLE_FILM_ID_ASC',
  FilmActorsVarianceSampleFilmIdDesc = 'FILM_ACTORS_VARIANCE_SAMPLE_FILM_ID_DESC',
  FilmActorsVarianceSampleLastUpdateAsc = 'FILM_ACTORS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  FilmActorsVarianceSampleLastUpdateDesc = 'FILM_ACTORS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Address = Node & {
  __typename?: 'Address';
  address: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  addressId: Scalars['Int'];
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>;
  cityId: Scalars['Int'];
  /** Reads and enables pagination through a set of `Customer`. */
  customers: CustomersConnection;
  district: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastUpdate: Scalars['Datetime'];
  phone: Scalars['String'];
  postalCode?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Staff`. */
  staffs: StaffConnection;
  /** Reads and enables pagination through a set of `Store`. */
  stores: StoresConnection;
};


export type AddressCustomersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


export type AddressStaffsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};


export type AddressStoresArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

export type AddressAggregates = {
  __typename?: 'AddressAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<AddressAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<AddressDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<AddressMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<AddressMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<AddressStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<AddressStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<AddressSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<AddressVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<AddressVarianceSampleAggregates>;
};

export type AddressAverageAggregates = {
  __typename?: 'AddressAverageAggregates';
  /** Mean average of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `address2` field. */
  address2?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `district` field. */
  district?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `postalCode` field. */
  postalCode?: InputMaybe<Scalars['String']>;
};

export type AddressDistinctCountAggregates = {
  __typename?: 'AddressDistinctCountAggregates';
  /** Distinct count of address across the matching connection */
  address?: Maybe<Scalars['BigInt']>;
  /** Distinct count of address2 across the matching connection */
  address2?: Maybe<Scalars['BigInt']>;
  /** Distinct count of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of district across the matching connection */
  district?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of phone across the matching connection */
  phone?: Maybe<Scalars['BigInt']>;
  /** Distinct count of postalCode across the matching connection */
  postalCode?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Address` for usage during aggregation. */
export enum AddressGroupBy {
  Address = 'ADDRESS',
  Address2 = 'ADDRESS2',
  CityId = 'CITY_ID',
  District = 'DISTRICT',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  Phone = 'PHONE',
  PostalCode = 'POSTAL_CODE'
}

export type AddressHavingAverageInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type AddressHavingDistinctCountInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Address` aggregates. */
export type AddressHavingInput = {
  AND?: InputMaybe<Array<AddressHavingInput>>;
  OR?: InputMaybe<Array<AddressHavingInput>>;
  average?: InputMaybe<AddressHavingAverageInput>;
  distinctCount?: InputMaybe<AddressHavingDistinctCountInput>;
  max?: InputMaybe<AddressHavingMaxInput>;
  min?: InputMaybe<AddressHavingMinInput>;
  stddevPopulation?: InputMaybe<AddressHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<AddressHavingStddevSampleInput>;
  sum?: InputMaybe<AddressHavingSumInput>;
  variancePopulation?: InputMaybe<AddressHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<AddressHavingVarianceSampleInput>;
};

export type AddressHavingMaxInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type AddressHavingMinInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type AddressHavingStddevPopulationInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type AddressHavingStddevSampleInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type AddressHavingSumInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type AddressHavingVariancePopulationInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type AddressHavingVarianceSampleInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  cityId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Address` */
export type AddressInput = {
  address: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  addressId?: InputMaybe<Scalars['Int']>;
  cityId: Scalars['Int'];
  district: Scalars['String'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  phone: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
};

export type AddressMaxAggregates = {
  __typename?: 'AddressMaxAggregates';
  /** Maximum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Maximum of cityId across the matching connection */
  cityId?: Maybe<Scalars['Int']>;
};

export type AddressMinAggregates = {
  __typename?: 'AddressMinAggregates';
  /** Minimum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Minimum of cityId across the matching connection */
  cityId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  address?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  addressId?: InputMaybe<Scalars['Int']>;
  cityId?: InputMaybe<Scalars['Int']>;
  district?: InputMaybe<Scalars['String']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type AddressStddevPopulationAggregates = {
  __typename?: 'AddressStddevPopulationAggregates';
  /** Population standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
};

export type AddressStddevSampleAggregates = {
  __typename?: 'AddressStddevSampleAggregates';
  /** Sample standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
};

export type AddressSumAggregates = {
  __typename?: 'AddressSumAggregates';
  /** Sum of addressId across the matching connection */
  addressId: Scalars['BigInt'];
  /** Sum of cityId across the matching connection */
  cityId: Scalars['BigInt'];
};

export type AddressVariancePopulationAggregates = {
  __typename?: 'AddressVariancePopulationAggregates';
  /** Population variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
};

export type AddressVarianceSampleAggregates = {
  __typename?: 'AddressVarianceSampleAggregates';
  /** Sample variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AddressAggregates>;
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AddressAggregates>>;
  /** A list of `Address` objects. */
  nodes: Array<Maybe<Address>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Address` values. */
export type AddressesConnectionGroupedAggregatesArgs = {
  groupBy: Array<AddressGroupBy>;
  having?: InputMaybe<AddressHavingInput>;
};

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Address` at the end of the edge. */
  node?: Maybe<Address>;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  Address2Asc = 'ADDRESS2_ASC',
  Address2Desc = 'ADDRESS2_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CityIdAsc = 'CITY_ID_ASC',
  CityIdDesc = 'CITY_ID_DESC',
  CustomersAverageActiveboolAsc = 'CUSTOMERS_AVERAGE_ACTIVEBOOL_ASC',
  CustomersAverageActiveboolDesc = 'CUSTOMERS_AVERAGE_ACTIVEBOOL_DESC',
  CustomersAverageActiveAsc = 'CUSTOMERS_AVERAGE_ACTIVE_ASC',
  CustomersAverageActiveDesc = 'CUSTOMERS_AVERAGE_ACTIVE_DESC',
  CustomersAverageAddressIdAsc = 'CUSTOMERS_AVERAGE_ADDRESS_ID_ASC',
  CustomersAverageAddressIdDesc = 'CUSTOMERS_AVERAGE_ADDRESS_ID_DESC',
  CustomersAverageCreateDateAsc = 'CUSTOMERS_AVERAGE_CREATE_DATE_ASC',
  CustomersAverageCreateDateDesc = 'CUSTOMERS_AVERAGE_CREATE_DATE_DESC',
  CustomersAverageCustomerIdAsc = 'CUSTOMERS_AVERAGE_CUSTOMER_ID_ASC',
  CustomersAverageCustomerIdDesc = 'CUSTOMERS_AVERAGE_CUSTOMER_ID_DESC',
  CustomersAverageEmailAsc = 'CUSTOMERS_AVERAGE_EMAIL_ASC',
  CustomersAverageEmailDesc = 'CUSTOMERS_AVERAGE_EMAIL_DESC',
  CustomersAverageFirstNameAsc = 'CUSTOMERS_AVERAGE_FIRST_NAME_ASC',
  CustomersAverageFirstNameDesc = 'CUSTOMERS_AVERAGE_FIRST_NAME_DESC',
  CustomersAverageLastNameAsc = 'CUSTOMERS_AVERAGE_LAST_NAME_ASC',
  CustomersAverageLastNameDesc = 'CUSTOMERS_AVERAGE_LAST_NAME_DESC',
  CustomersAverageLastUpdateAsc = 'CUSTOMERS_AVERAGE_LAST_UPDATE_ASC',
  CustomersAverageLastUpdateDesc = 'CUSTOMERS_AVERAGE_LAST_UPDATE_DESC',
  CustomersAverageStoreIdAsc = 'CUSTOMERS_AVERAGE_STORE_ID_ASC',
  CustomersAverageStoreIdDesc = 'CUSTOMERS_AVERAGE_STORE_ID_DESC',
  CustomersCountAsc = 'CUSTOMERS_COUNT_ASC',
  CustomersCountDesc = 'CUSTOMERS_COUNT_DESC',
  CustomersDistinctCountActiveboolAsc = 'CUSTOMERS_DISTINCT_COUNT_ACTIVEBOOL_ASC',
  CustomersDistinctCountActiveboolDesc = 'CUSTOMERS_DISTINCT_COUNT_ACTIVEBOOL_DESC',
  CustomersDistinctCountActiveAsc = 'CUSTOMERS_DISTINCT_COUNT_ACTIVE_ASC',
  CustomersDistinctCountActiveDesc = 'CUSTOMERS_DISTINCT_COUNT_ACTIVE_DESC',
  CustomersDistinctCountAddressIdAsc = 'CUSTOMERS_DISTINCT_COUNT_ADDRESS_ID_ASC',
  CustomersDistinctCountAddressIdDesc = 'CUSTOMERS_DISTINCT_COUNT_ADDRESS_ID_DESC',
  CustomersDistinctCountCreateDateAsc = 'CUSTOMERS_DISTINCT_COUNT_CREATE_DATE_ASC',
  CustomersDistinctCountCreateDateDesc = 'CUSTOMERS_DISTINCT_COUNT_CREATE_DATE_DESC',
  CustomersDistinctCountCustomerIdAsc = 'CUSTOMERS_DISTINCT_COUNT_CUSTOMER_ID_ASC',
  CustomersDistinctCountCustomerIdDesc = 'CUSTOMERS_DISTINCT_COUNT_CUSTOMER_ID_DESC',
  CustomersDistinctCountEmailAsc = 'CUSTOMERS_DISTINCT_COUNT_EMAIL_ASC',
  CustomersDistinctCountEmailDesc = 'CUSTOMERS_DISTINCT_COUNT_EMAIL_DESC',
  CustomersDistinctCountFirstNameAsc = 'CUSTOMERS_DISTINCT_COUNT_FIRST_NAME_ASC',
  CustomersDistinctCountFirstNameDesc = 'CUSTOMERS_DISTINCT_COUNT_FIRST_NAME_DESC',
  CustomersDistinctCountLastNameAsc = 'CUSTOMERS_DISTINCT_COUNT_LAST_NAME_ASC',
  CustomersDistinctCountLastNameDesc = 'CUSTOMERS_DISTINCT_COUNT_LAST_NAME_DESC',
  CustomersDistinctCountLastUpdateAsc = 'CUSTOMERS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  CustomersDistinctCountLastUpdateDesc = 'CUSTOMERS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  CustomersDistinctCountStoreIdAsc = 'CUSTOMERS_DISTINCT_COUNT_STORE_ID_ASC',
  CustomersDistinctCountStoreIdDesc = 'CUSTOMERS_DISTINCT_COUNT_STORE_ID_DESC',
  CustomersMaxActiveboolAsc = 'CUSTOMERS_MAX_ACTIVEBOOL_ASC',
  CustomersMaxActiveboolDesc = 'CUSTOMERS_MAX_ACTIVEBOOL_DESC',
  CustomersMaxActiveAsc = 'CUSTOMERS_MAX_ACTIVE_ASC',
  CustomersMaxActiveDesc = 'CUSTOMERS_MAX_ACTIVE_DESC',
  CustomersMaxAddressIdAsc = 'CUSTOMERS_MAX_ADDRESS_ID_ASC',
  CustomersMaxAddressIdDesc = 'CUSTOMERS_MAX_ADDRESS_ID_DESC',
  CustomersMaxCreateDateAsc = 'CUSTOMERS_MAX_CREATE_DATE_ASC',
  CustomersMaxCreateDateDesc = 'CUSTOMERS_MAX_CREATE_DATE_DESC',
  CustomersMaxCustomerIdAsc = 'CUSTOMERS_MAX_CUSTOMER_ID_ASC',
  CustomersMaxCustomerIdDesc = 'CUSTOMERS_MAX_CUSTOMER_ID_DESC',
  CustomersMaxEmailAsc = 'CUSTOMERS_MAX_EMAIL_ASC',
  CustomersMaxEmailDesc = 'CUSTOMERS_MAX_EMAIL_DESC',
  CustomersMaxFirstNameAsc = 'CUSTOMERS_MAX_FIRST_NAME_ASC',
  CustomersMaxFirstNameDesc = 'CUSTOMERS_MAX_FIRST_NAME_DESC',
  CustomersMaxLastNameAsc = 'CUSTOMERS_MAX_LAST_NAME_ASC',
  CustomersMaxLastNameDesc = 'CUSTOMERS_MAX_LAST_NAME_DESC',
  CustomersMaxLastUpdateAsc = 'CUSTOMERS_MAX_LAST_UPDATE_ASC',
  CustomersMaxLastUpdateDesc = 'CUSTOMERS_MAX_LAST_UPDATE_DESC',
  CustomersMaxStoreIdAsc = 'CUSTOMERS_MAX_STORE_ID_ASC',
  CustomersMaxStoreIdDesc = 'CUSTOMERS_MAX_STORE_ID_DESC',
  CustomersMinActiveboolAsc = 'CUSTOMERS_MIN_ACTIVEBOOL_ASC',
  CustomersMinActiveboolDesc = 'CUSTOMERS_MIN_ACTIVEBOOL_DESC',
  CustomersMinActiveAsc = 'CUSTOMERS_MIN_ACTIVE_ASC',
  CustomersMinActiveDesc = 'CUSTOMERS_MIN_ACTIVE_DESC',
  CustomersMinAddressIdAsc = 'CUSTOMERS_MIN_ADDRESS_ID_ASC',
  CustomersMinAddressIdDesc = 'CUSTOMERS_MIN_ADDRESS_ID_DESC',
  CustomersMinCreateDateAsc = 'CUSTOMERS_MIN_CREATE_DATE_ASC',
  CustomersMinCreateDateDesc = 'CUSTOMERS_MIN_CREATE_DATE_DESC',
  CustomersMinCustomerIdAsc = 'CUSTOMERS_MIN_CUSTOMER_ID_ASC',
  CustomersMinCustomerIdDesc = 'CUSTOMERS_MIN_CUSTOMER_ID_DESC',
  CustomersMinEmailAsc = 'CUSTOMERS_MIN_EMAIL_ASC',
  CustomersMinEmailDesc = 'CUSTOMERS_MIN_EMAIL_DESC',
  CustomersMinFirstNameAsc = 'CUSTOMERS_MIN_FIRST_NAME_ASC',
  CustomersMinFirstNameDesc = 'CUSTOMERS_MIN_FIRST_NAME_DESC',
  CustomersMinLastNameAsc = 'CUSTOMERS_MIN_LAST_NAME_ASC',
  CustomersMinLastNameDesc = 'CUSTOMERS_MIN_LAST_NAME_DESC',
  CustomersMinLastUpdateAsc = 'CUSTOMERS_MIN_LAST_UPDATE_ASC',
  CustomersMinLastUpdateDesc = 'CUSTOMERS_MIN_LAST_UPDATE_DESC',
  CustomersMinStoreIdAsc = 'CUSTOMERS_MIN_STORE_ID_ASC',
  CustomersMinStoreIdDesc = 'CUSTOMERS_MIN_STORE_ID_DESC',
  CustomersStddevPopulationActiveboolAsc = 'CUSTOMERS_STDDEV_POPULATION_ACTIVEBOOL_ASC',
  CustomersStddevPopulationActiveboolDesc = 'CUSTOMERS_STDDEV_POPULATION_ACTIVEBOOL_DESC',
  CustomersStddevPopulationActiveAsc = 'CUSTOMERS_STDDEV_POPULATION_ACTIVE_ASC',
  CustomersStddevPopulationActiveDesc = 'CUSTOMERS_STDDEV_POPULATION_ACTIVE_DESC',
  CustomersStddevPopulationAddressIdAsc = 'CUSTOMERS_STDDEV_POPULATION_ADDRESS_ID_ASC',
  CustomersStddevPopulationAddressIdDesc = 'CUSTOMERS_STDDEV_POPULATION_ADDRESS_ID_DESC',
  CustomersStddevPopulationCreateDateAsc = 'CUSTOMERS_STDDEV_POPULATION_CREATE_DATE_ASC',
  CustomersStddevPopulationCreateDateDesc = 'CUSTOMERS_STDDEV_POPULATION_CREATE_DATE_DESC',
  CustomersStddevPopulationCustomerIdAsc = 'CUSTOMERS_STDDEV_POPULATION_CUSTOMER_ID_ASC',
  CustomersStddevPopulationCustomerIdDesc = 'CUSTOMERS_STDDEV_POPULATION_CUSTOMER_ID_DESC',
  CustomersStddevPopulationEmailAsc = 'CUSTOMERS_STDDEV_POPULATION_EMAIL_ASC',
  CustomersStddevPopulationEmailDesc = 'CUSTOMERS_STDDEV_POPULATION_EMAIL_DESC',
  CustomersStddevPopulationFirstNameAsc = 'CUSTOMERS_STDDEV_POPULATION_FIRST_NAME_ASC',
  CustomersStddevPopulationFirstNameDesc = 'CUSTOMERS_STDDEV_POPULATION_FIRST_NAME_DESC',
  CustomersStddevPopulationLastNameAsc = 'CUSTOMERS_STDDEV_POPULATION_LAST_NAME_ASC',
  CustomersStddevPopulationLastNameDesc = 'CUSTOMERS_STDDEV_POPULATION_LAST_NAME_DESC',
  CustomersStddevPopulationLastUpdateAsc = 'CUSTOMERS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  CustomersStddevPopulationLastUpdateDesc = 'CUSTOMERS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  CustomersStddevPopulationStoreIdAsc = 'CUSTOMERS_STDDEV_POPULATION_STORE_ID_ASC',
  CustomersStddevPopulationStoreIdDesc = 'CUSTOMERS_STDDEV_POPULATION_STORE_ID_DESC',
  CustomersStddevSampleActiveboolAsc = 'CUSTOMERS_STDDEV_SAMPLE_ACTIVEBOOL_ASC',
  CustomersStddevSampleActiveboolDesc = 'CUSTOMERS_STDDEV_SAMPLE_ACTIVEBOOL_DESC',
  CustomersStddevSampleActiveAsc = 'CUSTOMERS_STDDEV_SAMPLE_ACTIVE_ASC',
  CustomersStddevSampleActiveDesc = 'CUSTOMERS_STDDEV_SAMPLE_ACTIVE_DESC',
  CustomersStddevSampleAddressIdAsc = 'CUSTOMERS_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  CustomersStddevSampleAddressIdDesc = 'CUSTOMERS_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  CustomersStddevSampleCreateDateAsc = 'CUSTOMERS_STDDEV_SAMPLE_CREATE_DATE_ASC',
  CustomersStddevSampleCreateDateDesc = 'CUSTOMERS_STDDEV_SAMPLE_CREATE_DATE_DESC',
  CustomersStddevSampleCustomerIdAsc = 'CUSTOMERS_STDDEV_SAMPLE_CUSTOMER_ID_ASC',
  CustomersStddevSampleCustomerIdDesc = 'CUSTOMERS_STDDEV_SAMPLE_CUSTOMER_ID_DESC',
  CustomersStddevSampleEmailAsc = 'CUSTOMERS_STDDEV_SAMPLE_EMAIL_ASC',
  CustomersStddevSampleEmailDesc = 'CUSTOMERS_STDDEV_SAMPLE_EMAIL_DESC',
  CustomersStddevSampleFirstNameAsc = 'CUSTOMERS_STDDEV_SAMPLE_FIRST_NAME_ASC',
  CustomersStddevSampleFirstNameDesc = 'CUSTOMERS_STDDEV_SAMPLE_FIRST_NAME_DESC',
  CustomersStddevSampleLastNameAsc = 'CUSTOMERS_STDDEV_SAMPLE_LAST_NAME_ASC',
  CustomersStddevSampleLastNameDesc = 'CUSTOMERS_STDDEV_SAMPLE_LAST_NAME_DESC',
  CustomersStddevSampleLastUpdateAsc = 'CUSTOMERS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  CustomersStddevSampleLastUpdateDesc = 'CUSTOMERS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  CustomersStddevSampleStoreIdAsc = 'CUSTOMERS_STDDEV_SAMPLE_STORE_ID_ASC',
  CustomersStddevSampleStoreIdDesc = 'CUSTOMERS_STDDEV_SAMPLE_STORE_ID_DESC',
  CustomersSumActiveboolAsc = 'CUSTOMERS_SUM_ACTIVEBOOL_ASC',
  CustomersSumActiveboolDesc = 'CUSTOMERS_SUM_ACTIVEBOOL_DESC',
  CustomersSumActiveAsc = 'CUSTOMERS_SUM_ACTIVE_ASC',
  CustomersSumActiveDesc = 'CUSTOMERS_SUM_ACTIVE_DESC',
  CustomersSumAddressIdAsc = 'CUSTOMERS_SUM_ADDRESS_ID_ASC',
  CustomersSumAddressIdDesc = 'CUSTOMERS_SUM_ADDRESS_ID_DESC',
  CustomersSumCreateDateAsc = 'CUSTOMERS_SUM_CREATE_DATE_ASC',
  CustomersSumCreateDateDesc = 'CUSTOMERS_SUM_CREATE_DATE_DESC',
  CustomersSumCustomerIdAsc = 'CUSTOMERS_SUM_CUSTOMER_ID_ASC',
  CustomersSumCustomerIdDesc = 'CUSTOMERS_SUM_CUSTOMER_ID_DESC',
  CustomersSumEmailAsc = 'CUSTOMERS_SUM_EMAIL_ASC',
  CustomersSumEmailDesc = 'CUSTOMERS_SUM_EMAIL_DESC',
  CustomersSumFirstNameAsc = 'CUSTOMERS_SUM_FIRST_NAME_ASC',
  CustomersSumFirstNameDesc = 'CUSTOMERS_SUM_FIRST_NAME_DESC',
  CustomersSumLastNameAsc = 'CUSTOMERS_SUM_LAST_NAME_ASC',
  CustomersSumLastNameDesc = 'CUSTOMERS_SUM_LAST_NAME_DESC',
  CustomersSumLastUpdateAsc = 'CUSTOMERS_SUM_LAST_UPDATE_ASC',
  CustomersSumLastUpdateDesc = 'CUSTOMERS_SUM_LAST_UPDATE_DESC',
  CustomersSumStoreIdAsc = 'CUSTOMERS_SUM_STORE_ID_ASC',
  CustomersSumStoreIdDesc = 'CUSTOMERS_SUM_STORE_ID_DESC',
  CustomersVariancePopulationActiveboolAsc = 'CUSTOMERS_VARIANCE_POPULATION_ACTIVEBOOL_ASC',
  CustomersVariancePopulationActiveboolDesc = 'CUSTOMERS_VARIANCE_POPULATION_ACTIVEBOOL_DESC',
  CustomersVariancePopulationActiveAsc = 'CUSTOMERS_VARIANCE_POPULATION_ACTIVE_ASC',
  CustomersVariancePopulationActiveDesc = 'CUSTOMERS_VARIANCE_POPULATION_ACTIVE_DESC',
  CustomersVariancePopulationAddressIdAsc = 'CUSTOMERS_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  CustomersVariancePopulationAddressIdDesc = 'CUSTOMERS_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  CustomersVariancePopulationCreateDateAsc = 'CUSTOMERS_VARIANCE_POPULATION_CREATE_DATE_ASC',
  CustomersVariancePopulationCreateDateDesc = 'CUSTOMERS_VARIANCE_POPULATION_CREATE_DATE_DESC',
  CustomersVariancePopulationCustomerIdAsc = 'CUSTOMERS_VARIANCE_POPULATION_CUSTOMER_ID_ASC',
  CustomersVariancePopulationCustomerIdDesc = 'CUSTOMERS_VARIANCE_POPULATION_CUSTOMER_ID_DESC',
  CustomersVariancePopulationEmailAsc = 'CUSTOMERS_VARIANCE_POPULATION_EMAIL_ASC',
  CustomersVariancePopulationEmailDesc = 'CUSTOMERS_VARIANCE_POPULATION_EMAIL_DESC',
  CustomersVariancePopulationFirstNameAsc = 'CUSTOMERS_VARIANCE_POPULATION_FIRST_NAME_ASC',
  CustomersVariancePopulationFirstNameDesc = 'CUSTOMERS_VARIANCE_POPULATION_FIRST_NAME_DESC',
  CustomersVariancePopulationLastNameAsc = 'CUSTOMERS_VARIANCE_POPULATION_LAST_NAME_ASC',
  CustomersVariancePopulationLastNameDesc = 'CUSTOMERS_VARIANCE_POPULATION_LAST_NAME_DESC',
  CustomersVariancePopulationLastUpdateAsc = 'CUSTOMERS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  CustomersVariancePopulationLastUpdateDesc = 'CUSTOMERS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  CustomersVariancePopulationStoreIdAsc = 'CUSTOMERS_VARIANCE_POPULATION_STORE_ID_ASC',
  CustomersVariancePopulationStoreIdDesc = 'CUSTOMERS_VARIANCE_POPULATION_STORE_ID_DESC',
  CustomersVarianceSampleActiveboolAsc = 'CUSTOMERS_VARIANCE_SAMPLE_ACTIVEBOOL_ASC',
  CustomersVarianceSampleActiveboolDesc = 'CUSTOMERS_VARIANCE_SAMPLE_ACTIVEBOOL_DESC',
  CustomersVarianceSampleActiveAsc = 'CUSTOMERS_VARIANCE_SAMPLE_ACTIVE_ASC',
  CustomersVarianceSampleActiveDesc = 'CUSTOMERS_VARIANCE_SAMPLE_ACTIVE_DESC',
  CustomersVarianceSampleAddressIdAsc = 'CUSTOMERS_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  CustomersVarianceSampleAddressIdDesc = 'CUSTOMERS_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  CustomersVarianceSampleCreateDateAsc = 'CUSTOMERS_VARIANCE_SAMPLE_CREATE_DATE_ASC',
  CustomersVarianceSampleCreateDateDesc = 'CUSTOMERS_VARIANCE_SAMPLE_CREATE_DATE_DESC',
  CustomersVarianceSampleCustomerIdAsc = 'CUSTOMERS_VARIANCE_SAMPLE_CUSTOMER_ID_ASC',
  CustomersVarianceSampleCustomerIdDesc = 'CUSTOMERS_VARIANCE_SAMPLE_CUSTOMER_ID_DESC',
  CustomersVarianceSampleEmailAsc = 'CUSTOMERS_VARIANCE_SAMPLE_EMAIL_ASC',
  CustomersVarianceSampleEmailDesc = 'CUSTOMERS_VARIANCE_SAMPLE_EMAIL_DESC',
  CustomersVarianceSampleFirstNameAsc = 'CUSTOMERS_VARIANCE_SAMPLE_FIRST_NAME_ASC',
  CustomersVarianceSampleFirstNameDesc = 'CUSTOMERS_VARIANCE_SAMPLE_FIRST_NAME_DESC',
  CustomersVarianceSampleLastNameAsc = 'CUSTOMERS_VARIANCE_SAMPLE_LAST_NAME_ASC',
  CustomersVarianceSampleLastNameDesc = 'CUSTOMERS_VARIANCE_SAMPLE_LAST_NAME_DESC',
  CustomersVarianceSampleLastUpdateAsc = 'CUSTOMERS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  CustomersVarianceSampleLastUpdateDesc = 'CUSTOMERS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  CustomersVarianceSampleStoreIdAsc = 'CUSTOMERS_VARIANCE_SAMPLE_STORE_ID_ASC',
  CustomersVarianceSampleStoreIdDesc = 'CUSTOMERS_VARIANCE_SAMPLE_STORE_ID_DESC',
  DistrictAsc = 'DISTRICT_ASC',
  DistrictDesc = 'DISTRICT_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  PostalCodeAsc = 'POSTAL_CODE_ASC',
  PostalCodeDesc = 'POSTAL_CODE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StaffsAverageActiveAsc = 'STAFFS_AVERAGE_ACTIVE_ASC',
  StaffsAverageActiveDesc = 'STAFFS_AVERAGE_ACTIVE_DESC',
  StaffsAverageAddressIdAsc = 'STAFFS_AVERAGE_ADDRESS_ID_ASC',
  StaffsAverageAddressIdDesc = 'STAFFS_AVERAGE_ADDRESS_ID_DESC',
  StaffsAverageEmailAsc = 'STAFFS_AVERAGE_EMAIL_ASC',
  StaffsAverageEmailDesc = 'STAFFS_AVERAGE_EMAIL_DESC',
  StaffsAverageFirstNameAsc = 'STAFFS_AVERAGE_FIRST_NAME_ASC',
  StaffsAverageFirstNameDesc = 'STAFFS_AVERAGE_FIRST_NAME_DESC',
  StaffsAverageLastNameAsc = 'STAFFS_AVERAGE_LAST_NAME_ASC',
  StaffsAverageLastNameDesc = 'STAFFS_AVERAGE_LAST_NAME_DESC',
  StaffsAverageLastUpdateAsc = 'STAFFS_AVERAGE_LAST_UPDATE_ASC',
  StaffsAverageLastUpdateDesc = 'STAFFS_AVERAGE_LAST_UPDATE_DESC',
  StaffsAveragePasswordAsc = 'STAFFS_AVERAGE_PASSWORD_ASC',
  StaffsAveragePasswordDesc = 'STAFFS_AVERAGE_PASSWORD_DESC',
  StaffsAveragePictureAsc = 'STAFFS_AVERAGE_PICTURE_ASC',
  StaffsAveragePictureDesc = 'STAFFS_AVERAGE_PICTURE_DESC',
  StaffsAverageStaffIdAsc = 'STAFFS_AVERAGE_STAFF_ID_ASC',
  StaffsAverageStaffIdDesc = 'STAFFS_AVERAGE_STAFF_ID_DESC',
  StaffsAverageStoreIdAsc = 'STAFFS_AVERAGE_STORE_ID_ASC',
  StaffsAverageStoreIdDesc = 'STAFFS_AVERAGE_STORE_ID_DESC',
  StaffsAverageUsernameAsc = 'STAFFS_AVERAGE_USERNAME_ASC',
  StaffsAverageUsernameDesc = 'STAFFS_AVERAGE_USERNAME_DESC',
  StaffsCountAsc = 'STAFFS_COUNT_ASC',
  StaffsCountDesc = 'STAFFS_COUNT_DESC',
  StaffsDistinctCountActiveAsc = 'STAFFS_DISTINCT_COUNT_ACTIVE_ASC',
  StaffsDistinctCountActiveDesc = 'STAFFS_DISTINCT_COUNT_ACTIVE_DESC',
  StaffsDistinctCountAddressIdAsc = 'STAFFS_DISTINCT_COUNT_ADDRESS_ID_ASC',
  StaffsDistinctCountAddressIdDesc = 'STAFFS_DISTINCT_COUNT_ADDRESS_ID_DESC',
  StaffsDistinctCountEmailAsc = 'STAFFS_DISTINCT_COUNT_EMAIL_ASC',
  StaffsDistinctCountEmailDesc = 'STAFFS_DISTINCT_COUNT_EMAIL_DESC',
  StaffsDistinctCountFirstNameAsc = 'STAFFS_DISTINCT_COUNT_FIRST_NAME_ASC',
  StaffsDistinctCountFirstNameDesc = 'STAFFS_DISTINCT_COUNT_FIRST_NAME_DESC',
  StaffsDistinctCountLastNameAsc = 'STAFFS_DISTINCT_COUNT_LAST_NAME_ASC',
  StaffsDistinctCountLastNameDesc = 'STAFFS_DISTINCT_COUNT_LAST_NAME_DESC',
  StaffsDistinctCountLastUpdateAsc = 'STAFFS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  StaffsDistinctCountLastUpdateDesc = 'STAFFS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  StaffsDistinctCountPasswordAsc = 'STAFFS_DISTINCT_COUNT_PASSWORD_ASC',
  StaffsDistinctCountPasswordDesc = 'STAFFS_DISTINCT_COUNT_PASSWORD_DESC',
  StaffsDistinctCountPictureAsc = 'STAFFS_DISTINCT_COUNT_PICTURE_ASC',
  StaffsDistinctCountPictureDesc = 'STAFFS_DISTINCT_COUNT_PICTURE_DESC',
  StaffsDistinctCountStaffIdAsc = 'STAFFS_DISTINCT_COUNT_STAFF_ID_ASC',
  StaffsDistinctCountStaffIdDesc = 'STAFFS_DISTINCT_COUNT_STAFF_ID_DESC',
  StaffsDistinctCountStoreIdAsc = 'STAFFS_DISTINCT_COUNT_STORE_ID_ASC',
  StaffsDistinctCountStoreIdDesc = 'STAFFS_DISTINCT_COUNT_STORE_ID_DESC',
  StaffsDistinctCountUsernameAsc = 'STAFFS_DISTINCT_COUNT_USERNAME_ASC',
  StaffsDistinctCountUsernameDesc = 'STAFFS_DISTINCT_COUNT_USERNAME_DESC',
  StaffsMaxActiveAsc = 'STAFFS_MAX_ACTIVE_ASC',
  StaffsMaxActiveDesc = 'STAFFS_MAX_ACTIVE_DESC',
  StaffsMaxAddressIdAsc = 'STAFFS_MAX_ADDRESS_ID_ASC',
  StaffsMaxAddressIdDesc = 'STAFFS_MAX_ADDRESS_ID_DESC',
  StaffsMaxEmailAsc = 'STAFFS_MAX_EMAIL_ASC',
  StaffsMaxEmailDesc = 'STAFFS_MAX_EMAIL_DESC',
  StaffsMaxFirstNameAsc = 'STAFFS_MAX_FIRST_NAME_ASC',
  StaffsMaxFirstNameDesc = 'STAFFS_MAX_FIRST_NAME_DESC',
  StaffsMaxLastNameAsc = 'STAFFS_MAX_LAST_NAME_ASC',
  StaffsMaxLastNameDesc = 'STAFFS_MAX_LAST_NAME_DESC',
  StaffsMaxLastUpdateAsc = 'STAFFS_MAX_LAST_UPDATE_ASC',
  StaffsMaxLastUpdateDesc = 'STAFFS_MAX_LAST_UPDATE_DESC',
  StaffsMaxPasswordAsc = 'STAFFS_MAX_PASSWORD_ASC',
  StaffsMaxPasswordDesc = 'STAFFS_MAX_PASSWORD_DESC',
  StaffsMaxPictureAsc = 'STAFFS_MAX_PICTURE_ASC',
  StaffsMaxPictureDesc = 'STAFFS_MAX_PICTURE_DESC',
  StaffsMaxStaffIdAsc = 'STAFFS_MAX_STAFF_ID_ASC',
  StaffsMaxStaffIdDesc = 'STAFFS_MAX_STAFF_ID_DESC',
  StaffsMaxStoreIdAsc = 'STAFFS_MAX_STORE_ID_ASC',
  StaffsMaxStoreIdDesc = 'STAFFS_MAX_STORE_ID_DESC',
  StaffsMaxUsernameAsc = 'STAFFS_MAX_USERNAME_ASC',
  StaffsMaxUsernameDesc = 'STAFFS_MAX_USERNAME_DESC',
  StaffsMinActiveAsc = 'STAFFS_MIN_ACTIVE_ASC',
  StaffsMinActiveDesc = 'STAFFS_MIN_ACTIVE_DESC',
  StaffsMinAddressIdAsc = 'STAFFS_MIN_ADDRESS_ID_ASC',
  StaffsMinAddressIdDesc = 'STAFFS_MIN_ADDRESS_ID_DESC',
  StaffsMinEmailAsc = 'STAFFS_MIN_EMAIL_ASC',
  StaffsMinEmailDesc = 'STAFFS_MIN_EMAIL_DESC',
  StaffsMinFirstNameAsc = 'STAFFS_MIN_FIRST_NAME_ASC',
  StaffsMinFirstNameDesc = 'STAFFS_MIN_FIRST_NAME_DESC',
  StaffsMinLastNameAsc = 'STAFFS_MIN_LAST_NAME_ASC',
  StaffsMinLastNameDesc = 'STAFFS_MIN_LAST_NAME_DESC',
  StaffsMinLastUpdateAsc = 'STAFFS_MIN_LAST_UPDATE_ASC',
  StaffsMinLastUpdateDesc = 'STAFFS_MIN_LAST_UPDATE_DESC',
  StaffsMinPasswordAsc = 'STAFFS_MIN_PASSWORD_ASC',
  StaffsMinPasswordDesc = 'STAFFS_MIN_PASSWORD_DESC',
  StaffsMinPictureAsc = 'STAFFS_MIN_PICTURE_ASC',
  StaffsMinPictureDesc = 'STAFFS_MIN_PICTURE_DESC',
  StaffsMinStaffIdAsc = 'STAFFS_MIN_STAFF_ID_ASC',
  StaffsMinStaffIdDesc = 'STAFFS_MIN_STAFF_ID_DESC',
  StaffsMinStoreIdAsc = 'STAFFS_MIN_STORE_ID_ASC',
  StaffsMinStoreIdDesc = 'STAFFS_MIN_STORE_ID_DESC',
  StaffsMinUsernameAsc = 'STAFFS_MIN_USERNAME_ASC',
  StaffsMinUsernameDesc = 'STAFFS_MIN_USERNAME_DESC',
  StaffsStddevPopulationActiveAsc = 'STAFFS_STDDEV_POPULATION_ACTIVE_ASC',
  StaffsStddevPopulationActiveDesc = 'STAFFS_STDDEV_POPULATION_ACTIVE_DESC',
  StaffsStddevPopulationAddressIdAsc = 'STAFFS_STDDEV_POPULATION_ADDRESS_ID_ASC',
  StaffsStddevPopulationAddressIdDesc = 'STAFFS_STDDEV_POPULATION_ADDRESS_ID_DESC',
  StaffsStddevPopulationEmailAsc = 'STAFFS_STDDEV_POPULATION_EMAIL_ASC',
  StaffsStddevPopulationEmailDesc = 'STAFFS_STDDEV_POPULATION_EMAIL_DESC',
  StaffsStddevPopulationFirstNameAsc = 'STAFFS_STDDEV_POPULATION_FIRST_NAME_ASC',
  StaffsStddevPopulationFirstNameDesc = 'STAFFS_STDDEV_POPULATION_FIRST_NAME_DESC',
  StaffsStddevPopulationLastNameAsc = 'STAFFS_STDDEV_POPULATION_LAST_NAME_ASC',
  StaffsStddevPopulationLastNameDesc = 'STAFFS_STDDEV_POPULATION_LAST_NAME_DESC',
  StaffsStddevPopulationLastUpdateAsc = 'STAFFS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  StaffsStddevPopulationLastUpdateDesc = 'STAFFS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  StaffsStddevPopulationPasswordAsc = 'STAFFS_STDDEV_POPULATION_PASSWORD_ASC',
  StaffsStddevPopulationPasswordDesc = 'STAFFS_STDDEV_POPULATION_PASSWORD_DESC',
  StaffsStddevPopulationPictureAsc = 'STAFFS_STDDEV_POPULATION_PICTURE_ASC',
  StaffsStddevPopulationPictureDesc = 'STAFFS_STDDEV_POPULATION_PICTURE_DESC',
  StaffsStddevPopulationStaffIdAsc = 'STAFFS_STDDEV_POPULATION_STAFF_ID_ASC',
  StaffsStddevPopulationStaffIdDesc = 'STAFFS_STDDEV_POPULATION_STAFF_ID_DESC',
  StaffsStddevPopulationStoreIdAsc = 'STAFFS_STDDEV_POPULATION_STORE_ID_ASC',
  StaffsStddevPopulationStoreIdDesc = 'STAFFS_STDDEV_POPULATION_STORE_ID_DESC',
  StaffsStddevPopulationUsernameAsc = 'STAFFS_STDDEV_POPULATION_USERNAME_ASC',
  StaffsStddevPopulationUsernameDesc = 'STAFFS_STDDEV_POPULATION_USERNAME_DESC',
  StaffsStddevSampleActiveAsc = 'STAFFS_STDDEV_SAMPLE_ACTIVE_ASC',
  StaffsStddevSampleActiveDesc = 'STAFFS_STDDEV_SAMPLE_ACTIVE_DESC',
  StaffsStddevSampleAddressIdAsc = 'STAFFS_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  StaffsStddevSampleAddressIdDesc = 'STAFFS_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  StaffsStddevSampleEmailAsc = 'STAFFS_STDDEV_SAMPLE_EMAIL_ASC',
  StaffsStddevSampleEmailDesc = 'STAFFS_STDDEV_SAMPLE_EMAIL_DESC',
  StaffsStddevSampleFirstNameAsc = 'STAFFS_STDDEV_SAMPLE_FIRST_NAME_ASC',
  StaffsStddevSampleFirstNameDesc = 'STAFFS_STDDEV_SAMPLE_FIRST_NAME_DESC',
  StaffsStddevSampleLastNameAsc = 'STAFFS_STDDEV_SAMPLE_LAST_NAME_ASC',
  StaffsStddevSampleLastNameDesc = 'STAFFS_STDDEV_SAMPLE_LAST_NAME_DESC',
  StaffsStddevSampleLastUpdateAsc = 'STAFFS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  StaffsStddevSampleLastUpdateDesc = 'STAFFS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  StaffsStddevSamplePasswordAsc = 'STAFFS_STDDEV_SAMPLE_PASSWORD_ASC',
  StaffsStddevSamplePasswordDesc = 'STAFFS_STDDEV_SAMPLE_PASSWORD_DESC',
  StaffsStddevSamplePictureAsc = 'STAFFS_STDDEV_SAMPLE_PICTURE_ASC',
  StaffsStddevSamplePictureDesc = 'STAFFS_STDDEV_SAMPLE_PICTURE_DESC',
  StaffsStddevSampleStaffIdAsc = 'STAFFS_STDDEV_SAMPLE_STAFF_ID_ASC',
  StaffsStddevSampleStaffIdDesc = 'STAFFS_STDDEV_SAMPLE_STAFF_ID_DESC',
  StaffsStddevSampleStoreIdAsc = 'STAFFS_STDDEV_SAMPLE_STORE_ID_ASC',
  StaffsStddevSampleStoreIdDesc = 'STAFFS_STDDEV_SAMPLE_STORE_ID_DESC',
  StaffsStddevSampleUsernameAsc = 'STAFFS_STDDEV_SAMPLE_USERNAME_ASC',
  StaffsStddevSampleUsernameDesc = 'STAFFS_STDDEV_SAMPLE_USERNAME_DESC',
  StaffsSumActiveAsc = 'STAFFS_SUM_ACTIVE_ASC',
  StaffsSumActiveDesc = 'STAFFS_SUM_ACTIVE_DESC',
  StaffsSumAddressIdAsc = 'STAFFS_SUM_ADDRESS_ID_ASC',
  StaffsSumAddressIdDesc = 'STAFFS_SUM_ADDRESS_ID_DESC',
  StaffsSumEmailAsc = 'STAFFS_SUM_EMAIL_ASC',
  StaffsSumEmailDesc = 'STAFFS_SUM_EMAIL_DESC',
  StaffsSumFirstNameAsc = 'STAFFS_SUM_FIRST_NAME_ASC',
  StaffsSumFirstNameDesc = 'STAFFS_SUM_FIRST_NAME_DESC',
  StaffsSumLastNameAsc = 'STAFFS_SUM_LAST_NAME_ASC',
  StaffsSumLastNameDesc = 'STAFFS_SUM_LAST_NAME_DESC',
  StaffsSumLastUpdateAsc = 'STAFFS_SUM_LAST_UPDATE_ASC',
  StaffsSumLastUpdateDesc = 'STAFFS_SUM_LAST_UPDATE_DESC',
  StaffsSumPasswordAsc = 'STAFFS_SUM_PASSWORD_ASC',
  StaffsSumPasswordDesc = 'STAFFS_SUM_PASSWORD_DESC',
  StaffsSumPictureAsc = 'STAFFS_SUM_PICTURE_ASC',
  StaffsSumPictureDesc = 'STAFFS_SUM_PICTURE_DESC',
  StaffsSumStaffIdAsc = 'STAFFS_SUM_STAFF_ID_ASC',
  StaffsSumStaffIdDesc = 'STAFFS_SUM_STAFF_ID_DESC',
  StaffsSumStoreIdAsc = 'STAFFS_SUM_STORE_ID_ASC',
  StaffsSumStoreIdDesc = 'STAFFS_SUM_STORE_ID_DESC',
  StaffsSumUsernameAsc = 'STAFFS_SUM_USERNAME_ASC',
  StaffsSumUsernameDesc = 'STAFFS_SUM_USERNAME_DESC',
  StaffsVariancePopulationActiveAsc = 'STAFFS_VARIANCE_POPULATION_ACTIVE_ASC',
  StaffsVariancePopulationActiveDesc = 'STAFFS_VARIANCE_POPULATION_ACTIVE_DESC',
  StaffsVariancePopulationAddressIdAsc = 'STAFFS_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  StaffsVariancePopulationAddressIdDesc = 'STAFFS_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  StaffsVariancePopulationEmailAsc = 'STAFFS_VARIANCE_POPULATION_EMAIL_ASC',
  StaffsVariancePopulationEmailDesc = 'STAFFS_VARIANCE_POPULATION_EMAIL_DESC',
  StaffsVariancePopulationFirstNameAsc = 'STAFFS_VARIANCE_POPULATION_FIRST_NAME_ASC',
  StaffsVariancePopulationFirstNameDesc = 'STAFFS_VARIANCE_POPULATION_FIRST_NAME_DESC',
  StaffsVariancePopulationLastNameAsc = 'STAFFS_VARIANCE_POPULATION_LAST_NAME_ASC',
  StaffsVariancePopulationLastNameDesc = 'STAFFS_VARIANCE_POPULATION_LAST_NAME_DESC',
  StaffsVariancePopulationLastUpdateAsc = 'STAFFS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  StaffsVariancePopulationLastUpdateDesc = 'STAFFS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  StaffsVariancePopulationPasswordAsc = 'STAFFS_VARIANCE_POPULATION_PASSWORD_ASC',
  StaffsVariancePopulationPasswordDesc = 'STAFFS_VARIANCE_POPULATION_PASSWORD_DESC',
  StaffsVariancePopulationPictureAsc = 'STAFFS_VARIANCE_POPULATION_PICTURE_ASC',
  StaffsVariancePopulationPictureDesc = 'STAFFS_VARIANCE_POPULATION_PICTURE_DESC',
  StaffsVariancePopulationStaffIdAsc = 'STAFFS_VARIANCE_POPULATION_STAFF_ID_ASC',
  StaffsVariancePopulationStaffIdDesc = 'STAFFS_VARIANCE_POPULATION_STAFF_ID_DESC',
  StaffsVariancePopulationStoreIdAsc = 'STAFFS_VARIANCE_POPULATION_STORE_ID_ASC',
  StaffsVariancePopulationStoreIdDesc = 'STAFFS_VARIANCE_POPULATION_STORE_ID_DESC',
  StaffsVariancePopulationUsernameAsc = 'STAFFS_VARIANCE_POPULATION_USERNAME_ASC',
  StaffsVariancePopulationUsernameDesc = 'STAFFS_VARIANCE_POPULATION_USERNAME_DESC',
  StaffsVarianceSampleActiveAsc = 'STAFFS_VARIANCE_SAMPLE_ACTIVE_ASC',
  StaffsVarianceSampleActiveDesc = 'STAFFS_VARIANCE_SAMPLE_ACTIVE_DESC',
  StaffsVarianceSampleAddressIdAsc = 'STAFFS_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  StaffsVarianceSampleAddressIdDesc = 'STAFFS_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  StaffsVarianceSampleEmailAsc = 'STAFFS_VARIANCE_SAMPLE_EMAIL_ASC',
  StaffsVarianceSampleEmailDesc = 'STAFFS_VARIANCE_SAMPLE_EMAIL_DESC',
  StaffsVarianceSampleFirstNameAsc = 'STAFFS_VARIANCE_SAMPLE_FIRST_NAME_ASC',
  StaffsVarianceSampleFirstNameDesc = 'STAFFS_VARIANCE_SAMPLE_FIRST_NAME_DESC',
  StaffsVarianceSampleLastNameAsc = 'STAFFS_VARIANCE_SAMPLE_LAST_NAME_ASC',
  StaffsVarianceSampleLastNameDesc = 'STAFFS_VARIANCE_SAMPLE_LAST_NAME_DESC',
  StaffsVarianceSampleLastUpdateAsc = 'STAFFS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  StaffsVarianceSampleLastUpdateDesc = 'STAFFS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  StaffsVarianceSamplePasswordAsc = 'STAFFS_VARIANCE_SAMPLE_PASSWORD_ASC',
  StaffsVarianceSamplePasswordDesc = 'STAFFS_VARIANCE_SAMPLE_PASSWORD_DESC',
  StaffsVarianceSamplePictureAsc = 'STAFFS_VARIANCE_SAMPLE_PICTURE_ASC',
  StaffsVarianceSamplePictureDesc = 'STAFFS_VARIANCE_SAMPLE_PICTURE_DESC',
  StaffsVarianceSampleStaffIdAsc = 'STAFFS_VARIANCE_SAMPLE_STAFF_ID_ASC',
  StaffsVarianceSampleStaffIdDesc = 'STAFFS_VARIANCE_SAMPLE_STAFF_ID_DESC',
  StaffsVarianceSampleStoreIdAsc = 'STAFFS_VARIANCE_SAMPLE_STORE_ID_ASC',
  StaffsVarianceSampleStoreIdDesc = 'STAFFS_VARIANCE_SAMPLE_STORE_ID_DESC',
  StaffsVarianceSampleUsernameAsc = 'STAFFS_VARIANCE_SAMPLE_USERNAME_ASC',
  StaffsVarianceSampleUsernameDesc = 'STAFFS_VARIANCE_SAMPLE_USERNAME_DESC',
  StoresAverageAddressIdAsc = 'STORES_AVERAGE_ADDRESS_ID_ASC',
  StoresAverageAddressIdDesc = 'STORES_AVERAGE_ADDRESS_ID_DESC',
  StoresAverageLastUpdateAsc = 'STORES_AVERAGE_LAST_UPDATE_ASC',
  StoresAverageLastUpdateDesc = 'STORES_AVERAGE_LAST_UPDATE_DESC',
  StoresAverageManagerStaffIdAsc = 'STORES_AVERAGE_MANAGER_STAFF_ID_ASC',
  StoresAverageManagerStaffIdDesc = 'STORES_AVERAGE_MANAGER_STAFF_ID_DESC',
  StoresAverageStoreIdAsc = 'STORES_AVERAGE_STORE_ID_ASC',
  StoresAverageStoreIdDesc = 'STORES_AVERAGE_STORE_ID_DESC',
  StoresCountAsc = 'STORES_COUNT_ASC',
  StoresCountDesc = 'STORES_COUNT_DESC',
  StoresDistinctCountAddressIdAsc = 'STORES_DISTINCT_COUNT_ADDRESS_ID_ASC',
  StoresDistinctCountAddressIdDesc = 'STORES_DISTINCT_COUNT_ADDRESS_ID_DESC',
  StoresDistinctCountLastUpdateAsc = 'STORES_DISTINCT_COUNT_LAST_UPDATE_ASC',
  StoresDistinctCountLastUpdateDesc = 'STORES_DISTINCT_COUNT_LAST_UPDATE_DESC',
  StoresDistinctCountManagerStaffIdAsc = 'STORES_DISTINCT_COUNT_MANAGER_STAFF_ID_ASC',
  StoresDistinctCountManagerStaffIdDesc = 'STORES_DISTINCT_COUNT_MANAGER_STAFF_ID_DESC',
  StoresDistinctCountStoreIdAsc = 'STORES_DISTINCT_COUNT_STORE_ID_ASC',
  StoresDistinctCountStoreIdDesc = 'STORES_DISTINCT_COUNT_STORE_ID_DESC',
  StoresMaxAddressIdAsc = 'STORES_MAX_ADDRESS_ID_ASC',
  StoresMaxAddressIdDesc = 'STORES_MAX_ADDRESS_ID_DESC',
  StoresMaxLastUpdateAsc = 'STORES_MAX_LAST_UPDATE_ASC',
  StoresMaxLastUpdateDesc = 'STORES_MAX_LAST_UPDATE_DESC',
  StoresMaxManagerStaffIdAsc = 'STORES_MAX_MANAGER_STAFF_ID_ASC',
  StoresMaxManagerStaffIdDesc = 'STORES_MAX_MANAGER_STAFF_ID_DESC',
  StoresMaxStoreIdAsc = 'STORES_MAX_STORE_ID_ASC',
  StoresMaxStoreIdDesc = 'STORES_MAX_STORE_ID_DESC',
  StoresMinAddressIdAsc = 'STORES_MIN_ADDRESS_ID_ASC',
  StoresMinAddressIdDesc = 'STORES_MIN_ADDRESS_ID_DESC',
  StoresMinLastUpdateAsc = 'STORES_MIN_LAST_UPDATE_ASC',
  StoresMinLastUpdateDesc = 'STORES_MIN_LAST_UPDATE_DESC',
  StoresMinManagerStaffIdAsc = 'STORES_MIN_MANAGER_STAFF_ID_ASC',
  StoresMinManagerStaffIdDesc = 'STORES_MIN_MANAGER_STAFF_ID_DESC',
  StoresMinStoreIdAsc = 'STORES_MIN_STORE_ID_ASC',
  StoresMinStoreIdDesc = 'STORES_MIN_STORE_ID_DESC',
  StoresStddevPopulationAddressIdAsc = 'STORES_STDDEV_POPULATION_ADDRESS_ID_ASC',
  StoresStddevPopulationAddressIdDesc = 'STORES_STDDEV_POPULATION_ADDRESS_ID_DESC',
  StoresStddevPopulationLastUpdateAsc = 'STORES_STDDEV_POPULATION_LAST_UPDATE_ASC',
  StoresStddevPopulationLastUpdateDesc = 'STORES_STDDEV_POPULATION_LAST_UPDATE_DESC',
  StoresStddevPopulationManagerStaffIdAsc = 'STORES_STDDEV_POPULATION_MANAGER_STAFF_ID_ASC',
  StoresStddevPopulationManagerStaffIdDesc = 'STORES_STDDEV_POPULATION_MANAGER_STAFF_ID_DESC',
  StoresStddevPopulationStoreIdAsc = 'STORES_STDDEV_POPULATION_STORE_ID_ASC',
  StoresStddevPopulationStoreIdDesc = 'STORES_STDDEV_POPULATION_STORE_ID_DESC',
  StoresStddevSampleAddressIdAsc = 'STORES_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  StoresStddevSampleAddressIdDesc = 'STORES_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  StoresStddevSampleLastUpdateAsc = 'STORES_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  StoresStddevSampleLastUpdateDesc = 'STORES_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  StoresStddevSampleManagerStaffIdAsc = 'STORES_STDDEV_SAMPLE_MANAGER_STAFF_ID_ASC',
  StoresStddevSampleManagerStaffIdDesc = 'STORES_STDDEV_SAMPLE_MANAGER_STAFF_ID_DESC',
  StoresStddevSampleStoreIdAsc = 'STORES_STDDEV_SAMPLE_STORE_ID_ASC',
  StoresStddevSampleStoreIdDesc = 'STORES_STDDEV_SAMPLE_STORE_ID_DESC',
  StoresSumAddressIdAsc = 'STORES_SUM_ADDRESS_ID_ASC',
  StoresSumAddressIdDesc = 'STORES_SUM_ADDRESS_ID_DESC',
  StoresSumLastUpdateAsc = 'STORES_SUM_LAST_UPDATE_ASC',
  StoresSumLastUpdateDesc = 'STORES_SUM_LAST_UPDATE_DESC',
  StoresSumManagerStaffIdAsc = 'STORES_SUM_MANAGER_STAFF_ID_ASC',
  StoresSumManagerStaffIdDesc = 'STORES_SUM_MANAGER_STAFF_ID_DESC',
  StoresSumStoreIdAsc = 'STORES_SUM_STORE_ID_ASC',
  StoresSumStoreIdDesc = 'STORES_SUM_STORE_ID_DESC',
  StoresVariancePopulationAddressIdAsc = 'STORES_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  StoresVariancePopulationAddressIdDesc = 'STORES_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  StoresVariancePopulationLastUpdateAsc = 'STORES_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  StoresVariancePopulationLastUpdateDesc = 'STORES_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  StoresVariancePopulationManagerStaffIdAsc = 'STORES_VARIANCE_POPULATION_MANAGER_STAFF_ID_ASC',
  StoresVariancePopulationManagerStaffIdDesc = 'STORES_VARIANCE_POPULATION_MANAGER_STAFF_ID_DESC',
  StoresVariancePopulationStoreIdAsc = 'STORES_VARIANCE_POPULATION_STORE_ID_ASC',
  StoresVariancePopulationStoreIdDesc = 'STORES_VARIANCE_POPULATION_STORE_ID_DESC',
  StoresVarianceSampleAddressIdAsc = 'STORES_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  StoresVarianceSampleAddressIdDesc = 'STORES_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  StoresVarianceSampleLastUpdateAsc = 'STORES_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  StoresVarianceSampleLastUpdateDesc = 'STORES_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  StoresVarianceSampleManagerStaffIdAsc = 'STORES_VARIANCE_SAMPLE_MANAGER_STAFF_ID_ASC',
  StoresVarianceSampleManagerStaffIdDesc = 'STORES_VARIANCE_SAMPLE_MANAGER_STAFF_ID_DESC',
  StoresVarianceSampleStoreIdAsc = 'STORES_VARIANCE_SAMPLE_STORE_ID_ASC',
  StoresVarianceSampleStoreIdDesc = 'STORES_VARIANCE_SAMPLE_STORE_ID_DESC'
}

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CategoryAggregates>;
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CategoryAggregates>>;
  /** A list of `Category` objects. */
  nodes: Array<Maybe<Category>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Category` values. */
export type CategoriesConnectionGroupedAggregatesArgs = {
  groupBy: Array<CategoryGroupBy>;
  having?: InputMaybe<CategoryHavingInput>;
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: 'CategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Category` at the end of the edge. */
  node?: Maybe<Category>;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  FilmCategoriesAverageCategoryIdAsc = 'FILM_CATEGORIES_AVERAGE_CATEGORY_ID_ASC',
  FilmCategoriesAverageCategoryIdDesc = 'FILM_CATEGORIES_AVERAGE_CATEGORY_ID_DESC',
  FilmCategoriesAverageFilmIdAsc = 'FILM_CATEGORIES_AVERAGE_FILM_ID_ASC',
  FilmCategoriesAverageFilmIdDesc = 'FILM_CATEGORIES_AVERAGE_FILM_ID_DESC',
  FilmCategoriesAverageLastUpdateAsc = 'FILM_CATEGORIES_AVERAGE_LAST_UPDATE_ASC',
  FilmCategoriesAverageLastUpdateDesc = 'FILM_CATEGORIES_AVERAGE_LAST_UPDATE_DESC',
  FilmCategoriesCountAsc = 'FILM_CATEGORIES_COUNT_ASC',
  FilmCategoriesCountDesc = 'FILM_CATEGORIES_COUNT_DESC',
  FilmCategoriesDistinctCountCategoryIdAsc = 'FILM_CATEGORIES_DISTINCT_COUNT_CATEGORY_ID_ASC',
  FilmCategoriesDistinctCountCategoryIdDesc = 'FILM_CATEGORIES_DISTINCT_COUNT_CATEGORY_ID_DESC',
  FilmCategoriesDistinctCountFilmIdAsc = 'FILM_CATEGORIES_DISTINCT_COUNT_FILM_ID_ASC',
  FilmCategoriesDistinctCountFilmIdDesc = 'FILM_CATEGORIES_DISTINCT_COUNT_FILM_ID_DESC',
  FilmCategoriesDistinctCountLastUpdateAsc = 'FILM_CATEGORIES_DISTINCT_COUNT_LAST_UPDATE_ASC',
  FilmCategoriesDistinctCountLastUpdateDesc = 'FILM_CATEGORIES_DISTINCT_COUNT_LAST_UPDATE_DESC',
  FilmCategoriesMaxCategoryIdAsc = 'FILM_CATEGORIES_MAX_CATEGORY_ID_ASC',
  FilmCategoriesMaxCategoryIdDesc = 'FILM_CATEGORIES_MAX_CATEGORY_ID_DESC',
  FilmCategoriesMaxFilmIdAsc = 'FILM_CATEGORIES_MAX_FILM_ID_ASC',
  FilmCategoriesMaxFilmIdDesc = 'FILM_CATEGORIES_MAX_FILM_ID_DESC',
  FilmCategoriesMaxLastUpdateAsc = 'FILM_CATEGORIES_MAX_LAST_UPDATE_ASC',
  FilmCategoriesMaxLastUpdateDesc = 'FILM_CATEGORIES_MAX_LAST_UPDATE_DESC',
  FilmCategoriesMinCategoryIdAsc = 'FILM_CATEGORIES_MIN_CATEGORY_ID_ASC',
  FilmCategoriesMinCategoryIdDesc = 'FILM_CATEGORIES_MIN_CATEGORY_ID_DESC',
  FilmCategoriesMinFilmIdAsc = 'FILM_CATEGORIES_MIN_FILM_ID_ASC',
  FilmCategoriesMinFilmIdDesc = 'FILM_CATEGORIES_MIN_FILM_ID_DESC',
  FilmCategoriesMinLastUpdateAsc = 'FILM_CATEGORIES_MIN_LAST_UPDATE_ASC',
  FilmCategoriesMinLastUpdateDesc = 'FILM_CATEGORIES_MIN_LAST_UPDATE_DESC',
  FilmCategoriesStddevPopulationCategoryIdAsc = 'FILM_CATEGORIES_STDDEV_POPULATION_CATEGORY_ID_ASC',
  FilmCategoriesStddevPopulationCategoryIdDesc = 'FILM_CATEGORIES_STDDEV_POPULATION_CATEGORY_ID_DESC',
  FilmCategoriesStddevPopulationFilmIdAsc = 'FILM_CATEGORIES_STDDEV_POPULATION_FILM_ID_ASC',
  FilmCategoriesStddevPopulationFilmIdDesc = 'FILM_CATEGORIES_STDDEV_POPULATION_FILM_ID_DESC',
  FilmCategoriesStddevPopulationLastUpdateAsc = 'FILM_CATEGORIES_STDDEV_POPULATION_LAST_UPDATE_ASC',
  FilmCategoriesStddevPopulationLastUpdateDesc = 'FILM_CATEGORIES_STDDEV_POPULATION_LAST_UPDATE_DESC',
  FilmCategoriesStddevSampleCategoryIdAsc = 'FILM_CATEGORIES_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  FilmCategoriesStddevSampleCategoryIdDesc = 'FILM_CATEGORIES_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  FilmCategoriesStddevSampleFilmIdAsc = 'FILM_CATEGORIES_STDDEV_SAMPLE_FILM_ID_ASC',
  FilmCategoriesStddevSampleFilmIdDesc = 'FILM_CATEGORIES_STDDEV_SAMPLE_FILM_ID_DESC',
  FilmCategoriesStddevSampleLastUpdateAsc = 'FILM_CATEGORIES_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  FilmCategoriesStddevSampleLastUpdateDesc = 'FILM_CATEGORIES_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  FilmCategoriesSumCategoryIdAsc = 'FILM_CATEGORIES_SUM_CATEGORY_ID_ASC',
  FilmCategoriesSumCategoryIdDesc = 'FILM_CATEGORIES_SUM_CATEGORY_ID_DESC',
  FilmCategoriesSumFilmIdAsc = 'FILM_CATEGORIES_SUM_FILM_ID_ASC',
  FilmCategoriesSumFilmIdDesc = 'FILM_CATEGORIES_SUM_FILM_ID_DESC',
  FilmCategoriesSumLastUpdateAsc = 'FILM_CATEGORIES_SUM_LAST_UPDATE_ASC',
  FilmCategoriesSumLastUpdateDesc = 'FILM_CATEGORIES_SUM_LAST_UPDATE_DESC',
  FilmCategoriesVariancePopulationCategoryIdAsc = 'FILM_CATEGORIES_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  FilmCategoriesVariancePopulationCategoryIdDesc = 'FILM_CATEGORIES_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  FilmCategoriesVariancePopulationFilmIdAsc = 'FILM_CATEGORIES_VARIANCE_POPULATION_FILM_ID_ASC',
  FilmCategoriesVariancePopulationFilmIdDesc = 'FILM_CATEGORIES_VARIANCE_POPULATION_FILM_ID_DESC',
  FilmCategoriesVariancePopulationLastUpdateAsc = 'FILM_CATEGORIES_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  FilmCategoriesVariancePopulationLastUpdateDesc = 'FILM_CATEGORIES_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  FilmCategoriesVarianceSampleCategoryIdAsc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  FilmCategoriesVarianceSampleCategoryIdDesc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  FilmCategoriesVarianceSampleFilmIdAsc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_FILM_ID_ASC',
  FilmCategoriesVarianceSampleFilmIdDesc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_FILM_ID_DESC',
  FilmCategoriesVarianceSampleLastUpdateAsc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  FilmCategoriesVarianceSampleLastUpdateDesc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Category = Node & {
  __typename?: 'Category';
  categoryId: Scalars['Int'];
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategories: FilmCategoriesConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastUpdate: Scalars['Datetime'];
  name: Scalars['String'];
};


export type CategoryFilmCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};

export type CategoryAggregates = {
  __typename?: 'CategoryAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<CategoryAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CategoryDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<CategoryMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<CategoryMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<CategoryStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<CategoryStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<CategorySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<CategoryVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<CategoryVarianceSampleAggregates>;
};

export type CategoryAverageAggregates = {
  __typename?: 'CategoryAverageAggregates';
  /** Mean average of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryDistinctCountAggregates = {
  __typename?: 'CategoryDistinctCountAggregates';
  /** Distinct count of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Category` for usage during aggregation. */
export enum CategoryGroupBy {
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  Name = 'NAME'
}

export type CategoryHavingAverageInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CategoryHavingDistinctCountInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Category` aggregates. */
export type CategoryHavingInput = {
  AND?: InputMaybe<Array<CategoryHavingInput>>;
  OR?: InputMaybe<Array<CategoryHavingInput>>;
  average?: InputMaybe<CategoryHavingAverageInput>;
  distinctCount?: InputMaybe<CategoryHavingDistinctCountInput>;
  max?: InputMaybe<CategoryHavingMaxInput>;
  min?: InputMaybe<CategoryHavingMinInput>;
  stddevPopulation?: InputMaybe<CategoryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CategoryHavingStddevSampleInput>;
  sum?: InputMaybe<CategoryHavingSumInput>;
  variancePopulation?: InputMaybe<CategoryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CategoryHavingVarianceSampleInput>;
};

export type CategoryHavingMaxInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CategoryHavingMinInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CategoryHavingStddevPopulationInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CategoryHavingStddevSampleInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CategoryHavingSumInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CategoryHavingVariancePopulationInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CategoryHavingVarianceSampleInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  name: Scalars['String'];
};

export type CategoryMaxAggregates = {
  __typename?: 'CategoryMaxAggregates';
  /** Maximum of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['Int']>;
};

export type CategoryMinAggregates = {
  __typename?: 'CategoryMinAggregates';
  /** Minimum of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryStddevPopulationAggregates = {
  __typename?: 'CategoryStddevPopulationAggregates';
  /** Population standard deviation of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
};

export type CategoryStddevSampleAggregates = {
  __typename?: 'CategoryStddevSampleAggregates';
  /** Sample standard deviation of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
};

export type CategorySumAggregates = {
  __typename?: 'CategorySumAggregates';
  /** Sum of categoryId across the matching connection */
  categoryId: Scalars['BigInt'];
};

export type CategoryVariancePopulationAggregates = {
  __typename?: 'CategoryVariancePopulationAggregates';
  /** Population variance of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
};

export type CategoryVarianceSampleAggregates = {
  __typename?: 'CategoryVarianceSampleAggregates';
  /** Sample variance of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `City` values. */
export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CityAggregates>;
  /** A list of edges which contains the `City` and cursor to aid in pagination. */
  edges: Array<CitiesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CityAggregates>>;
  /** A list of `City` objects. */
  nodes: Array<Maybe<City>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `City` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `City` values. */
export type CitiesConnectionGroupedAggregatesArgs = {
  groupBy: Array<CityGroupBy>;
  having?: InputMaybe<CityHavingInput>;
};

/** A `City` edge in the connection. */
export type CitiesEdge = {
  __typename?: 'CitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `City` at the end of the edge. */
  node?: Maybe<City>;
};

/** Methods to use when ordering `City`. */
export enum CitiesOrderBy {
  AddressesAverageAddress2Asc = 'ADDRESSES_AVERAGE_ADDRESS2_ASC',
  AddressesAverageAddress2Desc = 'ADDRESSES_AVERAGE_ADDRESS2_DESC',
  AddressesAverageAddressAsc = 'ADDRESSES_AVERAGE_ADDRESS_ASC',
  AddressesAverageAddressDesc = 'ADDRESSES_AVERAGE_ADDRESS_DESC',
  AddressesAverageAddressIdAsc = 'ADDRESSES_AVERAGE_ADDRESS_ID_ASC',
  AddressesAverageAddressIdDesc = 'ADDRESSES_AVERAGE_ADDRESS_ID_DESC',
  AddressesAverageCityIdAsc = 'ADDRESSES_AVERAGE_CITY_ID_ASC',
  AddressesAverageCityIdDesc = 'ADDRESSES_AVERAGE_CITY_ID_DESC',
  AddressesAverageDistrictAsc = 'ADDRESSES_AVERAGE_DISTRICT_ASC',
  AddressesAverageDistrictDesc = 'ADDRESSES_AVERAGE_DISTRICT_DESC',
  AddressesAverageLastUpdateAsc = 'ADDRESSES_AVERAGE_LAST_UPDATE_ASC',
  AddressesAverageLastUpdateDesc = 'ADDRESSES_AVERAGE_LAST_UPDATE_DESC',
  AddressesAveragePhoneAsc = 'ADDRESSES_AVERAGE_PHONE_ASC',
  AddressesAveragePhoneDesc = 'ADDRESSES_AVERAGE_PHONE_DESC',
  AddressesAveragePostalCodeAsc = 'ADDRESSES_AVERAGE_POSTAL_CODE_ASC',
  AddressesAveragePostalCodeDesc = 'ADDRESSES_AVERAGE_POSTAL_CODE_DESC',
  AddressesCountAsc = 'ADDRESSES_COUNT_ASC',
  AddressesCountDesc = 'ADDRESSES_COUNT_DESC',
  AddressesDistinctCountAddress2Asc = 'ADDRESSES_DISTINCT_COUNT_ADDRESS2_ASC',
  AddressesDistinctCountAddress2Desc = 'ADDRESSES_DISTINCT_COUNT_ADDRESS2_DESC',
  AddressesDistinctCountAddressAsc = 'ADDRESSES_DISTINCT_COUNT_ADDRESS_ASC',
  AddressesDistinctCountAddressDesc = 'ADDRESSES_DISTINCT_COUNT_ADDRESS_DESC',
  AddressesDistinctCountAddressIdAsc = 'ADDRESSES_DISTINCT_COUNT_ADDRESS_ID_ASC',
  AddressesDistinctCountAddressIdDesc = 'ADDRESSES_DISTINCT_COUNT_ADDRESS_ID_DESC',
  AddressesDistinctCountCityIdAsc = 'ADDRESSES_DISTINCT_COUNT_CITY_ID_ASC',
  AddressesDistinctCountCityIdDesc = 'ADDRESSES_DISTINCT_COUNT_CITY_ID_DESC',
  AddressesDistinctCountDistrictAsc = 'ADDRESSES_DISTINCT_COUNT_DISTRICT_ASC',
  AddressesDistinctCountDistrictDesc = 'ADDRESSES_DISTINCT_COUNT_DISTRICT_DESC',
  AddressesDistinctCountLastUpdateAsc = 'ADDRESSES_DISTINCT_COUNT_LAST_UPDATE_ASC',
  AddressesDistinctCountLastUpdateDesc = 'ADDRESSES_DISTINCT_COUNT_LAST_UPDATE_DESC',
  AddressesDistinctCountPhoneAsc = 'ADDRESSES_DISTINCT_COUNT_PHONE_ASC',
  AddressesDistinctCountPhoneDesc = 'ADDRESSES_DISTINCT_COUNT_PHONE_DESC',
  AddressesDistinctCountPostalCodeAsc = 'ADDRESSES_DISTINCT_COUNT_POSTAL_CODE_ASC',
  AddressesDistinctCountPostalCodeDesc = 'ADDRESSES_DISTINCT_COUNT_POSTAL_CODE_DESC',
  AddressesMaxAddress2Asc = 'ADDRESSES_MAX_ADDRESS2_ASC',
  AddressesMaxAddress2Desc = 'ADDRESSES_MAX_ADDRESS2_DESC',
  AddressesMaxAddressAsc = 'ADDRESSES_MAX_ADDRESS_ASC',
  AddressesMaxAddressDesc = 'ADDRESSES_MAX_ADDRESS_DESC',
  AddressesMaxAddressIdAsc = 'ADDRESSES_MAX_ADDRESS_ID_ASC',
  AddressesMaxAddressIdDesc = 'ADDRESSES_MAX_ADDRESS_ID_DESC',
  AddressesMaxCityIdAsc = 'ADDRESSES_MAX_CITY_ID_ASC',
  AddressesMaxCityIdDesc = 'ADDRESSES_MAX_CITY_ID_DESC',
  AddressesMaxDistrictAsc = 'ADDRESSES_MAX_DISTRICT_ASC',
  AddressesMaxDistrictDesc = 'ADDRESSES_MAX_DISTRICT_DESC',
  AddressesMaxLastUpdateAsc = 'ADDRESSES_MAX_LAST_UPDATE_ASC',
  AddressesMaxLastUpdateDesc = 'ADDRESSES_MAX_LAST_UPDATE_DESC',
  AddressesMaxPhoneAsc = 'ADDRESSES_MAX_PHONE_ASC',
  AddressesMaxPhoneDesc = 'ADDRESSES_MAX_PHONE_DESC',
  AddressesMaxPostalCodeAsc = 'ADDRESSES_MAX_POSTAL_CODE_ASC',
  AddressesMaxPostalCodeDesc = 'ADDRESSES_MAX_POSTAL_CODE_DESC',
  AddressesMinAddress2Asc = 'ADDRESSES_MIN_ADDRESS2_ASC',
  AddressesMinAddress2Desc = 'ADDRESSES_MIN_ADDRESS2_DESC',
  AddressesMinAddressAsc = 'ADDRESSES_MIN_ADDRESS_ASC',
  AddressesMinAddressDesc = 'ADDRESSES_MIN_ADDRESS_DESC',
  AddressesMinAddressIdAsc = 'ADDRESSES_MIN_ADDRESS_ID_ASC',
  AddressesMinAddressIdDesc = 'ADDRESSES_MIN_ADDRESS_ID_DESC',
  AddressesMinCityIdAsc = 'ADDRESSES_MIN_CITY_ID_ASC',
  AddressesMinCityIdDesc = 'ADDRESSES_MIN_CITY_ID_DESC',
  AddressesMinDistrictAsc = 'ADDRESSES_MIN_DISTRICT_ASC',
  AddressesMinDistrictDesc = 'ADDRESSES_MIN_DISTRICT_DESC',
  AddressesMinLastUpdateAsc = 'ADDRESSES_MIN_LAST_UPDATE_ASC',
  AddressesMinLastUpdateDesc = 'ADDRESSES_MIN_LAST_UPDATE_DESC',
  AddressesMinPhoneAsc = 'ADDRESSES_MIN_PHONE_ASC',
  AddressesMinPhoneDesc = 'ADDRESSES_MIN_PHONE_DESC',
  AddressesMinPostalCodeAsc = 'ADDRESSES_MIN_POSTAL_CODE_ASC',
  AddressesMinPostalCodeDesc = 'ADDRESSES_MIN_POSTAL_CODE_DESC',
  AddressesStddevPopulationAddress2Asc = 'ADDRESSES_STDDEV_POPULATION_ADDRESS2_ASC',
  AddressesStddevPopulationAddress2Desc = 'ADDRESSES_STDDEV_POPULATION_ADDRESS2_DESC',
  AddressesStddevPopulationAddressAsc = 'ADDRESSES_STDDEV_POPULATION_ADDRESS_ASC',
  AddressesStddevPopulationAddressDesc = 'ADDRESSES_STDDEV_POPULATION_ADDRESS_DESC',
  AddressesStddevPopulationAddressIdAsc = 'ADDRESSES_STDDEV_POPULATION_ADDRESS_ID_ASC',
  AddressesStddevPopulationAddressIdDesc = 'ADDRESSES_STDDEV_POPULATION_ADDRESS_ID_DESC',
  AddressesStddevPopulationCityIdAsc = 'ADDRESSES_STDDEV_POPULATION_CITY_ID_ASC',
  AddressesStddevPopulationCityIdDesc = 'ADDRESSES_STDDEV_POPULATION_CITY_ID_DESC',
  AddressesStddevPopulationDistrictAsc = 'ADDRESSES_STDDEV_POPULATION_DISTRICT_ASC',
  AddressesStddevPopulationDistrictDesc = 'ADDRESSES_STDDEV_POPULATION_DISTRICT_DESC',
  AddressesStddevPopulationLastUpdateAsc = 'ADDRESSES_STDDEV_POPULATION_LAST_UPDATE_ASC',
  AddressesStddevPopulationLastUpdateDesc = 'ADDRESSES_STDDEV_POPULATION_LAST_UPDATE_DESC',
  AddressesStddevPopulationPhoneAsc = 'ADDRESSES_STDDEV_POPULATION_PHONE_ASC',
  AddressesStddevPopulationPhoneDesc = 'ADDRESSES_STDDEV_POPULATION_PHONE_DESC',
  AddressesStddevPopulationPostalCodeAsc = 'ADDRESSES_STDDEV_POPULATION_POSTAL_CODE_ASC',
  AddressesStddevPopulationPostalCodeDesc = 'ADDRESSES_STDDEV_POPULATION_POSTAL_CODE_DESC',
  AddressesStddevSampleAddress2Asc = 'ADDRESSES_STDDEV_SAMPLE_ADDRESS2_ASC',
  AddressesStddevSampleAddress2Desc = 'ADDRESSES_STDDEV_SAMPLE_ADDRESS2_DESC',
  AddressesStddevSampleAddressAsc = 'ADDRESSES_STDDEV_SAMPLE_ADDRESS_ASC',
  AddressesStddevSampleAddressDesc = 'ADDRESSES_STDDEV_SAMPLE_ADDRESS_DESC',
  AddressesStddevSampleAddressIdAsc = 'ADDRESSES_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  AddressesStddevSampleAddressIdDesc = 'ADDRESSES_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  AddressesStddevSampleCityIdAsc = 'ADDRESSES_STDDEV_SAMPLE_CITY_ID_ASC',
  AddressesStddevSampleCityIdDesc = 'ADDRESSES_STDDEV_SAMPLE_CITY_ID_DESC',
  AddressesStddevSampleDistrictAsc = 'ADDRESSES_STDDEV_SAMPLE_DISTRICT_ASC',
  AddressesStddevSampleDistrictDesc = 'ADDRESSES_STDDEV_SAMPLE_DISTRICT_DESC',
  AddressesStddevSampleLastUpdateAsc = 'ADDRESSES_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  AddressesStddevSampleLastUpdateDesc = 'ADDRESSES_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  AddressesStddevSamplePhoneAsc = 'ADDRESSES_STDDEV_SAMPLE_PHONE_ASC',
  AddressesStddevSamplePhoneDesc = 'ADDRESSES_STDDEV_SAMPLE_PHONE_DESC',
  AddressesStddevSamplePostalCodeAsc = 'ADDRESSES_STDDEV_SAMPLE_POSTAL_CODE_ASC',
  AddressesStddevSamplePostalCodeDesc = 'ADDRESSES_STDDEV_SAMPLE_POSTAL_CODE_DESC',
  AddressesSumAddress2Asc = 'ADDRESSES_SUM_ADDRESS2_ASC',
  AddressesSumAddress2Desc = 'ADDRESSES_SUM_ADDRESS2_DESC',
  AddressesSumAddressAsc = 'ADDRESSES_SUM_ADDRESS_ASC',
  AddressesSumAddressDesc = 'ADDRESSES_SUM_ADDRESS_DESC',
  AddressesSumAddressIdAsc = 'ADDRESSES_SUM_ADDRESS_ID_ASC',
  AddressesSumAddressIdDesc = 'ADDRESSES_SUM_ADDRESS_ID_DESC',
  AddressesSumCityIdAsc = 'ADDRESSES_SUM_CITY_ID_ASC',
  AddressesSumCityIdDesc = 'ADDRESSES_SUM_CITY_ID_DESC',
  AddressesSumDistrictAsc = 'ADDRESSES_SUM_DISTRICT_ASC',
  AddressesSumDistrictDesc = 'ADDRESSES_SUM_DISTRICT_DESC',
  AddressesSumLastUpdateAsc = 'ADDRESSES_SUM_LAST_UPDATE_ASC',
  AddressesSumLastUpdateDesc = 'ADDRESSES_SUM_LAST_UPDATE_DESC',
  AddressesSumPhoneAsc = 'ADDRESSES_SUM_PHONE_ASC',
  AddressesSumPhoneDesc = 'ADDRESSES_SUM_PHONE_DESC',
  AddressesSumPostalCodeAsc = 'ADDRESSES_SUM_POSTAL_CODE_ASC',
  AddressesSumPostalCodeDesc = 'ADDRESSES_SUM_POSTAL_CODE_DESC',
  AddressesVariancePopulationAddress2Asc = 'ADDRESSES_VARIANCE_POPULATION_ADDRESS2_ASC',
  AddressesVariancePopulationAddress2Desc = 'ADDRESSES_VARIANCE_POPULATION_ADDRESS2_DESC',
  AddressesVariancePopulationAddressAsc = 'ADDRESSES_VARIANCE_POPULATION_ADDRESS_ASC',
  AddressesVariancePopulationAddressDesc = 'ADDRESSES_VARIANCE_POPULATION_ADDRESS_DESC',
  AddressesVariancePopulationAddressIdAsc = 'ADDRESSES_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  AddressesVariancePopulationAddressIdDesc = 'ADDRESSES_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  AddressesVariancePopulationCityIdAsc = 'ADDRESSES_VARIANCE_POPULATION_CITY_ID_ASC',
  AddressesVariancePopulationCityIdDesc = 'ADDRESSES_VARIANCE_POPULATION_CITY_ID_DESC',
  AddressesVariancePopulationDistrictAsc = 'ADDRESSES_VARIANCE_POPULATION_DISTRICT_ASC',
  AddressesVariancePopulationDistrictDesc = 'ADDRESSES_VARIANCE_POPULATION_DISTRICT_DESC',
  AddressesVariancePopulationLastUpdateAsc = 'ADDRESSES_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  AddressesVariancePopulationLastUpdateDesc = 'ADDRESSES_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  AddressesVariancePopulationPhoneAsc = 'ADDRESSES_VARIANCE_POPULATION_PHONE_ASC',
  AddressesVariancePopulationPhoneDesc = 'ADDRESSES_VARIANCE_POPULATION_PHONE_DESC',
  AddressesVariancePopulationPostalCodeAsc = 'ADDRESSES_VARIANCE_POPULATION_POSTAL_CODE_ASC',
  AddressesVariancePopulationPostalCodeDesc = 'ADDRESSES_VARIANCE_POPULATION_POSTAL_CODE_DESC',
  AddressesVarianceSampleAddress2Asc = 'ADDRESSES_VARIANCE_SAMPLE_ADDRESS2_ASC',
  AddressesVarianceSampleAddress2Desc = 'ADDRESSES_VARIANCE_SAMPLE_ADDRESS2_DESC',
  AddressesVarianceSampleAddressAsc = 'ADDRESSES_VARIANCE_SAMPLE_ADDRESS_ASC',
  AddressesVarianceSampleAddressDesc = 'ADDRESSES_VARIANCE_SAMPLE_ADDRESS_DESC',
  AddressesVarianceSampleAddressIdAsc = 'ADDRESSES_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  AddressesVarianceSampleAddressIdDesc = 'ADDRESSES_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  AddressesVarianceSampleCityIdAsc = 'ADDRESSES_VARIANCE_SAMPLE_CITY_ID_ASC',
  AddressesVarianceSampleCityIdDesc = 'ADDRESSES_VARIANCE_SAMPLE_CITY_ID_DESC',
  AddressesVarianceSampleDistrictAsc = 'ADDRESSES_VARIANCE_SAMPLE_DISTRICT_ASC',
  AddressesVarianceSampleDistrictDesc = 'ADDRESSES_VARIANCE_SAMPLE_DISTRICT_DESC',
  AddressesVarianceSampleLastUpdateAsc = 'ADDRESSES_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  AddressesVarianceSampleLastUpdateDesc = 'ADDRESSES_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  AddressesVarianceSamplePhoneAsc = 'ADDRESSES_VARIANCE_SAMPLE_PHONE_ASC',
  AddressesVarianceSamplePhoneDesc = 'ADDRESSES_VARIANCE_SAMPLE_PHONE_DESC',
  AddressesVarianceSamplePostalCodeAsc = 'ADDRESSES_VARIANCE_SAMPLE_POSTAL_CODE_ASC',
  AddressesVarianceSamplePostalCodeDesc = 'ADDRESSES_VARIANCE_SAMPLE_POSTAL_CODE_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CityIdAsc = 'CITY_ID_ASC',
  CityIdDesc = 'CITY_ID_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type City = Node & {
  __typename?: 'City';
  /** Reads and enables pagination through a set of `Address`. */
  addresses: AddressesConnection;
  city: Scalars['String'];
  cityId: Scalars['Int'];
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  countryId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastUpdate: Scalars['Datetime'];
};


export type CityAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type CityAggregates = {
  __typename?: 'CityAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<CityAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CityDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<CityMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<CityMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<CityStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<CityStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<CitySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<CityVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<CityVarianceSampleAggregates>;
};

export type CityAverageAggregates = {
  __typename?: 'CityAverageAggregates';
  /** Mean average of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `City` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CityCondition = {
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type CityDistinctCountAggregates = {
  __typename?: 'CityDistinctCountAggregates';
  /** Distinct count of city across the matching connection */
  city?: Maybe<Scalars['BigInt']>;
  /** Distinct count of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `City` for usage during aggregation. */
export enum CityGroupBy {
  City = 'CITY',
  CountryId = 'COUNTRY_ID',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR'
}

export type CityHavingAverageInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CityHavingDistinctCountInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `City` aggregates. */
export type CityHavingInput = {
  AND?: InputMaybe<Array<CityHavingInput>>;
  OR?: InputMaybe<Array<CityHavingInput>>;
  average?: InputMaybe<CityHavingAverageInput>;
  distinctCount?: InputMaybe<CityHavingDistinctCountInput>;
  max?: InputMaybe<CityHavingMaxInput>;
  min?: InputMaybe<CityHavingMinInput>;
  stddevPopulation?: InputMaybe<CityHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CityHavingStddevSampleInput>;
  sum?: InputMaybe<CityHavingSumInput>;
  variancePopulation?: InputMaybe<CityHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CityHavingVarianceSampleInput>;
};

export type CityHavingMaxInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CityHavingMinInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CityHavingStddevPopulationInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CityHavingStddevSampleInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CityHavingSumInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CityHavingVariancePopulationInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CityHavingVarianceSampleInput = {
  cityId?: InputMaybe<HavingIntFilter>;
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `City` */
export type CityInput = {
  city: Scalars['String'];
  cityId?: InputMaybe<Scalars['Int']>;
  countryId: Scalars['Int'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type CityMaxAggregates = {
  __typename?: 'CityMaxAggregates';
  /** Maximum of cityId across the matching connection */
  cityId?: Maybe<Scalars['Int']>;
  /** Maximum of countryId across the matching connection */
  countryId?: Maybe<Scalars['Int']>;
};

export type CityMinAggregates = {
  __typename?: 'CityMinAggregates';
  /** Minimum of cityId across the matching connection */
  cityId?: Maybe<Scalars['Int']>;
  /** Minimum of countryId across the matching connection */
  countryId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `City`. Fields that are set will be updated. */
export type CityPatch = {
  city?: InputMaybe<Scalars['String']>;
  cityId?: InputMaybe<Scalars['Int']>;
  countryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type CityStddevPopulationAggregates = {
  __typename?: 'CityStddevPopulationAggregates';
  /** Population standard deviation of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

export type CityStddevSampleAggregates = {
  __typename?: 'CityStddevSampleAggregates';
  /** Sample standard deviation of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

export type CitySumAggregates = {
  __typename?: 'CitySumAggregates';
  /** Sum of cityId across the matching connection */
  cityId: Scalars['BigInt'];
  /** Sum of countryId across the matching connection */
  countryId: Scalars['BigInt'];
};

export type CityVariancePopulationAggregates = {
  __typename?: 'CityVariancePopulationAggregates';
  /** Population variance of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

export type CityVarianceSampleAggregates = {
  __typename?: 'CityVarianceSampleAggregates';
  /** Sample variance of cityId across the matching connection */
  cityId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Country` values. */
export type CountriesConnection = {
  __typename?: 'CountriesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CountryAggregates>;
  /** A list of edges which contains the `Country` and cursor to aid in pagination. */
  edges: Array<CountriesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CountryAggregates>>;
  /** A list of `Country` objects. */
  nodes: Array<Maybe<Country>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Country` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Country` values. */
export type CountriesConnectionGroupedAggregatesArgs = {
  groupBy: Array<CountryGroupBy>;
  having?: InputMaybe<CountryHavingInput>;
};

/** A `Country` edge in the connection. */
export type CountriesEdge = {
  __typename?: 'CountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Country` at the end of the edge. */
  node?: Maybe<Country>;
};

/** Methods to use when ordering `Country`. */
export enum CountriesOrderBy {
  CitiesAverageCityAsc = 'CITIES_AVERAGE_CITY_ASC',
  CitiesAverageCityDesc = 'CITIES_AVERAGE_CITY_DESC',
  CitiesAverageCityIdAsc = 'CITIES_AVERAGE_CITY_ID_ASC',
  CitiesAverageCityIdDesc = 'CITIES_AVERAGE_CITY_ID_DESC',
  CitiesAverageCountryIdAsc = 'CITIES_AVERAGE_COUNTRY_ID_ASC',
  CitiesAverageCountryIdDesc = 'CITIES_AVERAGE_COUNTRY_ID_DESC',
  CitiesAverageLastUpdateAsc = 'CITIES_AVERAGE_LAST_UPDATE_ASC',
  CitiesAverageLastUpdateDesc = 'CITIES_AVERAGE_LAST_UPDATE_DESC',
  CitiesCountAsc = 'CITIES_COUNT_ASC',
  CitiesCountDesc = 'CITIES_COUNT_DESC',
  CitiesDistinctCountCityAsc = 'CITIES_DISTINCT_COUNT_CITY_ASC',
  CitiesDistinctCountCityDesc = 'CITIES_DISTINCT_COUNT_CITY_DESC',
  CitiesDistinctCountCityIdAsc = 'CITIES_DISTINCT_COUNT_CITY_ID_ASC',
  CitiesDistinctCountCityIdDesc = 'CITIES_DISTINCT_COUNT_CITY_ID_DESC',
  CitiesDistinctCountCountryIdAsc = 'CITIES_DISTINCT_COUNT_COUNTRY_ID_ASC',
  CitiesDistinctCountCountryIdDesc = 'CITIES_DISTINCT_COUNT_COUNTRY_ID_DESC',
  CitiesDistinctCountLastUpdateAsc = 'CITIES_DISTINCT_COUNT_LAST_UPDATE_ASC',
  CitiesDistinctCountLastUpdateDesc = 'CITIES_DISTINCT_COUNT_LAST_UPDATE_DESC',
  CitiesMaxCityAsc = 'CITIES_MAX_CITY_ASC',
  CitiesMaxCityDesc = 'CITIES_MAX_CITY_DESC',
  CitiesMaxCityIdAsc = 'CITIES_MAX_CITY_ID_ASC',
  CitiesMaxCityIdDesc = 'CITIES_MAX_CITY_ID_DESC',
  CitiesMaxCountryIdAsc = 'CITIES_MAX_COUNTRY_ID_ASC',
  CitiesMaxCountryIdDesc = 'CITIES_MAX_COUNTRY_ID_DESC',
  CitiesMaxLastUpdateAsc = 'CITIES_MAX_LAST_UPDATE_ASC',
  CitiesMaxLastUpdateDesc = 'CITIES_MAX_LAST_UPDATE_DESC',
  CitiesMinCityAsc = 'CITIES_MIN_CITY_ASC',
  CitiesMinCityDesc = 'CITIES_MIN_CITY_DESC',
  CitiesMinCityIdAsc = 'CITIES_MIN_CITY_ID_ASC',
  CitiesMinCityIdDesc = 'CITIES_MIN_CITY_ID_DESC',
  CitiesMinCountryIdAsc = 'CITIES_MIN_COUNTRY_ID_ASC',
  CitiesMinCountryIdDesc = 'CITIES_MIN_COUNTRY_ID_DESC',
  CitiesMinLastUpdateAsc = 'CITIES_MIN_LAST_UPDATE_ASC',
  CitiesMinLastUpdateDesc = 'CITIES_MIN_LAST_UPDATE_DESC',
  CitiesStddevPopulationCityAsc = 'CITIES_STDDEV_POPULATION_CITY_ASC',
  CitiesStddevPopulationCityDesc = 'CITIES_STDDEV_POPULATION_CITY_DESC',
  CitiesStddevPopulationCityIdAsc = 'CITIES_STDDEV_POPULATION_CITY_ID_ASC',
  CitiesStddevPopulationCityIdDesc = 'CITIES_STDDEV_POPULATION_CITY_ID_DESC',
  CitiesStddevPopulationCountryIdAsc = 'CITIES_STDDEV_POPULATION_COUNTRY_ID_ASC',
  CitiesStddevPopulationCountryIdDesc = 'CITIES_STDDEV_POPULATION_COUNTRY_ID_DESC',
  CitiesStddevPopulationLastUpdateAsc = 'CITIES_STDDEV_POPULATION_LAST_UPDATE_ASC',
  CitiesStddevPopulationLastUpdateDesc = 'CITIES_STDDEV_POPULATION_LAST_UPDATE_DESC',
  CitiesStddevSampleCityAsc = 'CITIES_STDDEV_SAMPLE_CITY_ASC',
  CitiesStddevSampleCityDesc = 'CITIES_STDDEV_SAMPLE_CITY_DESC',
  CitiesStddevSampleCityIdAsc = 'CITIES_STDDEV_SAMPLE_CITY_ID_ASC',
  CitiesStddevSampleCityIdDesc = 'CITIES_STDDEV_SAMPLE_CITY_ID_DESC',
  CitiesStddevSampleCountryIdAsc = 'CITIES_STDDEV_SAMPLE_COUNTRY_ID_ASC',
  CitiesStddevSampleCountryIdDesc = 'CITIES_STDDEV_SAMPLE_COUNTRY_ID_DESC',
  CitiesStddevSampleLastUpdateAsc = 'CITIES_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  CitiesStddevSampleLastUpdateDesc = 'CITIES_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  CitiesSumCityAsc = 'CITIES_SUM_CITY_ASC',
  CitiesSumCityDesc = 'CITIES_SUM_CITY_DESC',
  CitiesSumCityIdAsc = 'CITIES_SUM_CITY_ID_ASC',
  CitiesSumCityIdDesc = 'CITIES_SUM_CITY_ID_DESC',
  CitiesSumCountryIdAsc = 'CITIES_SUM_COUNTRY_ID_ASC',
  CitiesSumCountryIdDesc = 'CITIES_SUM_COUNTRY_ID_DESC',
  CitiesSumLastUpdateAsc = 'CITIES_SUM_LAST_UPDATE_ASC',
  CitiesSumLastUpdateDesc = 'CITIES_SUM_LAST_UPDATE_DESC',
  CitiesVariancePopulationCityAsc = 'CITIES_VARIANCE_POPULATION_CITY_ASC',
  CitiesVariancePopulationCityDesc = 'CITIES_VARIANCE_POPULATION_CITY_DESC',
  CitiesVariancePopulationCityIdAsc = 'CITIES_VARIANCE_POPULATION_CITY_ID_ASC',
  CitiesVariancePopulationCityIdDesc = 'CITIES_VARIANCE_POPULATION_CITY_ID_DESC',
  CitiesVariancePopulationCountryIdAsc = 'CITIES_VARIANCE_POPULATION_COUNTRY_ID_ASC',
  CitiesVariancePopulationCountryIdDesc = 'CITIES_VARIANCE_POPULATION_COUNTRY_ID_DESC',
  CitiesVariancePopulationLastUpdateAsc = 'CITIES_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  CitiesVariancePopulationLastUpdateDesc = 'CITIES_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  CitiesVarianceSampleCityAsc = 'CITIES_VARIANCE_SAMPLE_CITY_ASC',
  CitiesVarianceSampleCityDesc = 'CITIES_VARIANCE_SAMPLE_CITY_DESC',
  CitiesVarianceSampleCityIdAsc = 'CITIES_VARIANCE_SAMPLE_CITY_ID_ASC',
  CitiesVarianceSampleCityIdDesc = 'CITIES_VARIANCE_SAMPLE_CITY_ID_DESC',
  CitiesVarianceSampleCountryIdAsc = 'CITIES_VARIANCE_SAMPLE_COUNTRY_ID_ASC',
  CitiesVarianceSampleCountryIdDesc = 'CITIES_VARIANCE_SAMPLE_COUNTRY_ID_DESC',
  CitiesVarianceSampleLastUpdateAsc = 'CITIES_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  CitiesVarianceSampleLastUpdateDesc = 'CITIES_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Country = Node & {
  __typename?: 'Country';
  /** Reads and enables pagination through a set of `City`. */
  cities: CitiesConnection;
  country: Scalars['String'];
  countryId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastUpdate: Scalars['Datetime'];
};


export type CountryCitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CityCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

export type CountryAggregates = {
  __typename?: 'CountryAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<CountryAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CountryDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<CountryMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<CountryMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<CountryStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<CountryStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<CountrySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<CountryVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<CountryVarianceSampleAggregates>;
};

export type CountryAverageAggregates = {
  __typename?: 'CountryAverageAggregates';
  /** Mean average of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Country` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CountryCondition = {
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type CountryDistinctCountAggregates = {
  __typename?: 'CountryDistinctCountAggregates';
  /** Distinct count of country across the matching connection */
  country?: Maybe<Scalars['BigInt']>;
  /** Distinct count of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Country` for usage during aggregation. */
export enum CountryGroupBy {
  Country = 'COUNTRY',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR'
}

export type CountryHavingAverageInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CountryHavingDistinctCountInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Country` aggregates. */
export type CountryHavingInput = {
  AND?: InputMaybe<Array<CountryHavingInput>>;
  OR?: InputMaybe<Array<CountryHavingInput>>;
  average?: InputMaybe<CountryHavingAverageInput>;
  distinctCount?: InputMaybe<CountryHavingDistinctCountInput>;
  max?: InputMaybe<CountryHavingMaxInput>;
  min?: InputMaybe<CountryHavingMinInput>;
  stddevPopulation?: InputMaybe<CountryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CountryHavingStddevSampleInput>;
  sum?: InputMaybe<CountryHavingSumInput>;
  variancePopulation?: InputMaybe<CountryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CountryHavingVarianceSampleInput>;
};

export type CountryHavingMaxInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CountryHavingMinInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CountryHavingStddevPopulationInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CountryHavingStddevSampleInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CountryHavingSumInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CountryHavingVariancePopulationInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type CountryHavingVarianceSampleInput = {
  countryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Country` */
export type CountryInput = {
  country: Scalars['String'];
  countryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type CountryMaxAggregates = {
  __typename?: 'CountryMaxAggregates';
  /** Maximum of countryId across the matching connection */
  countryId?: Maybe<Scalars['Int']>;
};

export type CountryMinAggregates = {
  __typename?: 'CountryMinAggregates';
  /** Minimum of countryId across the matching connection */
  countryId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Country`. Fields that are set will be updated. */
export type CountryPatch = {
  country?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type CountryStddevPopulationAggregates = {
  __typename?: 'CountryStddevPopulationAggregates';
  /** Population standard deviation of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

export type CountryStddevSampleAggregates = {
  __typename?: 'CountryStddevSampleAggregates';
  /** Sample standard deviation of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

export type CountrySumAggregates = {
  __typename?: 'CountrySumAggregates';
  /** Sum of countryId across the matching connection */
  countryId: Scalars['BigInt'];
};

export type CountryVariancePopulationAggregates = {
  __typename?: 'CountryVariancePopulationAggregates';
  /** Population variance of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

export type CountryVarianceSampleAggregates = {
  __typename?: 'CountryVarianceSampleAggregates';
  /** Sample variance of countryId across the matching connection */
  countryId?: Maybe<Scalars['BigFloat']>;
};

/** All input for the create `Actor` mutation. */
export type CreateActorInput = {
  /** The `Actor` to be created by this mutation. */
  actor: ActorInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Actor` mutation. */
export type CreateActorPayload = {
  __typename?: 'CreateActorPayload';
  /** The `Actor` that was created by this mutation. */
  actor?: Maybe<Actor>;
  /** An edge for our `Actor`. May be used by Relay 1. */
  actorEdge?: Maybe<ActorsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Actor` mutation. */
export type CreateActorPayloadActorEdgeArgs = {
  orderBy?: InputMaybe<Array<ActorsOrderBy>>;
};

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  address: AddressInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload';
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `City` mutation. */
export type CreateCityInput = {
  /** The `City` to be created by this mutation. */
  city: CityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `City` mutation. */
export type CreateCityPayload = {
  __typename?: 'CreateCityPayload';
  /** The `City` that was created by this mutation. */
  city?: Maybe<City>;
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `City` mutation. */
export type CreateCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** All input for the create `Country` mutation. */
export type CreateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Country` to be created by this mutation. */
  country: CountryInput;
};

/** The output of our create `Country` mutation. */
export type CreateCountryPayload = {
  __typename?: 'CreateCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Country` that was created by this mutation. */
  country?: Maybe<Country>;
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Country` mutation. */
export type CreateCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** All input for the create `Customer` mutation. */
export type CreateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Customer` to be created by this mutation. */
  customer: CustomerInput;
};

/** The output of our create `Customer` mutation. */
export type CreateCustomerPayload = {
  __typename?: 'CreateCustomerPayload';
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was created by this mutation. */
  customer?: Maybe<Customer>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Customer` mutation. */
export type CreateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};

/** All input for the create `FilmActor` mutation. */
export type CreateFilmActorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FilmActor` to be created by this mutation. */
  filmActor: FilmActorInput;
};

/** The output of our create `FilmActor` mutation. */
export type CreateFilmActorPayload = {
  __typename?: 'CreateFilmActorPayload';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>;
  /** The `FilmActor` that was created by this mutation. */
  filmActor?: Maybe<FilmActor>;
  /** An edge for our `FilmActor`. May be used by Relay 1. */
  filmActorEdge?: Maybe<FilmActorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `FilmActor` mutation. */
export type CreateFilmActorPayloadFilmActorEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};

/** All input for the create `FilmCategory` mutation. */
export type CreateFilmCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FilmCategory` to be created by this mutation. */
  filmCategory: FilmCategoryInput;
};

/** The output of our create `FilmCategory` mutation. */
export type CreateFilmCategoryPayload = {
  __typename?: 'CreateFilmCategoryPayload';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>;
  /** The `FilmCategory` that was created by this mutation. */
  filmCategory?: Maybe<FilmCategory>;
  /** An edge for our `FilmCategory`. May be used by Relay 1. */
  filmCategoryEdge?: Maybe<FilmCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `FilmCategory` mutation. */
export type CreateFilmCategoryPayloadFilmCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};

/** All input for the create `Film` mutation. */
export type CreateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Film` to be created by this mutation. */
  film: FilmInput;
};

/** The output of our create `Film` mutation. */
export type CreateFilmPayload = {
  __typename?: 'CreateFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Film` that was created by this mutation. */
  film?: Maybe<Film>;
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>;
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Film` mutation. */
export type CreateFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/** All input for the create `Inventory` mutation. */
export type CreateInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Inventory` to be created by this mutation. */
  inventory: InventoryInput;
};

/** The output of our create `Inventory` mutation. */
export type CreateInventoryPayload = {
  __typename?: 'CreateInventoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>;
  /** The `Inventory` that was created by this mutation. */
  inventory?: Maybe<Inventory>;
  /** An edge for our `Inventory`. May be used by Relay 1. */
  inventoryEdge?: Maybe<InventoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Inventory` mutation. */
export type CreateInventoryPayloadInventoryEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};

/** All input for the create `Language` mutation. */
export type CreateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Language` to be created by this mutation. */
  language: LanguageInput;
};

/** The output of our create `Language` mutation. */
export type CreateLanguagePayload = {
  __typename?: 'CreateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` that was created by this mutation. */
  language?: Maybe<Language>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Language` mutation. */
export type CreateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};

/** All input for the create `Payment` mutation. */
export type CreatePaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Payment` to be created by this mutation. */
  payment: PaymentInput;
};

/** The output of our create `Payment` mutation. */
export type CreatePaymentPayload = {
  __typename?: 'CreatePaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>;
  /** The `Payment` that was created by this mutation. */
  payment?: Maybe<Payment>;
  /** An edge for our `Payment`. May be used by Relay 1. */
  paymentEdge?: Maybe<PaymentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>;
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>;
};


/** The output of our create `Payment` mutation. */
export type CreatePaymentPayloadPaymentEdgeArgs = {
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};

/** All input for the create `Rental` mutation. */
export type CreateRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Rental` to be created by this mutation. */
  rental: RentalInput;
};

/** The output of our create `Rental` mutation. */
export type CreateRentalPayload = {
  __typename?: 'CreateRentalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>;
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rental` that was created by this mutation. */
  rental?: Maybe<Rental>;
  /** An edge for our `Rental`. May be used by Relay 1. */
  rentalEdge?: Maybe<RentalsEdge>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>;
};


/** The output of our create `Rental` mutation. */
export type CreateRentalPayloadRentalEdgeArgs = {
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/** All input for the create `Staff` mutation. */
export type CreateStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Staff` to be created by this mutation. */
  staff: StaffInput;
};

/** The output of our create `Staff` mutation. */
export type CreateStaffPayload = {
  __typename?: 'CreateStaffPayload';
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Staff` that was created by this mutation. */
  staff?: Maybe<Staff>;
  /** An edge for our `Staff`. May be used by Relay 1. */
  staffEdge?: Maybe<StaffEdge>;
};


/** The output of our create `Staff` mutation. */
export type CreateStaffPayloadStaffEdgeArgs = {
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};

/** All input for the create `Store` mutation. */
export type CreateStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Store` to be created by this mutation. */
  store: StoreInput;
};

/** The output of our create `Store` mutation. */
export type CreateStorePayload = {
  __typename?: 'CreateStorePayload';
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Store` that was created by this mutation. */
  store?: Maybe<Store>;
  /** An edge for our `Store`. May be used by Relay 1. */
  storeEdge?: Maybe<StoresEdge>;
};


/** The output of our create `Store` mutation. */
export type CreateStorePayloadStoreEdgeArgs = {
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  active?: Maybe<Scalars['Int']>;
  activebool: Scalars['Boolean'];
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>;
  addressId: Scalars['Int'];
  createDate: Scalars['Date'];
  customerId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastName: Scalars['String'];
  lastUpdate?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Payment`. */
  payments: PaymentsConnection;
  /** Reads and enables pagination through a set of `Rental`. */
  rentals: RentalsConnection;
  storeId: Scalars['Int'];
};


export type CustomerPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type CustomerRentalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

export type CustomerAggregates = {
  __typename?: 'CustomerAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<CustomerAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CustomerDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<CustomerMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<CustomerMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<CustomerStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<CustomerStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<CustomerSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<CustomerVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<CustomerVarianceSampleAggregates>;
};

export type CustomerAverageAggregates = {
  __typename?: 'CustomerAverageAggregates';
  /** Mean average of active across the matching connection */
  active?: Maybe<Scalars['BigFloat']>;
  /** Mean average of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `Customer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CustomerCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `activebool` field. */
  activebool?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createDate` field. */
  createDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
};

export type CustomerDistinctCountAggregates = {
  __typename?: 'CustomerDistinctCountAggregates';
  /** Distinct count of active across the matching connection */
  active?: Maybe<Scalars['BigInt']>;
  /** Distinct count of activebool across the matching connection */
  activebool?: Maybe<Scalars['BigInt']>;
  /** Distinct count of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createDate across the matching connection */
  createDate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of email across the matching connection */
  email?: Maybe<Scalars['BigInt']>;
  /** Distinct count of firstName across the matching connection */
  firstName?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastName across the matching connection */
  lastName?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Customer` for usage during aggregation. */
export enum CustomerGroupBy {
  Active = 'ACTIVE',
  Activebool = 'ACTIVEBOOL',
  AddressId = 'ADDRESS_ID',
  CreateDate = 'CREATE_DATE',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  StoreId = 'STORE_ID'
}

export type CustomerHavingAverageInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type CustomerHavingDistinctCountInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Customer` aggregates. */
export type CustomerHavingInput = {
  AND?: InputMaybe<Array<CustomerHavingInput>>;
  OR?: InputMaybe<Array<CustomerHavingInput>>;
  average?: InputMaybe<CustomerHavingAverageInput>;
  distinctCount?: InputMaybe<CustomerHavingDistinctCountInput>;
  max?: InputMaybe<CustomerHavingMaxInput>;
  min?: InputMaybe<CustomerHavingMinInput>;
  stddevPopulation?: InputMaybe<CustomerHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CustomerHavingStddevSampleInput>;
  sum?: InputMaybe<CustomerHavingSumInput>;
  variancePopulation?: InputMaybe<CustomerHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CustomerHavingVarianceSampleInput>;
};

export type CustomerHavingMaxInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type CustomerHavingMinInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type CustomerHavingStddevPopulationInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type CustomerHavingStddevSampleInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type CustomerHavingSumInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type CustomerHavingVariancePopulationInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type CustomerHavingVarianceSampleInput = {
  active?: InputMaybe<HavingIntFilter>;
  addressId?: InputMaybe<HavingIntFilter>;
  createDate?: InputMaybe<HavingDatetimeFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `Customer` */
export type CustomerInput = {
  active?: InputMaybe<Scalars['Int']>;
  activebool?: InputMaybe<Scalars['Boolean']>;
  addressId: Scalars['Int'];
  createDate?: InputMaybe<Scalars['Date']>;
  customerId?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  storeId: Scalars['Int'];
};

export type CustomerList = {
  __typename?: 'CustomerList';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  rowId?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type CustomerListAggregates = {
  __typename?: 'CustomerListAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<CustomerListAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CustomerListDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<CustomerListMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<CustomerListMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<CustomerListStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<CustomerListStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<CustomerListSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<CustomerListVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<CustomerListVarianceSampleAggregates>;
};

export type CustomerListAverageAggregates = {
  __typename?: 'CustomerListAverageAggregates';
  /** Mean average of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `CustomerList` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CustomerListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `notes` field. */
  notes?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CustomerListDistinctCountAggregates = {
  __typename?: 'CustomerListDistinctCountAggregates';
  /** Distinct count of address across the matching connection */
  address?: Maybe<Scalars['BigInt']>;
  /** Distinct count of city across the matching connection */
  city?: Maybe<Scalars['BigInt']>;
  /** Distinct count of country across the matching connection */
  country?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
  /** Distinct count of notes across the matching connection */
  notes?: Maybe<Scalars['BigInt']>;
  /** Distinct count of phone across the matching connection */
  phone?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of sid across the matching connection */
  sid?: Maybe<Scalars['BigInt']>;
  /** Distinct count of zipCode across the matching connection */
  zipCode?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `CustomerList` for usage during aggregation. */
export enum CustomerListGroupBy {
  Address = 'ADDRESS',
  City = 'CITY',
  Country = 'COUNTRY',
  Name = 'NAME',
  Notes = 'NOTES',
  Phone = 'PHONE',
  RowId = 'ROW_ID',
  Sid = 'SID',
  ZipCode = 'ZIP_CODE'
}

export type CustomerListHavingAverageInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListHavingDistinctCountInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `CustomerList` aggregates. */
export type CustomerListHavingInput = {
  AND?: InputMaybe<Array<CustomerListHavingInput>>;
  OR?: InputMaybe<Array<CustomerListHavingInput>>;
  average?: InputMaybe<CustomerListHavingAverageInput>;
  distinctCount?: InputMaybe<CustomerListHavingDistinctCountInput>;
  max?: InputMaybe<CustomerListHavingMaxInput>;
  min?: InputMaybe<CustomerListHavingMinInput>;
  stddevPopulation?: InputMaybe<CustomerListHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CustomerListHavingStddevSampleInput>;
  sum?: InputMaybe<CustomerListHavingSumInput>;
  variancePopulation?: InputMaybe<CustomerListHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CustomerListHavingVarianceSampleInput>;
};

export type CustomerListHavingMaxInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListHavingMinInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListHavingStddevPopulationInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListHavingStddevSampleInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListHavingSumInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListHavingVariancePopulationInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListHavingVarianceSampleInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type CustomerListMaxAggregates = {
  __typename?: 'CustomerListMaxAggregates';
  /** Maximum of rowId across the matching connection */
  rowId?: Maybe<Scalars['Int']>;
  /** Maximum of sid across the matching connection */
  sid?: Maybe<Scalars['Int']>;
};

export type CustomerListMinAggregates = {
  __typename?: 'CustomerListMinAggregates';
  /** Minimum of rowId across the matching connection */
  rowId?: Maybe<Scalars['Int']>;
  /** Minimum of sid across the matching connection */
  sid?: Maybe<Scalars['Int']>;
};

export type CustomerListStddevPopulationAggregates = {
  __typename?: 'CustomerListStddevPopulationAggregates';
  /** Population standard deviation of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

export type CustomerListStddevSampleAggregates = {
  __typename?: 'CustomerListStddevSampleAggregates';
  /** Sample standard deviation of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

export type CustomerListSumAggregates = {
  __typename?: 'CustomerListSumAggregates';
  /** Sum of rowId across the matching connection */
  rowId: Scalars['BigInt'];
  /** Sum of sid across the matching connection */
  sid: Scalars['BigInt'];
};

export type CustomerListVariancePopulationAggregates = {
  __typename?: 'CustomerListVariancePopulationAggregates';
  /** Population variance of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

export type CustomerListVarianceSampleAggregates = {
  __typename?: 'CustomerListVarianceSampleAggregates';
  /** Sample variance of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `CustomerList` values. */
export type CustomerListsConnection = {
  __typename?: 'CustomerListsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CustomerListAggregates>;
  /** A list of edges which contains the `CustomerList` and cursor to aid in pagination. */
  edges: Array<CustomerListsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CustomerListAggregates>>;
  /** A list of `CustomerList` objects. */
  nodes: Array<Maybe<CustomerList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CustomerList` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `CustomerList` values. */
export type CustomerListsConnectionGroupedAggregatesArgs = {
  groupBy: Array<CustomerListGroupBy>;
  having?: InputMaybe<CustomerListHavingInput>;
};

/** A `CustomerList` edge in the connection. */
export type CustomerListsEdge = {
  __typename?: 'CustomerListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CustomerList` at the end of the edge. */
  node?: Maybe<CustomerList>;
};

/** Methods to use when ordering `CustomerList`. */
export enum CustomerListsOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SidAsc = 'SID_ASC',
  SidDesc = 'SID_DESC',
  ZipCodeAsc = 'ZIP_CODE_ASC',
  ZipCodeDesc = 'ZIP_CODE_DESC'
}

export type CustomerMaxAggregates = {
  __typename?: 'CustomerMaxAggregates';
  /** Maximum of active across the matching connection */
  active?: Maybe<Scalars['Int']>;
  /** Maximum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Maximum of customerId across the matching connection */
  customerId?: Maybe<Scalars['Int']>;
  /** Maximum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

export type CustomerMinAggregates = {
  __typename?: 'CustomerMinAggregates';
  /** Minimum of active across the matching connection */
  active?: Maybe<Scalars['Int']>;
  /** Minimum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Minimum of customerId across the matching connection */
  customerId?: Maybe<Scalars['Int']>;
  /** Minimum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Customer`. Fields that are set will be updated. */
export type CustomerPatch = {
  active?: InputMaybe<Scalars['Int']>;
  activebool?: InputMaybe<Scalars['Boolean']>;
  addressId?: InputMaybe<Scalars['Int']>;
  createDate?: InputMaybe<Scalars['Date']>;
  customerId?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

export type CustomerStddevPopulationAggregates = {
  __typename?: 'CustomerStddevPopulationAggregates';
  /** Population standard deviation of active across the matching connection */
  active?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type CustomerStddevSampleAggregates = {
  __typename?: 'CustomerStddevSampleAggregates';
  /** Sample standard deviation of active across the matching connection */
  active?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type CustomerSumAggregates = {
  __typename?: 'CustomerSumAggregates';
  /** Sum of active across the matching connection */
  active: Scalars['BigInt'];
  /** Sum of addressId across the matching connection */
  addressId: Scalars['BigInt'];
  /** Sum of customerId across the matching connection */
  customerId: Scalars['BigInt'];
  /** Sum of storeId across the matching connection */
  storeId: Scalars['BigInt'];
};

export type CustomerVariancePopulationAggregates = {
  __typename?: 'CustomerVariancePopulationAggregates';
  /** Population variance of active across the matching connection */
  active?: Maybe<Scalars['BigFloat']>;
  /** Population variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type CustomerVarianceSampleAggregates = {
  __typename?: 'CustomerVarianceSampleAggregates';
  /** Sample variance of active across the matching connection */
  active?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Customer` values. */
export type CustomersConnection = {
  __typename?: 'CustomersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CustomerAggregates>;
  /** A list of edges which contains the `Customer` and cursor to aid in pagination. */
  edges: Array<CustomersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CustomerAggregates>>;
  /** A list of `Customer` objects. */
  nodes: Array<Maybe<Customer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Customer` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Customer` values. */
export type CustomersConnectionGroupedAggregatesArgs = {
  groupBy: Array<CustomerGroupBy>;
  having?: InputMaybe<CustomerHavingInput>;
};

/** A `Customer` edge in the connection. */
export type CustomersEdge = {
  __typename?: 'CustomersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Customer` at the end of the edge. */
  node?: Maybe<Customer>;
};

/** Methods to use when ordering `Customer`. */
export enum CustomersOrderBy {
  ActiveboolAsc = 'ACTIVEBOOL_ASC',
  ActiveboolDesc = 'ACTIVEBOOL_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreateDateAsc = 'CREATE_DATE_ASC',
  CreateDateDesc = 'CREATE_DATE_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PaymentsAverageAmountAsc = 'PAYMENTS_AVERAGE_AMOUNT_ASC',
  PaymentsAverageAmountDesc = 'PAYMENTS_AVERAGE_AMOUNT_DESC',
  PaymentsAverageCustomerIdAsc = 'PAYMENTS_AVERAGE_CUSTOMER_ID_ASC',
  PaymentsAverageCustomerIdDesc = 'PAYMENTS_AVERAGE_CUSTOMER_ID_DESC',
  PaymentsAveragePaymentDateAsc = 'PAYMENTS_AVERAGE_PAYMENT_DATE_ASC',
  PaymentsAveragePaymentDateDesc = 'PAYMENTS_AVERAGE_PAYMENT_DATE_DESC',
  PaymentsAveragePaymentIdAsc = 'PAYMENTS_AVERAGE_PAYMENT_ID_ASC',
  PaymentsAveragePaymentIdDesc = 'PAYMENTS_AVERAGE_PAYMENT_ID_DESC',
  PaymentsAverageRentalIdAsc = 'PAYMENTS_AVERAGE_RENTAL_ID_ASC',
  PaymentsAverageRentalIdDesc = 'PAYMENTS_AVERAGE_RENTAL_ID_DESC',
  PaymentsAverageStaffIdAsc = 'PAYMENTS_AVERAGE_STAFF_ID_ASC',
  PaymentsAverageStaffIdDesc = 'PAYMENTS_AVERAGE_STAFF_ID_DESC',
  PaymentsCountAsc = 'PAYMENTS_COUNT_ASC',
  PaymentsCountDesc = 'PAYMENTS_COUNT_DESC',
  PaymentsDistinctCountAmountAsc = 'PAYMENTS_DISTINCT_COUNT_AMOUNT_ASC',
  PaymentsDistinctCountAmountDesc = 'PAYMENTS_DISTINCT_COUNT_AMOUNT_DESC',
  PaymentsDistinctCountCustomerIdAsc = 'PAYMENTS_DISTINCT_COUNT_CUSTOMER_ID_ASC',
  PaymentsDistinctCountCustomerIdDesc = 'PAYMENTS_DISTINCT_COUNT_CUSTOMER_ID_DESC',
  PaymentsDistinctCountPaymentDateAsc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_DATE_ASC',
  PaymentsDistinctCountPaymentDateDesc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_DATE_DESC',
  PaymentsDistinctCountPaymentIdAsc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_ID_ASC',
  PaymentsDistinctCountPaymentIdDesc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_ID_DESC',
  PaymentsDistinctCountRentalIdAsc = 'PAYMENTS_DISTINCT_COUNT_RENTAL_ID_ASC',
  PaymentsDistinctCountRentalIdDesc = 'PAYMENTS_DISTINCT_COUNT_RENTAL_ID_DESC',
  PaymentsDistinctCountStaffIdAsc = 'PAYMENTS_DISTINCT_COUNT_STAFF_ID_ASC',
  PaymentsDistinctCountStaffIdDesc = 'PAYMENTS_DISTINCT_COUNT_STAFF_ID_DESC',
  PaymentsMaxAmountAsc = 'PAYMENTS_MAX_AMOUNT_ASC',
  PaymentsMaxAmountDesc = 'PAYMENTS_MAX_AMOUNT_DESC',
  PaymentsMaxCustomerIdAsc = 'PAYMENTS_MAX_CUSTOMER_ID_ASC',
  PaymentsMaxCustomerIdDesc = 'PAYMENTS_MAX_CUSTOMER_ID_DESC',
  PaymentsMaxPaymentDateAsc = 'PAYMENTS_MAX_PAYMENT_DATE_ASC',
  PaymentsMaxPaymentDateDesc = 'PAYMENTS_MAX_PAYMENT_DATE_DESC',
  PaymentsMaxPaymentIdAsc = 'PAYMENTS_MAX_PAYMENT_ID_ASC',
  PaymentsMaxPaymentIdDesc = 'PAYMENTS_MAX_PAYMENT_ID_DESC',
  PaymentsMaxRentalIdAsc = 'PAYMENTS_MAX_RENTAL_ID_ASC',
  PaymentsMaxRentalIdDesc = 'PAYMENTS_MAX_RENTAL_ID_DESC',
  PaymentsMaxStaffIdAsc = 'PAYMENTS_MAX_STAFF_ID_ASC',
  PaymentsMaxStaffIdDesc = 'PAYMENTS_MAX_STAFF_ID_DESC',
  PaymentsMinAmountAsc = 'PAYMENTS_MIN_AMOUNT_ASC',
  PaymentsMinAmountDesc = 'PAYMENTS_MIN_AMOUNT_DESC',
  PaymentsMinCustomerIdAsc = 'PAYMENTS_MIN_CUSTOMER_ID_ASC',
  PaymentsMinCustomerIdDesc = 'PAYMENTS_MIN_CUSTOMER_ID_DESC',
  PaymentsMinPaymentDateAsc = 'PAYMENTS_MIN_PAYMENT_DATE_ASC',
  PaymentsMinPaymentDateDesc = 'PAYMENTS_MIN_PAYMENT_DATE_DESC',
  PaymentsMinPaymentIdAsc = 'PAYMENTS_MIN_PAYMENT_ID_ASC',
  PaymentsMinPaymentIdDesc = 'PAYMENTS_MIN_PAYMENT_ID_DESC',
  PaymentsMinRentalIdAsc = 'PAYMENTS_MIN_RENTAL_ID_ASC',
  PaymentsMinRentalIdDesc = 'PAYMENTS_MIN_RENTAL_ID_DESC',
  PaymentsMinStaffIdAsc = 'PAYMENTS_MIN_STAFF_ID_ASC',
  PaymentsMinStaffIdDesc = 'PAYMENTS_MIN_STAFF_ID_DESC',
  PaymentsStddevPopulationAmountAsc = 'PAYMENTS_STDDEV_POPULATION_AMOUNT_ASC',
  PaymentsStddevPopulationAmountDesc = 'PAYMENTS_STDDEV_POPULATION_AMOUNT_DESC',
  PaymentsStddevPopulationCustomerIdAsc = 'PAYMENTS_STDDEV_POPULATION_CUSTOMER_ID_ASC',
  PaymentsStddevPopulationCustomerIdDesc = 'PAYMENTS_STDDEV_POPULATION_CUSTOMER_ID_DESC',
  PaymentsStddevPopulationPaymentDateAsc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_DATE_ASC',
  PaymentsStddevPopulationPaymentDateDesc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_DATE_DESC',
  PaymentsStddevPopulationPaymentIdAsc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_ID_ASC',
  PaymentsStddevPopulationPaymentIdDesc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_ID_DESC',
  PaymentsStddevPopulationRentalIdAsc = 'PAYMENTS_STDDEV_POPULATION_RENTAL_ID_ASC',
  PaymentsStddevPopulationRentalIdDesc = 'PAYMENTS_STDDEV_POPULATION_RENTAL_ID_DESC',
  PaymentsStddevPopulationStaffIdAsc = 'PAYMENTS_STDDEV_POPULATION_STAFF_ID_ASC',
  PaymentsStddevPopulationStaffIdDesc = 'PAYMENTS_STDDEV_POPULATION_STAFF_ID_DESC',
  PaymentsStddevSampleAmountAsc = 'PAYMENTS_STDDEV_SAMPLE_AMOUNT_ASC',
  PaymentsStddevSampleAmountDesc = 'PAYMENTS_STDDEV_SAMPLE_AMOUNT_DESC',
  PaymentsStddevSampleCustomerIdAsc = 'PAYMENTS_STDDEV_SAMPLE_CUSTOMER_ID_ASC',
  PaymentsStddevSampleCustomerIdDesc = 'PAYMENTS_STDDEV_SAMPLE_CUSTOMER_ID_DESC',
  PaymentsStddevSamplePaymentDateAsc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_DATE_ASC',
  PaymentsStddevSamplePaymentDateDesc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_DATE_DESC',
  PaymentsStddevSamplePaymentIdAsc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_ID_ASC',
  PaymentsStddevSamplePaymentIdDesc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_ID_DESC',
  PaymentsStddevSampleRentalIdAsc = 'PAYMENTS_STDDEV_SAMPLE_RENTAL_ID_ASC',
  PaymentsStddevSampleRentalIdDesc = 'PAYMENTS_STDDEV_SAMPLE_RENTAL_ID_DESC',
  PaymentsStddevSampleStaffIdAsc = 'PAYMENTS_STDDEV_SAMPLE_STAFF_ID_ASC',
  PaymentsStddevSampleStaffIdDesc = 'PAYMENTS_STDDEV_SAMPLE_STAFF_ID_DESC',
  PaymentsSumAmountAsc = 'PAYMENTS_SUM_AMOUNT_ASC',
  PaymentsSumAmountDesc = 'PAYMENTS_SUM_AMOUNT_DESC',
  PaymentsSumCustomerIdAsc = 'PAYMENTS_SUM_CUSTOMER_ID_ASC',
  PaymentsSumCustomerIdDesc = 'PAYMENTS_SUM_CUSTOMER_ID_DESC',
  PaymentsSumPaymentDateAsc = 'PAYMENTS_SUM_PAYMENT_DATE_ASC',
  PaymentsSumPaymentDateDesc = 'PAYMENTS_SUM_PAYMENT_DATE_DESC',
  PaymentsSumPaymentIdAsc = 'PAYMENTS_SUM_PAYMENT_ID_ASC',
  PaymentsSumPaymentIdDesc = 'PAYMENTS_SUM_PAYMENT_ID_DESC',
  PaymentsSumRentalIdAsc = 'PAYMENTS_SUM_RENTAL_ID_ASC',
  PaymentsSumRentalIdDesc = 'PAYMENTS_SUM_RENTAL_ID_DESC',
  PaymentsSumStaffIdAsc = 'PAYMENTS_SUM_STAFF_ID_ASC',
  PaymentsSumStaffIdDesc = 'PAYMENTS_SUM_STAFF_ID_DESC',
  PaymentsVariancePopulationAmountAsc = 'PAYMENTS_VARIANCE_POPULATION_AMOUNT_ASC',
  PaymentsVariancePopulationAmountDesc = 'PAYMENTS_VARIANCE_POPULATION_AMOUNT_DESC',
  PaymentsVariancePopulationCustomerIdAsc = 'PAYMENTS_VARIANCE_POPULATION_CUSTOMER_ID_ASC',
  PaymentsVariancePopulationCustomerIdDesc = 'PAYMENTS_VARIANCE_POPULATION_CUSTOMER_ID_DESC',
  PaymentsVariancePopulationPaymentDateAsc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_DATE_ASC',
  PaymentsVariancePopulationPaymentDateDesc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_DATE_DESC',
  PaymentsVariancePopulationPaymentIdAsc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_ID_ASC',
  PaymentsVariancePopulationPaymentIdDesc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_ID_DESC',
  PaymentsVariancePopulationRentalIdAsc = 'PAYMENTS_VARIANCE_POPULATION_RENTAL_ID_ASC',
  PaymentsVariancePopulationRentalIdDesc = 'PAYMENTS_VARIANCE_POPULATION_RENTAL_ID_DESC',
  PaymentsVariancePopulationStaffIdAsc = 'PAYMENTS_VARIANCE_POPULATION_STAFF_ID_ASC',
  PaymentsVariancePopulationStaffIdDesc = 'PAYMENTS_VARIANCE_POPULATION_STAFF_ID_DESC',
  PaymentsVarianceSampleAmountAsc = 'PAYMENTS_VARIANCE_SAMPLE_AMOUNT_ASC',
  PaymentsVarianceSampleAmountDesc = 'PAYMENTS_VARIANCE_SAMPLE_AMOUNT_DESC',
  PaymentsVarianceSampleCustomerIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_CUSTOMER_ID_ASC',
  PaymentsVarianceSampleCustomerIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_CUSTOMER_ID_DESC',
  PaymentsVarianceSamplePaymentDateAsc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_DATE_ASC',
  PaymentsVarianceSamplePaymentDateDesc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_DATE_DESC',
  PaymentsVarianceSamplePaymentIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_ID_ASC',
  PaymentsVarianceSamplePaymentIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_ID_DESC',
  PaymentsVarianceSampleRentalIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_RENTAL_ID_ASC',
  PaymentsVarianceSampleRentalIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_RENTAL_ID_DESC',
  PaymentsVarianceSampleStaffIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_STAFF_ID_ASC',
  PaymentsVarianceSampleStaffIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_STAFF_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalsAverageCustomerIdAsc = 'RENTALS_AVERAGE_CUSTOMER_ID_ASC',
  RentalsAverageCustomerIdDesc = 'RENTALS_AVERAGE_CUSTOMER_ID_DESC',
  RentalsAverageInventoryIdAsc = 'RENTALS_AVERAGE_INVENTORY_ID_ASC',
  RentalsAverageInventoryIdDesc = 'RENTALS_AVERAGE_INVENTORY_ID_DESC',
  RentalsAverageLastUpdateAsc = 'RENTALS_AVERAGE_LAST_UPDATE_ASC',
  RentalsAverageLastUpdateDesc = 'RENTALS_AVERAGE_LAST_UPDATE_DESC',
  RentalsAverageRentalDateAsc = 'RENTALS_AVERAGE_RENTAL_DATE_ASC',
  RentalsAverageRentalDateDesc = 'RENTALS_AVERAGE_RENTAL_DATE_DESC',
  RentalsAverageRentalIdAsc = 'RENTALS_AVERAGE_RENTAL_ID_ASC',
  RentalsAverageRentalIdDesc = 'RENTALS_AVERAGE_RENTAL_ID_DESC',
  RentalsAverageReturnDateAsc = 'RENTALS_AVERAGE_RETURN_DATE_ASC',
  RentalsAverageReturnDateDesc = 'RENTALS_AVERAGE_RETURN_DATE_DESC',
  RentalsAverageStaffIdAsc = 'RENTALS_AVERAGE_STAFF_ID_ASC',
  RentalsAverageStaffIdDesc = 'RENTALS_AVERAGE_STAFF_ID_DESC',
  RentalsCountAsc = 'RENTALS_COUNT_ASC',
  RentalsCountDesc = 'RENTALS_COUNT_DESC',
  RentalsDistinctCountCustomerIdAsc = 'RENTALS_DISTINCT_COUNT_CUSTOMER_ID_ASC',
  RentalsDistinctCountCustomerIdDesc = 'RENTALS_DISTINCT_COUNT_CUSTOMER_ID_DESC',
  RentalsDistinctCountInventoryIdAsc = 'RENTALS_DISTINCT_COUNT_INVENTORY_ID_ASC',
  RentalsDistinctCountInventoryIdDesc = 'RENTALS_DISTINCT_COUNT_INVENTORY_ID_DESC',
  RentalsDistinctCountLastUpdateAsc = 'RENTALS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  RentalsDistinctCountLastUpdateDesc = 'RENTALS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  RentalsDistinctCountRentalDateAsc = 'RENTALS_DISTINCT_COUNT_RENTAL_DATE_ASC',
  RentalsDistinctCountRentalDateDesc = 'RENTALS_DISTINCT_COUNT_RENTAL_DATE_DESC',
  RentalsDistinctCountRentalIdAsc = 'RENTALS_DISTINCT_COUNT_RENTAL_ID_ASC',
  RentalsDistinctCountRentalIdDesc = 'RENTALS_DISTINCT_COUNT_RENTAL_ID_DESC',
  RentalsDistinctCountReturnDateAsc = 'RENTALS_DISTINCT_COUNT_RETURN_DATE_ASC',
  RentalsDistinctCountReturnDateDesc = 'RENTALS_DISTINCT_COUNT_RETURN_DATE_DESC',
  RentalsDistinctCountStaffIdAsc = 'RENTALS_DISTINCT_COUNT_STAFF_ID_ASC',
  RentalsDistinctCountStaffIdDesc = 'RENTALS_DISTINCT_COUNT_STAFF_ID_DESC',
  RentalsMaxCustomerIdAsc = 'RENTALS_MAX_CUSTOMER_ID_ASC',
  RentalsMaxCustomerIdDesc = 'RENTALS_MAX_CUSTOMER_ID_DESC',
  RentalsMaxInventoryIdAsc = 'RENTALS_MAX_INVENTORY_ID_ASC',
  RentalsMaxInventoryIdDesc = 'RENTALS_MAX_INVENTORY_ID_DESC',
  RentalsMaxLastUpdateAsc = 'RENTALS_MAX_LAST_UPDATE_ASC',
  RentalsMaxLastUpdateDesc = 'RENTALS_MAX_LAST_UPDATE_DESC',
  RentalsMaxRentalDateAsc = 'RENTALS_MAX_RENTAL_DATE_ASC',
  RentalsMaxRentalDateDesc = 'RENTALS_MAX_RENTAL_DATE_DESC',
  RentalsMaxRentalIdAsc = 'RENTALS_MAX_RENTAL_ID_ASC',
  RentalsMaxRentalIdDesc = 'RENTALS_MAX_RENTAL_ID_DESC',
  RentalsMaxReturnDateAsc = 'RENTALS_MAX_RETURN_DATE_ASC',
  RentalsMaxReturnDateDesc = 'RENTALS_MAX_RETURN_DATE_DESC',
  RentalsMaxStaffIdAsc = 'RENTALS_MAX_STAFF_ID_ASC',
  RentalsMaxStaffIdDesc = 'RENTALS_MAX_STAFF_ID_DESC',
  RentalsMinCustomerIdAsc = 'RENTALS_MIN_CUSTOMER_ID_ASC',
  RentalsMinCustomerIdDesc = 'RENTALS_MIN_CUSTOMER_ID_DESC',
  RentalsMinInventoryIdAsc = 'RENTALS_MIN_INVENTORY_ID_ASC',
  RentalsMinInventoryIdDesc = 'RENTALS_MIN_INVENTORY_ID_DESC',
  RentalsMinLastUpdateAsc = 'RENTALS_MIN_LAST_UPDATE_ASC',
  RentalsMinLastUpdateDesc = 'RENTALS_MIN_LAST_UPDATE_DESC',
  RentalsMinRentalDateAsc = 'RENTALS_MIN_RENTAL_DATE_ASC',
  RentalsMinRentalDateDesc = 'RENTALS_MIN_RENTAL_DATE_DESC',
  RentalsMinRentalIdAsc = 'RENTALS_MIN_RENTAL_ID_ASC',
  RentalsMinRentalIdDesc = 'RENTALS_MIN_RENTAL_ID_DESC',
  RentalsMinReturnDateAsc = 'RENTALS_MIN_RETURN_DATE_ASC',
  RentalsMinReturnDateDesc = 'RENTALS_MIN_RETURN_DATE_DESC',
  RentalsMinStaffIdAsc = 'RENTALS_MIN_STAFF_ID_ASC',
  RentalsMinStaffIdDesc = 'RENTALS_MIN_STAFF_ID_DESC',
  RentalsStddevPopulationCustomerIdAsc = 'RENTALS_STDDEV_POPULATION_CUSTOMER_ID_ASC',
  RentalsStddevPopulationCustomerIdDesc = 'RENTALS_STDDEV_POPULATION_CUSTOMER_ID_DESC',
  RentalsStddevPopulationInventoryIdAsc = 'RENTALS_STDDEV_POPULATION_INVENTORY_ID_ASC',
  RentalsStddevPopulationInventoryIdDesc = 'RENTALS_STDDEV_POPULATION_INVENTORY_ID_DESC',
  RentalsStddevPopulationLastUpdateAsc = 'RENTALS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  RentalsStddevPopulationLastUpdateDesc = 'RENTALS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  RentalsStddevPopulationRentalDateAsc = 'RENTALS_STDDEV_POPULATION_RENTAL_DATE_ASC',
  RentalsStddevPopulationRentalDateDesc = 'RENTALS_STDDEV_POPULATION_RENTAL_DATE_DESC',
  RentalsStddevPopulationRentalIdAsc = 'RENTALS_STDDEV_POPULATION_RENTAL_ID_ASC',
  RentalsStddevPopulationRentalIdDesc = 'RENTALS_STDDEV_POPULATION_RENTAL_ID_DESC',
  RentalsStddevPopulationReturnDateAsc = 'RENTALS_STDDEV_POPULATION_RETURN_DATE_ASC',
  RentalsStddevPopulationReturnDateDesc = 'RENTALS_STDDEV_POPULATION_RETURN_DATE_DESC',
  RentalsStddevPopulationStaffIdAsc = 'RENTALS_STDDEV_POPULATION_STAFF_ID_ASC',
  RentalsStddevPopulationStaffIdDesc = 'RENTALS_STDDEV_POPULATION_STAFF_ID_DESC',
  RentalsStddevSampleCustomerIdAsc = 'RENTALS_STDDEV_SAMPLE_CUSTOMER_ID_ASC',
  RentalsStddevSampleCustomerIdDesc = 'RENTALS_STDDEV_SAMPLE_CUSTOMER_ID_DESC',
  RentalsStddevSampleInventoryIdAsc = 'RENTALS_STDDEV_SAMPLE_INVENTORY_ID_ASC',
  RentalsStddevSampleInventoryIdDesc = 'RENTALS_STDDEV_SAMPLE_INVENTORY_ID_DESC',
  RentalsStddevSampleLastUpdateAsc = 'RENTALS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  RentalsStddevSampleLastUpdateDesc = 'RENTALS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  RentalsStddevSampleRentalDateAsc = 'RENTALS_STDDEV_SAMPLE_RENTAL_DATE_ASC',
  RentalsStddevSampleRentalDateDesc = 'RENTALS_STDDEV_SAMPLE_RENTAL_DATE_DESC',
  RentalsStddevSampleRentalIdAsc = 'RENTALS_STDDEV_SAMPLE_RENTAL_ID_ASC',
  RentalsStddevSampleRentalIdDesc = 'RENTALS_STDDEV_SAMPLE_RENTAL_ID_DESC',
  RentalsStddevSampleReturnDateAsc = 'RENTALS_STDDEV_SAMPLE_RETURN_DATE_ASC',
  RentalsStddevSampleReturnDateDesc = 'RENTALS_STDDEV_SAMPLE_RETURN_DATE_DESC',
  RentalsStddevSampleStaffIdAsc = 'RENTALS_STDDEV_SAMPLE_STAFF_ID_ASC',
  RentalsStddevSampleStaffIdDesc = 'RENTALS_STDDEV_SAMPLE_STAFF_ID_DESC',
  RentalsSumCustomerIdAsc = 'RENTALS_SUM_CUSTOMER_ID_ASC',
  RentalsSumCustomerIdDesc = 'RENTALS_SUM_CUSTOMER_ID_DESC',
  RentalsSumInventoryIdAsc = 'RENTALS_SUM_INVENTORY_ID_ASC',
  RentalsSumInventoryIdDesc = 'RENTALS_SUM_INVENTORY_ID_DESC',
  RentalsSumLastUpdateAsc = 'RENTALS_SUM_LAST_UPDATE_ASC',
  RentalsSumLastUpdateDesc = 'RENTALS_SUM_LAST_UPDATE_DESC',
  RentalsSumRentalDateAsc = 'RENTALS_SUM_RENTAL_DATE_ASC',
  RentalsSumRentalDateDesc = 'RENTALS_SUM_RENTAL_DATE_DESC',
  RentalsSumRentalIdAsc = 'RENTALS_SUM_RENTAL_ID_ASC',
  RentalsSumRentalIdDesc = 'RENTALS_SUM_RENTAL_ID_DESC',
  RentalsSumReturnDateAsc = 'RENTALS_SUM_RETURN_DATE_ASC',
  RentalsSumReturnDateDesc = 'RENTALS_SUM_RETURN_DATE_DESC',
  RentalsSumStaffIdAsc = 'RENTALS_SUM_STAFF_ID_ASC',
  RentalsSumStaffIdDesc = 'RENTALS_SUM_STAFF_ID_DESC',
  RentalsVariancePopulationCustomerIdAsc = 'RENTALS_VARIANCE_POPULATION_CUSTOMER_ID_ASC',
  RentalsVariancePopulationCustomerIdDesc = 'RENTALS_VARIANCE_POPULATION_CUSTOMER_ID_DESC',
  RentalsVariancePopulationInventoryIdAsc = 'RENTALS_VARIANCE_POPULATION_INVENTORY_ID_ASC',
  RentalsVariancePopulationInventoryIdDesc = 'RENTALS_VARIANCE_POPULATION_INVENTORY_ID_DESC',
  RentalsVariancePopulationLastUpdateAsc = 'RENTALS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  RentalsVariancePopulationLastUpdateDesc = 'RENTALS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  RentalsVariancePopulationRentalDateAsc = 'RENTALS_VARIANCE_POPULATION_RENTAL_DATE_ASC',
  RentalsVariancePopulationRentalDateDesc = 'RENTALS_VARIANCE_POPULATION_RENTAL_DATE_DESC',
  RentalsVariancePopulationRentalIdAsc = 'RENTALS_VARIANCE_POPULATION_RENTAL_ID_ASC',
  RentalsVariancePopulationRentalIdDesc = 'RENTALS_VARIANCE_POPULATION_RENTAL_ID_DESC',
  RentalsVariancePopulationReturnDateAsc = 'RENTALS_VARIANCE_POPULATION_RETURN_DATE_ASC',
  RentalsVariancePopulationReturnDateDesc = 'RENTALS_VARIANCE_POPULATION_RETURN_DATE_DESC',
  RentalsVariancePopulationStaffIdAsc = 'RENTALS_VARIANCE_POPULATION_STAFF_ID_ASC',
  RentalsVariancePopulationStaffIdDesc = 'RENTALS_VARIANCE_POPULATION_STAFF_ID_DESC',
  RentalsVarianceSampleCustomerIdAsc = 'RENTALS_VARIANCE_SAMPLE_CUSTOMER_ID_ASC',
  RentalsVarianceSampleCustomerIdDesc = 'RENTALS_VARIANCE_SAMPLE_CUSTOMER_ID_DESC',
  RentalsVarianceSampleInventoryIdAsc = 'RENTALS_VARIANCE_SAMPLE_INVENTORY_ID_ASC',
  RentalsVarianceSampleInventoryIdDesc = 'RENTALS_VARIANCE_SAMPLE_INVENTORY_ID_DESC',
  RentalsVarianceSampleLastUpdateAsc = 'RENTALS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  RentalsVarianceSampleLastUpdateDesc = 'RENTALS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  RentalsVarianceSampleRentalDateAsc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_DATE_ASC',
  RentalsVarianceSampleRentalDateDesc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_DATE_DESC',
  RentalsVarianceSampleRentalIdAsc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_ID_ASC',
  RentalsVarianceSampleRentalIdDesc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_ID_DESC',
  RentalsVarianceSampleReturnDateAsc = 'RENTALS_VARIANCE_SAMPLE_RETURN_DATE_ASC',
  RentalsVarianceSampleReturnDateDesc = 'RENTALS_VARIANCE_SAMPLE_RETURN_DATE_DESC',
  RentalsVarianceSampleStaffIdAsc = 'RENTALS_VARIANCE_SAMPLE_STAFF_ID_ASC',
  RentalsVarianceSampleStaffIdDesc = 'RENTALS_VARIANCE_SAMPLE_STAFF_ID_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

/** All input for the `deleteActorById` mutation. */
export type DeleteActorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Actor` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteActor` mutation. */
export type DeleteActorInput = {
  actorId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our delete `Actor` mutation. */
export type DeleteActorPayload = {
  __typename?: 'DeleteActorPayload';
  /** The `Actor` that was deleted by this mutation. */
  actor?: Maybe<Actor>;
  /** An edge for our `Actor`. May be used by Relay 1. */
  actorEdge?: Maybe<ActorsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedActorId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Actor` mutation. */
export type DeleteActorPayloadActorEdgeArgs = {
  orderBy?: InputMaybe<Array<ActorsOrderBy>>;
};

/** All input for the `deleteAddressById` mutation. */
export type DeleteAddressByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  addressId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload';
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAddressId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `deleteCategoryById` mutation. */
export type DeleteCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  categoryId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCategoryId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteCityById` mutation. */
export type DeleteCityByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `City` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteCity` mutation. */
export type DeleteCityInput = {
  cityId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our delete `City` mutation. */
export type DeleteCityPayload = {
  __typename?: 'DeleteCityPayload';
  /** The `City` that was deleted by this mutation. */
  city?: Maybe<City>;
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  deletedCityId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `City` mutation. */
export type DeleteCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** All input for the `deleteCountryById` mutation. */
export type DeleteCountryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Country` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteCountry` mutation. */
export type DeleteCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  countryId: Scalars['Int'];
};

/** The output of our delete `Country` mutation. */
export type DeleteCountryPayload = {
  __typename?: 'DeleteCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Country` that was deleted by this mutation. */
  country?: Maybe<Country>;
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>;
  deletedCountryId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Country` mutation. */
export type DeleteCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** All input for the `deleteCustomerById` mutation. */
export type DeleteCustomerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Customer` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteCustomer` mutation. */
export type DeleteCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  customerId: Scalars['Int'];
};

/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayload = {
  __typename?: 'DeleteCustomerPayload';
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was deleted by this mutation. */
  customer?: Maybe<Customer>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
  deletedCustomerId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayloadCustomerEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};

/** All input for the `deleteFilmActorById` mutation. */
export type DeleteFilmActorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FilmActor` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteFilmActor` mutation. */
export type DeleteFilmActorInput = {
  actorId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  filmId: Scalars['Int'];
};

/** The output of our delete `FilmActor` mutation. */
export type DeleteFilmActorPayload = {
  __typename?: 'DeleteFilmActorPayload';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFilmActorId?: Maybe<Scalars['ID']>;
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>;
  /** The `FilmActor` that was deleted by this mutation. */
  filmActor?: Maybe<FilmActor>;
  /** An edge for our `FilmActor`. May be used by Relay 1. */
  filmActorEdge?: Maybe<FilmActorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `FilmActor` mutation. */
export type DeleteFilmActorPayloadFilmActorEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};

/** All input for the `deleteFilmById` mutation. */
export type DeleteFilmByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Film` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteFilmCategoryById` mutation. */
export type DeleteFilmCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FilmCategory` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteFilmCategory` mutation. */
export type DeleteFilmCategoryInput = {
  categoryId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  filmId: Scalars['Int'];
};

/** The output of our delete `FilmCategory` mutation. */
export type DeleteFilmCategoryPayload = {
  __typename?: 'DeleteFilmCategoryPayload';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFilmCategoryId?: Maybe<Scalars['ID']>;
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>;
  /** The `FilmCategory` that was deleted by this mutation. */
  filmCategory?: Maybe<FilmCategory>;
  /** An edge for our `FilmCategory`. May be used by Relay 1. */
  filmCategoryEdge?: Maybe<FilmCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `FilmCategory` mutation. */
export type DeleteFilmCategoryPayloadFilmCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};

/** All input for the `deleteFilm` mutation. */
export type DeleteFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  filmId: Scalars['Int'];
};

/** The output of our delete `Film` mutation. */
export type DeleteFilmPayload = {
  __typename?: 'DeleteFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFilmId?: Maybe<Scalars['ID']>;
  /** The `Film` that was deleted by this mutation. */
  film?: Maybe<Film>;
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>;
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Film` mutation. */
export type DeleteFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/** All input for the `deleteInventoryById` mutation. */
export type DeleteInventoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Inventory` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteInventory` mutation. */
export type DeleteInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  inventoryId: Scalars['Int'];
};

/** The output of our delete `Inventory` mutation. */
export type DeleteInventoryPayload = {
  __typename?: 'DeleteInventoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedInventoryId?: Maybe<Scalars['ID']>;
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>;
  /** The `Inventory` that was deleted by this mutation. */
  inventory?: Maybe<Inventory>;
  /** An edge for our `Inventory`. May be used by Relay 1. */
  inventoryEdge?: Maybe<InventoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Inventory` mutation. */
export type DeleteInventoryPayloadInventoryEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};

/** All input for the `deleteLanguageById` mutation. */
export type DeleteLanguageByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Language` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteLanguage` mutation. */
export type DeleteLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  languageId: Scalars['Int'];
};

/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayload = {
  __typename?: 'DeleteLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedLanguageId?: Maybe<Scalars['ID']>;
  /** The `Language` that was deleted by this mutation. */
  language?: Maybe<Language>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};

/** All input for the `deletePaymentById` mutation. */
export type DeletePaymentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Payment` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deletePayment` mutation. */
export type DeletePaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  paymentId: Scalars['Int'];
};

/** The output of our delete `Payment` mutation. */
export type DeletePaymentPayload = {
  __typename?: 'DeletePaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>;
  deletedPaymentId?: Maybe<Scalars['ID']>;
  /** The `Payment` that was deleted by this mutation. */
  payment?: Maybe<Payment>;
  /** An edge for our `Payment`. May be used by Relay 1. */
  paymentEdge?: Maybe<PaymentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>;
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>;
};


/** The output of our delete `Payment` mutation. */
export type DeletePaymentPayloadPaymentEdgeArgs = {
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};

/** All input for the `deleteRentalById` mutation. */
export type DeleteRentalByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Rental` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteRental` mutation. */
export type DeleteRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  rentalId: Scalars['Int'];
};

/** The output of our delete `Rental` mutation. */
export type DeleteRentalPayload = {
  __typename?: 'DeleteRentalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>;
  deletedRentalId?: Maybe<Scalars['ID']>;
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rental` that was deleted by this mutation. */
  rental?: Maybe<Rental>;
  /** An edge for our `Rental`. May be used by Relay 1. */
  rentalEdge?: Maybe<RentalsEdge>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>;
};


/** The output of our delete `Rental` mutation. */
export type DeleteRentalPayloadRentalEdgeArgs = {
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/** All input for the `deleteStaffById` mutation. */
export type DeleteStaffByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Staff` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteStaff` mutation. */
export type DeleteStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  staffId: Scalars['Int'];
};

/** The output of our delete `Staff` mutation. */
export type DeleteStaffPayload = {
  __typename?: 'DeleteStaffPayload';
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedStaffId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Staff` that was deleted by this mutation. */
  staff?: Maybe<Staff>;
  /** An edge for our `Staff`. May be used by Relay 1. */
  staffEdge?: Maybe<StaffEdge>;
};


/** The output of our delete `Staff` mutation. */
export type DeleteStaffPayloadStaffEdgeArgs = {
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};

/** All input for the `deleteStoreById` mutation. */
export type DeleteStoreByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Store` to be deleted. */
  id: Scalars['ID'];
};

/** All input for the `deleteStore` mutation. */
export type DeleteStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  storeId: Scalars['Int'];
};

/** The output of our delete `Store` mutation. */
export type DeleteStorePayload = {
  __typename?: 'DeleteStorePayload';
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedStoreId?: Maybe<Scalars['ID']>;
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Store` that was deleted by this mutation. */
  store?: Maybe<Store>;
  /** An edge for our `Store`. May be used by Relay 1. */
  storeEdge?: Maybe<StoresEdge>;
};


/** The output of our delete `Store` mutation. */
export type DeleteStorePayloadStoreEdgeArgs = {
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

/** A film */
export type Film = Node & {
  __typename?: 'Film';
  description?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActors: FilmActorsConnection;
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategories: FilmCategoriesConnection;
  filmId: Scalars['Int'];
  fulltext: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  /** Reads and enables pagination through a set of `Inventory`. */
  inventories: InventoriesConnection;
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>;
  languageId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  length?: Maybe<Scalars['Int']>;
  rating?: Maybe<MpaaRating>;
  releaseYear?: Maybe<Scalars['Year']>;
  rentalDuration: Scalars['Int'];
  rentalRate: Scalars['BigFloat'];
  replacementCost: Scalars['BigFloat'];
  specialFeatures?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the film */
  title: Scalars['String'];
};


/** A film */
export type FilmFilmActorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};


/** A film */
export type FilmFilmCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};


/** A film */
export type FilmInventoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};

export type FilmActor = Node & {
  __typename?: 'FilmActor';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>;
  actorId: Scalars['Int'];
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>;
  filmId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastUpdate: Scalars['Datetime'];
};

export type FilmActorAggregates = {
  __typename?: 'FilmActorAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<FilmActorAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<FilmActorDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<FilmActorMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<FilmActorMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<FilmActorStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<FilmActorStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<FilmActorSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<FilmActorVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<FilmActorVarianceSampleAggregates>;
};

export type FilmActorAverageAggregates = {
  __typename?: 'FilmActorAverageAggregates';
  /** Mean average of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `FilmActor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type FilmActorDistinctCountAggregates = {
  __typename?: 'FilmActorDistinctCountAggregates';
  /** Distinct count of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `FilmActor` for usage during aggregation. */
export enum FilmActorGroupBy {
  ActorId = 'ACTOR_ID',
  FilmId = 'FILM_ID',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR'
}

export type FilmActorHavingAverageInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmActorHavingDistinctCountInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `FilmActor` aggregates. */
export type FilmActorHavingInput = {
  AND?: InputMaybe<Array<FilmActorHavingInput>>;
  OR?: InputMaybe<Array<FilmActorHavingInput>>;
  average?: InputMaybe<FilmActorHavingAverageInput>;
  distinctCount?: InputMaybe<FilmActorHavingDistinctCountInput>;
  max?: InputMaybe<FilmActorHavingMaxInput>;
  min?: InputMaybe<FilmActorHavingMinInput>;
  stddevPopulation?: InputMaybe<FilmActorHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<FilmActorHavingStddevSampleInput>;
  sum?: InputMaybe<FilmActorHavingSumInput>;
  variancePopulation?: InputMaybe<FilmActorHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<FilmActorHavingVarianceSampleInput>;
};

export type FilmActorHavingMaxInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmActorHavingMinInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmActorHavingStddevPopulationInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmActorHavingStddevSampleInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmActorHavingSumInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmActorHavingVariancePopulationInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmActorHavingVarianceSampleInput = {
  actorId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `FilmActor` */
export type FilmActorInput = {
  actorId: Scalars['Int'];
  filmId: Scalars['Int'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type FilmActorMaxAggregates = {
  __typename?: 'FilmActorMaxAggregates';
  /** Maximum of actorId across the matching connection */
  actorId?: Maybe<Scalars['Int']>;
  /** Maximum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
};

export type FilmActorMinAggregates = {
  __typename?: 'FilmActorMinAggregates';
  /** Minimum of actorId across the matching connection */
  actorId?: Maybe<Scalars['Int']>;
  /** Minimum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `FilmActor`. Fields that are set will be updated. */
export type FilmActorPatch = {
  actorId?: InputMaybe<Scalars['Int']>;
  filmId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type FilmActorStddevPopulationAggregates = {
  __typename?: 'FilmActorStddevPopulationAggregates';
  /** Population standard deviation of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

export type FilmActorStddevSampleAggregates = {
  __typename?: 'FilmActorStddevSampleAggregates';
  /** Sample standard deviation of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

export type FilmActorSumAggregates = {
  __typename?: 'FilmActorSumAggregates';
  /** Sum of actorId across the matching connection */
  actorId: Scalars['BigInt'];
  /** Sum of filmId across the matching connection */
  filmId: Scalars['BigInt'];
};

export type FilmActorVariancePopulationAggregates = {
  __typename?: 'FilmActorVariancePopulationAggregates';
  /** Population variance of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

export type FilmActorVarianceSampleAggregates = {
  __typename?: 'FilmActorVarianceSampleAggregates';
  /** Sample variance of actorId across the matching connection */
  actorId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `FilmActor` values. */
export type FilmActorsConnection = {
  __typename?: 'FilmActorsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FilmActorAggregates>;
  /** A list of edges which contains the `FilmActor` and cursor to aid in pagination. */
  edges: Array<FilmActorsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FilmActorAggregates>>;
  /** A list of `FilmActor` objects. */
  nodes: Array<Maybe<FilmActor>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FilmActor` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FilmActor` values. */
export type FilmActorsConnectionGroupedAggregatesArgs = {
  groupBy: Array<FilmActorGroupBy>;
  having?: InputMaybe<FilmActorHavingInput>;
};

/** A `FilmActor` edge in the connection. */
export type FilmActorsEdge = {
  __typename?: 'FilmActorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FilmActor` at the end of the edge. */
  node?: Maybe<FilmActor>;
};

/** Methods to use when ordering `FilmActor`. */
export enum FilmActorsOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FilmAggregates = {
  __typename?: 'FilmAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<FilmAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<FilmDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<FilmMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<FilmMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<FilmStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<FilmStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<FilmSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<FilmVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<FilmVarianceSampleAggregates>;
};

export type FilmAverageAggregates = {
  __typename?: 'FilmAverageAggregates';
  /** Mean average of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Mean average of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['BigFloat']>;
  /** Mean average of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['BigFloat']>;
  /** Mean average of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigFloat']>;
  /** Mean average of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `FilmCategory` values. */
export type FilmCategoriesConnection = {
  __typename?: 'FilmCategoriesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FilmCategoryAggregates>;
  /** A list of edges which contains the `FilmCategory` and cursor to aid in pagination. */
  edges: Array<FilmCategoriesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FilmCategoryAggregates>>;
  /** A list of `FilmCategory` objects. */
  nodes: Array<Maybe<FilmCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FilmCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FilmCategory` values. */
export type FilmCategoriesConnectionGroupedAggregatesArgs = {
  groupBy: Array<FilmCategoryGroupBy>;
  having?: InputMaybe<FilmCategoryHavingInput>;
};

/** A `FilmCategory` edge in the connection. */
export type FilmCategoriesEdge = {
  __typename?: 'FilmCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FilmCategory` at the end of the edge. */
  node?: Maybe<FilmCategory>;
};

/** Methods to use when ordering `FilmCategory`. */
export enum FilmCategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FilmCategory = Node & {
  __typename?: 'FilmCategory';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>;
  categoryId: Scalars['Int'];
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>;
  filmId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastUpdate: Scalars['Datetime'];
};

export type FilmCategoryAggregates = {
  __typename?: 'FilmCategoryAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<FilmCategoryAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<FilmCategoryDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<FilmCategoryMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<FilmCategoryMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<FilmCategoryStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<FilmCategoryStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<FilmCategorySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<FilmCategoryVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<FilmCategoryVarianceSampleAggregates>;
};

export type FilmCategoryAverageAggregates = {
  __typename?: 'FilmCategoryAverageAggregates';
  /** Mean average of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `FilmCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FilmCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type FilmCategoryDistinctCountAggregates = {
  __typename?: 'FilmCategoryDistinctCountAggregates';
  /** Distinct count of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `FilmCategory` for usage during aggregation. */
export enum FilmCategoryGroupBy {
  CategoryId = 'CATEGORY_ID',
  FilmId = 'FILM_ID',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR'
}

export type FilmCategoryHavingAverageInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmCategoryHavingDistinctCountInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `FilmCategory` aggregates. */
export type FilmCategoryHavingInput = {
  AND?: InputMaybe<Array<FilmCategoryHavingInput>>;
  OR?: InputMaybe<Array<FilmCategoryHavingInput>>;
  average?: InputMaybe<FilmCategoryHavingAverageInput>;
  distinctCount?: InputMaybe<FilmCategoryHavingDistinctCountInput>;
  max?: InputMaybe<FilmCategoryHavingMaxInput>;
  min?: InputMaybe<FilmCategoryHavingMinInput>;
  stddevPopulation?: InputMaybe<FilmCategoryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<FilmCategoryHavingStddevSampleInput>;
  sum?: InputMaybe<FilmCategoryHavingSumInput>;
  variancePopulation?: InputMaybe<FilmCategoryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<FilmCategoryHavingVarianceSampleInput>;
};

export type FilmCategoryHavingMaxInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmCategoryHavingMinInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmCategoryHavingStddevPopulationInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmCategoryHavingStddevSampleInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmCategoryHavingSumInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmCategoryHavingVariancePopulationInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type FilmCategoryHavingVarianceSampleInput = {
  categoryId?: InputMaybe<HavingIntFilter>;
  filmId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `FilmCategory` */
export type FilmCategoryInput = {
  categoryId: Scalars['Int'];
  filmId: Scalars['Int'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type FilmCategoryMaxAggregates = {
  __typename?: 'FilmCategoryMaxAggregates';
  /** Maximum of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['Int']>;
  /** Maximum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
};

export type FilmCategoryMinAggregates = {
  __typename?: 'FilmCategoryMinAggregates';
  /** Minimum of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['Int']>;
  /** Minimum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `FilmCategory`. Fields that are set will be updated. */
export type FilmCategoryPatch = {
  categoryId?: InputMaybe<Scalars['Int']>;
  filmId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type FilmCategoryStddevPopulationAggregates = {
  __typename?: 'FilmCategoryStddevPopulationAggregates';
  /** Population standard deviation of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

export type FilmCategoryStddevSampleAggregates = {
  __typename?: 'FilmCategoryStddevSampleAggregates';
  /** Sample standard deviation of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

export type FilmCategorySumAggregates = {
  __typename?: 'FilmCategorySumAggregates';
  /** Sum of categoryId across the matching connection */
  categoryId: Scalars['BigInt'];
  /** Sum of filmId across the matching connection */
  filmId: Scalars['BigInt'];
};

export type FilmCategoryVariancePopulationAggregates = {
  __typename?: 'FilmCategoryVariancePopulationAggregates';
  /** Population variance of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

export type FilmCategoryVarianceSampleAggregates = {
  __typename?: 'FilmCategoryVarianceSampleAggregates';
  /** Sample variance of categoryId across the matching connection */
  categoryId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Film` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FilmCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `fulltext` field. */
  fulltext?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `releaseYear` field. */
  releaseYear?: InputMaybe<Scalars['Year']>;
  /** Checks for equality with the object’s `rentalDuration` field. */
  rentalDuration?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalRate` field. */
  rentalRate?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `replacementCost` field. */
  replacementCost?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `specialFeatures` field. */
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

export type FilmDistinctCountAggregates = {
  __typename?: 'FilmDistinctCountAggregates';
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>;
  /** Distinct count of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of fulltext across the matching connection */
  fulltext?: Maybe<Scalars['BigInt']>;
  /** Distinct count of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of length across the matching connection */
  length?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rating across the matching connection */
  rating?: Maybe<Scalars['BigInt']>;
  /** Distinct count of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigInt']>;
  /** Distinct count of specialFeatures across the matching connection */
  specialFeatures?: Maybe<Scalars['BigInt']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Film` for usage during aggregation. */
export enum FilmGroupBy {
  Description = 'DESCRIPTION',
  Fulltext = 'FULLTEXT',
  LanguageId = 'LANGUAGE_ID',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  Length = 'LENGTH',
  Rating = 'RATING',
  ReleaseYear = 'RELEASE_YEAR',
  RentalDuration = 'RENTAL_DURATION',
  RentalRate = 'RENTAL_RATE',
  ReplacementCost = 'REPLACEMENT_COST',
  SpecialFeatures = 'SPECIAL_FEATURES',
  Title = 'TITLE'
}

export type FilmHavingAverageInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmHavingDistinctCountInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Film` aggregates. */
export type FilmHavingInput = {
  AND?: InputMaybe<Array<FilmHavingInput>>;
  OR?: InputMaybe<Array<FilmHavingInput>>;
  average?: InputMaybe<FilmHavingAverageInput>;
  distinctCount?: InputMaybe<FilmHavingDistinctCountInput>;
  max?: InputMaybe<FilmHavingMaxInput>;
  min?: InputMaybe<FilmHavingMinInput>;
  stddevPopulation?: InputMaybe<FilmHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<FilmHavingStddevSampleInput>;
  sum?: InputMaybe<FilmHavingSumInput>;
  variancePopulation?: InputMaybe<FilmHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<FilmHavingVarianceSampleInput>;
};

export type FilmHavingMaxInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmHavingMinInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmHavingStddevPopulationInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmHavingStddevSampleInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmHavingSumInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmHavingVariancePopulationInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmHavingVarianceSampleInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  length?: InputMaybe<HavingIntFilter>;
  rentalDuration?: InputMaybe<HavingIntFilter>;
  rentalRate?: InputMaybe<HavingBigfloatFilter>;
  replacementCost?: InputMaybe<HavingBigfloatFilter>;
};

/** All input for the `filmInStock` mutation. */
export type FilmInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  pFilmId?: InputMaybe<Scalars['Int']>;
  pStoreId?: InputMaybe<Scalars['Int']>;
};

/** The output of our `filmInStock` mutation. */
export type FilmInStockPayload = {
  __typename?: 'FilmInStockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  pFilmCounts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** An input for mutations affecting `Film` */
export type FilmInput = {
  description?: InputMaybe<Scalars['String']>;
  filmId?: InputMaybe<Scalars['Int']>;
  fulltext: Scalars['String'];
  languageId: Scalars['Int'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  length?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<MpaaRating>;
  releaseYear?: InputMaybe<Scalars['Year']>;
  rentalDuration?: InputMaybe<Scalars['Int']>;
  rentalRate?: InputMaybe<Scalars['BigFloat']>;
  replacementCost?: InputMaybe<Scalars['BigFloat']>;
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The title of the film */
  title: Scalars['String'];
};

export type FilmList = {
  __typename?: 'FilmList';
  actors?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fid?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['BigFloat']>;
  rating?: Maybe<MpaaRating>;
  title?: Maybe<Scalars['String']>;
};

export type FilmListAggregates = {
  __typename?: 'FilmListAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<FilmListAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<FilmListDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<FilmListMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<FilmListMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<FilmListStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<FilmListStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<FilmListSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<FilmListVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<FilmListVarianceSampleAggregates>;
};

export type FilmListAverageAggregates = {
  __typename?: 'FilmListAverageAggregates';
  /** Mean average of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Mean average of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Mean average of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `FilmList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

export type FilmListDistinctCountAggregates = {
  __typename?: 'FilmListDistinctCountAggregates';
  /** Distinct count of actors across the matching connection */
  actors?: Maybe<Scalars['BigInt']>;
  /** Distinct count of category across the matching connection */
  category?: Maybe<Scalars['BigInt']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>;
  /** Distinct count of fid across the matching connection */
  fid?: Maybe<Scalars['BigInt']>;
  /** Distinct count of length across the matching connection */
  length?: Maybe<Scalars['BigInt']>;
  /** Distinct count of price across the matching connection */
  price?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rating across the matching connection */
  rating?: Maybe<Scalars['BigInt']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `FilmList` for usage during aggregation. */
export enum FilmListGroupBy {
  Actors = 'ACTORS',
  Category = 'CATEGORY',
  Description = 'DESCRIPTION',
  Fid = 'FID',
  Length = 'LENGTH',
  Price = 'PRICE',
  Rating = 'RATING',
  Title = 'TITLE'
}

export type FilmListHavingAverageInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListHavingDistinctCountInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `FilmList` aggregates. */
export type FilmListHavingInput = {
  AND?: InputMaybe<Array<FilmListHavingInput>>;
  OR?: InputMaybe<Array<FilmListHavingInput>>;
  average?: InputMaybe<FilmListHavingAverageInput>;
  distinctCount?: InputMaybe<FilmListHavingDistinctCountInput>;
  max?: InputMaybe<FilmListHavingMaxInput>;
  min?: InputMaybe<FilmListHavingMinInput>;
  stddevPopulation?: InputMaybe<FilmListHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<FilmListHavingStddevSampleInput>;
  sum?: InputMaybe<FilmListHavingSumInput>;
  variancePopulation?: InputMaybe<FilmListHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<FilmListHavingVarianceSampleInput>;
};

export type FilmListHavingMaxInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListHavingMinInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListHavingStddevPopulationInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListHavingStddevSampleInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListHavingSumInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListHavingVariancePopulationInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListHavingVarianceSampleInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type FilmListMaxAggregates = {
  __typename?: 'FilmListMaxAggregates';
  /** Maximum of fid across the matching connection */
  fid?: Maybe<Scalars['Int']>;
  /** Maximum of length across the matching connection */
  length?: Maybe<Scalars['Int']>;
  /** Maximum of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type FilmListMinAggregates = {
  __typename?: 'FilmListMinAggregates';
  /** Minimum of fid across the matching connection */
  fid?: Maybe<Scalars['Int']>;
  /** Minimum of length across the matching connection */
  length?: Maybe<Scalars['Int']>;
  /** Minimum of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type FilmListStddevPopulationAggregates = {
  __typename?: 'FilmListStddevPopulationAggregates';
  /** Population standard deviation of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type FilmListStddevSampleAggregates = {
  __typename?: 'FilmListStddevSampleAggregates';
  /** Sample standard deviation of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type FilmListSumAggregates = {
  __typename?: 'FilmListSumAggregates';
  /** Sum of fid across the matching connection */
  fid: Scalars['BigInt'];
  /** Sum of length across the matching connection */
  length: Scalars['BigInt'];
  /** Sum of price across the matching connection */
  price: Scalars['BigFloat'];
};

export type FilmListVariancePopulationAggregates = {
  __typename?: 'FilmListVariancePopulationAggregates';
  /** Population variance of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Population variance of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Population variance of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type FilmListVarianceSampleAggregates = {
  __typename?: 'FilmListVarianceSampleAggregates';
  /** Sample variance of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `FilmList` values. */
export type FilmListsConnection = {
  __typename?: 'FilmListsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FilmListAggregates>;
  /** A list of edges which contains the `FilmList` and cursor to aid in pagination. */
  edges: Array<FilmListsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FilmListAggregates>>;
  /** A list of `FilmList` objects. */
  nodes: Array<Maybe<FilmList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FilmList` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FilmList` values. */
export type FilmListsConnectionGroupedAggregatesArgs = {
  groupBy: Array<FilmListGroupBy>;
  having?: InputMaybe<FilmListHavingInput>;
};

/** A `FilmList` edge in the connection. */
export type FilmListsEdge = {
  __typename?: 'FilmListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FilmList` at the end of the edge. */
  node?: Maybe<FilmList>;
};

/** Methods to use when ordering `FilmList`. */
export enum FilmListsOrderBy {
  ActorsAsc = 'ACTORS_ASC',
  ActorsDesc = 'ACTORS_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FidAsc = 'FID_ASC',
  FidDesc = 'FID_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type FilmMaxAggregates = {
  __typename?: 'FilmMaxAggregates';
  /** Maximum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
  /** Maximum of languageId across the matching connection */
  languageId?: Maybe<Scalars['Int']>;
  /** Maximum of length across the matching connection */
  length?: Maybe<Scalars['Int']>;
  /** Maximum of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['Year']>;
  /** Maximum of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['Int']>;
  /** Maximum of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigFloat']>;
  /** Maximum of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigFloat']>;
};

export type FilmMinAggregates = {
  __typename?: 'FilmMinAggregates';
  /** Minimum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
  /** Minimum of languageId across the matching connection */
  languageId?: Maybe<Scalars['Int']>;
  /** Minimum of length across the matching connection */
  length?: Maybe<Scalars['Int']>;
  /** Minimum of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['Year']>;
  /** Minimum of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['Int']>;
  /** Minimum of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigFloat']>;
  /** Minimum of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigFloat']>;
};

/** All input for the `filmNotInStock` mutation. */
export type FilmNotInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  pFilmId?: InputMaybe<Scalars['Int']>;
  pStoreId?: InputMaybe<Scalars['Int']>;
};

/** The output of our `filmNotInStock` mutation. */
export type FilmNotInStockPayload = {
  __typename?: 'FilmNotInStockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  pFilmCounts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** Represents an update to a `Film`. Fields that are set will be updated. */
export type FilmPatch = {
  description?: InputMaybe<Scalars['String']>;
  filmId?: InputMaybe<Scalars['Int']>;
  fulltext?: InputMaybe<Scalars['String']>;
  languageId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  length?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<MpaaRating>;
  releaseYear?: InputMaybe<Scalars['Year']>;
  rentalDuration?: InputMaybe<Scalars['Int']>;
  rentalRate?: InputMaybe<Scalars['BigFloat']>;
  replacementCost?: InputMaybe<Scalars['BigFloat']>;
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FilmStddevPopulationAggregates = {
  __typename?: 'FilmStddevPopulationAggregates';
  /** Population standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigFloat']>;
};

export type FilmStddevSampleAggregates = {
  __typename?: 'FilmStddevSampleAggregates';
  /** Sample standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigFloat']>;
};

export type FilmSumAggregates = {
  __typename?: 'FilmSumAggregates';
  /** Sum of filmId across the matching connection */
  filmId: Scalars['BigInt'];
  /** Sum of languageId across the matching connection */
  languageId: Scalars['BigInt'];
  /** Sum of length across the matching connection */
  length: Scalars['BigInt'];
  /** Sum of releaseYear across the matching connection */
  releaseYear: Scalars['BigFloat'];
  /** Sum of rentalDuration across the matching connection */
  rentalDuration: Scalars['BigInt'];
  /** Sum of rentalRate across the matching connection */
  rentalRate: Scalars['BigFloat'];
  /** Sum of replacementCost across the matching connection */
  replacementCost: Scalars['BigFloat'];
};

export type FilmVariancePopulationAggregates = {
  __typename?: 'FilmVariancePopulationAggregates';
  /** Population variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Population variance of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['BigFloat']>;
  /** Population variance of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['BigFloat']>;
  /** Population variance of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigFloat']>;
  /** Population variance of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigFloat']>;
};

export type FilmVarianceSampleAggregates = {
  __typename?: 'FilmVarianceSampleAggregates';
  /** Sample variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of releaseYear across the matching connection */
  releaseYear?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of rentalDuration across the matching connection */
  rentalDuration?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of rentalRate across the matching connection */
  rentalRate?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of replacementCost across the matching connection */
  replacementCost?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Film` values. */
export type FilmsConnection = {
  __typename?: 'FilmsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FilmAggregates>;
  /** A list of edges which contains the `Film` and cursor to aid in pagination. */
  edges: Array<FilmsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FilmAggregates>>;
  /** A list of `Film` objects. */
  nodes: Array<Maybe<Film>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Film` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Film` values. */
export type FilmsConnectionGroupedAggregatesArgs = {
  groupBy: Array<FilmGroupBy>;
  having?: InputMaybe<FilmHavingInput>;
};

/** A `Film` edge in the connection. */
export type FilmsEdge = {
  __typename?: 'FilmsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Film` at the end of the edge. */
  node?: Maybe<Film>;
};

/** Methods to use when ordering `Film`. */
export enum FilmsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FilmActorsAverageActorIdAsc = 'FILM_ACTORS_AVERAGE_ACTOR_ID_ASC',
  FilmActorsAverageActorIdDesc = 'FILM_ACTORS_AVERAGE_ACTOR_ID_DESC',
  FilmActorsAverageFilmIdAsc = 'FILM_ACTORS_AVERAGE_FILM_ID_ASC',
  FilmActorsAverageFilmIdDesc = 'FILM_ACTORS_AVERAGE_FILM_ID_DESC',
  FilmActorsAverageLastUpdateAsc = 'FILM_ACTORS_AVERAGE_LAST_UPDATE_ASC',
  FilmActorsAverageLastUpdateDesc = 'FILM_ACTORS_AVERAGE_LAST_UPDATE_DESC',
  FilmActorsCountAsc = 'FILM_ACTORS_COUNT_ASC',
  FilmActorsCountDesc = 'FILM_ACTORS_COUNT_DESC',
  FilmActorsDistinctCountActorIdAsc = 'FILM_ACTORS_DISTINCT_COUNT_ACTOR_ID_ASC',
  FilmActorsDistinctCountActorIdDesc = 'FILM_ACTORS_DISTINCT_COUNT_ACTOR_ID_DESC',
  FilmActorsDistinctCountFilmIdAsc = 'FILM_ACTORS_DISTINCT_COUNT_FILM_ID_ASC',
  FilmActorsDistinctCountFilmIdDesc = 'FILM_ACTORS_DISTINCT_COUNT_FILM_ID_DESC',
  FilmActorsDistinctCountLastUpdateAsc = 'FILM_ACTORS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  FilmActorsDistinctCountLastUpdateDesc = 'FILM_ACTORS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  FilmActorsMaxActorIdAsc = 'FILM_ACTORS_MAX_ACTOR_ID_ASC',
  FilmActorsMaxActorIdDesc = 'FILM_ACTORS_MAX_ACTOR_ID_DESC',
  FilmActorsMaxFilmIdAsc = 'FILM_ACTORS_MAX_FILM_ID_ASC',
  FilmActorsMaxFilmIdDesc = 'FILM_ACTORS_MAX_FILM_ID_DESC',
  FilmActorsMaxLastUpdateAsc = 'FILM_ACTORS_MAX_LAST_UPDATE_ASC',
  FilmActorsMaxLastUpdateDesc = 'FILM_ACTORS_MAX_LAST_UPDATE_DESC',
  FilmActorsMinActorIdAsc = 'FILM_ACTORS_MIN_ACTOR_ID_ASC',
  FilmActorsMinActorIdDesc = 'FILM_ACTORS_MIN_ACTOR_ID_DESC',
  FilmActorsMinFilmIdAsc = 'FILM_ACTORS_MIN_FILM_ID_ASC',
  FilmActorsMinFilmIdDesc = 'FILM_ACTORS_MIN_FILM_ID_DESC',
  FilmActorsMinLastUpdateAsc = 'FILM_ACTORS_MIN_LAST_UPDATE_ASC',
  FilmActorsMinLastUpdateDesc = 'FILM_ACTORS_MIN_LAST_UPDATE_DESC',
  FilmActorsStddevPopulationActorIdAsc = 'FILM_ACTORS_STDDEV_POPULATION_ACTOR_ID_ASC',
  FilmActorsStddevPopulationActorIdDesc = 'FILM_ACTORS_STDDEV_POPULATION_ACTOR_ID_DESC',
  FilmActorsStddevPopulationFilmIdAsc = 'FILM_ACTORS_STDDEV_POPULATION_FILM_ID_ASC',
  FilmActorsStddevPopulationFilmIdDesc = 'FILM_ACTORS_STDDEV_POPULATION_FILM_ID_DESC',
  FilmActorsStddevPopulationLastUpdateAsc = 'FILM_ACTORS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  FilmActorsStddevPopulationLastUpdateDesc = 'FILM_ACTORS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  FilmActorsStddevSampleActorIdAsc = 'FILM_ACTORS_STDDEV_SAMPLE_ACTOR_ID_ASC',
  FilmActorsStddevSampleActorIdDesc = 'FILM_ACTORS_STDDEV_SAMPLE_ACTOR_ID_DESC',
  FilmActorsStddevSampleFilmIdAsc = 'FILM_ACTORS_STDDEV_SAMPLE_FILM_ID_ASC',
  FilmActorsStddevSampleFilmIdDesc = 'FILM_ACTORS_STDDEV_SAMPLE_FILM_ID_DESC',
  FilmActorsStddevSampleLastUpdateAsc = 'FILM_ACTORS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  FilmActorsStddevSampleLastUpdateDesc = 'FILM_ACTORS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  FilmActorsSumActorIdAsc = 'FILM_ACTORS_SUM_ACTOR_ID_ASC',
  FilmActorsSumActorIdDesc = 'FILM_ACTORS_SUM_ACTOR_ID_DESC',
  FilmActorsSumFilmIdAsc = 'FILM_ACTORS_SUM_FILM_ID_ASC',
  FilmActorsSumFilmIdDesc = 'FILM_ACTORS_SUM_FILM_ID_DESC',
  FilmActorsSumLastUpdateAsc = 'FILM_ACTORS_SUM_LAST_UPDATE_ASC',
  FilmActorsSumLastUpdateDesc = 'FILM_ACTORS_SUM_LAST_UPDATE_DESC',
  FilmActorsVariancePopulationActorIdAsc = 'FILM_ACTORS_VARIANCE_POPULATION_ACTOR_ID_ASC',
  FilmActorsVariancePopulationActorIdDesc = 'FILM_ACTORS_VARIANCE_POPULATION_ACTOR_ID_DESC',
  FilmActorsVariancePopulationFilmIdAsc = 'FILM_ACTORS_VARIANCE_POPULATION_FILM_ID_ASC',
  FilmActorsVariancePopulationFilmIdDesc = 'FILM_ACTORS_VARIANCE_POPULATION_FILM_ID_DESC',
  FilmActorsVariancePopulationLastUpdateAsc = 'FILM_ACTORS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  FilmActorsVariancePopulationLastUpdateDesc = 'FILM_ACTORS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  FilmActorsVarianceSampleActorIdAsc = 'FILM_ACTORS_VARIANCE_SAMPLE_ACTOR_ID_ASC',
  FilmActorsVarianceSampleActorIdDesc = 'FILM_ACTORS_VARIANCE_SAMPLE_ACTOR_ID_DESC',
  FilmActorsVarianceSampleFilmIdAsc = 'FILM_ACTORS_VARIANCE_SAMPLE_FILM_ID_ASC',
  FilmActorsVarianceSampleFilmIdDesc = 'FILM_ACTORS_VARIANCE_SAMPLE_FILM_ID_DESC',
  FilmActorsVarianceSampleLastUpdateAsc = 'FILM_ACTORS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  FilmActorsVarianceSampleLastUpdateDesc = 'FILM_ACTORS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  FilmCategoriesAverageCategoryIdAsc = 'FILM_CATEGORIES_AVERAGE_CATEGORY_ID_ASC',
  FilmCategoriesAverageCategoryIdDesc = 'FILM_CATEGORIES_AVERAGE_CATEGORY_ID_DESC',
  FilmCategoriesAverageFilmIdAsc = 'FILM_CATEGORIES_AVERAGE_FILM_ID_ASC',
  FilmCategoriesAverageFilmIdDesc = 'FILM_CATEGORIES_AVERAGE_FILM_ID_DESC',
  FilmCategoriesAverageLastUpdateAsc = 'FILM_CATEGORIES_AVERAGE_LAST_UPDATE_ASC',
  FilmCategoriesAverageLastUpdateDesc = 'FILM_CATEGORIES_AVERAGE_LAST_UPDATE_DESC',
  FilmCategoriesCountAsc = 'FILM_CATEGORIES_COUNT_ASC',
  FilmCategoriesCountDesc = 'FILM_CATEGORIES_COUNT_DESC',
  FilmCategoriesDistinctCountCategoryIdAsc = 'FILM_CATEGORIES_DISTINCT_COUNT_CATEGORY_ID_ASC',
  FilmCategoriesDistinctCountCategoryIdDesc = 'FILM_CATEGORIES_DISTINCT_COUNT_CATEGORY_ID_DESC',
  FilmCategoriesDistinctCountFilmIdAsc = 'FILM_CATEGORIES_DISTINCT_COUNT_FILM_ID_ASC',
  FilmCategoriesDistinctCountFilmIdDesc = 'FILM_CATEGORIES_DISTINCT_COUNT_FILM_ID_DESC',
  FilmCategoriesDistinctCountLastUpdateAsc = 'FILM_CATEGORIES_DISTINCT_COUNT_LAST_UPDATE_ASC',
  FilmCategoriesDistinctCountLastUpdateDesc = 'FILM_CATEGORIES_DISTINCT_COUNT_LAST_UPDATE_DESC',
  FilmCategoriesMaxCategoryIdAsc = 'FILM_CATEGORIES_MAX_CATEGORY_ID_ASC',
  FilmCategoriesMaxCategoryIdDesc = 'FILM_CATEGORIES_MAX_CATEGORY_ID_DESC',
  FilmCategoriesMaxFilmIdAsc = 'FILM_CATEGORIES_MAX_FILM_ID_ASC',
  FilmCategoriesMaxFilmIdDesc = 'FILM_CATEGORIES_MAX_FILM_ID_DESC',
  FilmCategoriesMaxLastUpdateAsc = 'FILM_CATEGORIES_MAX_LAST_UPDATE_ASC',
  FilmCategoriesMaxLastUpdateDesc = 'FILM_CATEGORIES_MAX_LAST_UPDATE_DESC',
  FilmCategoriesMinCategoryIdAsc = 'FILM_CATEGORIES_MIN_CATEGORY_ID_ASC',
  FilmCategoriesMinCategoryIdDesc = 'FILM_CATEGORIES_MIN_CATEGORY_ID_DESC',
  FilmCategoriesMinFilmIdAsc = 'FILM_CATEGORIES_MIN_FILM_ID_ASC',
  FilmCategoriesMinFilmIdDesc = 'FILM_CATEGORIES_MIN_FILM_ID_DESC',
  FilmCategoriesMinLastUpdateAsc = 'FILM_CATEGORIES_MIN_LAST_UPDATE_ASC',
  FilmCategoriesMinLastUpdateDesc = 'FILM_CATEGORIES_MIN_LAST_UPDATE_DESC',
  FilmCategoriesStddevPopulationCategoryIdAsc = 'FILM_CATEGORIES_STDDEV_POPULATION_CATEGORY_ID_ASC',
  FilmCategoriesStddevPopulationCategoryIdDesc = 'FILM_CATEGORIES_STDDEV_POPULATION_CATEGORY_ID_DESC',
  FilmCategoriesStddevPopulationFilmIdAsc = 'FILM_CATEGORIES_STDDEV_POPULATION_FILM_ID_ASC',
  FilmCategoriesStddevPopulationFilmIdDesc = 'FILM_CATEGORIES_STDDEV_POPULATION_FILM_ID_DESC',
  FilmCategoriesStddevPopulationLastUpdateAsc = 'FILM_CATEGORIES_STDDEV_POPULATION_LAST_UPDATE_ASC',
  FilmCategoriesStddevPopulationLastUpdateDesc = 'FILM_CATEGORIES_STDDEV_POPULATION_LAST_UPDATE_DESC',
  FilmCategoriesStddevSampleCategoryIdAsc = 'FILM_CATEGORIES_STDDEV_SAMPLE_CATEGORY_ID_ASC',
  FilmCategoriesStddevSampleCategoryIdDesc = 'FILM_CATEGORIES_STDDEV_SAMPLE_CATEGORY_ID_DESC',
  FilmCategoriesStddevSampleFilmIdAsc = 'FILM_CATEGORIES_STDDEV_SAMPLE_FILM_ID_ASC',
  FilmCategoriesStddevSampleFilmIdDesc = 'FILM_CATEGORIES_STDDEV_SAMPLE_FILM_ID_DESC',
  FilmCategoriesStddevSampleLastUpdateAsc = 'FILM_CATEGORIES_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  FilmCategoriesStddevSampleLastUpdateDesc = 'FILM_CATEGORIES_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  FilmCategoriesSumCategoryIdAsc = 'FILM_CATEGORIES_SUM_CATEGORY_ID_ASC',
  FilmCategoriesSumCategoryIdDesc = 'FILM_CATEGORIES_SUM_CATEGORY_ID_DESC',
  FilmCategoriesSumFilmIdAsc = 'FILM_CATEGORIES_SUM_FILM_ID_ASC',
  FilmCategoriesSumFilmIdDesc = 'FILM_CATEGORIES_SUM_FILM_ID_DESC',
  FilmCategoriesSumLastUpdateAsc = 'FILM_CATEGORIES_SUM_LAST_UPDATE_ASC',
  FilmCategoriesSumLastUpdateDesc = 'FILM_CATEGORIES_SUM_LAST_UPDATE_DESC',
  FilmCategoriesVariancePopulationCategoryIdAsc = 'FILM_CATEGORIES_VARIANCE_POPULATION_CATEGORY_ID_ASC',
  FilmCategoriesVariancePopulationCategoryIdDesc = 'FILM_CATEGORIES_VARIANCE_POPULATION_CATEGORY_ID_DESC',
  FilmCategoriesVariancePopulationFilmIdAsc = 'FILM_CATEGORIES_VARIANCE_POPULATION_FILM_ID_ASC',
  FilmCategoriesVariancePopulationFilmIdDesc = 'FILM_CATEGORIES_VARIANCE_POPULATION_FILM_ID_DESC',
  FilmCategoriesVariancePopulationLastUpdateAsc = 'FILM_CATEGORIES_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  FilmCategoriesVariancePopulationLastUpdateDesc = 'FILM_CATEGORIES_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  FilmCategoriesVarianceSampleCategoryIdAsc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_CATEGORY_ID_ASC',
  FilmCategoriesVarianceSampleCategoryIdDesc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_CATEGORY_ID_DESC',
  FilmCategoriesVarianceSampleFilmIdAsc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_FILM_ID_ASC',
  FilmCategoriesVarianceSampleFilmIdDesc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_FILM_ID_DESC',
  FilmCategoriesVarianceSampleLastUpdateAsc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  FilmCategoriesVarianceSampleLastUpdateDesc = 'FILM_CATEGORIES_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  FulltextAsc = 'FULLTEXT_ASC',
  FulltextDesc = 'FULLTEXT_DESC',
  InventoriesAverageFilmIdAsc = 'INVENTORIES_AVERAGE_FILM_ID_ASC',
  InventoriesAverageFilmIdDesc = 'INVENTORIES_AVERAGE_FILM_ID_DESC',
  InventoriesAverageInventoryIdAsc = 'INVENTORIES_AVERAGE_INVENTORY_ID_ASC',
  InventoriesAverageInventoryIdDesc = 'INVENTORIES_AVERAGE_INVENTORY_ID_DESC',
  InventoriesAverageLastUpdateAsc = 'INVENTORIES_AVERAGE_LAST_UPDATE_ASC',
  InventoriesAverageLastUpdateDesc = 'INVENTORIES_AVERAGE_LAST_UPDATE_DESC',
  InventoriesAverageStoreIdAsc = 'INVENTORIES_AVERAGE_STORE_ID_ASC',
  InventoriesAverageStoreIdDesc = 'INVENTORIES_AVERAGE_STORE_ID_DESC',
  InventoriesCountAsc = 'INVENTORIES_COUNT_ASC',
  InventoriesCountDesc = 'INVENTORIES_COUNT_DESC',
  InventoriesDistinctCountFilmIdAsc = 'INVENTORIES_DISTINCT_COUNT_FILM_ID_ASC',
  InventoriesDistinctCountFilmIdDesc = 'INVENTORIES_DISTINCT_COUNT_FILM_ID_DESC',
  InventoriesDistinctCountInventoryIdAsc = 'INVENTORIES_DISTINCT_COUNT_INVENTORY_ID_ASC',
  InventoriesDistinctCountInventoryIdDesc = 'INVENTORIES_DISTINCT_COUNT_INVENTORY_ID_DESC',
  InventoriesDistinctCountLastUpdateAsc = 'INVENTORIES_DISTINCT_COUNT_LAST_UPDATE_ASC',
  InventoriesDistinctCountLastUpdateDesc = 'INVENTORIES_DISTINCT_COUNT_LAST_UPDATE_DESC',
  InventoriesDistinctCountStoreIdAsc = 'INVENTORIES_DISTINCT_COUNT_STORE_ID_ASC',
  InventoriesDistinctCountStoreIdDesc = 'INVENTORIES_DISTINCT_COUNT_STORE_ID_DESC',
  InventoriesMaxFilmIdAsc = 'INVENTORIES_MAX_FILM_ID_ASC',
  InventoriesMaxFilmIdDesc = 'INVENTORIES_MAX_FILM_ID_DESC',
  InventoriesMaxInventoryIdAsc = 'INVENTORIES_MAX_INVENTORY_ID_ASC',
  InventoriesMaxInventoryIdDesc = 'INVENTORIES_MAX_INVENTORY_ID_DESC',
  InventoriesMaxLastUpdateAsc = 'INVENTORIES_MAX_LAST_UPDATE_ASC',
  InventoriesMaxLastUpdateDesc = 'INVENTORIES_MAX_LAST_UPDATE_DESC',
  InventoriesMaxStoreIdAsc = 'INVENTORIES_MAX_STORE_ID_ASC',
  InventoriesMaxStoreIdDesc = 'INVENTORIES_MAX_STORE_ID_DESC',
  InventoriesMinFilmIdAsc = 'INVENTORIES_MIN_FILM_ID_ASC',
  InventoriesMinFilmIdDesc = 'INVENTORIES_MIN_FILM_ID_DESC',
  InventoriesMinInventoryIdAsc = 'INVENTORIES_MIN_INVENTORY_ID_ASC',
  InventoriesMinInventoryIdDesc = 'INVENTORIES_MIN_INVENTORY_ID_DESC',
  InventoriesMinLastUpdateAsc = 'INVENTORIES_MIN_LAST_UPDATE_ASC',
  InventoriesMinLastUpdateDesc = 'INVENTORIES_MIN_LAST_UPDATE_DESC',
  InventoriesMinStoreIdAsc = 'INVENTORIES_MIN_STORE_ID_ASC',
  InventoriesMinStoreIdDesc = 'INVENTORIES_MIN_STORE_ID_DESC',
  InventoriesStddevPopulationFilmIdAsc = 'INVENTORIES_STDDEV_POPULATION_FILM_ID_ASC',
  InventoriesStddevPopulationFilmIdDesc = 'INVENTORIES_STDDEV_POPULATION_FILM_ID_DESC',
  InventoriesStddevPopulationInventoryIdAsc = 'INVENTORIES_STDDEV_POPULATION_INVENTORY_ID_ASC',
  InventoriesStddevPopulationInventoryIdDesc = 'INVENTORIES_STDDEV_POPULATION_INVENTORY_ID_DESC',
  InventoriesStddevPopulationLastUpdateAsc = 'INVENTORIES_STDDEV_POPULATION_LAST_UPDATE_ASC',
  InventoriesStddevPopulationLastUpdateDesc = 'INVENTORIES_STDDEV_POPULATION_LAST_UPDATE_DESC',
  InventoriesStddevPopulationStoreIdAsc = 'INVENTORIES_STDDEV_POPULATION_STORE_ID_ASC',
  InventoriesStddevPopulationStoreIdDesc = 'INVENTORIES_STDDEV_POPULATION_STORE_ID_DESC',
  InventoriesStddevSampleFilmIdAsc = 'INVENTORIES_STDDEV_SAMPLE_FILM_ID_ASC',
  InventoriesStddevSampleFilmIdDesc = 'INVENTORIES_STDDEV_SAMPLE_FILM_ID_DESC',
  InventoriesStddevSampleInventoryIdAsc = 'INVENTORIES_STDDEV_SAMPLE_INVENTORY_ID_ASC',
  InventoriesStddevSampleInventoryIdDesc = 'INVENTORIES_STDDEV_SAMPLE_INVENTORY_ID_DESC',
  InventoriesStddevSampleLastUpdateAsc = 'INVENTORIES_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  InventoriesStddevSampleLastUpdateDesc = 'INVENTORIES_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  InventoriesStddevSampleStoreIdAsc = 'INVENTORIES_STDDEV_SAMPLE_STORE_ID_ASC',
  InventoriesStddevSampleStoreIdDesc = 'INVENTORIES_STDDEV_SAMPLE_STORE_ID_DESC',
  InventoriesSumFilmIdAsc = 'INVENTORIES_SUM_FILM_ID_ASC',
  InventoriesSumFilmIdDesc = 'INVENTORIES_SUM_FILM_ID_DESC',
  InventoriesSumInventoryIdAsc = 'INVENTORIES_SUM_INVENTORY_ID_ASC',
  InventoriesSumInventoryIdDesc = 'INVENTORIES_SUM_INVENTORY_ID_DESC',
  InventoriesSumLastUpdateAsc = 'INVENTORIES_SUM_LAST_UPDATE_ASC',
  InventoriesSumLastUpdateDesc = 'INVENTORIES_SUM_LAST_UPDATE_DESC',
  InventoriesSumStoreIdAsc = 'INVENTORIES_SUM_STORE_ID_ASC',
  InventoriesSumStoreIdDesc = 'INVENTORIES_SUM_STORE_ID_DESC',
  InventoriesVariancePopulationFilmIdAsc = 'INVENTORIES_VARIANCE_POPULATION_FILM_ID_ASC',
  InventoriesVariancePopulationFilmIdDesc = 'INVENTORIES_VARIANCE_POPULATION_FILM_ID_DESC',
  InventoriesVariancePopulationInventoryIdAsc = 'INVENTORIES_VARIANCE_POPULATION_INVENTORY_ID_ASC',
  InventoriesVariancePopulationInventoryIdDesc = 'INVENTORIES_VARIANCE_POPULATION_INVENTORY_ID_DESC',
  InventoriesVariancePopulationLastUpdateAsc = 'INVENTORIES_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  InventoriesVariancePopulationLastUpdateDesc = 'INVENTORIES_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  InventoriesVariancePopulationStoreIdAsc = 'INVENTORIES_VARIANCE_POPULATION_STORE_ID_ASC',
  InventoriesVariancePopulationStoreIdDesc = 'INVENTORIES_VARIANCE_POPULATION_STORE_ID_DESC',
  InventoriesVarianceSampleFilmIdAsc = 'INVENTORIES_VARIANCE_SAMPLE_FILM_ID_ASC',
  InventoriesVarianceSampleFilmIdDesc = 'INVENTORIES_VARIANCE_SAMPLE_FILM_ID_DESC',
  InventoriesVarianceSampleInventoryIdAsc = 'INVENTORIES_VARIANCE_SAMPLE_INVENTORY_ID_ASC',
  InventoriesVarianceSampleInventoryIdDesc = 'INVENTORIES_VARIANCE_SAMPLE_INVENTORY_ID_DESC',
  InventoriesVarianceSampleLastUpdateAsc = 'INVENTORIES_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  InventoriesVarianceSampleLastUpdateDesc = 'INVENTORIES_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  InventoriesVarianceSampleStoreIdAsc = 'INVENTORIES_VARIANCE_SAMPLE_STORE_ID_ASC',
  InventoriesVarianceSampleStoreIdDesc = 'INVENTORIES_VARIANCE_SAMPLE_STORE_ID_DESC',
  LanguageIdAsc = 'LANGUAGE_ID_ASC',
  LanguageIdDesc = 'LANGUAGE_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  ReleaseYearAsc = 'RELEASE_YEAR_ASC',
  ReleaseYearDesc = 'RELEASE_YEAR_DESC',
  RentalDurationAsc = 'RENTAL_DURATION_ASC',
  RentalDurationDesc = 'RENTAL_DURATION_DESC',
  RentalRateAsc = 'RENTAL_RATE_ASC',
  RentalRateDesc = 'RENTAL_RATE_DESC',
  ReplacementCostAsc = 'REPLACEMENT_COST_ASC',
  ReplacementCostDesc = 'REPLACEMENT_COST_DESC',
  SpecialFeaturesAsc = 'SPECIAL_FEATURES_ASC',
  SpecialFeaturesDesc = 'SPECIAL_FEATURES_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** All input for the `getCustomerBalance` mutation. */
export type GetCustomerBalanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  pCustomerId?: InputMaybe<Scalars['Int']>;
  pEffectiveDate?: InputMaybe<Scalars['Datetime']>;
};

/** The output of our `getCustomerBalance` mutation. */
export type GetCustomerBalancePayload = {
  __typename?: 'GetCustomerBalancePayload';
  bigFloat?: Maybe<Scalars['BigFloat']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type HavingBigfloatFilter = {
  equalTo?: InputMaybe<Scalars['BigFloat']>;
  greaterThan?: InputMaybe<Scalars['BigFloat']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  lessThan?: InputMaybe<Scalars['BigFloat']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  notEqualTo?: InputMaybe<Scalars['BigFloat']>;
};

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']>;
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  lessThan?: InputMaybe<Scalars['Datetime']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
};

export type HavingIntFilter = {
  equalTo?: InputMaybe<Scalars['Int']>;
  greaterThan?: InputMaybe<Scalars['Int']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  lessThan?: InputMaybe<Scalars['Int']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  notEqualTo?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Inventory` values. */
export type InventoriesConnection = {
  __typename?: 'InventoriesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<InventoryAggregates>;
  /** A list of edges which contains the `Inventory` and cursor to aid in pagination. */
  edges: Array<InventoriesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<InventoryAggregates>>;
  /** A list of `Inventory` objects. */
  nodes: Array<Maybe<Inventory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Inventory` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Inventory` values. */
export type InventoriesConnectionGroupedAggregatesArgs = {
  groupBy: Array<InventoryGroupBy>;
  having?: InputMaybe<InventoryHavingInput>;
};

/** A `Inventory` edge in the connection. */
export type InventoriesEdge = {
  __typename?: 'InventoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Inventory` at the end of the edge. */
  node?: Maybe<Inventory>;
};

/** Methods to use when ordering `Inventory`. */
export enum InventoriesOrderBy {
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  InventoryIdAsc = 'INVENTORY_ID_ASC',
  InventoryIdDesc = 'INVENTORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalsAverageCustomerIdAsc = 'RENTALS_AVERAGE_CUSTOMER_ID_ASC',
  RentalsAverageCustomerIdDesc = 'RENTALS_AVERAGE_CUSTOMER_ID_DESC',
  RentalsAverageInventoryIdAsc = 'RENTALS_AVERAGE_INVENTORY_ID_ASC',
  RentalsAverageInventoryIdDesc = 'RENTALS_AVERAGE_INVENTORY_ID_DESC',
  RentalsAverageLastUpdateAsc = 'RENTALS_AVERAGE_LAST_UPDATE_ASC',
  RentalsAverageLastUpdateDesc = 'RENTALS_AVERAGE_LAST_UPDATE_DESC',
  RentalsAverageRentalDateAsc = 'RENTALS_AVERAGE_RENTAL_DATE_ASC',
  RentalsAverageRentalDateDesc = 'RENTALS_AVERAGE_RENTAL_DATE_DESC',
  RentalsAverageRentalIdAsc = 'RENTALS_AVERAGE_RENTAL_ID_ASC',
  RentalsAverageRentalIdDesc = 'RENTALS_AVERAGE_RENTAL_ID_DESC',
  RentalsAverageReturnDateAsc = 'RENTALS_AVERAGE_RETURN_DATE_ASC',
  RentalsAverageReturnDateDesc = 'RENTALS_AVERAGE_RETURN_DATE_DESC',
  RentalsAverageStaffIdAsc = 'RENTALS_AVERAGE_STAFF_ID_ASC',
  RentalsAverageStaffIdDesc = 'RENTALS_AVERAGE_STAFF_ID_DESC',
  RentalsCountAsc = 'RENTALS_COUNT_ASC',
  RentalsCountDesc = 'RENTALS_COUNT_DESC',
  RentalsDistinctCountCustomerIdAsc = 'RENTALS_DISTINCT_COUNT_CUSTOMER_ID_ASC',
  RentalsDistinctCountCustomerIdDesc = 'RENTALS_DISTINCT_COUNT_CUSTOMER_ID_DESC',
  RentalsDistinctCountInventoryIdAsc = 'RENTALS_DISTINCT_COUNT_INVENTORY_ID_ASC',
  RentalsDistinctCountInventoryIdDesc = 'RENTALS_DISTINCT_COUNT_INVENTORY_ID_DESC',
  RentalsDistinctCountLastUpdateAsc = 'RENTALS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  RentalsDistinctCountLastUpdateDesc = 'RENTALS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  RentalsDistinctCountRentalDateAsc = 'RENTALS_DISTINCT_COUNT_RENTAL_DATE_ASC',
  RentalsDistinctCountRentalDateDesc = 'RENTALS_DISTINCT_COUNT_RENTAL_DATE_DESC',
  RentalsDistinctCountRentalIdAsc = 'RENTALS_DISTINCT_COUNT_RENTAL_ID_ASC',
  RentalsDistinctCountRentalIdDesc = 'RENTALS_DISTINCT_COUNT_RENTAL_ID_DESC',
  RentalsDistinctCountReturnDateAsc = 'RENTALS_DISTINCT_COUNT_RETURN_DATE_ASC',
  RentalsDistinctCountReturnDateDesc = 'RENTALS_DISTINCT_COUNT_RETURN_DATE_DESC',
  RentalsDistinctCountStaffIdAsc = 'RENTALS_DISTINCT_COUNT_STAFF_ID_ASC',
  RentalsDistinctCountStaffIdDesc = 'RENTALS_DISTINCT_COUNT_STAFF_ID_DESC',
  RentalsMaxCustomerIdAsc = 'RENTALS_MAX_CUSTOMER_ID_ASC',
  RentalsMaxCustomerIdDesc = 'RENTALS_MAX_CUSTOMER_ID_DESC',
  RentalsMaxInventoryIdAsc = 'RENTALS_MAX_INVENTORY_ID_ASC',
  RentalsMaxInventoryIdDesc = 'RENTALS_MAX_INVENTORY_ID_DESC',
  RentalsMaxLastUpdateAsc = 'RENTALS_MAX_LAST_UPDATE_ASC',
  RentalsMaxLastUpdateDesc = 'RENTALS_MAX_LAST_UPDATE_DESC',
  RentalsMaxRentalDateAsc = 'RENTALS_MAX_RENTAL_DATE_ASC',
  RentalsMaxRentalDateDesc = 'RENTALS_MAX_RENTAL_DATE_DESC',
  RentalsMaxRentalIdAsc = 'RENTALS_MAX_RENTAL_ID_ASC',
  RentalsMaxRentalIdDesc = 'RENTALS_MAX_RENTAL_ID_DESC',
  RentalsMaxReturnDateAsc = 'RENTALS_MAX_RETURN_DATE_ASC',
  RentalsMaxReturnDateDesc = 'RENTALS_MAX_RETURN_DATE_DESC',
  RentalsMaxStaffIdAsc = 'RENTALS_MAX_STAFF_ID_ASC',
  RentalsMaxStaffIdDesc = 'RENTALS_MAX_STAFF_ID_DESC',
  RentalsMinCustomerIdAsc = 'RENTALS_MIN_CUSTOMER_ID_ASC',
  RentalsMinCustomerIdDesc = 'RENTALS_MIN_CUSTOMER_ID_DESC',
  RentalsMinInventoryIdAsc = 'RENTALS_MIN_INVENTORY_ID_ASC',
  RentalsMinInventoryIdDesc = 'RENTALS_MIN_INVENTORY_ID_DESC',
  RentalsMinLastUpdateAsc = 'RENTALS_MIN_LAST_UPDATE_ASC',
  RentalsMinLastUpdateDesc = 'RENTALS_MIN_LAST_UPDATE_DESC',
  RentalsMinRentalDateAsc = 'RENTALS_MIN_RENTAL_DATE_ASC',
  RentalsMinRentalDateDesc = 'RENTALS_MIN_RENTAL_DATE_DESC',
  RentalsMinRentalIdAsc = 'RENTALS_MIN_RENTAL_ID_ASC',
  RentalsMinRentalIdDesc = 'RENTALS_MIN_RENTAL_ID_DESC',
  RentalsMinReturnDateAsc = 'RENTALS_MIN_RETURN_DATE_ASC',
  RentalsMinReturnDateDesc = 'RENTALS_MIN_RETURN_DATE_DESC',
  RentalsMinStaffIdAsc = 'RENTALS_MIN_STAFF_ID_ASC',
  RentalsMinStaffIdDesc = 'RENTALS_MIN_STAFF_ID_DESC',
  RentalsStddevPopulationCustomerIdAsc = 'RENTALS_STDDEV_POPULATION_CUSTOMER_ID_ASC',
  RentalsStddevPopulationCustomerIdDesc = 'RENTALS_STDDEV_POPULATION_CUSTOMER_ID_DESC',
  RentalsStddevPopulationInventoryIdAsc = 'RENTALS_STDDEV_POPULATION_INVENTORY_ID_ASC',
  RentalsStddevPopulationInventoryIdDesc = 'RENTALS_STDDEV_POPULATION_INVENTORY_ID_DESC',
  RentalsStddevPopulationLastUpdateAsc = 'RENTALS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  RentalsStddevPopulationLastUpdateDesc = 'RENTALS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  RentalsStddevPopulationRentalDateAsc = 'RENTALS_STDDEV_POPULATION_RENTAL_DATE_ASC',
  RentalsStddevPopulationRentalDateDesc = 'RENTALS_STDDEV_POPULATION_RENTAL_DATE_DESC',
  RentalsStddevPopulationRentalIdAsc = 'RENTALS_STDDEV_POPULATION_RENTAL_ID_ASC',
  RentalsStddevPopulationRentalIdDesc = 'RENTALS_STDDEV_POPULATION_RENTAL_ID_DESC',
  RentalsStddevPopulationReturnDateAsc = 'RENTALS_STDDEV_POPULATION_RETURN_DATE_ASC',
  RentalsStddevPopulationReturnDateDesc = 'RENTALS_STDDEV_POPULATION_RETURN_DATE_DESC',
  RentalsStddevPopulationStaffIdAsc = 'RENTALS_STDDEV_POPULATION_STAFF_ID_ASC',
  RentalsStddevPopulationStaffIdDesc = 'RENTALS_STDDEV_POPULATION_STAFF_ID_DESC',
  RentalsStddevSampleCustomerIdAsc = 'RENTALS_STDDEV_SAMPLE_CUSTOMER_ID_ASC',
  RentalsStddevSampleCustomerIdDesc = 'RENTALS_STDDEV_SAMPLE_CUSTOMER_ID_DESC',
  RentalsStddevSampleInventoryIdAsc = 'RENTALS_STDDEV_SAMPLE_INVENTORY_ID_ASC',
  RentalsStddevSampleInventoryIdDesc = 'RENTALS_STDDEV_SAMPLE_INVENTORY_ID_DESC',
  RentalsStddevSampleLastUpdateAsc = 'RENTALS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  RentalsStddevSampleLastUpdateDesc = 'RENTALS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  RentalsStddevSampleRentalDateAsc = 'RENTALS_STDDEV_SAMPLE_RENTAL_DATE_ASC',
  RentalsStddevSampleRentalDateDesc = 'RENTALS_STDDEV_SAMPLE_RENTAL_DATE_DESC',
  RentalsStddevSampleRentalIdAsc = 'RENTALS_STDDEV_SAMPLE_RENTAL_ID_ASC',
  RentalsStddevSampleRentalIdDesc = 'RENTALS_STDDEV_SAMPLE_RENTAL_ID_DESC',
  RentalsStddevSampleReturnDateAsc = 'RENTALS_STDDEV_SAMPLE_RETURN_DATE_ASC',
  RentalsStddevSampleReturnDateDesc = 'RENTALS_STDDEV_SAMPLE_RETURN_DATE_DESC',
  RentalsStddevSampleStaffIdAsc = 'RENTALS_STDDEV_SAMPLE_STAFF_ID_ASC',
  RentalsStddevSampleStaffIdDesc = 'RENTALS_STDDEV_SAMPLE_STAFF_ID_DESC',
  RentalsSumCustomerIdAsc = 'RENTALS_SUM_CUSTOMER_ID_ASC',
  RentalsSumCustomerIdDesc = 'RENTALS_SUM_CUSTOMER_ID_DESC',
  RentalsSumInventoryIdAsc = 'RENTALS_SUM_INVENTORY_ID_ASC',
  RentalsSumInventoryIdDesc = 'RENTALS_SUM_INVENTORY_ID_DESC',
  RentalsSumLastUpdateAsc = 'RENTALS_SUM_LAST_UPDATE_ASC',
  RentalsSumLastUpdateDesc = 'RENTALS_SUM_LAST_UPDATE_DESC',
  RentalsSumRentalDateAsc = 'RENTALS_SUM_RENTAL_DATE_ASC',
  RentalsSumRentalDateDesc = 'RENTALS_SUM_RENTAL_DATE_DESC',
  RentalsSumRentalIdAsc = 'RENTALS_SUM_RENTAL_ID_ASC',
  RentalsSumRentalIdDesc = 'RENTALS_SUM_RENTAL_ID_DESC',
  RentalsSumReturnDateAsc = 'RENTALS_SUM_RETURN_DATE_ASC',
  RentalsSumReturnDateDesc = 'RENTALS_SUM_RETURN_DATE_DESC',
  RentalsSumStaffIdAsc = 'RENTALS_SUM_STAFF_ID_ASC',
  RentalsSumStaffIdDesc = 'RENTALS_SUM_STAFF_ID_DESC',
  RentalsVariancePopulationCustomerIdAsc = 'RENTALS_VARIANCE_POPULATION_CUSTOMER_ID_ASC',
  RentalsVariancePopulationCustomerIdDesc = 'RENTALS_VARIANCE_POPULATION_CUSTOMER_ID_DESC',
  RentalsVariancePopulationInventoryIdAsc = 'RENTALS_VARIANCE_POPULATION_INVENTORY_ID_ASC',
  RentalsVariancePopulationInventoryIdDesc = 'RENTALS_VARIANCE_POPULATION_INVENTORY_ID_DESC',
  RentalsVariancePopulationLastUpdateAsc = 'RENTALS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  RentalsVariancePopulationLastUpdateDesc = 'RENTALS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  RentalsVariancePopulationRentalDateAsc = 'RENTALS_VARIANCE_POPULATION_RENTAL_DATE_ASC',
  RentalsVariancePopulationRentalDateDesc = 'RENTALS_VARIANCE_POPULATION_RENTAL_DATE_DESC',
  RentalsVariancePopulationRentalIdAsc = 'RENTALS_VARIANCE_POPULATION_RENTAL_ID_ASC',
  RentalsVariancePopulationRentalIdDesc = 'RENTALS_VARIANCE_POPULATION_RENTAL_ID_DESC',
  RentalsVariancePopulationReturnDateAsc = 'RENTALS_VARIANCE_POPULATION_RETURN_DATE_ASC',
  RentalsVariancePopulationReturnDateDesc = 'RENTALS_VARIANCE_POPULATION_RETURN_DATE_DESC',
  RentalsVariancePopulationStaffIdAsc = 'RENTALS_VARIANCE_POPULATION_STAFF_ID_ASC',
  RentalsVariancePopulationStaffIdDesc = 'RENTALS_VARIANCE_POPULATION_STAFF_ID_DESC',
  RentalsVarianceSampleCustomerIdAsc = 'RENTALS_VARIANCE_SAMPLE_CUSTOMER_ID_ASC',
  RentalsVarianceSampleCustomerIdDesc = 'RENTALS_VARIANCE_SAMPLE_CUSTOMER_ID_DESC',
  RentalsVarianceSampleInventoryIdAsc = 'RENTALS_VARIANCE_SAMPLE_INVENTORY_ID_ASC',
  RentalsVarianceSampleInventoryIdDesc = 'RENTALS_VARIANCE_SAMPLE_INVENTORY_ID_DESC',
  RentalsVarianceSampleLastUpdateAsc = 'RENTALS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  RentalsVarianceSampleLastUpdateDesc = 'RENTALS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  RentalsVarianceSampleRentalDateAsc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_DATE_ASC',
  RentalsVarianceSampleRentalDateDesc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_DATE_DESC',
  RentalsVarianceSampleRentalIdAsc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_ID_ASC',
  RentalsVarianceSampleRentalIdDesc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_ID_DESC',
  RentalsVarianceSampleReturnDateAsc = 'RENTALS_VARIANCE_SAMPLE_RETURN_DATE_ASC',
  RentalsVarianceSampleReturnDateDesc = 'RENTALS_VARIANCE_SAMPLE_RETURN_DATE_DESC',
  RentalsVarianceSampleStaffIdAsc = 'RENTALS_VARIANCE_SAMPLE_STAFF_ID_ASC',
  RentalsVarianceSampleStaffIdDesc = 'RENTALS_VARIANCE_SAMPLE_STAFF_ID_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

export type Inventory = Node & {
  __typename?: 'Inventory';
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>;
  filmId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  inventoryId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Rental`. */
  rentals: RentalsConnection;
  storeId: Scalars['Int'];
};


export type InventoryRentalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

export type InventoryAggregates = {
  __typename?: 'InventoryAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<InventoryAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<InventoryDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<InventoryMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<InventoryMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<InventoryStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<InventoryStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<InventorySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<InventoryVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<InventoryVarianceSampleAggregates>;
};

export type InventoryAverageAggregates = {
  __typename?: 'InventoryAverageAggregates';
  /** Mean average of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `Inventory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InventoryCondition = {
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
};

export type InventoryDistinctCountAggregates = {
  __typename?: 'InventoryDistinctCountAggregates';
  /** Distinct count of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Inventory` for usage during aggregation. */
export enum InventoryGroupBy {
  FilmId = 'FILM_ID',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  StoreId = 'STORE_ID'
}

export type InventoryHavingAverageInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type InventoryHavingDistinctCountInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Inventory` aggregates. */
export type InventoryHavingInput = {
  AND?: InputMaybe<Array<InventoryHavingInput>>;
  OR?: InputMaybe<Array<InventoryHavingInput>>;
  average?: InputMaybe<InventoryHavingAverageInput>;
  distinctCount?: InputMaybe<InventoryHavingDistinctCountInput>;
  max?: InputMaybe<InventoryHavingMaxInput>;
  min?: InputMaybe<InventoryHavingMinInput>;
  stddevPopulation?: InputMaybe<InventoryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<InventoryHavingStddevSampleInput>;
  sum?: InputMaybe<InventoryHavingSumInput>;
  variancePopulation?: InputMaybe<InventoryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<InventoryHavingVarianceSampleInput>;
};

export type InventoryHavingMaxInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type InventoryHavingMinInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type InventoryHavingStddevPopulationInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type InventoryHavingStddevSampleInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type InventoryHavingSumInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type InventoryHavingVariancePopulationInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type InventoryHavingVarianceSampleInput = {
  filmId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** All input for the `inventoryHeldByCustomer` mutation. */
export type InventoryHeldByCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  pInventoryId?: InputMaybe<Scalars['Int']>;
};

/** The output of our `inventoryHeldByCustomer` mutation. */
export type InventoryHeldByCustomerPayload = {
  __typename?: 'InventoryHeldByCustomerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `inventoryInStock` mutation. */
export type InventoryInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  pInventoryId?: InputMaybe<Scalars['Int']>;
};

/** The output of our `inventoryInStock` mutation. */
export type InventoryInStockPayload = {
  __typename?: 'InventoryInStockPayload';
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** An input for mutations affecting `Inventory` */
export type InventoryInput = {
  filmId: Scalars['Int'];
  inventoryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  storeId: Scalars['Int'];
};

export type InventoryMaxAggregates = {
  __typename?: 'InventoryMaxAggregates';
  /** Maximum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
  /** Maximum of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['Int']>;
  /** Maximum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

export type InventoryMinAggregates = {
  __typename?: 'InventoryMinAggregates';
  /** Minimum of filmId across the matching connection */
  filmId?: Maybe<Scalars['Int']>;
  /** Minimum of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['Int']>;
  /** Minimum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Inventory`. Fields that are set will be updated. */
export type InventoryPatch = {
  filmId?: InputMaybe<Scalars['Int']>;
  inventoryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

export type InventoryStddevPopulationAggregates = {
  __typename?: 'InventoryStddevPopulationAggregates';
  /** Population standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type InventoryStddevSampleAggregates = {
  __typename?: 'InventoryStddevSampleAggregates';
  /** Sample standard deviation of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type InventorySumAggregates = {
  __typename?: 'InventorySumAggregates';
  /** Sum of filmId across the matching connection */
  filmId: Scalars['BigInt'];
  /** Sum of inventoryId across the matching connection */
  inventoryId: Scalars['BigInt'];
  /** Sum of storeId across the matching connection */
  storeId: Scalars['BigInt'];
};

export type InventoryVariancePopulationAggregates = {
  __typename?: 'InventoryVariancePopulationAggregates';
  /** Population variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type InventoryVarianceSampleAggregates = {
  __typename?: 'InventoryVarianceSampleAggregates';
  /** Sample variance of filmId across the matching connection */
  filmId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type Language = Node & {
  __typename?: 'Language';
  /** Reads and enables pagination through a set of `Film`. */
  films: FilmsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  languageId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  name: Scalars['String'];
};


export type LanguageFilmsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

export type LanguageAggregates = {
  __typename?: 'LanguageAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<LanguageAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<LanguageDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<LanguageMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<LanguageMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<LanguageStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<LanguageStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<LanguageSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<LanguageVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<LanguageVarianceSampleAggregates>;
};

export type LanguageAverageAggregates = {
  __typename?: 'LanguageAverageAggregates';
  /** Mean average of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LanguageCondition = {
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

export type LanguageDistinctCountAggregates = {
  __typename?: 'LanguageDistinctCountAggregates';
  /** Distinct count of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Language` for usage during aggregation. */
export enum LanguageGroupBy {
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  Name = 'NAME'
}

export type LanguageHavingAverageInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type LanguageHavingDistinctCountInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Language` aggregates. */
export type LanguageHavingInput = {
  AND?: InputMaybe<Array<LanguageHavingInput>>;
  OR?: InputMaybe<Array<LanguageHavingInput>>;
  average?: InputMaybe<LanguageHavingAverageInput>;
  distinctCount?: InputMaybe<LanguageHavingDistinctCountInput>;
  max?: InputMaybe<LanguageHavingMaxInput>;
  min?: InputMaybe<LanguageHavingMinInput>;
  stddevPopulation?: InputMaybe<LanguageHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<LanguageHavingStddevSampleInput>;
  sum?: InputMaybe<LanguageHavingSumInput>;
  variancePopulation?: InputMaybe<LanguageHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<LanguageHavingVarianceSampleInput>;
};

export type LanguageHavingMaxInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type LanguageHavingMinInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type LanguageHavingStddevPopulationInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type LanguageHavingStddevSampleInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type LanguageHavingSumInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type LanguageHavingVariancePopulationInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

export type LanguageHavingVarianceSampleInput = {
  languageId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Language` */
export type LanguageInput = {
  languageId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  name: Scalars['String'];
};

export type LanguageMaxAggregates = {
  __typename?: 'LanguageMaxAggregates';
  /** Maximum of languageId across the matching connection */
  languageId?: Maybe<Scalars['Int']>;
};

export type LanguageMinAggregates = {
  __typename?: 'LanguageMinAggregates';
  /** Minimum of languageId across the matching connection */
  languageId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Language`. Fields that are set will be updated. */
export type LanguagePatch = {
  languageId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LanguageStddevPopulationAggregates = {
  __typename?: 'LanguageStddevPopulationAggregates';
  /** Population standard deviation of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
};

export type LanguageStddevSampleAggregates = {
  __typename?: 'LanguageStddevSampleAggregates';
  /** Sample standard deviation of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
};

export type LanguageSumAggregates = {
  __typename?: 'LanguageSumAggregates';
  /** Sum of languageId across the matching connection */
  languageId: Scalars['BigInt'];
};

export type LanguageVariancePopulationAggregates = {
  __typename?: 'LanguageVariancePopulationAggregates';
  /** Population variance of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
};

export type LanguageVarianceSampleAggregates = {
  __typename?: 'LanguageVarianceSampleAggregates';
  /** Sample variance of languageId across the matching connection */
  languageId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Language` values. */
export type LanguagesConnection = {
  __typename?: 'LanguagesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<LanguageAggregates>;
  /** A list of edges which contains the `Language` and cursor to aid in pagination. */
  edges: Array<LanguagesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<LanguageAggregates>>;
  /** A list of `Language` objects. */
  nodes: Array<Maybe<Language>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Language` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Language` values. */
export type LanguagesConnectionGroupedAggregatesArgs = {
  groupBy: Array<LanguageGroupBy>;
  having?: InputMaybe<LanguageHavingInput>;
};

/** A `Language` edge in the connection. */
export type LanguagesEdge = {
  __typename?: 'LanguagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Language` at the end of the edge. */
  node?: Maybe<Language>;
};

/** Methods to use when ordering `Language`. */
export enum LanguagesOrderBy {
  FilmsAverageDescriptionAsc = 'FILMS_AVERAGE_DESCRIPTION_ASC',
  FilmsAverageDescriptionDesc = 'FILMS_AVERAGE_DESCRIPTION_DESC',
  FilmsAverageFilmIdAsc = 'FILMS_AVERAGE_FILM_ID_ASC',
  FilmsAverageFilmIdDesc = 'FILMS_AVERAGE_FILM_ID_DESC',
  FilmsAverageFulltextAsc = 'FILMS_AVERAGE_FULLTEXT_ASC',
  FilmsAverageFulltextDesc = 'FILMS_AVERAGE_FULLTEXT_DESC',
  FilmsAverageLanguageIdAsc = 'FILMS_AVERAGE_LANGUAGE_ID_ASC',
  FilmsAverageLanguageIdDesc = 'FILMS_AVERAGE_LANGUAGE_ID_DESC',
  FilmsAverageLastUpdateAsc = 'FILMS_AVERAGE_LAST_UPDATE_ASC',
  FilmsAverageLastUpdateDesc = 'FILMS_AVERAGE_LAST_UPDATE_DESC',
  FilmsAverageLengthAsc = 'FILMS_AVERAGE_LENGTH_ASC',
  FilmsAverageLengthDesc = 'FILMS_AVERAGE_LENGTH_DESC',
  FilmsAverageRatingAsc = 'FILMS_AVERAGE_RATING_ASC',
  FilmsAverageRatingDesc = 'FILMS_AVERAGE_RATING_DESC',
  FilmsAverageReleaseYearAsc = 'FILMS_AVERAGE_RELEASE_YEAR_ASC',
  FilmsAverageReleaseYearDesc = 'FILMS_AVERAGE_RELEASE_YEAR_DESC',
  FilmsAverageRentalDurationAsc = 'FILMS_AVERAGE_RENTAL_DURATION_ASC',
  FilmsAverageRentalDurationDesc = 'FILMS_AVERAGE_RENTAL_DURATION_DESC',
  FilmsAverageRentalRateAsc = 'FILMS_AVERAGE_RENTAL_RATE_ASC',
  FilmsAverageRentalRateDesc = 'FILMS_AVERAGE_RENTAL_RATE_DESC',
  FilmsAverageReplacementCostAsc = 'FILMS_AVERAGE_REPLACEMENT_COST_ASC',
  FilmsAverageReplacementCostDesc = 'FILMS_AVERAGE_REPLACEMENT_COST_DESC',
  FilmsAverageSpecialFeaturesAsc = 'FILMS_AVERAGE_SPECIAL_FEATURES_ASC',
  FilmsAverageSpecialFeaturesDesc = 'FILMS_AVERAGE_SPECIAL_FEATURES_DESC',
  FilmsAverageTitleAsc = 'FILMS_AVERAGE_TITLE_ASC',
  FilmsAverageTitleDesc = 'FILMS_AVERAGE_TITLE_DESC',
  FilmsCountAsc = 'FILMS_COUNT_ASC',
  FilmsCountDesc = 'FILMS_COUNT_DESC',
  FilmsDistinctCountDescriptionAsc = 'FILMS_DISTINCT_COUNT_DESCRIPTION_ASC',
  FilmsDistinctCountDescriptionDesc = 'FILMS_DISTINCT_COUNT_DESCRIPTION_DESC',
  FilmsDistinctCountFilmIdAsc = 'FILMS_DISTINCT_COUNT_FILM_ID_ASC',
  FilmsDistinctCountFilmIdDesc = 'FILMS_DISTINCT_COUNT_FILM_ID_DESC',
  FilmsDistinctCountFulltextAsc = 'FILMS_DISTINCT_COUNT_FULLTEXT_ASC',
  FilmsDistinctCountFulltextDesc = 'FILMS_DISTINCT_COUNT_FULLTEXT_DESC',
  FilmsDistinctCountLanguageIdAsc = 'FILMS_DISTINCT_COUNT_LANGUAGE_ID_ASC',
  FilmsDistinctCountLanguageIdDesc = 'FILMS_DISTINCT_COUNT_LANGUAGE_ID_DESC',
  FilmsDistinctCountLastUpdateAsc = 'FILMS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  FilmsDistinctCountLastUpdateDesc = 'FILMS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  FilmsDistinctCountLengthAsc = 'FILMS_DISTINCT_COUNT_LENGTH_ASC',
  FilmsDistinctCountLengthDesc = 'FILMS_DISTINCT_COUNT_LENGTH_DESC',
  FilmsDistinctCountRatingAsc = 'FILMS_DISTINCT_COUNT_RATING_ASC',
  FilmsDistinctCountRatingDesc = 'FILMS_DISTINCT_COUNT_RATING_DESC',
  FilmsDistinctCountReleaseYearAsc = 'FILMS_DISTINCT_COUNT_RELEASE_YEAR_ASC',
  FilmsDistinctCountReleaseYearDesc = 'FILMS_DISTINCT_COUNT_RELEASE_YEAR_DESC',
  FilmsDistinctCountRentalDurationAsc = 'FILMS_DISTINCT_COUNT_RENTAL_DURATION_ASC',
  FilmsDistinctCountRentalDurationDesc = 'FILMS_DISTINCT_COUNT_RENTAL_DURATION_DESC',
  FilmsDistinctCountRentalRateAsc = 'FILMS_DISTINCT_COUNT_RENTAL_RATE_ASC',
  FilmsDistinctCountRentalRateDesc = 'FILMS_DISTINCT_COUNT_RENTAL_RATE_DESC',
  FilmsDistinctCountReplacementCostAsc = 'FILMS_DISTINCT_COUNT_REPLACEMENT_COST_ASC',
  FilmsDistinctCountReplacementCostDesc = 'FILMS_DISTINCT_COUNT_REPLACEMENT_COST_DESC',
  FilmsDistinctCountSpecialFeaturesAsc = 'FILMS_DISTINCT_COUNT_SPECIAL_FEATURES_ASC',
  FilmsDistinctCountSpecialFeaturesDesc = 'FILMS_DISTINCT_COUNT_SPECIAL_FEATURES_DESC',
  FilmsDistinctCountTitleAsc = 'FILMS_DISTINCT_COUNT_TITLE_ASC',
  FilmsDistinctCountTitleDesc = 'FILMS_DISTINCT_COUNT_TITLE_DESC',
  FilmsMaxDescriptionAsc = 'FILMS_MAX_DESCRIPTION_ASC',
  FilmsMaxDescriptionDesc = 'FILMS_MAX_DESCRIPTION_DESC',
  FilmsMaxFilmIdAsc = 'FILMS_MAX_FILM_ID_ASC',
  FilmsMaxFilmIdDesc = 'FILMS_MAX_FILM_ID_DESC',
  FilmsMaxFulltextAsc = 'FILMS_MAX_FULLTEXT_ASC',
  FilmsMaxFulltextDesc = 'FILMS_MAX_FULLTEXT_DESC',
  FilmsMaxLanguageIdAsc = 'FILMS_MAX_LANGUAGE_ID_ASC',
  FilmsMaxLanguageIdDesc = 'FILMS_MAX_LANGUAGE_ID_DESC',
  FilmsMaxLastUpdateAsc = 'FILMS_MAX_LAST_UPDATE_ASC',
  FilmsMaxLastUpdateDesc = 'FILMS_MAX_LAST_UPDATE_DESC',
  FilmsMaxLengthAsc = 'FILMS_MAX_LENGTH_ASC',
  FilmsMaxLengthDesc = 'FILMS_MAX_LENGTH_DESC',
  FilmsMaxRatingAsc = 'FILMS_MAX_RATING_ASC',
  FilmsMaxRatingDesc = 'FILMS_MAX_RATING_DESC',
  FilmsMaxReleaseYearAsc = 'FILMS_MAX_RELEASE_YEAR_ASC',
  FilmsMaxReleaseYearDesc = 'FILMS_MAX_RELEASE_YEAR_DESC',
  FilmsMaxRentalDurationAsc = 'FILMS_MAX_RENTAL_DURATION_ASC',
  FilmsMaxRentalDurationDesc = 'FILMS_MAX_RENTAL_DURATION_DESC',
  FilmsMaxRentalRateAsc = 'FILMS_MAX_RENTAL_RATE_ASC',
  FilmsMaxRentalRateDesc = 'FILMS_MAX_RENTAL_RATE_DESC',
  FilmsMaxReplacementCostAsc = 'FILMS_MAX_REPLACEMENT_COST_ASC',
  FilmsMaxReplacementCostDesc = 'FILMS_MAX_REPLACEMENT_COST_DESC',
  FilmsMaxSpecialFeaturesAsc = 'FILMS_MAX_SPECIAL_FEATURES_ASC',
  FilmsMaxSpecialFeaturesDesc = 'FILMS_MAX_SPECIAL_FEATURES_DESC',
  FilmsMaxTitleAsc = 'FILMS_MAX_TITLE_ASC',
  FilmsMaxTitleDesc = 'FILMS_MAX_TITLE_DESC',
  FilmsMinDescriptionAsc = 'FILMS_MIN_DESCRIPTION_ASC',
  FilmsMinDescriptionDesc = 'FILMS_MIN_DESCRIPTION_DESC',
  FilmsMinFilmIdAsc = 'FILMS_MIN_FILM_ID_ASC',
  FilmsMinFilmIdDesc = 'FILMS_MIN_FILM_ID_DESC',
  FilmsMinFulltextAsc = 'FILMS_MIN_FULLTEXT_ASC',
  FilmsMinFulltextDesc = 'FILMS_MIN_FULLTEXT_DESC',
  FilmsMinLanguageIdAsc = 'FILMS_MIN_LANGUAGE_ID_ASC',
  FilmsMinLanguageIdDesc = 'FILMS_MIN_LANGUAGE_ID_DESC',
  FilmsMinLastUpdateAsc = 'FILMS_MIN_LAST_UPDATE_ASC',
  FilmsMinLastUpdateDesc = 'FILMS_MIN_LAST_UPDATE_DESC',
  FilmsMinLengthAsc = 'FILMS_MIN_LENGTH_ASC',
  FilmsMinLengthDesc = 'FILMS_MIN_LENGTH_DESC',
  FilmsMinRatingAsc = 'FILMS_MIN_RATING_ASC',
  FilmsMinRatingDesc = 'FILMS_MIN_RATING_DESC',
  FilmsMinReleaseYearAsc = 'FILMS_MIN_RELEASE_YEAR_ASC',
  FilmsMinReleaseYearDesc = 'FILMS_MIN_RELEASE_YEAR_DESC',
  FilmsMinRentalDurationAsc = 'FILMS_MIN_RENTAL_DURATION_ASC',
  FilmsMinRentalDurationDesc = 'FILMS_MIN_RENTAL_DURATION_DESC',
  FilmsMinRentalRateAsc = 'FILMS_MIN_RENTAL_RATE_ASC',
  FilmsMinRentalRateDesc = 'FILMS_MIN_RENTAL_RATE_DESC',
  FilmsMinReplacementCostAsc = 'FILMS_MIN_REPLACEMENT_COST_ASC',
  FilmsMinReplacementCostDesc = 'FILMS_MIN_REPLACEMENT_COST_DESC',
  FilmsMinSpecialFeaturesAsc = 'FILMS_MIN_SPECIAL_FEATURES_ASC',
  FilmsMinSpecialFeaturesDesc = 'FILMS_MIN_SPECIAL_FEATURES_DESC',
  FilmsMinTitleAsc = 'FILMS_MIN_TITLE_ASC',
  FilmsMinTitleDesc = 'FILMS_MIN_TITLE_DESC',
  FilmsStddevPopulationDescriptionAsc = 'FILMS_STDDEV_POPULATION_DESCRIPTION_ASC',
  FilmsStddevPopulationDescriptionDesc = 'FILMS_STDDEV_POPULATION_DESCRIPTION_DESC',
  FilmsStddevPopulationFilmIdAsc = 'FILMS_STDDEV_POPULATION_FILM_ID_ASC',
  FilmsStddevPopulationFilmIdDesc = 'FILMS_STDDEV_POPULATION_FILM_ID_DESC',
  FilmsStddevPopulationFulltextAsc = 'FILMS_STDDEV_POPULATION_FULLTEXT_ASC',
  FilmsStddevPopulationFulltextDesc = 'FILMS_STDDEV_POPULATION_FULLTEXT_DESC',
  FilmsStddevPopulationLanguageIdAsc = 'FILMS_STDDEV_POPULATION_LANGUAGE_ID_ASC',
  FilmsStddevPopulationLanguageIdDesc = 'FILMS_STDDEV_POPULATION_LANGUAGE_ID_DESC',
  FilmsStddevPopulationLastUpdateAsc = 'FILMS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  FilmsStddevPopulationLastUpdateDesc = 'FILMS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  FilmsStddevPopulationLengthAsc = 'FILMS_STDDEV_POPULATION_LENGTH_ASC',
  FilmsStddevPopulationLengthDesc = 'FILMS_STDDEV_POPULATION_LENGTH_DESC',
  FilmsStddevPopulationRatingAsc = 'FILMS_STDDEV_POPULATION_RATING_ASC',
  FilmsStddevPopulationRatingDesc = 'FILMS_STDDEV_POPULATION_RATING_DESC',
  FilmsStddevPopulationReleaseYearAsc = 'FILMS_STDDEV_POPULATION_RELEASE_YEAR_ASC',
  FilmsStddevPopulationReleaseYearDesc = 'FILMS_STDDEV_POPULATION_RELEASE_YEAR_DESC',
  FilmsStddevPopulationRentalDurationAsc = 'FILMS_STDDEV_POPULATION_RENTAL_DURATION_ASC',
  FilmsStddevPopulationRentalDurationDesc = 'FILMS_STDDEV_POPULATION_RENTAL_DURATION_DESC',
  FilmsStddevPopulationRentalRateAsc = 'FILMS_STDDEV_POPULATION_RENTAL_RATE_ASC',
  FilmsStddevPopulationRentalRateDesc = 'FILMS_STDDEV_POPULATION_RENTAL_RATE_DESC',
  FilmsStddevPopulationReplacementCostAsc = 'FILMS_STDDEV_POPULATION_REPLACEMENT_COST_ASC',
  FilmsStddevPopulationReplacementCostDesc = 'FILMS_STDDEV_POPULATION_REPLACEMENT_COST_DESC',
  FilmsStddevPopulationSpecialFeaturesAsc = 'FILMS_STDDEV_POPULATION_SPECIAL_FEATURES_ASC',
  FilmsStddevPopulationSpecialFeaturesDesc = 'FILMS_STDDEV_POPULATION_SPECIAL_FEATURES_DESC',
  FilmsStddevPopulationTitleAsc = 'FILMS_STDDEV_POPULATION_TITLE_ASC',
  FilmsStddevPopulationTitleDesc = 'FILMS_STDDEV_POPULATION_TITLE_DESC',
  FilmsStddevSampleDescriptionAsc = 'FILMS_STDDEV_SAMPLE_DESCRIPTION_ASC',
  FilmsStddevSampleDescriptionDesc = 'FILMS_STDDEV_SAMPLE_DESCRIPTION_DESC',
  FilmsStddevSampleFilmIdAsc = 'FILMS_STDDEV_SAMPLE_FILM_ID_ASC',
  FilmsStddevSampleFilmIdDesc = 'FILMS_STDDEV_SAMPLE_FILM_ID_DESC',
  FilmsStddevSampleFulltextAsc = 'FILMS_STDDEV_SAMPLE_FULLTEXT_ASC',
  FilmsStddevSampleFulltextDesc = 'FILMS_STDDEV_SAMPLE_FULLTEXT_DESC',
  FilmsStddevSampleLanguageIdAsc = 'FILMS_STDDEV_SAMPLE_LANGUAGE_ID_ASC',
  FilmsStddevSampleLanguageIdDesc = 'FILMS_STDDEV_SAMPLE_LANGUAGE_ID_DESC',
  FilmsStddevSampleLastUpdateAsc = 'FILMS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  FilmsStddevSampleLastUpdateDesc = 'FILMS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  FilmsStddevSampleLengthAsc = 'FILMS_STDDEV_SAMPLE_LENGTH_ASC',
  FilmsStddevSampleLengthDesc = 'FILMS_STDDEV_SAMPLE_LENGTH_DESC',
  FilmsStddevSampleRatingAsc = 'FILMS_STDDEV_SAMPLE_RATING_ASC',
  FilmsStddevSampleRatingDesc = 'FILMS_STDDEV_SAMPLE_RATING_DESC',
  FilmsStddevSampleReleaseYearAsc = 'FILMS_STDDEV_SAMPLE_RELEASE_YEAR_ASC',
  FilmsStddevSampleReleaseYearDesc = 'FILMS_STDDEV_SAMPLE_RELEASE_YEAR_DESC',
  FilmsStddevSampleRentalDurationAsc = 'FILMS_STDDEV_SAMPLE_RENTAL_DURATION_ASC',
  FilmsStddevSampleRentalDurationDesc = 'FILMS_STDDEV_SAMPLE_RENTAL_DURATION_DESC',
  FilmsStddevSampleRentalRateAsc = 'FILMS_STDDEV_SAMPLE_RENTAL_RATE_ASC',
  FilmsStddevSampleRentalRateDesc = 'FILMS_STDDEV_SAMPLE_RENTAL_RATE_DESC',
  FilmsStddevSampleReplacementCostAsc = 'FILMS_STDDEV_SAMPLE_REPLACEMENT_COST_ASC',
  FilmsStddevSampleReplacementCostDesc = 'FILMS_STDDEV_SAMPLE_REPLACEMENT_COST_DESC',
  FilmsStddevSampleSpecialFeaturesAsc = 'FILMS_STDDEV_SAMPLE_SPECIAL_FEATURES_ASC',
  FilmsStddevSampleSpecialFeaturesDesc = 'FILMS_STDDEV_SAMPLE_SPECIAL_FEATURES_DESC',
  FilmsStddevSampleTitleAsc = 'FILMS_STDDEV_SAMPLE_TITLE_ASC',
  FilmsStddevSampleTitleDesc = 'FILMS_STDDEV_SAMPLE_TITLE_DESC',
  FilmsSumDescriptionAsc = 'FILMS_SUM_DESCRIPTION_ASC',
  FilmsSumDescriptionDesc = 'FILMS_SUM_DESCRIPTION_DESC',
  FilmsSumFilmIdAsc = 'FILMS_SUM_FILM_ID_ASC',
  FilmsSumFilmIdDesc = 'FILMS_SUM_FILM_ID_DESC',
  FilmsSumFulltextAsc = 'FILMS_SUM_FULLTEXT_ASC',
  FilmsSumFulltextDesc = 'FILMS_SUM_FULLTEXT_DESC',
  FilmsSumLanguageIdAsc = 'FILMS_SUM_LANGUAGE_ID_ASC',
  FilmsSumLanguageIdDesc = 'FILMS_SUM_LANGUAGE_ID_DESC',
  FilmsSumLastUpdateAsc = 'FILMS_SUM_LAST_UPDATE_ASC',
  FilmsSumLastUpdateDesc = 'FILMS_SUM_LAST_UPDATE_DESC',
  FilmsSumLengthAsc = 'FILMS_SUM_LENGTH_ASC',
  FilmsSumLengthDesc = 'FILMS_SUM_LENGTH_DESC',
  FilmsSumRatingAsc = 'FILMS_SUM_RATING_ASC',
  FilmsSumRatingDesc = 'FILMS_SUM_RATING_DESC',
  FilmsSumReleaseYearAsc = 'FILMS_SUM_RELEASE_YEAR_ASC',
  FilmsSumReleaseYearDesc = 'FILMS_SUM_RELEASE_YEAR_DESC',
  FilmsSumRentalDurationAsc = 'FILMS_SUM_RENTAL_DURATION_ASC',
  FilmsSumRentalDurationDesc = 'FILMS_SUM_RENTAL_DURATION_DESC',
  FilmsSumRentalRateAsc = 'FILMS_SUM_RENTAL_RATE_ASC',
  FilmsSumRentalRateDesc = 'FILMS_SUM_RENTAL_RATE_DESC',
  FilmsSumReplacementCostAsc = 'FILMS_SUM_REPLACEMENT_COST_ASC',
  FilmsSumReplacementCostDesc = 'FILMS_SUM_REPLACEMENT_COST_DESC',
  FilmsSumSpecialFeaturesAsc = 'FILMS_SUM_SPECIAL_FEATURES_ASC',
  FilmsSumSpecialFeaturesDesc = 'FILMS_SUM_SPECIAL_FEATURES_DESC',
  FilmsSumTitleAsc = 'FILMS_SUM_TITLE_ASC',
  FilmsSumTitleDesc = 'FILMS_SUM_TITLE_DESC',
  FilmsVariancePopulationDescriptionAsc = 'FILMS_VARIANCE_POPULATION_DESCRIPTION_ASC',
  FilmsVariancePopulationDescriptionDesc = 'FILMS_VARIANCE_POPULATION_DESCRIPTION_DESC',
  FilmsVariancePopulationFilmIdAsc = 'FILMS_VARIANCE_POPULATION_FILM_ID_ASC',
  FilmsVariancePopulationFilmIdDesc = 'FILMS_VARIANCE_POPULATION_FILM_ID_DESC',
  FilmsVariancePopulationFulltextAsc = 'FILMS_VARIANCE_POPULATION_FULLTEXT_ASC',
  FilmsVariancePopulationFulltextDesc = 'FILMS_VARIANCE_POPULATION_FULLTEXT_DESC',
  FilmsVariancePopulationLanguageIdAsc = 'FILMS_VARIANCE_POPULATION_LANGUAGE_ID_ASC',
  FilmsVariancePopulationLanguageIdDesc = 'FILMS_VARIANCE_POPULATION_LANGUAGE_ID_DESC',
  FilmsVariancePopulationLastUpdateAsc = 'FILMS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  FilmsVariancePopulationLastUpdateDesc = 'FILMS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  FilmsVariancePopulationLengthAsc = 'FILMS_VARIANCE_POPULATION_LENGTH_ASC',
  FilmsVariancePopulationLengthDesc = 'FILMS_VARIANCE_POPULATION_LENGTH_DESC',
  FilmsVariancePopulationRatingAsc = 'FILMS_VARIANCE_POPULATION_RATING_ASC',
  FilmsVariancePopulationRatingDesc = 'FILMS_VARIANCE_POPULATION_RATING_DESC',
  FilmsVariancePopulationReleaseYearAsc = 'FILMS_VARIANCE_POPULATION_RELEASE_YEAR_ASC',
  FilmsVariancePopulationReleaseYearDesc = 'FILMS_VARIANCE_POPULATION_RELEASE_YEAR_DESC',
  FilmsVariancePopulationRentalDurationAsc = 'FILMS_VARIANCE_POPULATION_RENTAL_DURATION_ASC',
  FilmsVariancePopulationRentalDurationDesc = 'FILMS_VARIANCE_POPULATION_RENTAL_DURATION_DESC',
  FilmsVariancePopulationRentalRateAsc = 'FILMS_VARIANCE_POPULATION_RENTAL_RATE_ASC',
  FilmsVariancePopulationRentalRateDesc = 'FILMS_VARIANCE_POPULATION_RENTAL_RATE_DESC',
  FilmsVariancePopulationReplacementCostAsc = 'FILMS_VARIANCE_POPULATION_REPLACEMENT_COST_ASC',
  FilmsVariancePopulationReplacementCostDesc = 'FILMS_VARIANCE_POPULATION_REPLACEMENT_COST_DESC',
  FilmsVariancePopulationSpecialFeaturesAsc = 'FILMS_VARIANCE_POPULATION_SPECIAL_FEATURES_ASC',
  FilmsVariancePopulationSpecialFeaturesDesc = 'FILMS_VARIANCE_POPULATION_SPECIAL_FEATURES_DESC',
  FilmsVariancePopulationTitleAsc = 'FILMS_VARIANCE_POPULATION_TITLE_ASC',
  FilmsVariancePopulationTitleDesc = 'FILMS_VARIANCE_POPULATION_TITLE_DESC',
  FilmsVarianceSampleDescriptionAsc = 'FILMS_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  FilmsVarianceSampleDescriptionDesc = 'FILMS_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  FilmsVarianceSampleFilmIdAsc = 'FILMS_VARIANCE_SAMPLE_FILM_ID_ASC',
  FilmsVarianceSampleFilmIdDesc = 'FILMS_VARIANCE_SAMPLE_FILM_ID_DESC',
  FilmsVarianceSampleFulltextAsc = 'FILMS_VARIANCE_SAMPLE_FULLTEXT_ASC',
  FilmsVarianceSampleFulltextDesc = 'FILMS_VARIANCE_SAMPLE_FULLTEXT_DESC',
  FilmsVarianceSampleLanguageIdAsc = 'FILMS_VARIANCE_SAMPLE_LANGUAGE_ID_ASC',
  FilmsVarianceSampleLanguageIdDesc = 'FILMS_VARIANCE_SAMPLE_LANGUAGE_ID_DESC',
  FilmsVarianceSampleLastUpdateAsc = 'FILMS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  FilmsVarianceSampleLastUpdateDesc = 'FILMS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  FilmsVarianceSampleLengthAsc = 'FILMS_VARIANCE_SAMPLE_LENGTH_ASC',
  FilmsVarianceSampleLengthDesc = 'FILMS_VARIANCE_SAMPLE_LENGTH_DESC',
  FilmsVarianceSampleRatingAsc = 'FILMS_VARIANCE_SAMPLE_RATING_ASC',
  FilmsVarianceSampleRatingDesc = 'FILMS_VARIANCE_SAMPLE_RATING_DESC',
  FilmsVarianceSampleReleaseYearAsc = 'FILMS_VARIANCE_SAMPLE_RELEASE_YEAR_ASC',
  FilmsVarianceSampleReleaseYearDesc = 'FILMS_VARIANCE_SAMPLE_RELEASE_YEAR_DESC',
  FilmsVarianceSampleRentalDurationAsc = 'FILMS_VARIANCE_SAMPLE_RENTAL_DURATION_ASC',
  FilmsVarianceSampleRentalDurationDesc = 'FILMS_VARIANCE_SAMPLE_RENTAL_DURATION_DESC',
  FilmsVarianceSampleRentalRateAsc = 'FILMS_VARIANCE_SAMPLE_RENTAL_RATE_ASC',
  FilmsVarianceSampleRentalRateDesc = 'FILMS_VARIANCE_SAMPLE_RENTAL_RATE_DESC',
  FilmsVarianceSampleReplacementCostAsc = 'FILMS_VARIANCE_SAMPLE_REPLACEMENT_COST_ASC',
  FilmsVarianceSampleReplacementCostDesc = 'FILMS_VARIANCE_SAMPLE_REPLACEMENT_COST_DESC',
  FilmsVarianceSampleSpecialFeaturesAsc = 'FILMS_VARIANCE_SAMPLE_SPECIAL_FEATURES_ASC',
  FilmsVarianceSampleSpecialFeaturesDesc = 'FILMS_VARIANCE_SAMPLE_SPECIAL_FEATURES_DESC',
  FilmsVarianceSampleTitleAsc = 'FILMS_VARIANCE_SAMPLE_TITLE_ASC',
  FilmsVarianceSampleTitleDesc = 'FILMS_VARIANCE_SAMPLE_TITLE_DESC',
  LanguageIdAsc = 'LANGUAGE_ID_ASC',
  LanguageIdDesc = 'LANGUAGE_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum MpaaRating {
  G = 'G',
  Nc_17 = 'NC_17',
  Pg = 'PG',
  Pg_13 = 'PG_13',
  R = 'R'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Actor`. */
  createActor?: Maybe<CreateActorPayload>;
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `City`. */
  createCity?: Maybe<CreateCityPayload>;
  /** Creates a single `Country`. */
  createCountry?: Maybe<CreateCountryPayload>;
  /** Creates a single `Customer`. */
  createCustomer?: Maybe<CreateCustomerPayload>;
  /** Creates a single `Film`. */
  createFilm?: Maybe<CreateFilmPayload>;
  /** Creates a single `FilmActor`. */
  createFilmActor?: Maybe<CreateFilmActorPayload>;
  /** Creates a single `FilmCategory`. */
  createFilmCategory?: Maybe<CreateFilmCategoryPayload>;
  /** Creates a single `Inventory`. */
  createInventory?: Maybe<CreateInventoryPayload>;
  /** Creates a single `Language`. */
  createLanguage?: Maybe<CreateLanguagePayload>;
  /** Creates a single `Payment`. */
  createPayment?: Maybe<CreatePaymentPayload>;
  /** Creates a single `Rental`. */
  createRental?: Maybe<CreateRentalPayload>;
  /** Creates a single `Staff`. */
  createStaff?: Maybe<CreateStaffPayload>;
  /** Creates a single `Store`. */
  createStore?: Maybe<CreateStorePayload>;
  /** Deletes a single `Actor` using a unique key. */
  deleteActor?: Maybe<DeleteActorPayload>;
  /** Deletes a single `Actor` using its globally unique id. */
  deleteActorById?: Maybe<DeleteActorPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddressById?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategoryById?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `City` using a unique key. */
  deleteCity?: Maybe<DeleteCityPayload>;
  /** Deletes a single `City` using its globally unique id. */
  deleteCityById?: Maybe<DeleteCityPayload>;
  /** Deletes a single `Country` using a unique key. */
  deleteCountry?: Maybe<DeleteCountryPayload>;
  /** Deletes a single `Country` using its globally unique id. */
  deleteCountryById?: Maybe<DeleteCountryPayload>;
  /** Deletes a single `Customer` using a unique key. */
  deleteCustomer?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Customer` using its globally unique id. */
  deleteCustomerById?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Film` using a unique key. */
  deleteFilm?: Maybe<DeleteFilmPayload>;
  /** Deletes a single `FilmActor` using a unique key. */
  deleteFilmActor?: Maybe<DeleteFilmActorPayload>;
  /** Deletes a single `FilmActor` using its globally unique id. */
  deleteFilmActorById?: Maybe<DeleteFilmActorPayload>;
  /** Deletes a single `Film` using its globally unique id. */
  deleteFilmById?: Maybe<DeleteFilmPayload>;
  /** Deletes a single `FilmCategory` using a unique key. */
  deleteFilmCategory?: Maybe<DeleteFilmCategoryPayload>;
  /** Deletes a single `FilmCategory` using its globally unique id. */
  deleteFilmCategoryById?: Maybe<DeleteFilmCategoryPayload>;
  /** Deletes a single `Inventory` using a unique key. */
  deleteInventory?: Maybe<DeleteInventoryPayload>;
  /** Deletes a single `Inventory` using its globally unique id. */
  deleteInventoryById?: Maybe<DeleteInventoryPayload>;
  /** Deletes a single `Language` using a unique key. */
  deleteLanguage?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Language` using its globally unique id. */
  deleteLanguageById?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Payment` using a unique key. */
  deletePayment?: Maybe<DeletePaymentPayload>;
  /** Deletes a single `Payment` using its globally unique id. */
  deletePaymentById?: Maybe<DeletePaymentPayload>;
  /** Deletes a single `Rental` using a unique key. */
  deleteRental?: Maybe<DeleteRentalPayload>;
  /** Deletes a single `Rental` using its globally unique id. */
  deleteRentalById?: Maybe<DeleteRentalPayload>;
  /** Deletes a single `Staff` using a unique key. */
  deleteStaff?: Maybe<DeleteStaffPayload>;
  /** Deletes a single `Staff` using its globally unique id. */
  deleteStaffById?: Maybe<DeleteStaffPayload>;
  /** Deletes a single `Store` using a unique key. */
  deleteStore?: Maybe<DeleteStorePayload>;
  /** Deletes a single `Store` using its globally unique id. */
  deleteStoreById?: Maybe<DeleteStorePayload>;
  filmInStock?: Maybe<FilmInStockPayload>;
  filmNotInStock?: Maybe<FilmNotInStockPayload>;
  getCustomerBalance?: Maybe<GetCustomerBalancePayload>;
  inventoryHeldByCustomer?: Maybe<InventoryHeldByCustomerPayload>;
  inventoryInStock?: Maybe<InventoryInStockPayload>;
  rewardsReport?: Maybe<RewardsReportPayload>;
  /** Updates a single `Actor` using a unique key and a patch. */
  updateActor?: Maybe<UpdateActorPayload>;
  /** Updates a single `Actor` using its globally unique id and a patch. */
  updateActorById?: Maybe<UpdateActorPayload>;
  updateActorName: UpdateActorNamePayload;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddressById?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategoryById?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `City` using a unique key and a patch. */
  updateCity?: Maybe<UpdateCityPayload>;
  /** Updates a single `City` using its globally unique id and a patch. */
  updateCityById?: Maybe<UpdateCityPayload>;
  /** Updates a single `Country` using a unique key and a patch. */
  updateCountry?: Maybe<UpdateCountryPayload>;
  /** Updates a single `Country` using its globally unique id and a patch. */
  updateCountryById?: Maybe<UpdateCountryPayload>;
  /** Updates a single `Customer` using a unique key and a patch. */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Customer` using its globally unique id and a patch. */
  updateCustomerById?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Film` using a unique key and a patch. */
  updateFilm?: Maybe<UpdateFilmPayload>;
  /** Updates a single `FilmActor` using a unique key and a patch. */
  updateFilmActor?: Maybe<UpdateFilmActorPayload>;
  /** Updates a single `FilmActor` using its globally unique id and a patch. */
  updateFilmActorById?: Maybe<UpdateFilmActorPayload>;
  /** Updates a single `Film` using its globally unique id and a patch. */
  updateFilmById?: Maybe<UpdateFilmPayload>;
  /** Updates a single `FilmCategory` using a unique key and a patch. */
  updateFilmCategory?: Maybe<UpdateFilmCategoryPayload>;
  /** Updates a single `FilmCategory` using its globally unique id and a patch. */
  updateFilmCategoryById?: Maybe<UpdateFilmCategoryPayload>;
  /** Updates a single `Inventory` using a unique key and a patch. */
  updateInventory?: Maybe<UpdateInventoryPayload>;
  /** Updates a single `Inventory` using its globally unique id and a patch. */
  updateInventoryById?: Maybe<UpdateInventoryPayload>;
  /** Updates a single `Language` using a unique key and a patch. */
  updateLanguage?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Language` using its globally unique id and a patch. */
  updateLanguageById?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Payment` using a unique key and a patch. */
  updatePayment?: Maybe<UpdatePaymentPayload>;
  /** Updates a single `Payment` using its globally unique id and a patch. */
  updatePaymentById?: Maybe<UpdatePaymentPayload>;
  /** Updates a single `Rental` using a unique key and a patch. */
  updateRental?: Maybe<UpdateRentalPayload>;
  /** Updates a single `Rental` using its globally unique id and a patch. */
  updateRentalById?: Maybe<UpdateRentalPayload>;
  /** Updates a single `Staff` using a unique key and a patch. */
  updateStaff?: Maybe<UpdateStaffPayload>;
  /** Updates a single `Staff` using its globally unique id and a patch. */
  updateStaffById?: Maybe<UpdateStaffPayload>;
  /** Updates a single `Store` using a unique key and a patch. */
  updateStore?: Maybe<UpdateStorePayload>;
  /** Updates a single `Store` using its globally unique id and a patch. */
  updateStoreById?: Maybe<UpdateStorePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateActorArgs = {
  input: CreateActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCityArgs = {
  input: CreateCityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmArgs = {
  input: CreateFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmActorArgs = {
  input: CreateFilmActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmCategoryArgs = {
  input: CreateFilmCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInventoryArgs = {
  input: CreateInventoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLanguageArgs = {
  input: CreateLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRentalArgs = {
  input: CreateRentalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStaffArgs = {
  input: CreateStaffInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteActorArgs = {
  input: DeleteActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteActorByIdArgs = {
  input: DeleteActorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByIdArgs = {
  input: DeleteAddressByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByIdArgs = {
  input: DeleteCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityArgs = {
  input: DeleteCityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityByIdArgs = {
  input: DeleteCityByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryArgs = {
  input: DeleteCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryByIdArgs = {
  input: DeleteCountryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerByIdArgs = {
  input: DeleteCustomerByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmArgs = {
  input: DeleteFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmActorArgs = {
  input: DeleteFilmActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmActorByIdArgs = {
  input: DeleteFilmActorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmByIdArgs = {
  input: DeleteFilmByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmCategoryArgs = {
  input: DeleteFilmCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmCategoryByIdArgs = {
  input: DeleteFilmCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryArgs = {
  input: DeleteInventoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryByIdArgs = {
  input: DeleteInventoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageArgs = {
  input: DeleteLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageByIdArgs = {
  input: DeleteLanguageByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePaymentArgs = {
  input: DeletePaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePaymentByIdArgs = {
  input: DeletePaymentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRentalArgs = {
  input: DeleteRentalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRentalByIdArgs = {
  input: DeleteRentalByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStaffArgs = {
  input: DeleteStaffInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStaffByIdArgs = {
  input: DeleteStaffByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStoreArgs = {
  input: DeleteStoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStoreByIdArgs = {
  input: DeleteStoreByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFilmInStockArgs = {
  input: FilmInStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFilmNotInStockArgs = {
  input: FilmNotInStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationGetCustomerBalanceArgs = {
  input: GetCustomerBalanceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationInventoryHeldByCustomerArgs = {
  input: InventoryHeldByCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationInventoryInStockArgs = {
  input: InventoryInStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRewardsReportArgs = {
  input: RewardsReportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateActorArgs = {
  input: UpdateActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateActorByIdArgs = {
  input: UpdateActorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateActorNameArgs = {
  actorId: Scalars['Int'];
  input: UpdateActorNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByIdArgs = {
  input: UpdateAddressByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByIdArgs = {
  input: UpdateCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityArgs = {
  input: UpdateCityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityByIdArgs = {
  input: UpdateCityByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryByIdArgs = {
  input: UpdateCountryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerByIdArgs = {
  input: UpdateCustomerByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmArgs = {
  input: UpdateFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmActorArgs = {
  input: UpdateFilmActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmActorByIdArgs = {
  input: UpdateFilmActorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmByIdArgs = {
  input: UpdateFilmByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmCategoryArgs = {
  input: UpdateFilmCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmCategoryByIdArgs = {
  input: UpdateFilmCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryArgs = {
  input: UpdateInventoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryByIdArgs = {
  input: UpdateInventoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageArgs = {
  input: UpdateLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageByIdArgs = {
  input: UpdateLanguageByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePaymentByIdArgs = {
  input: UpdatePaymentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRentalArgs = {
  input: UpdateRentalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRentalByIdArgs = {
  input: UpdateRentalByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStaffArgs = {
  input: UpdateStaffInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStaffByIdArgs = {
  input: UpdateStaffByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStoreByIdArgs = {
  input: UpdateStoreByIdInput;
};

export type NicerButSlowerFilmList = {
  __typename?: 'NicerButSlowerFilmList';
  actors?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fid?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['BigFloat']>;
  rating?: Maybe<MpaaRating>;
  title?: Maybe<Scalars['String']>;
};

export type NicerButSlowerFilmListAggregates = {
  __typename?: 'NicerButSlowerFilmListAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<NicerButSlowerFilmListAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<NicerButSlowerFilmListDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<NicerButSlowerFilmListMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<NicerButSlowerFilmListMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<NicerButSlowerFilmListStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<NicerButSlowerFilmListStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<NicerButSlowerFilmListSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<NicerButSlowerFilmListVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<NicerButSlowerFilmListVarianceSampleAggregates>;
};

export type NicerButSlowerFilmListAverageAggregates = {
  __typename?: 'NicerButSlowerFilmListAverageAggregates';
  /** Mean average of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Mean average of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Mean average of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `NicerButSlowerFilmList` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type NicerButSlowerFilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

export type NicerButSlowerFilmListDistinctCountAggregates = {
  __typename?: 'NicerButSlowerFilmListDistinctCountAggregates';
  /** Distinct count of actors across the matching connection */
  actors?: Maybe<Scalars['BigInt']>;
  /** Distinct count of category across the matching connection */
  category?: Maybe<Scalars['BigInt']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>;
  /** Distinct count of fid across the matching connection */
  fid?: Maybe<Scalars['BigInt']>;
  /** Distinct count of length across the matching connection */
  length?: Maybe<Scalars['BigInt']>;
  /** Distinct count of price across the matching connection */
  price?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rating across the matching connection */
  rating?: Maybe<Scalars['BigInt']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `NicerButSlowerFilmList` for usage during aggregation. */
export enum NicerButSlowerFilmListGroupBy {
  Actors = 'ACTORS',
  Category = 'CATEGORY',
  Description = 'DESCRIPTION',
  Fid = 'FID',
  Length = 'LENGTH',
  Price = 'PRICE',
  Rating = 'RATING',
  Title = 'TITLE'
}

export type NicerButSlowerFilmListHavingAverageInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListHavingDistinctCountInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `NicerButSlowerFilmList` aggregates. */
export type NicerButSlowerFilmListHavingInput = {
  AND?: InputMaybe<Array<NicerButSlowerFilmListHavingInput>>;
  OR?: InputMaybe<Array<NicerButSlowerFilmListHavingInput>>;
  average?: InputMaybe<NicerButSlowerFilmListHavingAverageInput>;
  distinctCount?: InputMaybe<NicerButSlowerFilmListHavingDistinctCountInput>;
  max?: InputMaybe<NicerButSlowerFilmListHavingMaxInput>;
  min?: InputMaybe<NicerButSlowerFilmListHavingMinInput>;
  stddevPopulation?: InputMaybe<NicerButSlowerFilmListHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<NicerButSlowerFilmListHavingStddevSampleInput>;
  sum?: InputMaybe<NicerButSlowerFilmListHavingSumInput>;
  variancePopulation?: InputMaybe<NicerButSlowerFilmListHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<NicerButSlowerFilmListHavingVarianceSampleInput>;
};

export type NicerButSlowerFilmListHavingMaxInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListHavingMinInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListHavingStddevPopulationInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListHavingStddevSampleInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListHavingSumInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListHavingVariancePopulationInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListHavingVarianceSampleInput = {
  fid?: InputMaybe<HavingIntFilter>;
  length?: InputMaybe<HavingIntFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
};

export type NicerButSlowerFilmListMaxAggregates = {
  __typename?: 'NicerButSlowerFilmListMaxAggregates';
  /** Maximum of fid across the matching connection */
  fid?: Maybe<Scalars['Int']>;
  /** Maximum of length across the matching connection */
  length?: Maybe<Scalars['Int']>;
  /** Maximum of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type NicerButSlowerFilmListMinAggregates = {
  __typename?: 'NicerButSlowerFilmListMinAggregates';
  /** Minimum of fid across the matching connection */
  fid?: Maybe<Scalars['Int']>;
  /** Minimum of length across the matching connection */
  length?: Maybe<Scalars['Int']>;
  /** Minimum of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type NicerButSlowerFilmListStddevPopulationAggregates = {
  __typename?: 'NicerButSlowerFilmListStddevPopulationAggregates';
  /** Population standard deviation of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type NicerButSlowerFilmListStddevSampleAggregates = {
  __typename?: 'NicerButSlowerFilmListStddevSampleAggregates';
  /** Sample standard deviation of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type NicerButSlowerFilmListSumAggregates = {
  __typename?: 'NicerButSlowerFilmListSumAggregates';
  /** Sum of fid across the matching connection */
  fid: Scalars['BigInt'];
  /** Sum of length across the matching connection */
  length: Scalars['BigInt'];
  /** Sum of price across the matching connection */
  price: Scalars['BigFloat'];
};

export type NicerButSlowerFilmListVariancePopulationAggregates = {
  __typename?: 'NicerButSlowerFilmListVariancePopulationAggregates';
  /** Population variance of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Population variance of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Population variance of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

export type NicerButSlowerFilmListVarianceSampleAggregates = {
  __typename?: 'NicerButSlowerFilmListVarianceSampleAggregates';
  /** Sample variance of fid across the matching connection */
  fid?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of length across the matching connection */
  length?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `NicerButSlowerFilmList` values. */
export type NicerButSlowerFilmListsConnection = {
  __typename?: 'NicerButSlowerFilmListsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<NicerButSlowerFilmListAggregates>;
  /** A list of edges which contains the `NicerButSlowerFilmList` and cursor to aid in pagination. */
  edges: Array<NicerButSlowerFilmListsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<NicerButSlowerFilmListAggregates>>;
  /** A list of `NicerButSlowerFilmList` objects. */
  nodes: Array<Maybe<NicerButSlowerFilmList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NicerButSlowerFilmList` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `NicerButSlowerFilmList` values. */
export type NicerButSlowerFilmListsConnectionGroupedAggregatesArgs = {
  groupBy: Array<NicerButSlowerFilmListGroupBy>;
  having?: InputMaybe<NicerButSlowerFilmListHavingInput>;
};

/** A `NicerButSlowerFilmList` edge in the connection. */
export type NicerButSlowerFilmListsEdge = {
  __typename?: 'NicerButSlowerFilmListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `NicerButSlowerFilmList` at the end of the edge. */
  node?: Maybe<NicerButSlowerFilmList>;
};

/** Methods to use when ordering `NicerButSlowerFilmList`. */
export enum NicerButSlowerFilmListsOrderBy {
  ActorsAsc = 'ACTORS_ASC',
  ActorsDesc = 'ACTORS_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FidAsc = 'FID_ASC',
  FidDesc = 'FID_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>;
  customerId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

export type PaymentAggregates = {
  __typename?: 'PaymentAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<PaymentAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<PaymentDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<PaymentMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<PaymentMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<PaymentStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<PaymentStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<PaymentSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<PaymentVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<PaymentVarianceSampleAggregates>;
};

export type PaymentAverageAggregates = {
  __typename?: 'PaymentAverageAggregates';
  /** Mean average of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Mean average of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Payment` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PaymentCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

export type PaymentDistinctCountAggregates = {
  __typename?: 'PaymentDistinctCountAggregates';
  /** Distinct count of amount across the matching connection */
  amount?: Maybe<Scalars['BigInt']>;
  /** Distinct count of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of paymentDate across the matching connection */
  paymentDate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Payment` for usage during aggregation. */
export enum PaymentGroupBy {
  Amount = 'AMOUNT',
  CustomerId = 'CUSTOMER_ID',
  PaymentDate = 'PAYMENT_DATE',
  PaymentDateTruncatedToDay = 'PAYMENT_DATE_TRUNCATED_TO_DAY',
  PaymentDateTruncatedToHour = 'PAYMENT_DATE_TRUNCATED_TO_HOUR',
  RentalId = 'RENTAL_ID',
  StaffId = 'STAFF_ID'
}

export type PaymentHavingAverageInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type PaymentHavingDistinctCountInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Payment` aggregates. */
export type PaymentHavingInput = {
  AND?: InputMaybe<Array<PaymentHavingInput>>;
  OR?: InputMaybe<Array<PaymentHavingInput>>;
  average?: InputMaybe<PaymentHavingAverageInput>;
  distinctCount?: InputMaybe<PaymentHavingDistinctCountInput>;
  max?: InputMaybe<PaymentHavingMaxInput>;
  min?: InputMaybe<PaymentHavingMinInput>;
  stddevPopulation?: InputMaybe<PaymentHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<PaymentHavingStddevSampleInput>;
  sum?: InputMaybe<PaymentHavingSumInput>;
  variancePopulation?: InputMaybe<PaymentHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<PaymentHavingVarianceSampleInput>;
};

export type PaymentHavingMaxInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type PaymentHavingMinInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type PaymentHavingStddevPopulationInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type PaymentHavingStddevSampleInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type PaymentHavingSumInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type PaymentHavingVariancePopulationInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type PaymentHavingVarianceSampleInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
  customerId?: InputMaybe<HavingIntFilter>;
  paymentDate?: InputMaybe<HavingDatetimeFilter>;
  paymentId?: InputMaybe<HavingIntFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `Payment` */
export type PaymentInput = {
  amount: Scalars['BigFloat'];
  customerId: Scalars['Int'];
  paymentDate: Scalars['Datetime'];
  paymentId?: InputMaybe<Scalars['Int']>;
  rentalId: Scalars['Int'];
  staffId: Scalars['Int'];
};

export type PaymentMaxAggregates = {
  __typename?: 'PaymentMaxAggregates';
  /** Maximum of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Maximum of customerId across the matching connection */
  customerId?: Maybe<Scalars['Int']>;
  /** Maximum of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['Int']>;
  /** Maximum of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['Int']>;
  /** Maximum of staffId across the matching connection */
  staffId?: Maybe<Scalars['Int']>;
};

export type PaymentMinAggregates = {
  __typename?: 'PaymentMinAggregates';
  /** Minimum of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Minimum of customerId across the matching connection */
  customerId?: Maybe<Scalars['Int']>;
  /** Minimum of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['Int']>;
  /** Minimum of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['Int']>;
  /** Minimum of staffId across the matching connection */
  staffId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Payment`. Fields that are set will be updated. */
export type PaymentPatch = {
  amount?: InputMaybe<Scalars['BigFloat']>;
  customerId?: InputMaybe<Scalars['Int']>;
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  paymentId?: InputMaybe<Scalars['Int']>;
  rentalId?: InputMaybe<Scalars['Int']>;
  staffId?: InputMaybe<Scalars['Int']>;
};

export type PaymentStddevPopulationAggregates = {
  __typename?: 'PaymentStddevPopulationAggregates';
  /** Population standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

export type PaymentStddevSampleAggregates = {
  __typename?: 'PaymentStddevSampleAggregates';
  /** Sample standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

export type PaymentSumAggregates = {
  __typename?: 'PaymentSumAggregates';
  /** Sum of amount across the matching connection */
  amount: Scalars['BigFloat'];
  /** Sum of customerId across the matching connection */
  customerId: Scalars['BigInt'];
  /** Sum of paymentId across the matching connection */
  paymentId: Scalars['BigInt'];
  /** Sum of rentalId across the matching connection */
  rentalId: Scalars['BigInt'];
  /** Sum of staffId across the matching connection */
  staffId: Scalars['BigInt'];
};

export type PaymentVariancePopulationAggregates = {
  __typename?: 'PaymentVariancePopulationAggregates';
  /** Population variance of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Population variance of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

export type PaymentVarianceSampleAggregates = {
  __typename?: 'PaymentVarianceSampleAggregates';
  /** Sample variance of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of paymentId across the matching connection */
  paymentId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Payment` values. */
export type PaymentsConnection = {
  __typename?: 'PaymentsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<PaymentAggregates>;
  /** A list of edges which contains the `Payment` and cursor to aid in pagination. */
  edges: Array<PaymentsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<PaymentAggregates>>;
  /** A list of `Payment` objects. */
  nodes: Array<Maybe<Payment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Payment` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Payment` values. */
export type PaymentsConnectionGroupedAggregatesArgs = {
  groupBy: Array<PaymentGroupBy>;
  having?: InputMaybe<PaymentHavingInput>;
};

/** A `Payment` edge in the connection. */
export type PaymentsEdge = {
  __typename?: 'PaymentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Payment` at the end of the edge. */
  node?: Maybe<Payment>;
};

/** Methods to use when ordering `Payment`. */
export enum PaymentsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  _groupConcat?: Maybe<Scalars['String']>;
  actor?: Maybe<Actor>;
  /** Reads a single `Actor` using its globally unique `ID`. */
  actorById?: Maybe<Actor>;
  /** Reads and enables pagination through a set of `ActorInfo`. */
  actorInfos?: Maybe<ActorInfosConnection>;
  /** Reads and enables pagination through a set of `Actor`. */
  actors?: Maybe<ActorsConnection>;
  address?: Maybe<Address>;
  /** Reads a single `Address` using its globally unique `ID`. */
  addressById?: Maybe<Address>;
  /** Reads and enables pagination through a set of `Address`. */
  addresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  category?: Maybe<Category>;
  /** Reads a single `Category` using its globally unique `ID`. */
  categoryById?: Maybe<Category>;
  /** Reads and enables pagination through a set of `City`. */
  cities?: Maybe<CitiesConnection>;
  city?: Maybe<City>;
  /** Reads a single `City` using its globally unique `ID`. */
  cityById?: Maybe<City>;
  /** Reads and enables pagination through a set of `Country`. */
  countries?: Maybe<CountriesConnection>;
  country?: Maybe<Country>;
  /** Reads a single `Country` using its globally unique `ID`. */
  countryById?: Maybe<Country>;
  customer?: Maybe<Customer>;
  /** Reads a single `Customer` using its globally unique `ID`. */
  customerById?: Maybe<Customer>;
  /** Reads and enables pagination through a set of `CustomerList`. */
  customerLists?: Maybe<CustomerListsConnection>;
  /** Reads and enables pagination through a set of `Customer`. */
  customers?: Maybe<CustomersConnection>;
  film?: Maybe<Film>;
  filmActor?: Maybe<FilmActor>;
  /** Reads a single `FilmActor` using its globally unique `ID`. */
  filmActorById?: Maybe<FilmActor>;
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActors?: Maybe<FilmActorsConnection>;
  /** Reads a single `Film` using its globally unique `ID`. */
  filmById?: Maybe<Film>;
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategories?: Maybe<FilmCategoriesConnection>;
  filmCategory?: Maybe<FilmCategory>;
  /** Reads a single `FilmCategory` using its globally unique `ID`. */
  filmCategoryById?: Maybe<FilmCategory>;
  /** Reads and enables pagination through a set of `FilmList`. */
  filmLists?: Maybe<FilmListsConnection>;
  /** Reads and enables pagination through a set of `Film`. */
  films?: Maybe<FilmsConnection>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID'];
  /** Reads and enables pagination through a set of `Inventory`. */
  inventories?: Maybe<InventoriesConnection>;
  inventory?: Maybe<Inventory>;
  /** Reads a single `Inventory` using its globally unique `ID`. */
  inventoryById?: Maybe<Inventory>;
  language?: Maybe<Language>;
  /** Reads a single `Language` using its globally unique `ID`. */
  languageById?: Maybe<Language>;
  /** Reads and enables pagination through a set of `Language`. */
  languages?: Maybe<LanguagesConnection>;
  lastDay?: Maybe<Scalars['Date']>;
  /** Reads and enables pagination through a set of `NicerButSlowerFilmList`. */
  nicerButSlowerFilmLists?: Maybe<NicerButSlowerFilmListsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  payment?: Maybe<Payment>;
  /** Reads a single `Payment` using its globally unique `ID`. */
  paymentById?: Maybe<Payment>;
  /** Reads and enables pagination through a set of `Payment`. */
  payments?: Maybe<PaymentsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  randomFilm?: Maybe<Film>;
  rental?: Maybe<Rental>;
  /** Reads a single `Rental` using its globally unique `ID`. */
  rentalById?: Maybe<Rental>;
  /** Reads and enables pagination through a set of `Rental`. */
  rentals?: Maybe<RentalsConnection>;
  /** Reads and enables pagination through a set of `SalesByFilmCategory`. */
  salesByFilmCategories?: Maybe<SalesByFilmCategoriesConnection>;
  /** Reads and enables pagination through a set of `SalesByStore`. */
  salesByStores?: Maybe<SalesByStoresConnection>;
  staff?: Maybe<Staff>;
  /** Reads a single `Staff` using its globally unique `ID`. */
  staffById?: Maybe<Staff>;
  /** Reads and enables pagination through a set of `StaffList`. */
  staffLists?: Maybe<StaffListsConnection>;
  /** Reads and enables pagination through a set of `Staff`. */
  staffs?: Maybe<StaffConnection>;
  store?: Maybe<Store>;
  /** Reads a single `Store` using its globally unique `ID`. */
  storeById?: Maybe<Store>;
  /** Reads and enables pagination through a set of `Store`. */
  stores?: Maybe<StoresConnection>;
};


/** The root query type which gives access points into the data universe. */
export type Query_GroupConcatArgs = {
  arg0?: InputMaybe<Scalars['String']>;
  arg1?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryActorArgs = {
  actorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryActorByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryActorInfosArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ActorInfoCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActorInfosOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryActorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  addressId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  categoryId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CityCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCityArgs = {
  cityId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCityByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CountryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryArgs = {
  countryId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerArgs = {
  customerId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CustomerListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomerListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmArgs = {
  filmId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmActorArgs = {
  actorId: Scalars['Int'];
  filmId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmActorByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmActorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryArgs = {
  categoryId: Scalars['Int'];
  filmId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryArgs = {
  inventoryId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageArgs = {
  languageId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LanguageCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLastDayArgs = {
  arg0: Scalars['Datetime'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNicerButSlowerFilmListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<NicerButSlowerFilmListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NicerButSlowerFilmListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPaymentArgs = {
  paymentId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPaymentByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRentalArgs = {
  rentalId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRentalByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRentalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySalesByFilmCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SalesByFilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SalesByFilmCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySalesByStoresArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SalesByStoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SalesByStoresOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffArgs = {
  staffId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StaffListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryStoreArgs = {
  storeId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStoreByIdArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStoresArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

export type Rental = Node & {
  __typename?: 'Rental';
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>;
  customerId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>;
  inventoryId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Payment`. */
  payments: PaymentsConnection;
  rentalDate: Scalars['Datetime'];
  rentalId: Scalars['Int'];
  returnDate?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>;
  staffId: Scalars['Int'];
};


export type RentalPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};

export type RentalAggregates = {
  __typename?: 'RentalAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<RentalAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RentalDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<RentalMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<RentalMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<RentalStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<RentalStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<RentalSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<RentalVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<RentalVarianceSampleAggregates>;
};

export type RentalAverageAggregates = {
  __typename?: 'RentalAverageAggregates';
  /** Mean average of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Rental` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RentalCondition = {
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `rentalDate` field. */
  rentalDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `returnDate` field. */
  returnDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

export type RentalDistinctCountAggregates = {
  __typename?: 'RentalDistinctCountAggregates';
  /** Distinct count of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rentalDate across the matching connection */
  rentalDate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of returnDate across the matching connection */
  returnDate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Rental` for usage during aggregation. */
export enum RentalGroupBy {
  CustomerId = 'CUSTOMER_ID',
  InventoryId = 'INVENTORY_ID',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  RentalDate = 'RENTAL_DATE',
  RentalDateTruncatedToDay = 'RENTAL_DATE_TRUNCATED_TO_DAY',
  RentalDateTruncatedToHour = 'RENTAL_DATE_TRUNCATED_TO_HOUR',
  ReturnDate = 'RETURN_DATE',
  ReturnDateTruncatedToDay = 'RETURN_DATE_TRUNCATED_TO_DAY',
  ReturnDateTruncatedToHour = 'RETURN_DATE_TRUNCATED_TO_HOUR',
  StaffId = 'STAFF_ID'
}

export type RentalHavingAverageInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type RentalHavingDistinctCountInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Rental` aggregates. */
export type RentalHavingInput = {
  AND?: InputMaybe<Array<RentalHavingInput>>;
  OR?: InputMaybe<Array<RentalHavingInput>>;
  average?: InputMaybe<RentalHavingAverageInput>;
  distinctCount?: InputMaybe<RentalHavingDistinctCountInput>;
  max?: InputMaybe<RentalHavingMaxInput>;
  min?: InputMaybe<RentalHavingMinInput>;
  stddevPopulation?: InputMaybe<RentalHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<RentalHavingStddevSampleInput>;
  sum?: InputMaybe<RentalHavingSumInput>;
  variancePopulation?: InputMaybe<RentalHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<RentalHavingVarianceSampleInput>;
};

export type RentalHavingMaxInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type RentalHavingMinInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type RentalHavingStddevPopulationInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type RentalHavingStddevSampleInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type RentalHavingSumInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type RentalHavingVariancePopulationInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

export type RentalHavingVarianceSampleInput = {
  customerId?: InputMaybe<HavingIntFilter>;
  inventoryId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  rentalDate?: InputMaybe<HavingDatetimeFilter>;
  rentalId?: InputMaybe<HavingIntFilter>;
  returnDate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `Rental` */
export type RentalInput = {
  customerId: Scalars['Int'];
  inventoryId: Scalars['Int'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  rentalDate: Scalars['Datetime'];
  rentalId?: InputMaybe<Scalars['Int']>;
  returnDate?: InputMaybe<Scalars['Datetime']>;
  staffId: Scalars['Int'];
};

export type RentalMaxAggregates = {
  __typename?: 'RentalMaxAggregates';
  /** Maximum of customerId across the matching connection */
  customerId?: Maybe<Scalars['Int']>;
  /** Maximum of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['Int']>;
  /** Maximum of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['Int']>;
  /** Maximum of staffId across the matching connection */
  staffId?: Maybe<Scalars['Int']>;
};

export type RentalMinAggregates = {
  __typename?: 'RentalMinAggregates';
  /** Minimum of customerId across the matching connection */
  customerId?: Maybe<Scalars['Int']>;
  /** Minimum of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['Int']>;
  /** Minimum of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['Int']>;
  /** Minimum of staffId across the matching connection */
  staffId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Rental`. Fields that are set will be updated. */
export type RentalPatch = {
  customerId?: InputMaybe<Scalars['Int']>;
  inventoryId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  rentalDate?: InputMaybe<Scalars['Datetime']>;
  rentalId?: InputMaybe<Scalars['Int']>;
  returnDate?: InputMaybe<Scalars['Datetime']>;
  staffId?: InputMaybe<Scalars['Int']>;
};

export type RentalStddevPopulationAggregates = {
  __typename?: 'RentalStddevPopulationAggregates';
  /** Population standard deviation of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

export type RentalStddevSampleAggregates = {
  __typename?: 'RentalStddevSampleAggregates';
  /** Sample standard deviation of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

export type RentalSumAggregates = {
  __typename?: 'RentalSumAggregates';
  /** Sum of customerId across the matching connection */
  customerId: Scalars['BigInt'];
  /** Sum of inventoryId across the matching connection */
  inventoryId: Scalars['BigInt'];
  /** Sum of rentalId across the matching connection */
  rentalId: Scalars['BigInt'];
  /** Sum of staffId across the matching connection */
  staffId: Scalars['BigInt'];
};

export type RentalVariancePopulationAggregates = {
  __typename?: 'RentalVariancePopulationAggregates';
  /** Population variance of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

export type RentalVarianceSampleAggregates = {
  __typename?: 'RentalVarianceSampleAggregates';
  /** Sample variance of customerId across the matching connection */
  customerId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of inventoryId across the matching connection */
  inventoryId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of rentalId across the matching connection */
  rentalId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Rental` values. */
export type RentalsConnection = {
  __typename?: 'RentalsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RentalAggregates>;
  /** A list of edges which contains the `Rental` and cursor to aid in pagination. */
  edges: Array<RentalsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RentalAggregates>>;
  /** A list of `Rental` objects. */
  nodes: Array<Maybe<Rental>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Rental` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Rental` values. */
export type RentalsConnectionGroupedAggregatesArgs = {
  groupBy: Array<RentalGroupBy>;
  having?: InputMaybe<RentalHavingInput>;
};

/** A `Rental` edge in the connection. */
export type RentalsEdge = {
  __typename?: 'RentalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Rental` at the end of the edge. */
  node?: Maybe<Rental>;
};

/** Methods to use when ordering `Rental`. */
export enum RentalsOrderBy {
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  InventoryIdAsc = 'INVENTORY_ID_ASC',
  InventoryIdDesc = 'INVENTORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PaymentsAverageAmountAsc = 'PAYMENTS_AVERAGE_AMOUNT_ASC',
  PaymentsAverageAmountDesc = 'PAYMENTS_AVERAGE_AMOUNT_DESC',
  PaymentsAverageCustomerIdAsc = 'PAYMENTS_AVERAGE_CUSTOMER_ID_ASC',
  PaymentsAverageCustomerIdDesc = 'PAYMENTS_AVERAGE_CUSTOMER_ID_DESC',
  PaymentsAveragePaymentDateAsc = 'PAYMENTS_AVERAGE_PAYMENT_DATE_ASC',
  PaymentsAveragePaymentDateDesc = 'PAYMENTS_AVERAGE_PAYMENT_DATE_DESC',
  PaymentsAveragePaymentIdAsc = 'PAYMENTS_AVERAGE_PAYMENT_ID_ASC',
  PaymentsAveragePaymentIdDesc = 'PAYMENTS_AVERAGE_PAYMENT_ID_DESC',
  PaymentsAverageRentalIdAsc = 'PAYMENTS_AVERAGE_RENTAL_ID_ASC',
  PaymentsAverageRentalIdDesc = 'PAYMENTS_AVERAGE_RENTAL_ID_DESC',
  PaymentsAverageStaffIdAsc = 'PAYMENTS_AVERAGE_STAFF_ID_ASC',
  PaymentsAverageStaffIdDesc = 'PAYMENTS_AVERAGE_STAFF_ID_DESC',
  PaymentsCountAsc = 'PAYMENTS_COUNT_ASC',
  PaymentsCountDesc = 'PAYMENTS_COUNT_DESC',
  PaymentsDistinctCountAmountAsc = 'PAYMENTS_DISTINCT_COUNT_AMOUNT_ASC',
  PaymentsDistinctCountAmountDesc = 'PAYMENTS_DISTINCT_COUNT_AMOUNT_DESC',
  PaymentsDistinctCountCustomerIdAsc = 'PAYMENTS_DISTINCT_COUNT_CUSTOMER_ID_ASC',
  PaymentsDistinctCountCustomerIdDesc = 'PAYMENTS_DISTINCT_COUNT_CUSTOMER_ID_DESC',
  PaymentsDistinctCountPaymentDateAsc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_DATE_ASC',
  PaymentsDistinctCountPaymentDateDesc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_DATE_DESC',
  PaymentsDistinctCountPaymentIdAsc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_ID_ASC',
  PaymentsDistinctCountPaymentIdDesc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_ID_DESC',
  PaymentsDistinctCountRentalIdAsc = 'PAYMENTS_DISTINCT_COUNT_RENTAL_ID_ASC',
  PaymentsDistinctCountRentalIdDesc = 'PAYMENTS_DISTINCT_COUNT_RENTAL_ID_DESC',
  PaymentsDistinctCountStaffIdAsc = 'PAYMENTS_DISTINCT_COUNT_STAFF_ID_ASC',
  PaymentsDistinctCountStaffIdDesc = 'PAYMENTS_DISTINCT_COUNT_STAFF_ID_DESC',
  PaymentsMaxAmountAsc = 'PAYMENTS_MAX_AMOUNT_ASC',
  PaymentsMaxAmountDesc = 'PAYMENTS_MAX_AMOUNT_DESC',
  PaymentsMaxCustomerIdAsc = 'PAYMENTS_MAX_CUSTOMER_ID_ASC',
  PaymentsMaxCustomerIdDesc = 'PAYMENTS_MAX_CUSTOMER_ID_DESC',
  PaymentsMaxPaymentDateAsc = 'PAYMENTS_MAX_PAYMENT_DATE_ASC',
  PaymentsMaxPaymentDateDesc = 'PAYMENTS_MAX_PAYMENT_DATE_DESC',
  PaymentsMaxPaymentIdAsc = 'PAYMENTS_MAX_PAYMENT_ID_ASC',
  PaymentsMaxPaymentIdDesc = 'PAYMENTS_MAX_PAYMENT_ID_DESC',
  PaymentsMaxRentalIdAsc = 'PAYMENTS_MAX_RENTAL_ID_ASC',
  PaymentsMaxRentalIdDesc = 'PAYMENTS_MAX_RENTAL_ID_DESC',
  PaymentsMaxStaffIdAsc = 'PAYMENTS_MAX_STAFF_ID_ASC',
  PaymentsMaxStaffIdDesc = 'PAYMENTS_MAX_STAFF_ID_DESC',
  PaymentsMinAmountAsc = 'PAYMENTS_MIN_AMOUNT_ASC',
  PaymentsMinAmountDesc = 'PAYMENTS_MIN_AMOUNT_DESC',
  PaymentsMinCustomerIdAsc = 'PAYMENTS_MIN_CUSTOMER_ID_ASC',
  PaymentsMinCustomerIdDesc = 'PAYMENTS_MIN_CUSTOMER_ID_DESC',
  PaymentsMinPaymentDateAsc = 'PAYMENTS_MIN_PAYMENT_DATE_ASC',
  PaymentsMinPaymentDateDesc = 'PAYMENTS_MIN_PAYMENT_DATE_DESC',
  PaymentsMinPaymentIdAsc = 'PAYMENTS_MIN_PAYMENT_ID_ASC',
  PaymentsMinPaymentIdDesc = 'PAYMENTS_MIN_PAYMENT_ID_DESC',
  PaymentsMinRentalIdAsc = 'PAYMENTS_MIN_RENTAL_ID_ASC',
  PaymentsMinRentalIdDesc = 'PAYMENTS_MIN_RENTAL_ID_DESC',
  PaymentsMinStaffIdAsc = 'PAYMENTS_MIN_STAFF_ID_ASC',
  PaymentsMinStaffIdDesc = 'PAYMENTS_MIN_STAFF_ID_DESC',
  PaymentsStddevPopulationAmountAsc = 'PAYMENTS_STDDEV_POPULATION_AMOUNT_ASC',
  PaymentsStddevPopulationAmountDesc = 'PAYMENTS_STDDEV_POPULATION_AMOUNT_DESC',
  PaymentsStddevPopulationCustomerIdAsc = 'PAYMENTS_STDDEV_POPULATION_CUSTOMER_ID_ASC',
  PaymentsStddevPopulationCustomerIdDesc = 'PAYMENTS_STDDEV_POPULATION_CUSTOMER_ID_DESC',
  PaymentsStddevPopulationPaymentDateAsc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_DATE_ASC',
  PaymentsStddevPopulationPaymentDateDesc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_DATE_DESC',
  PaymentsStddevPopulationPaymentIdAsc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_ID_ASC',
  PaymentsStddevPopulationPaymentIdDesc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_ID_DESC',
  PaymentsStddevPopulationRentalIdAsc = 'PAYMENTS_STDDEV_POPULATION_RENTAL_ID_ASC',
  PaymentsStddevPopulationRentalIdDesc = 'PAYMENTS_STDDEV_POPULATION_RENTAL_ID_DESC',
  PaymentsStddevPopulationStaffIdAsc = 'PAYMENTS_STDDEV_POPULATION_STAFF_ID_ASC',
  PaymentsStddevPopulationStaffIdDesc = 'PAYMENTS_STDDEV_POPULATION_STAFF_ID_DESC',
  PaymentsStddevSampleAmountAsc = 'PAYMENTS_STDDEV_SAMPLE_AMOUNT_ASC',
  PaymentsStddevSampleAmountDesc = 'PAYMENTS_STDDEV_SAMPLE_AMOUNT_DESC',
  PaymentsStddevSampleCustomerIdAsc = 'PAYMENTS_STDDEV_SAMPLE_CUSTOMER_ID_ASC',
  PaymentsStddevSampleCustomerIdDesc = 'PAYMENTS_STDDEV_SAMPLE_CUSTOMER_ID_DESC',
  PaymentsStddevSamplePaymentDateAsc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_DATE_ASC',
  PaymentsStddevSamplePaymentDateDesc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_DATE_DESC',
  PaymentsStddevSamplePaymentIdAsc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_ID_ASC',
  PaymentsStddevSamplePaymentIdDesc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_ID_DESC',
  PaymentsStddevSampleRentalIdAsc = 'PAYMENTS_STDDEV_SAMPLE_RENTAL_ID_ASC',
  PaymentsStddevSampleRentalIdDesc = 'PAYMENTS_STDDEV_SAMPLE_RENTAL_ID_DESC',
  PaymentsStddevSampleStaffIdAsc = 'PAYMENTS_STDDEV_SAMPLE_STAFF_ID_ASC',
  PaymentsStddevSampleStaffIdDesc = 'PAYMENTS_STDDEV_SAMPLE_STAFF_ID_DESC',
  PaymentsSumAmountAsc = 'PAYMENTS_SUM_AMOUNT_ASC',
  PaymentsSumAmountDesc = 'PAYMENTS_SUM_AMOUNT_DESC',
  PaymentsSumCustomerIdAsc = 'PAYMENTS_SUM_CUSTOMER_ID_ASC',
  PaymentsSumCustomerIdDesc = 'PAYMENTS_SUM_CUSTOMER_ID_DESC',
  PaymentsSumPaymentDateAsc = 'PAYMENTS_SUM_PAYMENT_DATE_ASC',
  PaymentsSumPaymentDateDesc = 'PAYMENTS_SUM_PAYMENT_DATE_DESC',
  PaymentsSumPaymentIdAsc = 'PAYMENTS_SUM_PAYMENT_ID_ASC',
  PaymentsSumPaymentIdDesc = 'PAYMENTS_SUM_PAYMENT_ID_DESC',
  PaymentsSumRentalIdAsc = 'PAYMENTS_SUM_RENTAL_ID_ASC',
  PaymentsSumRentalIdDesc = 'PAYMENTS_SUM_RENTAL_ID_DESC',
  PaymentsSumStaffIdAsc = 'PAYMENTS_SUM_STAFF_ID_ASC',
  PaymentsSumStaffIdDesc = 'PAYMENTS_SUM_STAFF_ID_DESC',
  PaymentsVariancePopulationAmountAsc = 'PAYMENTS_VARIANCE_POPULATION_AMOUNT_ASC',
  PaymentsVariancePopulationAmountDesc = 'PAYMENTS_VARIANCE_POPULATION_AMOUNT_DESC',
  PaymentsVariancePopulationCustomerIdAsc = 'PAYMENTS_VARIANCE_POPULATION_CUSTOMER_ID_ASC',
  PaymentsVariancePopulationCustomerIdDesc = 'PAYMENTS_VARIANCE_POPULATION_CUSTOMER_ID_DESC',
  PaymentsVariancePopulationPaymentDateAsc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_DATE_ASC',
  PaymentsVariancePopulationPaymentDateDesc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_DATE_DESC',
  PaymentsVariancePopulationPaymentIdAsc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_ID_ASC',
  PaymentsVariancePopulationPaymentIdDesc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_ID_DESC',
  PaymentsVariancePopulationRentalIdAsc = 'PAYMENTS_VARIANCE_POPULATION_RENTAL_ID_ASC',
  PaymentsVariancePopulationRentalIdDesc = 'PAYMENTS_VARIANCE_POPULATION_RENTAL_ID_DESC',
  PaymentsVariancePopulationStaffIdAsc = 'PAYMENTS_VARIANCE_POPULATION_STAFF_ID_ASC',
  PaymentsVariancePopulationStaffIdDesc = 'PAYMENTS_VARIANCE_POPULATION_STAFF_ID_DESC',
  PaymentsVarianceSampleAmountAsc = 'PAYMENTS_VARIANCE_SAMPLE_AMOUNT_ASC',
  PaymentsVarianceSampleAmountDesc = 'PAYMENTS_VARIANCE_SAMPLE_AMOUNT_DESC',
  PaymentsVarianceSampleCustomerIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_CUSTOMER_ID_ASC',
  PaymentsVarianceSampleCustomerIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_CUSTOMER_ID_DESC',
  PaymentsVarianceSamplePaymentDateAsc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_DATE_ASC',
  PaymentsVarianceSamplePaymentDateDesc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_DATE_DESC',
  PaymentsVarianceSamplePaymentIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_ID_ASC',
  PaymentsVarianceSamplePaymentIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_ID_DESC',
  PaymentsVarianceSampleRentalIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_RENTAL_ID_ASC',
  PaymentsVarianceSampleRentalIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_RENTAL_ID_DESC',
  PaymentsVarianceSampleStaffIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_STAFF_ID_ASC',
  PaymentsVarianceSampleStaffIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_STAFF_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalDateAsc = 'RENTAL_DATE_ASC',
  RentalDateDesc = 'RENTAL_DATE_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  ReturnDateAsc = 'RETURN_DATE_ASC',
  ReturnDateDesc = 'RETURN_DATE_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

/** All input for the `rewardsReport` mutation. */
export type RewardsReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  minDollarAmountPurchased?: InputMaybe<Scalars['BigFloat']>;
  minMonthlyPurchases?: InputMaybe<Scalars['Int']>;
};

/** The output of our `rewardsReport` mutation. */
export type RewardsReportPayload = {
  __typename?: 'RewardsReportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** A connection to a list of `SalesByFilmCategory` values. */
export type SalesByFilmCategoriesConnection = {
  __typename?: 'SalesByFilmCategoriesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<SalesByFilmCategoryAggregates>;
  /** A list of edges which contains the `SalesByFilmCategory` and cursor to aid in pagination. */
  edges: Array<SalesByFilmCategoriesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<SalesByFilmCategoryAggregates>>;
  /** A list of `SalesByFilmCategory` objects. */
  nodes: Array<Maybe<SalesByFilmCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SalesByFilmCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `SalesByFilmCategory` values. */
export type SalesByFilmCategoriesConnectionGroupedAggregatesArgs = {
  groupBy: Array<SalesByFilmCategoryGroupBy>;
  having?: InputMaybe<SalesByFilmCategoryHavingInput>;
};

/** A `SalesByFilmCategory` edge in the connection. */
export type SalesByFilmCategoriesEdge = {
  __typename?: 'SalesByFilmCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SalesByFilmCategory` at the end of the edge. */
  node?: Maybe<SalesByFilmCategory>;
};

/** Methods to use when ordering `SalesByFilmCategory`. */
export enum SalesByFilmCategoriesOrderBy {
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  Natural = 'NATURAL',
  TotalSalesAsc = 'TOTAL_SALES_ASC',
  TotalSalesDesc = 'TOTAL_SALES_DESC'
}

export type SalesByFilmCategory = {
  __typename?: 'SalesByFilmCategory';
  category?: Maybe<Scalars['String']>;
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByFilmCategoryAggregates = {
  __typename?: 'SalesByFilmCategoryAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<SalesByFilmCategoryAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<SalesByFilmCategoryDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<SalesByFilmCategoryMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<SalesByFilmCategoryMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<SalesByFilmCategoryStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<SalesByFilmCategoryStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<SalesByFilmCategorySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<SalesByFilmCategoryVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<SalesByFilmCategoryVarianceSampleAggregates>;
};

export type SalesByFilmCategoryAverageAggregates = {
  __typename?: 'SalesByFilmCategoryAverageAggregates';
  /** Mean average of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `SalesByFilmCategory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type SalesByFilmCategoryCondition = {
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `totalSales` field. */
  totalSales?: InputMaybe<Scalars['BigFloat']>;
};

export type SalesByFilmCategoryDistinctCountAggregates = {
  __typename?: 'SalesByFilmCategoryDistinctCountAggregates';
  /** Distinct count of category across the matching connection */
  category?: Maybe<Scalars['BigInt']>;
  /** Distinct count of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `SalesByFilmCategory` for usage during aggregation. */
export enum SalesByFilmCategoryGroupBy {
  Category = 'CATEGORY',
  TotalSales = 'TOTAL_SALES'
}

export type SalesByFilmCategoryHavingAverageInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryHavingDistinctCountInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `SalesByFilmCategory` aggregates. */
export type SalesByFilmCategoryHavingInput = {
  AND?: InputMaybe<Array<SalesByFilmCategoryHavingInput>>;
  OR?: InputMaybe<Array<SalesByFilmCategoryHavingInput>>;
  average?: InputMaybe<SalesByFilmCategoryHavingAverageInput>;
  distinctCount?: InputMaybe<SalesByFilmCategoryHavingDistinctCountInput>;
  max?: InputMaybe<SalesByFilmCategoryHavingMaxInput>;
  min?: InputMaybe<SalesByFilmCategoryHavingMinInput>;
  stddevPopulation?: InputMaybe<SalesByFilmCategoryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<SalesByFilmCategoryHavingStddevSampleInput>;
  sum?: InputMaybe<SalesByFilmCategoryHavingSumInput>;
  variancePopulation?: InputMaybe<SalesByFilmCategoryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<SalesByFilmCategoryHavingVarianceSampleInput>;
};

export type SalesByFilmCategoryHavingMaxInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryHavingMinInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryHavingStddevPopulationInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryHavingStddevSampleInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryHavingSumInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryHavingVariancePopulationInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryHavingVarianceSampleInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByFilmCategoryMaxAggregates = {
  __typename?: 'SalesByFilmCategoryMaxAggregates';
  /** Maximum of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByFilmCategoryMinAggregates = {
  __typename?: 'SalesByFilmCategoryMinAggregates';
  /** Minimum of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByFilmCategoryStddevPopulationAggregates = {
  __typename?: 'SalesByFilmCategoryStddevPopulationAggregates';
  /** Population standard deviation of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByFilmCategoryStddevSampleAggregates = {
  __typename?: 'SalesByFilmCategoryStddevSampleAggregates';
  /** Sample standard deviation of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByFilmCategorySumAggregates = {
  __typename?: 'SalesByFilmCategorySumAggregates';
  /** Sum of totalSales across the matching connection */
  totalSales: Scalars['BigFloat'];
};

export type SalesByFilmCategoryVariancePopulationAggregates = {
  __typename?: 'SalesByFilmCategoryVariancePopulationAggregates';
  /** Population variance of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByFilmCategoryVarianceSampleAggregates = {
  __typename?: 'SalesByFilmCategoryVarianceSampleAggregates';
  /** Sample variance of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByStore = {
  __typename?: 'SalesByStore';
  manager?: Maybe<Scalars['String']>;
  store?: Maybe<Scalars['String']>;
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByStoreAggregates = {
  __typename?: 'SalesByStoreAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<SalesByStoreAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<SalesByStoreDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<SalesByStoreMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<SalesByStoreMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<SalesByStoreStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<SalesByStoreStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<SalesByStoreSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<SalesByStoreVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<SalesByStoreVarianceSampleAggregates>;
};

export type SalesByStoreAverageAggregates = {
  __typename?: 'SalesByStoreAverageAggregates';
  /** Mean average of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `SalesByStore` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SalesByStoreCondition = {
  /** Checks for equality with the object’s `manager` field. */
  manager?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `store` field. */
  store?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `totalSales` field. */
  totalSales?: InputMaybe<Scalars['BigFloat']>;
};

export type SalesByStoreDistinctCountAggregates = {
  __typename?: 'SalesByStoreDistinctCountAggregates';
  /** Distinct count of manager across the matching connection */
  manager?: Maybe<Scalars['BigInt']>;
  /** Distinct count of store across the matching connection */
  store?: Maybe<Scalars['BigInt']>;
  /** Distinct count of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `SalesByStore` for usage during aggregation. */
export enum SalesByStoreGroupBy {
  Manager = 'MANAGER',
  Store = 'STORE',
  TotalSales = 'TOTAL_SALES'
}

export type SalesByStoreHavingAverageInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreHavingDistinctCountInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `SalesByStore` aggregates. */
export type SalesByStoreHavingInput = {
  AND?: InputMaybe<Array<SalesByStoreHavingInput>>;
  OR?: InputMaybe<Array<SalesByStoreHavingInput>>;
  average?: InputMaybe<SalesByStoreHavingAverageInput>;
  distinctCount?: InputMaybe<SalesByStoreHavingDistinctCountInput>;
  max?: InputMaybe<SalesByStoreHavingMaxInput>;
  min?: InputMaybe<SalesByStoreHavingMinInput>;
  stddevPopulation?: InputMaybe<SalesByStoreHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<SalesByStoreHavingStddevSampleInput>;
  sum?: InputMaybe<SalesByStoreHavingSumInput>;
  variancePopulation?: InputMaybe<SalesByStoreHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<SalesByStoreHavingVarianceSampleInput>;
};

export type SalesByStoreHavingMaxInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreHavingMinInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreHavingStddevPopulationInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreHavingStddevSampleInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreHavingSumInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreHavingVariancePopulationInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreHavingVarianceSampleInput = {
  totalSales?: InputMaybe<HavingBigfloatFilter>;
};

export type SalesByStoreMaxAggregates = {
  __typename?: 'SalesByStoreMaxAggregates';
  /** Maximum of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByStoreMinAggregates = {
  __typename?: 'SalesByStoreMinAggregates';
  /** Minimum of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByStoreStddevPopulationAggregates = {
  __typename?: 'SalesByStoreStddevPopulationAggregates';
  /** Population standard deviation of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByStoreStddevSampleAggregates = {
  __typename?: 'SalesByStoreStddevSampleAggregates';
  /** Sample standard deviation of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByStoreSumAggregates = {
  __typename?: 'SalesByStoreSumAggregates';
  /** Sum of totalSales across the matching connection */
  totalSales: Scalars['BigFloat'];
};

export type SalesByStoreVariancePopulationAggregates = {
  __typename?: 'SalesByStoreVariancePopulationAggregates';
  /** Population variance of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

export type SalesByStoreVarianceSampleAggregates = {
  __typename?: 'SalesByStoreVarianceSampleAggregates';
  /** Sample variance of totalSales across the matching connection */
  totalSales?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `SalesByStore` values. */
export type SalesByStoresConnection = {
  __typename?: 'SalesByStoresConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<SalesByStoreAggregates>;
  /** A list of edges which contains the `SalesByStore` and cursor to aid in pagination. */
  edges: Array<SalesByStoresEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<SalesByStoreAggregates>>;
  /** A list of `SalesByStore` objects. */
  nodes: Array<Maybe<SalesByStore>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SalesByStore` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `SalesByStore` values. */
export type SalesByStoresConnectionGroupedAggregatesArgs = {
  groupBy: Array<SalesByStoreGroupBy>;
  having?: InputMaybe<SalesByStoreHavingInput>;
};

/** A `SalesByStore` edge in the connection. */
export type SalesByStoresEdge = {
  __typename?: 'SalesByStoresEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SalesByStore` at the end of the edge. */
  node?: Maybe<SalesByStore>;
};

/** Methods to use when ordering `SalesByStore`. */
export enum SalesByStoresOrderBy {
  ManagerAsc = 'MANAGER_ASC',
  ManagerDesc = 'MANAGER_DESC',
  Natural = 'NATURAL',
  StoreAsc = 'STORE_ASC',
  StoreDesc = 'STORE_DESC',
  TotalSalesAsc = 'TOTAL_SALES_ASC',
  TotalSalesDesc = 'TOTAL_SALES_DESC'
}

export type Staff = Node & {
  __typename?: 'Staff';
  active: Scalars['Boolean'];
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>;
  addressId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastName: Scalars['String'];
  lastUpdate: Scalars['Datetime'];
  password?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Payment`. */
  payments: PaymentsConnection;
  picture?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Rental`. */
  rentals: RentalsConnection;
  staffId: Scalars['Int'];
  storeId: Scalars['Int'];
  /** Reads and enables pagination through a set of `Store`. */
  storesByManagerStaffId: StoresConnection;
  username: Scalars['String'];
};


export type StaffPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type StaffRentalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};


export type StaffStoresByManagerStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

export type StaffAggregates = {
  __typename?: 'StaffAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<StaffAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<StaffDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<StaffMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<StaffMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<StaffStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<StaffStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<StaffSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<StaffVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<StaffVarianceSampleAggregates>;
};

export type StaffAverageAggregates = {
  __typename?: 'StaffAverageAggregates';
  /** Mean average of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Staff` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StaffCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `picture` field. */
  picture?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Staff` values. */
export type StaffConnection = {
  __typename?: 'StaffConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<StaffAggregates>;
  /** A list of edges which contains the `Staff` and cursor to aid in pagination. */
  edges: Array<StaffEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<StaffAggregates>>;
  /** A list of `Staff` objects. */
  nodes: Array<Maybe<Staff>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Staff` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Staff` values. */
export type StaffConnectionGroupedAggregatesArgs = {
  groupBy: Array<StaffGroupBy>;
  having?: InputMaybe<StaffHavingInput>;
};

export type StaffDistinctCountAggregates = {
  __typename?: 'StaffDistinctCountAggregates';
  /** Distinct count of active across the matching connection */
  active?: Maybe<Scalars['BigInt']>;
  /** Distinct count of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of email across the matching connection */
  email?: Maybe<Scalars['BigInt']>;
  /** Distinct count of firstName across the matching connection */
  firstName?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastName across the matching connection */
  lastName?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of password across the matching connection */
  password?: Maybe<Scalars['BigInt']>;
  /** Distinct count of picture across the matching connection */
  picture?: Maybe<Scalars['BigInt']>;
  /** Distinct count of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of username across the matching connection */
  username?: Maybe<Scalars['BigInt']>;
};

/** A `Staff` edge in the connection. */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Staff` at the end of the edge. */
  node?: Maybe<Staff>;
};

/** Grouping methods for `Staff` for usage during aggregation. */
export enum StaffGroupBy {
  Active = 'ACTIVE',
  AddressId = 'ADDRESS_ID',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR',
  Password = 'PASSWORD',
  Picture = 'PICTURE',
  StoreId = 'STORE_ID',
  Username = 'USERNAME'
}

export type StaffHavingAverageInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StaffHavingDistinctCountInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Staff` aggregates. */
export type StaffHavingInput = {
  AND?: InputMaybe<Array<StaffHavingInput>>;
  OR?: InputMaybe<Array<StaffHavingInput>>;
  average?: InputMaybe<StaffHavingAverageInput>;
  distinctCount?: InputMaybe<StaffHavingDistinctCountInput>;
  max?: InputMaybe<StaffHavingMaxInput>;
  min?: InputMaybe<StaffHavingMinInput>;
  stddevPopulation?: InputMaybe<StaffHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<StaffHavingStddevSampleInput>;
  sum?: InputMaybe<StaffHavingSumInput>;
  variancePopulation?: InputMaybe<StaffHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<StaffHavingVarianceSampleInput>;
};

export type StaffHavingMaxInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StaffHavingMinInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StaffHavingStddevPopulationInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StaffHavingStddevSampleInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StaffHavingSumInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StaffHavingVariancePopulationInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StaffHavingVarianceSampleInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  staffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `Staff` */
export type StaffInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  addressId: Scalars['Int'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  password?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  staffId?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['Int'];
  username: Scalars['String'];
};

export type StaffList = {
  __typename?: 'StaffList';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  rowId?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type StaffListAggregates = {
  __typename?: 'StaffListAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<StaffListAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<StaffListDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<StaffListMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<StaffListMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<StaffListStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<StaffListStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<StaffListSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<StaffListVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<StaffListVarianceSampleAggregates>;
};

export type StaffListAverageAggregates = {
  __typename?: 'StaffListAverageAggregates';
  /** Mean average of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `StaffList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type StaffListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars['String']>;
};

export type StaffListDistinctCountAggregates = {
  __typename?: 'StaffListDistinctCountAggregates';
  /** Distinct count of address across the matching connection */
  address?: Maybe<Scalars['BigInt']>;
  /** Distinct count of city across the matching connection */
  city?: Maybe<Scalars['BigInt']>;
  /** Distinct count of country across the matching connection */
  country?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
  /** Distinct count of phone across the matching connection */
  phone?: Maybe<Scalars['BigInt']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of sid across the matching connection */
  sid?: Maybe<Scalars['BigInt']>;
  /** Distinct count of zipCode across the matching connection */
  zipCode?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `StaffList` for usage during aggregation. */
export enum StaffListGroupBy {
  Address = 'ADDRESS',
  City = 'CITY',
  Country = 'COUNTRY',
  Name = 'NAME',
  Phone = 'PHONE',
  RowId = 'ROW_ID',
  Sid = 'SID',
  ZipCode = 'ZIP_CODE'
}

export type StaffListHavingAverageInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListHavingDistinctCountInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `StaffList` aggregates. */
export type StaffListHavingInput = {
  AND?: InputMaybe<Array<StaffListHavingInput>>;
  OR?: InputMaybe<Array<StaffListHavingInput>>;
  average?: InputMaybe<StaffListHavingAverageInput>;
  distinctCount?: InputMaybe<StaffListHavingDistinctCountInput>;
  max?: InputMaybe<StaffListHavingMaxInput>;
  min?: InputMaybe<StaffListHavingMinInput>;
  stddevPopulation?: InputMaybe<StaffListHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<StaffListHavingStddevSampleInput>;
  sum?: InputMaybe<StaffListHavingSumInput>;
  variancePopulation?: InputMaybe<StaffListHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<StaffListHavingVarianceSampleInput>;
};

export type StaffListHavingMaxInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListHavingMinInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListHavingStddevPopulationInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListHavingStddevSampleInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListHavingSumInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListHavingVariancePopulationInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListHavingVarianceSampleInput = {
  rowId?: InputMaybe<HavingIntFilter>;
  sid?: InputMaybe<HavingIntFilter>;
};

export type StaffListMaxAggregates = {
  __typename?: 'StaffListMaxAggregates';
  /** Maximum of rowId across the matching connection */
  rowId?: Maybe<Scalars['Int']>;
  /** Maximum of sid across the matching connection */
  sid?: Maybe<Scalars['Int']>;
};

export type StaffListMinAggregates = {
  __typename?: 'StaffListMinAggregates';
  /** Minimum of rowId across the matching connection */
  rowId?: Maybe<Scalars['Int']>;
  /** Minimum of sid across the matching connection */
  sid?: Maybe<Scalars['Int']>;
};

export type StaffListStddevPopulationAggregates = {
  __typename?: 'StaffListStddevPopulationAggregates';
  /** Population standard deviation of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

export type StaffListStddevSampleAggregates = {
  __typename?: 'StaffListStddevSampleAggregates';
  /** Sample standard deviation of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

export type StaffListSumAggregates = {
  __typename?: 'StaffListSumAggregates';
  /** Sum of rowId across the matching connection */
  rowId: Scalars['BigInt'];
  /** Sum of sid across the matching connection */
  sid: Scalars['BigInt'];
};

export type StaffListVariancePopulationAggregates = {
  __typename?: 'StaffListVariancePopulationAggregates';
  /** Population variance of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

export type StaffListVarianceSampleAggregates = {
  __typename?: 'StaffListVarianceSampleAggregates';
  /** Sample variance of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of sid across the matching connection */
  sid?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `StaffList` values. */
export type StaffListsConnection = {
  __typename?: 'StaffListsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<StaffListAggregates>;
  /** A list of edges which contains the `StaffList` and cursor to aid in pagination. */
  edges: Array<StaffListsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<StaffListAggregates>>;
  /** A list of `StaffList` objects. */
  nodes: Array<Maybe<StaffList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `StaffList` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `StaffList` values. */
export type StaffListsConnectionGroupedAggregatesArgs = {
  groupBy: Array<StaffListGroupBy>;
  having?: InputMaybe<StaffListHavingInput>;
};

/** A `StaffList` edge in the connection. */
export type StaffListsEdge = {
  __typename?: 'StaffListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `StaffList` at the end of the edge. */
  node?: Maybe<StaffList>;
};

/** Methods to use when ordering `StaffList`. */
export enum StaffListsOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SidAsc = 'SID_ASC',
  SidDesc = 'SID_DESC',
  ZipCodeAsc = 'ZIP_CODE_ASC',
  ZipCodeDesc = 'ZIP_CODE_DESC'
}

export type StaffMaxAggregates = {
  __typename?: 'StaffMaxAggregates';
  /** Maximum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Maximum of staffId across the matching connection */
  staffId?: Maybe<Scalars['Int']>;
  /** Maximum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

export type StaffMinAggregates = {
  __typename?: 'StaffMinAggregates';
  /** Minimum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Minimum of staffId across the matching connection */
  staffId?: Maybe<Scalars['Int']>;
  /** Minimum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

/** Methods to use when ordering `Staff`. */
export enum StaffOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PaymentsAverageAmountAsc = 'PAYMENTS_AVERAGE_AMOUNT_ASC',
  PaymentsAverageAmountDesc = 'PAYMENTS_AVERAGE_AMOUNT_DESC',
  PaymentsAverageCustomerIdAsc = 'PAYMENTS_AVERAGE_CUSTOMER_ID_ASC',
  PaymentsAverageCustomerIdDesc = 'PAYMENTS_AVERAGE_CUSTOMER_ID_DESC',
  PaymentsAveragePaymentDateAsc = 'PAYMENTS_AVERAGE_PAYMENT_DATE_ASC',
  PaymentsAveragePaymentDateDesc = 'PAYMENTS_AVERAGE_PAYMENT_DATE_DESC',
  PaymentsAveragePaymentIdAsc = 'PAYMENTS_AVERAGE_PAYMENT_ID_ASC',
  PaymentsAveragePaymentIdDesc = 'PAYMENTS_AVERAGE_PAYMENT_ID_DESC',
  PaymentsAverageRentalIdAsc = 'PAYMENTS_AVERAGE_RENTAL_ID_ASC',
  PaymentsAverageRentalIdDesc = 'PAYMENTS_AVERAGE_RENTAL_ID_DESC',
  PaymentsAverageStaffIdAsc = 'PAYMENTS_AVERAGE_STAFF_ID_ASC',
  PaymentsAverageStaffIdDesc = 'PAYMENTS_AVERAGE_STAFF_ID_DESC',
  PaymentsCountAsc = 'PAYMENTS_COUNT_ASC',
  PaymentsCountDesc = 'PAYMENTS_COUNT_DESC',
  PaymentsDistinctCountAmountAsc = 'PAYMENTS_DISTINCT_COUNT_AMOUNT_ASC',
  PaymentsDistinctCountAmountDesc = 'PAYMENTS_DISTINCT_COUNT_AMOUNT_DESC',
  PaymentsDistinctCountCustomerIdAsc = 'PAYMENTS_DISTINCT_COUNT_CUSTOMER_ID_ASC',
  PaymentsDistinctCountCustomerIdDesc = 'PAYMENTS_DISTINCT_COUNT_CUSTOMER_ID_DESC',
  PaymentsDistinctCountPaymentDateAsc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_DATE_ASC',
  PaymentsDistinctCountPaymentDateDesc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_DATE_DESC',
  PaymentsDistinctCountPaymentIdAsc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_ID_ASC',
  PaymentsDistinctCountPaymentIdDesc = 'PAYMENTS_DISTINCT_COUNT_PAYMENT_ID_DESC',
  PaymentsDistinctCountRentalIdAsc = 'PAYMENTS_DISTINCT_COUNT_RENTAL_ID_ASC',
  PaymentsDistinctCountRentalIdDesc = 'PAYMENTS_DISTINCT_COUNT_RENTAL_ID_DESC',
  PaymentsDistinctCountStaffIdAsc = 'PAYMENTS_DISTINCT_COUNT_STAFF_ID_ASC',
  PaymentsDistinctCountStaffIdDesc = 'PAYMENTS_DISTINCT_COUNT_STAFF_ID_DESC',
  PaymentsMaxAmountAsc = 'PAYMENTS_MAX_AMOUNT_ASC',
  PaymentsMaxAmountDesc = 'PAYMENTS_MAX_AMOUNT_DESC',
  PaymentsMaxCustomerIdAsc = 'PAYMENTS_MAX_CUSTOMER_ID_ASC',
  PaymentsMaxCustomerIdDesc = 'PAYMENTS_MAX_CUSTOMER_ID_DESC',
  PaymentsMaxPaymentDateAsc = 'PAYMENTS_MAX_PAYMENT_DATE_ASC',
  PaymentsMaxPaymentDateDesc = 'PAYMENTS_MAX_PAYMENT_DATE_DESC',
  PaymentsMaxPaymentIdAsc = 'PAYMENTS_MAX_PAYMENT_ID_ASC',
  PaymentsMaxPaymentIdDesc = 'PAYMENTS_MAX_PAYMENT_ID_DESC',
  PaymentsMaxRentalIdAsc = 'PAYMENTS_MAX_RENTAL_ID_ASC',
  PaymentsMaxRentalIdDesc = 'PAYMENTS_MAX_RENTAL_ID_DESC',
  PaymentsMaxStaffIdAsc = 'PAYMENTS_MAX_STAFF_ID_ASC',
  PaymentsMaxStaffIdDesc = 'PAYMENTS_MAX_STAFF_ID_DESC',
  PaymentsMinAmountAsc = 'PAYMENTS_MIN_AMOUNT_ASC',
  PaymentsMinAmountDesc = 'PAYMENTS_MIN_AMOUNT_DESC',
  PaymentsMinCustomerIdAsc = 'PAYMENTS_MIN_CUSTOMER_ID_ASC',
  PaymentsMinCustomerIdDesc = 'PAYMENTS_MIN_CUSTOMER_ID_DESC',
  PaymentsMinPaymentDateAsc = 'PAYMENTS_MIN_PAYMENT_DATE_ASC',
  PaymentsMinPaymentDateDesc = 'PAYMENTS_MIN_PAYMENT_DATE_DESC',
  PaymentsMinPaymentIdAsc = 'PAYMENTS_MIN_PAYMENT_ID_ASC',
  PaymentsMinPaymentIdDesc = 'PAYMENTS_MIN_PAYMENT_ID_DESC',
  PaymentsMinRentalIdAsc = 'PAYMENTS_MIN_RENTAL_ID_ASC',
  PaymentsMinRentalIdDesc = 'PAYMENTS_MIN_RENTAL_ID_DESC',
  PaymentsMinStaffIdAsc = 'PAYMENTS_MIN_STAFF_ID_ASC',
  PaymentsMinStaffIdDesc = 'PAYMENTS_MIN_STAFF_ID_DESC',
  PaymentsStddevPopulationAmountAsc = 'PAYMENTS_STDDEV_POPULATION_AMOUNT_ASC',
  PaymentsStddevPopulationAmountDesc = 'PAYMENTS_STDDEV_POPULATION_AMOUNT_DESC',
  PaymentsStddevPopulationCustomerIdAsc = 'PAYMENTS_STDDEV_POPULATION_CUSTOMER_ID_ASC',
  PaymentsStddevPopulationCustomerIdDesc = 'PAYMENTS_STDDEV_POPULATION_CUSTOMER_ID_DESC',
  PaymentsStddevPopulationPaymentDateAsc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_DATE_ASC',
  PaymentsStddevPopulationPaymentDateDesc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_DATE_DESC',
  PaymentsStddevPopulationPaymentIdAsc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_ID_ASC',
  PaymentsStddevPopulationPaymentIdDesc = 'PAYMENTS_STDDEV_POPULATION_PAYMENT_ID_DESC',
  PaymentsStddevPopulationRentalIdAsc = 'PAYMENTS_STDDEV_POPULATION_RENTAL_ID_ASC',
  PaymentsStddevPopulationRentalIdDesc = 'PAYMENTS_STDDEV_POPULATION_RENTAL_ID_DESC',
  PaymentsStddevPopulationStaffIdAsc = 'PAYMENTS_STDDEV_POPULATION_STAFF_ID_ASC',
  PaymentsStddevPopulationStaffIdDesc = 'PAYMENTS_STDDEV_POPULATION_STAFF_ID_DESC',
  PaymentsStddevSampleAmountAsc = 'PAYMENTS_STDDEV_SAMPLE_AMOUNT_ASC',
  PaymentsStddevSampleAmountDesc = 'PAYMENTS_STDDEV_SAMPLE_AMOUNT_DESC',
  PaymentsStddevSampleCustomerIdAsc = 'PAYMENTS_STDDEV_SAMPLE_CUSTOMER_ID_ASC',
  PaymentsStddevSampleCustomerIdDesc = 'PAYMENTS_STDDEV_SAMPLE_CUSTOMER_ID_DESC',
  PaymentsStddevSamplePaymentDateAsc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_DATE_ASC',
  PaymentsStddevSamplePaymentDateDesc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_DATE_DESC',
  PaymentsStddevSamplePaymentIdAsc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_ID_ASC',
  PaymentsStddevSamplePaymentIdDesc = 'PAYMENTS_STDDEV_SAMPLE_PAYMENT_ID_DESC',
  PaymentsStddevSampleRentalIdAsc = 'PAYMENTS_STDDEV_SAMPLE_RENTAL_ID_ASC',
  PaymentsStddevSampleRentalIdDesc = 'PAYMENTS_STDDEV_SAMPLE_RENTAL_ID_DESC',
  PaymentsStddevSampleStaffIdAsc = 'PAYMENTS_STDDEV_SAMPLE_STAFF_ID_ASC',
  PaymentsStddevSampleStaffIdDesc = 'PAYMENTS_STDDEV_SAMPLE_STAFF_ID_DESC',
  PaymentsSumAmountAsc = 'PAYMENTS_SUM_AMOUNT_ASC',
  PaymentsSumAmountDesc = 'PAYMENTS_SUM_AMOUNT_DESC',
  PaymentsSumCustomerIdAsc = 'PAYMENTS_SUM_CUSTOMER_ID_ASC',
  PaymentsSumCustomerIdDesc = 'PAYMENTS_SUM_CUSTOMER_ID_DESC',
  PaymentsSumPaymentDateAsc = 'PAYMENTS_SUM_PAYMENT_DATE_ASC',
  PaymentsSumPaymentDateDesc = 'PAYMENTS_SUM_PAYMENT_DATE_DESC',
  PaymentsSumPaymentIdAsc = 'PAYMENTS_SUM_PAYMENT_ID_ASC',
  PaymentsSumPaymentIdDesc = 'PAYMENTS_SUM_PAYMENT_ID_DESC',
  PaymentsSumRentalIdAsc = 'PAYMENTS_SUM_RENTAL_ID_ASC',
  PaymentsSumRentalIdDesc = 'PAYMENTS_SUM_RENTAL_ID_DESC',
  PaymentsSumStaffIdAsc = 'PAYMENTS_SUM_STAFF_ID_ASC',
  PaymentsSumStaffIdDesc = 'PAYMENTS_SUM_STAFF_ID_DESC',
  PaymentsVariancePopulationAmountAsc = 'PAYMENTS_VARIANCE_POPULATION_AMOUNT_ASC',
  PaymentsVariancePopulationAmountDesc = 'PAYMENTS_VARIANCE_POPULATION_AMOUNT_DESC',
  PaymentsVariancePopulationCustomerIdAsc = 'PAYMENTS_VARIANCE_POPULATION_CUSTOMER_ID_ASC',
  PaymentsVariancePopulationCustomerIdDesc = 'PAYMENTS_VARIANCE_POPULATION_CUSTOMER_ID_DESC',
  PaymentsVariancePopulationPaymentDateAsc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_DATE_ASC',
  PaymentsVariancePopulationPaymentDateDesc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_DATE_DESC',
  PaymentsVariancePopulationPaymentIdAsc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_ID_ASC',
  PaymentsVariancePopulationPaymentIdDesc = 'PAYMENTS_VARIANCE_POPULATION_PAYMENT_ID_DESC',
  PaymentsVariancePopulationRentalIdAsc = 'PAYMENTS_VARIANCE_POPULATION_RENTAL_ID_ASC',
  PaymentsVariancePopulationRentalIdDesc = 'PAYMENTS_VARIANCE_POPULATION_RENTAL_ID_DESC',
  PaymentsVariancePopulationStaffIdAsc = 'PAYMENTS_VARIANCE_POPULATION_STAFF_ID_ASC',
  PaymentsVariancePopulationStaffIdDesc = 'PAYMENTS_VARIANCE_POPULATION_STAFF_ID_DESC',
  PaymentsVarianceSampleAmountAsc = 'PAYMENTS_VARIANCE_SAMPLE_AMOUNT_ASC',
  PaymentsVarianceSampleAmountDesc = 'PAYMENTS_VARIANCE_SAMPLE_AMOUNT_DESC',
  PaymentsVarianceSampleCustomerIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_CUSTOMER_ID_ASC',
  PaymentsVarianceSampleCustomerIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_CUSTOMER_ID_DESC',
  PaymentsVarianceSamplePaymentDateAsc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_DATE_ASC',
  PaymentsVarianceSamplePaymentDateDesc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_DATE_DESC',
  PaymentsVarianceSamplePaymentIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_ID_ASC',
  PaymentsVarianceSamplePaymentIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_PAYMENT_ID_DESC',
  PaymentsVarianceSampleRentalIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_RENTAL_ID_ASC',
  PaymentsVarianceSampleRentalIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_RENTAL_ID_DESC',
  PaymentsVarianceSampleStaffIdAsc = 'PAYMENTS_VARIANCE_SAMPLE_STAFF_ID_ASC',
  PaymentsVarianceSampleStaffIdDesc = 'PAYMENTS_VARIANCE_SAMPLE_STAFF_ID_DESC',
  PictureAsc = 'PICTURE_ASC',
  PictureDesc = 'PICTURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalsAverageCustomerIdAsc = 'RENTALS_AVERAGE_CUSTOMER_ID_ASC',
  RentalsAverageCustomerIdDesc = 'RENTALS_AVERAGE_CUSTOMER_ID_DESC',
  RentalsAverageInventoryIdAsc = 'RENTALS_AVERAGE_INVENTORY_ID_ASC',
  RentalsAverageInventoryIdDesc = 'RENTALS_AVERAGE_INVENTORY_ID_DESC',
  RentalsAverageLastUpdateAsc = 'RENTALS_AVERAGE_LAST_UPDATE_ASC',
  RentalsAverageLastUpdateDesc = 'RENTALS_AVERAGE_LAST_UPDATE_DESC',
  RentalsAverageRentalDateAsc = 'RENTALS_AVERAGE_RENTAL_DATE_ASC',
  RentalsAverageRentalDateDesc = 'RENTALS_AVERAGE_RENTAL_DATE_DESC',
  RentalsAverageRentalIdAsc = 'RENTALS_AVERAGE_RENTAL_ID_ASC',
  RentalsAverageRentalIdDesc = 'RENTALS_AVERAGE_RENTAL_ID_DESC',
  RentalsAverageReturnDateAsc = 'RENTALS_AVERAGE_RETURN_DATE_ASC',
  RentalsAverageReturnDateDesc = 'RENTALS_AVERAGE_RETURN_DATE_DESC',
  RentalsAverageStaffIdAsc = 'RENTALS_AVERAGE_STAFF_ID_ASC',
  RentalsAverageStaffIdDesc = 'RENTALS_AVERAGE_STAFF_ID_DESC',
  RentalsCountAsc = 'RENTALS_COUNT_ASC',
  RentalsCountDesc = 'RENTALS_COUNT_DESC',
  RentalsDistinctCountCustomerIdAsc = 'RENTALS_DISTINCT_COUNT_CUSTOMER_ID_ASC',
  RentalsDistinctCountCustomerIdDesc = 'RENTALS_DISTINCT_COUNT_CUSTOMER_ID_DESC',
  RentalsDistinctCountInventoryIdAsc = 'RENTALS_DISTINCT_COUNT_INVENTORY_ID_ASC',
  RentalsDistinctCountInventoryIdDesc = 'RENTALS_DISTINCT_COUNT_INVENTORY_ID_DESC',
  RentalsDistinctCountLastUpdateAsc = 'RENTALS_DISTINCT_COUNT_LAST_UPDATE_ASC',
  RentalsDistinctCountLastUpdateDesc = 'RENTALS_DISTINCT_COUNT_LAST_UPDATE_DESC',
  RentalsDistinctCountRentalDateAsc = 'RENTALS_DISTINCT_COUNT_RENTAL_DATE_ASC',
  RentalsDistinctCountRentalDateDesc = 'RENTALS_DISTINCT_COUNT_RENTAL_DATE_DESC',
  RentalsDistinctCountRentalIdAsc = 'RENTALS_DISTINCT_COUNT_RENTAL_ID_ASC',
  RentalsDistinctCountRentalIdDesc = 'RENTALS_DISTINCT_COUNT_RENTAL_ID_DESC',
  RentalsDistinctCountReturnDateAsc = 'RENTALS_DISTINCT_COUNT_RETURN_DATE_ASC',
  RentalsDistinctCountReturnDateDesc = 'RENTALS_DISTINCT_COUNT_RETURN_DATE_DESC',
  RentalsDistinctCountStaffIdAsc = 'RENTALS_DISTINCT_COUNT_STAFF_ID_ASC',
  RentalsDistinctCountStaffIdDesc = 'RENTALS_DISTINCT_COUNT_STAFF_ID_DESC',
  RentalsMaxCustomerIdAsc = 'RENTALS_MAX_CUSTOMER_ID_ASC',
  RentalsMaxCustomerIdDesc = 'RENTALS_MAX_CUSTOMER_ID_DESC',
  RentalsMaxInventoryIdAsc = 'RENTALS_MAX_INVENTORY_ID_ASC',
  RentalsMaxInventoryIdDesc = 'RENTALS_MAX_INVENTORY_ID_DESC',
  RentalsMaxLastUpdateAsc = 'RENTALS_MAX_LAST_UPDATE_ASC',
  RentalsMaxLastUpdateDesc = 'RENTALS_MAX_LAST_UPDATE_DESC',
  RentalsMaxRentalDateAsc = 'RENTALS_MAX_RENTAL_DATE_ASC',
  RentalsMaxRentalDateDesc = 'RENTALS_MAX_RENTAL_DATE_DESC',
  RentalsMaxRentalIdAsc = 'RENTALS_MAX_RENTAL_ID_ASC',
  RentalsMaxRentalIdDesc = 'RENTALS_MAX_RENTAL_ID_DESC',
  RentalsMaxReturnDateAsc = 'RENTALS_MAX_RETURN_DATE_ASC',
  RentalsMaxReturnDateDesc = 'RENTALS_MAX_RETURN_DATE_DESC',
  RentalsMaxStaffIdAsc = 'RENTALS_MAX_STAFF_ID_ASC',
  RentalsMaxStaffIdDesc = 'RENTALS_MAX_STAFF_ID_DESC',
  RentalsMinCustomerIdAsc = 'RENTALS_MIN_CUSTOMER_ID_ASC',
  RentalsMinCustomerIdDesc = 'RENTALS_MIN_CUSTOMER_ID_DESC',
  RentalsMinInventoryIdAsc = 'RENTALS_MIN_INVENTORY_ID_ASC',
  RentalsMinInventoryIdDesc = 'RENTALS_MIN_INVENTORY_ID_DESC',
  RentalsMinLastUpdateAsc = 'RENTALS_MIN_LAST_UPDATE_ASC',
  RentalsMinLastUpdateDesc = 'RENTALS_MIN_LAST_UPDATE_DESC',
  RentalsMinRentalDateAsc = 'RENTALS_MIN_RENTAL_DATE_ASC',
  RentalsMinRentalDateDesc = 'RENTALS_MIN_RENTAL_DATE_DESC',
  RentalsMinRentalIdAsc = 'RENTALS_MIN_RENTAL_ID_ASC',
  RentalsMinRentalIdDesc = 'RENTALS_MIN_RENTAL_ID_DESC',
  RentalsMinReturnDateAsc = 'RENTALS_MIN_RETURN_DATE_ASC',
  RentalsMinReturnDateDesc = 'RENTALS_MIN_RETURN_DATE_DESC',
  RentalsMinStaffIdAsc = 'RENTALS_MIN_STAFF_ID_ASC',
  RentalsMinStaffIdDesc = 'RENTALS_MIN_STAFF_ID_DESC',
  RentalsStddevPopulationCustomerIdAsc = 'RENTALS_STDDEV_POPULATION_CUSTOMER_ID_ASC',
  RentalsStddevPopulationCustomerIdDesc = 'RENTALS_STDDEV_POPULATION_CUSTOMER_ID_DESC',
  RentalsStddevPopulationInventoryIdAsc = 'RENTALS_STDDEV_POPULATION_INVENTORY_ID_ASC',
  RentalsStddevPopulationInventoryIdDesc = 'RENTALS_STDDEV_POPULATION_INVENTORY_ID_DESC',
  RentalsStddevPopulationLastUpdateAsc = 'RENTALS_STDDEV_POPULATION_LAST_UPDATE_ASC',
  RentalsStddevPopulationLastUpdateDesc = 'RENTALS_STDDEV_POPULATION_LAST_UPDATE_DESC',
  RentalsStddevPopulationRentalDateAsc = 'RENTALS_STDDEV_POPULATION_RENTAL_DATE_ASC',
  RentalsStddevPopulationRentalDateDesc = 'RENTALS_STDDEV_POPULATION_RENTAL_DATE_DESC',
  RentalsStddevPopulationRentalIdAsc = 'RENTALS_STDDEV_POPULATION_RENTAL_ID_ASC',
  RentalsStddevPopulationRentalIdDesc = 'RENTALS_STDDEV_POPULATION_RENTAL_ID_DESC',
  RentalsStddevPopulationReturnDateAsc = 'RENTALS_STDDEV_POPULATION_RETURN_DATE_ASC',
  RentalsStddevPopulationReturnDateDesc = 'RENTALS_STDDEV_POPULATION_RETURN_DATE_DESC',
  RentalsStddevPopulationStaffIdAsc = 'RENTALS_STDDEV_POPULATION_STAFF_ID_ASC',
  RentalsStddevPopulationStaffIdDesc = 'RENTALS_STDDEV_POPULATION_STAFF_ID_DESC',
  RentalsStddevSampleCustomerIdAsc = 'RENTALS_STDDEV_SAMPLE_CUSTOMER_ID_ASC',
  RentalsStddevSampleCustomerIdDesc = 'RENTALS_STDDEV_SAMPLE_CUSTOMER_ID_DESC',
  RentalsStddevSampleInventoryIdAsc = 'RENTALS_STDDEV_SAMPLE_INVENTORY_ID_ASC',
  RentalsStddevSampleInventoryIdDesc = 'RENTALS_STDDEV_SAMPLE_INVENTORY_ID_DESC',
  RentalsStddevSampleLastUpdateAsc = 'RENTALS_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  RentalsStddevSampleLastUpdateDesc = 'RENTALS_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  RentalsStddevSampleRentalDateAsc = 'RENTALS_STDDEV_SAMPLE_RENTAL_DATE_ASC',
  RentalsStddevSampleRentalDateDesc = 'RENTALS_STDDEV_SAMPLE_RENTAL_DATE_DESC',
  RentalsStddevSampleRentalIdAsc = 'RENTALS_STDDEV_SAMPLE_RENTAL_ID_ASC',
  RentalsStddevSampleRentalIdDesc = 'RENTALS_STDDEV_SAMPLE_RENTAL_ID_DESC',
  RentalsStddevSampleReturnDateAsc = 'RENTALS_STDDEV_SAMPLE_RETURN_DATE_ASC',
  RentalsStddevSampleReturnDateDesc = 'RENTALS_STDDEV_SAMPLE_RETURN_DATE_DESC',
  RentalsStddevSampleStaffIdAsc = 'RENTALS_STDDEV_SAMPLE_STAFF_ID_ASC',
  RentalsStddevSampleStaffIdDesc = 'RENTALS_STDDEV_SAMPLE_STAFF_ID_DESC',
  RentalsSumCustomerIdAsc = 'RENTALS_SUM_CUSTOMER_ID_ASC',
  RentalsSumCustomerIdDesc = 'RENTALS_SUM_CUSTOMER_ID_DESC',
  RentalsSumInventoryIdAsc = 'RENTALS_SUM_INVENTORY_ID_ASC',
  RentalsSumInventoryIdDesc = 'RENTALS_SUM_INVENTORY_ID_DESC',
  RentalsSumLastUpdateAsc = 'RENTALS_SUM_LAST_UPDATE_ASC',
  RentalsSumLastUpdateDesc = 'RENTALS_SUM_LAST_UPDATE_DESC',
  RentalsSumRentalDateAsc = 'RENTALS_SUM_RENTAL_DATE_ASC',
  RentalsSumRentalDateDesc = 'RENTALS_SUM_RENTAL_DATE_DESC',
  RentalsSumRentalIdAsc = 'RENTALS_SUM_RENTAL_ID_ASC',
  RentalsSumRentalIdDesc = 'RENTALS_SUM_RENTAL_ID_DESC',
  RentalsSumReturnDateAsc = 'RENTALS_SUM_RETURN_DATE_ASC',
  RentalsSumReturnDateDesc = 'RENTALS_SUM_RETURN_DATE_DESC',
  RentalsSumStaffIdAsc = 'RENTALS_SUM_STAFF_ID_ASC',
  RentalsSumStaffIdDesc = 'RENTALS_SUM_STAFF_ID_DESC',
  RentalsVariancePopulationCustomerIdAsc = 'RENTALS_VARIANCE_POPULATION_CUSTOMER_ID_ASC',
  RentalsVariancePopulationCustomerIdDesc = 'RENTALS_VARIANCE_POPULATION_CUSTOMER_ID_DESC',
  RentalsVariancePopulationInventoryIdAsc = 'RENTALS_VARIANCE_POPULATION_INVENTORY_ID_ASC',
  RentalsVariancePopulationInventoryIdDesc = 'RENTALS_VARIANCE_POPULATION_INVENTORY_ID_DESC',
  RentalsVariancePopulationLastUpdateAsc = 'RENTALS_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  RentalsVariancePopulationLastUpdateDesc = 'RENTALS_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  RentalsVariancePopulationRentalDateAsc = 'RENTALS_VARIANCE_POPULATION_RENTAL_DATE_ASC',
  RentalsVariancePopulationRentalDateDesc = 'RENTALS_VARIANCE_POPULATION_RENTAL_DATE_DESC',
  RentalsVariancePopulationRentalIdAsc = 'RENTALS_VARIANCE_POPULATION_RENTAL_ID_ASC',
  RentalsVariancePopulationRentalIdDesc = 'RENTALS_VARIANCE_POPULATION_RENTAL_ID_DESC',
  RentalsVariancePopulationReturnDateAsc = 'RENTALS_VARIANCE_POPULATION_RETURN_DATE_ASC',
  RentalsVariancePopulationReturnDateDesc = 'RENTALS_VARIANCE_POPULATION_RETURN_DATE_DESC',
  RentalsVariancePopulationStaffIdAsc = 'RENTALS_VARIANCE_POPULATION_STAFF_ID_ASC',
  RentalsVariancePopulationStaffIdDesc = 'RENTALS_VARIANCE_POPULATION_STAFF_ID_DESC',
  RentalsVarianceSampleCustomerIdAsc = 'RENTALS_VARIANCE_SAMPLE_CUSTOMER_ID_ASC',
  RentalsVarianceSampleCustomerIdDesc = 'RENTALS_VARIANCE_SAMPLE_CUSTOMER_ID_DESC',
  RentalsVarianceSampleInventoryIdAsc = 'RENTALS_VARIANCE_SAMPLE_INVENTORY_ID_ASC',
  RentalsVarianceSampleInventoryIdDesc = 'RENTALS_VARIANCE_SAMPLE_INVENTORY_ID_DESC',
  RentalsVarianceSampleLastUpdateAsc = 'RENTALS_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  RentalsVarianceSampleLastUpdateDesc = 'RENTALS_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  RentalsVarianceSampleRentalDateAsc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_DATE_ASC',
  RentalsVarianceSampleRentalDateDesc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_DATE_DESC',
  RentalsVarianceSampleRentalIdAsc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_ID_ASC',
  RentalsVarianceSampleRentalIdDesc = 'RENTALS_VARIANCE_SAMPLE_RENTAL_ID_DESC',
  RentalsVarianceSampleReturnDateAsc = 'RENTALS_VARIANCE_SAMPLE_RETURN_DATE_ASC',
  RentalsVarianceSampleReturnDateDesc = 'RENTALS_VARIANCE_SAMPLE_RETURN_DATE_DESC',
  RentalsVarianceSampleStaffIdAsc = 'RENTALS_VARIANCE_SAMPLE_STAFF_ID_ASC',
  RentalsVarianceSampleStaffIdDesc = 'RENTALS_VARIANCE_SAMPLE_STAFF_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC',
  StoresByManagerStaffIdAverageAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_ADDRESS_ID_ASC',
  StoresByManagerStaffIdAverageAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_ADDRESS_ID_DESC',
  StoresByManagerStaffIdAverageLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_LAST_UPDATE_ASC',
  StoresByManagerStaffIdAverageLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_LAST_UPDATE_DESC',
  StoresByManagerStaffIdAverageManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdAverageManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdAverageStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_STORE_ID_ASC',
  StoresByManagerStaffIdAverageStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_AVERAGE_STORE_ID_DESC',
  StoresByManagerStaffIdCountAsc = 'STORES_BY_MANAGER_STAFF_ID_COUNT_ASC',
  StoresByManagerStaffIdCountDesc = 'STORES_BY_MANAGER_STAFF_ID_COUNT_DESC',
  StoresByManagerStaffIdDistinctCountAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_ADDRESS_ID_ASC',
  StoresByManagerStaffIdDistinctCountAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_ADDRESS_ID_DESC',
  StoresByManagerStaffIdDistinctCountLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_LAST_UPDATE_ASC',
  StoresByManagerStaffIdDistinctCountLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_LAST_UPDATE_DESC',
  StoresByManagerStaffIdDistinctCountManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdDistinctCountManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdDistinctCountStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_STORE_ID_ASC',
  StoresByManagerStaffIdDistinctCountStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_DISTINCT_COUNT_STORE_ID_DESC',
  StoresByManagerStaffIdMaxAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_MAX_ADDRESS_ID_ASC',
  StoresByManagerStaffIdMaxAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_MAX_ADDRESS_ID_DESC',
  StoresByManagerStaffIdMaxLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_MAX_LAST_UPDATE_ASC',
  StoresByManagerStaffIdMaxLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_MAX_LAST_UPDATE_DESC',
  StoresByManagerStaffIdMaxManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_MAX_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdMaxManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_MAX_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdMaxStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_MAX_STORE_ID_ASC',
  StoresByManagerStaffIdMaxStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_MAX_STORE_ID_DESC',
  StoresByManagerStaffIdMinAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_MIN_ADDRESS_ID_ASC',
  StoresByManagerStaffIdMinAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_MIN_ADDRESS_ID_DESC',
  StoresByManagerStaffIdMinLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_MIN_LAST_UPDATE_ASC',
  StoresByManagerStaffIdMinLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_MIN_LAST_UPDATE_DESC',
  StoresByManagerStaffIdMinManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_MIN_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdMinManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_MIN_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdMinStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_MIN_STORE_ID_ASC',
  StoresByManagerStaffIdMinStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_MIN_STORE_ID_DESC',
  StoresByManagerStaffIdStddevPopulationAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_ADDRESS_ID_ASC',
  StoresByManagerStaffIdStddevPopulationAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_ADDRESS_ID_DESC',
  StoresByManagerStaffIdStddevPopulationLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_LAST_UPDATE_ASC',
  StoresByManagerStaffIdStddevPopulationLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_LAST_UPDATE_DESC',
  StoresByManagerStaffIdStddevPopulationManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdStddevPopulationManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdStddevPopulationStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_STORE_ID_ASC',
  StoresByManagerStaffIdStddevPopulationStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_POPULATION_STORE_ID_DESC',
  StoresByManagerStaffIdStddevSampleAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  StoresByManagerStaffIdStddevSampleAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  StoresByManagerStaffIdStddevSampleLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_LAST_UPDATE_ASC',
  StoresByManagerStaffIdStddevSampleLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_LAST_UPDATE_DESC',
  StoresByManagerStaffIdStddevSampleManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdStddevSampleManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdStddevSampleStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_STORE_ID_ASC',
  StoresByManagerStaffIdStddevSampleStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_STDDEV_SAMPLE_STORE_ID_DESC',
  StoresByManagerStaffIdSumAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_SUM_ADDRESS_ID_ASC',
  StoresByManagerStaffIdSumAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_SUM_ADDRESS_ID_DESC',
  StoresByManagerStaffIdSumLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_SUM_LAST_UPDATE_ASC',
  StoresByManagerStaffIdSumLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_SUM_LAST_UPDATE_DESC',
  StoresByManagerStaffIdSumManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_SUM_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdSumManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_SUM_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdSumStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_SUM_STORE_ID_ASC',
  StoresByManagerStaffIdSumStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_SUM_STORE_ID_DESC',
  StoresByManagerStaffIdVariancePopulationAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  StoresByManagerStaffIdVariancePopulationAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  StoresByManagerStaffIdVariancePopulationLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_LAST_UPDATE_ASC',
  StoresByManagerStaffIdVariancePopulationLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_LAST_UPDATE_DESC',
  StoresByManagerStaffIdVariancePopulationManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdVariancePopulationManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdVariancePopulationStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_STORE_ID_ASC',
  StoresByManagerStaffIdVariancePopulationStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_POPULATION_STORE_ID_DESC',
  StoresByManagerStaffIdVarianceSampleAddressIdAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  StoresByManagerStaffIdVarianceSampleAddressIdDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  StoresByManagerStaffIdVarianceSampleLastUpdateAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_LAST_UPDATE_ASC',
  StoresByManagerStaffIdVarianceSampleLastUpdateDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_LAST_UPDATE_DESC',
  StoresByManagerStaffIdVarianceSampleManagerStaffIdAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_MANAGER_STAFF_ID_ASC',
  StoresByManagerStaffIdVarianceSampleManagerStaffIdDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_MANAGER_STAFF_ID_DESC',
  StoresByManagerStaffIdVarianceSampleStoreIdAsc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_STORE_ID_ASC',
  StoresByManagerStaffIdVarianceSampleStoreIdDesc = 'STORES_BY_MANAGER_STAFF_ID_VARIANCE_SAMPLE_STORE_ID_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

/** Represents an update to a `Staff`. Fields that are set will be updated. */
export type StaffPatch = {
  active?: InputMaybe<Scalars['Boolean']>;
  addressId?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  password?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  staffId?: InputMaybe<Scalars['Int']>;
  storeId?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type StaffStddevPopulationAggregates = {
  __typename?: 'StaffStddevPopulationAggregates';
  /** Population standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type StaffStddevSampleAggregates = {
  __typename?: 'StaffStddevSampleAggregates';
  /** Sample standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type StaffSumAggregates = {
  __typename?: 'StaffSumAggregates';
  /** Sum of addressId across the matching connection */
  addressId: Scalars['BigInt'];
  /** Sum of staffId across the matching connection */
  staffId: Scalars['BigInt'];
  /** Sum of storeId across the matching connection */
  storeId: Scalars['BigInt'];
};

export type StaffVariancePopulationAggregates = {
  __typename?: 'StaffVariancePopulationAggregates';
  /** Population variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type StaffVarianceSampleAggregates = {
  __typename?: 'StaffVarianceSampleAggregates';
  /** Sample variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of staffId across the matching connection */
  staffId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type Store = Node & {
  __typename?: 'Store';
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>;
  addressId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  lastUpdate: Scalars['Datetime'];
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>;
  managerStaffId: Scalars['Int'];
  storeId: Scalars['Int'];
};

export type StoreAggregates = {
  __typename?: 'StoreAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<StoreAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<StoreDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<StoreMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<StoreMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<StoreStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<StoreStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<StoreSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<StoreVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<StoreVarianceSampleAggregates>;
};

export type StoreAverageAggregates = {
  __typename?: 'StoreAverageAggregates';
  /** Mean average of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Store` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StoreCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `managerStaffId` field. */
  managerStaffId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
};

export type StoreDistinctCountAggregates = {
  __typename?: 'StoreDistinctCountAggregates';
  /** Distinct count of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of lastUpdate across the matching connection */
  lastUpdate?: Maybe<Scalars['BigInt']>;
  /** Distinct count of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigInt']>;
};

/** Grouping methods for `Store` for usage during aggregation. */
export enum StoreGroupBy {
  AddressId = 'ADDRESS_ID',
  LastUpdate = 'LAST_UPDATE',
  LastUpdateTruncatedToDay = 'LAST_UPDATE_TRUNCATED_TO_DAY',
  LastUpdateTruncatedToHour = 'LAST_UPDATE_TRUNCATED_TO_HOUR'
}

export type StoreHavingAverageInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StoreHavingDistinctCountInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Store` aggregates. */
export type StoreHavingInput = {
  AND?: InputMaybe<Array<StoreHavingInput>>;
  OR?: InputMaybe<Array<StoreHavingInput>>;
  average?: InputMaybe<StoreHavingAverageInput>;
  distinctCount?: InputMaybe<StoreHavingDistinctCountInput>;
  max?: InputMaybe<StoreHavingMaxInput>;
  min?: InputMaybe<StoreHavingMinInput>;
  stddevPopulation?: InputMaybe<StoreHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<StoreHavingStddevSampleInput>;
  sum?: InputMaybe<StoreHavingSumInput>;
  variancePopulation?: InputMaybe<StoreHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<StoreHavingVarianceSampleInput>;
};

export type StoreHavingMaxInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StoreHavingMinInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StoreHavingStddevPopulationInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StoreHavingStddevSampleInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StoreHavingSumInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StoreHavingVariancePopulationInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

export type StoreHavingVarianceSampleInput = {
  addressId?: InputMaybe<HavingIntFilter>;
  lastUpdate?: InputMaybe<HavingDatetimeFilter>;
  managerStaffId?: InputMaybe<HavingIntFilter>;
  storeId?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `Store` */
export type StoreInput = {
  addressId: Scalars['Int'];
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  managerStaffId: Scalars['Int'];
  storeId?: InputMaybe<Scalars['Int']>;
};

export type StoreMaxAggregates = {
  __typename?: 'StoreMaxAggregates';
  /** Maximum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Maximum of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['Int']>;
  /** Maximum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

export type StoreMinAggregates = {
  __typename?: 'StoreMinAggregates';
  /** Minimum of addressId across the matching connection */
  addressId?: Maybe<Scalars['Int']>;
  /** Minimum of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['Int']>;
  /** Minimum of storeId across the matching connection */
  storeId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Store`. Fields that are set will be updated. */
export type StorePatch = {
  addressId?: InputMaybe<Scalars['Int']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  managerStaffId?: InputMaybe<Scalars['Int']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

export type StoreStddevPopulationAggregates = {
  __typename?: 'StoreStddevPopulationAggregates';
  /** Population standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type StoreStddevSampleAggregates = {
  __typename?: 'StoreStddevSampleAggregates';
  /** Sample standard deviation of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type StoreSumAggregates = {
  __typename?: 'StoreSumAggregates';
  /** Sum of addressId across the matching connection */
  addressId: Scalars['BigInt'];
  /** Sum of managerStaffId across the matching connection */
  managerStaffId: Scalars['BigInt'];
  /** Sum of storeId across the matching connection */
  storeId: Scalars['BigInt'];
};

export type StoreVariancePopulationAggregates = {
  __typename?: 'StoreVariancePopulationAggregates';
  /** Population variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

export type StoreVarianceSampleAggregates = {
  __typename?: 'StoreVarianceSampleAggregates';
  /** Sample variance of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of managerStaffId across the matching connection */
  managerStaffId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of storeId across the matching connection */
  storeId?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Store` values. */
export type StoresConnection = {
  __typename?: 'StoresConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<StoreAggregates>;
  /** A list of edges which contains the `Store` and cursor to aid in pagination. */
  edges: Array<StoresEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<StoreAggregates>>;
  /** A list of `Store` objects. */
  nodes: Array<Maybe<Store>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Store` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Store` values. */
export type StoresConnectionGroupedAggregatesArgs = {
  groupBy: Array<StoreGroupBy>;
  having?: InputMaybe<StoreHavingInput>;
};

/** A `Store` edge in the connection. */
export type StoresEdge = {
  __typename?: 'StoresEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Store` at the end of the edge. */
  node?: Maybe<Store>;
};

/** Methods to use when ordering `Store`. */
export enum StoresOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  ManagerStaffIdAsc = 'MANAGER_STAFF_ID_ASC',
  ManagerStaffIdDesc = 'MANAGER_STAFF_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

/** All input for the `updateActorById` mutation. */
export type UpdateActorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Actor` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Actor` being updated. */
  patch: ActorPatch;
};

/** All input for the `updateActor` mutation. */
export type UpdateActorInput = {
  actorId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Actor` being updated. */
  patch: ActorPatch;
};

export type UpdateActorNameInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UpdateActorNamePayload = {
  __typename?: 'UpdateActorNamePayload';
  actor?: Maybe<Actor>;
};

/** The output of our update `Actor` mutation. */
export type UpdateActorPayload = {
  __typename?: 'UpdateActorPayload';
  /** The `Actor` that was updated by this mutation. */
  actor?: Maybe<Actor>;
  /** An edge for our `Actor`. May be used by Relay 1. */
  actorEdge?: Maybe<ActorsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Actor` mutation. */
export type UpdateActorPayloadActorEdgeArgs = {
  orderBy?: InputMaybe<Array<ActorsOrderBy>>;
};

/** All input for the `updateAddressById` mutation. */
export type UpdateAddressByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
};

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  addressId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload';
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `updateCategoryById` mutation. */
export type UpdateCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  categoryId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateCityById` mutation. */
export type UpdateCityByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `City` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `City` being updated. */
  patch: CityPatch;
};

/** All input for the `updateCity` mutation. */
export type UpdateCityInput = {
  cityId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `City` being updated. */
  patch: CityPatch;
};

/** The output of our update `City` mutation. */
export type UpdateCityPayload = {
  __typename?: 'UpdateCityPayload';
  /** The `City` that was updated by this mutation. */
  city?: Maybe<City>;
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `City` mutation. */
export type UpdateCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** All input for the `updateCountryById` mutation. */
export type UpdateCountryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Country` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Country` being updated. */
  patch: CountryPatch;
};

/** All input for the `updateCountry` mutation. */
export type UpdateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  countryId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Country` being updated. */
  patch: CountryPatch;
};

/** The output of our update `Country` mutation. */
export type UpdateCountryPayload = {
  __typename?: 'UpdateCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Country` that was updated by this mutation. */
  country?: Maybe<Country>;
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Country` mutation. */
export type UpdateCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** All input for the `updateCustomerById` mutation. */
export type UpdateCustomerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Customer` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Customer` being updated. */
  patch: CustomerPatch;
};

/** All input for the `updateCustomer` mutation. */
export type UpdateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  customerId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Customer` being updated. */
  patch: CustomerPatch;
};

/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayload = {
  __typename?: 'UpdateCustomerPayload';
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was updated by this mutation. */
  customer?: Maybe<Customer>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};

/** All input for the `updateFilmActorById` mutation. */
export type UpdateFilmActorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FilmActor` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `FilmActor` being updated. */
  patch: FilmActorPatch;
};

/** All input for the `updateFilmActor` mutation. */
export type UpdateFilmActorInput = {
  actorId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  filmId: Scalars['Int'];
  /** An object where the defined keys will be set on the `FilmActor` being updated. */
  patch: FilmActorPatch;
};

/** The output of our update `FilmActor` mutation. */
export type UpdateFilmActorPayload = {
  __typename?: 'UpdateFilmActorPayload';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>;
  /** The `FilmActor` that was updated by this mutation. */
  filmActor?: Maybe<FilmActor>;
  /** An edge for our `FilmActor`. May be used by Relay 1. */
  filmActorEdge?: Maybe<FilmActorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `FilmActor` mutation. */
export type UpdateFilmActorPayloadFilmActorEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};

/** All input for the `updateFilmById` mutation. */
export type UpdateFilmByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Film` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Film` being updated. */
  patch: FilmPatch;
};

/** All input for the `updateFilmCategoryById` mutation. */
export type UpdateFilmCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FilmCategory` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `FilmCategory` being updated. */
  patch: FilmCategoryPatch;
};

/** All input for the `updateFilmCategory` mutation. */
export type UpdateFilmCategoryInput = {
  categoryId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  filmId: Scalars['Int'];
  /** An object where the defined keys will be set on the `FilmCategory` being updated. */
  patch: FilmCategoryPatch;
};

/** The output of our update `FilmCategory` mutation. */
export type UpdateFilmCategoryPayload = {
  __typename?: 'UpdateFilmCategoryPayload';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>;
  /** The `FilmCategory` that was updated by this mutation. */
  filmCategory?: Maybe<FilmCategory>;
  /** An edge for our `FilmCategory`. May be used by Relay 1. */
  filmCategoryEdge?: Maybe<FilmCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `FilmCategory` mutation. */
export type UpdateFilmCategoryPayloadFilmCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};

/** All input for the `updateFilm` mutation. */
export type UpdateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  filmId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Film` being updated. */
  patch: FilmPatch;
};

/** The output of our update `Film` mutation. */
export type UpdateFilmPayload = {
  __typename?: 'UpdateFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Film` that was updated by this mutation. */
  film?: Maybe<Film>;
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>;
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Film` mutation. */
export type UpdateFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/** All input for the `updateInventoryById` mutation. */
export type UpdateInventoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Inventory` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Inventory` being updated. */
  patch: InventoryPatch;
};

/** All input for the `updateInventory` mutation. */
export type UpdateInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  inventoryId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Inventory` being updated. */
  patch: InventoryPatch;
};

/** The output of our update `Inventory` mutation. */
export type UpdateInventoryPayload = {
  __typename?: 'UpdateInventoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>;
  /** The `Inventory` that was updated by this mutation. */
  inventory?: Maybe<Inventory>;
  /** An edge for our `Inventory`. May be used by Relay 1. */
  inventoryEdge?: Maybe<InventoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Inventory` mutation. */
export type UpdateInventoryPayloadInventoryEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};

/** All input for the `updateLanguageById` mutation. */
export type UpdateLanguageByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Language` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Language` being updated. */
  patch: LanguagePatch;
};

/** All input for the `updateLanguage` mutation. */
export type UpdateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  languageId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Language` being updated. */
  patch: LanguagePatch;
};

/** The output of our update `Language` mutation. */
export type UpdateLanguagePayload = {
  __typename?: 'UpdateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` that was updated by this mutation. */
  language?: Maybe<Language>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Language` mutation. */
export type UpdateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};

/** All input for the `updatePaymentById` mutation. */
export type UpdatePaymentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Payment` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Payment` being updated. */
  patch: PaymentPatch;
};

/** All input for the `updatePayment` mutation. */
export type UpdatePaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Payment` being updated. */
  patch: PaymentPatch;
  paymentId: Scalars['Int'];
};

/** The output of our update `Payment` mutation. */
export type UpdatePaymentPayload = {
  __typename?: 'UpdatePaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>;
  /** The `Payment` that was updated by this mutation. */
  payment?: Maybe<Payment>;
  /** An edge for our `Payment`. May be used by Relay 1. */
  paymentEdge?: Maybe<PaymentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>;
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>;
};


/** The output of our update `Payment` mutation. */
export type UpdatePaymentPayloadPaymentEdgeArgs = {
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};

/** All input for the `updateRentalById` mutation. */
export type UpdateRentalByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Rental` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Rental` being updated. */
  patch: RentalPatch;
};

/** All input for the `updateRental` mutation. */
export type UpdateRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Rental` being updated. */
  patch: RentalPatch;
  rentalId: Scalars['Int'];
};

/** The output of our update `Rental` mutation. */
export type UpdateRentalPayload = {
  __typename?: 'UpdateRentalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>;
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rental` that was updated by this mutation. */
  rental?: Maybe<Rental>;
  /** An edge for our `Rental`. May be used by Relay 1. */
  rentalEdge?: Maybe<RentalsEdge>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>;
};


/** The output of our update `Rental` mutation. */
export type UpdateRentalPayloadRentalEdgeArgs = {
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/** All input for the `updateStaffById` mutation. */
export type UpdateStaffByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Staff` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Staff` being updated. */
  patch: StaffPatch;
};

/** All input for the `updateStaff` mutation. */
export type UpdateStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Staff` being updated. */
  patch: StaffPatch;
  staffId: Scalars['Int'];
};

/** The output of our update `Staff` mutation. */
export type UpdateStaffPayload = {
  __typename?: 'UpdateStaffPayload';
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Staff` that was updated by this mutation. */
  staff?: Maybe<Staff>;
  /** An edge for our `Staff`. May be used by Relay 1. */
  staffEdge?: Maybe<StaffEdge>;
};


/** The output of our update `Staff` mutation. */
export type UpdateStaffPayloadStaffEdgeArgs = {
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};

/** All input for the `updateStoreById` mutation. */
export type UpdateStoreByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Store` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Store` being updated. */
  patch: StorePatch;
};

/** All input for the `updateStore` mutation. */
export type UpdateStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Store` being updated. */
  patch: StorePatch;
  storeId: Scalars['Int'];
};

/** The output of our update `Store` mutation. */
export type UpdateStorePayload = {
  __typename?: 'UpdateStorePayload';
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Store` that was updated by this mutation. */
  store?: Maybe<Store>;
  /** An edge for our `Store`. May be used by Relay 1. */
  storeEdge?: Maybe<StoresEdge>;
};


/** The output of our update `Store` mutation. */
export type UpdateStorePayloadStoreEdgeArgs = {
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

export type ActorListFragment = { __typename?: 'Actor', id: string, lastName: string, firstName: string };

export type FilmCardFragment = { __typename?: 'Film', id: string, title: string, description?: string | null | undefined, releaseYear?: any | null | undefined, rentalDuration: number, rentalRate: any, filmCategories: { __typename?: 'FilmCategoriesConnection', nodes: Array<{ __typename?: 'FilmCategory', id: string, category?: { __typename?: 'Category', name: string } | null | undefined } | null | undefined> }, filmActors: { __typename?: 'FilmActorsConnection', nodes: Array<{ __typename?: 'FilmActor', id: string, actor?: { __typename?: 'Actor', id: string, lastName: string, firstName: string } | null | undefined } | null | undefined> } };

export type HighestRatedFilmsPageQueryVariables = Exact<{
  filmCount: Scalars['Int'];
}>;


export type HighestRatedFilmsPageQuery = { __typename?: 'Query', films?: { __typename?: 'FilmsConnection', totalCount: number, nodes: Array<{ __typename?: 'Film', id: string, title: string, description?: string | null | undefined, releaseYear?: any | null | undefined, rentalDuration: number, rentalRate: any, filmCategories: { __typename?: 'FilmCategoriesConnection', nodes: Array<{ __typename?: 'FilmCategory', id: string, category?: { __typename?: 'Category', name: string } | null | undefined } | null | undefined> }, filmActors: { __typename?: 'FilmActorsConnection', nodes: Array<{ __typename?: 'FilmActor', id: string, actor?: { __typename?: 'Actor', id: string, lastName: string, firstName: string } | null | undefined } | null | undefined> } } | null | undefined> } | null | undefined };

export const ActorListFragmentDoc = gql`
    fragment ActorList on Actor {
  id
  lastName
  firstName
}
    `;
export const FilmCardFragmentDoc = gql`
    fragment FilmCard on Film {
  id
  title
  description
  releaseYear
  rentalDuration
  rentalRate
  filmCategories {
    nodes {
      id
      category {
        name
      }
    }
  }
  filmActors(first: 3, orderBy: NATURAL) {
    nodes {
      id
      actor {
        ...ActorList
      }
    }
  }
}
    ${ActorListFragmentDoc}`;
export const HighestRatedFilmsPageDocument = gql`
    query HighestRatedFilmsPage($filmCount: Int!) {
  films(first: $filmCount, orderBy: RENTAL_RATE_DESC) {
    totalCount
    nodes {
      ...FilmCard
    }
  }
}
    ${FilmCardFragmentDoc}`;

/**
 * __useHighestRatedFilmsPageQuery__
 *
 * To run a query within a React component, call `useHighestRatedFilmsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHighestRatedFilmsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHighestRatedFilmsPageQuery({
 *   variables: {
 *      filmCount: // value for 'filmCount'
 *   },
 * });
 */
export function useHighestRatedFilmsPageQuery(baseOptions: Apollo.QueryHookOptions<HighestRatedFilmsPageQuery, HighestRatedFilmsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HighestRatedFilmsPageQuery, HighestRatedFilmsPageQueryVariables>(HighestRatedFilmsPageDocument, options);
      }
export function useHighestRatedFilmsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HighestRatedFilmsPageQuery, HighestRatedFilmsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HighestRatedFilmsPageQuery, HighestRatedFilmsPageQueryVariables>(HighestRatedFilmsPageDocument, options);
        }
export type HighestRatedFilmsPageQueryHookResult = ReturnType<typeof useHighestRatedFilmsPageQuery>;
export type HighestRatedFilmsPageLazyQueryHookResult = ReturnType<typeof useHighestRatedFilmsPageLazyQuery>;
export type HighestRatedFilmsPageQueryResult = Apollo.QueryResult<HighestRatedFilmsPageQuery, HighestRatedFilmsPageQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "Actor",
      "Address",
      "Category",
      "City",
      "Country",
      "Customer",
      "Film",
      "FilmActor",
      "FilmCategory",
      "Inventory",
      "Language",
      "Payment",
      "Query",
      "Rental",
      "Staff",
      "Store"
    ]
  }
};
      export default result;
    