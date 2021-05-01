import React from "react";
import { brands } from "../constants/brands";
import { categories } from "../constants/categories";
import { tags } from "../constants/tags";

const SideBar: React.FC = () => {
  return (
    <aside className="h-screen sticky top-0 pt-10 pl-10 overflow-auto hidden w-0 lg:w-1/5 lg:block xl:w-1/5  bg-gray-100">
      <h2 className="font-semibold mb-2 text-3xl leading-tight sm:leading-normal">
        メニュー
      </h2>
      <div className="">
        <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
          カテゴリ
        </h2>
        <ul className="">
          {categories &&
            categories.map((category) => (
              <li
                key={category.slug}
                className="block p-1 pl-3 text-gray-darker border-grey-lighter  rounded-sm hover:bg-gray-300 "
              >
                {category.name}
              </li>
            ))}
        </ul>

        <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
          ブランド
        </h2>
        <ul className="">
          {brands &&
            brands.map((brand) => (
              <li
                key={brand.slug}
                className="block p-1 pl-3 text-gray-darker border-grey-lighter rounded-sm hover:bg-gray-300  "
              >
                {brand.name}
              </li>
            ))}
        </ul>
        <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
          タグ
        </h2>
        <ul className="">
          {tags &&
            tags.map((tag) => (
              <li
                key={tag.slug}
                className="block p-1 pl-3 text-gray-darker border-grey-lighter rounded-sm hover:bg-gray-300  "
              >
                {tag.name}
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
