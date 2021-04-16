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

import Autosuggest from "react-autosuggest";
import { suggest } from "../constants/suggest";
import { SUGGESTINPUT } from "../types/suggestInput";
import Link from "next/link";
const getSuggestions = (value: string): SUGGESTINPUT[] => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : suggest.filter(
        (product) => product.name.slice(0, inputLength) === inputValue
      );
};
const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const [suggestions, setSuggestions] = useState<SUGGESTINPUT[]>([]);

  const getSuggestionValue = (suggestion: SUGGESTINPUT): string => {
    const { name } = suggestion;
    return name;
  };

  const renderSuggestion = (suggestion: SUGGESTINPUT) => {
    return (
      <>
        <div className="text-sm underline to-blue-200 text-left  mt-1">
          <Link href={`product/${suggestion.pk}`}>
            <a target="_blank">{suggestion.name}</a>
          </Link>
        </div>
      </>
    );
  };

  const onChange = (
    event: React.BaseSyntheticEvent,
    { newValue }: { newValue: string }
  ) => {
    if (event) setValue(newValue);
  };
  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const suggestions: SUGGESTINPUT[] = getSuggestions(value);
    setSuggestions(suggestions);
  };
  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const inputProps = {
    placeholder: "商品名で検索",
    value,
    onChange,
  };

  //   useEffect(() => {
  //     if (isSearch) {
  //       try {
  //         setProducts(null);
  //         axios
  //           .get(`${process.env.NEXT_PUBLIC_API_URL}/api/search/?name=${name}`)
  //           .then((res) => setProducts(res.data));
  //       } catch (e) {
  //         () => setIsSearch(false);
  //       } finally {
  //         () => setIsSearch(false);
  //       }
  //     }
  //   }, [isSearch]);
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  //   if (error) return <div>failed to load</div>;
  //   if (!data || router.isFallback) return <div>loading...</div>;
  return (
    <Layout title="条件検索">
      <h1>SEARCH</h1>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="flex justify-center p-4 px-3 py-10">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
              <div className="flex items-center bg-gray-200 rounded-md mt-5">
                <div className="pl-2">
                  <svg
                    className="fill-current text-gray-500 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
                <input
                  className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                  id="search"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Search For Name"
                />
              </div>

              <div className="py-3 text-sm">
                {/* <TagSelect setTag={setTag} /> */}
              </div>
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center mt-2 w-1/3 mr-1 w-2/5 border border-gray-700">
                  <label
                    className="hidden block text-sm text-gray-600"
                    htmlFor="min"
                  ></label>
                  <input
                    className="w-full px-2 py-2 text-gray-700  rounded"
                    name="min"
                    type="number"
                    required={true}
                    value={minPrice ? minPrice : "0"}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="最低金額"
                    aria-label="number"
                  />
                </div>
                {"~"}
                <div className="inline-flex items-center mt-2 -mx-1 ml-1 w-2/5  mr-1 border border-gray-700">
                  <label
                    className="hidden block text-sm text-gray-600"
                    htmlFor="max"
                  ></label>
                  <input
                    className="w-full px-2 py-2 text-gray-700  rounded"
                    name="max"
                    type="number"
                    required={true}
                    value={maxPrice ? maxPrice : "100000"}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="最高金額"
                    aria-label="number"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="m-3">
                  <button
                    className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                    type="submit"
                    onClick={() => setIsSearch(!isSearch)}
                  >
                    <span className="mr-2">SEARCH</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentcolor"
                        d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2">
              {products && products.map((product) => <Product key={product.id} {...product} />)}
              {products === undefined && (
                <h2>該当するペンはありませんでした</h2>
              )}
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        input {
          width: full;
        }
        .react-autosuggest__container {
          position: relative;
        }
        .react-autosuggest__input {
          width: 200px;
          height: 30px;
          padding: 10px 20px;
          font-weight: 300;
          font-size: 16px;
          border: 1px solid #aaa;
          border-radius: 4px;
          -webkit-appearance: none;
        }
        .react-autosuggest__input--focused {
          outline: none;
        }
        .react-autosuggest__input::-ms-clear {
          display: none;
        }
        .react-autosuggest__input--open {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        .react-autosuggest__suggestions-container {
          display: none;
          margin: 2rem auto;
        }
        .react-autosuggest__suggestions-container--open {
          display: block;
          position: relative;
          top: -1px;
          width: 280px;
          border: 1px solid #aaa;
          background-color: #fff;
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
          font-size: 16px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          z-index: 2;
        }
        .react-autosuggest__suggestions-list {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        .react-autosuggest__suggestion {
          cursor: pointer;
          padding: 10px 20px;
        }
        .react-autosuggest__suggestion--highlighted {
          background-color: #ddd;
        }
      `}</style>

    </Layout>
  );
};
export default Search;
