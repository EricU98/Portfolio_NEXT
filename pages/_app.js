import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../components/navbar";
import { appWithTranslation } from "next-i18next";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
   return (
      <>
         <NextUIProvider>
            <Component {...pageProps} />
         </NextUIProvider>
      </>
   );
};

export default appWithTranslation(App);
