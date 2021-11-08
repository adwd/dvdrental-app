import http from "http";
import { postgraphile } from "postgraphile";
import { TagsFilePlugin } from "postgraphile/plugins";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import PgAggregatesPlugin from "@graphile/pg-aggregates";
import { myPlugin } from "./my-plugin";

const port = process.env.PORT || 5000;

http
  .createServer(
    postgraphile(
      process.env.DATABASE_URL ||
        "postgres://postgres:mysecretpassword@localhost:5432/dvdrental",
      "public",
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        appendPlugins: [
          TagsFilePlugin,
          PgSimplifyInflectorPlugin,
          PgAggregatesPlugin,
          myPlugin,
        ],
        classicIds: true,
      }
    )
  )
  .listen(port);

console.log(
  `postgraphile server is running: http://localhost:${port}/graphiql`
);
