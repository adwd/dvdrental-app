// Apolloのドキュメントから持ってきたコードをちょっと変更したもの
// https://www.apollographql.com/docs/apollo-server/data/resolvers/
import { ApolloServer, gql } from "apollo-server";
import { Resolvers } from "./generated/graphql";

// スキーマ定義
const typeDefs = gql`
  type Query {
    # 単純なQueryのサンプル
    users: [User]
    # GraphQL Resolverがネストして実行されるサンプル
    libraries: [Library]
  }

  type Mutation {
    addUser(input: AddUserInput!): User
  }

  type User {
    name: String!
    status: Status!
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

  enum Status {
    ACTIVE
    INACTIVE
  }

  input AddUserInput {
    name: String!
    address: String
  }
`;

// ハードコードしたデータ
// usersは上で定義しているUserの型と一致するが、
// libraryとbooksはibrary/Bookの型とちょっと違う
// この下に実装しているResolverがネストして実行されることで解決される
const users = [
  {
    name: "John Doe",
    status: "ACTIVE",
    address: "123 Main St",
  },
  {
    name: "Alice Smith",
    status: "INACTIVE",
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
    // GraphQL Resolverは4つの引数を取る
    // https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments
    books(parent, args, context, info) {
      return books.filter((book) => book.branch === parent.branch);
    },
  },
  Book: {
    // このようなparentからフィールドを返すだけのResolverは省略できる
    // https://www.apollographql.com/docs/apollo-server/data/resolvers/#default-resolvers
    title(parent) {
      return parent.title;
    },
    author(parent) {
      return {
        name: parent.author,
      };
    },
  },
  User: {
    status(parent) {
      return parent.status;
    },
  },
  Mutation: {
    addUser(_, args) {
      const { name, status, address } = args.input;
      const newUser = { name, status: "ACTIVE", address };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
