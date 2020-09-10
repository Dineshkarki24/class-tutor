import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
const initialState = {};

// const middleware = [logger];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
