import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import ci_logo_png from './assets/ci_logo.png';
import ci_cover from './assets/ci_cover.png';
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

const Ci = () => {
  const { data, isLoading } = useCi();
  const [pngImg, setPngImg] = useState();
  const [aiImg, setAiImg] = useState();

  useEffect(() => {
    if (!isLoading && data?.data?.data?.fileDtoList) {
      console.log(data.data?.data.fileDtoList);
      const itemList = data.data?.data.fileDtoList;
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
    saveAs(type === 'png' ? `${pngImg}` : `${aiImg}`, `AriBio_CI.${type}`);
    // const link = document.createElement('a');
    // link.download = `AriBio_CI.${type}`;
    // link.href = type === 'png' ? `${pngImg}` : `${aiImg}`;
    // link.click();
  };

  return (
    <Container className="container">
      <Header />
      <Path>{`HOME > COMPANY > CORPORATE IDENTITY`}</Path>
      <MainImgWrap>
        <Video page="ceomessage" />
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine className="midsize" style={{ fontSize: window.innerWidth <= 900 && '56px' }}>
          CORPORATE
          <br /> IDENTITY
        </HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap>
            <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
              CI
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '4em',
                borderRight: '2px solid #ffffff',
                margin: '2rem 0',
              }}
            ></div>
            <Text
              $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '0' }}
            >
              AriBio CI
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="200"
              $color="#D3D3D3"
              style={{ marginTop: '2em' }}
            >
              We are dedicated to pioneering treatments for neurodegenerative diseases, offering innovative therapies
              for a brighter future.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap
          style={{
            height: window.innerWidth > 1280 ? '409px' : '275px',
            padding: '8vh 7vw',
            backgroundColor: 'rgba(255,255,255,0.7)',
          }}
        >
          <Image src={pngImg} alt="ci_logo" style={{ width: '30vw' }} />
        </HomeComponentWrap>
        <HomeComponentWrap style={{ padding: '25vh 0', display: 'grid', gridTemplateColumns: '64.33vw 35.67vw' }}>
          <ContentBox style={{ position: 'relative', paddingTop: '1em' }}>
            <ColorBar $color1="#04324B" $color2="#076496">
              <ColorBarTextWrap>
                {window.innerWidth > 1280 && (
                  <HR $width="20px" $color="#C4C4C4" $height="1px" style={{ marginBottom: '0.5em' }} />
                )}
                <Text
                  $fontSize={window.innerWidth > 1280 ? '18px' : '14px'}
                  $fontWeight="300"
                  $color="#F2F2F2"
                  $align="start"
                >
                  AriBio Blue
                </Text>
                <Text $fontSize="14px" $fontWeight="100" $color="#D3D3D3" $align="start">
                  #076496
                </Text>
              </ColorBarTextWrap>
            </ColorBar>
            <ColorBar $color1="#661832" $color2="#CB3063">
              <ColorBarTextWrap>
                {window.innerWidth > 1280 && (
                  <HR $width="20px" $color="#C4C4C4" $height="1px" style={{ marginBottom: '0.5em' }} />
                )}
                <Text
                  $fontSize={window.innerWidth > 1280 ? '18px' : '14px'}
                  $fontWeight="300"
                  $color="#F2F2F2"
                  $align="start"
                >
                  AriBio Pink
                </Text>
                <Text $fontSize="14px" $fontWeight="100" $color="#D3D3D3" $align="start">
                  #CB3063
                </Text>
              </ColorBarTextWrap>
            </ColorBar>
            <ColorBar $color1="#4A4B4C" $color2="#939598">
              <ColorBarTextWrap>
                {window.innerWidth > 1280 && (
                  <HR $width="20px" $color="#C4C4C4" $height="1px" style={{ marginBottom: '0.5em' }} />
                )}
                <Text
                  $fontSize={window.innerWidth > 1280 ? '18px' : '14px'}
                  $fontWeight="300"
                  $color="#F2F2F2"
                  $align="start"
                >
                  AriBio Gray
                </Text>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '14px' : '12px'}
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
          <ContentBox style={{ padding: '0 7vw 0 0' }}>
            <ContentWrap>
              <Text
                $fontSize={window.innerWidth > 1280 ? '26px' : '17px'}
                $fontWeight="100"
                $color="#797979"
                $align="start"
              >
                01
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                $fontWeight="300"
                $color="#D5D5D5"
                $align="start"
              >
                ‘AriBio’ embodies our ambition to contribute to the world by developing therapeutics for incurable
                diseases and become a biopharmaceutical leader of South Korea.
              </Text>
            </ContentWrap>
            <ContentWrap>
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
                  Traditional Korean term for ‘Wide and Deep, Beauty, A Person with Wisdom’
                </Text>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '0.5em' }}>
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
                  Derived from the Greek word ‘bios’ meaning ‘life’
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
                  borderBottom: '2px solid #ffffff',
                }}
                onClick={() => downloadCi('ai')}
              >
                <span style={{ zIndex: '-1' }}>AI download</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
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
                  borderBottom: '2px solid #ffffff',
                }}
                onClick={() => downloadCi('png')}
              >
                <span style={{ zIndex: '-1' }}>PNG download</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
              </Text>
            </ContentWrap>
          </ContentBox>
        </HomeComponentWrap>
      </Desktop>
      <Mobile>
        <HomeComponentWrap>
          <TextWrap>
            <Text $fontSize="16px" $fontWeight="300" $color="#939598">
              CI
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '60px',
                borderRight: '1px solid #ffffff',
                margin: '2rem 0',
              }}
            />
            <Text $fontSize="23px" $fontWeight="600" $color="#ffffff" style={{ margin: '0' }}>
              AriBio CI
            </Text>
            <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{ marginTop: '2em' }}>
              We are dedicated to pioneering
              <br /> treatments for neurodegenerative
              <br /> diseases, offering innovative
              <br /> therapies for a brighter future.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{ backgroundColor: '#ffffff', height: '160px' }}>
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
                  AriBio Red
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
                ‘AriBio’ embodies our ambition to contribute
                <br /> to the world by developing therapeutics
                <br /> for incurable diseases and become a<br /> biopharmaceutical leader of South Korea.
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
                  Traditional Korean term for
                  <br /> ‘Wide and Deep, Beauty, A Person with Wisdom’
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
                  Derived from the Greek word ‘bios’
                  <br /> meaning ‘life’
                </Text>
              </div>
            </ContentWrap>
            <ContentWrap style={{ flexDirection: 'column', padding: '0', justifyContent: 'start', alignItems: 'end' }}>
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
                  width: '57.3vw',
                  paddingBottom: '0.7em',
                  borderBottom: '1px solid #ffffff',
                }}
                onClick={() => downloadCi('ai')}
              >
                <span style={{ zIndex: '-1' }}>AI download</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
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
                  width: '57.3vw',
                  paddingBottom: '0.7em',
                  borderBottom: '1px solid #ffffff',
                }}
                onClick={() => downloadCi('png')}
              >
                <span style={{ zIndex: '-1' }}>PNG download</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
              </Text>
            </ContentWrap>
          </ContentBox>
        </HomeComponentWrap>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default Ci;
