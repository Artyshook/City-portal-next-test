import {ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {FooterData } from "@/store/interfaces";
import {FETCH_FOOTER} from "@/store/constants/constants";
import {fetchFooterFailure, fetchFooterSuccess} from "@/store/actions/actionCreators";
import axios from "axios";
import {FooterAction} from "@/store/actions/interfaces";
import {StoreStateFooter} from "@/store/reducers/interfaces";


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
