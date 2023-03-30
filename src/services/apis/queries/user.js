import { gql } from '@apollo/client';

export const getUserByPhone = gql`
  query GET_USER_BY_PHONE($phone: String) {
    user(where: { phone: { _eq: $phone } }) {
      id
      phone
    }
  }
`;
