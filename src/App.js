import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot, useRecoilValue } from 'recoil';
import theme from './themes/theme';
// import { useTheme } from './hooks/useTheme';
// import { usePageView } from './hooks/usePageView';
// import { useScrollToTop } from './hooks/useScrollToTop';
// import { useScrollToHash } from './hooks/useScrollToHash';
import Company from './screens/company/Company';
import OurApproach from './screens/ourapproach/OurApproach';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Company />} />
            <Route path="/ourapproach" element={<OurApproach />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
