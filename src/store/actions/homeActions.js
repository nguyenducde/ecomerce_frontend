import {
  GET_HOME_SLIDERS,
  GET_HOME_CATEGORIES,
  GET_HOME_BRANDS,
} from "../constants/homeConstants";

export function getHomeSliders(payload) {
  return { type: GET_HOME_SLIDERS, payload: payload };
}

export function getHomeCategories(payload) {
  return { type: GET_HOME_CATEGORIES, payload: payload };
}

export function getHomeBrands(payload) {
  return { type: GET_HOME_BRANDS, payload: payload };
}
