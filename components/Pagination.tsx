import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
interface Props {
  category: string;
  brand: string;
  totalCount: number;
  now: string;
}
const Pagination: React.FC<Props> = ({ totalCount, now, category, brand }) => {
  const PER_PAGE = 12;
  //   const range = (start: number, end: number) =>
  //     [...Array(end - start + 1)].map((_, i) => start + i);
  const prev = Number(now) - 1;
  const next = Number(now) + 1;
  const last = Number(totalCount / PER_PAGE);
  return (
    <div>
      {/* <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <>
            {number !== 1 && (
              <Link href={`/mechanical/page/${number - 1}`}>
                <a>{number - 1}prev</a>
              </Link>
            )}
            <li key={index}>
              <Link href={`/mechanical/page/${number}`}>
                <a>{number}</a>
              </Link>
            </li>
          </>
        ))}
      </ul> */}
      <div className="container w-full mx-auto mb-5">
        <div className="flex justify-between px-2">
          {prev === 0 && <div className="sm:w-1/4 w-2/5 my-2"></div>}
          {prev !== 0 && (
            <div className="sm:w-1/4 w-2/5 my-2">
              <Link href={`/category/${category}/brand/${brand}/page/${prev}`}>
                <a>
                  <div className="sm:h-full p-3 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md">
                    <svg
                      className="mr-2"
                      width="24"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-2xl font-semibold inline-flex">
                      Prev
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          )}
          {next === totalCount / PER_PAGE && (
            <div className="sm:w-1/4 w-2/5 my-2"></div>
          )}
          {next < last - 2 && (
            <div className="sm:w-1/4 w-2/5  my-2">
              <Link href={`/category/${category}/brand/${brand}/page/${next}`}>
                <a>
                  <div className="sm:h-full p-3 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md text-right">
                    <svg
                      className="ml-auto mr-1 block"
                      width="24"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-2xl mb-1 font-semibold inline-flex ">
                      Next
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Pagination;
