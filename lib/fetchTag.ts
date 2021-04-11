import fetch from "node-fetch";

export const getAllTags = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/tag/`)
  );
  const tags = await res.json();
  return tags;
};
