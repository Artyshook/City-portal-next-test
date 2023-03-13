import {
  FooterAction,
  StoreStateFooter,
} from "../../interfaces/interfaces";
import {FETCH_FOOTER_SUCCESS} from "@/store/constants/constants";

const initialStateFooter: StoreStateFooter = {
  data: null,
};

export const footerReducer = (
  state = initialStateFooter,
  action: FooterAction
) => {
  switch (action.type) {
    case FETCH_FOOTER_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
