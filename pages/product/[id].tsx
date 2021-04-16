import Layout from "../../components/Layout";
import { PRODUCT } from "../../types/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getAllProductIds, getProductData } from "../../lib/fetchProducts";
import { useRouter } from "next/router";
import ReviewForm from "../../components/Review/ReviewForm";
import Tag from "../../components/Tag";
import ReviewTop from "../../components/Review/ReviewTop";
import dynamic from "next/dynamic";
import Fav from "../../components/Fav";
const MyChart = dynamic(() => import("../../components/Review/ReviewDetail"), {
  ssr: false,
});
const CategoryColor: { [key: string]: string } = {
  "1": "red",
  "2": "blue",
  "3": "green",
};
const ProductPage: React.FC<PRODUCT> = ({
  id,
  name,
  description,
  category,
  price,
  brand,
  tag,
  created_at,
  updated_at,
  review,
}) => {
  const color = CategoryColor[`${category.id}`];
  const router = useRouter();
  if (router.isFallback || !name) {
    return <div>loading...</div>;
  }
  // pen.tsxからのpropsを分解しているから、nameがないときはpenがないと同じはず
  return (
    <div>
      <Layout title="レビュー}">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <span
              className={`inline-block rounded-full text-white 
                            bg-${color}-400 hover:bg-blue-500 duration-300 
                        text-xs font-bold 
                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                        opacity-90 hover:opacity-100`}
            >
              カテゴリ：{category.name}
            </span>
            <Fav id={id} />
            {tag && tag.map((t) => <Tag key={t.id} {...t} />)}
            <img
              className="lg:w-6/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
            <div className="text-center  w-full">
              <h1 className="title-font w-100 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {name}
              </h1>
              <p className="mb-8 leading-relaxed">{brand.name}.</p>
              <div className="flex justify-center">
                <a className="inline-flex text-white bg-gray-400 border-0 py-2 px-6  rounded text-lg">
                  掲載:{created_at}
                </a>
                <a className="ml-4 inline-flex text-gray-400 bg-gray-100 border-0 py-2 px-6  rounded text-lg">
                  更新:{updated_at}
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <Link href="/pen">
          <div className="flex cursor-pointer mt-12">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            <a className="text-lg">Home</a>
          </div>
        </Link> */}
        {/* <ReviewTop /> */}
        {review && review.map((rev) => <MyChart key={rev.id} {...rev} />)}
        <hr />
        <ReviewForm id={id} />
      </Layout>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductIds();
  // TODO:このエンドポイントをReview含まないものにする（クエリ少ない方で負担軽減）
  return {
    paths,
    fallback: "blocking",
    // fallback false => access unexist id => return 404
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const product = await getProductData(context.params.id as string);
  return {
    props: { ...product },
    // revalidate: 10,
  };
};
export default ProductPage;
