import React from "react";

const SideBar: React.FC = () => {
  return (
    <aside className="h-screen sticky top-0 pt-10 pl-10 overflow-auto h-auto w-0 sm:w-0 md:w-0 lg:w-1/5 xl:w-1/5  bg-gray-100">
      <h2 className="font-semibold mb-2 text-3xl leading-tight sm:leading-normal">
        メニュー
      </h2>
      <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
        カテゴリ
      </h2>
      <p>シャーペン</p>
      <p>ボールペン</p>
      <p>万年筆</p>
      <p>消しゴム</p>
      <p>シャーペン</p>
      <p>シャーペン</p>
      <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
        ブランド
      </h2>
      <p>ブランド</p>
      <p>ブランド</p>
      <p>ブランド</p>
      <p>ブランド</p>
      <p>ブランド</p>
      <p>ブランド</p>
      <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
        タグ
      </h2>
    </aside>
  );
};

export default SideBar;
