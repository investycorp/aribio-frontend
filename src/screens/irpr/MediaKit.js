import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from './../../assets/images/vertical_arrow.svg';
import irpr_mediakit_cover from './assets/irpr_mediakit_cover.png';
import irpr_mediakit_videopreviewimg from './assets/irpr_mediakit_videopreviewimg.png';

import { Container, HomeComponentWrap, TextWrap, Text, ComponentWrap, HR } from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import { Link } from 'react-router-dom';

const MediaKit = () => {
  const [itemsList, setItemsList] = useState([
    { title: 'AR1001 Polypharmacological Approach', date: '2023-08-12', link: '' },
    { title: 'AriBio Co.,LTD. Corporate promotional video 2020', date: '2023-07-06', link: '' },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <MainImgWrap $src={irpr_mediakit_cover}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <Header />
      <Path>{`HOME > IR & PR > MEDIA KIT`}</Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>MEDIA KIT</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>
      <>
        <Desktop>
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap style={{ width: '70vw' }}>
              <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                MEDIA KIT
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '8em',
                  borderRight: '2px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="400"
                $color="#ffffff"
                style={{ margin: '2rem 0 0 0' }}
              >
                We Deliver the Latest AriBio News.
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <ComponentWrap style={{ justifyContent: 'center', alignItems: 'center', padding: '0' }}>
              <img src={irpr_mediakit_videopreviewimg} alt="video preview" style={{ width: '100%' }} />
            </ComponentWrap>
            <ComponentWrap
              className="mediakit_item"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0',
                margin: '10vh 0',
              }}
            >
              {itemsList.map((item, index) => (
                <div
                  key={item.title + index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '2rem',
                    borderLeft: '2px solid #B1B1B1',
                  }}
                >
                  <Text
                    $align="start"
                    $fontWeight="300"
                    $color="#ffffff"
                    style={{ margin: '0 0 1rem 0', fontSize: window.innerWidth > 1280 ? '24px' : '18px', zIndex: '-1' }}
                  >
                    {item.title}
                  </Text>
                  <HR />
                  <Text
                    $align="start"
                    $fontWeight="300"
                    $color="#E3E3E3"
                    style={{ margin: '1rem 0 0 0', fontSize: window.innerWidth > 1280 ? '18px' : '14px', zIndex: '-1' }}
                  >
                    {item.date}
                  </Text>
                </div>
              ))}
            </ComponentWrap>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap style={{ width: '70vw' }}>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                MEDIA KIT
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '8em',
                  borderRight: '2px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                We Deliver the Latest AriBio News.
              </Text>
            </TextWrap>
          </HomeComponentWrap>

          <HomeComponentWrap>
            <ComponentWrap style={{ justifyContent: 'center', alignItems: 'center', padding: '0' }}>
              <img src={irpr_mediakit_videopreviewimg} alt="video preview" style={{ width: '100%' }} />
            </ComponentWrap>
            <ComponentWrap
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0',
                margin: '10vh 0',
                gap: '2rem',
              }}
            >
              {itemsList.map((item, index) => (
                <div
                  key={item.title + index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '1rem 2rem',
                    borderLeft: '2px solid #B1B1B1',
                  }}
                >
                  <Text
                    $align="start"
                    $fontSize="18px"
                    $fontWeight="300"
                    $color="#ffffff"
                    style={{ margin: '0 0 1rem 0' }}
                  >
                    {item.title}
                  </Text>

                  <Text $align="start" $fontSize="16px" $fontWeight="300" $color="#E3E3E3" style={{ margin: '0' }}>
                    {item.date}
                  </Text>
                </div>
              ))}
            </ComponentWrap>
          </HomeComponentWrap>
        </Mobile>
      </>

      <Footer />
    </Container>
  );
};

export default MediaKit;
