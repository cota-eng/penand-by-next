import { NextPage } from "next";
import Pagination from "../../../components/Pagination";
import { GetStaticPaths, GetStaticProps } from "next";
import { PRODUCT } from "../../../types/product";
import Layout from "../../../components/Layout";
import Product from "../../../components/Product";

interface STATICPROPS {
  products: PRODUCT[] | null;
  totalCount: number | null;
  page: string | null;
}

const PER_PAGE = 5;
const mechanical: NextPage<STATICPROPS> = ({ products, totalCount, page }) => {
  return (
    <Layout title="ペンの一覧ページ">
      <div>
        <section className="text-gray-600 body-font overflow-auto h-auto">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2">
              {products &&
                products.map((product) => (
                  <Product key={product.id} {...product} />
                ))}
            </div>
            <div className="flex flex-wrap -m-2"></div>
          </div>
        </section>
      </div>
      <Pagination totalCount={totalCount} now={page} />
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
      page: id,
    },
  };
};

export default mechanical;
