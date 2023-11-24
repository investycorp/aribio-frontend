import React, { useEffect, useRef, useState } from 'react';
import { Container } from './style';
import { Desktop, Mobile } from '../utils/MediaQuery';

const Video = ({ page, src }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);

  useEffect(() => {
    const video = videoRef?.current;
    setLoading(true);

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

      video.removeEventListener('suspend', () => {});

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
          style={{
            objectFit: page === 'home' && window.innerWidth < 1100 ? 'contain' : 'cover',
            width: '100vw',
            height: '100vh',
          }}
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
              bottom: '5vw',
              height: window.innerWidth > 1280 ? '60px' : '36px',
            }}
          />
        )}
      </Desktop>
      <Mobile>
        {
          // !isSuspended ? (
          <video
            ref={videoRef}
            playsInline
            autoPlay
            muted
            loop={page !== 'home'}
            controls={false}
            preload="metadata"
            style={{
              objectFit: page === 'home' ? 'contain' : 'cover',
              width: '100vw',
              height: '100vh',
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
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
              height: window.innerWidth > 1280 ? '60px' : '36px',
            }}
          />
          <img id="hide" src={process.env.PUBLIC_URL + '/assets/icons/indicator.svg'} alt='indocator1' style={{width: '121px', height: '16px', zIndex: '110', position: 'absolute', bottom: '7vh' }} />
          </>
        )}
      </Mobile>
    </Container>
  );
};

export default Video;
