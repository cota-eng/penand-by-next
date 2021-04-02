import {useState} from 'react'
import Router from "next/router";
import Link from "next/link";

interface TOTAL{
    totalCount:number
}
const Pagination: React.FC<TOTAL> = ({ totalCount }) => {
    const PER_PAGE = 5
    const range = (start:number, end:number) =>
      [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <div>
      <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={`/mechanical/page/${number}`}>
              <a>{number}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination
