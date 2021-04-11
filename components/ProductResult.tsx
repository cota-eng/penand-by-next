import { PRODUCT } from "../types/product";
import { useState, useEffect } from "react";
import axios from "axios";
const PenResult: React.FC = () => {
  const [products, setProducts] = useState<PRODUCT[]>(null);

  //初期表示時にデータフェッチ
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/`)
      .then((res) => setProducts(res.data));
    //   .then((data) => setPens(data));
  }, []);

  //ロード中
  if (!products) return <p>Loading ...</p>;
  return (
    <div>{products && products.map((product) => <p>{product.name}</p>)}</div>
  );
};

export default PenResult;
