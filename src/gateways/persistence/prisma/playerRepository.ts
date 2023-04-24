import prisma from ".";

import { Player } from "@/core/dto/player";

export function playerRespositoryFactory() {
  return {
    save: async ({ nickname, email, password }: Player) => {
      return await prisma.player.create({
        data: {
          nickname,
          email,
          password,
        },
      });
    },
    getByNickname: async ({ nickname }: { nickname: string }) => {
      return await prisma.player.findFirstOrThrow({
        where: { nickname },
      });
    },
  };
}
