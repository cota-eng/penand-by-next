import React from "react";
import { brands } from "../constants/brands";
import { categories } from "../constants/categories";

const SideBar: React.FC = () => {
  return (
    <aside className="h-screen sticky top-0 pt-10 pl-10 overflow-auto hidden w-0 lg:w-1/5 lg:block xl:w-1/5  bg-gray-100">
      <h2 className="font-semibold mb-2 text-3xl leading-tight sm:leading-normal">
        メニュー
      </h2>
      <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
        カテゴリ
      </h2>
      {categories &&
        categories.map((category) => (
          <p key={category.slug}>{category.name}</p>
        ))}

      <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
        ブランド
      </h2>
      {brands && brands.map((brand) => <p key={brand.slug}>{brand.name}</p>)}

      <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
        タグ
      </h2>
    </aside>
  );
};

export default SideBar;
