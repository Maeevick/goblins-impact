import GoblinsImage from "./components/GoblinImage";
import PageTitle from "./components/PageTitle";
import GridWith3Cols from "./components/GridWith3Cols";
import Header from "./components/Header";

const GRID_DATA = [
  {
    href: "/blog",
    title: "Blog",
    subtitle: "Là où je partage mes pensées gobelinoïdes...",
  },
  {
    href: "/stories",
    title: "Histoires et Nouvelles",
    subtitle: "Là où les gobelins prennent vie...",
  },
  {
    href: "/",
    title: "Jeu",
    subtitle: "Là où commence ton aventure gobelinesque...",
  },
];

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
      <Header description={<Description />} action={<GoblinsImage />} />

      <PageTitle title="Goblins Impact" />

      <GridWith3Cols data={GRID_DATA} />
    </main>
  );
}
