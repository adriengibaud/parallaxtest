import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  html {
    --color-background: #eee;
    --color-primary: #20223b;
    --color-secondary: #55c0c5;
    --margin-block: 50px;
    font: 16px Roboto, sans-serif;
    height: -webkit-fill-available;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
    overflow-x: hidden;
  background: #4a0379;
    width: 100vw;
    min-height: 100vh;
  min-height: -webkit-fill-available;
    
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    user-select: none;
  }
  h1 {
    font-size: 6em;
    font-weight: 300;
    letter-spacing: -1.5px;
  }
  h2 {
  font-size: 3.75em;
  font-weight: 300;
  letter-spacing: 0.5 ;
  }
  h3 {
    font-size: 3em;
    font-weight: 400;

  }
  h4 {
    font-size: 2.125em;
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  h5 {
    font-size: 1.5em;
    font-weight: 400;
  }
  h6 {
    font-size: 1.25em;
    font-weight: 500;
    letter-spacing: 0.15px;
  }
`;

export default GlobalStyle;
