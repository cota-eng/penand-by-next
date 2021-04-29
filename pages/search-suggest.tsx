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
      <div className="w-full max-w-screen-xl  ">
        <div className="flex flex-col mx-auto  px-3 py-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
            SEARCH
          </h1>
          <div className="md:w-1/2 w-3/4 mx-auto">
            <div className="bg-gray-200 shadow-md rounded-lg px-3 py-2 mb-4 text-center mx-auto">
              {/* <div className="flex items-center bg-white rounded-md mt-5 mx-auto"> */}
              <div className="flex  mb-4">
                <svg
                  className="fill-current text-gray-500 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
                <p className="title-font text-sm  font-medium text-gray-900 text-center">
                  タップすると新しいタブで開かれます。
                </p>
              </div>
              <div className="mx-0 flex justify-items-center">
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
                <svg
                  className="w-6 h-6 ml-2"
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
              </div>

              <div className="py-3 text-sm">
                {/* <TagSelect setTag={setTag} /> */}
              </div>
            </div>
          </div>
        </div>
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
