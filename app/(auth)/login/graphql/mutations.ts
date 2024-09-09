import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    access_token
    access_token_expires_at
    refresh_token
    refresh_token_expires_at
  }
}`;

export const REGISTER_MUTATION = gql`
mutation RegisterUser($email: String!, $password: String!, $username: String!) {
  registerUser(email: $email, password: $password, username: $username) {
    id
    username
  }
}`;