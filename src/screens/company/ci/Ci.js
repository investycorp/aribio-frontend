import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ci_logo_png from './assets/ci_logo.png';
import arrow from '../../../assets/images/arrow.svg';

import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
  ContentBox,
  ColorBarTextWrap,
  Image,
  ColorBar,
  HR,
  ContentWrap,
} from './style';
import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../../components/style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';

import useCi from '../../../hooks/company/useCi';
import Video from '../../../components/Video';
import { Trans } from 'react-i18next';
import { t } from 'i18next';

const Ci = () => {
  const { data, isLoading } = useCi();
  const [pngImg, setPngImg] = useState();
  const [aiImg, setAiImg] = useState();

  useEffect(() => {
    if (!isLoading && data?.data?.data?.fileDtoList) {
      const itemList = data.data?.data?.fileDtoList;
      itemList?.map((item) => {
        item.fileType.includes('PNG') && setPngImg(item.fileUrl);
        item.fileType.includes('AI') && setAiImg(item.fileUrl);
      });
    }
  }, [data, isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  const downloadCi = (type) => {
    saveAs(((type === 'png') ? `${pngImg}` : `${aiImg}`), `AriBio_CI.${type}`);
  };

  return (
    <Container className="container">
      <Header />
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME > COMPANY > `}</span>CORPORATE IDENTITY
      </Path>
      <MainImgWrap>
        <Video
          page="ceomessage"
          src={
            // window.innerWidth > 1280
            //   ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0400PB_VD.mp4'
            //   : 
              window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1300PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2200PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine className="midsize">
          <Trans i18nKey="ci.headline" components={{ 1: <br /> }} />
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
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap>
              <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598"
                style={{
                  marginBottom: window.innerWidth > 1280 ? '32px' : '20px'
                }}
              >
                {t('ci.title')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="500"
                $color="#ffffff"
                style={{ margin: '0' }}
              >
                {t('ci.subtitle')}
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
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="300"
                $color="#D3D3D3"
              >
                <Trans i18nKey="ci.desc1" components={{ 1: <br /> }} />
                {/* {t('ci.desc1')} */}
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{
              height: window.innerWidth > 1280 ? '409px' : '275px',
              padding: '8vh 7vw',
              backgroundColor: 'rgba(255,255,255)',
            }}
          >
            <Image src={pngImg} alt="ci_logo" style={{ width: window.innerWidth > 1280 ? '532px' : '364px' }} />
          </HomeComponentWrap>
          <HomeComponentWrap style={{ padding: '25vh 0', display: 'grid', gridTemplateColumns: '64.33vw 35.67vw' }}>
            <ContentBox style={{ position: 'relative', paddingTop: '1em' }}>
              <ColorBar $color1="#04324B" $color2="#076496">
                <ColorBarTextWrap>
                  <HR $width="20px" $color="#C4C4C4" $height="1px" style={{ marginBottom: '0.5em' }} />
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '18px' : '11px'}
                    $fontWeight="300"
                    $color="#F2F2F2"
                    $align="start"
                  >
                    AriBio Blue
                  </Text>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '14px' : '9px'}
                    $fontWeight="100"
                    $color="#D3D3D3"
                    $align="start"
                  >
                    #076496
                  </Text>
                </ColorBarTextWrap>
              </ColorBar>
              <ColorBar $color1="#661832" $color2="#CB3063">
                <ColorBarTextWrap>
                  <HR $width="20px" $color="#C4C4C4" $height="1px" style={{ marginBottom: '0.5em' }} />

                  <Text
                    $fontSize={window.innerWidth > 1280 ? '18px' : '11px'}
                    $fontWeight="300"
                    $color="#F2F2F2"
                    $align="start"
                  >
                    AriBio Pink
                  </Text>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '14px' : '9px'}
                    $fontWeight="100"
                    $color="#D3D3D3"
                    $align="start"
                  >
                    #CB3063
                  </Text>
                </ColorBarTextWrap>
              </ColorBar>
              <ColorBar $color1="#4A4B4C" $color2="#939598">
                <ColorBarTextWrap>
                  <HR $width="20px" $color="#C4C4C4" $height="1px" style={{ marginBottom: '0.5em' }} />

                  <Text
                    $fontSize={window.innerWidth > 1280 ? '18px' : '11px'}
                    $fontWeight="300"
                    $color="#F2F2F2"
                    $align="start"
                  >
                    AriBio Gray
                  </Text>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '14px' : '9px'}
                    $fontWeight="100"
                    $color="#D3D3D3"
                    $align="start"
                    style={{ margin: '0', textAlign: 'start' }}
                  >
                    #939598
                  </Text>
                </ColorBarTextWrap>
              </ColorBar>
            </ContentBox>
            <ContentBox style={{ padding: '0 7vw 0 0', gap: '1.5rem' }}>
              <ContentWrap>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '26px' : '17px'}
                  $fontWeight="100"
                  $color="#797979"
                  $align="start"
                  style={{ marginTop: '0.5rem' }}
                >
                  01
                </Text>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                  $fontWeight="300"
                  $color="#D5D5D5"
                  $align="start"
                >
                  {t('ci.desc2')}
                </Text>
              </ContentWrap>
              <ContentWrap style={{ marginBottom: '8em' }}>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '26px' : '17px'}
                  $fontWeight="100"
                  $color="#797979"
                  $align="start"
                >
                  02
                </Text>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '0.5em' }}>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                    $fontWeight="300"
                    $color="#D5D5D5"
                    $align="start"
                    style={{ width: 'fit-content' }}
                  >
                    Ari:
                  </Text>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                    $fontWeight="300"
                    $color="#D5D5D5"
                    $align="start"
                  >
                    {t('ci.ari')}
                  </Text>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    gap: '0.5em',
                  }}
                >
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
                    $fontWeight="300"
                    $color="#D5D5D5"
                    $align="start"
                    style={{ width: 'fit-content' }}
                  >
                    Bio:
                  </Text>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
                    $fontWeight="300"
                    $color="#D5D5D5"
                    $align="start"
                  >
                    {t('ci.bio')}
                  </Text>
                </div>
              </ContentWrap>
              <ContentWrap style={{ flexDirection: 'row', padding: '0', justifyContent: 'space-between' }}>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '45%',
                    paddingBottom: '0.7em',
                    borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                  }}
                  onClick={() => downloadCi('ai')}
                >
                  <span style={{ zIndex: '-1', fontSize: window.innerWidth > 1280 ? '20px' : '12px' }}>
                    AI download
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
                  $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '45%',
                    paddingBottom: '0.7em',
                    borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                  }}
                  onClick={() => downloadCi('png')}
                >
                  <span style={{ zIndex: '-1', fontSize: window.innerWidth > 1280 ? '20px' : '12px' }}>
                    PNG download
                  </span>
                  <Image
                    src={arrow}
                    alt="arrow"
                    style={{ height: window.innerWidth > 1280 ? '14px' : '12px', zIndex: '-1' }}
                  />
                </Text>
              </ContentWrap>
            </ContentBox>
          </HomeComponentWrap>
        </Desktop>

        <Mobile>
          <HomeComponentWrap>
            <TextWrap>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598" style={{ marginBottom: '0'}}>
                {t('ci.title')}
              </Text>
              <div
                style={{
                  alignSelf: 'center',
                  width: '20px',
                  height: '1px',
                  border: '1px solid #ffffff',
                  margin: '28px 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="600" $color="#ffffff" style={{ margin: '0' }}>
                {t('ci.subtitle')}
              </Text>
              <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{ marginTop: '12px' }}>
                <Trans i18nKey="ci_m.desc1" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap style={{ backgroundColor: 'rgba(255,255,255)', height: '160px' }}>
            <Image src={ci_logo_png} alt="ci_logo" style={{ width: '108px' }} />
          </HomeComponentWrap>
          <HomeComponentWrap style={{ padding: '5vh 0', display: 'grid' }}>
            <ContentBox style={{ position: 'relative', paddingTop: '1em' }}>
              <ColorBar $color1="rgba(4,50,75,0.9)" $color2="rgba(7,100,150,0.9)">
                <ColorBarTextWrap>
                  <Text $fontSize="14px" $fontWeight="300" $color="#F2F2F2" $align="start">
                    AriBio Blue
                  </Text>
                  <Text $fontSize="14px" $fontWeight="100" $color="#D3D3D3" $align="start">
                    #076496
                  </Text>
                </ColorBarTextWrap>
              </ColorBar>
              <ColorBar $color1="rgba(102,24,50,0.9)" $color2="rgba(203,48,99,0.9)">
                <ColorBarTextWrap>
                  <Text $fontSize="14px" $fontWeight="300" $color="#F2F2F2" $align="start">
                    AriBio Pink
                  </Text>
                  <Text $fontSize="14px" $fontWeight="100" $color="#D3D3D3" $align="start">
                    #CB3063
                  </Text>
                </ColorBarTextWrap>
              </ColorBar>
              <ColorBar $color1="rgba(74,75,76,0.9)" $color2="rgba(147,149,152,0.9)">
                <ColorBarTextWrap>
                  <Text $fontSize="14px" $fontWeight="300" $color="#F2F2F2" $align="start">
                    AriBio Gray
                  </Text>
                  <Text
                    $fontSize="14px"
                    $fontWeight="100"
                    $color="#D3D3D3"
                    $align="start"
                    style={{ margin: '0', textAlign: 'start' }}
                  >
                    #939598
                  </Text>
                </ColorBarTextWrap>
              </ColorBar>
            </ContentBox>
            <ContentBox style={{ padding: '5rem 5vw ' }}>
              <ContentWrap>
                <Text $fontSize="16px" $fontWeight="100" $color="#797979" $align="start">
                  01
                </Text>
                <Text $fontSize="16px" $fontWeight="300" $color="#D5D5D5" $align="start">
                  <Trans i18nKey="ci_m.desc2" components={{ 1: <br /> }} />
                </Text>
              </ContentWrap>
              <ContentWrap style={{ width: '80%' }}>
                <Text $fontSize="16px" $fontWeight="100" $color="#797979" $align="start">
                  02
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    gap: '0.5em',
                  }}
                >
                  <Text
                    $fontSize="16px"
                    $fontWeight="300"
                    $color="#D5D5D5"
                    $align="start"
                    style={{ width: 'fit-content' }}
                  >
                    Ari:
                  </Text>

                  <Text $fontSize="16px" $fontWeight="300" $color="#D5D5D5" $align="start">
                    <Trans i18nKey="ci_m.ari" components={{ 1: <br /> }} />
                  </Text>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '0.5em' }}>
                  <Text
                    $fontSize="16px"
                    $fontWeight="300"
                    $color="#D5D5D5"
                    $align="start"
                    style={{ width: 'fit-content' }}
                  >
                    Bio:
                  </Text>
                  <Text $fontSize="16px" $fontWeight="300" $color="#D5D5D5" $align="start">
                    <Trans i18nKey="ci_m.bio" components={{ 1: <br /> }} />
                  </Text>
                </div>
              </ContentWrap>
              <ContentWrap
                style={{ flexDirection: 'column', padding: '0', justifyContent: 'start', alignItems: 'end' }}
              >
                <Text
                  $fontSize="16px"
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
                    paddingBottom: '0.7em',
                    borderBottom: '1px solid #ffffff',
                  }}
                  onClick={() => downloadCi('ai')}
                >
                  <span style={{ zIndex: '-1' }}>AI download</span>
                  <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
                </Text>
                <Text
                  $fontSize="16px"
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
                    paddingBottom: '0.7em',
                    borderBottom: '1px solid #ffffff',
                  }}
                  onClick={() => downloadCi('png')}
                >
                  <span style={{ zIndex: '-1' }}>PNG download</span>
                  <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
                </Text>
              </ContentWrap>
            </ContentBox>
          </HomeComponentWrap>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default Ci;
