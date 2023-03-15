import React, {useEffect, useState} from "react";
import { Footer } from "./Footer";
import {Provider, useDispatch} from "react-redux";
import store from "@/store";
import {Navbar} from "@/pages/components/navigation/Navbar";
import {usePreload} from "@/pages/hooks/usePreload";
import {preloadFn} from "@/pages/api/preloadFn";



type propsChildren = {
  children: any;
};
export const Layout = (props: propsChildren) => {

    usePreload(preloadFn)

    return (<div>
            <Provider store={store}><Navbar />
                    {props.children}<Footer /></Provider>
            </div>
    );
};


