import { GET_HOME_SLIDERS } from "../constants/homeConstants";

const initalState = {
  sliders: [],
};
export default function homeReducers(state = initalState, action) {
  switch (action.type) {
    case GET_HOME_SLIDERS: {
      return {
        ...state,
        sliders: action.sliders,
      };
    }
    default: {
      return state;
    }
  }
}
