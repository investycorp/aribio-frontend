import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import ContainerHeight from '../../atom/ContainerHeight';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideSlider from '../../components/SideSlider';
import GoToTop from '../../components/buttons/GoToTop';
import SubPageButton from '../../components/buttons/SubPageButton';
import ourapproach1 from '../../assets/images/home/ourapproach1.png';
import notice from '../../assets/images/home/notice.jpeg';
import homemain from '../../assets/images/home/homemain.png';
import {
  Container,
  MainImgWrap,
  ContainerGridLineWrap,
  GridLineBox,
  HeadLineTitle,
  HeadLineText,
  HomeComponentWrap,
  HomeAboutUsTextWrap,
  HomeComponentImageWrap,
  ComponentGridWrap,
  ComponentTextWrap,
  ComponentText,
  HomeVideoWrap,
} from './style';
import GetContainerHeight from '../../utils/GetContainerHeight';

const Home = () => {
  const [containerHeight, setContainerHeight] = useRecoilState(ContainerHeight);
  const [noticeList, setNoticeList] = useState([
    { date: '2023.07.26', title: '[AP News]AriBio Co., Ltd. Announces the Successful Completion', imageUrl: notice },
    { date: '2023.07.26', title: '[AP News]AriBio Co., Ltd. Announces the Successful Completion', imageUrl: notice },
    { date: '2023.07.26', title: '[AP News]AriBio Co., Ltd. Announces the Successful Completion', imageUrl: notice },
  ]);

  GetContainerHeight();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //   });
  //   return () => {
  //     window.removeEventListener('resize', () => {
  //       setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //     });
  //   };
  // }, []);

  return (
    <Container className="container">
      <ContainerGridLineWrap $height={containerHeight}>
        <GridLineBox style={{ borderLeft: '2px solid #5d5d5d' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <SideSlider />
      <MainImgWrap
        style={{
          backgroundImage: `url(${homemain})`,
        }}
      >
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
        <SubPageButton title="About Us" linkTo="aboutus" />
      </HomeComponentWrap>
      <HomeComponentWrap
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          marginBottom: '10vh',
        }}
      >
        <ComponentGridWrap
          style={{
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: '0', left: '0' }}>
            <SubPageButton title="Our Approach" linkTo="ourapproach" align="flex-start" />
          </div>
          <ComponentTextWrap
            style={{
              borderLeft: '2px solid #B1B1B1',
            }}
          >
            <ComponentText style={{ fontSize: '60px', fontWeight: '500' }}>Expansion Phase</ComponentText>
            <ComponentText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
              Clinical development and Pipeline Extension
            </ComponentText>
          </ComponentTextWrap>
        </ComponentGridWrap>
        <ComponentGridWrap style={{ alignItems: 'flex-end' }}>
          <HomeComponentImageWrap
            style={{
              backgroundImage: `url(${ourapproach1})`,
            }}
          ></HomeComponentImageWrap>
        </ComponentGridWrap>
        <ComponentGridWrap>
          <HomeComponentImageWrap
            style={{
              backgroundImage: `url(${ourapproach1})`,
            }}
          ></HomeComponentImageWrap>
        </ComponentGridWrap>
        <ComponentGridWrap>
          <ComponentTextWrap
            style={{
              borderRight: '2px solid #B1B1B1',
            }}
          >
            <ComponentText style={{ fontSize: '60px', fontWeight: '500' }}>Expansion Phase</ComponentText>
            <ComponentText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
              Clinical, engineering and regulatory experts work integrally and seamlessly for fast clinical realization.
            </ComponentText>
          </ComponentTextWrap>
        </ComponentGridWrap>
        <ComponentGridWrap>
          <ComponentTextWrap
            style={{
              borderLeft: '2px solid #B1B1B1',
            }}
          >
            <ComponentText style={{ fontSize: '60px', fontWeight: '500' }}>Expansion Phase</ComponentText>
            <ComponentText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
              We prioritize the clinical relevance of our robotic technologies and work diligently with our partners to
              maximize their value through innovative and persistent clinical research collaborations.
            </ComponentText>
          </ComponentTextWrap>
        </ComponentGridWrap>
        <ComponentGridWrap style={{ alignItems: 'flex-end' }}>
          <HomeComponentImageWrap
            style={{
              backgroundImage: `url(${ourapproach1})`,
            }}
          ></HomeComponentImageWrap>
        </ComponentGridWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ minHeight: 'fit-content' }}>
        <HomeVideoWrap />
      </HomeComponentWrap>
      <HomeComponentWrap style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '12vh 0' }}>
        <ComponentText style={{ fontSize: '60px', fontWeight: '500', alignSelf: 'start' }}>Media Kit</ComponentText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <ComponentText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
            Clinical development and Pipeline Extension
          </ComponentText>
          <SubPageButton linkTo="irpr" title="IR & PR" />
        </div>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '12vh 0' }}>
        <ComponentText style={{ fontSize: '60px', fontWeight: '500', alignSelf: 'start' }}>Notice</ComponentText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <ComponentText style={{ fontSize: '28px', fontWeight: '300', color: '#AFAFAF' }}>
            Clinical development and Pipeline Extension
          </ComponentText>
          <SubPageButton linkTo="notice" title="View all Notice" />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gridTemplateRows: '1fr 1fr',
            margin: '10vh',
            width: '100%',
            height: '28.7vw',
            gap: '1rem',
          }}
        >
          {noticeList.map((item, index) => (
            <ComponentGridWrap
              key={index}
              style={{
                gridRow: index === 0 ? '1/3' : 'auto',
                padding: '0',
              }}
            >
              <HomeComponentImageWrap
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  gap: '2rem',
                  padding: '3em 3em',
                  fontWeight: '300',
                }}
              >
                <p style={{ fontSize: '22px', color: '#D1D1D1' }}>{item.date}</p>
                <p style={{ fontSize: '26px', color: '#E5E5E5', lineHeight: '1.3em' }}>{item.title}</p>
              </HomeComponentImageWrap>
            </ComponentGridWrap>
          ))}

          {/* <ComponentGridWrap style={{ gridRow: '1/3', padding: '0' }}>
            <HomeComponentImageWrap
              style={{
                backgroundImage: `url(${notice})`,
              }}
            >
              1111
            </HomeComponentImageWrap>
          </ComponentGridWrap>
          <ComponentGridWrap style={{ padding: '0' }}>
            <HomeComponentImageWrap
              style={{
                backgroundImage: `url(${notice})`,
                width: '100%',
                height: '100%',
              }}
            >
              2222
            </HomeComponentImageWrap>
          </ComponentGridWrap>
          <ComponentGridWrap style={{ padding: '0' }}>
            <HomeComponentImageWrap
              style={{
                backgroundImage: `url(${notice})`,
                width: '100%',
                height: '100%',
              }}
            >
              3333
            </HomeComponentImageWrap>
          </ComponentGridWrap> */}
        </div>
      </HomeComponentWrap>
      <GoToTop />
      <Footer />
    </Container>
  );
};

export default Home;
