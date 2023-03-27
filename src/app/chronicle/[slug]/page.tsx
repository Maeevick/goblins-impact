import { getChronicleChapters } from "@/data/chronicle";
import PartialSlugFrom, { SlugPageProps } from "@/app/components/Slug";

const chapters = getChronicleChapters();

export const generateStaticParams = async () => {
  return chapters.map(({ slug }) => ({ slug }));
};

export default function ChronicleSlugPage(props: SlugPageProps) {
  const chapter = chapters.find(({ slug }) => slug === props.params.slug);
  if (!chapter) return;
  return PartialSlugFrom(chapter);
}
