import Axios from "../axios";

const USER_URL = "/user";

const SigninUser = async () => {
  try {
    const { data } = Axios.post(`${USER_URL} / signin`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error);
  }
};
export default SigninUser;
