import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, HomeComponentWrap, TextWrap, Text, ComponentWrap, HR } from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Video from '../../components/Video';

import { Link, useNavigate, useParams } from 'react-router-dom';
import Language from '../../atom/Language';
import { useRecoilState } from 'recoil';
import useMediaList from '../../hooks/irpr/useMediaList';
import VideoFrame from '../../components/VideoFrame';

import { t } from 'i18next';

const MediaKit = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const { data, isLoading, refetch } = useMediaList(language);
  const [currentVideo, setCurrentVideo] = useState({ title: '', url: '' });
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    console.log('language:', language);
    refetch(language);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    setCurrentVideo({
      title: '',
      url: null,
    });
  }, []);

  useEffect(() => {
    setItemsList([]);

    if (data?.data?.success) {
      const item = data?.data?.data?.mediaKitDtoList;
      const representativeItem = data?.data?.data?.representativeMediaKitDto;

      if (representativeItem?.id) {
        setItemsList([{
          id: representativeItem?.id,
          title: representativeItem?.title,
          date: `${representativeItem?.month} ${representativeItem?.day}, ${representativeItem?.year}`,
          link: representativeItem?.url,
        }])
      }

      item?.map((content) => {
        setItemsList((prev) => [
          ...prev,
          {
            id: content?.id,
            title: content?.title,
            date: `${content?.month} ${content?.day}, ${content?.year}`,
            link: content?.url,
          },
        ]);
      });

      setCurrentVideo({title: representativeItem?.title, url: representativeItem?.url});
    }
  }, [data]);

  useEffect(() => {
    console.log('LISTS',itemsList);
  }, [itemsList]);

  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="mediakit"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0700PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1600PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2500PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME > IR & PR > `}</span> MEDIA
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine $className="midsize">MEDIA</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
            height: window.innerWidth > 1280 ? '24px' : '14px',
          }}
        />
      </HomeComponentWrap>
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <>
          <Desktop>
            <HomeComponentWrap style={{ padding: '15vh 7vw 5vh 7vw' }}>
              <TextWrap style={{ width: '70vw' }}>
                <Text
                  style={{ fontSize: window.innerWidth > 1280 ? '26px' : '18px' }}
                  $fontWeight="300"
                  $color="#939598"
                >
                  {t('media.title')}
                </Text>
                <div
                  style={{
                    alignSelf: 'center',
                    width: window.innerWidth > 1280 ? '60px' : '40px',
                    height: '2px',
                    border: '1px solid #ffffff',
                    margin: window.innerWidth > 1280 ? '80px 0' : '52px 0',
                  }}
                ></div>
                <Text
                  $fontWeight="500"
                  $color="#ffffff"
                  style={{ fontSize: window.innerWidth > 1280 ? '50px' : '34px' }}
                >
                  {t('media.subtitle')}
                </Text>
              </TextWrap>
            </HomeComponentWrap>
            <HomeComponentWrap>
              <ComponentWrap
                style={{
                  width: '100%',
                  height: 'fit-content',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0',
                  borderRadius: '20px',
                }}
              >
                <VideoFrame src={currentVideo.url} />
              </ComponentWrap>
              <ComponentWrap
                className="mediakit_item"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0',
                  margin: '10vh 0',
                  rowGap: '5rem',
                }}
              >
                {itemsList.map((item, index) => (
                  <div
                    key={item?.title + index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'start',
                      padding: window.innerWidth > 1280 ? '0 2rem' : '0 1.5rem',
                      borderLeft: '2px solid #B1B1B1',
                      height: 'auto',
                      borderWidth: window.innerWidth > 1280 ? '2px' : '1px',
                    }}
                    onClick={() => {
                      item?.id && setCurrentVideo({ id: item?.id, title: item?.title, url: item?.link });
                      window.scrollTo(0, window.innerHeight * 1.2);
                    }}
                  >
                    <Text
                      $align="start"
                      $fontWeight="300"
                      $color="#ffffff"
                      style={{
                        margin: '0 0 1rem 0',
                        fontSize: window.innerWidth > 1280 ? '24px' : '14px',
                        zIndex: '-1',
                      }}
                    >
                      {item?.title.slice(0, 80)}
                      {item?.title.length > 80 && '...'}
                    </Text>
                    <HR
                      $width={window.innerWidth > 1280 ? '40px' : '25px'}
                      $height={window.innerWidth > 1280 ? '2px' : '1px'}
                      style={{ marginTop: '1em' }}
                    />
                    <Text
                      $align="start"
                      $fontWeight="300"
                      $color="#E3E3E3"
                      style={{
                        margin: '1rem 0 0 0',
                        fontSize: window.innerWidth > 1280 ? '18px' : '14px',
                        zIndex: '-1',
                      }}
                    >
                      {item?.date}
                    </Text>
                  </div>
                ))}
              </ComponentWrap>
            </HomeComponentWrap>
          </Desktop>


          <Mobile>
            <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
              <TextWrap style={{ width: '70vw' }}>
                <Text $fontWeight="300" $color="#939598" style={{ marginBottom: '0', fontSize: '16px' }}>
                  {t('media.title')}
                </Text>
                <div
                    style={{
                      alignSelf: 'center',
                      width: '20px',
                      height: '1px',
                      border: '1px solid #ffffff',
                      margin: '28px 0',
                    }}
                />
                <Text $fontWeight="500" $color="#ffffff" style={{ fontSize: '23px' }}>
                  {t('media.subtitle')}
                </Text>
              </TextWrap>
            </HomeComponentWrap>

            <HomeComponentWrap>
              {currentVideo?.url && (
                <ComponentWrap style={{ justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                  <VideoFrame src={currentVideo?.url} />
                </ComponentWrap>
              )}
              <ComponentWrap
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0',
                  margin: '10vh 0',
                  gap: '2rem',
                }}
              >
                {itemsList.map((item, index) => (
                  <div
                    key={item.title + index}
                    style={{
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'column',
                      justifyContent: 'start',
                      alignItems: 'start',
                      padding: '0 1rem',
                      borderLeft: '1px solid #B1B1B1',
                    }}
                    onClick={() => {
                      item?.id && setCurrentVideo({ id: item?.id, title: item?.title, url: item?.link });
                      window.scrollTo(0, window.innerHeight * 1.2);
                    }}
                  >
                    <Text
                      $align="start"
                      $fontWeight="400"
                      $color="#ffffff"
                      style={{ margin: '0 0 1rem 0', fontSize: '18px' }}
                    >
                      {item?.title}
                    </Text>

                    <Text $align="start" $fontWeight="300" style={{ margin: '0', fontSize: '16px', color: '#DBDBDB' }}>
                      {item?.date}
                    </Text>
                  </div>
                ))}
              </ComponentWrap>
            </HomeComponentWrap>
          </Mobile>
        </>
      </div>
      <Footer />
    </Container>
  );
};

export default MediaKit;
