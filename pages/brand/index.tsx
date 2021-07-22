import { useEffect } from "react";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import { getAllBrands } from "../../lib/fetchBrand";
import { BRAND } from "../../types/brand";
import BrandList from "../../components/BrandList";
import { brands } from "../../constants/brands";
import { BREADCRUMB } from "../../types/breadcrumb";
import Breadcrumb from "../../components/Breadcrumb";
import BrandDetail from "../../components/Brand/BrandDetail";
interface STATICPROPS {
  brands: BRAND[];
}
const Brand: NextPage<STATICPROPS> = ({ brands }) => {
  const breads: BREADCRUMB[] = [
    {
      name: "brand",
      slug: "/brand",
    },
  ];
  return (
    <>
      <Layout title="ブランドの一覧ページ">
        <Breadcrumb breads={breads} />
        <section className="text-gray-600 body-font pb-20">
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
                  ブランド一覧です。それぞれのブランドに分類されるカテゴリの商品を閲覧することができます。
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {brands &&
                brands.map((brand, index) => (
                  <BrandList
                    key={index}
                    {...brand}
                    detail={false}
                    category=""
                  />
                ))}
            </div>
          </div>
          <p className="text-center text-2xl">ブランドはさらに追加予定！</p>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  //   const brands = await getAllBrands();
  return {
    props: {
      brands,
    },
  };
};

export default Brand;
