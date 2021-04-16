import { GetStaticPaths, GetStaticProps } from "next";
import { getCategoryBrandFilteredProductData } from "../../../../../../lib/fetchProducts";
import { PRODUCT } from "../../../../../../types/product";
import { RESULTS } from "../../../../../../types/results";
import Layout from "../../../../../../components/Layout";
import Product from "../../../../../../components/Product";
import Pagination from "../../../../../../components/Pagination";
import { categories } from "../../../../../../constants/categories";
import { brands } from "../../../../../../constants/brands";
import Category from "../../../../../../components/Search/Category";
import { slugs } from "../../../../../../constants/slugs";

interface STATICPROPS {
  category: string;
  brand: string;
  products: PRODUCT[] | null;
  totalCount: number | null;
  page: string | null;
}

const PER_PAGE = 5;

const Detail: React.FC<STATICPROPS> = ({
  category,
  brand,
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
      <Pagination
        totalCount={totalCount}
        now={page}
        category={category}
        brand={brand}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  //   return {
  //     paths,
  //     fallback: "blocking",
  //     };

  // const newslug =

  const pathss = slugs.map((slug) => {
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/category/${slug.category}/brand/${slug.brand}/`
    // );
    // const data: RESULTS = await res.json();
    // const pages = data.count / 12;
    const range = (start: number, end: number) =>
      [...Array(end - start + 1)].map((_, i) => start + i);
    const params = range(1, Math.ceil(slug.count / 12)).map((id) => ({
      params: {
        category_slug: slug.category,
        brand_slug: slug.brand,
        id: id.toString(),
      },
    }));
    return params;
  });
  const paths = pathss.reduce((pre, current) => {
    pre.push(...current);
    return pre;
  }, []);
  //   const paths = slugs.map((slug) => {
  //     return {
  //       params: {
  //         category_slug: slug.category,
  //         brand_slug: slug.brand,
  //         // id: slug.pages.toString(),
  //         id: "1",
  //       },
  //     };
  //   });
  return {
    paths,
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
      category: context.params.category_slug as string,
      brand: context.params.brand_slug as string,
      products: data.results,
      totalCount: data.count,
      page: id,
    },
    // revalidate: 10,
  };
};

export default Detail;