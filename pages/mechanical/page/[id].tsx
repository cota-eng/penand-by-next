import { NextPage } from "next";
import Pagination from "../../../components/Pagination";
import { GetStaticPaths, GetStaticProps } from "next";
import { PRODUCT } from "../../../types/product";
import product from "../../product";
import Layout from "../../../components/Layout";

interface STATICPROPS {
  products: PRODUCT[] | null;
  totalCount: number | null;
}

const PER_PAGE = 5;
const mechanical: NextPage<STATICPROPS> = ({ products, totalCount }) => {
  return (
    <Layout title="ペンの一覧ページ">
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <p>{product.name}</p>
            </li>
          ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/api/pro/");
  const datas = await res.json();
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(datas.count / PER_PAGE)).map(
    (data) => `/mechanical/page/${data}`
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetch(`http://localhost:8000/api/pro?page=${id}`)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      products: data.results,
      totalCount: data.count,
    },
  };
};

export default mechanical;
