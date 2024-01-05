import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {Container, HomeComponentWrap, TextWrap, Text, Image, HR, ContentWrap} from './style';
import openinnovation_middle1 from './assets/openinnovation_middle1.png';
import openinnovation_middle2 from './assets/openinnovation_middle2.png';
import arrow from '../../assets/images/arrow.svg';

import {HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap} from '../../components/style';
import {Desktop, Mobile} from '../../utils/MediaQuery';

import Video from '../../components/Video';

import {t} from 'i18next';
import {Trans} from 'react-i18next';
import Language from '../../atom/Language';
import {useRecoilValue} from 'recoil';

const OpenInnovation = () => {
  const language = useRecoilValue(Language);
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
        <span style={{opacity: '0.8'}}>{`HOME > ${t('innovation.basic.title')}`}</span>
      </Path>
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine $className="midsize" style={{fontSize: window.innerWidth < 901 && '36px'}}>
          <Trans i18nKey={'innovation.headline'} components={{1: <br />}} />
        </HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
            height: window.innerWidth > 1280 ? '24px' : '14px',
          }}
        />
      </HomeComponentWrap>
      <div style={{margin: '0', padding: '0', position: 'relative'}}>
        <Desktop>
          <HomeComponentWrap
            style={{
              backgroundColor: 'transparent',
              height: '120vh',
              overflow: 'hidden',
            }}>
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
            <TextWrap style={{position: 'relative', backgroundColor: 'transparent'}}>
              <Text $color="#939598" $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300">
                {t('innovation.basic.title')}
              </Text>
              <Text
                $language={language}
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="500"
                style={{lineHeight: '1.5em'}}>
                <Trans i18nKey={'innovation.basic.subdesc'} components={{1: <br />}} />
              </Text>
              <hr
                style={{
                  width: window.innerWidth > 1280 ? '60px' : '40px',
                  borderTop: '2px solid #ffffff',
                  borderBottom: 'none',
                  margin: '3.5rem 0 5rem 0',
                }}
              />
              <Text
                $language={language}
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="300"
                $color="#D3D3D3">
                <Trans i18nKey={'innovation.basic.desc'} components={{1: <br />}} />
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
            }}>
            <Image
              src={openinnovation_middle2}
              alt="openinnovation_middle2"
              width={window.innerWidth > 1280 ? 738 : 438}
              height={window.innerWidth > 1280 ? 488 : 298}
              style={{alignSelf: 'end', marginTop: '0', paddingLeft: '7vw'}}
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
              }}>
              <Text
                $color="#D3D3D3"
                $language={language}
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="300"
                $align="start"
                style={{marginBottom: '5rem'}}>
                <HR style={{marginBottom: '2em'}} />
                <Trans i18nKey={'innovation.basic.approach'} components={{1: <br />}} />
              </Text>
              <ContentWrap
                style={{
                  justifySelf: 'end',
                  flexDirection: 'row',
                  padding: '0 0 0 33%',
                  justifyContent: 'space-between',
                  gap: '2em',
                }}>
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
                  onClick={() => navigate('/openinnovation/digitalhealth')}>
                  <span
                    style={{
                      zIndex: '-1',
                      fontSize: window.innerWidth > 1280 ? '20px' : '11px',
                      lineHeight: window.innerWidth > 1280 ? '2.5em' : '3em',
                    }}>
                    {t('innovation.basic.button.digital')}
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
                  onClick={() => navigate('/openinnovation/memoreproject')}>
                  <span
                    style={{
                      zIndex: '-1',
                      fontSize: window.innerWidth > 1280 ? '20px' : '11px',
                      lineHeight: window.innerWidth > 1280 ? '2.5em' : '3em',
                    }}>
                    {t('innovation.basic.button.memore')}
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
            }}>
            <TextWrap style={{width: '100%', position: 'relative', backgroundColor: 'transparent'}}>
              <Text $color="#939598" $fontSize="16px" $fontWeight="300">
                {t('innovation.basic.title')}
              </Text>
              <Text $language={language} $fontSize="23px" $fontWeight="500" style={{lineHeight: '26px'}}>
                <Trans i18nKey={'innovation.basic_m.subdesc'} components={{1: <br />}} />
              </Text>
              <hr style={{width: '20px', borderTop: '1px solid #ffffff', borderBottom: 'none', margin: '0 0 2em 0'}} />
              <Text
                $language={language}
                $fontSize="18px"
                $fontWeight="300"
                $color="#D3D3D3"
                style={{width: '100%', lineHeight: '21px'}}>
                <Trans i18nKey={'innovation.basic_m.desc'} components={{1: <br />}} />
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
            }}>
            <Image
              src={openinnovation_middle2}
              alt="openinnovation_middle2"
              style={{
                width: '323px',
                height: '171px',
                objectFit: 'cover',
                marginTop: '5em',
                padding: '0 5vw',
                alignSelf: 'center',
              }}
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
              }}>
              <Text
                $fontWeight="300"
                $align="start"
                style={{
                  paddingLeft: '15vw',
                  marginBottom: '10em',
                  lineHeight: language === 'KOR' ? '22px' : '20px',
                  color: '#D3D3D3',
                  fontSize: '16px',
                }}>
                <HR style={{marginBottom: '2em', height: '1px', width: '20px'}} />
                <Trans i18nKey={'innovation.basic_m.approach'} components={{1: <br />}} />
              </Text>
              <ContentWrap
                style={{
                  display: 'flex',
                  justifySelf: 'end',
                  alignItems: 'end',
                  flexDirection: 'column',
                  padding: '0 0 10em 33%',
                }}>
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
                  onClick={() => navigate('/openinnovation/digitalhealth')}>
                  <span style={{zIndex: '-1', fontSize: '16px'}}>{t('innovation.basic_m.button.digital')}</span>
                  <Image src={arrow} alt="arrow" style={{width: '10px', zIndex: '-1'}} />
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
                  onClick={() => navigate('/openinnovation/memoreproject')}>
                  <span style={{zIndex: '-1', fontSize: '16px'}}>{t('innovation.basic_m.button.memore')}</span>
                  <Image src={arrow} alt="arrow" style={{width: '10px', zIndex: '-1'}} />
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
