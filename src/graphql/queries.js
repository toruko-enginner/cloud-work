/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDnmCwkAccount = /* GraphQL */ `
  query GetDnmCwkAccount($account_id: String!) {
    getDnmCwkAccount(account_id: $account_id) {
      account_id
      user_id
      account_name
      account_name_kana
      entry_datetime
      entry_user
      group_id
      joining_date
      mail
      retirement_flg
      role_id
      update_datetime
      update_user
      __typename
    }
  }
`;
export const getDnmCwkAccountForUserId = /* GraphQL */ `
  query GetDnmCwkAccountForUserId($user_id: String!) {
    getDnmCwkAccountForUserId(user_id: $user_id) {
      account_id
      user_id
      account_name
      account_name_kana
      entry_datetime
      entry_user
      group_id
      joining_date
      mail
      retirement_flg
      role_id
      update_datetime
      update_user
      __typename
    }
  }
`;
export const listDnmCwkAccounts = /* GraphQL */ `
  query ListDnmCwkAccounts(
    $filter: TableDnmCwkAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDnmCwkAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        account_id
        user_id
        account_name
        account_name_kana
        entry_datetime
        entry_user
        group_id
        joining_date
        mail
        retirement_flg
        role_id
        update_datetime
        update_user
        __typename
      }
      nextToken
      __typename
    }
  }
`;
