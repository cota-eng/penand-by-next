import fetch from "node-fetch";

export const getAllBrands = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/brand/`)
  );
  const brands = await res.json();
  return brands;
};
