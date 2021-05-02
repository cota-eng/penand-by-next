import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import { getAllCategories } from "../../lib/fetchCategory";
import { CATEGORY } from "../../types/category";
import CategoryDetail from "../../components/CategoryDetail";
import { categories } from "../../constants/categories";

interface STATICPROPS {
  categories: CATEGORY[];
}
const Category: NextPage<STATICPROPS> = ({ categories }) => {
  return (
    <>
      <Layout title="カテゴリの一覧ページ">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  Category List
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  カテゴリ一覧です。それぞれのカテゴリに分類されるブランドの商品を閲覧することができます。
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {categories &&
                categories.map((category, index) => (
                  <CategoryDetail key={index} {...category} />
                  //   <p key={category.id}>{category.name}</p>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Category;
export const getStaticProps: GetStaticProps = async () => {
  //   const categories = await getAllCategories();
  // categories
  return {
    props: {
      categories: categories,
    },
  };
};
