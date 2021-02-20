import Layout from "../components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllBrands } from "../lib/fetchBrand";
import { BRAND } from "../types/brandType";
import BrandDetail from "../components/BrandDetail";

interface STATICPROPS {
  brands: BRAND[];
}

const brand: React.FC<STATICPROPS> = ({ brands }) => {
  return (
    <Layout title="ブランドの一覧ページ">
      <h2>BRAND</h2>
      {brands &&
        brands.map((brand) => <BrandDetail key={brand.id} {...brand} />)}
    </Layout>
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
