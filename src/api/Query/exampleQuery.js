import Axios from "../axios";

const fetchExample = async () => {
  try {
    const { data } = Axios.get("/");
    return data;
  } catch (error) {
    throw Error(error);
  }
};
export default fetchExample;
