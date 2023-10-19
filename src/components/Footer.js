import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrow.svg';
import GoToTop from './buttons/GoToTop';
import { Link } from 'react-router-dom';
import { Desktop, Mobile } from '../utils/MediaQuery';

import dropdown from '../assets/images/dropdown_sm.svg';

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
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 7vw;
  }
`;

const FooterGridWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    gap: 2rem;
  }
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
  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }
`;

const ContactBoxText = styled.div`
  width: fit-content;
  font-size: 18px;
  font-weight: medium;
  color: #b1b1b1;
  margin-bottom: 20px;
  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
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
  @media screen and (max-width: 1280px) {
    font-size: 13px;
  }
  @media screen and (max-width: 900px) {
    width: fit-content;
    font-size: 18px;
  }
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
    <>
      <Desktop>
        <FooterContainer>
          <FooterGridWrap style={{ padding: '7vh 6vw 10vh 0', borderRight: '2px solid #5d5d5d' }}>
            <Link style={{ textDecoration: 'none' }} to="/">
              <img src={logo} alt="logo" style={{ cursor: 'pointer', zIndex: '-1' }} />
            </Link>
            <ContactUsWrap>
              <Link style={{ textDecoration: 'none' }} to="/contactus">
                <ContactUsBox style={{ cursor: 'pointer' }}>
                  <div style={{ cursor: 'pointer', zIndex: '-1' }}>CONTACT US</div>
                  <img
                    src={arrow}
                    alt="arrow"
                    style={{ width: '40px', height: '40px', cursor: 'pointer', zIndex: '-1' }}
                  />
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
      </Desktop>
      <Mobile>
        <FooterContainer>
          <FooterGridWrap style={{ padding: '0' }}>
            <Link style={{ textDecoration: 'none' }} to="/">
              <img src={logo} alt="logo" style={{ cursor: 'pointer', zIndex: '-1', width: '5rem' }} />
            </Link>
            <ContactUsWrap>
              <Link style={{ textDecoration: 'none' }} to="/contactus">
                <ContactUsBox style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                  <div style={{ cursor: 'pointer', zIndex: '-1' }}>CONTACT US</div>
                  <img
                    src={arrow}
                    alt="arrow"
                    style={{ width: '30px', height: '30px', cursor: 'pointer', zIndex: '-1' }}
                  />
                </ContactUsBox>
              </Link>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ContactBoxText style={{ margin: '0' }}>TEL. 02-2637-0009</ContactBoxText>

                <ContactBoxText style={{ margin: '0' }}>FAX. 02-2633-9911</ContactBoxText>
              </div>
            </ContactUsWrap>
          </FooterGridWrap>
          <div>
            <AddressWrap
              style={{
                width: '100%',
                marginBottom: '1rem',
              }}
            >
              <ContactBoxTitle
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '0',
                }}
              >
                <span>Head Office.</span>
                <img src={dropdown} alt="dropdown" style={{ padding: '1rem' }} />
              </ContactBoxTitle>
              <AddressWrap>
                <ContactBoxText>56, Dongpangyo-ro,</ContactBoxText>
                <ContactBoxText>Bundang-gu, Seongnam-si,</ContactBoxText>
                <ContactBoxText>Gyeonggi-do, Republic of Korea</ContactBoxText>
              </AddressWrap>
            </AddressWrap>
            <AddressWrap
              style={{
                width: '100%',
              }}
            >
              <ContactBoxTitle
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '0',
                }}
              >
                <span>US Office.</span>
                <img src={dropdown} alt="dropdown" style={{ padding: '1rem' }} />
              </ContactBoxTitle>
              <AddressWrap>
                <ContactBoxText>4660 La Jolla Village Dr.</ContactBoxText>
                <ContactBoxText>Suite 1070,</ContactBoxText>
                <ContactBoxText>San Diego, CA 92112</ContactBoxText>
              </AddressWrap>
            </AddressWrap>
          </div>

          <ContactUsBox
            style={{
              display: 'grid',
              border: 'none',
              width: '100%',
              padding: '0 1rem 0 0',
              margin: '0 0 20px 0',
              color: '#B1B1B1',
              gap: '1rem',
            }}
          >
            <div style={{ minWidth: 'fit-content' }}>Privacy Policy |</div>
            <div style={{ minWidth: 'fit-content' }}>© 2020 by ARIBIO. All Rights Reserved.</div>
          </ContactUsBox>
        </FooterContainer>
      </Mobile>
    </>
  );
};

export default Footer;
