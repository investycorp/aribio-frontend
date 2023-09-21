import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot, useRecoilValue } from 'recoil';
import theme from './themes/theme';
// import { useTheme } from './hooks/useTheme';
// import { usePageView } from './hooks/usePageView';
// import { useScrollToTop } from './hooks/useScrollToTop';
// import { useScrollToHash } from './hooks/useScrollToHash';
import AboutUs from './screens/company/aboutus/AboutUs';
import OurApproach from './screens/ourapproach/OurApproach';
import GlobalStyle from './components/GlobalStyle';
import Home from './screens/home/Home';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ourapproach" element={<OurApproach />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
