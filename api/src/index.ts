import 'core-js/stable';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Instrument {
    title: String
    sentiment: Int
  }

  type Query {
    instruments: [Instrument!]!
  }
`;

const resolvers = {
  Query: {
    instruments: () => [
      { title: 'DAX', sentiment: Math.round(Math.random() * 10) },
      { title: 'AAA', sentiment: Math.round(Math.random() * -8) },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
