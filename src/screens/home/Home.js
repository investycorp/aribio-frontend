import React, { useEffect, useState } from 'react';
import browser from 'browser-detect';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideSlider from '../../components/SideSlider';
import SubPageButton from '../../components/buttons/SubPageButton';
import home_ourapproach1 from './assets/home_ourapproach1.png';
import home_ourapproach2 from './assets/home_ourapproach2.png';
import home_ourapproach3 from './assets/home_ourapproach3.png';
import home_notice1 from './assets/home_notice1.png';
import home_desc_background from './assets/home_desc_background.png';

import Modal from '../../components/Modal';

import {useTranslation} from 'react-i18next';

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
  ImageBackground,
  MainImgWrap,
} from './style';

import useNoticeList from '../../hooks/irpr/useNoticeList';
import Language from '../../atom/Language';
import {useRecoilState} from 'recoil';
import Video from '../../components/Video';
import VideoFrame from '../../components/VideoFrame';
import usePopup from '../../hooks/popup/usePopup';
import {Image} from '../../components/style';

const Home = () => {
  const browserInfo = browser();
  const { t } = useTranslation();
  const [language, setLanguage] = useRecoilState(Language);
  const [scrollY, setScrollY] = useState(0);
  const {data, isLoading, refetch} = useNoticeList('', language, 1);
  const {data: popupData} = usePopup(language);
  const [noticeList, setNoticeList] = useState([]);
  const [modalOpen, setModalOpen] = useState();
  const [modalData, setModalData] = useState();
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    if (data?.data?.success) {
      const list = data.data.data.noticeDtoList.map((item, index) => {
        if (index < 3) {
          return {
            id: item.id,
            date: item.date.replaceAll('-', '.'),
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
      let elementToHide2 = document.getElementById('hide2');
      let scrollPosition = window.scrollY;
      if (window.innerWidth <= 900 && elementToHide) {
        if (
          elementToHide &&
          ((scrollPosition >= 0 && scrollPosition <= 0.3 * window.innerHeight) ||
            (scrollPosition >= 1.0 * window.innerHeight && scrollPosition <= 1.6 * window.innerHeight))
        ) {
          elementToHide.style.display = 'flex';
          elementToHide2.style.opacity = '1';
        } else {
          elementToHide.style.display = 'none';
          elementToHide2.style.opacity = '0';
        }
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVideoHeight(document.getElementById('video_container').offsetHeight);
    }, 300);
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
        {window.innerWidth > 900 && <SideSlider />}

        {<Modal />}

        <MainImgWrap style={{paddingBottom: 0}}>
          <Video
            page="aboutus"
            src={
              window.innerWidth > 1280
                ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0400PB_VD.mp4'
                : window.innerWidth > 900
                ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1300PB_VD.mp4'
                : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2200PB_VD.mp4'
            }
          />
        </MainImgWrap>

        <div style={{margin: '0', padding: '0', position: 'relative'}}>
          <Desktop>
            <HomeComponentWrap style={{height: '100vh'}} className="home home_1">
              <MainImgTextWrap style={{height: '100vh'}}></MainImgTextWrap>
            </HomeComponentWrap>
            <HomeComponentWrap className="home home_2">
              <HomeAboutUsTextWrap style={{height: '100vh', marginBottom: '5.5rem'}}>
                <HeadLineText id="target" $fontSize="48px">
                  <span
                    className="highlight1"
                    style={{
                      color:
                        document.querySelector('.highlight1')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                      fontWeight: '400',
                    }}>
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
                      fontWeight: '400',
                    }}>
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
                      fontWeight: '400',
                    }}>
                    {t('home.aboutus.3')}
                  </span>

                  <br />
                  <span
                    className="highlight4"
                    style={{
                      color:
                        document.querySelector('.highlight4')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                      fontWeight: '400',
                    }}>
                    {t('home.aboutus.4')}
                  </span>
                  <br />
                  <span
                    className="highlight4"
                    style={{
                      color:
                        document.querySelector('.highlight4')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                      fontWeight: '400',
                    }}>
                    {t('home.aboutus.5')}
                  </span>

                  <br />
                </HeadLineText>
                <SubPageButton
                  style={{
                    position: 'absolute',
                    bottom: '15vh',
                  }}
                  title="About Us"
                  linkTo="/company/aboutus"
                />
              </HomeAboutUsTextWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr 1fr',
                margin: '30vh 0 10vh 0',
              }}
              className="home home_3">
              <ComponentGridWrap
                style={{
                  position: 'relative',
                }}>
                <div style={{position: 'absolute', top: '0', left: '0'}}>
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
                  }}>
                  <div
                    style={{
                      width: '2px',
                      height: window.innerWidth > 1280 ? '200px' : '100px',
                      backgroundColor: '#B1B1B1',
                    }}
                  />
                  <ComponentTextWrap style={{padding: window.innerWidth > 1280 ? '2rem 5rem' : '1rem 3rem'}}>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '48px' : '30px',
                        fontWeight: '500',
                        marginBottom: 27,
                      }}>
                      {t('home.ourapproach.title_1')}
                    </ComponentText>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '28px' : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}>
                      {t('home.ourapproach.desc_1')}
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
              </ComponentGridWrap>

              <ComponentGridWrap style={{alignItems: 'flex-end'}}>
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
                  }}>
                  <ComponentTextWrap style={{}}>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '48px' : '30px',
                        fontWeight: '500',
                        marginBottom: 27,
                      }}>
                      {t('home.ourapproach.title_2')}
                    </ComponentText>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '28px' : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}>
                      {t('home.ourapproach.desc_2_1')}
                      <br />
                      {t('home.ourapproach.desc_2_2')}
                      <br />
                      {t('home.ourapproach.desc_2_3')}
                    </ComponentText>
                  </ComponentTextWrap>
                  <div
                    style={{
                      width: '2px',
                      height: window.innerWidth > 1280 ? '200px' : '100px',
                      backgroundColor: '#B1B1B1',
                    }}
                  />
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
                  }}>
                  <div
                    style={{
                      width: '2px',
                      height: window.innerWidth > 1280 ? '200px' : '100px',
                      backgroundColor: '#B1B1B1',
                    }}></div>
                  <ComponentTextWrap style={{}}>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '48px' : '30px',
                        fontWeight: '500',
                        marginBottom: 27,
                      }}>
                      {t('home.ourapproach.title_3')}
                    </ComponentText>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? '28px' : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}>
                      {t('home.ourapproach.desc_3')}
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
              </ComponentGridWrap>
              <ComponentGridWrap style={{alignItems: 'flex-end'}}>
                <HomeComponentImageWrap $src={home_ourapproach3}></HomeComponentImageWrap>
              </ComponentGridWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_4"
              style={{
                minHeight: 'fit-content',
                justifyContent: 'space-between',
                margin: '0',
              }}>
              <VideoFrame
                src={
                  language === 'ENG'
                    ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR100.mp4'
                    : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR1001_script.mp4'
                }
              />
              <ComponentText
                style={{
                  fontSize: window.innerWidth > 1280 ? '48px' : '36px',
                  fontWeight: '500',
                  alignSelf: 'start',
                  marginTop: '3em',
                  marginBottom: 27,
                }}>
                {t('home.media_kit.title')}
              </ComponentText>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <ComponentText
                  style={{fontSize: window.innerWidth > 1280 ? '28px' : '16px', fontWeight: '300', color: '#AFAFAF'}}>
                  {t('home.media_kit.content')}
                </ComponentText>
                <SubPageButton linkTo="/irpr/mediakit" title={t('home.media_kit.viewall')} />
              </div>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_5"
              style={{minHeight: 'fit-content', justifyContent: 'space-between', margin: '30vh 0'}}>
              <ComponentText
                style={{
                  fontSize: window.innerWidth > 1280 ? '48px' : '36px',
                  fontWeight: '500',
                  alignSelf: 'start',
                  marginBottom: 27,
                }}>
                {t('home.notice.title')}
              </ComponentText>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <ComponentText
                  style={{fontSize: window.innerWidth > 1280 ? '28px' : '16px', fontWeight: '300', color: '#AFAFAF'}}>
                  {t('home.notice.content')}
                </ComponentText>
                <SubPageButton linkTo="/irpr/notice" title={t('home.notice.viewall')} />
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
                }}>
                {noticeList?.map((item, index) => (
                  <ComponentGridWrap
                    key={index}
                    style={{
                      gridRow: index === 0 ? '1/3' : 'auto',
                      padding: '0',
                    }}>
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
                      }}>
                      <FilterShadow />
                      <p
                        style={{
                          position: 'relative',
                          fontWeight: '300',
                          fontSize: window.innerWidth > 1280 ? '22px' : '12px',
                          color: '#D1D1D1',
                        }}>
                        {item.date.toString()}
                      </p>
                      <p
                        style={{
                          position: 'relative',
                          fontWeight: '400',
                          fontSize: window.innerWidth > 1280 ? '26px' : '15px',
                          color: '#E5E5E5',
                          lineHeight: '1.3em',
                        }}>
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
              <MainImgTextWrap style={{height: videoHeight}}></MainImgTextWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_2"
              style={{
                height: '100vh',
              }}>
              <HomeAboutUsTextWrap>
                <HeadLineText fontSize="23px" style={{fontWeight: '400'}}>
                  <span
                    className="highlight1"
                    style={{
                      color:
                        document.querySelector('.highlight1')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.1')}
                  </span>
                  <br />
                  <span
                    className="highlight2"
                    style={{
                      color:
                        document.querySelector('.highlight2')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.2')}
                  </span>
                  <br />
                  <span
                    className="highlight3"
                    style={{
                      color:
                        document.querySelector('.highlight3')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.3')}
                  </span>
                  <br />
                  <span
                    className="highlight4"
                    style={{
                      color:
                        document.querySelector('.highlight4')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.4')}
                  </span>
                  <br />
                  <span
                    className="highlight5"
                    style={{
                      color:
                        document.querySelector('.highlight5')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.5')}
                  </span>
                  <br />
                  <span
                    className="highlight6"
                    style={{
                      color:
                        document.querySelector('.highlight6')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.6')}
                  </span>
                  <br />
                  <span
                    className="highlight7"
                    style={{
                      color:
                        document.querySelector('.highlight7')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.7')}
                  </span>
                  <br />
                  <span
                    className="highlight8"
                    style={{
                      color:
                        document.querySelector('.highlight8')?.getBoundingClientRect().top < window.innerHeight / 1.5
                          ? '#ffffff'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}>
                    {t('home_m.aboutus.8')}
                  </span>
                  <br />
                </HeadLineText>
                <SubPageButton
                  title="About Us"
                  linkTo="/company/aboutus"
                  style={{
                    position: 'absolute',
                    bottom: '25vh',
                  }}
                />
              </HomeAboutUsTextWrap>
              <img
                id="hide2"
                src={process.env.PUBLIC_URL + '/assets/icons/indicator2.svg'}
                alt="indocator2"
                style={{
                  width: '121px',
                  height: '16px',
                  zIndex: '110',
                  position: 'absolute',
                  bottom: '10vh',
                }}
              />
            </HomeComponentWrap>
            <HomeComponentWrap
              style={{
                display: 'grid',
                justifyContent: 'stretch',
                paddingTop: '10vh',
              }}
              className="home home_3">
              <SubPageButton title="Our Approach" linkTo="/ourapproach/poly-pharmacology" />
              <ComponentGridWrap style={{marginBottom: '88px', marginTop: '80px'}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'stretch',
                    alignItems: 'center',
                    gridColumn: '1/3',
                  }}>
                  <div style={{width: '1px', height: '48px', backgroundColor: '#B1B1B1'}}></div>
                  <ComponentTextWrap>
                    <ComponentText style={{fontWeight: '500'}}>{t('home_m.ourapproach.title_1')}</ComponentText>
                    <ComponentText style={{fontSize: '18px', fontWeight: '300', color: '#AFAFAF'}}>
                      {t('home_m.ourapproach.desc_1')}
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
                <HomeComponentImageWrap $src={home_ourapproach1} style={{borderRadius: '8px'}} />
              </ComponentGridWrap>
              <ComponentGridWrap style={{marginBottom: '88px'}}>
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
                  }}>
                  <ComponentTextWrap style={{}}>
                    <ComponentText style={{fontWeight: '500'}}> {t('home_m.ourapproach.title_2')}</ComponentText>
                    <ComponentText style={{fontSize: '18px', fontWeight: '300', color: '#AFAFAF'}}>
                      {t('home_m.ourapproach.desc_2')}
                    </ComponentText>
                  </ComponentTextWrap>
                  <div style={{width: '1px', height: '48px', backgroundColor: '#B1B1B1'}}></div>
                </div>
              </ComponentGridWrap>
              <ComponentGridWrap style={{marginBottom: '88px'}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'stretch',
                    alignItems: 'center',
                    gridColumn: '1/3',
                  }}>
                  <div style={{width: '1px', height: '48px', backgroundColor: '#B1B1B1'}}></div>
                  <ComponentTextWrap style={{}}>
                    <ComponentText style={{fontWeight: '500'}}> {t('home_m.ourapproach.title_3')}</ComponentText>
                    <ComponentText style={{fontSize: '18px', fontWeight: '300', color: '#AFAFAF'}}>
                      {t('home_m.ourapproach.desc_3')}
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
                <HomeComponentImageWrap style={{borderRadius: '8px'}} $src={home_ourapproach3}></HomeComponentImageWrap>
              </ComponentGridWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_4"
              style={{ minHeight: 'fit-content', justifyContent: 'space-between', margin: '0' }}
            >
              {browserInfo.name === 'safari' ? (
                  <video
                  playsInline
                  autoPlay={false}
                  controls={true}
                  style={{
                    borderRadius: '20px',
                    width: window.innerWidth > 900 ? '86vw' : '90vw',
                    height: window.innerWidth > 1280 ? '726px' : window.innerWidth > 900 ? '484px' : '50vw',
                  }}
                >
                  <source
                    src={
                      // src
                      "https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR100.mp4?autostart=false"
                    }
                    type="video/mp4"
                  />
              </video>
              ) : (
                <VideoFrame
                src={
                  language === 'ENG'
                    ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR100.mp4'
                    : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR1001_script.mp4'
                }
                />
              )}
              
            
              <ComponentText
                style={{
                  fontSize: '20px',
                  fontWeight: '500',
                  alignSelf: 'start',
                  padding: '0.5rem 0',
                  marginTop: '38px',
                }}>
                {t('home_m.media_kit.title')}
              </ComponentText>

              <ComponentText
                style={{
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#AFAFAF',
                  alignSelf: 'start',
                  padding: '0.5rem 0',
                }}>
                {t('home_m.media_kit.content')}
              </ComponentText>
              <div
                style={{width: '100%', marginTop: '4rem', display: 'flex', alignItems: 'end', justifyContent: 'end'}}>
                <SubPageButton linkTo="/irpr/mediakit" title="Media" />
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
              }}>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'start',
                  justifyContent: 'start',
                  width: '100%',
                }}>
                <ComponentText style={{fontSize: '20px', fontWeight: '500', alignSelf: 'start', padding: '0.5em 0'}}>
                  {t('home_m.notice.title')}
                </ComponentText>
                <ComponentText style={{fontSize: '18px', fontWeight: '300', color: '#AFAFAF', padding: '0.5em 0'}}>
                  {t('home_m.notice.content')}
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
                  }}>
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
                    }}>
                    <FilterShadow />
                    <p style={{position: 'relative', fontSize: '15px', color: '#D1D1D1'}}>{item.mobileDate}</p>
                    <p style={{position: 'relative', fontSize: '16px', color: '#E5E5E5', lineHeight: '20px'}}>
                      {item.title.slice(0, 60)}...
                    </p>
                  </HomeComponentImageWrap>
                </ComponentGridWrap>
              ))}
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'end', marginTop: '5rem'}}>
                <SubPageButton linkTo="/irpr/notice" title={t('home_m.notice.viewall')} />
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
