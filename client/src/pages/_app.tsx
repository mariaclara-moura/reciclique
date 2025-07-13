import isPropValid from "@emotion/is-prop-valid";
import { AppProps } from "next/app";
import Head from "next/head";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Reciclique</title>
          <link
            rel="shortcut icon"
            href="/img/icon-512.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
          </style>
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="B&B Material Hidráulico" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
