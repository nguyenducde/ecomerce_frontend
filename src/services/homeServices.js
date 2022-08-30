import {
  getHomeBrands,
  getHomeCategories,
  getHomeSliders,
} from "../store/actions/homeActions";
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

  getHomeCategories: async (dispatch) => {
    try {
      let res = await http.get("/api/v1/home/categories");
      dispatch(getHomeCategories(res.data));
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getHomeBrands: async (dispatch) => {
    try {
      let res = await http.get("/api/v1/home/brands");
      dispatch(getHomeBrands(res.data));
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default homeServices;
