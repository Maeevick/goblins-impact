import { redirect } from "next/navigation";

import { exec } from "@/gateways/persistence/prisma";
import { playerRespositoryFactory } from "@/gateways/persistence/prisma/playerRepository";
import { cryptoGatewayFactory } from "@/gateways/crypto";

import { signup } from "@/core/behaviors/signup";

const signupHandler = signup({
  playerRepository: playerRespositoryFactory(),
  crypto: cryptoGatewayFactory(),
});

export async function POST(request: Request) {
  const data = await request.json();

  await exec(signupHandler, data);

  redirect("/game");
}
