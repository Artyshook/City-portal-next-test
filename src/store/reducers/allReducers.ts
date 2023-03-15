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


import {FETCH_NAVBAR_SUCCESS} from "@/store/constants/constants";
import {FooterAction, NavbarAction} from "@/store/actions/interfaces";
import {StoreState, StoreStateFooter} from "@/store/reducers/interfaces";

const initialState: StoreState = {
    data: null,
};

export const navbarReducer = (state = initialState, action: NavbarAction) => {
    switch (action.type) {
        case FETCH_NAVBAR_SUCCESS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
