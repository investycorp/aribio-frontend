import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, HomeComponentWrap, TextWrap, Text, Image, HR, ContentWrap } from './style';
import openinnovation_middle1 from './assets/openinnovation_middle1.png';
import openinnovation_middle2 from './assets/openinnovation_middle2.png';
import arrow from '../../assets/images/arrow.svg';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import Video from '../../components/Video';

const OpenInnovation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);
  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="openinnovation"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1000PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1900PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2800PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME > `}</span>OPEN INNOVATION
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine style={{ fontSize: window.innerWidth < 901 && '55px' }}>
          OPEN <br /> INNOVATION
        </HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
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
          <HomeComponentWrap
            style={{
              backgroundColor: 'transparent',
              height: '120vh',
              overflow: 'hidden',
            }}
          >
            {/* <Image
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
            /> */}
            <TextWrap style={{ width: '70vw', position: 'relative', backgroundColor: 'transparent' }}>
              <Text $color="#939598" $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300">
                OPEN INNOVATION
              </Text>
              <Text $fontSize={window.innerWidth > 1280 ? '50px' : '34px'} $fontWeight="500">
                AriBio is dedicated to driving advancements
                <br />
                in neurodegenerative diseases.
              </Text>
              <hr
                style={{
                  width: '60px',
                  borderTop: '2px solid #ffffff',
                  borderBottom: 'none',
                  margin: '3.5rem 0 5rem 0',
                }}
              />
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="300"
                $color="#D3D3D3"
                style={{ width: '50vw', fontSize: window.innerWidth > 1280 ? '23px' : '14px' }}
              >
                Our foundation is the ARIDD platform, designed for multi-mechanism drugs, and
                <br />
                we’re strengthened by our commitment to open innovation.
                <br />
                We actively collaborate with innovative companies around the world, <br />
                aiming to create impactful solutions for these challenging diseases.
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
            <Image
              src={openinnovation_middle2}
              alt="openinnovation_middle2"
              style={{ alignSelf: 'end', width: '80%', marginTop: '0' }}
            />
            <TextWrap
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'start',
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                padding: '0 7vw 0 0',
              }}
            >
              <Text
                $color="#D3D3D3"
                $fontWeight="300"
                $align="start"
                style={{ marginBottom: '5rem', fontSize: window.innerWidth > 1280 ? '23px' : '14px' }}
              >
                <HR style={{ marginBottom: '2em' }} />
                Our approach blends polypharmacological strategies
                <br /> with a belief in multi-modal management for these conditions.
                <br />
                <br />
                While pioneering work in this area has its challenges and risks,
                <br />
                the urgent need for solutions in neurodegenerative diseases propels us forward.
                <br />
                Alongside our partners, we utilize AI and digital tools to support patients
                <br />
                and deepen our understanding of these disorders.
              </Text>
              <ContentWrap
                style={{
                  justifySelf: 'end',
                  flexDirection: 'row',
                  padding: '0 0 0 33%',
                  justifyContent: 'space-between',
                  gap: '2em',
                }}
              >
                <Text
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: window.innerWidth > 1280 ? '260px' : '158px',
                    marginBottom: '0',
                    borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                    gap: '1em',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/openinnovation/digitalhealth')}
                >
                  <span
                    style={{
                      zIndex: '-1',
                      fontSize: window.innerWidth > 1280 ? '20px' : '11px',
                      lineHeight: window.innerWidth > 1280 ? '2.5em' : '3em',
                    }}
                  >
                    Digital Health
                  </span>
                  <Image
                    src={arrow}
                    alt="arrow"
                    style={{
                      height: window.innerWidth > 1280 ? '14px' : '12px',

                      zIndex: '-1',
                    }}
                  />
                </Text>
                <Text
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: window.innerWidth > 1280 ? '260px' : '158px',
                    padding: '0',
                    marginBottom: '0',
                    borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                    gap: '1em',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/openinnovation/memoreproject')}
                >
                  <span
                    style={{
                      zIndex: '-1',
                      fontSize: window.innerWidth > 1280 ? '20px' : '11px',
                      lineHeight: window.innerWidth > 1280 ? '2.5em' : '3em',
                    }}
                  >
                    Memo:Re Project
                  </span>
                  <Image
                    src={arrow}
                    alt="arrow"
                    style={{
                      height: window.innerWidth > 1280 ? '14px' : '12px',

                      zIndex: '-1',
                    }}
                  />
                </Text>
              </ContentWrap>
            </TextWrap>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          {/* <Image
            style={{
              position: 'absolute',
              top: '45vh',
              left: '-60vw',
              width: '200%',
              height: 'auto',
              opacity: '0.5',
              zIndex: '10',
            }}
            src={openinnovation_middle1}
            alt="intro_bg"
          /> */}
          <HomeComponentWrap
            style={{
              backgroundColor: 'transparent',
              // height: '120vh',
              overflow: 'hidden',
            }}
          >
            <TextWrap style={{ width: '100%', position: 'relative', backgroundColor: 'transparent' }}>
              <Text $color="#939598" $fontSize="16px" $fontWeight="300">
                OPEN INNOVATION
              </Text>
              <Text $fontSize="23px" $fontWeight="500" style={{ lineHeight: '26px' }}>
                AriBio is dedicated to
                <br /> driving advancements in
                <br /> neurodegenerative diseases.
              </Text>
              <hr
                style={{ width: '20px', borderTop: '1px solid #ffffff', borderBottom: 'none', margin: '0 0 2em 0' }}
              />
              <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{ width: '100%', lineHeight: '21px' }}>
                Our foundation is the ARIDD platform,
                <br />
                designed for multi-mechanism drugs,
                <br />
                and we’re strengthened by
                <br />
                our commitment to open innovation.
                <br />
                We actively collaborate with innovative
                <br />
                companies around the world,
                <br />
                aiming to create impactful solutions
                <br />
                for these challenging diseases.
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{
              minHeight: 'fit-content',
              padding: '0 0',
              margin: '0',
              marginTop: '0',
              display: 'flex',
            }}
          >
            <Image
              src={openinnovation_middle2}
              alt="openinnovation_middle2"
              style={{ width: '65vw', marginTop: '5em', alignSelf: 'start' }}
            />
            <TextWrap
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                padding: '1em 5vw',
                marginTop: '8em',
              }}
            >
              <Text
                $fontWeight="300"
                $align="start"
                style={{
                  paddingLeft: '15vw',
                  marginBottom: '10em',
                  lineHeight: '20px',
                  color: '#D3D3D3',
                  fontSize: '16px',
                }}
              >
                <HR style={{ marginBottom: '2em', height: '1px', width: '20px' }} />
                Our approach blends polypharma
                <br />
                cological strategies with a belief in
                <br />
                multi-modal management for these
                <br />
                conditions.
                <br />
                <br />
                While pioneering work in this area
                <br />
                has its challenges and risks, the
                <br />
                urgent need for solutions in
                <br />
                neurodegenerative diseases propels
                <br />
                us forward. Alongside our partners,
                <br />
                we utilize AI and digital tools to
                <br />
                support patients and deepen our
                <br />
                understanding of these disorders.
              </Text>
              <ContentWrap
                style={{
                  display: 'flex',
                  justifySelf: 'end',
                  alignItems: 'end',
                  flexDirection: 'column',
                  padding: '0 0 10em 33%',
                }}
              >
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
                    width: '60vw',
                    height: '2.5em',
                    paddingBottom: '0',
                    borderBottom: '1px solid #ffffff',
                    marginBottom: '0',
                  }}
                  onClick={() => navigate('/openinnovation/digitalhealth')}
                >
                  <span style={{ zIndex: '-1', fontSize: '16px' }}>Digital Health</span>
                  <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
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
                    width: '60vw',
                    height: '2.5em',
                    paddingBottom: '0',
                    borderBottom: '1px solid #ffffff',
                  }}
                  onClick={() => navigate('/openinnovation/memoreproject')}
                >
                  <span style={{ zIndex: '-1', fontSize: '16px' }}>Memo:Re Project</span>
                  <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
                </Text>
              </ContentWrap>
            </TextWrap>
          </HomeComponentWrap>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default OpenInnovation;
