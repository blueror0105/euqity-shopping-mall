import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import Modal from "../Components/Modal/Modal";
import { Layout } from "../Components/index";
import { Provider } from "react-redux";

import store from "../Store/redux/store";

/*------------------------------------------------------*/
/* FONTS AND COLORS SCSS
/*------------------------------------------------------*/
import "../styles/assets/colors.scss";
import "../styles/assets/fonts.scss";

/*------------------------------------------------------*/
/* GLOBALS AND RESETS SCSS
/*------------------------------------------------------*/
import "../styles/components.scss";
import "../styles/pages.scss";
import "../styles/resets.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <NextIntlProvider messages={pageProps.messages}>
          <Layout>
            <Modal />
            <Component {...pageProps} />
          </Layout>
        </NextIntlProvider>
      </Provider>
    </>
  );
}

export default MyApp;
