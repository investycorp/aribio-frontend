import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot, useRecoilValue } from 'recoil';
import theme from './themes/theme';
import GlobalStyle from './components/GlobalStyle';
import Home from './screens/home/Home';
import AboutUs from './screens/company/aboutus/AboutUs';
import History from './screens/company/history/History';
import OurApproach from './screens/ourapproach/OurApproach';
import Career from './screens/career/Career';
import CeoMessage from './screens/company/ceomessage/CeoMessage';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/history" element={<History />} />
            <Route path="/ceomessage" element={<CeoMessage />} />
            <Route path="/career" element={<Career />} />
            <Route path="/ourapproach" element={<OurApproach />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
