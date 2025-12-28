export const userSignUp = async (nickname) => {
  const joinUserId = await addUser({
    nickname: nickname,
  });

  if (joinUserId === null) {
    throw new Error("이미 존재하는 이메일입니다.");
  }

  const user = await getUser(joinUserId);

  return responseFromUser({ user, preferences });
};
