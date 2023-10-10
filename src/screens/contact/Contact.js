import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import arrow from '../../assets/images/arrow.svg';
import contact_cover from './assets/contact_cover.png';
import {
  Container,
  ContainerGridLineWrap,
  GridLineBox,
  MainImgWrap,
  Path,
  HeadLine,
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

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    affiliation: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState('This field is required.');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
    console.log(contactInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = await checkValidation();
    if (isValid === true) {
      await setTimeout(() => {
        setIsSuccess(true);
      }, 500);
      console.log('submitted');
      setIsError(false);
      setContactInfo({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        affiliation: '',
        message: '',
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
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
      <ContainerGridLineWrap>
        <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Path>{`HOME > CONTACT > CONTACT US`}</Path>
      <MainImgWrap $src={contact_cover}>
        <HeadLine>CONTACT US</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
        <TextWrap style={{ width: '70vw' }}>
          <Text $fontSize="26px" $fontWeight="300" $color="#939598">
            CONTACT US
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
            We appreciate your interest in AriBio.
          </Text>
        </TextWrap>
      </HomeComponentWrap>
      <HomeComponentWrap>
        <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
        <Text $fontSize="32px" $fontWeight="300" $color="#E5E5E5" $align="start">
          We look forward <br />
          to hearing from you.
        </Text>
        <FormWrap>
          <ErrorBox $isActive={isError}>Sorry, there was an error submitting the form. Please try again.</ErrorBox>
          <SuccessBox $isActive={isSuccess}>Form has been submitted successfully!</SuccessBox>
          <Form>
            <FormInputRowWrap $isFilled={contactInfo.firstName !== ''}>
              <Label htmlFor="firstName">
                First Name <span style={{ color: '#00A6FF' }}>* </span>
              </Label>
              <Input
                type="text"
                name="firstName"
                autoComplete="off"
                value={contactInfo.firstName}
                onChange={(e) => handleChange(e)}
              />
              {isError && !contactInfo.firstName && (
                <RequiredField>
                  <span style={{ padding: '0 0.5em', border: '1px solid #CB305A', borderRadius: '50%' }}>!</span> This
                  field is required.
                </RequiredField>
              )}
            </FormInputRowWrap>
            <FormInputRowWrap style={{ marginLeft: '2rem' }} $isFilled={contactInfo.lastName !== ''}>
              <Label htmlFor="lastName">
                Last Name <span style={{ color: '#00A6FF' }}>* </span>
              </Label>
              <Input
                type="text"
                name="lastName"
                autoComplete="off"
                value={contactInfo.lastName}
                onChange={(e) => handleChange(e)}
              />
              {isError && !contactInfo.lastName && (
                <RequiredField>
                  <span style={{ padding: '0 0.5em', border: '1px solid #CB305A', borderRadius: '50%' }}>!</span> This
                  field is required.
                </RequiredField>
              )}
            </FormInputRowWrap>
            <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.email !== ''}>
              <Label htmlFor="email">
                Email <span style={{ color: '#00A6FF' }}>* </span>
              </Label>
              <Input
                type="email"
                name="email"
                autoComplete="off"
                value={contactInfo.email}
                onChange={(e) => handleChange(e)}
              />
              {isError && (!contactInfo.email || !contactInfo.email.includes('@')) && (
                <RequiredField>
                  <span style={{ padding: '0 0.5em', border: '1px solid #CB305A', borderRadius: '50%' }}>!</span>
                  {emailError}
                </RequiredField>
              )}
            </FormInputRowWrap>
            <FormInputRowWrap $isFilled={contactInfo.phone !== ''}>
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="phone"
                name="phone"
                autoComplete="off"
                value={contactInfo.phone}
                onChange={(e) => handleChange(e)}
              />
            </FormInputRowWrap>
            <FormInputRowWrap style={{ marginLeft: '2rem' }} $isFilled={contactInfo.affiliation !== ''}>
              <Label htmlFor="affiliation">Affiliation</Label>
              <Input
                type="text"
                name="affiliation"
                autoComplete="off"
                value={contactInfo.affiliation}
                onChange={(e) => handleChange(e)}
              />
            </FormInputRowWrap>
            <FormInputRowWrap style={{ gridColumnEnd: '2 span' }} $isFilled={contactInfo.message !== ''}>
              <Label className="message" htmlFor="message">
                Message <span style={{ color: '#00A6FF' }}>* </span>
              </Label>
              <Input
                type="text"
                name="message"
                autoComplete="off"
                value={contactInfo.message}
                onChange={(e) => handleChange(e)}
              />
              {isError && !contactInfo.message && (
                <RequiredField>
                  <span style={{ padding: '0 0.5em', border: '1px solid #CB305A', borderRadius: '50%' }}>!</span> This
                  field is required.
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
                <span style={{ color: '#E5E5E5' }}>is a required field. </span>
              </span>
              <Button
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1em' }}
                onClick={(e) => handleSubmit(e)}
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  style={{ border: '2px solid #ffffff', borderRadius: '50%', padding: '0.5em', zIndex: '-1' }}
                />
                SUBMIT
              </Button>
            </FormInputRowWrap>
          </Form>
        </FormWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ borderTop: '2px solid #B1B1B1' }}>
        <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
        <Text $fontSize="32px" $fontWeight="300" $color="#E5E5E5" $align="start">
          Locations
        </Text>
        <FormWrap style={{ gap: '1em' }}>
          <RowWrap
            style={{ borderBottom: '1px solid #707070', padding: '0.5em' }}
            onClick={() => {
              window.open(
                'https://www.google.com/maps/place/La+Jolla+Centre+I,+4660+La+Jolla+Village+Dr+%231070,+San+Diego,+CA+92121,+USA/@32.8746797,-117.2089889,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc073244120117:0xad78fb4d9afd9f57!8m2!3d32.8746797!4d-117.206414?entry=ttu',
                '_blank',
              );
            }}
          >
            <span style={{ fontSize: '20px', zIndex: '-1' }}>San Diego, 92112, USA</span>
            <Image src={arrow} alt="location_arrow" style={{ zIndex: '-1' }} />
          </RowWrap>
          <RowWrap
            style={{ borderBottom: '1px solid #707070', padding: '0.5em' }}
            onClick={() => {
              window.open(
                'https://www.google.com/maps/place/(%EC%A3%BC)%EC%95%84%EB%A6%AC%EB%B0%94%EC%9D%B4%EC%98%A4/data=!3m1!4b1!4m6!3m5!1s0x357b58759f3e1a6f:0xba7138c19b018cf2!8m2!3d37.3878714!4d127.1149864!16s%2Fg%2F11bytsn4nc?entry=ttu',
                '_blank',
              );
            }}
          >
            <span style={{ fontSize: '20px', zIndex: '-1' }}> Gyeonggi-do, Republic of Korea</span>
            <Image src={arrow} alt="location_arrow" style={{ zIndex: '-1' }} />
          </RowWrap>
        </FormWrap>
      </HomeComponentWrap>
      <Footer />
    </Container>
  );
};

export default Contact;
