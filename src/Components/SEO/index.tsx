import Head from "next/head";
import React, { PropsWithChildren } from "react";

interface SEOProps {
  content?: string;
  iconHref?: string;
  title?: string;
}
export const SEO: React.FC<PropsWithChildren<SEOProps>> = ({
  content = "Swotlyzer",
  children,
  iconHref = "/favicon.ico",
  title,
}) => {
  const titleMsg = `Swotlyzer ${title ? "- " + title : ""}`;
  return (
    <Head>
      <title>{titleMsg}</title>
      <meta name="description" content={content} />
      <link rel="icon" href={iconHref} />
      {children}
    </Head>
  );
};
