import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ResultSkelton: React.FC = () => {
  const numbers = [...Array(6)].map((_, i) => i);
  return (
    <>
      {numbers.map((i) => (
        <div
          key={i}
          className="p-2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full cursor-pointer"
        >
          <div className="max-w-2xl bg-blue-50 border-1SS border-gray-300 px-5 py-3 rounded-md tracking-wide shadow-lg m-2">
            <div className="flex">
              <Skeleton width={140} height={140} />
              <div className="flex flex-col justify-between ml-3 w-1/2">
                <h3 className=" font-semibold mb-2">
                  <Skeleton count={1} width={120} height={20} />
                </h3>
                <p className="text-gray-800 mt-2">
                  {/* <span
                      className="inline-block rounded-full text-white 
                bg-black hover:bg-gray-500 duration-300 
                text-xs font-bold 
                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                opacity-90 hover:opacity-100"
                    >
                </span> */}
                  <Skeleton count={4} />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResultSkelton;
