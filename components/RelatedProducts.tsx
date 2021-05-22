import React from "react";
import { PRODUCT } from "../types/product";
import Product from "./Product";
interface Props {
  related: PRODUCT[];
}
const RelatedProducts: React.FC<Props> = ({ related }) => {
  return (
    <div className="bg-pink-50 w-full px-5 py-10">
      <h2 className="text-center text-gray-800 text-xl my-5">Related</h2>
      <div className="">
        {related &&
          related.map((product: PRODUCT) => (
            <div className="p-2 inline-block  md:w-1/2 sm:w-1/2 w-full cursor-pointer ">
              <Product {...product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
