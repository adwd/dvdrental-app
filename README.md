# GraphQL Sample App

## これはなに

GraphQL のサーバーを Apollo Server と PostGraphile で実装したもののセットです

## 動作環境

- Node.js
- yarn
- Docker

## 起動する

```bash
# 依存ライブラリのインストール
yarn

# Apollo Serverの起動
yarn workspace apollo-prisma-server dev

# PostGraphileの起動、事前にdocker compose upが必要です
docker compose up -d
yarn workspace postgraphile-server dev
```

## Apollo Server

https://www.apollographql.com/docs/apollo-server/

```bash
cd packages/apollo-prisma-server
```

※apollo-prisma-server とありますが Prisma はまだ使ってません

Apollo Server を使って GraphQL サーバーを実装するサンプルです。
バックエンドサーバーとして普通はデータベースなどに問い合わせるところをハードコードしたデータを使っています。
GraphQL サーバーの Resolver の雰囲気と、Resolver がネストして実行されていく感じがわかるかもしれません。

## PostGraphile

https://www.graphile.org/

```bash
cd packages/postgraphile-server
```

PostgreSQL と接続して GraphQL API を自動で生成する PostGraphile を使ったサンプルです。
`docker compose up -d` で起動している DVD レンタルを模したデータが入っているサーバーと接続します。
とりあえずの雰囲気と、 `src/my-plugin.ts` で DB 外のロジックを連携できる雰囲気がわかるかもしれません。
