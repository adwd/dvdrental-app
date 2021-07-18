# README

## To be read

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
