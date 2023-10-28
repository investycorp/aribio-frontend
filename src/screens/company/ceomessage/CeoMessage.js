import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import ceophoto from './assets/ceophoto.png';

import {
  Container,
  HomeComponentWrap,
  ContainerGridLineWrap,
  GridLineBox,
  TextWrap,
  Text,
  ContentBox,
  Image,
} from './style';

import { HeadLine, Path, MainImgWrap } from '../../../components/style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';
import Video from '../../../components/Video';

const CeoMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <MainImgWrap>
        <Video page="ceomessage" />
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <Header />
      <Path>{`HOME > COMPANY > CEO MESSAGE`}</Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>
          CEO <br /> MESSAGE
        </HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap>
            <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
              CEO MESSAGE
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '2rem 0 0 0' }}
            >
              Meet Our CEO
            </Text>
            <hr style={{ width: '60px', margin: '5em 0', border: '2px solid #ffffff' }} />
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="200"
              $color="#E5E5E5"
              style={{ margin: '0' }}
            >
              AriBio’s mission is to improve the quality of human life by developing innovative drugs <br />
              that can give hope to patients who suffer from incurable diseases across the globe.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        {/* */}
        <HomeComponentWrap
          style={{ background: 'linear-gradient(to bottom, rgba(0,111,170,0.5), rgba(0, 56, 85, 0.5))' }}
        >
          <TextWrap>
            <Text
              $fontSize="40px"
              $fontWeight="200"
              $color="#ffffff"
              style={{ width: '70%', textAlign: 'start', margin: '0', height: 'fit-content', lineHeight: '1' }}
            >
              “
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '30px' : '18px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ padding: '0 20px', width: '60%', textAlign: 'center', margin: '0' }}
            >
              At AriBio,
              <br />
              developing new treatments is like stargazing across the night sky,
              <br />
              plotting our course through the vast unknown.
              <br />
              Our team shares a common mission , steadily working towards our goal
              <br />
              despite the cosmic uncertainties and challenges that may arise.
            </Text>
            <Text $fontSize="40px" $fontWeight="200" $color="#ffffff" style={{ width: '70%', textAlign: 'end' }}>
              ”
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
              $fontWeight="200"
              $color="#D6D6D6"
              style={{ width: '55%', textAlign: 'center' }}
            >
              AriBio Co., Ltd. CEO Jai Jun Choung
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        {/*  */}
        <HomeComponentWrap style={{ padding: '15vh 7vw', display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
          <ContentBox style={{ alignItems: 'end' }}>
            <Image src={ceophoto} alt="ceophoto" style={{ width: '125%' }} />
          </ContentBox>
          <ContentBox style={{ padding: '0 0 0 6.5rem', gap: '5em' }}>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#939598' }} />
            <Text
              $fontSize={window.innerWidth > 1280 ? '32px' : '21px'}
              $fontWeight="300"
              $color="#EAEAEA"
              style={{ textAlign: 'start', margin: '0', padding: '0 20% 0 0' }}
            >
              AriBio is at the forefront of innovative drug development for neurodegenerative diseases.
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
              $fontWeight="200"
              $color="#909090"
              style={{ textAlign: 'start', margin: '0', padding: '0 10% 0 0', lineHeight: '1.7' }}
            >
              As the founder of AriBio, I have spent the past 35 years devoted to the research and development of new
              treatments for patients. My life-long experience in drug development and licensing has driven me to
              establish AriBio in 2010, with the mission to develop meaningful therapies for neurodegenerative diseases,
              which is one of the largest challenges of humanity. The loss of memory due to dementia is a process that
              denies a person’s dignity and life, causing great sacrifice and pain not only to the patient but also to
              the family members who care for them. Although it has been 110 years since the discovery of Alzheimer’s
              disease, pharmaceutical companies still face the highest failure rate in developing treatments.
              Nonetheless, AriBio is determined to tackle this challenge with a bold vision and unwavering
              determination. Over the past decade, we have developed an integrated drug development system that enables
              us to develop new drugs quickly and cost-effectively. We have also built an innovative pipeline with deep
              expertise in clinical development as well as regulatory affairs with the US FDA.
              <br />
              <br />
              At AriBio, developing new drugs is like a perilous voyage across an open sea to an unknown destination.
              Our team of experts and employees share a sense of purpose, steadfastly sailing towards our goal despite
              the turbulent water and unpredictable storms that may lie ahead.
            </Text>
          </ContentBox>
        </HomeComponentWrap>
      </Desktop>
      <Mobile>
        <HomeComponentWrap>
          <TextWrap>
            <Text $fontSize="16px" $fontWeight="300" $color="#939598">
              CEO MESSAGE
            </Text>
            <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
              A biotech company brought together by those who dream of a brighter, healthier future.
            </Text>
            <hr style={{ width: '20px', margin: '3em 0' }} />
            <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '0' }}>
              AriBio’s mission is to improve the quality of human life by developing innovative drugs that can give hope
              to patients who suffer from incurable diseases across the globe.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap
          style={{
            background: 'linear-gradient(to bottom, rgba(0,111,170,0.5), rgba(0, 56, 85, 0.5))',
          }}
        >
          <TextWrap>
            <Text
              $fontSize="40px"
              $fontWeight="200"
              $color="#ffffff"
              style={{
                width: '100%',
                textAlign: 'start',
                margin: '0',
                height: 'fit-content',
                lineHeight: '1',
              }}
            >
              “
            </Text>
            <Text
              $fontSize="16px"
              $fontWeight="300"
              $color="#ffffff"
              style={{ padding: '0 20px', width: '100%', textAlign: 'center', margin: '0' }}
            >
              Regaining a healthy life and a bright smile may seem like a dream for patients and families with dementia.{' '}
              <br />
              However, AriBio is making this dream a reality with our innovative drug development.
            </Text>
            <Text
              $fontSize="40px"
              $fontWeight="200"
              $color="#ffffff"
              style={{ width: '100%', textAlign: 'end', margin: '0' }}
            >
              ”
            </Text>
            <Text $fontSize="20px" $fontWeight="200" $color="#D6D6D6" style={{ width: '100%', textAlign: 'end' }}>
              AriBio Co., Ltd. CEO Jai Jun Choung
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{ display: 'grid', padding: '0' }}>
          <Image
            src={process.env.PUBLIC_URL + '/assets/images/ceomessage_ceophoto_mobile.png'}
            alt="ceophoto"
            style={{ width: '95vw', maxWidth: '400px' }}
          />

          <ContentBox style={{ padding: '4rem 5vw 0 5vw', gap: '1rem' }}>
            <div style={{ width: '20px', height: '1px', backgroundColor: '#939598' }} />
            <Text
              $fontSize="18px"
              $fontWeight="300"
              $color="#EAEAEA"
              style={{ textAlign: 'start', margin: '0', padding: '0 ' }}
            >
              AriBio is at the forefront of innovative drug development for neurodegenerative diseases.
            </Text>
            <Text
              $fontSize="16px"
              $fontWeight="200"
              $color="#909090"
              style={{ textAlign: 'start', margin: '0', padding: '0', lineHeight: '1.7' }}
            >
              As the founder of AriBio, I have spent the past 35 years devoted to the research and development of new
              treatments for patients. My life-long experience in drug development and licensing has driven me to
              establish AriBio in 2010, with the mission to develop meaningful therapies for neurodegenerative diseases,
              which is one of the largest challenges of humanity. The loss of memory due to dementia is a process that
              denies a person’s dignity and life, causing great sacrifice and pain not only to the patient but also to
              the family members who care for them.
              <br />
              <br />
              Although it has been 110 years since the discovery of Alzheimer’s disease, pharmaceutical companies still
              face the highest failure rate in developing treatments. Nonetheless, AriBio is determined to tackle this
              challenge with a bold vision and unwavering determination.
              <br />
              <br />
              Over the past decade, we have developed an integrated drug development system that enables us to develop
              new drugs quickly and cost-effectively. We have also built an innovative pipeline with deep expertise in
              clinical development as well as regulatory affairs with the US FDA.
              <br />
              <br />
              At AriBio, developing new drugs is like a perilous voyage across an open sea to an unknown destination.
              Our team of experts and employees share a sense of purpose, steadfastly sailing towards our goal despite
              the turbulent water and unpredictable storms that may lie ahead.
            </Text>
          </ContentBox>
        </HomeComponentWrap>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default CeoMessage;
