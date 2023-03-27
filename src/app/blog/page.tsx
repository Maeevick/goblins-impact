import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import GridWith3Cols from "../components/GridWith3Cols";
import Header from "../components/Header";

import { BLOG_DATA, getBlogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <>
      <Header
        description="Là où je partage mes pensées..."
        action={<HomeLink />}
      />
      <PageTitle title={`${BLOG_DATA.title}...`} />
      <GridWith3Cols data={getBlogPosts()} />
    </>
  );
}
