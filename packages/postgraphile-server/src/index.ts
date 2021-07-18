import http from "http";
import { postgraphile } from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import { myPlugin } from "./my-plugin";

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
        appendPlugins: [PgSimplifyInflectorPlugin, myPlugin],
        classicIds: true,
      }
    )
  )
  .listen(process.env.PORT || 5000);
