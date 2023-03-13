import { NavbarAction, StoreState,  } from "../../interfaces/interfaces";
import {FETCH_NAVBAR_SUCCESS} from "@/store/constants/constants";

const initialState: StoreState = {
  links: [],
};

export const navbarReducer = (state = initialState, action: NavbarAction) => {
  switch (action.type) {
    case FETCH_NAVBAR_SUCCESS:
      return { ...state, links: action.payload };
    default:
      return state;
  }
};
