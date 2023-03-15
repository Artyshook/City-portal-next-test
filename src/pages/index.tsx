import {FooterAction, FooterData, NavbarData, StoreStateAll} from "@/store/interfaces";
import {initStore, store} from "@/store";
import {GetServerSideProps} from "next";
import {fetchNavbar} from "@/store/api/fetchNavbar";
import {fetchFooter} from "@/store/api/fetchFooter";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";

const Home = () => {
   return <h1></h1>
};

export default Home;


export const getServerSideProps: GetServerSideProps = async () => {

    try {
        // const navbarData: NavbarData = await fetch(
        //     "https://acecmsmock.z6.web.core.windows.net/api/content/2"
        // ).then((response) => response.json());
        //
        // const footerData: FooterData = await fetch(
        //     "https://acecmsmock.z6.web.core.windows.net/api/content/1"
        // ).then((response) => response.json());

       const dispatch =
         useDispatch<ThunkDispatch<StoreStateAll, undefined, FooterAction>>();
        dispatch(fetchNavbar);
        dispatch(fetchFooter);

        return {
            props: {store},
        };
    } catch (error) {
        console.error(error);
        return { props: { reduxStore: null } };
    }
};

