import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import ContainerHeight from '../../../atom/ContainerHeight';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import GetContainerHeight from '../../../utils/GetContainerHeight';
import ceophoto from './assets/ceophoto.png';
import ceomessage_cover from './assets/ceomessage_cover.png';

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

const CeoMessage = () => {
  const [containerHeight, setContainerHeight] = useRecoilState(ContainerHeight);
  GetContainerHeight();
  return (
    <Container>
      <Header />
      <Path>{`HOME > COMPANY > CEO MESSAGE`}</Path>
      <ContainerGridLineWrap $height={containerHeight}>
        <GridLineBox style={{ borderLeft: '2px solid #5d5d5d' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <MainImgWrap $src={ceomessage_cover}>
        <HeadLine>
          CEO <br /> MESSAGE
        </HeadLine>
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
      <HomeComponentWrap style={{ background: 'linear-gradient(to bottom, #006FAA, #003855)' }}>
        <TextWrap>
          <Text
            $fontSize="40px"
            $fontWeight="200"
            $color="#ffffff"
            style={{ width: '50%', textAlign: 'start', margin: '0', height: 'fit-content', lineHeight: '1' }}
          >
            “
          </Text>
          <Text
            $fontSize="30px"
            $fontWeight="300"
            $color="#ffffff"
            style={{ padding: '0 20px', width: '50%', textAlign: 'center', margin: '0' }}
          >
            Regaining a healthy life and a bright smile may seem like a dream for patients and families with dementia.{' '}
            <br />
            However, AriBio is making this dream a reality with our innovative drug development.
          </Text>
          <Text $fontSize="40px" $fontWeight="200" $color="#ffffff" style={{ width: '50%', textAlign: 'end' }}>
            ”
          </Text>
          <Text $fontSize="20px" $fontWeight="200" $color="#D6D6D6" style={{ width: '55%', textAlign: 'end' }}>
            AriBio Co., Ltd. CEO Jai Jun Choung
          </Text>
        </TextWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ padding: '15vh 7vw', display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
        <ContentBox style={{ alignItems: 'end' }}>
          <Image src={ceophoto} alt="ceophoto" style={{ width: '125%' }} />
        </ContentBox>
        <ContentBox style={{ padding: '0 0 0 6.5rem', gap: '5em' }}>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#939598' }} />
          <Text
            $fontSize="32px"
            $fontWeight="300"
            $color="#EAEAEA"
            style={{ textAlign: 'start', margin: '0', padding: '0 20% 0 0' }}
          >
            AriBio is at the forefront of innovative drug development for neurodegenerative diseases.
          </Text>
          <Text
            $fontSize="20px"
            $fontWeight="200"
            $color="#909090"
            style={{ textAlign: 'start', margin: '0', padding: '0 10% 0 0', lineHeight: '1.7' }}
          >
            As the founder of AriBio, I have spent the past 35 years devoted to the research and development of new
            treatments for patients. My life-long experience in drug development and licensing has driven me to
            establish AriBio in 2010, with the mission to develop meaningful therapies for neurodegenerative diseases,
            which is one of the largest challenges of humanity. The loss of memory due to dementia is a process that
            denies a person’s dignity and life, causing great sacrifice and pain not only to the patient but also to the
            family members who care for them. Although it has been 110 years since the discovery of Alzheimer’s disease,
            pharmaceutical companies still face the highest failure rate in developing treatments. Nonetheless, AriBio
            is determined to tackle this challenge with a bold vision and unwavering determination. Over the past
            decade, we have developed an integrated drug development system that enables us to develop new drugs quickly
            and cost-effectively. We have also built an innovative pipeline with deep expertise in clinical development
            as well as regulatory affairs with the US FDA.
            <br />
            <br />
            At AriBio, developing new drugs is like a perilous voyage across an open sea to an unknown destination. Our
            team of experts and employees share a sense of purpose, steadfastly sailing towards our goal despite the
            turbulent water and unpredictable storms that may lie ahead.
          </Text>
        </ContentBox>
      </HomeComponentWrap>
      <Footer />
    </Container>
  );
};

export default CeoMessage;
