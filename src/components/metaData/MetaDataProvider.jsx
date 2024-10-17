import { fetchMetaDataByPath } from "@/app/dashboard/dashBoardComponents/MetaDataEditorForm";
import React from "react";

const MetaDataProvider = async ({ children, routPath }) => {
  const meta = await fetchMetaDataByPath(routPath);
  return (
    <>
      <Head>
        <title>{meta.title || "Default Title"}</title>
        <meta
          name="description"
          content={meta.description || "Default description"}
        />
        <meta name="keywords" content={meta.keywords || "Default keywords"} />
        <meta name="author" content={meta.author || "Default author"} />
        <meta name="content" content={meta.content || "Default content"} />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default MetaDataProvider;
