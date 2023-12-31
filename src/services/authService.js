import http from "./api";
import { getUserProfile, loginUser } from "../store/actions/authActions";
const authServices = {
  loginUser: async (data, dispatch) => {
    try {
      let res = await http
        .post("/api/v1/auth/login", JSON.stringify(data))
        .then((result) => {
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
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

  registerUser: async (data, dispatch) => {
    try {
      let res = await http.post("/api/v1/auth/register", JSON.stringify(data));
      if (res.accessToken) {
        localStorage.setItem("accessToken", res.accessToken);
      }
      dispatch(loginUser(res.data));
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  userProfile: async (dispatch) => {
    try {
      let res = await http.get("/api/v1/auth/profile");
      dispatch(getUserProfile(res.data));
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authServices;
