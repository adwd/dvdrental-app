# README

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
