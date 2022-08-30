import { getHomeSliders } from "../store/actions/homeActions";
import http from "./api";

const homeServices = {
  getSliders: async (dispatch) => {
    try {
      let res = await http.get("/api/v1/home/sliders");
      dispatch(getHomeSliders(res.data));
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default homeServices;
