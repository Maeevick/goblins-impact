import { CryptoGateway } from "../ports/cryptoGateway";
import { PlayerRepository } from "../ports/playerRepository";

export type Authorization = {
  playerRepository: PlayerRepository;
  crypto: CryptoGateway;
};
