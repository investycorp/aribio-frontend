import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import arrow from '../../assets/images/arrow.svg';

import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
  HR,
  FormWrap,
  Form,
  FormInputRowWrap,
  Input,
  Label,
  Button,
  Image,
  RowWrap,
  ErrorBox,
  SuccessBox,
  RequiredField,
} from './style';

import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import useContact from '../../hooks/contact/useContact';
import Language from '../../atom/Language';
import { useRecoilValue } from 'recoil';
import Video from '../../components/Video';
import { t } from 'i18next';
import { Trans } from 'react-i18next';

const Contact = () => {
  const [language] = useRecoilValue(Language);
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    affiliation: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [submitSrc, setSubmitSrc] = useState();
  const [emailError, setEmailError] = useState('This field is required.');
  const {
    mutate,
    isLoading,
    data: addData,
    isError: mutationError,
    isSuccess: mutationSuccess,
  } = useContact(contactInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    setSubmitSrc(
      process.env.PUBLIC_URL + window.innerWidth > 1280
        ? '/assets/icons/submit/submit_1920.png'
        : window.innerWidth > 900
        ? '/assets/icons/submit/submit_1280.png'
        : '/assets/icons/submit/submit_360.png',
    );
  }, []);

  useEffect(() => {
    if (isError || isSuccess) {
      setTimeout(() => {
        document.getElementById('warning').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  }, [isError, isSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
    console.log(contactInfo);
  };

  const handleEnter = (e) => {
    const next = e.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
    if (e.key === 'Enter') {
      if (next.nodeName === 'INPUT') {
        next.focus();
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = await checkValidation();
    if (isValid === true) {
      const response = await mutate();
      if (mutationSuccess) {
        await setIsSuccess(true);
        console.log('submitted');
        await setIsError(false);
        setContactInfo({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          affiliation: '',
          message: '',
        });
        setTimeout(() => {
          //to turn off success message
          setIsSuccess(false);
        }, 2000);
      } else if (mutationError) {
        setIsError(true);
        console.log('error');
      }
    } else {
      setIsError(true);
    }
  };

  const checkValidation = () => {
    if (
      !contactInfo.firstName ||
      !contactInfo.lastName ||
      !contactInfo.email ||
      !contactInfo.message ||
      !contactInfo.email.includes('@')
    ) {
      if (!contactInfo.email.includes('@')) setEmailError('Please include @ in your email address.');
      return false;
    } else return true;
  };

  return (
    <Container className="container">
      <Header />
      <MainImgWrap>
        <Video
          page="contactus"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0900PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1800PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2700PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME > CONTACT > `}</span>CONTACT US
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>CONTACT {window.innerWidth <= 900 && <br />}US</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
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
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap style={{ width: '70vw' }}>
              <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                {t('contact.title')}
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '60px',
                  borderRight: '2px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="500"
                $color="#ffffff"
                style={{ margin: '2rem 0 0 0' }}
              >
                {t('contact.subtitle')}
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '20px'}
              $fontWeight="400"
              $color="#E5E5E5"
              $align="start"
            >
              <Trans i18nKey="contact.desc" components={{ 1: <br /> }} />
            </Text>
            <FormWrap>
              <ErrorBox id={isError ? 'warning' : ''} $isActive={isError}>
                {t('contact.error')}
              </ErrorBox>
              <SuccessBox id={isSuccess ? 'warning' : ''} $isActive={isSuccess}>
                {t('contact.success')}
              </SuccessBox>
              <Form>
                <FormInputRowWrap $isFilled={contactInfo.firstName !== ''}>
                  <Label htmlFor="firstName">
                    {t('contact.firstname')} <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="text"
                    name="firstName"
                    autoComplete="off"
                    value={contactInfo.firstName}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && !contactInfo.firstName && (
                    <RequiredField style={{ fontWeight: '200' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: window.innerWidth > 1280 ? '20px' : '14px' }}
                      />
                      {t('contact.required')}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap style={{ marginLeft: '2rem' }} $isFilled={contactInfo.lastName !== ''}>
                  <Label htmlFor="lastName">
                    {t('contact.lastname')} <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="text"
                    name="lastName"
                    autoComplete="off"
                    value={contactInfo.lastName}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && !contactInfo.lastName && (
                    <RequiredField style={{ fontWeight: '200' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: window.innerWidth > 1280 ? '20px' : '14px' }}
                      />
                      {t('contact.required')}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.email !== ''}>
                  <Label htmlFor="email">
                    {t('contact.email')} <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={contactInfo.email}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && (!contactInfo.email || !contactInfo.email.includes('@')) && (
                    <RequiredField style={{ fontWeight: '200' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: window.innerWidth > 1280 ? '20px' : '14px' }}
                      />
                      {t('contact.required')}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap $isFilled={contactInfo.phone !== ''}>
                  <Label htmlFor="phone">{t('contact.phone')}</Label>
                  <Input
                    type="phone"
                    name="phone"
                    autoComplete="off"
                    value={contactInfo.phone}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                </FormInputRowWrap>
                <FormInputRowWrap style={{ marginLeft: '2rem' }} $isFilled={contactInfo.affiliation !== ''}>
                  <Label htmlFor="affiliation">{t('contact.affiliation')}</Label>
                  <Input
                    type="text"
                    name="affiliation"
                    autoComplete="off"
                    value={contactInfo.affiliation}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                </FormInputRowWrap>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.message !== ''}>
                  <Label className="message" htmlFor="message">
                    {t('contact.message')} <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="text"
                    name="message"
                    autoComplete="off"
                    value={contactInfo.message}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && !contactInfo.message && (
                    <RequiredField style={{ fontWeight: '200' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: window.innerWidth > 1280 ? '20px' : '14px' }}
                      />
                      {t('contact.required')}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap
                  style={{
                    flexDirection: 'column',
                    gridColumnEnd: '2 span',
                    justifyContent: 'start',
                    alignItems: 'end',
                    border: 'none',
                    gap: '0.5em',
                    fontSize: window.innerWidth > 1280 ? '23px' : '13px',
                  }}
                >
                  <span>
                    <span style={{ color: '#00A6FF' }}>* </span>
                    <span style={{ color: '#E5E5E5' }}>{t('contact.required2')} </span>
                  </span>

                  <Image
                    src={submitSrc}
                    alt="submit"
                    style={{
                      cursor: 'pointer',
                      marginTop: window.innerWidth > 1280 ? '120px' : '74px',
                      width: window.innerWidth > 1280 ? '187px' : '113px',
                    }}
                    onClick={(e) => handleSubmit(e)}
                    onMouseOver={() =>
                      setSubmitSrc(
                        process.env.PUBLIC_URL + window.innerWidth > 1280
                          ? '/assets/icons/submit/submit_1920_a.png'
                          : '/assets/icons/submit/submit_1280_a.png',
                      )
                    }
                    onMouseOut={() =>
                      setSubmitSrc(
                        process.env.PUBLIC_URL + window.innerWidth > 1280
                          ? '/assets/icons/submit/submit_1920.png'
                          : '/assets/icons/submit/submit_1280.png',
                      )
                    }
                  />

                  {/* <Button
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '1.3em',
                      fontSize: window.innerWidth > 1280 ? '20px' : '10px',
                    }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    <Image
                      src={arrow}
                      alt="arrow"
                      style={{
                        border: '2px solid #ffffff',
                        borderRadius: '50%',
                        padding: window.innerWidth > 1280 ? '20px' : '11px',
                        cursor: 'pointer',
                        backgroundColor: '#121212',
                        height: window.innerWidth > 1280 ? '14px' : '9px',
                      }}
                    />
                    SUBMIT
                  </Button> */}
                </FormInputRowWrap>
              </Form>
            </FormWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{ padding: '10vh 0', margin: '0 7vw', width: '86vw', borderTop: '2px solid #B1B1B1' }}
          >
            <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '20px'}
              $fontWeight="500"
              $color="#E5E5E5"
              $align="start"
            >
              {t('contact.location.title')}
            </Text>
            <FormWrap style={{ gap: window.innerWidth > 1280 ? '40px' : '25px' }}>
              <RowWrap
                style={{
                  borderBottom: window.innerWidth > 1280 ? '2px solid #707070' : '1px solid #707070',
                  padding: window.innerWidth > 1280 ? '1em 0' : '0.8em 0',
                }}
                onClick={() => {
                  window.open(
                    'https://www.google.com/maps/place/La+Jolla+Centre+I,+4660+La+Jolla+Village+Dr+%231070,+San+Diego,+CA+92121,+USA/@32.8746797,-117.2089889,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc073244120117:0xad78fb4d9afd9f57!8m2!3d32.8746797!4d-117.206414?entry=ttu',
                    '_blank',
                  );
                }}
              >
                <span style={{ fontSize: window.innerWidth > 1280 ? '20px' : '12px', fontWeight: '400', zIndex: '-1' }}>
                  {t('contact.location.us')}
                </span>
                <Image
                  src={arrow}
                  alt="location_arrow"
                  style={{
                    height: window.innerWidth > 1280 ? '20px' : '12px',

                    zIndex: '-1',
                  }}
                />
              </RowWrap>
              <RowWrap
                style={{
                  borderBottom: window.innerWidth > 1280 ? '2px solid #707070' : '1px solid #707070',
                  padding: window.innerWidth > 1280 ? '1em 0' : '0.8em 0',
                }}
                onClick={() => {
                  window.open(
                    'https://www.google.com/maps/place/(%EC%A3%BC)%EC%95%84%EB%A6%AC%EB%B0%94%EC%9D%B4%EC%98%A4/data=!3m1!4b1!4m6!3m5!1s0x357b58759f3e1a6f:0xba7138c19b018cf2!8m2!3d37.3878714!4d127.1149864!16s%2Fg%2F11bytsn4nc?entry=ttu',
                    '_blank',
                  );
                }}
              >
                <span style={{ fontSize: window.innerWidth > 1280 ? '20px' : '12px', fontWeight: '400', zIndex: '-1' }}>
                  {' '}
                  {t('contact.location.kr')}
                </span>
                <Image
                  src={arrow}
                  alt="location_arrow"
                  style={{
                    height: window.innerWidth > 1280 ? '20px' : '12px',

                    zIndex: '-1',
                  }}
                />
              </RowWrap>
            </FormWrap>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          <HomeComponentWrap>
            <TextWrap style={{ width: '80vw' }}>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                {t('contact.title')}
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '60px',
                  borderRight: '2px solid #ffffff',
                  margin: '0 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="500" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                <Trans i18nKey="contact.subtitle_m" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
            <Text $fontSize="20px" $fontWeight="300" $color="#E5E5E5" $align="start">
              <Trans i18nKey="contact.desc" components={{ 1: <br /> }} />
            </Text>
            <FormWrap style={{ paddingLeft: '0', paddingTop: '1rem', marginTop: '0' }}>
              <ErrorBox
                id={isError ? 'warning' : ''}
                style={{
                  position: 'relative',
                  fontSize: '16px',
                  left: '0',
                  top: '0',
                  width: '100%',
                  margin: '1rem 0',
                  lineHeight: '22px',
                }}
                $isActive={isError}
              >
                <Trans i18nKey="contact.error_m" components={{ 1: <br /> }} />
              </ErrorBox>
              <SuccessBox
                id={isSuccess ? 'warning' : ''}
                style={{
                  position: 'relative',
                  fontSize: '16px',
                  left: '0',
                  top: '0',
                  width: '100%',
                  margin: '1rem 0 2rem 0',
                  lineHeight: '22px',
                }}
                $isActive={isSuccess}
              >
                {t('contact.success')}
              </SuccessBox>
              <Form>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.firstName !== ''}>
                  <Label htmlFor="firstName">
                    {t('contact.firstname')}
                    <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="text"
                    name="firstName"
                    autoComplete="off"
                    value={contactInfo.firstName}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && !contactInfo.firstName && (
                    <RequiredField style={{ fontSize: '16px', fontWeight: '300' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: 'auto' }}
                      />
                      {t('contact.required')}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.lastName !== ''}>
                  <Label htmlFor="lastName">
                    {t('contact.lastname')} <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="text"
                    name="lastName"
                    autoComplete="off"
                    value={contactInfo.lastName}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && !contactInfo.lastName && (
                    <RequiredField style={{ fontSize: '16px', fontWeight: '300' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: 'auto' }}
                      />
                      {t('contact.required')}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.email !== ''}>
                  <Label htmlFor="email">
                    {t('contact.email')} <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={contactInfo.email}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && (!contactInfo.email || !contactInfo.email.includes('@')) && (
                    <RequiredField style={{ fontSize: '16px', fontWeight: '300' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: 'auto' }}
                      />
                      {emailError}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.phone !== ''}>
                  <Label htmlFor="phone">{t('contact.phone')}</Label>
                  <Input
                    type="phone"
                    name="phone"
                    autoComplete="off"
                    value={contactInfo.phone}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                </FormInputRowWrap>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.affiliation !== ''}>
                  <Label htmlFor="affiliation">{t('contact.affiliation')}</Label>
                  <Input
                    type="text"
                    name="affiliation"
                    autoComplete="off"
                    value={contactInfo.affiliation}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                </FormInputRowWrap>
                <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.message !== ''}>
                  <Label className="message" htmlFor="message">
                    {t('contact.message')} <span style={{ color: '#00A6FF' }}>* </span>
                  </Label>
                  <Input
                    type="text"
                    name="message"
                    autoComplete="off"
                    value={contactInfo.message}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                  />
                  {isError && !contactInfo.message && (
                    <RequiredField style={{ fontSize: '16px', fontWeight: '300' }}>
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/exclamation.svg'}
                        alt="warning"
                        style={{ height: 'auto' }}
                      />
                      {t('contact.required')}
                    </RequiredField>
                  )}
                </FormInputRowWrap>
                <FormInputRowWrap
                  style={{
                    flexDirection: 'column',
                    gridColumnEnd: '2 span',
                    justifyContent: 'start',
                    alignItems: 'end',
                    border: 'none',
                    gap: '0.5em',
                  }}
                >
                  <span>
                    <span style={{ color: '#00A6FF' }}>* </span>
                    <span style={{ fontSize: '14px', fontWeight: '200', color: '#E5E5E5' }}>is a required field. </span>
                  </span>
                  <Image
                    src={submitSrc}
                    alt="submit"
                    style={{
                      cursor: 'pointer',
                      marginTop: '80px',
                      width: '131px',
                    }}
                    onClick={(e) => handleSubmit(e)}
                    onMouseOver={() => setSubmitSrc(process.env.PUBLIC_URL + '/assets/icons/submit/submit_360_a.png')}
                    onMouseOut={() => setSubmitSrc(process.env.PUBLIC_URL + '/assets/icons/submit/submit_360.png')}
                  />
                  {/* <Button
                    className={isSuccess ? 'submit' : ''}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',

                      fontSize: '14px',
                      width: '131px',
                      height: '47px',
                      borderWidth: '1px',
                      padding: '0',
                    }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    <Image
                      src={arrow}
                      alt="arrow"
                      style={{
                        border: '1px solid #ffffff',
                        borderRadius: '50%',
                        padding: '11.5px',
                        zIndex: '1',
                        height: '20px',

                        marginRight: '1em',
                      }}
                    />
                    SUBMIT
                  </Button> */}
                </FormInputRowWrap>
              </Form>
            </FormWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{ padding: '10vh 0', margin: '0 5vw', width: '90vw', borderTop: '2px solid #B1B1B1' }}
          >
            <HR style={{ alignSelf: 'start', marginBottom: '0.5em', height: '1px', width: '20px' }} />
            <Text $fontSize="20px" $fontWeight="300" $color="#D3D3D3" $align="start">
              {t('contact.location.title')}
            </Text>
            <FormWrap style={{ gap: '1em', paddingLeft: '0', marginTop: '2em', marginBottom: '10em' }}>
              <RowWrap
                style={{ borderBottom: '2px solid #707070', padding: '0.2em 0', height: '33px' }}
                onClick={() => {
                  window.open(
                    'https://www.google.com/maps/place/La+Jolla+Centre+I,+4660+La+Jolla+Village+Dr+%231070,+San+Diego,+CA+92121,+USA/@32.8746797,-117.2089889,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc073244120117:0xad78fb4d9afd9f57!8m2!3d32.8746797!4d-117.206414?entry=ttu',
                    '_blank',
                  );
                }}
              >
                <span style={{ fontSize: '16px', zIndex: '-1' }}>{t('contact.location.us')}</span>
                <Image src={arrow} alt="location_arrow" style={{ zIndex: '-1', height: '10px' }} />
              </RowWrap>
              <RowWrap
                style={{
                  borderBottom: '2px solid #707070',
                  padding: '0.2em 0',
                  lineHeight: '20px',
                  height: '33px',
                }}
                onClick={() => {
                  window.open(
                    'https://www.google.com/maps/place/(%EC%A3%BC)%EC%95%84%EB%A6%AC%EB%B0%94%EC%9D%B4%EC%98%A4/data=!3m1!4b1!4m6!3m5!1s0x357b58759f3e1a6f:0xba7138c19b018cf2!8m2!3d37.3878714!4d127.1149864!16s%2Fg%2F11bytsn4nc?entry=ttu',
                    '_blank',
                  );
                }}
              >
                <span style={{ fontSize: '16px', zIndex: '-1' }}>{t('contact.location.us')}</span>
                <Image src={arrow} alt="location_arrow" style={{ zIndex: '-1', height: '10px' }} />
              </RowWrap>
            </FormWrap>
          </HomeComponentWrap>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
