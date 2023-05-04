"use client";

import { SessionProvider } from "next-auth/react";

import Header from "../components/Header";
import HomeLink from "../components/HomeLink";
import PageTitle from "../components/PageTitle";
import GameMenu from "../components/Game/GameMenu";
import Disclaimer from "../components/Disclaimer";

import { GAME_DATA } from "@/data/game";

export default function Game() {
  return (
    <SessionProvider>
      <Header description={GAME_DATA.header} action={<HomeLink />} />
      <GameMenu />
      <PageTitle title={GAME_DATA.title} />
      <Disclaimer>
        <h3 className="text-xl my-2 underline">{GAME_DATA.disclaimer.title}</h3>
        <p>{GAME_DATA.disclaimer.message}</p>
      </Disclaimer>
    </SessionProvider>
  );
}
