import React from "react";
import Link from "next/link";
import { PRODUCT } from "../types/product";
import Image from "next/image";
const MAX_LENGTH = 20;
const Product: React.FC<PRODUCT> = React.memo(
  ({ id, name, category, brand, image, number_of_fav, number_of_review }) => {
    return (
      <>
        <Link href={`/products/${id}`}>
          {/* <div className="h-full  flex items-center bg-blue-50 border-gray-500 text-center hover:border-gray-700  border sm:p-4 p-2 rounded-lg "></div> */}
          <div className="max-w-2xl bg-blue-50 border-1SS border-gray-300 px-5 py-3 rounded-md tracking-wide shadow-lg m-2">
            <div className="flex">
              <Image
                className="rounded-md border-2 border-gray-300"
                src={image}
                quality={80}
                width={140}
                height={140}
              />

              <div className="flex flex-col justify-between ml-5 w-1/2">
                <h3 className=" font-semibold mb-2 max-w-1/2">
                  {name.length >= MAX_LENGTH &&
                    name.substring(0, MAX_LENGTH) + "..."}
                  {name.length < MAX_LENGTH && name}
                </h3>
                <p className="text-gray-800 mt-2">
                  <span
                    className="inline-block rounded-full text-white 
                        bg-black hover:bg-gray-500 duration-300 
                        text-xs font-bold 
                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                        opacity-90 hover:opacity-100"
                  >
                    {category.name}
                  </span>
                  <span
                    className="inline-block rounded-full text-white 
                        bg-green-400 hover:bg-green-500 duration-300 
                        text-xs font-bold 
                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                        opacity-90 hover:opacity-100"
                  >
                    {brand.name}
                  </span>
                </p>
                <div className="flex mt-2">
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
  }
);

export default Product;
