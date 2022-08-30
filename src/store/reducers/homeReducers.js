import {
  GET_HOME_SLIDERS,
  GET_HOME_CATEGORIES,
  GET_HOME_BRANDS,
} from "../constants/homeConstants";

const initalState = {
  sliders: [],
  categories: [],
  brands: [],
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
    case GET_HOME_BRANDS: {
      return {
        ...state,
        brands: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
