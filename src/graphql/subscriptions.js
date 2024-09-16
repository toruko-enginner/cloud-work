/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDnmCwkAccount = /* GraphQL */ `
  subscription OnCreateDnmCwkAccount(
    $account_id: String
    $user_id: String
    $account_name: String
    $account_name_kana: String
    $entry_datetime: AWSDateTime
  ) {
    onCreateDnmCwkAccount(
      account_id: $account_id
      user_id: $user_id
      account_name: $account_name
      account_name_kana: $account_name_kana
      entry_datetime: $entry_datetime
    ) {
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
export const onUpdateDnmCwkAccount = /* GraphQL */ `
  subscription OnUpdateDnmCwkAccount(
    $account_id: String
    $user_id: String
    $account_name: String
    $account_name_kana: String
    $entry_datetime: AWSDateTime
  ) {
    onUpdateDnmCwkAccount(
      account_id: $account_id
      user_id: $user_id
      account_name: $account_name
      account_name_kana: $account_name_kana
      entry_datetime: $entry_datetime
    ) {
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
export const onDeleteDnmCwkAccount = /* GraphQL */ `
  subscription OnDeleteDnmCwkAccount(
    $account_id: String
    $user_id: String
    $account_name: String
    $account_name_kana: String
    $entry_datetime: AWSDateTime
  ) {
    onDeleteDnmCwkAccount(
      account_id: $account_id
      user_id: $user_id
      account_name: $account_name
      account_name_kana: $account_name_kana
      entry_datetime: $entry_datetime
    ) {
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
