import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

type DTO = any;
type Handler = (dto: DTO) => Promise<any>;

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
