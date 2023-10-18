import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import arrow from '../../assets/images/arrow.svg';
import contact_partner_cover from './assets/contact_partner_cover.png';
import partnerlogo1 from './assets/partnerlogo1.png';
import {
  Container,
  ContainerGridLineWrap,
  GridLineBox,
  MainImgWrap,
  HomeComponentWrap,
  TextWrap,
  Text,
  Image,
  ContentBox,
} from './style';

import { HeadLine, Path } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

const Partner = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [itemList, setItemList] = useState([
    { id: 1, name: 'skchemicals', imgUrl: partnerlogo1 },
    { id: 2, name: 'skchemicals', imgUrl: partnerlogo1 },
    { id: 3, name: 'skchemicals', imgUrl: partnerlogo1 },
    { id: 4, name: 'skchemicals', imgUrl: partnerlogo1 },
    { id: 5, name: 'skchemicals', imgUrl: partnerlogo1 },
    { id: 6, name: 'skchemicals', imgUrl: partnerlogo1 },
    { id: 7, name: 'skchemicals', imgUrl: partnerlogo1 },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <Header />
      <ContainerGridLineWrap>
        <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Path>{`HOME > CONTACT > PARTNER`}</Path>
      <MainImgWrap $src={contact_partner_cover}>
        <HeadLine>PARTNER</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <Desktop>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap>
            <Text $color="#939598" $fontSize="26px" $fontWeight="300">
              PARTNER
            </Text>
            <Text $fontSize="50px" $fontWeight="400">
              Current Partnerships
            </Text>
            <hr style={{ width: '4em', border: '2px solid #ffffff', margin: '3.5rem 0 5rem 0' }} />
            <Text $fontSize="23px" $fontWeight="300" $color="#D3D3D3">
              Aligned in our mission, we focus on addressing the challenges of neurodegeneration with our collaborative
              network spanning academia, industry, and patient advocacy groups worldwide. Our goal is to be a trusted
              partner in this field.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{ paddingTop: '0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em' }}>
          {itemList.map((item, index) => (
            <ContentBox
              key={item.name + index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1em',
                height: '30vh',
              }}
            >
              <Image style={{ width: '--webkit-fill-available' }} src={item.imgUrl} alt="logo" />
            </ContentBox>
          ))}
        </HomeComponentWrap>
        <HomeComponentWrap style={{ padding: '0 7vw 20vh 7vw' }}>
          <ContentBox
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'end',
              padding: '0',
              columnGap: '2em',
              rowGap: '4em',
            }}
          >
            <Text
              $fontSize="20px"
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
              onClick={() => navigate('/contactus')}
            >
              <span style={{ zIndex: '-1' }}>CONTACT US</span>
              <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
            </Text>
          </ContentBox>
        </HomeComponentWrap>
      </Desktop>
      <Mobile></Mobile>
      <Footer />
    </Container>
  );
};

export default Partner;