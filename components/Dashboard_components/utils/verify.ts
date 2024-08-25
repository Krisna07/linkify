import getUser from "./getUsers";

const VerifyCode = async (code: string) => {
  console.log(code);
  const user = getUser();
  console.log(user);
};

export default VerifyCode;
