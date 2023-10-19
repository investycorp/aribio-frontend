import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';

import {
  Container,
  ContainerGridLineWrap,
  GridLineBox,
  MainImgWrap,
  HomeComponentWrap,
  TextWrap,
  Text,
  Image,
  HR,
  ContentWrap,
} from './style';
import openinnovation_cover from './assets/openinnovation_cover.png';
import openinnovation_middle1 from './assets/openinnovation_middle1.png';
import openinnovation_middle2 from './assets/openinnovation_middle2.png';
import arrow from '../../assets/images/arrow.svg';

import { HeadLine, Path } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

const OpenInnovation = () => {
  const navigate = useNavigate();
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
      <Path>{`HOME > OPEN INNOVATION`}</Path>
      <MainImgWrap $src={openinnovation_cover}>
        <HeadLine>
          OPEN <br /> INNOVATION
        </HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <Desktop>
        <HomeComponentWrap
          style={{
            backgroundColor: 'transparent',
            height: '120vh',
            overflow: 'hidden',
          }}
        >
          <Image
            style={{
              position: 'absolute',
              top: '50vh',
              left: '0',
              width: '100%',
              height: 'auto',
              opacity: '0.3',
              zIndex: '10',
            }}
            src={openinnovation_middle1}
            alt="intro_bg"
          />
          <TextWrap style={{ width: '70vw', position: 'relative', backgroundColor: 'transparent' }}>
            <Text $color="#939598" $fontSize="26px" $fontWeight="300">
              INTRODUCTION
            </Text>
            <Text $fontSize="50px" $fontWeight="400">
              AriBio is dedicated to driving advancements in neurodegenerative diseases.
            </Text>
            <hr style={{ width: '15%', border: '2px solid #ffffff', margin: '3.5rem 0 5rem 0' }} />
            <Text $fontSize="23px" $fontWeight="300" $color="#D3D3D3" style={{ width: '50vw' }}>
              Our foundation is the ARIDD platform, designed for multi-mechanism drugs, and we’re strengthened by our
              commitment to open innovation. We actively collaborate with innovative companies around the world, aiming
              to create impactful solutions for these challenging diseases.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap
          style={{
            minHeight: 'fit-content',
            padding: '0 0 20em 0',
            margin: '0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <Image src={openinnovation_middle2} alt="openinnovation_middle2" style={{ width: '80%', marginTop: '5em' }} />
          <TextWrap
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              padding: '1em 10em 1em 0',
            }}
          >
            <Text $color="#939598" $fontSize="23px" $fontWeight="300" $align="start">
              <HR style={{ marginBottom: '2em' }} />
              Our approach blends polypharmacological strategies with a belief in multi-modal management for these
              conditions.
              <br />
              <br />
              While pioneering work in this area has its challenges and risks, the urgent need for solutions in
              neurodegenerative diseases propels us forward. Alongside our partners, we utilize AI and digital tools to
              support patients and deepen our understanding of these disorders.
            </Text>
            <ContentWrap style={{ justifySelf: 'end', flexDirection: 'row', padding: '0' }}>
              <Text
                $fontSize="20px"
                $fontWeight="300"
                $color="#ffffff"
                $align="start"
                $clickable={true}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: 'fit-content',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  gap: '3em',
                }}
                onClick={() => navigate('/')}
              >
                <span style={{ zIndex: '-1' }}>Digital Health</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
              </Text>
              <Text
                $fontSize="20px"
                $fontWeight="300"
                $color="#ffffff"
                $align="start"
                $clickable={true}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: 'fit-content',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  gap: '3em',
                }}
                onClick={() => navigate('/')}
              >
                <span style={{ zIndex: '-1' }}>Memo:Re Project</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
              </Text>
            </ContentWrap>
          </TextWrap>
        </HomeComponentWrap>
      </Desktop>
      <Mobile>
        <HomeComponentWrap
          style={{
            backgroundColor: 'transparent',
            // height: '120vh',
            overflow: 'hidden',
          }}
        >
          <Image
            style={{
              position: 'absolute',
              top: '50vh',
              left: '0',
              width: '100%',
              height: 'auto',
              opacity: '0.3',
              zIndex: '10',
            }}
            src={openinnovation_middle1}
            alt="intro_bg"
          />
          <TextWrap style={{ width: '100%', position: 'relative', backgroundColor: 'transparent' }}>
            <Text $color="#939598" $fontSize="16px" $fontWeight="300">
              INTRODUCTION
            </Text>
            <Text $fontSize="23px" $fontWeight="400">
              AriBio is dedicated to driving advancements in neurodegenerative diseases.
            </Text>
            <hr style={{ width: '15%', border: '2px solid #ffffff', margin: '0 0 2em 0' }} />
            <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{ width: '100%' }}>
              Our foundation is the ARIDD platform, designed for multi-mechanism drugs, and we’re strengthened by our
              commitment to open innovation. We actively collaborate with innovative companies around the world, aiming
              to create impactful solutions for these challenging diseases.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap
          style={{
            minHeight: 'fit-content',
            padding: '0 0',
            margin: '0',
            marginTop: '10em',
            display: 'flex',
          }}
        >
          <Image
            src={openinnovation_middle2}
            alt="openinnovation_middle2"
            style={{ width: '66%', marginTop: '5em', alignSelf: 'start' }}
          />
          <TextWrap
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              padding: '1em 7vw 1em 7vw',
              marginTop: '3em',
            }}
          >
            <Text
              $color="#939598"
              $fontSize="18px"
              $fontWeight="300"
              $align="start"
              style={{ paddingLeft: '15vw', marginBottom: '10em' }}
            >
              <HR style={{ marginBottom: '2em' }} />
              Our approach blends polypharmacological strategies with a belief in multi-modal management for these
              conditions.
              <br />
              <br />
              While pioneering work in this area has its challenges and risks, the urgent need for solutions in
              neurodegenerative diseases propels us forward. Alongside our partners, we utilize AI and digital tools to
              support patients and deepen our understanding of these disorders.
            </Text>
            <ContentWrap style={{ justifySelf: 'end', flexDirection: 'column', padding: '0 0 10em 33%' }}>
              <Text
                $fontSize="20px"
                $fontWeight="300"
                $color="#ffffff"
                $align="start"
                $clickable={true}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  // gap: '3em',
                }}
                onClick={() => navigate('/')}
              >
                <span style={{ zIndex: '-1', fontSize: '16px' }}>Digital Health</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
              </Text>
              <Text
                $fontSize="20px"
                $fontWeight="300"
                $color="#ffffff"
                $align="start"
                $clickable={true}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  // gap: '3em',
                }}
                onClick={() => navigate('/')}
              >
                <span style={{ zIndex: '-1', fontSize: '16px' }}>Memo:Re Project</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
              </Text>
            </ContentWrap>
          </TextWrap>
        </HomeComponentWrap>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default OpenInnovation;
