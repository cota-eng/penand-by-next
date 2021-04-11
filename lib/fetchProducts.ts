import fetch from "node-fetch";
import { PRODUCT } from "../types/product";

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

export const getCategoryBrandFilterdProductData = async (
  category_slug: string,
  brand_slug: string
) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/api/category/${category_slug}/brand/${brand_slug}/`
    )
  );
  const products = await res.json();
  return products;
};
