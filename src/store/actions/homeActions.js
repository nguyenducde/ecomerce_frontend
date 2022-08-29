import { GET_HOME_SLIDERS } from "../constants/homeConstants";

export function getHomeSliders(payload) {
  return { type: GET_HOME_SLIDERS, payload: payload };
}
