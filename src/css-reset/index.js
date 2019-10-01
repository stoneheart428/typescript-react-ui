import React from "react";
import { createGlobalStyle } from "styled-components";
import preflight from "./preflight";
import theme from "../theme";

const defaultConfig = theme => ({
  light: {
    color: theme.colors.ink[900],
    bg: undefined,
    borderColor: theme.colors.ink[100],
    placeholderColor: theme.colors.ink[400]
  },
  dark: {
    color: 'white',
    bg: theme.colors.ink[900],
    borderColor: theme.colors.ink[600],
    placeholderColor: theme.colors.ink[500]
  }
});

const { color, bg, borderColor, placeholderColor } = defaultConfig(theme)[
  "light"
];

const CSSReset = createGlobalStyle`
    ${preflight};
      html {
        line-height: 1.5;
        color: ${color};
        background-color: ${bg};
        font-family: ${theme.fonts["body"]};
      }

      /**
      * Allow adding a border to an element by just adding a border-width.
      */

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        border-color: ${borderColor};
      }

      input:-ms-input-placeholder,
      textarea:-ms-input-placeholder {
        color: ${placeholderColor};
      }

      input::-ms-input-placeholder,
      textarea::-ms-input-placeholder {
        color: ${placeholderColor};
      }

      input::placeholder,
      textarea::placeholder {
        color: ${placeholderColor};
      }
    `;

export default CSSReset;
