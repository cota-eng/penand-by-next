import { PEN } from "../types/pen";
import { useState, useEffect } from "react";
import axios from "axios";
const PenResult: React.FC = () => {
  const [pens, setPens] = useState<PEN[]>(null);

  //初期表示時にデータフェッチ
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/pen/`)
      .then((res) => setPens(res.data));
    //   .then((data) => setPens(data));
  }, []);

  //ロード中
  if (!pens) return <p>Loading ...</p>;
  return <div>{pens && pens.map((pen) => <p>{pen.name}</p>)}</div>;
};

export default PenResult;
