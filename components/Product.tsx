import React from "react";
import Link from "next/link";
import { PRODUCT } from "../types/product";
const Product: React.FC<PRODUCT> = ({
  id,
  name,
  category,
  image,
  number_of_fav,
  number_of_review,
}) => {
  return (
    <>
      <Link href={`/product/${id}`}>
        <div className="p-2 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full cursor-pointer ">
          <div className="h-full flex items-centerv bg-blue-50 border-gray-500 text-center hover:border-gray-700  border sm:p-4 p-1 rounded-lg ">
            <img
              alt={`${name}の画像`}
              className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mb-1 mr-2"
              src={image}
            ></img>
            <div className="flex flex-col m-auto">
              <h3 className="text-gray-900 title-font font-medium mb-1 text-left">
                {name}
              </h3>
              <div className="">
                <span className="bg-gray-50 mr-2 p-0.5 border border-gray-500 rounded">
                  {category.name}
                </span>
                <span className="text-gray-500 mr-2">
                  <svg
                    className="w-4 h-4 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      // strokeLinecap="round"
                      // strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {number_of_fav}
                </span>
                <span className="text-gray-500">
                  <svg
                    className="w-4 h-4 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  {number_of_review}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
