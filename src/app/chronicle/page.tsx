import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import GridWith3Cols from "../components/GridWith3Cols";
import Header from "../components/Header";

const CHRONICLES = [
  {
    href: "/chronicle",
    title: "Drôle d'aventures",
    subtitle: "ou, comment se tromper en trois leçons.",
  },
];

export default function Stories() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen pt-20 pb-10">
      <Header
        description="Là où je m'essaye à l'écriture de fantaisie et où je publie les aventures de nos chers gobelins..."
        action={<HomeLink />}
      />

      <PageTitle title="Chroniques..." />

      <GridWith3Cols data={CHRONICLES} />
    </main>
  );
}
