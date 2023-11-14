import React, { useEffect, useState } from 'react';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideSlider from '../../components/SideSlider';
import SubPageButton from '../../components/buttons/SubPageButton';
import home_ourapproach1 from './assets/home_ourapproach1.png';
import home_ourapproach2 from './assets/home_ourapproach2.png';
import home_ourapproach3 from './assets/home_ourapproach3.png';
import home_notice1 from './assets/home_notice1.png';

import Modal from '../../components/Modal';

import { useTranslation, Trans } from 'react-i18next';

import {
  Container,
  MainImgTextWrap,
  HeadLineText,
  HomeComponentWrap,
  HomeAboutUsTextWrap,
  HomeComponentImageWrap,
  ComponentGridWrap,
  ComponentTextWrap,
  ComponentText,
  FilterShadow,
} from './style';
import { ContainerGridLineWrap, GridLineBox } from '../../components/style';

import useNoticeList from '../../hooks/irpr/useNoticeList';
import Language from '../../atom/Language';
import { useRecoilState } from 'recoil';
import Video from '../../components/Video';
import VideoFrame from '../../components/VideoFrame';
import usePopup from '../../hooks/popup/usePopup';

const Home = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useRecoilState(Language);
  const [scrollY, setScrollY] = useState(0);
  const { data, isLoading, refetch } = useNoticeList('', language, 1);
  const { data: popupData } = usePopup(language);
  const [noticeList, setNoticeList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    if (data?.data?.success) {
      const list = data.data.data.noticeDtoList.map((item, index) => {
        if (index < 3) {
          return {
            id: item.id,
            date: `${item.year}.${item.month}.${item.day}`,
            mobileDate: `${item.month} ${item.day}, ${item.year}`,
            title: item.title,
            imageUrl: item.fileDto?.fileUrl ? item?.fileDto?.fileUrl : home_notice1,
          };
        }
      });
      setNoticeList(list.slice(0, 3));
    }
    if (popupData?.data?.success) {
      if (popupData?.data?.dataList.length > 0) {
        setModalOpen(true);
        setModalData(popupData.data.dataList);
      }
    }
  }, [data]);

  useEffect(() => {
    console.log('Language');
    refetch();
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
      let elementToHide = document.getElementById('hide');
      let scrollPosition = window.scrollY;
      if (window.innerWidth <= 900 && elementToHide) {
        if (
          (scrollPosition >= 0 && scrollPosition <= 0.3 * window.innerHeight) ||
          (scrollPosition >= window.innerHeight && scrollPosition <= 1.3 * window.innerHeight)
        ) {
          elementToHide.style.display = 'grid';
        } else {
          elementToHide.style.display = 'none';
        }
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <>
      <Container className="container">
        <Header />

        <Video
          page="home"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0100PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0200PB_VD.mp4'
              : window.innerWidth > window.innerHeight
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0200PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0300PB_VD.mp4'
          }
        />
        <SideSlider />
        {/* {modalOpen && <Modal setModalOpen={setModalOpen} modalData={modalData} />} */}

        <div style={{ margin: '0', padding: '0', position: 'relative' }}>
          <ContainerGridLineWrap className="grid_bg">
            <GridLineBox />
            <GridLineBox />
            <GridLineBox />
          </ContainerGridLineWrap>

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
                    {t('home.aboutus.1')}
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
                    {t('home.aboutus.2')}
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
                    {t('home.aboutus.3')}
                    {window.innerWidth < 1281 && <br />}
                    {t('home.aboutus.4')}
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
                    {t('home.aboutus.5')} {window.innerWidth < 1281 && <br />}
                    {t('home.aboutus.6')}
                    {window.innerWidth < 1281 && <br />}
                    {`\t`}
                    {t('home.aboutus.7')}
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '2px',
                      height: window.innerWidth > 1280 ? '200px' : '100px',
                      backgroundColor: '#B1B1B1',
                    }}
                  ></div>
                  <ComponentTextWrap style={{ padding: window.innerWidth > 1280 ? '2rem 5rem' : '1rem 3rem' }}>
                    <ComponentText style={{ fontSize: window.innerWidth > 1280 ? '60px' : '30px', fontWeight: '500' }}>
                      {t('home.ourapproach.expansion_phase')}
                    </ComponentText>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '28px' : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}
                    >
                      {t('home.ourapproach.1')}
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
              </ComponentGridWrap>

              <ComponentGridWrap style={{ alignItems: 'flex-end' }}>
                <HomeComponentImageWrap $src={home_ourapproach1}></HomeComponentImageWrap>
              </ComponentGridWrap>
              <ComponentGridWrap>
                <HomeComponentImageWrap $src={home_ourapproach2}></HomeComponentImageWrap>
              </ComponentGridWrap>
              <ComponentGridWrap>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <ComponentTextWrap style={{}}>
                    <ComponentText style={{ fontSize: window.innerWidth > 1280 ? '60px' : '30px', fontWeight: '500' }}>
                      {t('home.ourapproach.expansion_phase')}
                    </ComponentText>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '28px' : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}
                    >
                      {t('home.ourapproach.2')}
                    </ComponentText>
                  </ComponentTextWrap>
                  <div
                    style={{
                      width: '2px',
                      height: window.innerWidth > 1280 ? '200px' : '100px',
                      backgroundColor: '#B1B1B1',
                    }}
                  ></div>
                </div>
              </ComponentGridWrap>
              <ComponentGridWrap>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '2px',
                      height: window.innerWidth > 1280 ? '200px' : '100px',
                      backgroundColor: '#B1B1B1',
                    }}
                  ></div>
                  <ComponentTextWrap style={{}}>
                    <ComponentText style={{ fontSize: window.innerWidth > 1280 ? '60px' : '30px', fontWeight: '500' }}>
                      {t('home.ourapproach.expansion_phase')}
                    </ComponentText>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '28px' : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}
                    >
                      {t('home.ourapproach.3')}
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
              </ComponentGridWrap>
              <ComponentGridWrap style={{ alignItems: 'flex-end' }}>
                <HomeComponentImageWrap $src={home_ourapproach3}></HomeComponentImageWrap>
              </ComponentGridWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_4"
              style={{
                minHeight: 'fit-content',
                justifyContent: 'space-between',
                margin: '0',
              }}
            >
              <VideoFrame
                src={
                  language === 'ENG'
                    ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR100.mp4'
                    : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR1001_script.mp4'
                }
              />
              <ComponentText
                style={{
                  fontSize: window.innerWidth > 1280 ? '60px' : '36px',
                  fontWeight: '500',
                  alignSelf: 'start',
                  marginTop: '3em',
                }}
              >
                {t('home.media_kit.title')}
              </ComponentText>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <ComponentText
                  style={{ fontSize: window.innerWidth > 1280 ? '28px' : '16px', fontWeight: '300', color: '#AFAFAF' }}
                >
                  {t('home.media_kit.content')}
                </ComponentText>
                <SubPageButton linkTo="/irpr/mediakit" title="IR & PR" />
              </div>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_5"
              style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '12vh 0 0 0' }}
            >
              <ComponentText
                style={{ fontSize: window.innerWidth > 1280 ? '60px' : '36px', fontWeight: '500', alignSelf: 'start' }}
              >
                {t('home.notice.title')}
              </ComponentText>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <ComponentText
                  style={{ fontSize: window.innerWidth > 1280 ? '28px' : '16px', fontWeight: '300', color: '#AFAFAF' }}
                >
                  {t('home.notice.content')}
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
                  columnGap: '0',
                  rowGap: '1rem',
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
                        width: 'auto',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        gap: '2rem',
                        padding: window.innerWidth > 1280 ? '3em 3em' : '2em 3em',
                        marginLeft: index === 0 ? '0' : '1rem',
                        fontWeight: '300',
                        position: 'relative',
                      }}
                    >
                      <FilterShadow />
                      <p
                        style={{
                          position: 'relative',
                          fontWeight: '300',
                          fontSize: window.innerWidth > 1280 ? '22px' : '12px',
                          color: '#D1D1D1',
                        }}
                      >
                        {item.date}
                      </p>
                      <p
                        style={{
                          position: 'relative',
                          fontWeight: '400',
                          fontSize: window.innerWidth > 1280 ? '26px' : '15px',
                          color: '#E5E5E5',
                          lineHeight: '1.3em',
                        }}
                      >
                        {item.title.slice(0, 70) + '...'}
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
                <HeadLineText $fontSize="23px" style={{ fontWeight: '400' }}>
                  <span
                    className="highlight1"
                    style={{
                      color:
                        document.querySelector('.highlight1')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    AriBio Co., Ltd.
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
                    is a biotechnology
                    <br /> company that aims to develop
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
                    a meaningful therapies for neurodegenerative diseases
                    <br />
                    through its innovative platform
                  </span>
                  <br />
                  <span
                    className="highlight4"
                    style={{
                      color:
                        document.querySelector('.highlight4')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    ARIDD™ (AI-powered, Reverse <br /> engineered & Integrated
                    <br /> Drug Development)
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
                  <div style={{ width: '1px', height: '60px', backgroundColor: '#B1B1B1' }}></div>
                  <ComponentTextWrap style={{}}>
                    <ComponentText style={{ fontWeight: '500' }}>Expansion Phase</ComponentText>
                    <ComponentText style={{ fontSize: '18px', fontWeight: '300', color: '#AFAFAF' }}>
                      Clinical development and Pipeline Extension
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
                <HomeComponentImageWrap
                  $src={home_ourapproach1}
                  style={{ borderRadius: '8px' }}
                ></HomeComponentImageWrap>
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
                <HomeComponentImageWrap
                  style={{ borderRadius: '8px' }}
                  $src={home_ourapproach1}
                ></HomeComponentImageWrap>
              </ComponentGridWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_4"
              style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '0' }}
            >
              <VideoFrame
                src={
                  language === 'ENG'
                    ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR100.mp4'
                    : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR1001_script.mp4'
                }
              />
              <ComponentText
                style={{
                  fontSize: '20px',
                  fontWeight: '500',
                  alignSelf: 'start',
                  padding: '0.5rem 0',
                  marginTop: '38px',
                }}
              >
                Media Kit
              </ComponentText>

              <ComponentText
                style={{
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#AFAFAF',
                  alignSelf: 'start',
                  padding: '0.5rem 0',
                }}
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
                paddingBottom: '8em',
                margin: '10vh 0 0 0',
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
                    height: '92px',
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
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
