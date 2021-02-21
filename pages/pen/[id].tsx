import Layout from "../../components/Layout";
import { PEN } from "../../types/pen";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getAllPenIds, getPenData } from "../../lib/fetchPen";
import { useRouter } from "next/router";
import ReviewForm from "../../components/ReviewForm";
import ReviewDetail from "../../components/ReviewDetail";
const PenDetail: React.FC<PEN> = ({
  id,
  name,
  description,
  category,
  price_yen,
  brand,
  tag,
  created_at,
  updated_at,
  review,
}) => {
  const router = useRouter();
  if (router.isFallback || !id) {
    return <div>loading...</div>;
  }
  // pen.tsxからのpropsを分解しているから、nameがないときはpenがないと同じはず
  return (
    <div>
      <Layout title="{name}のレビュー">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <a
              className="inline-block rounded-full text-white 
        bg-blue-400 hover:bg-blue-500 duration-300 
        text-xs font-bold 
        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
        opacity-90 hover:opacity-100"
            >
              カテゴリ：{category.name}
            </a>
            <img
              className="lg:w-6/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {name}
              </h1>
              <p className="mb-8 leading-relaxed">{brand.name}.</p>
              <div className="flex justify-center">
                <a className="inline-flex text-white bg-gray-500 border-0 py-2 px-6  rounded text-lg">
                  {created_at}
                </a>
                <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6  rounded text-lg">
                  {updated_at}
                </a>
              </div>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
        <p>{description}</p>
        <p>{price_yen}円</p>
        <p>{tag && tag.map((t) => <p key={t.id}>{t.name}</p>)}</p>
        <Link href="/pen">
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
        </Link>
        <hr className="text-black-200" />
        {review &&
          review.map((rev) => (
            <ReviewDetail key={rev.id} {...rev}></ReviewDetail>
          ))}
        <hr />
        <ReviewForm id={id} />
      </Layout>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPenIds();
  return {
    paths,
    fallback: true,
    // fallback false => access unexist id => return 404
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pen = await getPenData(context.params.id as string);
  return {
    props: { ...pen },
    revalidate: 10,
  };
};

export default PenDetail;
