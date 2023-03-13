import {Dispatch} from "redux";
import {
  FETCH_FOOTER,
  FETCH_FOOTER_FAILURE, FETCH_FOOTER_SUCCESS,
  FETCH_NAVBAR,
  FETCH_NAVBAR_FAILURE,
  FETCH_NAVBAR_SUCCESS
} from "@/store/constants/constants";

export interface NavbarItem {
  name: string;
  uri: string;
}

export interface NavbarData {
  items: NavbarItem[];
}

export interface NavbarApiResponse {
  id: number;
  name: string;
  slug: string;
  locale: string;
  publishDate: string;
  web: {
    id: number;
  };
  data: NavbarData;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterColumn {
  links: FooterLink[];
}

export interface FooterData {
  id: number;
  name: string;
  slug: string;
  locale: string;
  publishDate: string;
  web: {
    id: number;
  };
  data: {
    columns: FooterColumn[];
    address: string;
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
    copyright: string;
  };
}

export interface StoreState {
  links: NavbarItem[];
}


export interface FetchNavbarAction {
  type: typeof FETCH_NAVBAR;
}

export interface FetchNavbarSuccessAction {
  type: typeof FETCH_NAVBAR_SUCCESS;
  payload: NavbarItem[];
}

export interface FetchNavbarFailureAction {
  type: typeof FETCH_NAVBAR_FAILURE;
  payload: string;
}

export type NavbarAction =
  | FetchNavbarSuccessAction
  | FetchNavbarFailureAction
  | FetchNavbarAction;

export interface StoreStateFooter {
  data: FooterData | null;
}

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

export interface StoreStateAll {
  navbar: StoreState;
  footer: StoreStateFooter;
}