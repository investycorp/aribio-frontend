import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import { Container } from './style';

import isVideoPlayed from '../atom/isVideoPlayed';
import { useRecoilState } from 'recoil';
import { Desktop, Mobile } from '../utils/MediaQuery';

const Video = ({ page }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isVideo, setIsVideo] = useRecoilState(isVideoPlayed);

  useEffect(() => {
    const video = videoRef?.current;
    setLoading(true);
    const handleVideoEnd = () => {
      // When the video ends, set the currentTime to the start of the loop

      video.currentTime = 15; // Set the start time of the loop (in seconds)
      video.play();
      setIsVideo(true);
      !isVideo && document.querySelector('.container').scrollTo(0, 0);
    };

    if (video) {
      if (page !== 'home') setIsVideo(true);
      // else
      if (isVideo) {
        video.currentTime = 15;
        video.play();
        video.style.opacity = page !== 'home' && '0.3';
      }

      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('loadeddata', () => {
        setLoading(false);
        console.log('loaded');
      });
    }

    // Clean up the event listener when the component unmounts
    return () => {
      video?.removeEventListener('ended', handleVideoEnd);
      video?.removeEventListener('loadeddata', () => {
        console.log('unloaded');
      });
    };
  }, [page]);

  return (
    <Container
      id="video_container"
      style={{
        position: page === 'home' && isVideo ? 'absolute' : 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#121212',
        zIndex: isVideo ? '0' : '999',
        overflow: 'hidden',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          display: 'flex',
          opacity: loading ? '1' : '0',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          transition: 'opacity 0.5s ease-in-out',
          backgroundColor: '#121212',
          zIndex: '999',
        }}
      >
        <img src={process.env.PUBLIC_URL + '/assets/images/header_logo.png'} alt="loading" style={{ width: '40vw' }} />
      </div>

      <video ref={videoRef} autoPlay muted preload="metadata" style={{ width: '100%', height: '100%' }}>
        <Desktop>
          {window.innerWidth > 1280 ? (
            <source src={process.env.PUBLIC_URL + '/assets/videos/home/Home_1920.mp4'} type="video/mp4" />
          ) : (
            <source src={process.env.PUBLIC_URL + '/assets/videos/home/Home_1280.mp4'} type="video/mp4" />
          )}
        </Desktop>
        <Mobile>
          <source src={process.env.PUBLIC_URL + '/assets/videos/home/Home_360.mp4'} type="video/mp4" />
        </Mobile>
      </video>
    </Container>
  );
};

export default Video;
