import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import arrow from '../../assets/images/arrow.svg';
import { Container, HomeComponentWrap, TextWrap, Text, Image, ContentBox } from './style';
import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Video from '../../components/Video';

import useParnerList from '../../hooks/contact/usePartnerList';
import Language from '../../atom/Language';
import { useRecoilValue } from 'recoil';

const Partner = () => {
  const navigate = useNavigate();
  const [language] = useRecoilValue(Language);
  const { data, isLoading, refetch } = useParnerList(language);

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    if (data?.data?.success) {
      console.log(data?.data);
      const list = data?.data?.dataList;
      setItemList(
        list.map((item) => ({
          id: item.id,
          name: item?.fileDto?.fileName,
          imgUrl: item?.fileDto?.fileUrl,
        })),
      );
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <Header />
      <MainImgWrap>
        <Video
          page="partner"
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
        <span style={{ opacity: '0.5' }}>{`HOME > CONTACT > `}</span>PARTNER
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>PARTNER</HeadLine>
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
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
        <Desktop>
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap>
              <Text
                $color="#939598"
                $fontSize="26px"
                $fontWeight="300"
                style={{ fontSize: window.innerWidth > 1280 ? '26px' : '18px' }}
              >
                PARTNER
              </Text>
              <Text $fontSize="50px" $fontWeight="500" style={{ fontSize: window.innerWidth > 1280 ? '50px' : '34px' }}>
                Current Partnerships
              </Text>
              <hr
                style={{
                  width: window.innerWidth > 1280 ? '60px' : '36px',
                  border: '2px solid #ffffff',
                  margin: '3.5rem 0 5rem 0',
                }}
              />
              <Text
                $fontSize="23px"
                $fontWeight="300"
                $color="#D3D3D3"
                style={{ fontSize: window.innerWidth > 1280 ? '23px' : '13px' }}
              >
                Aligned in our mission, we focus on addressing the challenges of neurodegeneration
                <br />
                with our collaborative network spanning academia, industry, and patient advocacy groups worldwide.
                <br />
                Our goal is to be a trusted partner to all.
                <br />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{ paddingTop: '0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em' }}
          >
            {itemList.length > 0 &&
              itemList?.map((item, index) => (
                <ContentBox
                  className="partner"
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
                  <Image style={{ width: window.innerWidth > 1280 ? '220px' : '160px' }} src={item.imgUrl} alt="logo" />
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
                  width: window.innerWidth > 1280 ? '260px' : '158px',
                  paddingBottom: '0.7em',
                  borderBottom: '2px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                  cursor: 'pointer',
                  fontSize: window.innerWidth > 1280 ? '20px' : '12px',
                  borderWidth: window.innerWidth > 1280 ? '2px' : '1px',
                }}
                onClick={() => navigate('/contact/contactus')}
              >
                <span style={{ zIndex: '-1' }}>CONTACT US</span>
                <Image
                  src={arrow}
                  alt="arrow"
                  style={{ height: window.innerWidth > 1280 ? '14px' : '12px', zIndex: '-1' }}
                />
              </Text>
            </ContentBox>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          <HomeComponentWrap style={{ padding: '10vh 5vw' }}>
            <TextWrap style={{ width: '100%' }}>
              <Text $color="#939598" $fontSize="16px" $fontWeight="300">
                PARTNER
              </Text>
              <Text $fontSize="23px" $fontWeight="400">
                Current Partnerships
              </Text>
              <hr
                style={{ width: '20px', borderTop: '1px solid #ffffff', borderBottom: 'none', margin: '0 0 2em 0' }}
              />
              <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{ lineHeight: '21px' }}>
                Aligned in our mission,
                <br />
                we focus on addressing
                <br />
                the challenges of neurodegeneration
                <br />
                with our collaborative network spanning
                <br />
                academia, industry, and patient
                <br />
                advocacy groups worldwide.
                <br />
                Our goal is to be a trusted partner to all.
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap
            style={{
              paddingTop: '0',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3em',
            }}
          >
            {itemList.map((item, index) => (
              <ContentBox
                key={item.name + index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '1em ',
                }}
              >
                <Image style={{ width: '160px', height: '58px' }} src={item.imgUrl} alt="logo" />
              </ContentBox>
            ))}
          </HomeComponentWrap>
          <HomeComponentWrap style={{ padding: '0 5vw 20vh 5vw' }}>
            <ContentBox
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'end',
                paddingLeft: '33%',
                columnGap: '2em',
                rowGap: '4em',
              }}
            >
              <Text
                $fontWeight="300"
                $color="#ffffff"
                $align="start"
                $clickable={true}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '214px',
                  paddingBottom: '0',
                  borderBottom: '1px solid #ffffff',
                  gap: '1em',
                  margin: '0',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/contact/contactus')}
              >
                <span style={{ zIndex: '-1', fontSize: '16px' }}>CONTACT US</span>
                <Image src={arrow} alt="arrow" style={{ height: '10px', width: '10px', zIndex: '-1' }} />
              </Text>
            </ContentBox>
          </HomeComponentWrap>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default Partner;
