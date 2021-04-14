import Layout from "../components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllProductIds, getAllProducts } from "../lib/fetchProducts";
import { PRODUCT } from "../types/product";
import ReactMarkdown from "react-markdown";
import Product from "../components/Product";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { NextPage } from "next";

interface STATICPROPS {
  products: PRODUCT[];
}

const mechanical: NextPage<STATICPROPS> = ({ products }) => {
  useEffect(() => {
    scroll.scrollToBottom();
  }, []);
  return (
    <Layout title="ペンの一覧ページ">
      <div className="overflow-hidden">
        <h2 className="font-semibold mb-2 mx-auto text-center mt-5 text-3xl w-full text-gray-500">
          ペンの一覧ページ
        </h2>
        <div>description</div>
      </div>
      <div>
        <section className="text-gray-600 body-font overflow-auto h-auto">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2">
              {products &&
                products.map((product) => (
                  //   <ReactMarkdown key={pen.name}>{pen.description}</ReactMarkdown>
                  <Product key={product.id} {...product} />
                ))}
            </div>
            <div className="flex flex-wrap -m-2"></div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default mechanical;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products: products,
    },
    revalidate: 3,
  };
};
