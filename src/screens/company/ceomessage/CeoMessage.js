import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ceophoto from './assets/ceophoto.png';

import {Container, HomeComponentWrap, TextWrap, Text, ContentBox, Image} from './style';
import {HeadLine, Path, MainImgWrap} from '../../../components/style';
import {Desktop, Mobile} from '../../../utils/MediaQuery';
import Video from '../../../components/Video';
import {Trans} from 'react-i18next';
import {t} from 'i18next';
import Language from '../../../atom/Language';
import {useRecoilValue} from 'recoil';

const CeoMessage = () => {
  const language = useRecoilValue(Language);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <MainImgWrap
        style={{
          backgroundColor: 'black',
        }}>
        <Video
          page="ceomessage"
          style={{
            width: 'auto',
          }}
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0400PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1300PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2200PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{opacity: '0.8'}}>{`HOME > COMPANY > `}</span>
        {t('ceomessage.title')}
      </Path>
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine $className="midsize">{t('ceomessage.headline')}</HeadLine>
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
          <HomeComponentWrap style={{padding: '15vh 7vw'}}>
            <TextWrap>
              <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                {t('ceomessage.title')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="500"
                $color="#ffffff"
                style={{margin: '2rem 0 0 0'}}>
                {t('ceomessage.subtitle')}
              </Text>
              <hr
                style={{
                  width: window.innerWidth > 1280 ? '60px' : '40px',
                  margin: '5em 0',
                  borderTop: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                  borderBottom: 'none',
                }}
              />
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="200"
                $color="#E5E5E5"
                style={{margin: '0'}}>
                <Trans i18nKey="ceomessage.desc1" components={{1: <br />}} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{
              width: 'auto',
              height:
                window.innerWidth > 1280
                  ? language === 'KOR'
                    ? '429px'
                    : '460px'
                  : language === 'KOR'
                  ? '290px'
                  : '306px',
              background: 'linear-gradient(rgba(0, 111, 170, 0.6), rgba(0, 0, 0, 0.6)',
            }}>
            <TextWrap style={{width: 'auto'}}>
              {/* <Text
                $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                $fontWeight="200"
                $color="#C3C3C3"
                style={{
                  width: window.innerWidth > 1280 ? '60vw' : '55vw',
                  height: '100%',
                  fontFamily: 'Copperplate',
                  textAlign: 'start',
                  margin: '0',
                  lineHeight: '1',
                }}
                >
                “
              </Text> */}
              <TextWrap
                style={{
                  flexDirection: 'row',
                  width: 'auto',
                }}>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '30px ' : '18px'}
                  $fontWeight="300"
                  $color="#ffffff"
                  style={{
                    width: 'auto',
                    textAlign: 'center',
                    margin: '0',
                    lineHeight: language !== 'KOR' ? '1.5em' : '1.8em',
                  }}>
                  <Trans i18nKey="ceomessage.message" components={{1: <br />}} />
                </Text>
                {/* <Text
                  $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                  $fontWeight="200"
                  $color="#ffffff"
                  style={{
                    fontFamily: 'Copperplate',
                    width: 'auto',
                    height: '100%',
                    textAlign: 'end',
                    margin: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    paddingLeft: 32,
                  }}
                >
                  ”
                </Text> */}
              </TextWrap>
              <Text
                $fontSize={window.innerWidth > 1280 ? (language !== 'KOR' ? '20px' : '18px') : '13px'}
                $fontWeight="200"
                $color="#ffffff"
                style={{
                  textAlign: 'end',
                  marginTop: window.innerWidth > 1280 ? '63px' : '24px',
                  marginBottom: 0,
                }}>
                {t('ceomessage.message2')}
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{padding: '15vh 7vw', marginBottom: '20vh', display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <ContentBox style={{alignItems: 'end'}}>
              <Image
                width={window.innerWidth > 1280 ? 550 : 335}
                height={window.innerWidth > 1280 ? 503 : 334}
                src={ceophoto}
                alt="ceoPhoto"
              />
            </ContentBox>
            <ContentBox style={{padding: '0 0 0 6.5rem', gap: '3em'}}>
              <div style={{width: '60px', height: '2px', backgroundColor: '#939598'}} />
              <Text
                $fontSize={window.innerWidth > 1280 ? (language !== 'KOR' ? '32px' : '30px') : '21px'}
                $fontWeight="400"
                $color="#FFFFFF"
                style={{
                  lineHeight: '1.5em',
                  textAlign: 'start',
                  margin: '0',
                  padding: '0',
                  wordSpacing: '0.1rem',
                }}>
                <Trans i18nKey="ceomessage.desc2" components={{1: <br />}} />
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? (language !== 'KOR' ? '23px' : '20px') : '14px'}
                $fontWeight="300"
                $color="#EAEAEA"
                style={{
                  textAlign: 'start',
                  margin: '0',
                  padding: '0 0 0 0',
                  lineHeight: '1.7em',
                  // wordSpacing: '0.2rem',
                  // letterSpacing: '0.02rem',
                }}>
                <Trans i18nKey="ceomessage.desc3" components={{1: <br />}} />
              </Text>
            </ContentBox>
          </HomeComponentWrap>
        </Desktop>

        <Mobile>
          <HomeComponentWrap>
            <TextWrap>
              <Text style={{marginBottom: 0}} $fontSize="16px" $fontWeight="300" $color="#939598">
                {t('ceomessage.title')}
              </Text>
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{margin: '12px 0 0 0'}}>
                {t('ceomessage.subtitle')}
              </Text>
              <hr style={{width: '20px', margin: '3em 0'}} />
              <Text $fontSize="18px" $fontWeight="300" $color="#E5E5E5" style={{margin: '0'}}>
                <Trans i18nKey="ceomessage_m.desc1" components={{1: <br />}} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{
              background: 'linear-gradient(to bottom, rgba(0,111,170,0.5), rgba(0, 0, 0, 0.5))',
              height: '290px',
              margin: '5em 0 7em 0',
            }}>
            <TextWrap style={{width: '90vw', position: 'relative'}}>
              {/* <Text
                $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                $fontWeight="200"
                $color="#C3C3C3"
                style={{
                  fontFamily: 'Copperplate',
                  width: '86vw',
                  position: 'absolute',
                  textAlign: 'start',
                  top: -5,
                  height: 'fit-content',
                  lineHeight: '1',
                }}
              >
                    “
              </Text> */}
              <Text
                $fontSize="16px"
                $fontWeight="300"
                $color="#ffffff"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  margin: '0',
                  lineHeight: language !== 'KOR' ? '20px' : '24px',
                }}>
                <Trans i18nKey="ceomessage_m.message" components={{1: <br />}} />
              </Text>
              <Text
                $fontSize="14px"
                $fontWeight="200"
                $color="#D6D6D6"
                style={{marginTop: '16px', width: '100%', textAlign: 'center', marginBottom: '0'}}>
                {t('ceomessage.message2')}
              </Text>
              {/* <Text
                $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                $fontWeight="200"
                $color="#C3C3C3"
                style={{
                  position: 'absolute',
                  fontFamily: 'Copperplate',
                  width: '86vw',
                  textAlign: 'end',
                  margin: 0,
                  bottom: 34,
                  lineHeight: '1',
                }}
              >
                ”
              </Text> */}
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap style={{display: 'grid', padding: '0'}}>
            <ContentBox style={{padding: '0 5vw'}}>
              <Image
                src={process.env.PUBLIC_URL + '/assets/images/ceophoto_mobile.png'}
                alt="ceophoto"
                style={{width: '100%', height: 'auto'}}
              />
            </ContentBox>

            <ContentBox style={{padding: '4rem 5vw 0 5vw', gap: '1rem', marginBottom: '10em'}}>
              <div style={{width: '20px', height: '1px', backgroundColor: '#939598', marginTop: '5em'}} />
              <Text
                $fontSize={language !== 'KOR' ? '18px' : '16px'}
                $fontWeight="400"
                $color="#FFFFFF"
                style={{textAlign: 'start', margin: '0', padding: '0 '}}>
                <Trans i18nKey="ceomessage_m.desc2" components={{1: <br />}} />
              </Text>

              <Text
                $fontSize={language !== 'KOR' ? '16px' : '14px'}
                $fontWeight="300"
                $color="#EAEAEA"
                style={{textAlign: 'start', margin: '0', padding: '0', lineHeight: '1.5'}}>
                <Trans i18nKey="ceomessage_m.desc3" components={{1: <br />}} />
              </Text>
            </ContentBox>
          </HomeComponentWrap>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default CeoMessage;
