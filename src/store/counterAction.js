import { INCREMENT_COUNT } from "./constant";

export const counterAction = (data) => {
  return {
    type: INCREMENT_COUNT,
    payload: data,
  };
};
