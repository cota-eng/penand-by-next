import fetch from "node-fetch";

export const getAllPens = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/pen/`)
  );
  //   const res = await fetch(new URL(`http://localhost:8000/api/pen${page}`));
  const pens = await res.json();
  console.log(pens);
  return pens;
};

export const getAllPenIds = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pen/`);
  const pens = await res.json();
  return pens.map((pen) => {
    return {
      params: {
        id: pen.id.toString(),
      },
    };
  });
};

export const getPenData = async (id: string) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/pen/${id}/`)
  );
  const pen = await res.json();
  return pen;
};
