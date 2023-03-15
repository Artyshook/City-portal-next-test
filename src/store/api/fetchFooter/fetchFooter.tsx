import {ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {FooterAction, FooterData, StoreStateAll, StoreStateFooter} from "@/store/interfaces/interfaces";
import {FETCH_FOOTER} from "@/store/constants/constants";
import {fetchFooterFailure, fetchFooterSuccess} from "@/store/actions/action-creators/actionCreators";
import axios from "axios";
import {GetServerSideProps} from "next";
import {useDispatch} from "react-redux";
import {fetchNavbar} from "@/store/api/fetchNavbar/fetchNavbar";

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

// export const getServerSideProps: GetServerSideProps = async () => {
//
//     try {
//         // const navbarData: NavbarData = await fetch(
//         //     "https://acecmsmock.z6.web.core.windows.net/api/content/2"
//         // ).then((response) => response.json());
//         //
//         // const footerData: FooterData = await fetch(
//         //     "https://acecmsmock.z6.web.core.windows.net/api/content/1"
//         // ).then((response) => response.json());
//
//         const dispatch =
//             useDispatch<ThunkDispatch<StoreStateAll, undefined, FooterAction>>();
//         dispatch(fetchNavbar);
//         dispatch(fetchFooter);
//
//         return {
//             props: {store},
//         };
//     } catch (error) {
//         console.error(error);
//         return { props: { reduxStore: null } };
//     }
// };