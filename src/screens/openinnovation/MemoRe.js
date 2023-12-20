import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import detectOS from '../../utils/detectOS';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';

import { Container, HomeComponentWrap, TextWrap, Text, Image, HR, ContentWrap } from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import arrow from '../../assets/images/arrow.svg';

import Language from '../../atom/Language';
import useLinkList from '../../hooks/useLink';
import Video from '../../components/Video';

import { t } from 'i18next';
import { Trans } from 'react-i18next';

const MemoRe = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const { data, isLoading, refetch } = useLinkList(language);
  const [links, setLinks] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (data?.data?.success) {
      const item = data.data.data;
      setLinks({
        memoReEngLink: item.memoReEngLink,
        memoReKorLink: item.memoReKorLink,
        memoReAppAndroid: item.appLinkDto.memoReAndroidAppLink,
        memoReAppIos: item.appLinkDto.memoReIosAppLink,
      });
    }
  }, [data]);
  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="memoRe"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1200PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2100PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB3000PB_VD.mp4'
          }
        />
      </MainImgWrap>

      <Header />
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME  >  OPEN INNOVATION  > `}</span>
        {window.innerWidth <= 900 && <br />}
        {t('innovation.memore.title')}
      </Path>

      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine $className="midsize">
          {t('innovation.memore.title')}
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
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>

        <Desktop>
          <HomeComponentWrap
            style={{
              backgroundColor: 'transparent',
              overflow: 'hidden',
            }}
          >
            <TextWrap style={{ position: 'relative', backgroundColor: 'transparent' }}>
              <Text $color="#C9C9C9" $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300">
                {t('innovation.memore.basic.subtitle')}
              </Text>
              <Text $fontSize={window.innerWidth > 1280 ? '50px' : '34px'} $fontWeight="500">
                {t('innovation.memore.basic.desc')}
              </Text>
              <div
                style={{
                  alignSelf: 'center',
                  width: window.innerWidth > 1280 ? '60px' : '40px',
                  height: '2px',
                  border: '1px solid #ffffff',
                  margin: window.innerWidth > 1280 ? '80px 0' : '52px 0',
                }}
              ></div>
              <Text $fontSize={window.innerWidth > 1280 ? '23px' : '14px'} $fontWeight="300" $color="#D3D3D3">
                <Trans i18nKey={'innovation.memore.basic.subdesc1'} components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap style={{ paddingTop: '0' }}>
            <Image
              id="fadeIn"
              src={
                process.env.PUBLIC_URL + window.innerWidth > 1280
                  ? '/assets/interaction/1920/AB4000IT_VD.png'
                  : '/assets/interaction/1280/AB4100IT_VD.png'
              }
              alt="openinnovation_middle2"
              style={{
                objectFit: 'cover',
                height: 'auto',
                width: '86vw',
                transition: 'opacity 0.5s ease-in-out',
                padding: '0',
              }}
            />
            {/* <video id="fadeIn" autoPlay muted loop playsInline style={{ width: '50vw' }}>
              <source src="https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2100PB_VD.mp4" type="video/mp4" />
            </video> */}
            <TextWrap style={{ margin: '10em 0' }}>
              <Text
                $color="#C9C9C9"
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="300"
                $align="center"
              >
                <Trans i18nKey={'innovation.memore.basic.subdesc2'} components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
            <ContentWrap
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'end',
                padding: '0',
                gap: '0',
              }}
            >
              <ContentWrap
                style={{
                  width: '33.3%',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  padding: '0',
                  columnGap: '2em',
                  rowGap: '4em',
                }}
              >
                <Text
                  $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'auto',
                    paddingBottom: '0.7em',
                    borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                    gap: '1em',
                    margin: '0',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open(links.memoReEngLink, '_blank')}
                >
                  <span style={{ zIndex: '-1' }}>
                    {t('innovation.memore.button.en')}
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
                  $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'auto',
                    paddingBottom: '0.7em',
                    borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                    gap: '1em',
                    margin: '0',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open(links.memoReKorLink, '_blank')}
                >
                  <span style={{ zIndex: '-1' }}>
                    {t('innovation.memore.button.kr')}
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
                  $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'auto',
                    paddingBottom: '0.7em',
                    borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                    gap: '1em',
                    margin: '0',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    let userOs = detectOS();
                    if (userOs === 'iOS') {
                      window.open(links.memoReAppIos, '_blank');
                    } else if (userOs === 'Android') {
                      window.open(links.memoReAppAndroid, '_blank');
                    } else {
                      alert('Only Android and iOS are available.');
                    }
                  }}
                >
                  <span style={{ zIndex: '-1' }}>
                    {t('innovation.memore.button.dl')}
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
            </ContentWrap>
          </HomeComponentWrap>
        </Desktop>

        <Mobile>
          <HomeComponentWrap
            style={{
              backgroundColor: 'transparent',
              overflow: 'hidden',
            }}
          >
            <TextWrap style={{ position: 'relative', backgroundColor: 'transparent', width: '100%' }}>
              <Text
                $color="#C9C9C9"
                $fontWeight="300"
                style={{ fontSize: window.innerWidth > 1280 ? '26px' : '16px', margin: '0 0 12px 0' }}
              >
                {t('innovation.memore_m.basic.subtitle')}
              </Text>
              <Text $fontSize="23px" $fontWeight="400" style={{ width: '100%', margin: '0' }}>
                <Trans i18nKey={'innovation.memore.basic.desc'} components={{ 1: <br /> }} />
              </Text>
              <hr style={{ width: '20px', borderTop: '1px solid #707070', margin: '2rem 0 2rem 0' }} />
              <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{ lineHeight: '21px' }}>
                <Trans i18nKey={'innovation.memore.basic.subdesc1'} components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <Image
              id="fadeIn"
              src={process.env.PUBLIC_URL + '/assets/interaction/360/AB4200IT_VD.png'}
              alt="memore_mobile_middle1"
              style={{ width: '100%', marginTop: '0em' }}
            />
            <TextWrap style={{ margin: '5em 0', width: '100%' }}>
              <Text $color="#C9C9C9" $fontSize="18px" $fontWeight="300" $align="center" style={{ lineHeight: '21px' }}>
                <Trans i18nKey={'innovation.memore.basic.subdesc2'} components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
            <ContentWrap
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'end',
                padding: '0 0 10em 0',
                gap: '0',
              }}
            >
              <ContentWrap
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0',
                  columnGap: '2em',
                  rowGap: '1em',
                  paddingLeft: '33%',
                  justifyContent: 'center',
                  alignItems: 'end',
                }}
              >
                <Text
                  $fontSize="16px"
                  $fontWeight="400"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '213px',
                    height: '2.5em',

                    borderBottom: '1px solid #ffffff',
                    gap: '1em',
                    margin: '0',
                  }}
                  onClick={() => window.open(links.memoReEngLink, '_blank')}
                >
                  <span style={{ zIndex: '-1' }}>
                    {t('innovation.memore.button.en')}
                  </span>
                  <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
                </Text>
                <Text
                  $fontSize="16px"
                  $fontWeight="400"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '213px',
                    height: '2.5em',

                    borderBottom: '1px solid #ffffff',
                    gap: '1em',
                    margin: '0',
                  }}
                  onClick={() => window.open(links.memoReKorLink, '_blank')}
                >
                  <span style={{ zIndex: '-1' }}>
                    {t('innovation.memore.button.kr')}
                  </span>
                  <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
                </Text>
                <Text
                  $fontSize="16px"
                  $fontWeight="400"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '213px',
                    height: '2.5em',

                    borderBottom: '1px solid #ffffff',
                    gap: '1em',
                    margin: '2em 0 0 0',
                  }}
                  onClick={() => {
                    let userOs = detectOS();
                    if (userOs === 'iOS') {
                      window.open(links.memoReAppIos, '_blank');
                    } else if (userOs === 'Android') {
                      window.open(links.memoReAppAndroid, '_blank');
                    } else {
                      alert('Only Android and iOS are available.');
                    }
                  }}
                >
                  <span style={{ zIndex: '-1' }}>
                    {t('innovation.memore.button.dl')}
                  </span>
                  <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
                </Text>
              </ContentWrap>
            </ContentWrap>
          </HomeComponentWrap>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default MemoRe;
