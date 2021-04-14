import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getCategoryBrandFilterdProductData } from "../../../../lib/fetchProducts";
import product from "../../../product";
import { PRODUCT } from "../../../../types/product";

interface STATICPROPS {
  products: PRODUCT[];
}

const CategoryDetail: React.FC<STATICPROPS> = ({ products }) => {
  return (
    <div>
      {products &&
        products.map((product) => <p key={product.id}>{product.name}</p>)}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  //   const paths = await getCategoryBrandId();
  //   return {
  //     paths,
  //     fallback: "blocking",
  //     };
  const slugs = [
    {
      category: "mechanical-pencil",
      brand: "uni",
    },
    {
      category: "mechanical-pencil",
      brand: "pilot",
    },
  ];

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          category_slug: slug.category,
          brand_slug: slug.brand,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await getCategoryBrandFilterdProductData(
    context.params.category_slug as string,
    context.params.brand_slug as string
  );
  return {
    props: { products },
    revalidate: 10,
  };
};

export default CategoryDetail;
