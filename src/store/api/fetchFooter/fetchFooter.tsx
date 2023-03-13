import {ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {FooterAction, FooterData, StoreStateFooter} from "@/store/interfaces/interfaces";
import {FETCH_FOOTER} from "@/store/constants/constants";
import {fetchFooterFailure, fetchFooterSuccess} from "@/store/actions/action-creators/actionCreators";
import axios from "axios";

export const fetchFooter = (): ThunkAction<
    Promise<void>,
    StoreStateFooter,
    undefined,
    FooterAction
> => {
    return async (
        dispatch: ThunkDispatch<StoreStateFooter, undefined, FooterAction>
    ) => {
        dispatch({ type: FETCH_FOOTER });
        try {
            const res = await axios.get<FooterData | null>(
                "https://acecmsmock.z6.web.core.windows.net/api/content/1"
            );
            const data = res.data;
            dispatch(fetchFooterSuccess(data));
        } catch (error: any) {
            console.error(error);
            dispatch(fetchFooterFailure(error.message));
        }
    };
};