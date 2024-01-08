import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrow.svg';
import GoToTop from './buttons/GoToTop';
import {Link} from 'react-router-dom';
import {Desktop, Mobile} from '../utils/MediaQuery';
import {t} from 'i18next';
import dropdown from '../assets/images/dropdown_sm.svg';
import {useRecoilValue} from 'recoil';
import Language from '../atom/Language';
import useFooter from '../hooks/footer/useFooter';

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
    gap: 20px;
    padding: 3rem 18px;
  }
`;

const FooterGridWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    gap: 20px;
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
    font-size: 13px;
  }
`;

const ContactBoxText = styled.div`
  width: fit-content;
  font-size: 18px;
  font-weight: medium;
  line-height: 1.5rem;
  color: #b1b1b1;
  margin-bottom: 20px;
  @media screen and (max-width: 1280px) {
    font-size: 11px;
  }
  @media screen and (max-width: 900px) {
    font-size: 14px;
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
  width: 496px;
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
    width: 264px;
    border-width: 1px;
  }
  @media screen and (max-width: 900px) {
    width: fit-content;
    font-size: 18px;
    span {
      font-size: 14px;
    }
  }
`;

const AddressWrap = styled.div`
  width: fit-content;
  max-width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  @media screen and (max-width: 900px) {
    max-width: 100vw;
  }
`;

const Footer = () => {
  const language = useRecoilValue(Language);
  const {data, isLoading} = useFooter(language);
  const [companyInfo, setCompanyInfo] = useState({});
  const [footerToggle, setFooterToggle] = useState('');

  useEffect(() => {
    if (data?.data?.success) {
      const item = data.data?.data;
      item &&
        setCompanyInfo({
          logo: item?.fileDto?.fileUrl,
          tel: item?.tel,
          fax: item?.fax,
          policy: item?.privacyPolicy,
          head: {
            address1: item.headAddress1,
            address2: item.headAddress2,
            address3: item.headAddress3,
          },
          us: {
            address1: item.usAddress1,
            address2: item.usAddress2,
            address3: item.usAddress3,
          },
        });
    }
  }, [data]);

  return (
    <>
      <Desktop>
        <FooterContainer>
          <FooterGridWrap style={{padding: '7vh 6vw 10vh 0', borderRight: '2px solid #5d5d5d'}}>
            <Link style={{textDecoration: 'none'}} to="/">
              <img
                src={companyInfo.logo}
                alt="logo"
                style={{cursor: 'pointer', zIndex: '-1', width: window.innerWidth > 1280 ? '122px' : '82px'}}
              />
            </Link>
            <ContactUsWrap>
              <Link style={{textDecoration: 'none'}} to="/contact/contactus">
                <ContactUsBox style={{cursor: 'pointer'}}>
                  <div style={{cursor: 'pointer', zIndex: '-1'}}>{t('footer.contact')}</div>
                  <img
                    src={arrow}
                    alt="arrow"
                    style={{
                      width: window.innerWidth > 1280 ? '14px' : '12px',

                      cursor: 'pointer',
                      zIndex: '-1',
                    }}
                  />
                </ContactUsBox>
              </Link>
              <ContactUsBox
                style={{
                  justifyContent: 'start',

                  border: 'none',
                  width: '100%',
                  padding: '0 1rem 0 0',
                  margin: '0 0 20px 0',
                  color: '#B1B1B1',
                }}>
                <Link
                  to={`/${companyInfo?.policy}`}
                  style={{
                    cursor: 'pointer',
                    color: '#B1B1B1',
                    textDecoration: 'none',
                    minWidth: 'fit-content',
                    fontSize: window.innerWidth > 1280 ? '18px' : '13px',
                    paddingRight: window.innerWidth > 1280 ? '18px' : '16px',
                  }}>
                  {t('footer.policy')}
                </Link>
                <div style={{paddingRight: window.innerWidth > 1280 ? '18px' : '16px'}}>|</div>{' '}
                <div style={{fontSize: window.innerWidth > 1280 ? '18px' : '13px', minWidth: 'fit-content'}}>
                  {t('footer.copyright')}
                </div>
              </ContactUsBox>
            </ContactUsWrap>
          </FooterGridWrap>
          <FooterGridWrap
            style={{
              padding: '7vh 0vw 10vh 5vw',
              alignItems: 'start',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: '1em',
            }}>
            <ContactBox
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'end',
                justifyContent: 'space-evenly',
                width: 'fit-content',
                gap: '5vw',
              }}>
              <AddressWrap>
                <ContactBoxTitle>{t('footer.address.head')}</ContactBoxTitle>
                <ContactBoxText>{companyInfo?.head?.address1 + companyInfo?.head?.address2}</ContactBoxText>
                <ContactBoxText>{companyInfo?.head?.address3}</ContactBoxText>
                <ContactBoxText>
                  {'T.' + companyInfo.tel?.replace('(Korea)', '') + 'F.' + companyInfo.fax?.replace('(Korea)', '')}
                </ContactBoxText>
              </AddressWrap>
              <AddressWrap>
                <ContactBoxTitle>{t('footer.address.us')}</ContactBoxTitle>
                <ContactBoxText>{companyInfo?.us?.address1}</ContactBoxText>
                <ContactBoxText>{companyInfo?.us?.address2}</ContactBoxText>
                <ContactBoxText>{companyInfo?.us?.address3}</ContactBoxText>
              </AddressWrap>
              <GoToTop />
            </ContactBox>
          </FooterGridWrap>
        </FooterContainer>
      </Desktop>

      <Mobile>
        <FooterContainer style={{borderWidth: 1}}>
          <FooterGridWrap style={{padding: '0'}}>
            <Link style={{textDecoration: 'none'}} to="/">
              <img src={logo} alt="logo" style={{cursor: 'pointer', zIndex: '-1', width: '53px'}} />
            </Link>
            <GoToTop />
            <ContactUsWrap>
              <Link style={{textDecoration: 'none'}} to="/contact/contactus">
                <ContactUsBox
                  style={{
                    cursor: 'pointer',
                    marginBottom: '1rem',
                    width: '162px',
                    padding: '0 0 7px 0',
                    borderBottom: '1px solid #707070',
                  }}>
                  <div style={{cursor: 'pointer', zIndex: '-1'}}>{t('footer.contact')}</div>
                  <img src={arrow} alt="arrow" style={{height: '10px', cursor: 'pointer', zIndex: '-1'}} />
                </ContactUsBox>
              </Link>
            </ContactUsWrap>
            <ContactBox
              style={{
                paddingTop: 0,
                gap: '1.3em',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ContactBoxText $fontSize={'16px'}>{'T.' + companyInfo.tel?.replace('(Korea)', '')}</ContactBoxText>
              <ContactBoxText>{'F.' + companyInfo.fax?.replace('(Korea)', '')}</ContactBoxText>
            </ContactBox>
          </FooterGridWrap>
          <div>
            <AddressWrap
              style={{
                width: '100%',
                marginBottom: '1rem',
              }}>
              <ContactBoxTitle
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '0',
                }}
                onClick={() => {
                  if (footerToggle === 'Head Office') {
                    setFooterToggle('');
                  } else setFooterToggle('Head Office');
                }}>
                <span style={{fontSize: '16px'}}>{t('footer.address.head')}</span>
                <img
                  src={dropdown}
                  alt="dropdown"
                  style={{
                    transform: `rotate(${footerToggle === 'Head Office' ? '180deg' : '0deg'})`,
                  }}
                />
              </ContactBoxTitle>
              {footerToggle === 'Head Office' && (
                <AddressWrap>
                  <ContactBoxText style={{paddingTop: '20px'}}>{companyInfo?.head?.address1}</ContactBoxText>
                  <ContactBoxText>{companyInfo?.head?.address2}</ContactBoxText>
                  <ContactBoxText>{companyInfo?.head?.address3}</ContactBoxText>
                </AddressWrap>
              )}
            </AddressWrap>
            <AddressWrap
              style={{
                width: '100%',
              }}>
              <ContactBoxTitle
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '0',
                }}
                onClick={() => {
                  if (footerToggle === 'US Office') {
                    setFooterToggle('');
                  } else setFooterToggle('US Office');
                }}>
                <span style={{fontSize: '16px'}}>{t('footer.address.us')}</span>
                <img
                  src={dropdown}
                  alt="dropdown"
                  style={{
                    transform: `rotate(${footerToggle === 'US Office' ? '180deg' : '0deg'})`,
                  }}
                />
              </ContactBoxTitle>
              {footerToggle === 'US Office' && (
                <AddressWrap>
                  <ContactBoxText style={{paddingTop: '20px'}}>{companyInfo?.us?.address1}</ContactBoxText>
                  <ContactBoxText>{companyInfo?.us?.address2}</ContactBoxText>
                  <ContactBoxText>{companyInfo?.us?.address3}</ContactBoxText>
                </AddressWrap>
              )}
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
              gap: '7px',
              fontWeight: '200',
            }}>
            <Link
              to={`/${companyInfo?.policy}`}
              style={{color: '#B1B1B1', textDecoration: 'none', minWidth: 'fit-content', fontSize: '14px'}}>
              <span>{t('footer.policy')}</span>
              {/* <span style={{ padding: '0 4px' }}>|</span> */}
            </Link>
            <span style={{minWidth: 'fit-content', fontSize: '14px'}}>{t('footer.copyright')}</span>
          </ContactUsBox>
        </FooterContainer>
      </Mobile>
    </>
  );
};

export default Footer;
