import React, {useEffect, useState} from 'react';
import browser from 'browser-detect';
import {Desktop, Mobile} from '../../utils/MediaQuery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideSlider from '../../components/SideSlider';
import SubPageButton from '../../components/buttons/SubPageButton';
import home_ourapproach1 from './assets/home_ourapproach1.png';
import home_ourapproach2 from './assets/home_ourapproach2.png';
import home_ourapproach3 from './assets/home_ourapproach3.png';
import home_press1 from './assets/home_notice1.png';
import home_press2 from './assets/home_notice2.png';
import home_press3 from './assets/home_notice3.png';
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
  MainImgWrap,
} from './style';

import Language from '../../atom/Language';
import {useRecoilState} from 'recoil';
import Video from '../../components/Video';
import VideoFrame from '../../components/VideoFrame';
import usePopup from '../../hooks/popup/usePopup';
import arrow from '../../assets/images/arrow.svg';
import {useNavigate} from 'react-router-dom';
import usePressHomeList from '../../hooks/home/usePressHomeList';
import useVideoHomeList from '../../hooks/home/useVideoHome';
import {Trans} from 'react-i18next';

const Home = () => {
  const browserInfo = browser();
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [language, setLanguage] = useRecoilState(Language);
  const [scrollY, setScrollY] = useState(0);
  const {data: pressData, refetch: pressDataRefetch} = usePressHomeList(language);
  const {data: videoData, refetch: videoDataRefetch} = useVideoHomeList(language);
  const {data: popupData, refetch: popupDataRefetch} = usePopup(language);
  const [pressList, setPressList] = useState([]);
  const [modalOpen, setModalOpen] = useState();
  const [modalData, setModalData] = useState();
  const [videoHeight, setVideoHeight] = useState(0);

  const pressImages = [home_press1, home_press2, home_press3];

  useEffect(() => {
    if (pressData?.data?.success) {
      const list = pressData?.data.dataList.map((item, index) => {
        if (index < 3) {
          return {
            id: item.id,
            date: item.date.replaceAll('-', '.'),
            mobileDate: `${item.month} ${item.day}, ${item.year}`,
            title: item.title,
            imageUrl: pressImages[index],
          };
        }
      });
      setPressList(list);
    }
  }, [pressData]);

  useEffect(() => {
    if (popupData?.data?.success) {
      if (popupData?.data?.dataList.length > 0) {
        setModalOpen(true);
        setModalData(popupData.data.dataList);
      }
    }
  }, [popupData]);

  useEffect(() => {
    pressDataRefetch();
    popupDataRefetch();
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
        <div
          style={{
            backgroundColor: '#000000',
          }}>
          <Video
            page="home"
            videoWidth={'auto'}
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
        </div>
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
                <HeadLineText
                  id="target"
                  $fontSize="48px"
                  style={{lineHeight: language !== 'KOR' ? '1.45em' : '1.3em'}}>
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
                margin: '15vh 0 10vh 0',
              }}
              className="home home_3">
              <ComponentGridWrap
                style={{
                  position: 'relative',
                }}>
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
                      cursor: 'pointer',
                    }}
                  />
                  <ComponentTextWrap style={{padding: window.innerWidth > 1280 ? '2rem 5rem' : '1rem 3rem'}}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 32,
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate('/ourapproach/poly-pharmacology');
                      }}>
                      <ComponentText
                        style={{
                          fontSize: window.innerWidth > 1280 ? '48px' : '30px',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}>
                        {t('home.ourapproach.title_1')}
                      </ComponentText>
                      <img
                        src={arrow}
                        alt="arrow"
                        style={{
                          zIndex: '-1',
                          border: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                          borderRadius: '50%',
                          height: window.innerWidth > 1280 ? '20px' : '12px',
                          padding: window.innerWidth > 1280 ? '12px' : '8px',
                        }}
                      />
                    </div>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? (language !== 'KOR' ? '28px' : '24px') : '14px',
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
                  <ComponentTextWrap>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 32,
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate('/pipeline');
                      }}>
                      <ComponentText
                        style={{
                          fontSize: window.innerWidth > 1280 ? '48px' : '30px',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}>
                        {t('home.ourapproach.title_2')}
                      </ComponentText>
                      <img
                        src={arrow}
                        alt="arrow"
                        style={{
                          zIndex: '-1',
                          border: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                          borderRadius: '50%',
                          height: window.innerWidth > 1280 ? '20px' : '12px',
                          padding: window.innerWidth > 1280 ? '12px' : '8px',
                        }}
                      />
                    </div>
                    <ComponentText
                      style={{
                        fontSize: window.innerWidth > 1280 ? (language !== 'KOR' ? '28px' : '24px') : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}>
                      {t('home.ourapproach.desc_2_1')}
                      <br />
                      {t('home.ourapproach.desc_2_2')}
                      {language !== 'KOR' && (
                        <>
                          <br />
                          {t('home.ourapproach.desc_2_3')}
                        </>
                      )}
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
                    }}
                  />
                  <ComponentTextWrap style={{padding: window.innerWidth > 1280 ? '2rem 5rem' : '1rem 3rem'}}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 32,
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate('/career');
                      }}>
                      <ComponentText
                        style={{
                          fontSize: window.innerWidth > 1280 ? '48px' : '30px',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}>
                        {t('home.ourapproach.title_3')}
                      </ComponentText>
                      <img
                        src={arrow}
                        alt="arrow"
                        style={{
                          zIndex: '-1',
                          border: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                          borderRadius: '50%',
                          height: window.innerWidth > 1280 ? '20px' : '12px',
                          padding: window.innerWidth > 1280 ? '12px' : '8px',
                        }}
                      />
                    </div>
                    <ComponentText
                      style={{
                        fontSize:
                          window.innerWidth > 1280
                            ? language !== 'KOR'
                              ? '28px'
                              : '24px'
                            : language !== 'KOR'
                            ? '16px'
                            : '14px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                      }}>
                      {t('home.ourapproach.desc_3')}
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
              </ComponentGridWrap>
              <ComponentGridWrap style={{alignItems: 'flex-end'}}>
                <HomeComponentImageWrap $src={home_ourapproach3} />
              </ComponentGridWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_4"
              style={{
                minHeight: 'fit-content',
                justifyContent: 'space-between',
                margin: '0',
              }}>
              {videoData?.data?.data?.url && <VideoFrame src={videoData?.data?.data?.url} />}
              <ComponentText
                style={{
                  fontSize: window.innerWidth > 1280 ? '48px' : '36px',
                  fontWeight: '500',
                  alignSelf: 'start',
                  marginTop: '3em',
                  marginBottom: window.innerWidth > 1280 ? 27 : 7,
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
                  style={{
                    fontSize:
                      window.innerWidth > 1280
                        ? language !== 'KOR'
                          ? '28px'
                          : '24px'
                        : language !== 'KOR'
                        ? '16px'
                        : '14px',
                    fontWeight: '300',
                    color: '#AFAFAF',
                  }}>
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
                  marginBottom: window.innerWidth > 1280 ? 27 : 7,
                }}>
                {t('home.press.title')}
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
                  style={{
                    fontSize:
                      window.innerWidth > 1280
                        ? language !== 'KOR'
                          ? '28px'
                          : '24px'
                        : language !== 'KOR'
                        ? '16px'
                        : '14px',
                    fontWeight: '300',
                    color: '#AFAFAF',
                  }}>
                  {t('home.press.content')}
                </ComponentText>
                <SubPageButton linkTo="/irpr/pressrelease" title={t('home.press.viewall')} />
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: pressList.length > 1 ? '1fr 2fr' : '1fr 1fr',
                  gridTemplateRows: '1fr 1fr',
                  margin: '10vh',
                  width: '100%',
                  height: pressList.length > 2 ? '28.7vw' : '277px',
                  columnGap: '0',
                  rowGap: pressList?.length > 2 ? '1rem' : 0,
                }}>
                {pressList?.map((item, index) => (
                  <ComponentGridWrap
                    key={index}
                    style={{
                      gridRow: index === 0 ? '1/3' : 'auto',
                      padding: '0',
                      minHeight: window.innerWidth > 1280 ? '277px' : '162px',
                      width: pressList?.length === 1 ? '86vw' : 'auto',
                      height: pressList?.length < 3 ? (window.innerWidth > 1280 ? '277px' : '162px') : 'auto',
                    }}
                    onClick={() => navigate(`/irpr/pressrelease/${item?.id}`)}>
                    <HomeComponentImageWrap
                      $src={item.imageUrl}
                      style={{
                        width: 'auto',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        gap: window.innerWidth > 1280 ? '2rem' : '10px',
                        padding: window.innerWidth > 1280 ? '3em 3em' : '2em 3em',
                        marginLeft: index === 0 ? '0' : '1rem',
                        fontWeight: '300',
                        position: 'relative',
                      }}>
                      <FilterShadow style={{cursor: 'pointer'}} />
                      <p
                        style={{
                          position: 'relative',
                          fontWeight: '300',
                          fontSize: window.innerWidth > 1280 ? '22px' : '12px',
                          color: '#D1D1D1',
                          cursor: 'pointer',
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
                          wordBreak: 'break-all',
                          cursor: 'pointer',
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
            <HomeComponentWrap className="home home_1" style={{height: '100vh'}}>
              <MainImgTextWrap style={{height: videoHeight}} />
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_2"
              style={{
                height: '100vh',
              }}>
              <HomeAboutUsTextWrap>
                <HeadLineText style={{fontWeight: '400', fontSize: language !== 'KOR' ? '23px' : '20px'}}>
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
                  {language !== 'KOR' && (
                    <>
                      <br />
                      <span
                        className="highlight8"
                        style={{
                          color:
                            document.querySelector('.highlight8')?.getBoundingClientRect().top <
                            window.innerHeight / 1.5
                              ? '#ffffff'
                              : 'rgba(255, 255, 255, 0.5)',
                        }}>
                        {t('home_m.aboutus.8')}
                      </span>
                      <br />
                    </>
                  )}
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
              <ComponentGridWrap style={{marginBottom: '88px', marginTop: '80px', padding: 0}}>
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
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate('/ourapproach/poly-pharmacology');
                      }}>
                      <ComponentText
                        style={{
                          fontSize: 20,
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}>
                        {t('home_m.ourapproach.title_1')}
                      </ComponentText>
                      <img
                        src={arrow}
                        alt="arrow"
                        style={{
                          zIndex: '-1',
                          border: '1px solid #ffffff',
                          borderRadius: '50%',
                          height: 12,
                          padding: 4,
                        }}
                      />
                    </div>
                    <ComponentText
                      style={{fontSize: language !== 'KOR' ? '18px' : '16px', fontWeight: '300', color: '#AFAFAF'}}>
                      <Trans i18nKey="home_m.ourapproach.desc_1" components={{1: <br />}} />
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
                <HomeComponentImageWrap $src={home_ourapproach1} style={{borderRadius: '8px'}} />
              </ComponentGridWrap>
              <ComponentGridWrap style={{marginBottom: '88px', padding: 0}}>
                <HomeComponentImageWrap
                  style={{
                    gridColumn: '1/1',
                    borderRadius: '8px',
                    justifySelf: 'flex-start',
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
                  <ComponentTextWrap>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate('/pipeline');
                      }}>
                      <ComponentText
                        style={{
                          fontSize: 20,
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}>
                        {t('home_m.ourapproach.title_2')}
                      </ComponentText>
                      <img
                        src={arrow}
                        alt="arrow"
                        style={{
                          zIndex: '-1',
                          border: '1px solid #ffffff',
                          borderRadius: '50%',
                          height: 12,
                          padding: 4,
                        }}
                      />
                    </div>
                    <ComponentText
                      style={{
                        fontSize: language !== 'KOR' ? '18px' : '16px',
                        fontWeight: '300',
                        color: '#AFAFAF',
                        padding: '0 0.5rem 0 1rem',
                      }}>
                      <Trans i18nKey="home_m.ourapproach.desc_2" components={{1: <br />}} />
                    </ComponentText>
                  </ComponentTextWrap>
                  <div style={{width: '1px', height: '48px', backgroundColor: '#B1B1B1'}}></div>
                </div>
              </ComponentGridWrap>
              <ComponentGridWrap style={{marginBottom: '88px', padding: 0}}>
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
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate('/career');
                      }}>
                      <ComponentText
                        style={{
                          fontSize: 20,
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}>
                        {t('home_m.ourapproach.title_3')}
                      </ComponentText>
                      <img
                        src={arrow}
                        alt="arrow"
                        style={{
                          zIndex: '-1',
                          border: '1px solid #ffffff',
                          borderRadius: '50%',
                          height: 12,
                          padding: 4,
                        }}
                      />
                    </div>
                    <ComponentText
                      style={{fontSize: language !== 'KOR' ? '18px' : '16px', fontWeight: '300', color: '#AFAFAF'}}>
                      <Trans i18nKey="home_m.ourapproach.desc_3" components={{1: <br />}} />
                    </ComponentText>
                  </ComponentTextWrap>
                </div>
                <HomeComponentImageWrap style={{borderRadius: '8px'}} $src={home_ourapproach3}></HomeComponentImageWrap>
              </ComponentGridWrap>
            </HomeComponentWrap>
            <HomeComponentWrap
              className="home home_4"
              style={{minHeight: 'fit-content', justifyContent: 'space-between', margin: '0'}}>
              {browserInfo.name === 'safari' ? (
                <video
                  playsInline
                  autoPlay={false}
                  controls={true}
                  style={{
                    borderRadius: '20px',
                    width: window.innerWidth > 900 ? '86vw' : '90vw',
                    height: window.innerWidth > 1280 ? '726px' : window.innerWidth > 900 ? '484px' : '50vw',
                  }}>
                  <source src={videoData?.data?.data?.url} type="video/mp4" />
                </video>
              ) : (
                <VideoFrame src={videoData?.data?.data?.url} />
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
                  fontSize: language !== 'KOR' ? '18px' : '16px',
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
              }}>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'start',
                  justifyContent: 'start',
                  width: '100%',
                }}>
                <ComponentText
                  style={{fontSize: '20px', fontWeight: '500', alignSelf: 'start', padding: 0, margin: '0 0 0.5rem 0'}}>
                  {t('home_m.press.title')}
                </ComponentText>
                <ComponentText
                  style={{
                    fontSize: language !== 'KOR' ? '18px' : '16px',
                    fontWeight: '300',
                    color: '#AFAFAF',
                    padding: 0,
                    margin: '0 0 2rem 0',
                  }}>
                  {t('home_m.press.content')}
                </ComponentText>
              </div>
              {pressList?.map((item, index) => (
                <ComponentGridWrap
                  key={index}
                  style={{
                    padding: '0',
                    gridTemplateColumns: '1fr',
                    width: '90vw',
                    height: '92px',
                    maxHeight: '92px',
                    marginBottom: '12px',
                  }}
                  onClick={() => navigate(`/irpr/pressrelease/${item?.id}`)}>
                  <HomeComponentImageWrap
                    $src={item?.imageUrl}
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1rem',
                      lineHeight: '20px',
                      fontWeight: '300',
                      position: 'relative',
                      borderRadius: '10px',
                      overflowY: 'hidden',
                    }}>
                    <FilterShadow />
                    <p style={{position: 'relative', fontSize: '15px', color: '#D1D1D1'}}>{item?.mobileDate}</p>
                    <p
                      style={{
                        position: 'relative',
                        fontSize: '16px',
                        color: '#E5E5E5',
                        lineHeight: '20px',
                        wordBreak: 'break-all',
                      }}>
                      {language === 'ENG' ? item?.title?.slice(0, 60) : item?.title?.slice(0, 35)}
                      {language === 'ENG' && item?.title?.length > 60 && <span>...</span>}
                      {language === 'KOR' && item?.title?.length > 35 && <span>...</span>}
                    </p>
                  </HomeComponentImageWrap>
                </ComponentGridWrap>
              ))}
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'end', marginTop: '5rem'}}>
                <SubPageButton linkTo="/irpr/pressRelease" title={t('home_m.press.viewall')} />
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
