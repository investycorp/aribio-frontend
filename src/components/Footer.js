import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrow.svg';

const FooterContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #000000;
  color: #e5e5e5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 0 7vw;
`;

const FooterGridWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  border-right: 2px solid #5d5d5d;
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
  justify-content: flex-end;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGridWrap style={{ padding: '5vh 0 10vh 0', borderLeft: '2px solid #5d5d5d' }}>
        <img src={logo} alt="logo" />
        <ContactUsWrap>
          <ContactUsBox>
            <div>CONTACT US</div>
            <img src={arrow} alt="arrow" style={{ width: '40px', height: '40px' }} />
          </ContactUsBox>
          <ContactUsBox
            style={{ border: 'none', width: '100%', padding: '0 1rem 0 0', margin: '0 0 20px 0', color: '#B1B1B1' }}
          >
            <div style={{ minWidth: 'fit-content' }}>Privacy Policy</div> <div>|</div>{' '}
            <div style={{ minWidth: 'fit-content' }}>© 2020 by ARIBIO. All Rights Reserved.</div>
          </ContactUsBox>
        </ContactUsWrap>
      </FooterGridWrap>
      <FooterGridWrap style={{ padding: '5vh 3vw 10vh 0', alignItems: 'end' }}>
        <ContactBox>
          <ContactBoxTitle>TEL.</ContactBoxTitle>
          <ContactBoxText>02-0000-0000</ContactBoxText>
          <ContactBoxTitle>FAX.</ContactBoxTitle>
          <ContactBoxText>02-0000-0000</ContactBoxText>
        </ContactBox>
      </FooterGridWrap>
      <FooterGridWrap style={{ padding: '5vh 0 10vh 1vw', alignItems: 'end' }}>
        <ContactBox
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'end',
            justifyContent: 'space-between',
            width: '100%',
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
            <ContactBoxText>Suite 210,</ContactBoxText>
            <ContactBoxText>3636 Nobel Drive,</ContactBoxText>
            <ContactBoxText>San Diego, CA 92112, USA</ContactBoxText>
          </AddressWrap>
        </ContactBox>
      </FooterGridWrap>
    </FooterContainer>
  );
};

export default Footer;
