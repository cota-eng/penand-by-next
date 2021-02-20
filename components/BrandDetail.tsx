import React from "react";
import Link from "next/link";
import { BRAND } from "../types/brandType";
const BrandDetail: React.FC<BRAND> = ({ name }) => {
  return (
    <>
      <Link href="aa">
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer">
          <div className="h-full flex items-center border-gray-200  hover:border-gray-700  border p-4 rounded-lg ">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            ></img>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">{name}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BrandDetail;
