import { REVIEW } from "../types/review";

export const postReview = (id:string, data: REVIEW, token:string) => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review/${id}/rate_pen/`, {
    method: "POST",
    headers: {
      //   Accept: "application/form-data",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch(() => console.log("error"));
};
