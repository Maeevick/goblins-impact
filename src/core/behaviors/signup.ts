import { Player } from "../dto/player";
import { Authorization } from "../dto/authorization";

export function signup({ playerRepository, crypto }: Authorization) {
  return async function ({ nickname, email, password }: Player) {
    const encrypted = crypto.encryptClearText(password);
    console.log("DEBUG", nickname, email, password, encrypted);
    return await playerRepository.save({
      nickname,
      email,
      password: encrypted,
    });
  };
}
