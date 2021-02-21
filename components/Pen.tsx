import React from "react";
import Link from "next/link";
import { PEN } from "../types/pen";
const Pen: React.FC<PEN> = ({ id, name, category }) => {
  return (
    <>
      <Link href={`/pen/${id}`}>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer">
          <div className="h-full flex items-center border-gray-200  hover:border-gray-700  border p-4 rounded-lg ">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            ></img>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">{name}</h2>
              <p className="text-gray-500">category:{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Pen;
