import { combineReducers } from "redux";
import { SET_URL } from "./actions";

const urlReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_URL: {
      return {
        ...state,
        [action.data.id]: action.data
      };
    }
  }

  return state;
};

export default combineReducers({
  urls: urlReducer
});
