import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import { Container } from './style';

import isVideoPlayed from '../atom/isVideoPlayed';
import { useRecoilState } from 'recoil';
import { Desktop, Mobile } from '../utils/MediaQuery';

const Video = ({ page }) => {
  const videoRef = useRef(null);
  const [looping, setLooping] = useState(false);
  const [isVideo, setIsVideo] = useRecoilState(isVideoPlayed);

  useEffect(() => {
    const video = videoRef.current;

    if (page !== 'home') setIsVideo(true);
    // else
    if (isVideo) {
      video.currentTime = 15;
      video.play();
      video.style.opacity = '0.3';
    }

    const handleVideoEnd = () => {
      // When the video ends, set the currentTime to the start of the loop

      video.currentTime = 15; // Set the start time of the loop (in seconds)
      video.play();
      setIsVideo(true);
    };

    video.addEventListener('ended', handleVideoEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
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
      {/* <ReactPlayer
        id="video"
        muted
        playing={true}
        loop={false}
        controls={false}
        url={process.env.PUBLIC_URL + '/assets/videos/home/Home_1920.mp4'}
        height="100%"
        width="100%"
        onEnded={() => {
          console.log('done');
          setIsVideo(true);
        }}
      /> */}
      <video ref={videoRef} autoPlay muted style={{ width: '100%', height: '100%' }}>
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
