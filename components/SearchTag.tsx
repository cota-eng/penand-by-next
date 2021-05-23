import Image from "next/image";
import React from "react";
import { tags } from "../constants/tags";
import FadeIn from "react-fade-in";
const SearchTag: React.FC = () => {
  return (
    <>
      {tags &&
        tags.map((tag, index) => (
          <div
            key={index}
            className="xl:w-1/4 ls:w-1/4 md:w-1/4 w-1/2 my-4 px-4 bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <FadeIn>
              <div className="py-2 text-center">
                <Image
                  className="object-cover mx-auto"
                  src={tag.image}
                  height={80}
                  width={80}
                  alt="search tag"
                  quality={20}
                />
              </div>
              <div className="py-2 text-center">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  {tag.name}
                </a>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {tag.slug}
                </span>
              </div>
            </FadeIn>
          </div>
        ))}
    </>
  );
};

export default React.memo(SearchTag);
