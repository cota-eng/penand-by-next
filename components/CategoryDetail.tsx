import { Link } from "@material-ui/core";
import React from "react";
import { CATEGORY } from "../types/category";
import { brands } from "../constants/brands";
import { slugs } from "../constants/category-brand-slug";
import Image from "next/image";
import FadeIn from "react-fade-in";

interface Props extends CATEGORY {
  brand: string;
}

const CategoryDetail: React.FC<Props> = ({
  name,
  slug,
  description,
  img_path,
  brand,
}) => {
  return (
    <div className="p-4 md:w-1/4 mx-5 sm:mb-0 mb-6 h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-gray-50">
      <FadeIn>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          {name}
        </h2>
        {/* Next/Image で書き換えたい */}
        <img className="my-20" src={img_path} />
        <p className="text-base leading-relaxed mt-2">{description}</p>
        <Link href={`/brand/${brand}/category/${slug}/page/1`}>
          <a className="text-indigo-500 inline-flex items-center mt-3">
            {name}を見る
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
      </FadeIn>
    </div>
  );
};

export default CategoryDetail;
