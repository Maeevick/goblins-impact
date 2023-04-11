import Header from "../components/Header";
import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import Disclaimer from "../components/Disclaimer";

import { GAME_DATA } from "@/data/game";

export const metadata = {
  title: GAME_DATA.title,
  description: GAME_DATA.subtitle,
};

export default function Stories() {
  return (
    <>
      <Header description={GAME_DATA.header} action={<HomeLink />} />
      <PageTitle title={GAME_DATA.title} />
      <Disclaimer>
        <h3 className="text-xl my-2 underline">{GAME_DATA.disclaimer.title}</h3>
        <p>{GAME_DATA.disclaimer.message}</p>
      </Disclaimer>
    </>
  );
}
