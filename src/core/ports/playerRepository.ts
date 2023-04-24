import { Player } from "../dto/player";

export type PlayerRepository = {
  save: (credentials: Player) => Promise<Player>;
  getByNickname: ({ nickname }: { nickname: string }) => Promise<Player>;
};
