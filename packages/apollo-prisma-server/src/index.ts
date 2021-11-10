import { ApolloServer } from "apollo-server";
import { loadTypedefsSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { Book, Resolvers } from "./generated/graphql";

const sources = loadTypedefsSync("src/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});
const typeDefs = sources.map((source) => source.document);

const books: Book[] = [
  {
    __typename: "Book",
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    __typename: "Book",
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook: Book = {
        __typename: "Book",
        author: args.input.author,
        title: args.input.title,
      };
      books.push(newBook);

      return newBook;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
