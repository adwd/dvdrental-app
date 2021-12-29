# GraphQL ハンズオン

## ゴール

このハンズオンのゴール

- GraphQL がなんとなくわかる
- Resolver の仕組みがわかる
- （時間があれば）PostGraphile の便利さがわかる

## 事前準備

https://github.com/adwd/graphql-sample-app  のリポジトリを使います。Node.js (14 以上), yarn, docker が必要です。

```bash
❯ node -v
v14.18.1
❯ yarn -v
1.22.17
❯ docker -v
Docker version 20.10.8, build 3967b7d

❯ git clone https://github.com/adwd/graphql-sample-app
❯ cd graphql-sample-app

❯ yarn # 依存ライブラリのインストール
❯ docker compose up -d # PostgreSQL サーバーの起動
```

5432 番ポートに PostgreSQL サーバーが立ち上がったり、4000 とかも GraphQL サーバーが立ち上がるのでそのへんを開けておいてください。

## サンプルアプリについて

Apollo Server と PostGraphile で実装された GraphQL サーバーが 2 つ、PostGraphile サーバーが使う PostgreSQL サーバーのための docker-compose.yaml、PostGraphile サーバーを叩く React/Apollo クライアントアプリが入っています。

packages ディレクトリにサーバー 2 つとクライアントアプリが入っています。yarn workspace というのを使っていて、プロジェクトのルートディレクトリから

- `yarn server1`
- `yarn server2`
- `yarn client-app`

のコマンドでそれぞれ起動できます。またサーバー・クライアントともに起動中にコードをいじると随時反映されるようになっているので、何か試してみるとすぐ動作確認できます。

## GraphQL の基本的なところ

GraphQL は GraphQL Foundation が定める仕様です。クライアントが要求したクエリ通りのデータが返ってきます。

OpenAPI や gRPC と違うのは、データの送受信に関しては仕様に含まれていない点です。一般的には HTTP が使用されていますが HTTP 自体は仕様には含まれていません。

<img src="https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-graphql-playground.png" />

- Query
  - データを取ってくる
- Mutation
  - データを変更する
- Subscription
  - リアルタイムにデータをサーバーから受け取る

この 3 つのオペレーションを実行できます。

## GraphiQL を立ち上げて触ってみる

```bash
❯ yarn server1
 ...
🚀 Server ready at http://localhost:4000/
```

http://localhost:4000/  を開く

<img src="https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-apollo-landing.png" width="300" />

Query your server ボタンを押す

<img src="https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot3.png" />

Apollo Studio が起動します。Apollo Studio は Apollo の OSS で、サーバーに対して好きな Query や Mutation を実行できるプレイグラウンドです。似た用途の OSS としては GraphiQL や GraphQL Playground があります。Apollo Studio はただプレイグラウンドじゃなく、Apollo 社が儲けるためのサービスがくっついてくる感じがありますがプレイグラウンドを使うだけだとあんま関係ないです。

Operations と書いてあるとこの下に

```graphql
query {
  users {
    name
    status
    address
  }
}
```

と入力して、Run ボタンを押すと結果が右側に表示されます。

左側の Documentation と書いてあるところのチェックボックスを付けたり、アイテムを選択すると Operations のとこに反映されて、スキーマの構造を見つつ試しに Query を発行できるみたいな感じです。

> この Playground の仕組みは、GraphQL の Introspection (https://graphql.org/learn/introspection/)という仕組みを使っていて、ユーザーが定義する users みたいな Query の他に \_\_schema などの Query が用意されていて、GraphQL Playground はこれを起動時に実行することでスキーマ情報を取得しています。これは開発用途の仕組みのため、プロダクション環境では introspection: false みたいなオプションを設定して無効化することが推奨されています。
> 下の Query を実行してみるとスキーマに定義されている Type の名前、kind、description を取得できます。

```graphql
query {
  __schema {
    types {
      name
      kind
      description
    }
  }
}
```

Ctrl+Space でサジェスト、Cmd+Enter でオペレーション実行などのショートカットがあります。

users Query, addUser Mutation をやってまた users Query を実行するとリストの末尾に新しいユーザーが追加されているのがわかると思います。

## GraphQL のスキーマを見てみる

https://github.com/adwd/graphql-sample-app/blob/main/packages/apollo-prisma-server/src/index.ts

type Query, type Mutation をルートとして、そこで使われている type がそれぞれ定義してある感じです。

## Resolver とは

Resolver は GraphQL サーバーを実装する上で重要な要素で、GraphQL の特徴であるクライアントが指定したデータだけを返す仕組みを実現しているものです。

https://graphql.org/learn/execution/

今回のサンプルコードはほとんど  https://www.apollographql.com/docs/apollo-server/data/resolvers/  からの流用です。

雑に言うと、Query されたツリーの形に従って Resolver を順番に呼び出してデータを取得する仕組みです。

例えばこんな Query が実行されたとすると、

```graphql
query GetLibraries {
  libraries {
    books {
      title
      author {
        name
      }
    }
  }
}
```

そのリクエストを受けた GraphQL サーバーは次のように Query を実行します。

<img src="https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/resolver.png" />

前段で実行された Resolver の結果が引数の parent に入って実行されます。

https://github.com/adwd/graphql-sample-app/blob/main/packages/apollo-prisma-server/src/index.ts

```ts
const resolvers = {
  Query: {
    libraries() {
      return libraries;
    },
  },
  Library: {
    books(parent, args, context, info) {
      return books.filter((book) => book.branch === parent.branch);
    },
  },
  Book: {
    author(parent) {
      return {
        name: parent.author,
      };
    },
  },
};
```

サンプルコードだと、ハードコードしてあるデータの形と GraphQL スキーマの型が微妙に違っています。Resolver の実装を追うとその違いがあってもちゃんと GraphQL スキーマの型にあったデータを返せてる様子がわかると思います。

ここで Book.title と Author.name の Resolver が定義されていません。その 2 つは parent[field]を返すだけのこういう Resolver で、

```ts
Book: {
  title(parent) {
    return parent.title;
  },
},
```

その場合は Default Resolver として Apollo が勝手に値を返してくれます。

## フロントエンドは何がうれしいのか

フロントエンドアプリを下記コマンドで起動します。

```bash
❯ yarn server2
# 別のターミナルから
❯ yarn client-app
```

上記コマンドで http://localhost:3000/ にクライアントアプリが立ち上がります。server2 はレンタル DVD を題材にしたサンプルの DB なので、フロントエンドもレンタル DVD の Web サイトみたいなのを雑に作っています。

<img src="https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-dvd-rental.png" />

このページでは

- actor のうち出演本数が多い 3 人の名前とその出演本数
- film のうちレビュー評価の高い 50 本

を表示しています。

### REST だといろんなエンドポイントを叩いて集める必要があるのを GraphQL だと一つの Query で済む

ダッシュボード的なページを作ろうとするといろんなデータが必要で、REST だとその分フロントエンドが何回も API を叩くか、もしくは BFF でそのページに合ったデータを取得する GET /dashboard みたいなのを実装する必要がありますが、GraphQL だと一つの Query に必要なデータを並べれば 1 度のリクエストで取得できます。

### Fragment を使うと子コンポーネントが必要なデータを親コンポーネントが知らなくて済む

レビュー評価の高い映画リストで、カード状に表示しているところは Fragment という仕組みを使って、親コンポーネントはカードにどういうデータが必要かを知らなくて済むようになっています。

<img src="https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-fragment.png" />

今回はネストが 2 段階しか無いですが、もっと深くなると子・孫コンポーネントの表示に必要なデータをルートのコンポーネントの Query で管理するのはかなり面倒です。

コンポーネントが必要なデータを自分で定義することができるので凝集性が高まります。

## PostGraphile

PostGraphile は、PostgreSQL から GraphQL サーバーを生成するライブラリです。Node.js サーバーに組み込んで実行できる他、 npx postgraphile -c postgres:///mydb -s public -a -j のように CLI からも起動できます。サービスで PostgreSQL を使っている人はローカルや Dev のサーバーに繋げる人はつなぐと面白いかもしれません 😎

サンプルコードは以下にあります。

https://github.com/adwd/graphql-sample-app/blob/main/packages/postgraphile-server/src/index.ts

以下のコマンドで PostGraphile サーバーが立ち上がって、http://localhost:5000/graphiql から触れます。

```bash
❯ yarn server2
```

PostGraphile はそのままだと DB をそのまま公開するけしからんライブラリですが、下記の機能を使ってけしからなさをなくすことができます。

- PostgreSQL の role などと連携して、PostGraphile サーバーへのリクエストに付随する JWT を使って認証・認可ができる
  - https://www.graphile.org/postgraphile/postgresql-schema-design/
- JavaScript/TypeScript で Query/Mutation に任意のロジックを追加できる
  - https://github.com/adwd/graphql-sample-app/blob/main/packages/postgraphile-server/src/my-plugin.ts

PostGraphile を使うとサーバーの実装コストをすごく削減できます（特に参照系）
