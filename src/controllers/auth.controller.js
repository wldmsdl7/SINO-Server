import { successHandler } from "../../middlewares/successHandler.js";
import { userSignUp, userLogin } from "../services/auth.service.js";

export const handleUserSignUp = async (req, res, next) => {
  try {
    const { nickname } = req.body;
    const user = await userSignUp(nickname);

    return successHandler(res, "회원가입 성공", { id: user.id });
  } catch (err) {
    next(err);
  }
};

export const handleLogin = async (req, res, next) => {
  try {
    const { nickname } = req.body;
    const data = await userLogin(nickname);

    return successHandler(res, "로그인 성공", data);
  } catch (err) {
    next(err);
  }
};
