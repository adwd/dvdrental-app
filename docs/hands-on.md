---
marp: true
---

# GraphQL ハンズオン

---

# やること

ハンズオンとなってますが動作するコードは用意してあるので説明 70%、手を動かすの 30% くらいです :innocent:

## 流れ

- サンプルアプリについて
- GraphQL の基本的なところ
- Apollo Studio で Query や Mutation を実行する
- Resolver について
  - これがメイン、残りは時間があまれば
- フロントエンドのうれしさ
- PostGraphile

---

# ゴール

このハンズオンのゴール

- GraphQL がなんとなくわかる
- Resolver の仕組みがわかる
- （時間があれば）
  - フロントエンドのうれしさがわかる
  - PostGraphile の便利さがわかる

---

# 事前準備

**ハンズオンの実施前に事前準備を済ませておいてください！**

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

---

# サンプルアプリについて

GraphQL のサーバーが 2 つ、React クライアントアプリが 1 つ、それらを動かす docker-compose.yaml が入っています。

yarn workspace というのを使っていて、プロジェクトのルートディレクトリから

- `yarn server1`
  - Apollo Server
- `yarn server2`
  - Hasura Server
- `yarn client-app`
  - React/Apollo Client

のコマンドでそれぞれ起動できます。またサーバー・クライアントともに起動中にコードをいじると随時反映されるようになっているので、何か試してみるとすぐ動作確認できます。

---

# GraphQL の基本的なところ

[GraphQL](https://graphql.org/) は GraphQL Foundation が定める仕様で、主にクライアントが要求したクエリ通りのデータが返ってくるための仕組みを定義してあります。

![](https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-graphql-playground.png)
こんな感じで、クライアントが欲しいデータの形を要求するとそのまま返ってくるのが特徴です。

---

GraphQL ではクライアントからサーバーに対して 3 つのオペレーションがあります。

- Query
  - データを取ってくる
- Mutation
  - データを変更する
- Subscription
  - リアルタイムにデータをサーバーから受け取る

---

# Apollo Studio を立ち上げて触ってみる

```bash
❯ yarn server1
 ...
🚀 Server ready at http://localhost:4000/
```

http://localhost:4000/  を開くとこんな画面が表示されるので、「Query your server」ボタンを押します。

![h:300](https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-apollo-landing.png)

---

Apollo Studio が起動します。Apollo Studio は GraphQL を使った開発に必要な多くの機能を提供するサービスですが、今回はで Query や Mutation を実行できるプレイグラウンドとスキーマのドキュメント機能を使います。似た用途の OSS としては [GraphiQL](https://github.com/graphql/graphiql) や [GraphQL Playground](https://github.com/graphql/graphql-playground) があります。

![](https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot3.png)

---

# Query を実行してみる

Operation と書いてあるテキストエリアに

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

---

# いろんな Query、Mutation を実行してみる

## ハンズオンタイム

一度 users Query を実行して結果を確認したあと、addUser Mutation を実行してユーザーを追加して、もう一度 users Query でユーザーが増えていることを確認しましょう。

左側の Documentation と書いてあるところのチェックボックスを付けたり、アイテムを選択すると Operations のとこに反映されて、スキーマの構造を見つつ試しに Query を発行でます。

Ctrl+Space でサジェスト、Cmd+Enter でオペレーション実行などのショートカットがあります。

---

> 細かい話
> この Playground の仕組みは、GraphQL の [Introspection](https://graphql.org/learn/introspection/)という仕組みを使っていて、 `__schema` などの Query が用意されていて Apollo Studio はこれを起動時に実行することでスキーマ情報を取得しています。Chrome Devtools の Network タブから見れます。
> これは開発用途の仕組みのため、プロダクション環境では無効化することが推奨されています。

```graphql
query IntrospectionQuery {
  __schema {
    types {
      name
      kind
      description
    }
  }
}
```

---

# GraphQL のスキーマを見てみる

Apollo Studio の https://studio.apollographql.com/sandbox/schema/reference を開くと、GraphQL スキーマを Apollo Studio が見やすくドキュメントにしたものが表示されます。

コードとしては https://github.com/adwd/graphql-sample-app/blob/main/packages/apollo-prisma-server/src/index.ts に定義してあります。

type Query, type Mutation をルートとして、そこで使われている type がそれぞれ定義してある感じです。

---

# Resolver とは

Resolver は GraphQL サーバーを実装する上で重要な要素で、GraphQL の特徴であるクライアントが指定したデータだけを返す仕組みを実現しているものです。

https://graphql.org/learn/execution/

今回のサンプルコードはほとんど  https://www.apollographql.com/docs/apollo-server/data/resolvers/  からの流用です。

雑に言うと、Query されたツリーの形に従って Resolver を順番に呼び出してデータを取得する仕組みです。

---

サンプルアプリの Resolver の[コード](https://github.com/adwd/graphql-sample-app/blob/main/packages/apollo-prisma-server/src/index.ts)はこんな感じです。これがどう動くかイメージしにくいと思うので次のページから説明します。

```ts
// https://github.com/adwd/graphql-sample-app/blob/main/packages/apollo-prisma-server/src/index.ts
const resolvers = {
  // 前段で実行された Resolver の結果が引数の parent に入って実行されます。
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

---

**Resolver 完全理解タイム**
例えばこの Query に対する GraphQL サーバーの Resolver の実行は下の図のようになります。Query のツリーの形に沿って Resolver が実行されます。前のページのコードと見比べると動作のイメージがわかってきますか…？

```graphql
query {
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

![](https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/resolver.png)

---

サンプルコードだと、ハードコードしてあるデータの形と GraphQL スキーマの型が微妙に違っています。Resolver の実装を追うとその違いがあってもちゃんと GraphQL スキーマの型にあったデータを返せてる様子がわかると思います。

ここで `Book.title` と `Author.name` の Resolver が定義されていません。その 2 つは parent[field]を返すだけのこういう Resolver で、

```ts
Book: {
  title(parent) {
    return parent.title;
  },
},
```

その場合は Default Resolver として Apollo が勝手に値を返してくれます。 **重要**

---

# Default Resolver

GraphQL らしい Resolver を書こうとすると最初は難しいですが、Query の段階で完全にデータが得られるようにしておけばその後はすべて Default Resolver で `parent[key]` が返されるだけです。そう考えると多少強引ですが REST API を書くのと大差なく書けると思います。

```ts
const resolvers = {
  Query: {
    libraries() {
      return repository.libraries(); // RESTと同じくDBからデータ取って返してるだけ
    },
    books(parent, args, context, info) {
      // Queryでどのフィールドを書いているかはinfoのSelectionSetからわかる
      if (shouldFetchAuthor(info.selectionSet)) {
        return repository.booksWithAuthor(); // booksテーブルとauthorsテーブルをJOINする
      }

      return repository.books(); // authorsテーブルとJOINしない
    },
  },
};
```

---

:memo: ここで Resolver まで終わったので、このあとのフロントエンドの話とか Hasura の話は時間があればやる

---

# フロントエンドは何がうれしいのか

サンプルアプリのフロントエンドアプリは Server2 と通信します。
下記コマンドで起動します。

```bash
❯ yarn server2
# 別のターミナルから
❯ yarn client-app
```

上記コマンドで http://localhost:3000/ にクライアントアプリが立ち上がります。server2 はレンタル DVD を題材にしたサンプルの DB なので、フロントエンドもレンタル DVD の Web サイトみたいなのを雑に作っています。

---

![h:400](https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-dvd-rental.png)

このページでは

- actor のうち出演本数が多い 3 人の名前とその出演本数
- film のうちレビュー評価の高い 50 本

を表示しています。

---

## REST だといろんなエンドポイントを叩いて集める必要があるのを GraphQL だと一つの Query で済む

ダッシュボード的なページを作ろうとするといろんなデータが必要で、REST だとその分フロントエンドが何回も API を叩くか、もしくは BFF でそのページに合ったデータを取得する GET /dashboard みたいなのを実装する必要がありますが、GraphQL だと一つの Query に必要なデータを並べれば 1 度のリクエストで取得できます。

---

## Fragment を使うと子コンポーネントが必要なデータを親コンポーネントが知らなくて済む

レビュー評価の高い映画リストで、カード状に表示しているところは Fragment という仕組みを使って、親コンポーネントはカードにどういうデータが必要かを知らなくて済むようになっています。

---

![](https://raw.githubusercontent.com/adwd/graphql-sample-app/main/docs/images/screenshot-fragment.png)

---

今回はネストが 2 段階しか無いですが、もっと深くなると子・孫コンポーネントの表示に必要なデータをルートのコンポーネントの Query で管理するのはかなり面倒です。

コンポーネントが必要なデータを自分で定義することができるので凝集性が高まります。

---

## PostGraphile

PostGraphile は、PostgreSQL から GraphQL サーバーを生成するライブラリです。Node.js サーバーに組み込んで実行できる他、 npx postgraphile -c postgres:///mydb -s public -a -j のように CLI からも起動できます。サービスで PostgreSQL を使っている人はローカルや Dev のサーバーに繋げる人はつなぐと面白いかもしれません 😎

サンプルコードは以下にあります。

https://github.com/adwd/graphql-sample-app/blob/main/packages/postgraphile-server/src/index.ts

---

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
