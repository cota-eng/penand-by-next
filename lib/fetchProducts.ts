import fetch from "node-fetch";
import { PRODUCT } from "../types/product";
import { RESULTS } from "../types/results";

export const getAllProducts = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`)
  );
  //   const res = await fetch(new URL(`http://localhost:8000/api/product${page}`));
  const products: PRODUCT[] = await res.json();
  return products;
};
export const getAllProductIds = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
  const products: PRODUCT[] = await res.json();
  return products.map((product: PRODUCT) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
};
export const getProductData = async (id: string) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}/`)
  );
  const product = await res.json();
  return product;
};
export const getCategoryBrandId = async () => {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
  //   const products: PRODUCT[] = await res.json();
  //   return products.map((product: PRODUCT) => {
  //     return {
  //       params: {
  //         id: product.id.toString(),
  //       },
  //     };
  //   });
};

export const getCategoryBrandFilteredProductData = async (
  category_slug: string,
  brand_slug: string,
  id: string
) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/api/category/${category_slug}/brand/${brand_slug}/?page=${id}`
    )
  );
  const products = await res.json();
  return products;
};

export const getBrandCategoryFilteredProductData = async (
  category_slug: string,
  brand_slug: string,
  id: string
) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/api/brand/${brand_slug}/category/${category_slug}/?page=${id}`
    )
  );
  const products = await res.json();
  return products;
};



const PER_PAGE = 12

export const getCategoryBrandFilteredProductPageData = async (
  category_slug: string,
  brand_slug: string
) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/api/category/${category_slug}/brand/${brand_slug}/`
    )
  );
  const data: RESULTS = await res.json();
  // 1~page数の配列
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const params = range(1, Math.ceil(data.count / PER_PAGE)).map((id) => ({
    category_slug: category_slug,
    brand_slug: brand_slug,
    id: id.toString(),
  }));
  return {
    params,
  };
  //   const paths = range(1, Math.ceil(data.count / 12)).map((id) => ({
  //     params: {
  //       category_slug: category_slug,
  //       brand_slug: brand_slug,
  //       id: id.toString(),
  //     },
  //   }));
  //   return paths;
};
