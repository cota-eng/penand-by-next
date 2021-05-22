import Layout from "../../components/Layout";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import ReviewForm from "../../components/Review/ReviewForm";
import Tag from "../../components/Tag";
import ReviewTop from "../../components/Review/ReviewTop";
import Fav from "../../components/Fav";
import { getAllProductIds, getProductData } from "../../lib/fetchProducts";
import { PRODUCT } from "../../types/product";
import Image from "next/image";
import RelatedProducts from "../../components/RelatedProducts";
import Breadcrumb from "../../components/Breadcrumb";
const MyChart = dynamic(() => import("../../components/Review/ReviewDetail"), {
  ssr: false,
});
const CategoryColor: { [key: string]: string } = {
  "1": "red",
  "2": "blue",
  "3": "green",
};
interface ProductIncludeRelatedProps extends PRODUCT {
  related: PRODUCT[];
}
interface Bread {
  name: string;
  slug: string;
}
const ProductPage: React.FC<ProductIncludeRelatedProps> = ({
  id,
  name,
  image,
  image_src,
  description,
  category,
  price,
  brand,
  tag,
  created_at,
  updated_at,
  review,
  related,
}) => {
  const color = CategoryColor[`${category.id}`];
  const router = useRouter();
  if (router.isFallback || !name) {
    return <div>loading...</div>;
  }
  const breads: Bread[] = [
    {
      name: "category",
      slug: "/category",
    },
    {
      name: `${category.slug}`,
      slug: `/category/${category.slug}`,
    },
    {
      name: "brand",
      slug: "/brand",
    },
    {
      name: `${brand.slug}`,
      slug: `/brand/${brand.slug}`,
    },
    {
      name: `${name}`,
      slug: ``,
    },
  ];
  // pen.tsxからのpropsを分解しているから、nameがないときはpenがないと同じはず
  return (
    <div>
      <Layout title={`${name}の詳細、レビューページ | Bista`}>
        <Breadcrumb breads={breads} />
        <section className="text-gray-600 body-font w-5/6 mx-auto">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col w-3/4">
            <span
              className={`inline-block rounded-full text-white 
                            bg-${color}-400 hover:bg-${color}-500 duration-300 
                        text-xs font-bold 
                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                        `}
            >
              カテゴリ：{category.name}
            </span>
            <Fav id={id} />
            {tag && tag.map((t) => <Tag key={t.id} {...t} />)}
            {/* <img
              className="lg:w-6/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt={`${name}の画像`}
              src={image}
            /> */}
            <Image
              className="lg:w-6/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              src={image}
              quality={50}
              width={800}
              height={800}
            />
            <div className="text-center">
              <h1 className="title-font w-100 sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
                {name}
              </h1>
              <p className="mb-8 leading-relaxed">ブランド名：{brand.name}.</p>
              <div className="flex justify-center">
                {/* <a className="inline-flex text-white bg-gray-400 border-0 py-2 px-6  rounded ">
                  掲載:{created_at}
                </a> */}
                <a className="ml-4 inline-flex text-gray-400 bg-gray-100 border-0  p-2  rounded ">
                  更新:{updated_at}
                </a>
              </div>
              <div className="">
                <p className="mt-10">{description}</p>
                <p className="mt-10">価格：{price}円</p>
                <p>0円の場合、価格データがまだありません。</p>
                <p className="mt-5">
                  <Link href={`${image_src}`}>
                    <a>出典</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-full">
          <RelatedProducts related={related} />
        </section>
        <section className="mx-auto w-4/5">
          <ReviewTop />
          {review && review.map((rev) => <MyChart key={rev.id} {...rev} />)}
          <hr />
          <ReviewForm id={id} />
        </section>
      </Layout>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductIds();
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
