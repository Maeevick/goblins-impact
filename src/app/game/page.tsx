import Header from "../components/Header";
import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";

import { GAME_DATA } from "@/data/game";

export const metadata = {
  title: `Goblins Impact - ${GAME_DATA.title}`,
  description: GAME_DATA.subtitle,
};

export default function Stories() {
  return (
    <>
      <Header description={`${GAME_DATA.header}`} action={<HomeLink />} />
      <PageTitle title={`Goblins Impact - ${GAME_DATA.title}...`} />
      <article>Coming Soon!</article>
    </>
  );
}
