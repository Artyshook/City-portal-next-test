import {
    FETCH_FOOTER,
    FETCH_FOOTER_FAILURE,
    FETCH_FOOTER_SUCCESS, FETCH_NAVBAR,
    FETCH_NAVBAR_FAILURE, FETCH_NAVBAR_SUCCESS
} from "@/store/constants/constants";
import {FooterData, NavbarApiResponse} from "@/store/interfaces";

export interface FetchNavbarAction {
    type: typeof FETCH_NAVBAR;
}

export interface FetchNavbarSuccessAction {
    type: typeof FETCH_NAVBAR_SUCCESS;
    payload: NavbarApiResponse;
}

export interface FetchNavbarFailureAction {
    type: typeof FETCH_NAVBAR_FAILURE;
    payload: string;
}

export type NavbarAction =
    | FetchNavbarSuccessAction
    | FetchNavbarFailureAction
    | FetchNavbarAction;

export interface FetchFooterAction {
    type: typeof FETCH_FOOTER;
}

export interface FetchFooterSuccessAction {
    type: typeof FETCH_FOOTER_SUCCESS;
    payload: FooterData | null;
}

export interface FetchFooterFailureAction {
    type: typeof FETCH_FOOTER_FAILURE;
    payload: string;
}

export type FooterAction =
    | FetchFooterFailureAction
    | FetchFooterSuccessAction
    | FetchFooterAction;


export type AllActions = NavbarAction | FooterAction