import { ExistsError } from "../../errors.js";
import { getUserByNick, addUser } from "../repositories/user.repository.js";

export const userSignUp = async (nickname) => {
  const existUser = await getUserByNick(nickname);

  console.log(existUser);

  if (existUser) {
    throw new ExistsError("이미 존재하는 사용자입니다.");
  }

  const newUser = await addUser(nickname);
  return newUser;
};
