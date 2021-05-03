import Layout from "../components/Layout";
import React, { useState, useEffect, useCallback } from "react";
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
import ClipLoader from "react-spinners/ClipLoader";
import SearchResultList from "../components/SearchResultList";

const Search: React.FC = () => {
  const [name, setName] = useState<string | null>("");
  const [products, setProducts] = useState<PRODUCT[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [HasMore, setHasMore] = useState(false);
  const resetName = () => {
    setName("");
    setProducts([]);
    setHasMore(false);
    setIsFetching(false);
  };
  const firstLoad = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFetching(true);
    setProducts([]);
    setPage(() => 1);
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/search`,
      params: { name: name, page: 1 },
    })
      .then((res) => {
        setProducts(() => {
          return [...res.data.results];
        });
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(res.data.next);
        setIsFetching(false);
      })
      .catch(() => setIsFetching(false));
  };
  const loadMore = useCallback(() => {
    setIsFetching(true);
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/search`,
      params: { name: name, page: page },
    }).then((res) => {
      if (res.data.count !== 0) {
        setProducts((prevProducts) => {
          return [...prevProducts, ...res.data.results];
        });
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(res.data.next);
        setIsFetching(false);
      } else {
        setProducts([]);
        setHasMore(false);
        setIsFetching(false);
      }
    });
  }, []);

  const router = useRouter();
  if (router.isFallback) {
    return <div>loading...</div>;
  }

  return (
    <Layout title="条件検索">
      <div className="w-full max-w-screen-xl  ">
        <div className="flex flex-col mx-auto  px-3 py-10">
          <div className="z-0 min-w-screen flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl">
              <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900 text-center">
                SEARCH
              </h1>
              <div className="relative mt-1">
                <form onSubmit={firstLoad}>
                  <input
                    type="text"
                    className="w-full pl-3 pr-10 py-2 border-2 bg-gray-50 focus:bg-white border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="キーワードを入力..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="">
                    <button
                      className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-10 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"
                      type="submit"
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
                    <a
                      className="block w-7 h-7 text-center text-xl leading-0 absolute top-2.5 right-3 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"
                      onClick={resetName}
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
                          d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                        />
                      </svg>
                    </a>
                  </div>
                </form>
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
            <div className="container px-4 pb-24 mx-auto">
              <div className="flex flex-wrap ">
                <SearchResultList products={products} isFetching={isFetching} />

                {isFetching && (
                  <div className="mx-auto mt-5">
                    <ClipLoader />
                  </div>
                )}
                {!isFetching && HasMore ? (
                  <div className="mx-auto">
                    <button
                      onClick={loadMore}
                      className="focus:outline-none transition mt-5 duration-500 ease-in-out px-20 py-2 rounded-xl border-2 border-solid border-gray-400 bg-white hover:bg-blue-100 flex  "
                    >
                      <span>
                        <svg
                          className="w-6 h-6 inline mb-1 mr-2 gray-400 "
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        もっと見る
                      </span>
                    </button>
                  </div>
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
