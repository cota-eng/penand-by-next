## アプリ概要

より正確なレビューを行うことができる文房具レビューサイト。
SEO からの流入をメインとしたいので SSG，ISR を用いた高速なレスポンスを期待する。
SEO 対策にも力を入れる
バックエンドの API は、
https://github.com/cota-eng/stationery-rest-api
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
- ReactHooks(useState,useEffect etc...)

## ユーザー認証について

Django のデプロイ先とクロスオリジンになり、Django の都合上 Cookie を使用する場合、以下の条件を満たせないことが発覚した。

- httpOnly
- SameSite=Lax

Django 側では set-cookie のオプションと指定しても、cookie にセットされない。よって、LocalStorage を用いることとした。

## 実装予定

- ログイン状態を常に判別し、未ログインであればログイン必須機能アクセス時にログインページにリダイレクト
- モーダル表示（未ログイン時の案内やエラーの視覚化）
- デザインを一新
- Recoil などを用いてログイン状態をグローバルに管理
- SEO 対策（画像の最適化、クローリングの最適化、Analytics/SearchConsole での分析）
- OGP 画像の出力（サイズも何通りか）
-

## 使用の様子

本番運用はまだなので、写真と GIF を掲載しております。

- トップページ
  ![2021-02-24_08h12_38](https://user-images.githubusercontent.com/65804288/108921127-39562780-7679-11eb-837c-5db46d2ae3bc.png)
- ログインページ（Google ログイン）
  ![2021-02-24_08h12_52](https://user-images.githubusercontent.com/65804288/108921130-39562780-7679-11eb-80c8-571780310d46.png)
- 絞り込み検索ページ
  ![2021-02-24_08h16_52](https://user-images.githubusercontent.com/65804288/108921131-39eebe00-7679-11eb-9ade-99ff989a3987.png)
- 検索結果表示
  ![2021-02-24_08h17_23](https://user-images.githubusercontent.com/65804288/108921134-39eebe00-7679-11eb-8625-975b280715ea.png)
- 検索結果表示
  ![2021-02-24_08h17_41](https://user-images.githubusercontent.com/65804288/108921135-3a875480-7679-11eb-8c42-532b1fe69751.png)
- レビュー前（ISR によるビルド前）
  ![2021-02-24_08h18_10](https://user-images.githubusercontent.com/65804288/108921138-3b1feb00-7679-11eb-9a38-5b9b1364ec65.png)

- レビュー入力例
  ![2021-02-24_08h18_37](https://user-images.githubusercontent.com/65804288/108921121-378c6400-7679-11eb-953c-cb15a5e31202.png)

- ISR によるレビューの反映
  ![2021-02-24_08h18_59](https://user-images.githubusercontent.com/65804288/108921124-38bd9100-7679-11eb-9eaf-72e4520c270d.png)

- GIF 　実際の動作イメージ

![Videotogif](https://user-images.githubusercontent.com/65804288/108922129-fea0bf00-7679-11eb-991e-d9f89a0ec8c9.gif)

## SSG,ISR について

以下のようになった。

```shell

Page                                                           Size     First Load JS
┌ ○ /                                                          782 B          69.7 kB
├   /_app                                                      0 B            63.9 kB
├ ○ /404                                                       3.46 kB        67.3 kB
├ ● /brand                                                     1.67 kB        70.6 kB
├ ○ /brand/[slug]                                              269 B          64.2 kB
├ ● /category                                                  1.38 kB        70.3 kB
├ ○ /login                                                     6.23 kB        80.6 kB
├ ● /pen (ISR: 3 Seconds)                                      1.09 kB          70 kB
├ ● /pen/[id]                                                  27.2 kB        96.1 kB
├   ├ /pen/01EYZ6BVRWW81369FA761HK6FK
├   ├ /pen/01EYZ0NBPTGKR2N4E5DWZWCTM9
├   ├ /pen/01EYZ0NBPVP428BF7ZERHBEQVH
├   └ [+27 more paths]
└ ○ /search                                                    4.5 kB         78.9 kB
+ First Load JS shared by all                                  63.9 kB
  ├ chunks/3fca65f3c3320de7031016f25b31f4b3abba85d1.15e728.js  13.1 kB
  ├ chunks/framework.ce4a96.js                                 42.3 kB
  ├ chunks/main.172a97.js                                      6.63 kB
  ├ chunks/pages/_app.228976.js                                557 B
  ├ chunks/webpack.f03ca1.js                                   1.33 kB
  └ css/407c678a32b6cd685731.css                               3.6 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revali
```
