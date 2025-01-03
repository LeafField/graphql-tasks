import { graphql } from "../gql";

export const SIGN_IN = graphql(`
  mutation signIn($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      accessToken
    }
  }
`);

export const SIGN_UP = graphql(`
  mutation SignUp($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      name
    }
  }
`);
