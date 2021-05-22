## アプリ概要

より正確なレビューを行うことができる文房具レビューサイト。
SEO からの流入をメインとしたいので SSG，ISR を用いた高速なレスポンスを期待する。
SEO 対策にも力を入れる
バックエンドの API は、
https://github.com/cota-eng/bista-rest-api
である。

## 実装内容

- Next を用いたフロントエンドの構築
- ログインページ、トップページ、検索ページ、詳細ページなど
- レビュー機能（ログイン後に付与される JWT のアクセストークンによるログイン）
- XSS に対する厳重な対策（Token を盗まれないようにするため）

## 仕様技術

- Next.js(SSG,ISR,Link,Image,DynamicImport,useRouter etc...)
- tailwindcss
- TypeScript
- ReactHooks


## 実装予定

- ログイン状態を常に判別し、未ログインであればログイン必須機能アクセス時にログインページにリダイレクト
- モーダル表示（未ログイン時の案内やエラーの視覚化）
- デザインを一新
- Recoil などを用いてログイン状態をグローバルに管理
- SEO 対策（画像の最適化、クローリングの最適化、Analytics/SearchConsole での分析）
- OGP 画像の出力（サイズも何通りか）
