import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Container, HomeComponentWrap, TextWrap, Text, Tab, TabItem } from './style';
import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../../components/style';
import Leadership from './components/Leadership';
import Advisors from './components/Advisors';

import { Desktop, Mobile } from '../../../utils/MediaQuery';

import Video from '../../../components/Video';

const AboutUs = () => {
  const [tabNames, setTabNames] = useState(['Leadership', 'Advisors']);
  const [currentTab, setCurrentTab] = useState('Leadership');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    document.addEventListener('scroll', () => {
      const leader = document.querySelectorAll('#leadership');
      const advisor = document.querySelector('#advisor');

      if (leader[0]?.getBoundingClientRect().y < window.innerHeight * 0.7) {
        leader[1]?.classList.add('moveup');
      } else {
        leader[1]?.classList.remove('moveup');
      }
    });
    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Container className="container">
      <Header />
      <Path>{`HOME > COMPANY > ABOUT US`}</Path>
      <MainImgWrap>
        <Video
          page="aboutus"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0400PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1300PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2200PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>
          ABOUT <br /> US
        </HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: '5vw',
            height: window.innerWidth > 1280 ? '60px' : '36px',
          }}
        />
      </HomeComponentWrap>
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
        <Desktop>
          <HomeComponentWrap>
            <TextWrap>
              <Text $color="#939598" $fontWeight="400" style={{ fontsize: window.innerWidth > 1280 ? '26px' : '18px' }}>
                ABOUT US
              </Text>
              <Text $fontWeight="500" style={{ fontSize: window.innerWidth > 1280 ? '50px' : '34px' }}>
                Company Overview
              </Text>
              <hr
                style={{
                  width: window.innerWidth > 1280 ? '60px' : '40px',
                  border: '1px solid #ffffff',
                  margin: '2.5rem 0 4rem 0',
                }}
              />
              <Text $fontWeight="300" $color="#D3D3D3" style={{ fontSize: window.innerWidth > 1280 ? '23px' : '14px' }}>
                AriBio Co., Ltd. is a biotechnology leader focused on creating impactful therapies
                <br />
                for neurodegenerative diseases. Through our groundbreaking ARIDD™ platform
                <br />
                (AI-powered, Reverse engineered & Integrated Drug Development)
                <br />
                and a commitment to Open Innovation, we are poised to make significant strides in the field.
                <br />
                <br />
                We are dedicated to pioneering treatments for neurodegenerative diseases,
                <br />
                offering innovative therapies for a brighter future
                <br />
                <br />
                Meet our dedicated leadership team of experts in science,
                <br />
                technology, pharmaceuticals, and regulatory fields.
                <br />
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
          <HomeComponentWrap>
            <TextWrap style={{ width: '100%' }}>
              <Text $color="#939598" $fontWeight="300" style={{ fontSize: '16px' }}>
                ABOUT US
              </Text>
              <Text $fontWeight="400" style={{ fontSize: '23px' }}>
                Company Overview
              </Text>
              <hr style={{ width: '20px', border: '1px solid #ffffff', margin: '0 0 2rem 0' }} />
              <Text
                $fontSize="18px"
                $fontWeight="300"
                $color="#D3D3D3"
                style={{ lineHeight: '20px', fontSize: '18px' }}
              >
                AriBio Co., Ltd.
                <br />
                is a biotechnology leader focused on
                <br />
                creating impactful therapies for
                <br />
                neurodegenerative diseases.
                <br />
                Through our groundbreaking
                <br />
                ARIDD™ platform (AI-powered,
                <br />
                Reverse engineered & Integrated
                <br />
                Drug Development) and a<br />
                commitment to Open Innovation,
                <br />
                we’re poised to make significant
                <br />
                strides in the field.
                <br />
                <br />
                Our mission is clear:
                <br />
                develop innovative therapies
                <br />
                for neurodegenerative diseases.
                <br />
                <br />
                Meet our dedicated leadership team,
                <br />
                of experts in science, technology,
                <br />
                pharmaceuticals, and regulatory fields.
                <br />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <Tab style={{ padding: '0 5vw' }}>
            {tabNames.map((item, index) => (
              <TabItem
                key={index}
                $isActive={currentTab === item ? true : false}
                style={{ fontSize: '20px', borderWidth: '1px' }}
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
      </div>

      <Footer />
    </Container>
  );
};

export default AboutUs;
