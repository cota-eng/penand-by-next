import Layout from "../components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllCategories } from "../lib/fetchCategory";
import { CATEGORY } from "../types/category";

interface STATICPROPS {
  categories: CATEGORY[];
}

const brand: React.FC<STATICPROPS> = ({ categories }) => {
  return (
    <Layout title="ブランドの一覧ページ">
      <h2>BRAND</h2>
      {categories &&
        categories.map((category) => <p key={category.id}>{category.name}</p>)}
    </Layout>
  );
};

export default brand;

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories();
  return {
    props: {
      categories,
    },
  };
};
