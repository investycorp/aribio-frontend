import React, { useEffect, useRef, useState } from 'react';

import { Container } from './style';

import isVideoPlayed from '../atom/isVideoPlayed';
import { useRecoilState } from 'recoil';
import { Desktop, Mobile } from '../utils/MediaQuery';

const Video = ({ page }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isVideo, setIsVideo] = useRecoilState(isVideoPlayed);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);

  useEffect(() => {
    // if (page !== 'home') setIsVideo(true);
    const video = videoRef?.current;
    setLoading(true);

    const handleVideoEnd = () => {
      // When the video ends, set the currentTime to the start of the loop
      if (video) {
        video.currentTime = 15; // Set the start time of the loop (in seconds)
        video.play();
        // !isVideo && document.querySelector('.container').scrollTo(0, 0);
        setIsVideo(true);
      }
    };

    const handleKeyDown = (e) => {
      // && video.currentTime > 7
      if (!hasVideoEnded && !isVideo) {
        if (e.key === 'Escape' || e.key === 'Esc' || e.key === 'Enter') {
          setHasVideoEnded(true); // Set the flag to true to ensure it only triggers once
          handleVideoEnd();
        }
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
    window.addEventListener('keydown', handleKeyDown);

    if (video) {
      // else
      if (page !== 'home') {
        video.currentTime = 15;
        video?.play();
      }

      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('loadeddata', () => {
        setLoading(false);
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
          controls={false}
          preload="metadata"
          style={{ width: '100vw', height: 'fit-content', opacity: page === 'home' ? '1' : '0.3' }}
        >
          {window.innerWidth > 1280 ? (
            <source src={process.env.PUBLIC_URL + '/assets/videos/home/Home_1920.mp4'} type="video/mp4" />
          ) : (
            <source src={process.env.PUBLIC_URL + '/assets/videos/home/Home_1280.mp4'} type="video/mp4" />
          )}
        </video>
      </Desktop>
      <Mobile>
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          controls={false}
          preload="metadata"
          style={{ width: 'fit-content', height: '100vh', opacity: page === 'home' ? '1' : '0.3' }}
        >
          <source src={process.env.PUBLIC_URL + '/assets/videos/home/Home_360.mp4'} type="video/mp4" />
        </video>
      </Mobile>
    </Container>
  );
};

export default Video;
