import {

    FooterData, NavbarApiResponse, NavbarData,
    NavbarItem
} from "@/store/interfaces";
import {
    FETCH_FOOTER_FAILURE,
    FETCH_FOOTER_SUCCESS,
    FETCH_NAVBAR_FAILURE,
    FETCH_NAVBAR_SUCCESS
} from "@/store/constants/constants";
import {
    FetchFooterFailureAction,
    FetchFooterSuccessAction,
    FetchNavbarFailureAction,
    FetchNavbarSuccessAction
} from "@/store/actions/interfaces";


export const fetchNavbarSuccess = (
    data: NavbarApiResponse
): FetchNavbarSuccessAction => {
    return {
        type: FETCH_NAVBAR_SUCCESS,
        payload: data,
    };
};

export const fetchNavbarFailure = (error: string): FetchNavbarFailureAction => {
    return {
        type: FETCH_NAVBAR_FAILURE,
        payload: error,
    };
};

export const fetchFooterSuccess = (
    data: FooterData | null
): FetchFooterSuccessAction => {
    return {
        type: FETCH_FOOTER_SUCCESS,
        payload: data,
    };
};

export const fetchFooterFailure = (error: string): FetchFooterFailureAction => {
    return {
        type: FETCH_FOOTER_FAILURE,
        payload: error,
    };
};