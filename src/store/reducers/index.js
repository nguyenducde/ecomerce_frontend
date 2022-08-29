import { combineReducers } from "redux";
import userAuthReducer from "./authReducers";
import homeReducers from "./homeReducers";

const appReducer = combineReducers({
  user: userAuthReducer,
  home: homeReducers,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
