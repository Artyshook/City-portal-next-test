import React, {useEffect, useState} from "react";
import { Footer } from "./Footer";
import {Provider, useDispatch} from "react-redux";
import store, {initStore, rootReducer} from "@/store";
import {
    fetchFooterSuccess,
    fetchNavbarFailure,
    fetchNavbarSuccess
} from "@/store/actions/action-creators/actionCreators";
import {
    FooterData,
    NavbarAction,
    NavbarApiResponse,
    NavbarData,
    NavbarItem,
    StoreStateAll
} from "@/store/interfaces/interfaces";
import axios from "axios";
import {applyMiddleware, createStore, Store} from "redux";
import {reducer} from "next/dist/client/components/router-reducer/router-reducer";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {FETCH_NAVBAR, FETCH_NAVBAR_FAILURE, FETCH_NAVBAR_SUCCESS} from "@/store/constants/constants";
import {fetchNavbar} from "@/store/api/fetchNavbar/fetchNavbar";
import {GetServerSideProps, NextPageContext} from "next";
import thunk from "redux-thunk";
import {Navbar} from "@/pages/components/navigation/Navbar";



type propsChildren = {
  children: any;
};
export const Layout = (props: propsChildren) => {

    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch<ThunkDispatch<StoreStateAll, undefined, NavbarAction>>(); useEffect(() => {
        console.log("here2")
        preload(dispatch).finally(() => {setIsLoading(false), console.log("here3")});
    }, []);


    return (<div>
            {isLoading ? (<div>Loading...</div>
            ) : (<Provider store={store}><Navbar />
                    {props.children}<Footer /></Provider>
            )}</div>
    );
};

export const preload = async (dispatch: ThunkDispatch<StoreStateAll, undefined, NavbarAction>) => {
    console.log("here")
    const navbarData: NavbarApiResponse= await fetch(
        "https://acecmsmock.z6.web.core.windows.net/api/content/2"
    ).then((response) => response.json());
    console.log(navbarData)
    // Dispatch navbar data to Redux store
    dispatch(fetchNavbarSuccess(navbarData));
};


