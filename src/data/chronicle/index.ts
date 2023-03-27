import { extractMarkdownData } from "@/gateways/markdown/extractMarkdownData";
import { Content } from "../content";

export const CHRONICLES_CHAPTERS_PATHS = "src/data/chronicle/chapters/";

export const CHRONICLES_DATA = {
  href: "/chronicle",
  title: "Chronique",
  subtitle:
    "Là où je m'essaye à l'écriture de fantaisie et où je publie les aventures de nos chers gobelins...",
};

export type ChronicleChapter = Content;

export const getChronicleChapters = (): ChronicleChapter[] => {
  return extractMarkdownData(CHRONICLES_CHAPTERS_PATHS);
};