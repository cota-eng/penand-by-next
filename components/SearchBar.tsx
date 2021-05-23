import React from "react";

interface Props {
  firstLoad: (e: React.FormEvent) => void;
  name: string;
  setName: (value: React.SetStateAction<string>) => void;
  resetName: () => void;
}

const SearchBar: React.FC<Props> = ({
  firstLoad,
  name,
  setName,
  resetName,
}) => {
  return (
    <div className="z-0 min-w-screen flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden  ">
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
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
  );
};

export default SearchBar;
