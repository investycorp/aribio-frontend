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

const MemoRe = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className="container">
      <MainImgWrap $src={openinnovation_memore_cover}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>

      <Header />
      <Path>{`HOME > OPEN INNOVATION > MEMO:RE PROJECT`}</Path>

      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>
          MEMO:RE
          <br /> PROJECT
        </HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap
          style={{
            backgroundColor: 'transparent',
            height: '120vh',
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
            <Text $fontSize={window.innerWidth > 1280 ? '50px' : '34px'} $fontWeight="400">
              Our Mission with Memo:Re Project
            </Text>
            <hr style={{ width: '4em', border: '2px solid #ffffff', margin: '3.5rem 0 5rem 0' }} />
            <Text $fontSize={window.innerWidth > 1280 ? '23px' : '14px'} $fontWeight="300" $color="#D3D3D3">
              We believe memories are the essence of life’s most treasured moments, and they deserve preservation,
              especially for our aging family members who cherish them the most. Memo:Re is more than just a social
              media platform; it’s a digital sanctuary crafted specifically to safeguard these precious memories.
              <br />
              <br />
              Through Memo:Re, you can breathe life into your cherished moments, sharing photos and videos from bygone
              times with your elderly loved ones. Add a personal touch by overlaying these visuals with voice notes,
              sharing reflections, or posing questions to stimulate recollection and conversation.
              <br />
              <br />
              But we don’t stop there. Grounded in the principles of Reminiscence Therapy, Memo:Re is engineered to
              evoke and reinforce forgotten memories through the sharing of photos, videos, and heartfelt messages. Our
              unique Memo:Re scheduler ensures these memories resurface regularly, offering comfort and a sense of
              belonging.
              <br />
              <br />
              In a world where isolation is an all-too-common challenge for the elderly, Memo:Re stands as a beacon,
              ensuring that our loved ones are always surrounded by the warmth of their cherished past.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{}}>
          <Image
            src={openinnovation_memore_middle1}
            alt="openinnovation_middle2"
            style={{ width: '80%', marginTop: '5em' }}
          />
          <TextWrap style={{ margin: '10em 0' }}>
            <Text
              $color="#C9C9C9"
              $fontSize={window.innerWidth > 1280 ? '26px' : '18px'}
              $fontWeight="300"
              $align="center"
            >
              Research on age-related memory decline underscores the value of consistent engagement with cherished
              memories, particularly when shared with family. Regularly revisiting these memories has been linked to not
              only a slower progression of memory loss but also enhanced mood and overall well-being.
              <br />
              <br />
              Memo:Re isn’t just a digital tool; it’s a bridge. With its user-friendly design, both parents and senior
              family members can effortlessly journey through their life stories, cherishing each moment all over again.
              By facilitating these shared reminiscences, we reinforce familial bonds and provide an emotional safety
              net. Most importantly, through Memo:Re,we send a profound message to our elderly loved ones: they are not
              journeying through memory alone. We are right beside them, every step of the way.
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
                  borderBottom: '2px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                  cursor: 'pointer',
                }}
                onClick={() => window.open('http://www.memoreapp.com/', '_blank')}
              >
                <span style={{ zIndex: '-1' }}>Go to Memo:Re (ENG)</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
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
                  borderBottom: '2px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                  cursor: 'pointer',
                }}
                onClick={() => window.open('http://www.memore.co.kr/', '_blank')}
              >
                <span style={{ zIndex: '-1' }}>Go to Memo:Re (KOR)</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
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
                  borderBottom: '2px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  let userOs = detectOS();
                  if (userOs === 'iOS') {
                    window.open('https://apps.apple.com/kr/app/%EB%A9%94%EB%AA%A8-%EB%A6%AC/id6448716248 ', '_blank');
                  } else if (userOs === 'Android') {
                    window.open('https://play.google.com/store/apps/details?id=com.aribio.app.memore ', '_blank');
                  } else {
                    alert('Only Android and iOS are available.');
                  }
                }}
              >
                <span style={{ zIndex: '-1' }}>APP Download</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
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
            <Text $color="#C9C9C9" $fontSize="26px" $fontWeight="300">
              MEMO:RE PROJECT
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '6em',
                borderRight: '1px solid #ffffff',
                margin: '0 0 4rem 0',
              }}
            ></div>
            <Text $fontSize="23px" $fontWeight="400" style={{ width: '70%', margin: '0' }}>
              Our Mission with Memo:Re Project
            </Text>
            <hr style={{ width: '2rem', border: '1px solid #ffffff', margin: '3rem 0 1rem 0' }} />
            <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3">
              We believe memories are the essence of life’s most treasured moments, and they deserve preservation,
              especially for our aging family members who cherish them the most. Memo:Re is more than just a social
              media platform; it’s a digital sanctuary crafted specifically to safeguard these precious memories.
              <br />
              <br />
              Through Memo:Re, you can breathe life into your cherished moments, sharing photos and videos from bygone
              times with your elderly loved ones. Add a personal touch by overlaying these visuals with voice notes,
              sharing reflections, or posing questions to stimulate recollection and conversation.
              <br />
              <br />
              But we don’t stop there. Grounded in the principles of Reminiscence Therapy, Memo:Re is engineered to
              evoke and reinforce forgotten memories through the sharing of photos, videos, and heartfelt messages. Our
              unique Memo:Re scheduler ensures these memories resurface regularly, offering comfort and a sense of
              belonging.
              <br />
              <br />
              In a world where isolation is an all-too-common challenge for the elderly, Memo:Re stands as a beacon,
              ensuring that our loved ones are always surrounded by the warmth of their cherished past.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{}}>
          <Image
            src={openinnovation_memore_mobile_middle1}
            alt="openinnovation_mobile_middle1"
            style={{ width: '100%', marginTop: '0em' }}
          />
          <TextWrap style={{ margin: '5em 0', width: '100%' }}>
            <Text $color="#C9C9C9" $fontSize="18px" $fontWeight="300" $align="center">
              Research on age-related memory decline underscores the value of consistent engagement with cherished
              memories, particularly when shared with family. Regularly revisiting these memories has been linked to not
              only a slower progression of memory loss but also enhanced mood and overall well-being.
              <br />
              <br />
              Memo:Re isn’t just a digital tool; it’s a bridge. With its user-friendly design, both parents and senior
              family members can effortlessly journey through their life stories, cherishing each moment all over again.
              By facilitating these shared reminiscences, we reinforce familial bonds and provide an emotional safety
              net. Most importantly, through Memo:Re,we send a profound message to our elderly loved ones: they are not
              journeying through memory alone. We are right beside them, every step of the way.
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
                display: 'grid',
                gridTemplateColumns: '1fr',
                padding: '0',
                columnGap: '2em',
                rowGap: '4em',
                paddingLeft: '33%',
              }}
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
                  width: 'auto',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                }}
                onClick={() => navigate('/')}
              >
                <span style={{ zIndex: '-1' }}>Go to Memo:Re (ENG)</span>
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
                  width: 'auto',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                }}
                onClick={() => navigate('/')}
              >
                <span style={{ zIndex: '-1' }}>Go to Memo:Re (KOR)</span>
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
                  width: 'auto',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                }}
                onClick={() => navigate('/')}
              >
                <span style={{ zIndex: '-1' }}>APP Download</span>
                <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
              </Text>
            </ContentWrap>
          </ContentWrap>
        </HomeComponentWrap>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default MemoRe;
