export const postReview = (id, data, token) => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${id}/rate_pen/`, {
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
