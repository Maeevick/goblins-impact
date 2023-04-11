import Header from "../components/Header";
import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import Disclaimer from "../components/Disclaimer";
import CardLayout from "../components/Cards/CardLayout";

import { BLOG_DATA, getBlogPosts } from "@/data/blog";

export const metadata = {
  title: `Goblins Impact - ${BLOG_DATA.title}`,
  description: BLOG_DATA.subtitle,
};

export default function Blog() {
  return (
    <>
      <Header description={`${BLOG_DATA.header}`} action={<HomeLink />} />
      <PageTitle title={`${BLOG_DATA.title}...`} />
      <Disclaimer>
        <h3 className="text-xl my-2 underline">{BLOG_DATA.disclaimer.title}</h3>
        <p>{BLOG_DATA.disclaimer.message}</p>
      </Disclaimer>
      <CardLayout data={getBlogPosts()} />
    </>
  );
}
