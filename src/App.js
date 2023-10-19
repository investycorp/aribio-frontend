import React, { Children, useEffect, useState } from 'react';
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

import DetailPage from './screens/irpr/components/DetailPage';
import DigitalHealth from './screens/openinnovation/DigitalHealth';
import MemoRe from './screens/openinnovation/MemoRe';
import Partner from './screens/contact/Partner';
import MediaKit from './screens/irpr/MediaKit';

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
            <Route path="/company/aboutus" element={<AboutUs />} />
            <Route path="/company/history" element={<History />} />
            <Route path="/company/ceomessage" element={<CeoMessage />} />
            <Route path="/company/ci" element={<Ci />} />
            <Route path="/ourapproach/poly-pharmacology" element={<PolyPharmacology />} />
            <Route path="/ourapproach/aiplatform" element={<AiPlatform />} />
            <Route path="/ourapproach/publications" element={<Publications />} />
            <Route path="/pipeline" element={<PipeLine />} />
            <Route path="/irpr/notice" element={<Notice />}>
              <Route path=":id" element={<DetailPage />} />
            </Route>
            <Route path="/irpr/pressrelease" element={<PressRelease />}>
              <Route path=":id" element={<DetailPage />} />
            </Route>
            <Route path="/irpr/mediakit" element={<MediaKit />} />
            <Route path="/career/career" element={<Career />} />
            <Route path="/contact/partner" element={<Partner />} />
            <Route path="/contact/contactus" element={<Contact />} />
            <Route path="/openinnovation/openinnovation" element={<OpenInnovation />} />
            <Route path="/openinnovation/digitalhealth" element={<DigitalHealth />} />
            <Route path="/openinnovation/memoreproject" element={<MemoRe />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
