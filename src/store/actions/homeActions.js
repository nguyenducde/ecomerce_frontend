import {
  GET_HOME_SLIDERS,
  GET_HOME_CATEGORIES,
} from "../constants/homeConstants";

export function getHomeSliders(payload) {
  return { type: GET_HOME_SLIDERS, payload: payload };
}

export function getHomeCategories(payload) {
  return { type: GET_HOME_CATEGORIES, payload: payload };
}
