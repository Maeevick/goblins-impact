import Markdown from "markdown-to-jsx";
import Header from "./Header";
import { Description } from "./Description";
import HomeLink from "./HomeLink";
import { Content } from "@/data/content";

export type SlugPageProps = {
  params: {
    slug: string;
  };
};

export default function PartialSlugFrom(data: Content) {
  return (
    <>
      <Header description={<Description {...data} />} action={<HomeLink />} />
      <article className="prose prose-invert">
        <Markdown>{data.content}</Markdown>
      </article>
    </>
  );
}
