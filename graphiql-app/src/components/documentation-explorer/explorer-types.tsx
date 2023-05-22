export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

// export type MainQuery = {
//   continent: Array<Continent>;
//   continents: Array<Continent>;
//   country: Array<Country>;
//   countries: Array<Country>;
//   language: Array<Language>;
//   languages: Array<Language>;
// };

export type MainQuery = {
  continent: IFieldDatas[];
  continents: IFieldDatas[];
  country: IFieldDatas[];
  countries: IFieldDatas[];
  language: IFieldDatas[];
  languages: IFieldDatas[];
};

export type Continent = {
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  awsRegion: Scalars['String'];
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currencies: Array<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  phones: Array<Scalars['String']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name: Scalars['String'];
  native: Scalars['String'];
  rtl: Scalars['Boolean'];
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type Subdivision = {
  __typename?: 'Subdivision';
  code: Scalars['ID'];
  emoji?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export interface ISchema {
  data: {
    __schema: {
      types: [];
    };
  };
}

export interface IField {
  name: string;
  fields: IFieldDatas[];
}

export interface IFieldDatas {
  name: string;
  __typename: string;
}

export interface IQueryRequest {
  [key: string]: string[];
}

export interface IVariables {
  [key: string]: string;
}
