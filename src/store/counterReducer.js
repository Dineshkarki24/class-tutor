import { INCREMENT_COUNT } from "./constant";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};
