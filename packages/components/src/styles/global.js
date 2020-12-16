import { GlobalStyles } from "twin.macro";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Arimo';
    src:
      url(fonts/arimo-regular.woff2) format('woff2'),
      url(fonts/arimo-regular.woff) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arimo';
    src:
      url(fonts/arimo-bold.woff2) format('woff2'),
      url(fonts/arimo-bold.woff) format('woff');
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
