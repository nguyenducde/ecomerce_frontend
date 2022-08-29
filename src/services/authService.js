import http from "./api";
import { userLogin } from "../store/actions/authActions";
const authServices = {
  loginUser: async (data, dispatch) => {
    try {
      let res = await http.post("/api/v1/auth/login", data);
      dispatch(userLogin(res.data));
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authServices;
