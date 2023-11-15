import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import detectOS from '../../utils/detectOS';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';

import { Container, HomeComponentWrap, TextWrap, Text, Image, HR, ContentWrap } from './style';
import openinnovation_memore_cover from './assets/openinnovation_memore_cover.png';
import openinnovation_memore_middle1 from './assets/openinnovation_memore_middle1.png';
import openinnovation_memore_mobile_middle1 from './assets/openinnovation_memore_mobile_middle1.png';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import arrow from '../../assets/images/arrow.svg';

import Language from '../../atom/Language';
import useLinkList from '../../hooks/useLink';
import Video from '../../components/Video';

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
        <span style={{ opacity: '0.5' }}>{`HOME  >  OPEN INNOVATION  > `}</span>
        {window.innerWidth <= 900 && <br />}
        MEMO:RE PROJECT
      </Path>

      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>
          MEMO:RE
          <br /> PROJECT
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
          <HomeComponentWrap
            style={{
              backgroundColor: 'transparent',
              overflow: 'hidden',
            }}
          >
            <TextWrap style={{ position: 'relative', backgroundColor: 'transparent' }}>
              <Text $color="#C9C9C9" $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300">
                MEMO:RE PROJECT
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '6em',
                  borderRight: '2px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text $fontSize={window.innerWidth > 1280 ? '50px' : '34px'} $fontWeight="500">
                Help Preserve Your Loved One’s Memories
              </Text>
              <hr style={{ width: '4em', border: '2px solid #ffffff', margin: '3.5rem 0 5rem 0' }} />
              <Text $fontSize={window.innerWidth > 1280 ? '23px' : '14px'} $fontWeight="300" $color="#D3D3D3">
                We believe that life’s most precious gift is the memories we create, and it is essential to preserve
                these memories,
                <br /> especially for our aging family members who hold them dear. Memo:Re is more than just a social
                media platform;
                <br /> it’s a digital sanctuary crafted specifically to safeguard these precious memories.
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <Image
              id="fadeIn"
              src={
                process.env.PUBLIC_URL + window.innerWidth > 1280
                  ? '/assets/interaction/1920/AB4000IT_VD.png'
                  : '/assets/interaction/1280/AB4100IT_VD.png'
              }
              alt="openinnovation_middle2"
              style={{
                width: '50vw',
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
            {/* <video id="fadeIn" autoPlay muted loop playsInline style={{ width: '50vw' }}>
              <source src="https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2100PB_VD.mp4" type="video/mp4" />
            </video> */}
            <TextWrap style={{ margin: '10em 0' }}>
              <Text
                $color="#C9C9C9"
                $fontSize={window.innerWidth > 1280 ? '26px' : '14px'}
                $fontWeight="300"
                $align="center"
              >
                Memo:Re isn’t just a digital tool; it’s a bridge. With its user-friendly design,
                <br /> both parents and senior family members can effortlessly journey through their life stories,
                <br /> cherishing each moment all over again. By facilitating these shared reminiscences, <br />
                we reinforce familial bonds and provide an emotional safety net.
                <br /> Most importantly, through Memo:Re,we send a profound message to our elderly loved ones:
                <br /> they are not journeying through memory alone.
                <br />
                We are right beside them, every step of the way.
                <br />
                <br />
                <br />
                <br />
                But we don’t stop there. Grounded in the principles of Reminiscence Therapy, <br />
                Memo:Re is engineered to evoke and reinforce forgotten memories
                <br /> through the sharing of photos, videos, and heartfelt messages.
                <br /> Our unique Memo:Re scheduler ensures these memories resurface regularly,
                <br /> offering comfort and a sense of belonging, and has been linked to a slower progression of memory
                loss.
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
                  <span style={{ zIndex: '-1' }}>Go to Memo:Re (ENG)</span>
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
                  <span style={{ zIndex: '-1' }}>Go to Memo:Re (KOR)</span>
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
                  <span style={{ zIndex: '-1' }}>APP Download</span>
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
                style={{ fontSize: window.innerWidth > 1280 ? '26px' : '16px', margin: '0' }}
              >
                MEMO:RE PROJECT
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '60px',
                  borderRight: '1px solid #ffffff',
                  margin: '2rem 0 2rem 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="400" style={{ width: '100%', margin: '0' }}>
                Help Preserve Your
                <br /> Loved One’s Memories
              </Text>
              <hr style={{ width: '20px', borderTop: '1px solid #707070', margin: '2rem 0 2rem 0' }} />
              <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{ lineHeight: '21px' }}>
                We believe that life’s most precious gift
                <br />
                is the memories we create, and it is
                <br />
                essential to preserve these memories,
                <br />
                especially for our aging family members <br />
                who hold them dear.
                <br />
                Memo:Re is more than just a social
                <br />
                media platform; it’s a digital sanctuary
                <br />
                crafted specifically to safeguard
                <br />
                these precious memories.
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
                Memo:Re isn’t just a digital tool; <br />
                it’s a bridge. With its
                <br />
                user-friendly design, both parents
                <br />
                and senior family members can
                <br />
                effortlessly journey through their
                <br />
                life stories, cherishing each moment
                <br />
                all over again. By facilitating
                <br />
                these shared reminiscences,
                <br />
                we reinforce familial bonds and provide
                <br />
                an emotional safety net.
                <br />
                Most importantly, through Memo:Re,
                <br />
                we send a profound message to
                <br />
                our elderly loved ones:
                <br />
                they are not journeying through
                <br />
                memory alone. We are right beside
                <br />
                them, every step of the way.
                <br />
                <br />
                But we don’t stop there.
                <br />
                Grounded in the principles of
                <br />
                Reminiscence Therapy, Memo:Re is
                <br />
                engineered to evoke and reinforce
                <br />
                forgotten memories through the
                <br />
                sharing of photos, videos,
                <br />
                and heartfelt messages.
                <br />
                Our unique Memo:Re scheduler
                <br />
                ensures these memories resurface
                <br />
                regularly, offering comfort and a sense
                <br />
                of belonging, and has been linked to
                <br />a slower progression of memory loss.
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
                    height: '31px',

                    borderBottom: '1px solid #ffffff',
                    gap: '1em',
                    margin: '0',
                  }}
                  onClick={() => window.open(links.memoReEngLink, '_blank')}
                >
                  <span style={{ zIndex: '-1' }}>Go to Memo:Re (ENG)</span>
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
                    height: '31px',

                    borderBottom: '1px solid #ffffff',
                    gap: '1em',
                    margin: '0',
                  }}
                  onClick={() => window.open(links.memoReKorLink, '_blank')}
                >
                  <span style={{ zIndex: '-1' }}>Go to Memo:Re (KOR)</span>
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
                    height: '31px',

                    borderBottom: '1px solid #ffffff',
                    gap: '1em',
                    margin: '1em 0 0 0',
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
                  <span style={{ zIndex: '-1' }}>APP Download</span>
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
