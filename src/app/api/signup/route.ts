import { redirect } from "next/navigation";

import { exec, signUp } from "@/gateways/persistence/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("SIGNUP ROUTE - DATA", data);
  const result = await exec(signUp, data);

  console.log("SIGNUP ROUTE - RESULT", result);

  redirect("/game");
}
