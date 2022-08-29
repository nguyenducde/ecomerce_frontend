import { USER_LOGIN, USER_REGISTER } from "../constants/authContants";

export function loginUser(payload) {
  return { type: USER_LOGIN, payload: payload };
}

export function registerUser(payload) {
  return { type: USER_REGISTER, payload: payload };
}
