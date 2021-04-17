import React from "react";
import product from "../pages/product";
import { PRODUCT } from "../types/product";
import Product from "./Product";
interface Props {
  related: PRODUCT[];
}
const RelatedProducts: React.FC<Props> = ({ related }) => {
  return (
    <div>
      <h2 className="text-center text-gray-800 text-xl">Related</h2>
      {related &&
        related.map((product: PRODUCT) => (
          //   <p key={product.id}>{product.name}</p>
          <Product {...product} />
        ))}
    </div>
  );
};

export default RelatedProducts;
