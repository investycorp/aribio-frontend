import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import ContainerHeight from '../../../atom/ContainerHeight';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import SideSlider from '../../../components/SideSlider';
import GoToTop from '../../../components/buttons/GoToTop';
import GetContainerHeight from '../../../utils/GetContainerHeight';
import {
  Container,
  MainImgWrap,
  ContainerGridLineWrap,
  GridLineBox,
  Path,
  HeadLine,
  HomeComponentWrap,
  TextWrap,
  Text,
  Tab,
  TabItem,
  TabContentWrap,
  ContentBox,
  ContentBoxNameWrap,
  Image,
  DescriptionWrap,
  DescriptionItem,
} from './style';
import Leadership from './components/Leadership';
import Advisors from './components/Advisors';

const AboutUs = () => {
  const [containerHeight, setContainerHeight] = useRecoilState(ContainerHeight);
  const totalHeight = useRecoilValue(ContainerHeight);
  const [tabNames, settabNames] = useState(['Leadership', 'Advisors']);
  const [currentTab, setCurrentTab] = useState('Leadership');

  GetContainerHeight();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //   window.addEventListener('resize', () => {
  //     setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //     console.log('RESIZE');
  //   });
  //   return () => {
  //     window.removeEventListener('resize', () => {
  //       setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //     });
  //   };
  // }, []);
  return (
    <Container className="container">
      <ContainerGridLineWrap $height={totalHeight}>
        <GridLineBox style={{ borderLeft: '2px solid #5d5d5d' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <SideSlider />
      <Path>{`HOME > COMPANY > ABOUT US`}</Path>
      <MainImgWrap>
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
          <Text $color="#939598" $fontSize="26px" $fontWeight="300">
            ABOUT US
          </Text>
          <Text $fontSize="50px" $fontWeight="400">
            Company Overview
          </Text>
          <hr style={{ width: '15%', border: '2px solid #ffffff', margin: '3.5rem 0 5rem 0' }} />
          <Text $fontSize="23px" $fontWeight="300" $color="#D3D3D3">
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
      <GoToTop />
      <Footer />
    </Container>
  );
};

export default AboutUs;
