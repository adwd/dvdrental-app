# README

## To be read

- Custom Mutations
  - https://www.graphile.org/postgraphile/custom-mutations/
- Security
  - https://www.graphile.org/postgraphile/security/
  - JWT のやつを動かしてみる？
- その他（必要になったら読む）
  - https://www.graphile.org/postgraphile/realtime/
  - https://www.graphile.org/postgraphile/subscriptions/
  - https://www.graphile.org/postgraphile/background-tasks/
  - https://www.graphile.org/postgraphile/debugging/

## note

https://www.graphile.org/postgraphile/introduction/

### Inflection

https://www.graphile.org/postgraphile/inflection/

snake_case を CamelCase に直したり、usersById を users にしたりするやつ

### Permission

https://www.graphile.org/postgraphile/tables/#permissions

`GRANT UPDATE (username, name) ON users TO graphql_visitor;` みたいなので権限設定できる

### CRUD Mutations

https://www.graphile.org/postgraphile/crud-mutations/

disableDefaultMutations: true でデフォルトで生成される CRUD を無効化できる

### Relay Global Object Identification Spec

https://www.graphile.org/postgraphile/node-id/

デフォルトだと `nodeId` がグローバルにユニークな ID が入るが、 `classicIds: true` で `id` にできる

### Database Functions

https://www.graphile.org/postgraphile/functions/

SQL 関数を定義すると GraphQL にも反映される

```sql
create function get_film(id int) returns film as $$
  select * from film where film.film_id = $1;
$$ language sql stable;
```

```graphql
query GetUser {
  getFilm(id: 1) {
    id
    title
  }
}
```

実運用だとデフォルトの Mutation を Disable にして、この SQL 関数とかでビジネスロジックを反映した Mutation を加えることになると思うが、
PostgreSQL の経験があるチームならそれでいいけどそうでないなら別の手段が欲しい気がする。

### Computed Columns

https://www.graphile.org/postgraphile/computed-columns/

```sql
CREATE FUNCTION actor_full_name(actor actor) RETURNS text AS $$
  SELECT actor.first_name || ' ' || actor.last_name
$$ LANGUAGE sql STABLE;
```

```graphql
query GetActor {
  actor(actorId: 1) {
    id
    firstName
    lastName
    fullName
  }
}
```

## Custom Queries

https://www.graphile.org/postgraphile/custom-queries/

```sql
create function search_actors(search text)
returns setof actor as $$
    select *
    from actor
    where
      first_name ilike ('%' || search || '%') or
      last_name ilike ('%' || search || '%')
  $$ language sql stable;
```

```graphql
query SearchActors {
  searchActors(search: "bob", first: 10) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        firstName
        lastName
      }
    }
  }
}
```

## Extend Schema

https://www.graphile.org/postgraphile/make-extend-schema-plugin/

```ts
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
```

## Views

https://www.graphile.org/postgraphile/views/

```sql
CREATE VIEW english_film AS
    SELECT *
    FROM film
    WHERE language_id = 1;
```

```graphql
query EnglishFilms {
  englishFilms {
    edges {
      node {
        filmId
        title
      }
    }
  }
}
```

## Aggregates

https://www.graphile.org/postgraphile/aggregates/

```graphql
query FilmLanguages {
  films {
    groupedAggregates(groupBy: LANGUAGE_ID) {
      keys
    }
  }
}
```

## Smart Tags

https://www.graphile.org/postgraphile/smart-tags/

> Ways of adding tags
> There's multiple ways of adding tags to entities:
>
> - The postgraphile.tags.json5 file
> - Smart Comments in the database via COMMENT
> - A makePgSmartTagsPlugin instance
> - Your own custom Graphile Engine plugin

```sql
comment on table original_table is E'@name renamed_table';
comment on column original_table.col1 is E'@name colA';
comment on type flibble is E'@name flamble';
comment on function getFlamble() is E'@name allFlambles';
```
