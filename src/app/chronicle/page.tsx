import Header from "../components/Header";
import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import CardLayout from "../components/Cards/CardLayout";

import { CHRONICLES_DATA, getChronicleChapters } from "@/data/chronicle";
import Disclaimer from "../components/Disclaimer";

export const metadata = {
  title: `Goblins Impact - ${CHRONICLES_DATA.title}`,
  description: CHRONICLES_DATA.subtitle,
};

export default function Stories() {
  return (
    <>
      <Header description={`${CHRONICLES_DATA.header}`} action={<HomeLink />} />
      <PageTitle title={`${CHRONICLES_DATA.title}...`} />
      <Disclaimer>
        <h3 className="text-xl my-2 underline">
          {CHRONICLES_DATA.disclaimer.title}
        </h3>
        <p>{CHRONICLES_DATA.disclaimer.message}</p>
      </Disclaimer>
      <CardLayout data={getChronicleChapters()} />
    </>
  );
}
