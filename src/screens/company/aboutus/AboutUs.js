import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';

import {
  Container,
  MainImgWrap,
  ContainerGridLineWrap,
  GridLineBox,
  HomeComponentWrap,
  TextWrap,
  Text,
  Tab,
  TabItem,
} from './style';
import { HeadLine, Path } from '../../../components/style';
import Leadership from './components/Leadership';
import Advisors from './components/Advisors';
import aboutus_cover from './assets/aboutus_cover.png';
import { Desktop, Mobile } from '../../../utils/MediaQuery';

const AboutUs = () => {
  const [tabNames, setTabNames] = useState(['Leadership', 'Advisors']);
  const [currentTab, setCurrentTab] = useState('Leadership');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className="container">
      <ContainerGridLineWrap>
        <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <Path>{`HOME > COMPANY > ABOUT US`}</Path>
      <Desktop>
        <MainImgWrap $src={aboutus_cover}>
          <HeadLine>
            ABOUT <br /> US
          </HeadLine>
          <img
            style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
            src={vertical_arrow}
            alt="vertical_arrow"
          />
        </MainImgWrap>
        <HomeComponentWrap>
          <TextWrap>
            <Text $color="#939598" $fontSize="18px" $fontWeight="300">
              ABOUT US
            </Text>
            <Text $fontSize="34px" $fontWeight="400">
              Company Overview
            </Text>
            <hr style={{ width: '15%', border: '2px solid #ffffff', margin: '3.5rem 0 5rem 0' }} />
            <Text $fontSize="14px" $fontWeight="300" $color="#D3D3D3">
              AriBIo Co., Ltd. is a biotechnology company that aims to develop a meaningful therapies for
              neurodegenerative diseases through its innovative platform ARIDD™
              <br />
              (AI-powered, Reverse engineered & Integrated Drug Development) and Open Innovation.
              <br />
              <br />
              Our mission is to develop develop novel therapies for neurodegenerative diseases.
              <br />
              <br />
              Meet our team of experts in science, technology, pharmaceuticals, and regulations joined together to lead
              AriBio.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab style={{ padding: '0 7vw' }}>
          {tabNames.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === item ? true : false}
              onClick={() => {
                setCurrentTab(item);
                console.log(item);
              }}
            >
              {item}
            </TabItem>
          ))}
        </Tab>
        {currentTab === 'Leadership' ? <Leadership /> : <Advisors />}
      </Desktop>
      <Mobile>
        <MainImgWrap $src={aboutus_cover}>
          <HeadLine>
            ABOUT <br /> US
          </HeadLine>
          <img
            style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
            src={vertical_arrow}
            alt="vertical_arrow"
          />
        </MainImgWrap>
        <HomeComponentWrap>
          <TextWrap>
            <Text $color="#939598" $fontSize="16px" $fontWeight="300">
              ABOUT US
            </Text>
            <Text $fontSize="23px" $fontWeight="400">
              Company Overview
            </Text>
            <hr style={{ width: '15%', border: '2px solid #ffffff', margin: '3.5rem 0 5rem 0' }} />
            <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3">
              AriBIo Co., Ltd. is a biotechnology company that aims to develop a meaningful therapies for
              neurodegenerative diseases through its innovative platform ARIDD™
              <br />
              (AI-powered, Reverse engineered & Integrated Drug Development) and Open Innovation.
              <br />
              <br />
              Our mission is to develop develop novel therapies for neurodegenerative diseases.
              <br />
              <br />
              Meet our team of experts in science, technology, pharmaceuticals, and regulations joined together to lead
              AriBio.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab style={{ padding: '0 7vw' }}>
          {tabNames.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === item ? true : false}
              onClick={() => {
                setCurrentTab(item);
                console.log(item);
              }}
            >
              {item}
            </TabItem>
          ))}
        </Tab>
        {currentTab === 'Leadership' ? <Leadership /> : <Advisors />}
      </Mobile>
      <Footer />
    </Container>
  );
};

export default AboutUs;
