import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import GridWith3Cols from "../components/GridWith3Cols";
import Header from "../components/Header";

import { CHRONICLES_DATA, getChronicleChapters } from "@/data/chronicle";

export const metadata = {
  title: `Goblins Impact - ${CHRONICLES_DATA.title}`,
  description: CHRONICLES_DATA.subtitle,
};

export default function Stories() {
  return (
    <>
      <Header
        description="Là où je m'essaye à l'écriture..."
        action={<HomeLink />}
      />
      <PageTitle title={`${CHRONICLES_DATA.title}...`} />
      <GridWith3Cols data={getChronicleChapters()} />
    </>
  );
}
