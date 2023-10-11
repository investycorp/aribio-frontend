import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  /* @font-face {
      font-family: 'Noto Sans KR';
      font-weight: 700;
      src: local('Noto Sans KR Bold'),
      url('/fonts/NotoSansKR-Bold.otf') format('otf'),
      url('/fonts/NotoSansKR-Bold.otf') format('woff'),
      url('/fonts/NotoSansKR-Bold.otf') format('woff2'),
  } */

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'pretendard';
    background-color: '#121212';
    height: 100%;
  }
  div {
    box-sizing: border-box;
    background-color: '#121212';
  }

  * {
    font-family: 'pretendard';
    line-height: 1.2;
    overscroll-behavior: none;
    background-color: '#121212';
    cursor: default;
  }
`;

export default GlobalStyle;