import React from "react";
import { brands } from "../constants/brands";
import { categories } from "../constants/categories";
import { tags } from "../constants/tags";
import Link from "next/link";

const SideBar: React.FC = React.memo(() => {
  return (
    <aside className="h-screen sticky top-0 pt-10 pl-10 overflow-y-auto   bg-gray-100">
      <h2 className="font-semibold mb-2 text-3xl leading-tight sm:leading-normal">
        メニュー
      </h2>
      <div className="">
        <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
          <Link href="category/">カテゴリ</Link>
        </h2>
        <ul className="">
          {categories &&
            categories.map((category, index) => (
              <Link href={`/category/${category.slug}`}>
                <a>
                  <li
                    key={index}
                    className="block p-1 pl-3 mr-3 text-gray-darker border-grey-lighter  rounded-sm hover:bg-gray-300 "
                  >
                    {category.name}
                  </li>
                </a>
              </Link>
            ))}
        </ul>

        <h2 className="font-semibold mb-2 mt-5 text-xl leading-tight sm:leading-normal">
          ブランド
        </h2>
        <ul className="">
          {brands &&
            brands.map((brand, index) => (
              <Link href={`/brand/${brand.slug}`}>
                <a>
                  <li
                    key={index}
                    className="block p-1 pl-3 mr-3 text-gray-darker border-grey-lighter rounded-sm hover:bg-gray-300  "
                  >
                    {brand.name}
                  </li>
                </a>
              </Link>
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
});

export default SideBar;
