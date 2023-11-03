import React, { useEffect, useRef, useState } from 'react';

import { Container } from './style';

import isVideoPlayed from '../atom/isVideoPlayed';
import { useRecoilState } from 'recoil';
import { Desktop, Mobile } from '../utils/MediaQuery';

const Video = ({ page, src }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const video = videoRef?.current;
    setLoading(true);

    const handleVideoEnd = () => {
      if (video) {
        // if (page !== 'home') {
        //   video.currentTime = 0; // Set the start time of the loop (in seconds)
        //   video?.play();
        //   return;
        // } else {
        video.currentTime = 15; // Set the start time of the loop (in seconds)
        video?.play();
        // }
      }
    };
    const handleBodyClick = () => {
      const videoElement = videoRef.current;
      if (videoElement && !videoElement.playing) {
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
        video.addEventListener('suspend', () => {});
      }
    }

    // Clean up the event listener when the component unmounts
    return () => {
      video?.removeEventListener('ended', handleVideoEnd);
      document.body.removeEventListener('click', handleBodyClick);
      document.body.removeEventListener('touchstart', handleBodyClick);

      video?.removeEventListener('loadeddata', () => {
        console.log('unloaded');
      });
    };
  }, [page]);

  return (
    <Container
      id="video_container"
      style={{
        position: page === 'home' ? 'absolute' : 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#121212',
        zIndex: '10',
        overflow: 'hidden',
        transition: 'all 0.5s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Desktop>
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop={page !== 'home'}
          controls={false}
          preload="metadata"
          style={{ objectFit: 'cover', width: '100vw', height: '100vh' }}
        >
          <source src={src} type="video/mp4" />
        </video>
        {page === 'home' && (
          <img
            src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
            alt="home"
            style={{
              position: 'absolute',
              right: '7vw',
              bottom: '0',
              height: window.innerWidth > 1280 ? '60px' : '36px',
            }}
          />
        )}
      </Desktop>
      <Mobile>
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop={page !== 'home'}
          controls={false}
          preload="metadata"
          style={{ objectFit: 'cover', width: '100vw', height: '100vh' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </Mobile>
    </Container>
  );
};

export default Video;
