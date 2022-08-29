import { combineReducers } from "redux";
import userAuthReducer from "./authReducers";

const appReducer = combineReducers({
  user: userAuthReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
