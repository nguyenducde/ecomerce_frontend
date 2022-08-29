import { USER_LOGIN, USER_REGISTER } from "../constants/authContants";

const initialState = {
  profile: {},
};
export default function userAuthReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
    case USER_REGISTER: {
      return {
        ...state,
        profile: { ...state.profile, ...action.payload },
      };
    }

    default: {
      return state;
    }
  }
}
