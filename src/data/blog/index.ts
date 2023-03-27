import { extractMarkdownData } from "@/gateways/markdown/extractMarkdownData";
import { Content } from "../content";

export const BLOG_POSTS_PATHS = "src/data/blog/posts/";

export const BLOG_DATA = {
  href: "/blog",
  title: "Blog",
  subtitle:
    "Là où je partage mes pensées et mes apprentissages, ainsi que les avancées du projet...",
};

export type BlogPost = Content;

export const getBlogPosts = (): BlogPost[] => {
  return extractMarkdownData(BLOG_POSTS_PATHS);
};
