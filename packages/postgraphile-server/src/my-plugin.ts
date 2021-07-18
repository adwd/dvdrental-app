import { gql, makeExtendSchemaPlugin } from "graphile-utils";

export const myPlugin = makeExtendSchemaPlugin(() => ({
  typeDefs: gql`
    enum AnimalType {
      CAT
      DOG
      FISH
    }

    type Pet {
      type: AnimalType!
    }

    extend type Actor {
      score: Int
    }

    extend type Query {
      pet: Pet
    }
  `,
  resolvers: {
    AnimalType: {
      CAT: "cat",
      DOG: "dog",
      FISH: "fish",
    },
    Query: {
      pet: async (_query, args, context, resolveInfo) => {
        return {
          type: "cat",
        };
      },
    },
    Actor: {
      score: () => {
        return 1;
      },
    },
  },
}));
