// Apolloのドキュメントから持ってきたコードをちょっと変更したもの
// https://www.apollographql.com/docs/apollo-server/data/resolvers/
import { ApolloServer, gql } from "apollo-server";

// スキーマ定義
const typeDefs = gql`
  type Query {
    # 単純なQueryのサンプル
    users: [User]
    # GraphQL Resolverがネストして実行されるサンプル
    libraries: [Library]
  }

  type User {
    name: String!
    address: String
  }

  type Library {
    branch: String!
    books: [Book!]
  }

  type Book {
    title: String!
    author: Author!
  }

  type Author {
    name: String!
  }
`;

// ハードコードしたデータ
// usersは上で定義しているUserの型と一致するが、
// libraryとbooksはibrary/Bookの型とちょっと違う
// この下に実装しているResolverがネストして実行されることで解決される
const users = [
  {
    name: "John Doe",
    address: "123 Main St",
  },
  {
    name: "Alice Smith",
  },
];

const libraries = [
  {
    branch: "downtown",
  },
  {
    branch: "riverside",
  },
];

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    branch: "riverside",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
    branch: "downtown",
  },
];

// Resolver
const resolvers = {
  Query: {
    users() {
      return users;
    },
    libraries() {
      return libraries;
    },
  },
  Library: {
    books(parent) {
      return books.filter((book) => book.branch === parent.branch);
    },
  },
  Book: {
    author(parent) {
      return {
        name: parent.author,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
