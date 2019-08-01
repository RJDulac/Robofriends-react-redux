import { CHANGE_SEARCH_FIELD } from "./constants";

const initalState = {
  searchfield: ""
};

export const searchRobots = (state = initalState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchfield: action.payload };
    default:
      return state;
  }
};
