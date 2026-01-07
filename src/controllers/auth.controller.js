import { successHandler } from "../../middlewares/successHandler.js";
import { userSignUp } from "../services/auth.service.js";

export const handleUserSignUp = async (req, res, next) => {
  try {
    const { nickname } = req.body;
    const user = await userSignUp(nickname);

    return successHandler(res, "회원가입 성공", { id: user.id });
  } catch (err) {
    next(err);
  }
};
