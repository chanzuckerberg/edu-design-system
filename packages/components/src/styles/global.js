import { GlobalStyles } from "twin.macro";
import React from "react";
import arimoBoldWoff from "./fonts/arimo-bold.woff";
import arimoBoldWoff2 from "./fonts/arimo-bold.woff2";
import arimoRegularWoff from "./fonts/arimo-regular.woff";
import arimoRegularWoff2 from "./fonts/arimo-regular.woff2";
import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Arimo';
    src:
      url(${arimoRegularWoff2}) format('woff2'),
      url(${arimoRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arimo';
    src:
      url(${arimoBoldWoff2}) format('woff2'),
      url(${arimoBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;

const EDSGlobalStyles = () => (
  <>
    <GlobalStyles />
    <GlobalFonts />
  </>
);

export default EDSGlobalStyles;
