const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');
const favoriteSchema = require('./schemas/favoriteSchema.js')
const typeDefs = gql`
  type Query
  type Mutation
`;

const schema = makeExecutableSchema({
    typeDefs: [typeDefs, favoriteSchema.typeDefs],
    resolvers: [favoriteSchema.resolvers]
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
