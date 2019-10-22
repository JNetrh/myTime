/* eslint-disable no-console */
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { onError } from 'apollo-link-error';

export function configureClient() {
  const cache = new InMemoryCache();

  const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    if (graphQLErrors) {
      console.error(
        graphQLErrors.map(
          ({ message, locations, path }) =>
            `[GraphQL error]: Message: ${message}, Operation: ${
              operation.operationName
            }, Locations: ${locations &&
              locations
                .map(
                  (location: { line: number; column: number }) =>
                    `${location.line}:${location.column}`,
                )
                .join(', ')}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const terminatingLink = new BatchHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
  });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, terminatingLink]),
    cache,
  });
}
