import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideSlider from '../../components/SideSlider';
import SubPageButton from '../../components/buttons/SubPageButton';
import home_cover from './assets/home_cover.png';
import home_ourapproach1 from './assets/home_ourapproach1.png';
import home_ourapproach2 from './assets/home_ourapproach2.png';
import home_ourapproach3 from './assets/home_ourapproach3.png';
import home_mediakit_video from './assets/home_mediakit_video.png';
import home_notice1 from './assets/home_notice1.png';
import home_notice2 from './assets/home_notice2.png';
import home_notice3 from './assets/home_notice3.png';
import {
  Container,
  MainImgWrap,
  MainImgTextWrap,
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
  FilterShadow,
} from './style';

const Home = () => {
  const [noticeList, setNoticeList] = useState([
    {
      date: '2023.07.26',
      title: '[AP News]AriBio Co., Ltd. Announces the Successful Completion',
      imageUrl: home_notice1,
    },
    {
      date: '2023.07.26',
      title: '[AP News]AriBio Co., Ltd. Announces the Successful Completion',
      imageUrl: home_notice2,
    },
    {
      date: '2023.07.26',
      title: '[AP News]AriBio Co., Ltd. Announces the Successful Completion',
      imageUrl: home_notice3,
    },
  ]);

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
      <SideSlider />
      <MainImgWrap className="home home_1" $src={home_cover}>
        <MainImgTextWrap>
          <HeadLineTitle>OVERCOME</HeadLineTitle>
          <HeadLineTitle style={{ marginBottom: '2rem' }}>NEURODEGENERATION</HeadLineTitle>
          <HeadLineText>We keep striving to develop new therapeutic agents for</HeadLineText>
          <HeadLineText>neurodegenerative diseases hitherto.</HeadLineText>
        </MainImgTextWrap>
      </MainImgWrap>
      <HomeComponentWrap className="home home_2">
        <HomeAboutUsTextWrap style={{ marginBottom: '5.5rem' }}>
          <HeadLineText $fontSize="60px">AriBio Co., Ltd. is a biotechnology company</HeadLineText>
          <HeadLineText $fontSize="60px">that aims to develop a meaningful therapies for </HeadLineText>
          <HeadLineText $fontSize="60px" $textColor="#B1B1B1">
            neurodegenerative diseases through its innovative platform ARIDD™ (AI-powered, Reverse engineered &
            Integrated Drug Development) and Open Innovation.
          </HeadLineText>
        </HomeAboutUsTextWrap>
        <SubPageButton title="About Us" linkTo="/aboutus" />
      </HomeComponentWrap>
      <HomeComponentWrap
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          marginBottom: '10vh',
        }}
        className="home home_3"
      >
        <ComponentGridWrap
          style={{
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: '0', left: '0' }}>
            <SubPageButton title="Our Approach" linkTo="poly-pharmacology" align="flex-start" />
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
          <HomeComponentImageWrap $src={home_ourapproach1}></HomeComponentImageWrap>
        </ComponentGridWrap>
        <ComponentGridWrap>
          <HomeComponentImageWrap $src={home_ourapproach2}></HomeComponentImageWrap>
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
          <HomeComponentImageWrap $src={home_ourapproach3}></HomeComponentImageWrap>
        </ComponentGridWrap>
      </HomeComponentWrap>
      <HomeComponentWrap
        className="home home_4"
        style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '12vh 0' }}
      >
        <img style={{ margin: '5em 0' }} src={home_mediakit_video} alt="home_mediakit_video" />
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
          <SubPageButton linkTo="notice" title="IR & PR" />
        </div>
      </HomeComponentWrap>
      <HomeComponentWrap
        className="home home_5"
        style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '12vh 0' }}
      >
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
                $src={item.imageUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  gap: '2rem',
                  padding: '3em 3em',
                  fontWeight: '300',
                  position: 'relative',
                }}
              >
                <FilterShadow />
                <p style={{ position: 'relative', fontSize: '22px', color: '#D1D1D1' }}>{item.date}</p>
                <p style={{ position: 'relative', fontSize: '26px', color: '#E5E5E5', lineHeight: '1.3em' }}>
                  {item.title}
                </p>
              </HomeComponentImageWrap>
            </ComponentGridWrap>
          ))}
        </div>
      </HomeComponentWrap>
      <Footer />
    </Container>
  );
};

export default Home;
