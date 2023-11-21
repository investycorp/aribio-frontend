import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import ceophoto from './assets/ceophoto.png';

import { Container, HomeComponentWrap, TextWrap, Text, ContentBox, Image } from './style';

import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../../components/style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';
import Video from '../../../components/Video';
import { Trans } from 'react-i18next';
import { t } from 'i18next';

const CeoMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="ceomessage"
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
        <span style={{ opacity: '0.8' }}>{`HOME > COMPANY > `}</span>CEO MESSAGE
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>
          CEO <br /> MESSAGE
        </HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: '5vw',
            height: window.innerWidth > 1280 ? '60px' : '36px',
          }}
        />
      </HomeComponentWrap>
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>

        <Desktop>
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap>
              <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                {t('ceomessage.title')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="500"
                $color="#ffffff"
                style={{ margin: '2rem 0 0 0' }}
              >
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
                style={{ margin: '0' }}
              >
                <Trans i18nKey="ceomessage.desc1" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>

          <HomeComponentWrap
            style={{
              height: window.innerWidth > 1280 ? '594px' : '382px',
              background: 'linear-gradient(rgba(0, 111, 170, 0.6), rgba(0, 56, 85, 0.6)',
            }}
          >
            <TextWrap>
              <Text
                $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                $fontWeight="200"
                $color="#ffffff"
                style={{
                  fontFamily: 'Copperplate',
                  width: '65%',
                  textAlign: 'start',
                  margin: '0',
                  height: 'fit-content',
                  lineHeight: '1',
                }}
              >
                “
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '30px' : '18px'}
                $fontWeight="400"
                $color="#ffffff"
                style={{ padding: '0 20px', width: '70%', textAlign: 'center', margin: '0' }}
              >
                <Trans i18nKey="ceomessage.message" components={{ 1: <br /> }} />
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                $fontWeight="200"
                $color="#ffffff"
                style={{ fontFamily: 'Copperplate', width: '65%', textAlign: 'end' }}
              >
                ”
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                $fontWeight="200"
                $color="#D6D6D6"
                style={{ width: '50%', textAlign: window.innerWidth > 1280 ? 'end' : 'center' }}
              >
                {t('ceomessage.message2')}
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          {/*  */}
          <HomeComponentWrap style={{ padding: '15vh 7vw', display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
            <ContentBox style={{ alignItems: 'end' }}>
              <Image src={ceophoto} alt="ceophoto" style={{ width: '125%' }} />
            </ContentBox>
            <ContentBox style={{ padding: '0 0 0 6.5rem', gap: '3em' }}>
              <div style={{ width: '60px', height: '2px', backgroundColor: '#939598' }} />
              <Text
                $fontSize={window.innerWidth > 1280 ? '32px' : '21px'}
                $fontWeight="400"
                $color="#EAEAEA"
                style={{ textAlign: 'start', margin: '0', padding: '0', wordSpacing: '0.1rem' }}
              >
                <Trans i18nKey="ceomessage.desc2" components={{ 1: <br /> }} />
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="300"
                $color="#909090"
                style={{
                  textAlign: 'start',
                  margin: '0',
                  padding: '0 0 0 0',
                  lineHeight: '1.7',
                  wordSpacing: '0.2rem',
                  letterSpacing: '0.02rem',
                }}
              >
                <Trans i18nKey="ceomessage.desc3" components={{ 1: <br /> }} />
              </Text>
            </ContentBox>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          <HomeComponentWrap>
            <TextWrap>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                {t('ceomessage.title')}
              </Text>
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                {t('ceomessage.subtitle')}
              </Text>
              <hr style={{ width: '20px', margin: '3em 0' }} />
              <Text $fontSize="18px" $fontWeight="300" $color="#E5E5E5" style={{ margin: '0' }}>
                <Trans i18nKey="ceomessage_m.desc1" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{
              background: 'linear-gradient(to bottom, rgba(0,111,170,0.5), rgba(0, 56, 85, 0.5))',
              height: '257px',
              margin: '5em 0 7em 0',
            }}
          >
            <TextWrap>
              <Text
                $fontSize="20px"
                $fontWeight="200"
                $color="#ffffff"
                style={{
                  width: '100%',
                  textAlign: 'start',
                  margin: '0',
                  height: 'fit-content',
                  lineHeight: '1',
                  fontFamily: 'Copperplate',
                }}
              >
                “
              </Text>
              <Text
                $fontSize="16px"
                $fontWeight="300"
                $color="#ffffff"
                style={{ padding: '0 20px', width: '100%', textAlign: 'center', margin: '0', lineHeight: '20px' }}
              >
                <Trans i18nKey="ceomessage_m.message" components={{ 1: <br /> }} />
              </Text>
              <Text
                $fontSize="20px"
                $fontWeight="200"
                $color="#ffffff"
                style={{ width: '100%', textAlign: 'end', margin: '0', fontFamily: 'Copperplate' }}
              >
                ”
              </Text>
              <Text
                $fontSize="14px"
                $fontWeight="200"
                $color="#D6D6D6"
                style={{ width: '100%', textAlign: 'center', marginBottom: '0' }}
              >
                {t('ceomessage.message2')}
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap style={{ display: 'grid', padding: '0' }}>
            <Image
              src={process.env.PUBLIC_URL + '/assets/images/ceoimage_mobile.png'}
              alt="ceophoto"
              style={{ width: '95vw', maxWidth: '400px' }}
            />

            <ContentBox style={{ padding: '4rem 5vw 0 5vw', gap: '1rem', marginBottom: '10em' }}>
              <div style={{ width: '20px', height: '1px', backgroundColor: '#939598', marginTop: '5em' }} />

              <Text
                $fontSize="18px"
                $fontWeight="400"
                $color="#EAEAEA"
                style={{ textAlign: 'start', margin: '0', padding: '0 ' }}
              >
                <Trans i18nKey="ceomessage_m.desc2" components={{ 1: <br /> }} />
              </Text>
              <Text
                $fontSize="16px"
                $fontWeight="300"
                $color="#909090"
                style={{ textAlign: 'start', margin: '0', padding: '0', lineHeight: '1.5' }}
              >
                <Trans i18nKey="ceomessage_m.desc3" components={{ 1: <br /> }} />
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
