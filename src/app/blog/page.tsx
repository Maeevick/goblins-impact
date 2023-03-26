import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import GridWith3Cols from "../components/GridWith3Cols";
import Header from "../components/Header";

const POSTS = [
  {
    href: "/blog",
    title: "Pourquoi les gobelins ?",
    subtitle: "C'est quoi ton délire !",
  },
];

export default function Blog() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen pt-20 pb-10">
      <Header
        description="Là où je partage mes pensées et mes apprentissages, ainsi que les avancées du projet..."
        action={<HomeLink />}
      />

      <PageTitle title="Blog" />

      <GridWith3Cols data={POSTS} />
    </main>
  );
}
