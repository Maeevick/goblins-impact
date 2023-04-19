import { redirect } from "next/navigation";

import { exec, signUp } from "@/gateways/persistence/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  await exec(signUp, data);

  redirect("/game");
}
