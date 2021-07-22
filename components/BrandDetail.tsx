import React from "react";
import Link from "next/link";
import { BRAND } from "../types/brand";
import Image from "next/image";
import FadeIn from "react-fade-in";
interface Props extends BRAND {
  category: string;
  detail: boolean;
}
const BrandDetail: React.FC<Props> = ({
  name,
  official_site_link,
  slug,
  img_path,
  description,
  category,
  detail,
}) => {
  return (
    <div className="p-4 md:w-1/3 ">
      <FadeIn>
        <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-gray-50">
          <img
            className="lg:h-40 md:h-30 w-full object-cover object-center"
            src={img_path}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              BRAND
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              <Link href={official_site_link}>
                <a className="underline" target="_blank">
                  {name}
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
              </Link>
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <div className="flex items-center flex-wrap  ">
              <Link
                href={
                  detail
                    ? `/category/${category}/brand/${slug}/page/1`
                    : `/brand/${slug}`
                }
              >
                <a className="flex justify-center items-center bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mx-auto">
                  このブランドを見る
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
export default BrandDetail;
