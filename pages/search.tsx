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
// const CategorySelect = dynamic(() => import("../components/Search/Category"), {
//   ssr: false,
// });
// const TagSelect = dynamic(() => import("../components/Search/Tag"), {
//   ssr: false,
// });
// const BrandSelect = dynamic(() => import("../components/Search/Brand"), {
//   ssr: false,
// });
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
  const [products, setProducts] = useState<PRODUCT[]>(null);
  const [isSearch, setIsSearch] = useState(false);
  //   const [minPrice, setMinPrice] = useState<string | undefined>(null);
  //   const [maxPrice, setMaxPrice] = useState<string | undefined>(null);
  //   const resetKeyword = () => {
  //     setName("");
  //     setMinPrice("0");
  //     setMaxPrice("100000");
  //   }; const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<SUGGESTINPUT[]>([]);

  const getSuggestionValue = (suggestion: SUGGESTINPUT): string => {
    const { name } = suggestion;

    return name;
  };

  const renderSuggestion = (suggestion: SUGGESTINPUT) => {
    return (
      <div className="text-sm to-blue-200 text-center">
        <Link href={`product/${suggestion.pk}`}>
          <a target="_blank">{suggestion.name}</a>
        </Link>
      </div>
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
      <div className="w-full max-w-screen-xl  ">
        <div className="flex flex-col mx-auto  px-3 py-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
            SEARCH
          </h1>
          <div className="w-1/2 mx-auto">
            <div className="bg-gray-200 shadow-md rounded-lg px-3 py-2 mb-4 text-center mx-auto">
              {/* <div className="flex items-center bg-white rounded-md mt-5 mx-auto"> */}
              <div className="">
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
                <p className="title-font  mb-4 font-medium text-gray-900 text-center">
                  タップすると新しいタブで開かれます。
                </p>
              </div>
              <div className=" mx-auto">
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
              </div>
              {/* <input
                  className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                  id="search"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Search For Name"
                /> */}
              {/* </div> */}
              <div className="py-3 text-sm">
                {/* <TagSelect setTag={setTag} /> */}
              </div>
              {/* <div className="flex items-center justify-center">
                <div className="inline-flex items-center mt-2 w-1/3 mr-1  border border-gray-700">
                  <label
                    className="hidden  text-sm text-gray-600"
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
                    className="hidden text-sm text-gray-600"
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
              </div> */}
              {/* <div className="flex items-center justify-center">
                <div className="m-3">
                  <button
                    className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                    type="submit"
                    onClick={() => setIsSearch(!isSearch)}
                  >
                    <span className="">SEARCH</span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2">
              {products &&
                products.map((product) => (
                  <Product key={product.id} {...product} />
                ))}
              {!products && <h2>該当するペンはありませんでした</h2>}
            </div>
          </div>
        </section> */}
      </div>
      <style jsx>{`
        .react-autosuggest__container {
          position: relative;
        }

        .react-autosuggest__input {
          width: 240px;
          height: 30px;
          padding: 10px 20px;
          font-family: "Open Sans", sans-serif;
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
