import { createStore } from "redux";
import reducer from "./reducers/index";

const store = createStore(
  reducer,

  typeof window === "object" &&
    window.__REACT_DEVTOOLS_EXTENSION__ !== undefined
    ? window.__REACT_DEVTOOLS_EXTENSION__
    : f => f
);

export default store;
