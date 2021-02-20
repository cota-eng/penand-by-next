import Layout from "../../components/Layout";
import { PEN } from "../../types/pen";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getAllPenIds, getPenData } from "../../lib/fetchPen";
import { useRouter } from "next/router";
const PenDetail: React.FC<PEN> = ({
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
  if (router.isFallback || !name) {
    return <div>loading...</div>;
  }
  // pen.tsxからのpropsを分解しているから、nameがないときはpenがないと同じはず
  return (
    <div>
      <Layout title="fff">
        <p>{name}</p>
        <p>{description}</p>
        <p>{category.name}</p>
        <p>{price_yen}</p>
        <p>{brand.name}</p>
        <p>{tag.name}</p>
        <p>{created_at}</p>
        <p>{updated_at}</p>
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
            <a>"Go back to Home"</a>
          </div>
        </Link>
        <p>review</p>

        {review && review.map((rev) => <p key={rev.id}>{rev.title}</p>)}
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
    revalidate: 3,
  };
};

export default PenDetail;
