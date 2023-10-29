import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import ceophoto from './assets/ceophoto.png';

import { Container, HomeComponentWrap, TextWrap, Text, ContentBox, Image } from './style';

import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../../components/style';
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
              AriBio is at the forefront of innovative drug development
              <br /> for neurodegenerative diseases.
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
              $fontWeight="200"
              $color="#909090"
              style={{ textAlign: 'start', margin: '0', padding: '0 10% 0 0', lineHeight: '1.7' }}
            >
              As the founder of AriBio, I have spent the past 35 years devoted to the research and
              <br />
              development of new treatments for patients. With these experiences, I established AriBio in
              <br />
              2010 with the core purpose of developing meaningful therapies for neurodegenerative
              <br />
              diseases. The loss of memory due to dementia is a process that denies a person’s dignity
              <br />
              and life, impacting not only to the patient, but also the family members who care for them.
              <br />
              Although it has been 110 years since the discovery of Alzheimer’s disease, pharmaceutical
              <br />
              companies still face the highest failure rate in developing treatments. Yet, AriBio is
              <br />
              determined to tackle this challenge with a bold vision and unwavering determination. <br />
              Over the past decade, we have developed an innovative pipeline that enables us to develop
              <br />
              new drugs quickly and cost-effectively.
              <br />
              <br />
              At AriBio, developing new treatments is like stargazing across the night sky, plotting our
              <br />
              course through the vast unknown. Our team shares a common mission , steadily working
              <br />
              towards our goal despite the cosmic uncertainties and challenges that may arise.
              <br />
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
              AriBio’s mission is to improve
              <br />
              the quality of human life by developing
              <br />
              innovative drugs that can give hope
              <br />
              to patients who suffer from
              <br />
              incurable diseases across the globe.
              <br />
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
              $fontSize="20px"
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
              ”
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
              $fontSize="20px"
              $fontWeight="200"
              $color="#ffffff"
              style={{ width: '100%', textAlign: 'end', margin: '0' }}
            >
              ”
            </Text>
            <Text $fontSize="14px" $fontWeight="200" $color="#D6D6D6" style={{ width: '100%', textAlign: 'center' }}>
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

          <ContentBox style={{ padding: '4rem 5vw 0 5vw', gap: '1rem', marginBottom: '10em' }}>
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
              As the founder of AriBio, I have spent the
              <br />
              past 35 years devoted to the research and
              <br />
              development of new treatments for patients.
              <br />
              With these experiences, I established AriBio
              <br />
              in 2010 with the core purpose of developing
              <br />
              meaningful therapies for neurodegenerative
              <br />
              diseases. The loss of memory due to
              <br />
              dementia is a process that denies a person’s
              <br />
              dignity and life, impacting not only to the
              <br />
              patient, but also the family members who
              <br />
              care for them. Although it has been 110 years
              <br />
              since the discovery of Alzheimer’s disease,
              <br />
              pharmaceutical companies still face the
              <br />
              highest failure rate in developing treatments.
              <br />
              Yet, AriBio is determined to tackle this
              <br />
              challenge with a bold vision and unwavering
              <br />
              determination. <br />
              Over the past decade, we have developed
              <br />
              an innovative pipeline that enables us
              <br />
              to develop new drugs quickly and
              <br />
              cost-effectively.
              <br />
              <br />
              At AriBio, developing new treatments is like
              <br />
              stargazing across the night sky, plotting our
              <br />
              course through the vast unknown.
              <br />
              Our team shares a common mission,
              <br />
              steadily working towards our goal despite
              <br />
              the cosmic uncertainties and challenges
              <br />
              that may arise.
            </Text>
          </ContentBox>
        </HomeComponentWrap>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default CeoMessage;
