import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SEARCH } from "../types/search";
import { getFilteredPens } from "../lib/fetchSearchResult";
import useSWR from "swr";
import { useRouter } from "next/router";
import { RESULTS } from "../types/results";
import PenResult from "../components/ProductResult";
import { PRODUCT } from "../types/product";
import Product from "../components/Product";
import axios from "axios";
import Link from "next/link";

const Search: React.FC = () => {
  const [name, setName] = useState<string | null>("");
  const [products, setProducts] = useState<PRODUCT[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [HasMore, setHasMore] = useState(false);
  //   const [isFirstSearch, setIsFirstSearch] = useState(true);
  const firstLoad = () => {
    setProducts([]);
    setPage(() => 1);
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/search`,
      params: { name: name, page: 1 },
    })
      .then((res) => {
        console.log(res);
        setProducts(() => {
          return [...res.data.results];
        });
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(res.data.next);
        setIsFetching(false);
      })
      .catch(() => setIsFetching(false));
  };
  const loadMore = () => {
    setIsFetching(true);
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/search`,
      params: { name: name, page: page },
    }).then((res) => {
      setProducts((prevProducts) => {
        return [...prevProducts, ...res.data.results];
      });
      setPage((prevPageNumber) => prevPageNumber + 1);
      setHasMore(res.data.next);
      setIsFetching(false);
    });
  };
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  return (
    <Layout title="条件検索">
      <div className="w-full max-w-screen-xl  ">
        <div className="flex flex-col mx-auto  px-3 py-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
            SEARCH{page}
          </h1>
          <div className="min-w-screen flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl">
              <div className="relative mt-1">
                <input
                  type="text"
                  className="w-full pl-3 pr-10 py-2 border-2 bg-gray-50 focus:bg-white border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="キーワードを入力..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"
                  onClick={firstLoad}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-0 left-0 w-full h-2 flex">
                <div className="h-2 bg-blue-500 flex-1"></div>
                <div className="h-2 bg-red-500 flex-1"></div>
                <div className="h-2 bg-yellow-500 flex-1"></div>
                <div className="h-2 bg-blue-500 flex-1"></div>
                <div className="h-2 bg-green-500 flex-1"></div>
                <div className="h-2 bg-red-500 flex-1"></div>
              </div>
            </div>
          </div>
          <section className="text-gray-600 body-font overflow-auto h-auto">
            {/* <h2>{}</h2> */}
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap ">
                {products &&
                  products.map((item, index) => (
                    <div className="p-2 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full cursor-pointer ">
                      <Product key={index} {...item} />
                    </div>
                  ))}
                {!products && <p>nothing</p>}
                {isFetching && <p>Fetching items...</p>}
                {!isFetching && HasMore ? (
                  <button onClick={loadMore}>Load more</button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
