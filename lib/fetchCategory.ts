import fetch from "node-fetch";

export const getAllCategories = async () => {
  const res = await fetch(new URL(`http://localhost:8000/api/category/`));
  const categories = await res.json();
  return categories;
};
