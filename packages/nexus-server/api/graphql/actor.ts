import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { Actor } from "nexus-prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ActorObject = objectType({
  name: "Actor",
  definition(t) {
    t.field(Actor.actor_id);
    t.field(Actor.first_name);
    t.field(Actor.last_name);
    t.field(Actor.last_update);
  },
  // definition(t) {
  //   t.int("id");
  //   t.string("first_name");
  //   t.string("last_name");
  //   t.date("last_update");
  // },
});

export const ActorQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("actors", {
      type: "Actor",
      resolve: async (_root, _args, ctx) => {
        // return ctx.db.actors;
        return await prisma.actor.findMany();
      },
    });
  },
});

export const ActorMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updateName", {
      type: "Actor",
      args: {
        id: nonNull(intArg()),
        first_name: nonNull(stringArg()),
        last_name: nonNull(stringArg()),
      },
      resolve(_root, args, ctx) {
        const actor: Actor = {
          id: args.id,
          first_name: args.first_name,
          last_name: args.last_name,
          last_update: "",
        };

        // ctx.db.posts.push(/*...*/);
        return actor; // ...
      },
    });
  },
});
