import axios from "axios";
import { SEARCH } from "../types/search";

export const getFilteredPens = async ({
  name,
  tag,
  //   brand,
  category,
  maxPrice,
  minPrice,
}: SEARCH) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/search?name=${name}&tag=${tag}&category=${category}&lte=${maxPrice}&gte=${minPrice}/`
  );
  return res.data;
  //   if (res.status === 200) {
  //     return res.data;
  //   } else {
  //     throw new Error();
  //   }
  //   const filteredPens = await res.json();
  //   return filteredPens;
};
