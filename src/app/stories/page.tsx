import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import GridWith3Cols from "../components/GridWith3Cols";
import Header from "../components/Header";

const STORIES_DATA = [
  {
    href: "/stories",
    title: "Drôle d'aventures",
    subtitle: "ou, comment se tromper en trois leçons.",
  },
];

export default function Stories() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen pt-20 pb-10">
      <Header
        description="Là où les gobelins prennent vie..."
        action={<HomeLink />}
      />

      <PageTitle title="Histoires et Nouvelles..." />

      <GridWith3Cols data={STORIES_DATA} />
    </main>
  );
}
