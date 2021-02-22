import fetch from "node-fetch";

export const getFilteredPens = async (name, tag, brand, category, max, min) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/api/search?name=${name}&tag=${tag}&brand${brand}=&category=${category}&lte=${max}&gte=${min}/`
    )
  );
  const filteredPens = await res.json();
  return filteredPens;
};
