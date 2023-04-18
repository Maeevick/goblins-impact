import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type DTO = any;
type Handler = (dto: DTO) => Promise<any>;

type Credentials = {
  nickname: string;
  email: string;
  password: string;
};

export async function signUp({ nickname, email, password }: Credentials) {
  return (
    (await prisma.player.create({
      data: {
        nickname,
        email,
        password,
      },
    })) ?? null
  );
}

export async function authorize({ nickname, email, password }: Credentials) {
  const player = await prisma.player.findFirstOrThrow({
    where: { nickname, email },
  });

  if (player.password !== password) return null;

  return player;
}

export function exec(fn: Handler, data: DTO): Promise<any> {
  return fn(data)
    .then(async (result) => {
      await prisma.$disconnect();
      return result;
    })
    .catch(async (error) => {
      console.error("An error occured:", error);
      await prisma.$disconnect();
    });
}
