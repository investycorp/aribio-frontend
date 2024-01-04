import React, {useState, useEffect, useRef} from 'react';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';
import Language from '../atom/Language';

const VideoFrameWrap = styled.div`
  position: relative;
  width: 100%;
  height: 726px;
  padding-bottom: 50px;
  overflow: hidden;
  border-radius: 20px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1280px) {
    height: 484px;
  }
  @media screen and (max-width: 900px) {
    height: 50vw;
  }

  iframe,
  object,
  embed {
    width: 86vw;
    height: 100%;
    @media screen and (max-width: 900px) {
      width: 90vw;
    }
  }
`;

const VideoFrame = ({src}) => {
  const [videoId, setVideoId] = useState('');
  const [isValidSrc, setIsValidSrc] = useState(true);
  const videoRef = useRef();

  // src 체크 로직
  const checkValidSrc = src => {
    if (!src) return false;

    try {
      const url = new URL(src);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
      if (url.host.includes('youtube.com') || url.host.includes('youtu.be')) {
        // 추가적인 YouTube URL 검증 로직
        return true;
      }
      // 기타 다른 도메인에 대한 검증 로직
    } catch (e) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const video = videoRef.current;

    if (src) {
      setVideoId('');
      const isValid = checkValidSrc(src);
      setIsValidSrc(isValid);
      if (isValid) {
        setVideoId(src?.split('watch?v=')[1]?.split('&')[0] || src?.split('=')[1]?.split('&')[0]);
      }
    }

    const handleClickStart = () => {
      if (window.innerWidth < 900) {
        if (video && video.paused) {
          video.play();
        } else if (video && !video.paused) {
          video.pause();
        }
      }
    };

    video?.addEventListener('click', handleClickStart);
    video?.addEventListener('touchstart', handleClickStart);
    video?.addEventListener('loaded', () => {
      console.log('loaded');
    });
    return () => {
      video?.removeEventListener('click', handleClickStart);
      video?.removeEventListener('touchstart', handleClickStart);
      video?.removeEventListener('loaded', () => {});
    };
  }, [src]);

  if (!isValidSrc) {
    return <VideoFrameWrap style={{backgroundColor: 'black'}} />;
  }

  return (
    <>
      {!src?.includes('iwinv') ? (
        <VideoFrameWrap id="focus">
          <iframe
            width="853"
            height="480"
            src={
              videoId && videoId !== ''
                ? `https://www.youtube.com/embed/${videoId}?modestbranding=0&rel=0`
                : `${src}?autostart=false`
            }
            allow=" clipboard-write; encrypted-media;  picture-in-picture"
            allowFullScreen
            title="AriBio Media"
          />
        </VideoFrameWrap>
      ) : (
        <div style={{position: 'relative', borderRadius: '20px'}}>
          <video
            ref={videoRef}
            playsInline
            autoPlay={false}
            controls={true}
            style={{
              borderRadius: '20px',
              width: window.innerWidth > 900 ? '86vw' : '90vw',
              height: window.innerWidth > 1280 ? '726px' : window.innerWidth > 900 ? '484px' : '202px',
            }}>
            <source
              src={
                // src
                'https://aribio.s3.ap-northeast-2.amazonaws.com/static/%5BEN%5DAriBio_AR100.mp4?autostart=false'
              }
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
};

export default VideoFrame;
