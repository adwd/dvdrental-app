# GraphQL Sample App

GraphQL のサーバーを Apollo Server と PostGraphile で実装したものと、React/Apollo なクライアントアプリのセットです。

## ハンズオン資料

https://github.com/adwd/graphql-sample-app/blob/main/docs/hands-on.md

## このサンプルアプリのゴール

- GraphQL の基本的なところが Playground を触ることでわかる
- Resolver の仕組みがわかる
- PostGraphile の便利さがわかる
- クライアントサイドでの GraphQL の便利さがわかる

## 動作環境

- Node.js
- yarn
- Docker

## 起動する

```bash
# 依存ライブラリのインストール
yarn

# Apollo Serverの起動
yarn server1

# PostGraphileの起動、事前にdocker compose upが必要です
docker compose up -d
yarn server2

# React, Apollo Clientなクライアントの起動
# PostGraphileサーバーに接続します
yarn client-app
```

## Apollo Server

https://www.apollographql.com/docs/apollo-server/

```bash
cd packages/apollo-prisma-server
```

> apollo-prisma-server とありますが Prisma はまだ使ってません

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

## React, Apollo Client App

https://www.apollographql.com/docs/react/

```bash
cd packages/react-apoll-client
```

React と Apollo Client を使って実装した Web アプリです。PostGraphile サーバーに接続します。
クライアントサイドで欲しい情報を一度に取得できてそのまま表示できて便利な感じとか、Fragment を使ってどんなデータを要求するかの凝集度を高められている様子がわかるかもしれません。
