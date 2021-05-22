import React, { useMemo } from "react";
import { PRODUCT } from "../types/product";
import Product from "./Product";

interface Props {
  products: PRODUCT[];
  isFetching: boolean;
}

const SearchResultList: React.FC<Props> = React.memo(
  ({ products, isFetching }) => {
    return (
      <>
        {products &&
          products.map((product, index) => (
            <div
              key={index}
              className="p-2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full cursor-pointer "
            >
              <Product {...product} />
            </div>
          ))}
        {products.length === 0 && !isFetching && (
          <div className="mx-auto mt-5">
            <p>何も見つかりませんでした。</p>
          </div>
        )}
      </>
    );
  }
);

export default SearchResultList;
