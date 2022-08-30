import http from "./api";
import { loginUser } from "../store/actions/authActions";
const authServices = {
  loginUser: async (data, dispatch) => {
    try {
      let res = await http.post("/api/v1/auth/login", data);
      console.log(res);
      if (res.accessToken) {
        localStorage.setItem("accessToken", res.accessToken);
      }
      dispatch(loginUser(res.data));
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authServices;
