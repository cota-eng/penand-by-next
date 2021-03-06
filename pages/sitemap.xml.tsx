import { GetServerSidePropsContext } from "next";
import { getAllProducts } from "../lib/fetchProducts";
const appHost = "https://www.bista.dev/";
async function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // TODO: やる必要のあるページは、users/usernameやaccouts/ settings/ を除いたすべて
  const products = await getAllProducts();
  products.forEach((product) => {
    xml += `
      <url>
        <loc>${appHost}products/${product.id}</loc>
        <lastmod>2021-05-01</lastmod>
        <changefreq>yearly</changefreq>
      </url>
    `;
  });

  xml += `</urlset>`;
  return xml;
}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml(); // xmlコードを生成する処理（後で書く）

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
