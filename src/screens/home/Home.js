import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Container,
  MainImgWrap,
  ContainerGridLineWrap,
  GridLineBox,
  HeadLineTitle,
  HeadLineText,
  HomeComponentWrap,
  HomeAboutUsTextWrap,
  OurApproachImageWrap,
  OurApproachGridWrap,
  OurApproachTextWrap,
  OurApproachText,
  HomeVideoWrap,
} from './style';
import SideSlider from '../../components/SideSlider';
import GoToTop from '../../components/buttons/GoToTop';
import SubPageButton from '../../components/buttons/SubPageButton';
import ourapproach1 from '../../assets/images/home/ourapproach1.png';

const Home = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    setContainerHeight(document.getElementsByClassName('container')[0].clientHeight);
    console.log(document.getElementsByClassName('container')[0].clientHeight);
  }, []);
  return (
    <Container className="container">
      <ContainerGridLineWrap $height={containerHeight}>
        <GridLineBox style={{ borderLeft: '2px solid #5d5d5d' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <SideSlider />
      <MainImgWrap>
        <HeadLineTitle>OVERCOME</HeadLineTitle>
        <HeadLineTitle style={{ marginBottom: '2rem' }}>NEURODEGENERATION</HeadLineTitle>
        <HeadLineText>We keep striving to develop new therapeutic agents for</HeadLineText>
        <HeadLineText>neurodegenerative diseases hitherto.</HeadLineText>
      </MainImgWrap>
      <HomeComponentWrap>
        <HomeAboutUsTextWrap style={{ marginBottom: '5.5rem' }}>
          <HeadLineText $fontSize="60px">AriBio Co., Ltd. is a biotechnology company</HeadLineText>
          <HeadLineText $fontSize="60px">that aims to develop a meaningful therapies for </HeadLineText>
          <HeadLineText $fontSize="60px" $textColor="#B1B1B1">
            neurodegenerative diseases through its innovative platform ARIDD™ (AI-powered, Reverse engineered &
            Integrated Drug Development) and Open Innovation.
          </HeadLineText>
        </HomeAboutUsTextWrap>
        <SubPageButton linkTo="About Us" />
      </HomeComponentWrap>
      <HomeComponentWrap
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          marginBottom: '10vh',
        }}
      >
        <OurApproachGridWrap
          style={{
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: '0', left: '0' }}>
            <SubPageButton linkTo="Our Approach" align="flex-start" />
          </div>
          <OurApproachTextWrap
            style={{
              borderLeft: '2px solid #B1B1B1',
            }}
          >
            <OurApproachText style={{ fontSize: '60px', fontWeight: '500' }}>Expansion Phase</OurApproachText>
            <OurApproachText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
              Clinical development and Pipeline Extension
            </OurApproachText>
          </OurApproachTextWrap>
        </OurApproachGridWrap>
        <OurApproachGridWrap style={{ alignItems: 'flex-end' }}>
          <OurApproachImageWrap
            style={{
              backgroundImage: `url(${ourapproach1})`,
            }}
          ></OurApproachImageWrap>
        </OurApproachGridWrap>
        <OurApproachGridWrap>
          <OurApproachImageWrap
            style={{
              backgroundImage: `url(${ourapproach1})`,
            }}
          ></OurApproachImageWrap>
        </OurApproachGridWrap>
        <OurApproachGridWrap>
          <OurApproachTextWrap
            style={{
              borderRight: '2px solid #B1B1B1',
            }}
          >
            <OurApproachText style={{ fontSize: '60px', fontWeight: '500' }}>Expansion Phase</OurApproachText>
            <OurApproachText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
              Clinical, engineering and regulatory experts work integrally and seamlessly for fast clinical realization.
            </OurApproachText>
          </OurApproachTextWrap>
        </OurApproachGridWrap>
        <OurApproachGridWrap>
          <OurApproachTextWrap
            style={{
              borderLeft: '2px solid #B1B1B1',
            }}
          >
            <OurApproachText style={{ fontSize: '60px', fontWeight: '500' }}>Expansion Phase</OurApproachText>
            <OurApproachText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
              We prioritize the clinical relevance of our robotic technologies and work diligently with our partners to
              maximize their value through innovative and persistent clinical research collaborations.
            </OurApproachText>
          </OurApproachTextWrap>
        </OurApproachGridWrap>
        <OurApproachGridWrap style={{ alignItems: 'flex-end' }}>
          <OurApproachImageWrap
            style={{
              backgroundImage: `url(${ourapproach1})`,
            }}
          ></OurApproachImageWrap>
        </OurApproachGridWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ minHeight: 'fit-content' }}>
        <HomeVideoWrap />
      </HomeComponentWrap>
      <HomeComponentWrap style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '12vh 0' }}>
        <OurApproachText style={{ fontSize: '60px', fontWeight: '500', alignSelf: 'start' }}>Media Kit</OurApproachText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <OurApproachText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
            Clinical development and Pipeline Extension
          </OurApproachText>
          <SubPageButton linkTo="IR & PR" />
        </div>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '12vh 0' }}>
        <OurApproachText style={{ fontSize: '60px', fontWeight: '500', alignSelf: 'start' }}>Notice</OurApproachText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <OurApproachText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
            Clinical development and Pipeline Extension
          </OurApproachText>
          <SubPageButton linkTo="View all Notice" />
        </div>
      </HomeComponentWrap>

      <GoToTop />
      <Footer />
    </Container>
  );
};

export default Home;
