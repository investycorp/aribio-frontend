import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot, useRecoilState } from 'recoil';
import theme from './themes/theme';
import GlobalStyle from './components/GlobalStyle';
import Home from './screens/home/Home';
import AboutUs from './screens/company/aboutus/AboutUs';
import History from './screens/company/history/History';
import Career from './screens/career/Career';
import CeoMessage from './screens/company/ceomessage/CeoMessage';
import Ci from './screens/company/ci/Ci';
import PolyPharmacology from './screens/ourapproach/PolyPharmacology';
import AiPlatform from './screens/ourapproach/AiPlatform';
import Publications from './screens/ourapproach/Publications';
import PipeLine from './screens/pipeline/PipeLine';
import Notice from './screens/irpr/Notice';
import PressRelease from './screens/irpr/PressRelease';
import Contact from './screens/contact/Contact';
import OpenInnovation from './screens/openinnovation/OpenInnovation';
import NoticeDetailPage from './screens/irpr/detailpage/NoticeDetailPage';
import DetailPage from './screens/irpr/components/DetailPage';

function App() {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/history" element={<History />} />
            <Route path="/ceomessage" element={<CeoMessage />} />
            <Route path="/ci" element={<Ci />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/openinnovation" element={<OpenInnovation />} />
            <Route path="/poly-pharmacology" element={<PolyPharmacology />} />
            <Route path="/aiplatform" element={<AiPlatform />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/pipeline" element={<PipeLine />} />
            <Route path="/notice" element={<Notice />}>
              <Route path=":id" element={<DetailPage />} />
            </Route>
            <Route path="/pressrelease" element={<PressRelease />}>
              <Route path=":id" element={<DetailPage />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
