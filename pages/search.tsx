import Layout from "../components/Layout";
import React, { useState } from "react";
import Select from "react-select";
import dynamic from "next/dynamic";

const CategorySelect = dynamic(() => import("../components/Search/Category"), {
  ssr: false,
});
const TagSelect = dynamic(() => import("../components/Search/Tag"), {
  ssr: false,
});

const Search: React.FC = () => {
  //   const [food, setFood] = useState("");
  const [name, setName] = useState<string | null | undefined>("");
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Search For Name"
                />
              </div>
              <div className="py-3 text-sm">
                <CategorySelect />
                <TagSelect />
              </div>
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center mt-2 w-1/3 mr-1 w-2/5 border border-gray-700">
                  <label
                    className="hidden block text-sm text-gray-600"
                    htmlFor="min"
                  >
                    Min
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700  rounded"
                    id="min"
                    name="min"
                    type="number"
                    required={true}
                    placeholder="最小"
                    aria-label="number"
                  />
                </div>
                {"~"}
                <div className="inline-flex items-center mt-2 -mx-1 ml-1 w-2/5  mr-1 border border-gray-700">
                  <label
                    className="hidden block text-sm text-gray-600"
                    htmlFor="max"
                  >
                    MaxPrice
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700  rounded"
                    id="max"
                    name="max"
                    type="number"
                    required={true}
                    placeholder="最大(円)"
                    aria-label="number"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="m-3">
                  <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mr-2">RESET</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentcolor"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="m-3">
                  <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
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
      </div>
    </Layout>
  );
};

export default Search;
