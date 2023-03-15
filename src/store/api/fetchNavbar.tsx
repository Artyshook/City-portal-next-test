import {ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {NavbarApiResponse, } from "@/store/interfaces";
import {FETCH_NAVBAR} from "@/store/constants/constants";
import {fetchNavbarFailure, fetchNavbarSuccess} from "@/store/actions/actionCreators";
import axios from "axios";
import {StoreState} from "@/store/reducers/interfaces";
import {NavbarAction} from "@/store/actions/interfaces";

export const fetchNavbar = (): ThunkAction<
    Promise<void>,
    StoreState,
    undefined,
    NavbarAction
> => {
    return async (
        dispatch: ThunkDispatch<StoreState, undefined, NavbarAction>
    ) => {
        dispatch({type: FETCH_NAVBAR});
        try {
            const res = await axios.get<NavbarApiResponse>(
                "https://acecmsmock.z6.web.core.windows.net/api/content/2"
            );
            const response = res.data.data;
            dispatch(fetchNavbarSuccess(response.items));
        } catch (error: any) {
            console.error(error);
            dispatch(fetchNavbarFailure(error.message));
        }
    };
}