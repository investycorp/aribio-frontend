import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import irpr_notice_cover from '../assets/irpr_notice_cover.png';
import { Container, MainImgWrap, Path, HeadLine, HomeComponentWrap, TextWrap, Text, Tab, TabItem } from './style';

const Notice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <Header />
      <Path>{`HOME > IR & PR > NOTICE`}</Path>
      <MainImgWrap $src={irpr_notice_cover}>
        <HeadLine>NOTICE</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
        <TextWrap>
          <Text $fontSize="26px" $fontWeight="300" $color="#939598">
            NOTICE
          </Text>
          <div
            style={{
              width: '50%',
              alignSelf: 'flex-start',
              height: '8em',
              borderRight: '2px solid #ffffff',
              margin: '2rem 0',
            }}
          ></div>
          <Text $fontSize="50px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
            We Share Our Transparent Management Information.
          </Text>
        </TextWrap>
      </HomeComponentWrap>
      <HomeComponentWrap>{/* add components here */}</HomeComponentWrap>
      <Footer />
    </Container>
  );
};

export default Notice;
