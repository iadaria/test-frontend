import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailIsVerified: Scalars['Boolean'];
  id: Scalars['Float'];
  incomes: Array<Income>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export type Balance = {
  __typename?: 'Balance';
  fund: Scalars['String'];
  sum: Scalars['Float'];
};

export type GetBalanceInput = {
  id: Scalars['Float'];
};

export type GetBalanceOutput = {
  __typename?: 'GetBalanceOutput';
  balance: Array<Balance>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetIncomeInput = {
  id: Scalars['Float'];
};

export type GetIncomeOutput = {
  __typename?: 'GetIncomeOutput';
  error?: Maybe<Scalars['String']>;
  income?: Maybe<Income>;
  ok: Scalars['Boolean'];
};

export type Income = {
  __typename?: 'Income';
  account?: Maybe<Account>;
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  fund: Scalars['String'];
  groupId: Scalars['Int'];
  id: Scalars['Float'];
  isNewStableScore: Scalars['Boolean'];
  isOld: Scalars['Boolean'];
  newStableScoreId: Scalars['Int'];
  payId: Scalars['String'];
  stableScoreId: Scalars['Int'];
  type: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getBalance: GetBalanceOutput;
  getIncome: GetIncomeOutput;
};


export type QueryGetBalanceArgs = {
  input: GetBalanceInput;
};


export type QueryGetIncomeArgs = {
  input: GetIncomeInput;
};

export type GetBalanceQueryVariables = Exact<{
  input: GetBalanceInput;
}>;


export type GetBalanceQuery = { __typename?: 'Query', getBalance: { __typename?: 'GetBalanceOutput', ok: boolean, error?: string | null, balance: Array<{ __typename?: 'Balance', fund: string, sum: number }> } };


export const GetBalanceDocument = gql`
    query getBalance($input: GetBalanceInput!) {
  getBalance(input: $input) {
    ok
    error
    balance {
      fund
      sum
    }
  }
}
    `;

/**
 * __useGetBalanceQuery__
 *
 * To run a query within a React component, call `useGetBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalanceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetBalanceQuery(baseOptions: Apollo.QueryHookOptions<GetBalanceQuery, GetBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBalanceQuery, GetBalanceQueryVariables>(GetBalanceDocument, options);
      }
export function useGetBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBalanceQuery, GetBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBalanceQuery, GetBalanceQueryVariables>(GetBalanceDocument, options);
        }
export type GetBalanceQueryHookResult = ReturnType<typeof useGetBalanceQuery>;
export type GetBalanceLazyQueryHookResult = ReturnType<typeof useGetBalanceLazyQuery>;
export type GetBalanceQueryResult = Apollo.QueryResult<GetBalanceQuery, GetBalanceQueryVariables>;