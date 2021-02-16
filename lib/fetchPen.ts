import fetch from "node-fetch";

export const getAllPens = async (page) => {
  const res = await fetch(new URL(`http://localhost:8000/api/pen${page}`));
  const pens = await res.json();
  return pens;
};
