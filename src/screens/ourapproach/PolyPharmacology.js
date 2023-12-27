import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {Container, HomeComponentWrap, TextWrap, Text, Image, HR} from './style';
import {HeadLine, Path, MainImgWrap} from '../../components/style';
import {Desktop, Mobile} from '../../utils/MediaQuery';
import Video from '../../components/Video';
import {Trans} from 'react-i18next';
import {t} from 'i18next';

const PolyPharmacology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container').scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <Header />
      <MainImgWrap>
        <Video
          page="polypharmacology"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0500PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1400PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2300PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine style={{fontSize: window.innerWidth < 901 && '40px'}}>
          <Trans i18nKey="polypharma.headline" components={{1: <br />}} />
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
      <Path>
        <span style={{opacity: '0.8'}}>{`HOME > OUR APPROACH > `}</span>
        {window.innerWidth <= 900 && <br />}
        {t('polypharma.title')}
      </Path>

      <Desktop>
        <HomeComponentWrap style={{padding: '15vh 7vw'}}>
          <TextWrap>
            <Text
              $fontSize={window.innerWidth > 1280 ? '26px' : '18px'}
              $fontWeight="300"
              $color="#939598"
              style={{
                marginBottom: window.innerWidth > 1280 ? '32px' : '20px',
              }}>
              {t('polypharma.title')}
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
              $fontWeight="500"
              $color="#ffffff"
              style={{margin: '0'}}>
              {t('polypharma.subtitle')}
            </Text>
            <div
              style={{
                alignSelf: 'center',
                width: window.innerWidth > 1280 ? '60px' : '40px',
                height: '2px',
                border: '1px solid #ffffff',
                margin: window.innerWidth > 1280 ? '80px 0' : '52px 0',
              }}></div>
            <Text $fontSize={window.innerWidth > 1280 ? '23px' : '16px'} $fontWeight="200" $color="#E5E5E5">
              <Trans i18nKey="polypharma.desc1" components={{1: <br />}} />
            </Text>
          </TextWrap>

          <Image
            id="fadeIn"
            src={
              process.env.PUBLIC_URL + window.innerWidth > 1280
                ? '/assets/interaction/1920/AB3100IT_VD.png'
                : '/assets/interaction/1280/AB3200IT_VD.png'
            }
            alt="polypharm_middle"
            style={{margin: '0 0 100px 0', width: '100%', opacity: '1'}}
          />
          <HR $height="2px" $color="#9A9A9A" />
          <Text
            $fontSize={window.innerWidth > 1280 ? '20px' : '16px'}
            $fontWeight="200"
            $color="#ffffff"
            style={{marginTop: '4em', width: '80vw'}}>
            <Trans i18nKey="polypharma.desc2" components={{1: <br />}} />
          </Text>
        </HomeComponentWrap>
      </Desktop>

      <Mobile>
        <div style={{overflowX: 'hidden'}}>
          <HomeComponentWrap style={{padding: '5vh 5vw'}}>
            <TextWrap style={{margin: '0'}}>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598" style={{margin: '0'}}>
                {t('polypharma.title')}
              </Text>
              <div
                style={{
                  alignSelf: 'center',
                  width: '20px',
                  height: '1px',
                  border: '1px solid #ffffff',
                  margin: '28px 0',
                }}
              />
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{margin: '0'}}>
                {t('polypharma.subtitle')}
              </Text>
              <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{marginTop: '2em', lineHeight: '21px'}}>
                <Trans i18nKey="polypharma_m.desc1" components={{1: <br />}} />
              </Text>
            </TextWrap>

            <Image
              id="fadeIn"
              src={process.env.PUBLIC_URL + '/assets/interaction/360/AB3300IT_VD.png'}
              alt="polypharm_middle"
              style={{margin: '5vh 0', width: '90%', opacity: '1'}}
            />
            <HR $height="1px" $width="20px" $color="#9A9A9A" />
            <Text
              $fontSize="16px"
              $fontWeight="300"
              $color="#D3D3D3"
              style={{marginTop: '2em', width: '90vw', lineHeight: '1.2em'}}>
              <Trans i18nKey="polypharma_m.desc2" components={{1: <br />}} />
            </Text>
          </HomeComponentWrap>
        </div>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default PolyPharmacology;
