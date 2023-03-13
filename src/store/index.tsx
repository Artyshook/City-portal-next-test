import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { footerReducer } from "./reducers/footeReducer/footerReducer";
import { navbarReducer } from "./reducers/navbarReducer/navbarReducer";


export const rootReducer = combineReducers({
  navbar: navbarReducer,
  footer: footerReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
