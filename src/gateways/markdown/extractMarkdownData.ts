import fs from "fs";
import matter from "gray-matter";

import { Content } from "@/data/content";

export const extractMarkdownData = (path: string): Content[] => {
  return fs
    .readdirSync(path)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(`${path}/${file}`, "utf-8")
      );

      return {
        slug: file.replace(".md", ""),
        href: data.href,
        title: data.title,
        subtitle: data.subtitle,
        date: data.date,
        content,
      };
    });
};
