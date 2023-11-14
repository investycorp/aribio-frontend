import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ourapproach_polypharm_middle from './assets/ourapproach_polypharm_middle.png';
import { Container, HomeComponentWrap, TextWrap, Text, Image, HR } from './style';
import { HeadLine, Path, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Video from '../../components/Video';

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
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine className="midsize" style={{ fontSize: window.innerWidth < 901 && '40px' }}>
          POLY- <br />
          PHARMACOLOGY
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
      <Path>
        {`HOME > OUR APPROACH >`}
        {window.innerWidth <= 900 && <br />}
        POLY-PHARMACOLOGY
      </Path>

      <Desktop>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap style={{ width: '60vw' }}>
            <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
              POLY-PHARMACOLOGY
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
              $fontWeight="500"
              $color="#ffffff"
              style={{ margin: '0' }}
            >
              Merging Multi-Mechanism Drug Discovery with AI
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '16px'}
              $fontWeight="200"
              $color="#E5E5E5"
              style={{ marginTop: '4em' }}
            >
              Neurodegenerative diseases, such as Alzheimer’s, manifest from a confluence of genetic, environmental,
              <br />
              and physiological factors. The limitations of traditional single-target drugs become evident in their
              struggle
              <br />
              to achieve clinically meaningful clinical outcomes against these multifactorial diseases.
              <br />
              <br />
              Polypharmacology goes beyond traditional drug discovery by emphasizing drugs designed to engage
              <br />
              multiple targets and mechanisms concurrently. This nuanced approach grasps the multifaceted nature of
              <br />
              biological systems, paving the way for a more comprehensive therapeutic approach.
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
            style={{ margin: '0 0 100px 0', width: '100%', opacity: '1' }}
          />
          <HR $height="2px" $color="#9A9A9A" />
          <Text
            $fontSize={window.innerWidth > 1280 ? '20px' : '16px'}
            $fontWeight="200"
            $color="#ffffff"
            style={{ marginTop: '4em', width: '80vw' }}
          >
            At AriBio, our commitment to polypharmacology is fortified by the power of advanced AI technologies.
            <br />
            With the ARIDD™ platform, we delve into vast molecular databases, predicting interactions that span
            multiple
            <br />
            targets and mechanisms. By leveraging AI, we aim to achieve heightened drug efficacy and expand potential
            <br />
            therapeutic indications, positioning AriBio as a leader in innovative treatments for neurodegenerative
            diseases.
            <br />
            <br />
            Join our pursuit to advance the future of drug discovery, where AI meets the sophistication of
            polypharmacology,
            <br />
            and tackle the challenges posed by neurodegenerative disorders.
          </Text>
        </HomeComponentWrap>
      </Desktop>
      <Mobile>
        <div style={{ overflowX: 'hidden' }}>
          <HomeComponentWrap style={{ padding: '5vh 5vw' }}>
            <TextWrap style={{ margin: '0' }}>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                POLYPHARMACOLOGY
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '60px',
                  borderRight: '1px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '0' }}>
                Merging Multi-Mechanism Drug Discovery with AI
              </Text>
              <Text
                $fontSize="18px"
                $fontWeight="200"
                $color="#E5E5E5"
                style={{ marginTop: '2em', lineHeight: '21px' }}
              >
                Neurodegenerative diseases,
                <br /> such as Alzheimer’s, manifest <br />
                from a confluence of genetic,
                <br /> environmental, and physiological
                <br /> factors. The limitations of traditional
                <br /> single-target drugs become evident <br />
                in their struggle to achieve clinically
                <br /> meaningful clinical outcomes against <br />
                these multifactorial diseases.
                <br />
                <br />
                Polypharmacology goes beyond <br />
                traditional drug discovery by <br />
                emphasizing drugs designed to engage <br />
                multiple targets and mechanisms <br />
                concurrently. This nuanced approach <br />
                grasps the multifaceted nature of
                <br /> biological systems, paving the way for
                <br /> a more comprehensive
                <br /> therapeutic approach.
              </Text>
            </TextWrap>

            <Image
              id="fadeIn"
              src={process.env.PUBLIC_URL + '/assets/interaction/360/AB3300IT_VD.png'}
              alt="polypharm_middle"
              style={{ margin: '5vh 0', width: '90%', opacity: '1' }}
            />
            <HR $height="1px" $width="20px" $color="#9A9A9A" />
            <Text $fontSize="16px" $fontWeight="300" $color="#D3D3D3" style={{ marginTop: '2em', width: '90vw' }}>
              At AriBio, our commitment to
              <br />
              polypharmacology is
              <br />
              fortified by the power of advanced
              <br />
              AI technologies. With the ARIDD™ platform,
              <br />
              we delve into vast molecular databases,
              <br />
              predicting interactions that span multiple
              <br />
              targets and mechanisms.
              <br />
              By leveraging AI, we aim to achieve
              <br />
              heightened drug efficacy and
              <br />
              expand potential therapeutic indications,
              <br />
              positioning AriBio as a leader
              <br />
              in innovative treatments
              <br />
              for neurodegenerative diseases.
              <br />
              <br />
              Join our pursuit to advance the future of
              <br />
              drug discovery, where AI meets
              <br />
              the sophistication of polypharmacology,
              <br />
              and tackle the challenges posed by
              <br />
              neurodegenerative disorders.
              <br />
            </Text>
          </HomeComponentWrap>
        </div>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default PolyPharmacology;
