import {
  GET_HOME_SLIDERS,
  GET_HOME_CATEGORIES,
} from "../constants/homeConstants";

const initalState = {
  sliders: [],
  categories: [],
};
export default function homeReducers(state = initalState, action) {
  switch (action.type) {
    case GET_HOME_SLIDERS: {
      return {
        ...state,
        sliders: action.payload,
      };
    }
    case GET_HOME_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
