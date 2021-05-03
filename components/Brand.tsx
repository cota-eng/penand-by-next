import React from "react";
import Link from "next/link";
import { BRAND } from "../types/brand";
import Image from "next/image";

// interface Props extends BRAND {
//   brand: string;
// }

const Brand: React.FC<BRAND> = ({
  name,
  official_site_link,
  slug,
  img_path,
  description,
}) => {
  return (
    <div className="p-4 md:w-1/3 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={img_path}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            BRAND
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {name}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap  ">
            <Link href={`/brand/${slug}`}>
              {/* <Link href={`/brand/${brand}/category/${slug}/page/1`}> */}
              <a className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mx-auto">
                このブランドを見る
              </a>
            </Link>
          </div>
          <div className="flex">
            <a
              className="mt-5 bg-gray-400 rounded-lg font-bold text-white text-center py-3 px-4 transition duration-300 ease-in-out hover:bg-gray-600 mx-auto"
              href={official_site_link}
            >
              公式サイト
              <svg
                className="w-6 h-6 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brand;
