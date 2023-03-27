import PageTitle from "./components/PageTitle";
import GridWith3Cols from "./components/GridWith3Cols";
import Header from "./components/Header";

import { blog } from "../data/blog";
import { chronicle } from "../data/chronicle";
import { game } from "../data/game";
import HomeLink from "./components/HomeLink";

const GRID_DATA = [blog, chronicle, game];

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
    <main className="flex flex-col justify-between items-center min-h-screen pt-20 pb-10">
      <Header description={<Description />} action={<HomeLink />} />

      <PageTitle title="Goblins Impact" />

      <GridWith3Cols data={GRID_DATA} />
    </main>
  );
}
