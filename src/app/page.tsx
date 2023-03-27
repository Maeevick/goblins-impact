import PageTitle from "./components/PageTitle";
import GridWith3Cols from "./components/GridWith3Cols";
import Header from "./components/Header";

import { BLOG_DATA } from "@/data/blog";
import { CHRONICLES_DATA } from "@/data/chronicle";
import { GAME_DATA } from "../data/game";
import HomeLink from "./components/HomeLink";

const GRID_DATA = [BLOG_DATA, CHRONICLES_DATA, GAME_DATA];

const Description = () => (
  <a
    href="https://github.com/Maeevick/goblins-impact"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pour suivre l&#39;aventure, le repo est ici !
  </a>
);

export default function Home() {
  return (
    <>
      <Header description={<Description />} action={<HomeLink />} />
      <PageTitle title="Goblins Impact" />
      <GridWith3Cols data={GRID_DATA} />
    </>
  );
}
