import Layout from "../components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllBrands } from "../lib/fetchBrand";
import { BRAND } from "../types/brand";
import BrandDetail from "../components/BrandDetail";

interface STATICPROPS {
  brands: BRAND[];
}

const brand: React.FC<STATICPROPS> = ({ brands }) => {
  return (
    <>
      <Layout title="ブランドの一覧ページ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl mt-5 text-2xl font-medium title-font mb-2 text-gray-900">
            Brand
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            ペンのブランド一覧です。
          </p>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap -m-1">
              {brands &&
                brands.map((brand) => (
                  <BrandDetail key={brand.id} {...brand} />
                ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default brand;

export const getStaticProps: GetStaticProps = async () => {
  const brands = await getAllBrands();
  return {
    props: {
      brands,
    },
  };
};
