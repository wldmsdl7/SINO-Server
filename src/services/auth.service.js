import { ExistsError, NotFoundUserError } from "../../errors.js";
import { getUserByNick, addUser } from "../repositories/user.repository.js";
import { generateToken } from "../utils/token.js";

export const userSignUp = async (nickname) => {
  const existUser = await getUserByNick(nickname);

  if (existUser) {
    throw new ExistsError("이미 존재하는 사용자입니다.");
  }

  const newUser = await addUser(nickname);
  return newUser;
};

export const userLogin = async (nickname) => {
  const existUser = await getUserByNick(nickname);

  if (!existUser) {
    throw new NotFoundUserError("존재하지 않는 사용자입니다.");
  }

  const token = generateToken({ id: existUser.id });

  return { user: { id: existUser.id }, token };
};

export const userCheck = async (nickname) => {
  const existUser = await getUserByNick(nickname);

  // 사용자가 존재하면 true, 존재하지 않으면 false
  const isExist = !!existUser;

  return !isExist;
};
