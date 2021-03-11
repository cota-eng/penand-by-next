import fetch from "node-fetch";

export const getAllProducts = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/product/`)
  );
  //   const res = await fetch(new URL(`http://localhost:8000/api/product${page}`));
  const products = await res.json();
  return products;
};

export const getAllPenIds = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/`);
  const products = await res.json();
  return products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
};

export const getProductData = async (id: string) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}/`)
  );
  const product = await res.json();
  return product;
};
