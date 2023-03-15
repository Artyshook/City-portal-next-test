import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import {applyMiddleware, createStore} from "redux";
import {footerReducer, navbarReducer} from "@/store/reducers/allReducers";


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
