import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import ContainerHeight from '../../atom/ContainerHeight';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import GetContainerHeight from '../../utils/GetContainerHeight';

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

const Career = () => {
  const [containerHeight, setContainerHeight] = useRecoilState(ContainerHeight);
  GetContainerHeight();
  return (
    <Container>
      <Header />
      <ContainerGridLineWrap $height={containerHeight}>
        <GridLineBox style={{ borderLeft: '2px solid #5d5d5d' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <MainImgWrap>
        <HeadLine>CAREER</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
        <TextWrap>
          <Text $fontSize="26px" $fontWeight="300" $color="#939598">
            CEO MESSAGE
          </Text>
          <Text $fontSize="50px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
            A biotech company brought together <br />
            by those who dream of a brighter, healthier future.
          </Text>
          <hr style={{ width: '60px', margin: '5em 0', border: '2px solid #ffffff' }} />
          <Text $fontSize="23px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '0' }}>
            AriBio’s mission is to improve the quality of human life by developing innovative drugs <br />
            that can give hope to patients who suffer from incurable diseases across the globe.
          </Text>
        </TextWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ backgroundColor: '#006FAA' }}></HomeComponentWrap>
      <Footer />
    </Container>
  );
};

export default Career;
