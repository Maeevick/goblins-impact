import Header from "../components/Header";
import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import CardLayout from "../components/Cards/CardLayout";

import { CHRONICLES_DATA, getChronicleChapters } from "@/data/chronicle";

export const metadata = {
  title: `Goblins Impact - ${CHRONICLES_DATA.title}`,
  description: CHRONICLES_DATA.subtitle,
};

export default function Stories() {
  return (
    <>
      <Header description={`${CHRONICLES_DATA.header}`} action={<HomeLink />} />
      <PageTitle title={`${CHRONICLES_DATA.title}...`} />
      <CardLayout data={getChronicleChapters()} />
    </>
  );
}
