// import '@/styles/globals.css'
import {Layout } from "./components/navigation/Layout";
import type { AppProps } from "next/app";
import {store} from "@/store";
import {Provider} from "react-redux";




const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
        <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};


export default App;
