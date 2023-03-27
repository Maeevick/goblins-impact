import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import GridWith3Cols from "../components/GridWith3Cols";
import Header from "../components/Header";

import { CHRONICLES_DATA, getChronicleChapters } from "@/data/chronicle";

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
