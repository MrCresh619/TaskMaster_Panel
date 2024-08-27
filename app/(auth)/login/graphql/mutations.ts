import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    access_token
    refresh_token
  }
}
`;