import React from "react";
import Head from "next/head";

export default ({ title, description, keyword, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={"/favicon.png"} />
      <meta property="og:site_name" content={title} />
      <meta name="keywords" content={keyword} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="twitter:card" content="Summary Card" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:url" content={"https://"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={"/favicon.png"} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href={"/favicon.png"} />
    </Head>
  );
};
