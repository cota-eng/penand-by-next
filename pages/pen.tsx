import Layout from "../components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPens } from "../lib/fetchPen";
import { PEN } from "../types/penType";
import ReactMarkdown from "react-markdown";

interface STATICPROPS {
  pens: PEN[];
}

const pen: React.FC<STATICPROPS> = ({ pens }) => {
  return (
    <Layout title="ペンの一覧ページ">
      <h2>aaaaa</h2>
      <div>
        {pens &&
          pens.map((pen) => (
            <ReactMarkdown key={pen.name}>{pen.description}</ReactMarkdown>
          ))}
      </div>
    </Layout>
  );
};

export default pen;

export const getStaticProps: GetStaticProps = async () => {
  const pens = await getAllPens("");
  return {
    props: {
      pens: pens,
    },
  };
};
