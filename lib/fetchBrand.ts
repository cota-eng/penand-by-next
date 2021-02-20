import fetch from "node-fetch";

export const getAllBrands = async () => {
  const res = await fetch(new URL(`http://localhost:8000/api/brand/`));
  const brands = await res.json();
  return brands;
};
