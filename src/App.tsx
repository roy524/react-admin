import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';

import Routes from 'routes/index';
import createTheme from './theme';
import { ThemeStateType } from 'store/reducers/themeReducer';
import './App';

const jssHtml = document.getElementById('jss-insertion-point') ?? undefined;
const jss = create({
  ...jssPreset(),
  insertionPoint: jssHtml,
});

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
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size:100%;
    font: inherit;
    vertical-align: baseline;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  html,body,#root {
    width: 100%;
    height: 100%;
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
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
`;

function App() {
  const theme: ThemeStateType = useSelector((state: any) => state.themeReducer);

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s" />
      <CssBaseline />
      <GlobalStyle />
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={createTheme(theme.currentTheme)}>
          <ThemeProvider theme={createTheme(theme.currentTheme)}>
            <Routes />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

export default App;
