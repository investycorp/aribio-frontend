import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrow.svg';
import GoToTop from './buttons/GoToTop';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #000000;
  color: #e5e5e5;
  display: grid;
  grid-template-columns: 3fr 4fr;
  align-items: center;
  justify-content: space-between;
  padding: 0 7vw;
  border-top: 2px solid #5d5d5d;
  z-index: 10;
`;

const FooterGridWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const ContactBox = styled.div`
  padding-top: 10vh;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
`;

const ContactBoxTitle = styled.div`
  width: fit-content;
  font-size: 20px;
  font-weight: semi-bold;
  margin-bottom: 20px;
`;

const ContactBoxText = styled.div`
  width: fit-content;
  font-size: 18px;
  font-weight: medium;
  color: #b1b1b1;
  margin-bottom: 20px;
`;
const ContactUsWrap = styled.div`
  min-width: fit-content;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
`;

const ContactUsBox = styled.div`
  font-size: 20px;
  font-weight: medium;
  width: 20vw;
  color: #e5e5e5;
  cursor: pointer;
  padding-bottom: 1vh;
  border-bottom: 2px solid #b1b1b1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3vh;
  flex-wrap: wrap;
`;

const AddressWrap = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGridWrap style={{ padding: '7vh 6vw 10vh 0', borderRight: '2px solid #5d5d5d' }}>
        <Link style={{ textDecoration: 'none' }} to="/">
          <img src={logo} alt="logo" style={{ cursor: 'pointer', zIndex: '-1' }} />
        </Link>
        <ContactUsWrap>
          <Link style={{ textDecoration: 'none' }} to="/contactus">
            <ContactUsBox style={{ cursor: 'pointer' }}>
              <div style={{ cursor: 'pointer', zIndex: '-1' }}>CONTACT US</div>
              <img src={arrow} alt="arrow" style={{ width: '40px', height: '40px', cursor: 'pointer', zIndex: '-1' }} />
            </ContactUsBox>
          </Link>
          <ContactUsBox
            style={{ border: 'none', width: '100%', padding: '0 1rem 0 0', margin: '0 0 20px 0', color: '#B1B1B1' }}
          >
            <div style={{ minWidth: 'fit-content' }}>Privacy Policy</div> <div>|</div>{' '}
            <div style={{ minWidth: 'fit-content' }}>© 2020 by ARIBIO. All Rights Reserved.</div>
          </ContactUsBox>
        </ContactUsWrap>
      </FooterGridWrap>
      <FooterGridWrap
        style={{
          padding: '7vh 2vw 10vh 6vw',
          alignItems: 'start',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          gap: '1em',
        }}
      >
        <ContactBox>
          <ContactBoxTitle>TEL.</ContactBoxTitle>
          <ContactBoxText>02-2637-0009</ContactBoxText>
          <ContactBoxTitle>FAX.</ContactBoxTitle>
          <ContactBoxText>02-2633-9911</ContactBoxText>
        </ContactBox>
        <ContactBox
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'end',
            justifyContent: 'space-evenly',
            width: 'fit-content',
            gap: '2vw',
          }}
        >
          <AddressWrap>
            <ContactBoxTitle>Head Office.</ContactBoxTitle>
            <ContactBoxText>56, Dongpangyo-ro,</ContactBoxText>
            <ContactBoxText>Bundang-gu, Seongnam-si,</ContactBoxText>
            <ContactBoxText>Gyeonggi-do, Republic of Korea</ContactBoxText>
          </AddressWrap>
          <AddressWrap>
            <ContactBoxTitle>US Office.</ContactBoxTitle>
            <ContactBoxText>4660 La Jolla Village Dr.</ContactBoxText>
            <ContactBoxText>Suite 1070,</ContactBoxText>
            <ContactBoxText>San Diego, CA 92112</ContactBoxText>
          </AddressWrap>

          <GoToTop />
        </ContactBox>
      </FooterGridWrap>
    </FooterContainer>
  );
};

export default Footer;
