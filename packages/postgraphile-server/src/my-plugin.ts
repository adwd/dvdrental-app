import { gql, makeExtendSchemaPlugin } from "graphile-utils";
import * as __sql from "pg-sql2";
type PGSQL2 = typeof __sql;

export const myPlugin = makeExtendSchemaPlugin((build) => {
  const pgSql = build.pgSql as PGSQL2;
  return {
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

      input UpdateActorNameInput {
        firstName: String!
        lastName: String!
      }

      type UpdateActorNamePayload {
        actor: Actor @pgField
      }

      extend type Query {
        pet: Pet
        randomFilm: Film
        randomFilmsConnection: FilmsConnection
      }

      extend type Mutation {
        updateActorName(
          id: ID!
          input: UpdateActorNameInput!
        ): UpdateActorNamePayload!
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
        randomFilm: async (_query, args, context, resolveInfo) => {
          // Remember: resolveInfo.graphile.selectGraphQLResultFromTable is where the PostGraphile
          // look-ahead magic happens!
          const rows = await resolveInfo.graphile.selectGraphQLResultFromTable(
            pgSql.fragment`film`,
            (tableAlias, queryBuilder) => {
              queryBuilder.orderBy(pgSql.fragment`random()`);
              queryBuilder.limit(1);
            }
          );
          return rows[0];
        },
        randomUsersConnection: (_query, args, context, resolveInfo) => {
          return resolveInfo.graphile.selectGraphQLResultFromTable(
            pgSql.fragment`film`,
            (tableAlias, queryBuilder) => {
              // queryBuilder.orderBy(pgSql.fragment`random()`);
            }
          );
        },
      },
      Mutation: {
        updateActorName: async (_query, args, context, resolveInfo) => {
          const { pgClient } = context;

          // Start a sub-transaction
          await pgClient.query("SAVEPOINT graphql_mutation");
          try {
            // Our custom logic to register the user:
            const {
              rows: [actor],
            } = await pgClient.query(
              `UPDATE actor
               SET    first_name = $1,
                      last_name = $2
               WHERE  actor_id = $3
               RETURNING *`,
              [args.input.firstName, args.input.lastName, args.id]
            );

            // Now we fetch the result that the GraphQL
            // client requested, using the new user
            // account as the source of the data. You
            // should always use
            // `resolveInfo.graphile.selectGraphQLResultFromTable` if you return database
            // data from your custom field.
            const [row] =
              await resolveInfo.graphile.selectGraphQLResultFromTable(
                pgSql.fragment`actor`,
                (tableAlias, queryBuilder) => {
                  queryBuilder.where(
                    pgSql.fragment`${tableAlias}.actor_id = ${pgSql.value(
                      actor.actor_id
                    )}`
                  );
                }
              );

            // Finally we send the email. If this
            // fails then we'll catch the error
            // and roll back the transaction, and
            // it will be as if the user never
            // registered
            // await mockSendEmail(
            //   args.input.email,
            //   "Welcome to my site",
            //   `You're user ${user.id} - thanks for being awesome`
            // );

            // If the return type is a database record type, like User, then
            // you would return `row` directly. However if it's an indirect
            // interface such as a connection or mutation payload then
            // you return an object with a `data` property. You can add
            // additional properties too, that can be used by other fields
            // on the result type.
            return {
              data: row,
            };
          } catch (e) {
            // Oh noes! If at first you don't succeed,
            // destroy all evidence you ever tried.
            await pgClient.query("ROLLBACK TO SAVEPOINT graphql_mutation");
            throw e;
          } finally {
            // Release our savepoint so it doesn't conflict with other mutations
            await pgClient.query("RELEASE SAVEPOINT graphql_mutation");
          }
        },
      },
      Actor: {
        score: () => {
          return 1;
        },
      },
    },
  };
});
