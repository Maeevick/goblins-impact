import { getBlogPosts } from "@/data/blog";
import PartialSlugFrom, { SlugPageProps } from "@/app/components/Slug";

const posts = getBlogPosts();

export const generateStaticParams = async () => {
  return posts.map(({ slug }) => ({ slug }));
};

export default function BlogSlugPage(props: SlugPageProps) {
  const post = posts.find(({ slug }) => slug === props.params.slug);
  if (!post) return;
  return PartialSlugFrom(post);
}
