import { Player } from "../dto/player";
import { Authorization } from "../dto/authorization";

export function authorize({ playerRepository, crypto }: Authorization) {
  return async function ({ nickname, password }: Player) {
    const player = await playerRepository.getByNickname({ nickname });

    const decrypted = crypto.decryptHexText(player.password);

    if (decrypted !== password) {
      throw Error("Invalid Credentials");
    }

    return player;
  };
}
