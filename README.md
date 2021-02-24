## アプリ概要

より正確なレビューを行うことができる文房具レビューサイト。
SEOからの流入をメインとしたいのでSSG，ISRを用いた高速なレスポンスを期待
SEO対策にも力を入れる
バックエンドのAPI
https://github.com/cota-eng/stationery-rest-api
である

## 実装内容

- Nextを用いたフロントエンドの構築
- ログインページ、トップページ、検索ページ、詳細ページなど
- レビュー機能（ログイン後に付与されるJWTのアクセストークンによるログイン）


## 仕様技術

- Next.js(SSG,ISR,Link,Image,DynamicImport,useRouter etc...)
- tailwindcss
- TypeScript
- ReactHooks(useState,useEffect etc...)

## 実装予定

- ログイン状態を常に判別し、未ログインであればログイン必須機能アクセス時にログインページにリダイレクト
- モーダル表示（未ログイン時の案内やエラーの視覚化）
- デザインを一新
- Recoilなどを用いてログイン状態をグローバルに管理
- SEO対策（画像の最適化、クローリングの最適化、Analytics/SearchConsoleでの分析）

## 使用の様子
本番運用はまだなので、写真とGIFを掲載しております。


- トップページ
![2021-02-24_08h12_38](https://user-images.githubusercontent.com/65804288/108921127-39562780-7679-11eb-837c-5db46d2ae3bc.png)
- ログインページ（Googleログイン）
![2021-02-24_08h12_52](https://user-images.githubusercontent.com/65804288/108921130-39562780-7679-11eb-80c8-571780310d46.png)
- 絞り込み検索ページ
![2021-02-24_08h16_52](https://user-images.githubusercontent.com/65804288/108921131-39eebe00-7679-11eb-9ade-99ff989a3987.png)
- 検索結果表示
![2021-02-24_08h17_23](https://user-images.githubusercontent.com/65804288/108921134-39eebe00-7679-11eb-8625-975b280715ea.png)
- 検索結果表示
![2021-02-24_08h17_41](https://user-images.githubusercontent.com/65804288/108921135-3a875480-7679-11eb-8c42-532b1fe69751.png)
- レビュー前（ISRによるビルド前）
![2021-02-24_08h18_10](https://user-images.githubusercontent.com/65804288/108921138-3b1feb00-7679-11eb-9a38-5b9b1364ec65.png)

- レビュー入力例
![2021-02-24_08h18_37](https://user-images.githubusercontent.com/65804288/108921121-378c6400-7679-11eb-953c-cb15a5e31202.png)

- ISRによるレビューの反映
![2021-02-24_08h18_59](https://user-images.githubusercontent.com/65804288/108921124-38bd9100-7679-11eb-9eaf-72e4520c270d.png)

- GIF　動作イメージ
- 
![Videotogif](https://user-images.githubusercontent.com/65804288/108922129-fea0bf00-7679-11eb-991e-d9f89a0ec8c9.gif)


