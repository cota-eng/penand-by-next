import { Link } from "@material-ui/core";
import React from "react";
import { CATEGORY } from "../types/category";
import { brands } from "../constants/brands";
import { slugs } from "../constants/category-brand-slug";
import Image from "next/image";

const CategoryDetail: React.FC<CATEGORY> = ({
  name,
  slug,
  description,
  img_path,
}) => {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      {/* <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://dummyimage.com/1203x503"
        />
      </div> */}
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {name}
      </h2>
      {/* Next/Image で書き換えたい */}
      <img className="my-5" src={img_path} />
      <p className="text-base leading-relaxed mt-2">{description}</p>
      <Link href={`category/${slug}`}>
        <a className="text-indigo-500 inline-flex items-center mt-3">
          {name}のブランド別に見る
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </Link>
      {/* </Link> */}
      {/* {brands &&
        brands.map((brand) => (
          <>
            <Link href={`/category/${slug}/brand/${brand.slug}/page/1`}>
              <p key={brand.slug}>{brand.name}</p>
            </Link>
          </>
        ))} */}
    </div>
  );
};

export default CategoryDetail;
