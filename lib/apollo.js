import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://campoffice.wpsecta.dk/graphql",
  cache: new InMemoryCache(),
});
