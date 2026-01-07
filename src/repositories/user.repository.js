import { prisma } from "../../db.config.js";

export const getUserByNick = async (nickname) => {
  return prisma.user.findUnique({
    where: { nickname },
  });
};

export const addUser = async (nickname) => {
  return await prisma.user.create({
    data: { nickname },
  });
};
