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
      <div className="p-2 m-2">
        <button
          className="p-2 m-2 border border-orange-500 rounded-lg outline-none focus:outline-none hover:italic hover:underline focus:italic focus:underline"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-between">
      <Link className="p-2 m-2" href="/game/authenticate">
        <button className="p-2 m-2 border border-orange-500 rounded-lg outline-none focus:outline-none hover:italic hover:underline focus:italic focus:underline">
          Start your journey
        </button>
      </Link>
    </div>
  );
}
