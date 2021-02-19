import Layout from "../components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPens } from "../lib/fetchPen";
import { PEN } from "../types/penType";
import ReactMarkdown from "react-markdown";
import Pen from "../components/Pen";

interface STATICPROPS {
  pens: PEN[];
}

const pen: React.FC<STATICPROPS> = ({ pens }) => {
  return (
    <Layout title="ペンの一覧ページ">
      <h2>aaaaa</h2>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2">
              {pens &&
                pens.map((pen) => (
                  //   <ReactMarkdown key={pen.name}>{pen.description}</ReactMarkdown>
                  <Pen key={pen.id} {...pen} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default pen;

export const getStaticProps: GetStaticProps = async () => {
  const pens = await getAllPens();
  return {
    props: {
      pens: pens,
    },
  };
};
