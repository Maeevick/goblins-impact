import Header from "../components/Header";
import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
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
      <article className="pb-20 text-center">
        <h3 className="text-xl my-2 underline">Information/Disclaimer</h3>
        <p>
          Pour les puristes de la langue française, je suis désolé d&apos;avance
          mais ce blog est écrit en <em>fran-glais</em>{" "}
          (&#127467;&#127479;-&#127468;&#127463;).
        </p>
      </article>
      <CardLayout data={getBlogPosts()} />
    </>
  );
}
