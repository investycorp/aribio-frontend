import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import {Container} from './style';
import {Desktop, Mobile} from '../utils/MediaQuery';
import ReactPlayer from 'react-player';

const VideoContainer = styled(Container)`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-color: #121212;
  z-index: 10;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  object-fit: cover;
`;

const Video = ({page, src, onLayout, videoWidth}) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setIsPlay(true);
    const video = videoRef?.current;
    setLoading(true);
    window.addEventListener('scroll', () => {
      window.scrollY > 0 && setShown(true);
    });

    const handleVideoEnd = () => {
      if (video) {
        video.currentTime = 15;
        video?.play();
      }
    };
    const handleBodyClick = () => {
      const videoElement = videoRef.current;
      if (videoElement && videoElement.paused) {
        videoElement.play();
      }
    };

    if (video) {
      video.addEventListener('loadeddata', () => {
        setLoading(false);
      });

      if (page === 'home') {
        video.addEventListener('ended', handleVideoEnd);
      }

      //when video is suspended on mobile
      if (window.innerWidth <= 900) {
        document.body.addEventListener('click', handleBodyClick);
        document.body.addEventListener('touchstart', handleBodyClick);
        if (window.navigator.userAgent.includes('iPhone')) {
          video.addEventListener('suspend', () => {
            if (video.paused) setIsSuspended(true);
          });
        }
      }
    }

    // Clean up the event listener when the component unmounts
    return () => {
      video?.removeEventListener('ended', handleVideoEnd);
      document.body.removeEventListener('click', handleBodyClick);
      document.body.removeEventListener('touchstart', handleBodyClick);
      window.removeEventListener('scroll', () => {});

      video.removeEventListener('suspend', () => {});

      video?.removeEventListener('loadeddata', () => {});
    };
  }, [page]);

  return (
    <VideoContainer
      id="video_container"
      style={{
        position: page === 'home' ? 'absolute' : 'fixed',
        opacity: ['home', 'notice', 'pressrelease', 'mediakit'].includes(page) ? '1' : '0.5',
        // paddingTop: page !== 'home' ? '0' : window.innerWidth > 1280 ? '240px' : '97px',
      }}>
      <Desktop>
        <StyledVideo
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop={page !== 'home'}
          controls={false}
          preload="metadata"
          style={{
            width: videoWidth,
            objectFit: page === 'home' && window.innerWidth < 1100 ? 'contain' : 'cover',
          }}>
          <source src={src} type="video/mp4" />
        </StyledVideo>
        {/* <ReactPlayer
          url={src}
          playing={isPlay}
          loop={page !== 'home'}
          muted={true}
          width="100%"
          height="100%"
          style={{ }}
        /> */}
        {page === 'home' && (
          <img
            id="header"
            src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
            alt="home"
            style={{
              position: 'absolute',
              right: '7vw',
              bottom: '5vw',
              height: window.innerWidth > 1280 ? '24px' : '14px',
              opacity: shown ? '1' : '0',
            }}
          />
        )}
      </Desktop>
      <Mobile>
        {
          // !isSuspended ? (
          <StyledVideo
            ref={videoRef}
            playsInline
            autoPlay
            muted
            loop={page !== 'home'}
            controls={false}
            preload="metadata">
            <source src={src} type="video/mp4" />
          </StyledVideo>
          // ) : (
          //   <img
          //     src="https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0800PB_VD_opt.png"
          //     alt={`${page} background`}
          //     style={{ objectFit: 'cover', width: '100vw', height: '100vh' }}
          //   />
          // )
        }
        {page === 'home' && (
          <>
            <img
              src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
              alt="home"
              style={{
                position: 'absolute',
                right: '7vw',
                bottom: '7vh',
                height: '14px',
              }}
            />
            <img
              id="hide"
              src={process.env.PUBLIC_URL + '/assets/icons/indicator.svg'}
              alt="indocator1"
              style={{width: '121px', height: '16px', zIndex: '110', position: 'absolute', bottom: '7vh'}}
            />
          </>
        )}
      </Mobile>
    </VideoContainer>
  );
};

export default Video;
