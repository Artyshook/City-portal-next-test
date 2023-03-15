import {ThunkDispatch} from "@reduxjs/toolkit";
import {AllActions, FooterData, NavbarApiResponse, StoreStateAll} from "@/store/interfaces";
import {fetchFooterSuccess, fetchNavbarSuccess} from "@/store/actions/actionCreators";

export const preloadFn = async (
    dispatch: ThunkDispatch<StoreStateAll, undefined, AllActions>
) => {
    const navbarData: NavbarApiResponse = await fetch(
        "https://acecmsmock.z6.web.core.windows.net/api/content/2"
    ).then((response) => response.json());

    dispatch(fetchNavbarSuccess(navbarData));
    const footerData: FooterData = await fetch(
        "https://acecmsmock.z6.web.core.windows.net/api/content/1"
    ).then((response) => response.json());
    // Dispatch footer data to Redux store
    dispatch(fetchFooterSuccess(footerData));
};