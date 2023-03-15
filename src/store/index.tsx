import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { footerReducer } from "./reducers/footeReducer/footerReducer";
import { navbarReducer } from "./reducers/navbarReducer/navbarReducer";
import {applyMiddleware, createStore} from "redux";


export const rootReducer = combineReducers({
  navbar: navbarReducer,
  footer: footerReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
};
export default store;
