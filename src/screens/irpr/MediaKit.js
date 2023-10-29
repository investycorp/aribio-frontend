import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReactPlayer from 'react-player/youtube';
import vertical_arrow from './../../assets/images/vertical_arrow.svg';
import irpr_mediakit_cover from './assets/irpr_mediakit_cover.png';
import irpr_mediakit_videopreviewimg from './assets/irpr_mediakit_videopreviewimg.png';

import { Container, HomeComponentWrap, TextWrap, Text, ComponentWrap, HR } from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Video from '../../components/Video';

import { Link, useNavigate, useParams } from 'react-router-dom';
import Language from '../../atom/Language';
import { useRecoilState } from 'recoil';
import useMediaList from '../../hooks/irpr/useMediaList';

const MediaKit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useRecoilState(Language);
  const { data, isLoading, refetch } = useMediaList(language);
  const [currentVideo, setCurrentVideo] = useState({ title: '', url: '' });
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data?.data.success) {
      setItemsList([]);
      const item = data.data.data.mediaKitDtoList;
      item.map((content) => {
        setItemsList((prev) => [
          ...prev,
          {
            id: content.id,
            title: content.title,

            date: `${content.month} ${content.day}, ${content.year}`,
            link: content.url,
          },
        ]);

        if (!id) setCurrentVideo({ title: item[0]?.title, url: item[0]?.url });
      });
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      const video = itemsList?.find((item) => item.id === parseInt(id));
      setCurrentVideo({ title: video?.title, url: video?.link });
    }
  }, [id]);

  useEffect(() => {
    console.log(currentVideo?.title);
  }, [currentVideo]);

  return (
    <Container className="container">
      <MainImgWrap>
        <Video page="mediakit" />
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <Header />
      <Path>{`HOME > IR & PR > MEDIA`}</Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>MEDIA</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>
      <>
        <Desktop>
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap style={{ width: '70vw' }}>
              <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                MEDIA
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
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="400"
                $color="#ffffff"
                style={{ margin: '2rem 0 0 0' }}
              >
                Explore Our Content
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <ComponentWrap style={{ justifyContent: 'center', alignItems: 'center', padding: '0' }}>
              <ReactPlayer url={currentVideo.url} width="100%" height="50vh" playsinline={true} />
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
              }}
            >
              {itemsList.map((item, index) => (
                <div
                  key={item.title + index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '2rem',
                    borderLeft: '2px solid #B1B1B1',
                  }}
                  onClick={() => {
                    navigate(`/irpr/mediakit/${item.id}`);
                  }}
                >
                  <Text
                    $align="start"
                    $fontWeight="300"
                    $color="#ffffff"
                    style={{ margin: '0 0 1rem 0', fontSize: window.innerWidth > 1280 ? '24px' : '14px', zIndex: '-1' }}
                  >
                    {item.title}
                  </Text>
                  <HR />
                  <Text
                    $align="start"
                    $fontWeight="300"
                    $color="#E3E3E3"
                    style={{ margin: '1rem 0 0 0', fontSize: window.innerWidth > 1280 ? '18px' : '14px', zIndex: '-1' }}
                  >
                    {item.date}
                  </Text>
                </div>
              ))}
            </ComponentWrap>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
            <TextWrap style={{ width: '70vw' }}>
              <Text $fontWeight="300" $color="#939598" style={{ fontSize: '16px' }}>
                MEDIA
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '60px',
                  borderRight: '1px solid #ffffff',
                  margin: '0',
                }}
              ></div>
              <Text $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0', fontSize: '23px' }}>
                Explore Our Content
              </Text>
            </TextWrap>
          </HomeComponentWrap>

          <HomeComponentWrap>
            <ComponentWrap style={{ justifyContent: 'center', alignItems: 'center', padding: '0' }}>
              <ReactPlayer url={currentVideo.url} width="100%" height="328px" playsinline={true} />
            </ComponentWrap>
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
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '1rem 1rem',
                    borderLeft: '1px solid #B1B1B1',
                  }}
                  onClick={() => {
                    navigate(`/irpr/mediakit/${item.id}`);
                  }}
                >
                  <Text
                    $align="start"
                    $fontWeight="300"
                    $color="#ffffff"
                    style={{ margin: '0 0 1rem 0', fontSize: '18px' }}
                  >
                    {item.title}
                  </Text>

                  <Text $align="start" $fontWeight="300" style={{ margin: '0', fontSize: '16px', color: '#DBDBDB' }}>
                    {item.date}
                  </Text>
                </div>
              ))}
            </ComponentWrap>
          </HomeComponentWrap>
        </Mobile>
      </>

      <Footer />
    </Container>
  );
};

export default MediaKit;
