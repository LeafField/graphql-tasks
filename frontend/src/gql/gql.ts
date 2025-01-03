/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query getTasks($userId: Int!) {\n    getTasks(userId: $userId) {\n      ...getTasksTaskTable\n    }\n  }\n": types.GetTasksDocument,
    "\n  fragment getTasksTaskTable on Tasks {\n    data {\n      id\n      name\n      status\n      dueDate\n    }\n  }\n": types.GetTasksTaskTableFragmentDoc,
    "\n  mutation signIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      accessToken\n    }\n  }\n": types.SignInDocument,
    "\n  mutation SignUp($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      id\n      email\n      name\n    }\n  }\n": types.SignUpDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTasks($userId: Int!) {\n    getTasks(userId: $userId) {\n      ...getTasksTaskTable\n    }\n  }\n"): (typeof documents)["\n  query getTasks($userId: Int!) {\n    getTasks(userId: $userId) {\n      ...getTasksTaskTable\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment getTasksTaskTable on Tasks {\n    data {\n      id\n      name\n      status\n      dueDate\n    }\n  }\n"): (typeof documents)["\n  fragment getTasksTaskTable on Tasks {\n    data {\n      id\n      name\n      status\n      dueDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation signIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUp($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      id\n      email\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      id\n      email\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;