import { StatusCodes } from "http-status-codes";
import { userSignUp } from "../services/user.service.js";

export const handleUserSignUp = async (req, res) => {
  const nickname = req.body;
  const user = await userSignUp(nickname);

  return res.status(StatusCodes.OK).success(user);
};
