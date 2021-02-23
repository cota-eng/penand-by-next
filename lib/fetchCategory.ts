import fetch from "node-fetch";

export const getAllCategories = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/category/`)
  );
  const categories = await res.json();
  return categories;
};
