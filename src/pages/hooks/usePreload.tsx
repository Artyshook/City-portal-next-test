import {ThunkDispatch} from "@reduxjs/toolkit";
import {AllActions, NavbarAction, StoreStateAll} from "@/store/interfaces";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export function usePreload(
    preloadFn: (
        dispatch: ThunkDispatch<StoreStateAll, undefined, AllActions>
    ) => Promise<void>
) {
    const dispatch = useDispatch<ThunkDispatch<StoreStateAll, undefined, AllActions>>();

    useEffect(() => {
        preloadFn(dispatch);
    }, [preloadFn, dispatch]);
}

