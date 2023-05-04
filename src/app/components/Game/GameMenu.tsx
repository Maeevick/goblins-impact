"use client";

import { MouseEvent } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function GameMenu() {
  const session = useSession();

  async function handleSignOut(event: MouseEvent): Promise<void> {
    event.preventDefault();

    await signOut();
  }
  if (session.status === "authenticated") {
    return (
      <div className="p-2 m-2 flex">
        <Link
          href="/game/goblins"
          className="p-2 m-2 border border-orange-500 rounded-lg outline-none focus:outline-none hover:italic hover:underline focus:italic focus:underline"
          onClick={() => {
            console.log("List my goblins");
          }}
        >
          Mes Gobelins
        </Link>
        <button
          className="p-2 m-2 border border-orange-500 rounded-lg outline-none focus:outline-none hover:italic hover:underline focus:italic focus:underline"
          onClick={handleSignOut}
        >
          Déconnexion
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-between">
      <Link className="p-2 m-2" href="/game/authenticate">
        <button className="p-2 m-2 border border-orange-500 rounded-lg outline-none focus:outline-none hover:italic hover:underline focus:italic focus:underline">
          Commencer mon aventure
        </button>
      </Link>
    </div>
  );
}
