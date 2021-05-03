import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../../components/Layout";
import { getAllBrands } from "../../../lib/fetchBrand";
import { BRAND } from "../../../types/brand";
import BrandDetail from "../../../components/BrandDetail";
import { brands } from "../../../constants/brands";
import { categories } from "../../../constants/categories";
import CategoryDetail from "../../../components/CategoryDetail";
interface STATICPROPS {
  categories: BRAND[];
}
const Brand: NextPage<STATICPROPS> = ({ categories }) => {
  const router = useRouter();
  return (
    <>
      <Layout title="ブランドの一覧ページ">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  Brand List
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  カテゴリ一覧です。それぞれのブランドに分類されるカテゴリの商品を閲覧することができます。
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {categories &&
                categories.map((category, index) => (
                  <CategoryDetail
                    key={index}
                    brand={router.query.brand_slug as string}
                    {...category}
                  />
                ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const brands = await getAllBrands();
//   return {
//     props: {
//       brands,
//     },
//   };
// };
export const getStaticPaths: GetStaticPaths = async () => {
  const brandpaths = brands.map((brand) => brand.slug);
  const patharray = brandpaths.map((slug) => ({
    params: { brand_slug: slug },
  }));

  return {
    paths: patharray,
    fallback: "blocking",
  };
  // fallback false => access unexist id => return 404
};
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { categories },
    revalidate: 10,
  };
};

export default Brand;
