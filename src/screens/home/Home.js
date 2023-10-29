import React, { useEffect, useState } from 'react';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideSlider from '../../components/SideSlider';
import SubPageButton from '../../components/buttons/SubPageButton';
import home_ourapproach1 from './assets/home_ourapproach1.png';
import home_ourapproach2 from './assets/home_ourapproach2.png';
import home_ourapproach3 from './assets/home_ourapproach3.png';
import home_mediakit_video from './assets/home_mediakit_video.png';
import home_notice1 from './assets/home_notice1.png';

import {
  Container,
  MainImgWrap,
  MainImgTextWrap,
  ContainerGridLineWrap,
  GridLineBox,
  HeadLineText,
  HomeComponentWrap,
  HomeAboutUsTextWrap,
  HomeComponentImageWrap,
  ComponentGridWrap,
  ComponentTextWrap,
  ComponentText,
  FilterShadow,
} from './style';

import useNoticeList from '../../hooks/irpr/useNoticeList';
import Language from '../../atom/Language';
import { useRecoilValue } from 'recoil';
import Video from '../../components/Video';

const Home = () => {
  const language = useRecoilValue(Language);
  const [scrollY, setScrollY] = useState(0);
  const { data, isLoading, refetch } = useNoticeList('', language, 1);
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    if (data?.data?.success) {
      const list = data.data.data.noticeDtoList.map((item, index) => {
        if (index < 3) {
          return {
            id: item.id,
            date: `${item.year}.${item.month}.${item.day}`,
            mobileDate: `${item.month} ${item.day}, ${item.year}`,
            title: item.title,
            imageUrl: item.fileDto?.fileUrl ? item.fileDto?.fileUrl : home_notice1,
          };
        }
      });
      setNoticeList(list.slice(0, 3));
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <>
      <Container className="container">
        <Header />

        <Video page="home" />
        <MainImgWrap>
          <SideSlider />
          <ContainerGridLineWrap className="grid_bg">
            <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
            <GridLineBox />
            <GridLineBox />
          </ContainerGridLineWrap>
        </MainImgWrap>

        <Desktop>
          <HomeComponentWrap className="home home_1">
            <MainImgTextWrap style={{ height: '100vh' }}></MainImgTextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap className="home home_2">
            <HomeAboutUsTextWrap style={{ marginBottom: '5.5rem' }}>
              <HeadLineText id="target" $fontSize="60px">
                <span
                  className="highlight1"
                  style={{
                    color:
                      document.querySelector('.highlight1')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  AriBio Co., Ltd. is a biotechnology company
                </span>
                <br />
                <span
                  className="highlight2"
                  style={{
                    color:
                      document.querySelector('.highlight2')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  that aims to develop a meaningful therapies for
                </span>
                <br />
                <span
                  className="highlight3"
                  style={{
                    color:
                      document.querySelector('.highlight3')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  neurodegenerative diseases through its innovative platform ARIDD™{' '}
                </span>
                <span
                  className="highlight4"
                  style={{
                    color:
                      document.querySelector('.highlight4')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  (AI-powered, Reverse engineered & Integrated Drug Development) and Open Innovation.
                </span>
                <br />
              </HeadLineText>
            </HomeAboutUsTextWrap>
            <SubPageButton title="About Us" linkTo="/company/aboutus" />
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
                <SubPageButton title="Our Approach" linkTo="/ourapproach/poly-pharmacology" align="flex-start" />
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
                  Clinical, engineering and regulatory experts work integrally and seamlessly for fast clinical
                  realization.
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
                  We prioritize the clinical relevance of our robotic technologies and work diligently with our partners
                  to maximize their value through innovative and persistent clinical research collaborations.
                </ComponentText>
              </ComponentTextWrap>
            </ComponentGridWrap>
            <ComponentGridWrap style={{ alignItems: 'flex-end' }}>
              <HomeComponentImageWrap $src={home_ourapproach3}></HomeComponentImageWrap>
            </ComponentGridWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            className="home home_4"
            style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '0' }}
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
              <SubPageButton linkTo="/irpr/mediakit" title="IR & PR" />
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
              <SubPageButton linkTo="/irpr/notice" title="View all Notice" />
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
              {noticeList?.map((item, index) => (
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
        </Desktop>
        <Mobile>
          <HomeComponentWrap className="home home_1">
            <MainImgTextWrap style={{ height: '100vh' }}></MainImgTextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap className="home home_2">
            <HomeAboutUsTextWrap style={{ marginBottom: '5.5rem' }}>
              <HeadLineText $fontSize="23px">
                {' '}
                <span
                  className="highlight1"
                  style={{
                    color:
                      document.querySelector('.highlight1')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  AriBio Co., Ltd. is a biotechnology company
                </span>
                <br />
                <span
                  className="highlight2"
                  style={{
                    color:
                      document.querySelector('.highlight2')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  that aims to develop a meaningful therapies for
                </span>
                <br />
                <span
                  className="highlight3"
                  style={{
                    color:
                      document.querySelector('.highlight3')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  neurodegenerative diseases through its innovative platform ARIDD™
                </span>
                <span
                  className="highlight4"
                  style={{
                    color:
                      document.querySelector('.highlight4')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  (AI-powered, Reverse engineered & Integrated Drug Development)
                </span>
                <br />
                <span
                  className="highlight5"
                  style={{
                    color:
                      document.querySelector('.highlight5')?.getBoundingClientRect().top < window.innerHeight / 1.5
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  and Open Innovation.
                </span>
                <br />
              </HeadLineText>
            </HomeAboutUsTextWrap>
            <SubPageButton title="About Us" linkTo="/company/aboutus" />
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{
              display: 'grid',
              justifyContent: 'stretch',
            }}
            className="home home_3"
          >
            <SubPageButton title="Our Approach" linkTo="/ourapproach/poly-pharmacology" />
            <ComponentGridWrap>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'stretch',
                  alignItems: 'center',
                  gridColumn: '1/3',
                }}
              >
                <div style={{ width: '1px', height: '40px', backgroundColor: '#B1B1B1' }}></div>
                <ComponentTextWrap style={{}}>
                  <ComponentText style={{ fontWeight: '500' }}>Expansion Phase</ComponentText>
                  <ComponentText style={{ fontSize: '18px', fontWeight: '300', color: '#AFAFAF' }}>
                    Clinical development and Pipeline Extension
                  </ComponentText>
                </ComponentTextWrap>
              </div>
              <HomeComponentImageWrap $src={home_ourapproach1} style={{ borderRadius: '8px' }}></HomeComponentImageWrap>
            </ComponentGridWrap>
            <ComponentGridWrap>
              <HomeComponentImageWrap
                style={{
                  gridColumn: '1/1',
                  borderRadius: '8px',
                }}
                $src={home_ourapproach2}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'stretch',
                  alignItems: 'center',
                  gridColumn: '2/4',
                }}
              >
                <ComponentTextWrap style={{}}>
                  <ComponentText style={{ fontWeight: '500' }}>Expansion Phase</ComponentText>
                  <ComponentText style={{ fontSize: '18px', fontWeight: '300', color: '#AFAFAF' }}>
                    Clinical, engineering and regulatory experts work integrally and …
                  </ComponentText>
                </ComponentTextWrap>
                <div style={{ width: '1px', height: '60px', backgroundColor: '#B1B1B1' }}></div>
              </div>
            </ComponentGridWrap>
            <ComponentGridWrap>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'stretch',
                  alignItems: 'center',
                  gridColumn: '1/3',
                }}
              >
                <div style={{ width: '1px', height: '60px', backgroundColor: '#B1B1B1' }}></div>
                <ComponentTextWrap style={{}}>
                  <ComponentText style={{ fontWeight: '500' }}>Expansion Phase</ComponentText>
                  <ComponentText style={{ fontSize: '18px', fontWeight: '300', color: '#AFAFAF' }}>
                    We prioritize the relevance of our robotic technologies…
                  </ComponentText>
                </ComponentTextWrap>
              </div>
              <HomeComponentImageWrap style={{ borderRadius: '8px' }} $src={home_ourapproach1}></HomeComponentImageWrap>
            </ComponentGridWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            className="home home_4"
            style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '0' }}
          >
            <img style={{ margin: '5em 0' }} src={home_mediakit_video} alt="home_mediakit_video" />
            <ComponentText style={{ fontSize: '20px', fontWeight: '500', alignSelf: 'start', padding: '0.5rem 0' }}>
              Media Kit
            </ComponentText>

            <ComponentText
              style={{ fontSize: '18px', fontWeight: '300', color: '#AFAFAF', alignSelf: 'start', padding: '0.5rem 0' }}
            >
              Clinical development and Pipeline
            </ComponentText>
            <div
              style={{ width: '100%', marginTop: '4rem', display: 'flex', alignItems: 'end', justifyContent: 'end' }}
            >
              <SubPageButton linkTo="/irpr/mediakit" title="IR & PR" />
            </div>
          </HomeComponentWrap>

          <HomeComponentWrap
            className="home home_5"
            style={{
              display: 'grid',
              minHeight: 'fit-content',
              justifyContent: 'space-between',
              margin: '12vh 0',
              gap: '2rem',
            }}
          >
            <div
              style={{
                display: 'grid',

                alignItems: 'start',
                justifyContent: 'start',
                width: '100%',
              }}
            >
              <ComponentText style={{ fontSize: '20px', fontWeight: '500', alignSelf: 'start', padding: '0.5em 0' }}>
                Notice
              </ComponentText>
              <ComponentText style={{ fontSize: '18px', fontWeight: '300', color: '#AFAFAF', padding: '0.5em 0' }}>
                Clinical development and Pipeline
              </ComponentText>
            </div>

            {noticeList?.map((item, index) => (
              <ComponentGridWrap
                key={index}
                style={{
                  padding: '0',
                  gridTemplateColumns: '1fr',
                  width: '90vw',
                  height: '82px',
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
                    gap: '0.5rem',
                    padding: '1rem',
                    fontWeight: '300',
                    position: 'relative',
                    borderRadius: '10px',
                  }}
                >
                  <FilterShadow />
                  <p style={{ position: 'relative', fontSize: '15px', color: '#D1D1D1' }}>{item.mobileDate}</p>
                  <p style={{ position: 'relative', fontSize: '16px', color: '#E5E5E5', lineHeight: '20px' }}>
                    {item.title.slice(0, 60)}...
                  </p>
                </HomeComponentImageWrap>
              </ComponentGridWrap>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', marginTop: '5rem' }}>
              <SubPageButton linkTo="/irpr/notice" title="View all Notice" />
            </div>
          </HomeComponentWrap>
        </Mobile>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
