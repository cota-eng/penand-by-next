import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getCategoryBrandFilteredProductData } from "../../../../../../lib/fetchProducts";
import { PRODUCT } from "../../../../../../types/product";
import { RESULTS } from "../../../../../../types/results";
import Layout from "../../../../../../components/Layout";
import Product from "../../../../../../components/Product";
import Pagination from "../../../../../../components/Pagination";

interface STATICPROPS {
  products: PRODUCT[] | null;
  totalCount: number | null;
  page: string | null;
}

const PER_PAGE = 5;

const CategoryDetail: React.FC<STATICPROPS> = ({
  products,
  totalCount,
  page,
}) => {
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
  //   return {
  //     paths,
  //     fallback: "blocking",
  //     };
  const slugs = [
    {
      category: "mechanical",
      brand: "uni",
    },
    {
      category: "mechanical",
      brand: "pilot",
    },
  ];

  return {
    paths: slugs.map(async (slug) => {
      const category_slug = slug.category;
      const brand_slug = slug.brand;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/category/${category_slug}/brand/${brand_slug}/`
      );
      const data: RESULTS = await res.json();

      // 1~page数の配列
      const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i);

      range(1, Math.ceil(data.count / PER_PAGE)).map((id) => ({
        params: {
          category_slug: category_slug,
          brand_slug: brand_slug,
          id: id.toString(),
        },
      }));
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const data: RESULTS = await getCategoryBrandFilteredProductData(
    context.params.category_slug as string,
    context.params.brand_slug as string,
    id as string
  );
  return {
    props: {
      products: data.results,
      totalCount: data.count,
      page: id,
    },
    // revalidate: 10,
  };
};

export default CategoryDetail;
