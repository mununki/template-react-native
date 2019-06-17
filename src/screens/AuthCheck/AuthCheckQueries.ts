import gql from "graphql-tag";

export const GET_MY_PROFILE = gql`
  query GetMyProfile {
    getMyProfile {
      ok
      error
      user {
        id
      }
    }
  }
`;
