import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import ourapproach_polypharma_cover from './assets/ourapproach_polypharma_cover.png';
import ourapproach_polypharm_middle from './assets/ourapproach_polypharm_middle.png';
import { Container, MainImgWrap, Path, HeadLine, HomeComponentWrap, TextWrap, Text, Image, HR } from './style';

const PolyPharmacology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <Header />
      <Path>{`HOME > OUR APPROACH > POLY-PHARMACOLOGY`}</Path>
      <MainImgWrap $src={ourapproach_polypharma_cover}>
        <HeadLine>
          POLY- <br />
          PHARMACOLOGY
        </HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
        <TextWrap>
          <Text $fontSize="26px" $fontWeight="300" $color="#939598">
            Polypharmacology
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
          <Text $fontSize="50px" $fontWeight="400" $color="#ffffff" style={{ margin: '0' }}>
            Merging Multi-Target and <br /> Multi-Mechanism Drug Discovery with AI
          </Text>
          <Text $fontSize="23px" $fontWeight="200" $color="#E5E5E5" style={{ marginTop: '2em' }}>
            Neurodegenerative diseases, such as Alzheimer’s, manifest from a confluence of genetic, environmental, and
            physiological factors. The limitations of traditional single-target drugs become evident in their struggle
            to achieve clinically meaningful clinical outcomes against these multifactorial diseases.
            <br />
            <br />
            Polypharmacology goes beyond traditional drug discovery by emphasizing drugs designed to engage multiple
            targets and mechanisms concurrently. This nuanced approach grasps the multifaceted nature of biological
            systems, paving the way for a more comprehensive therapeutic approach.
          </Text>
        </TextWrap>

        <Image src={ourapproach_polypharm_middle} alt="polypharm_middle" style={{ margin: '15vh 0', width: '90%' }} />
        <HR $height="2px" $color="#9A9A9A" />
        <Text $fontSize="20px" $fontWeight="200" $color="#ffffff" style={{ marginTop: '2em', width: '55vw' }}>
          At AriBio, our commitment to polypharmacology is fortified by the power of advanced AI technologies. With the
          ARIDD™ platform, we delve into vast molecular databases, predicting interactions that span multiple targets
          and mechanisms. By leveraging AI, we aim to achieve heightened drug efficacy and expand potential therapeutic
          indications, positioning AriBio as a leader in innovative treatments for neurodegenerative diseases.
          <br />
          <br />
          Join our pursuit to advance the future of drug discovery, where AI meets the sophistication of
          polypharmacology, to tackle the challenges posed by neurodegenerative disorders.
        </Text>
      </HomeComponentWrap>

      <Footer />
    </Container>
  );
};

export default PolyPharmacology;
