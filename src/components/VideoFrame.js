import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const VideoFrameWrap = styled.div`
  position: relative;
  width: 100%;
  height: 584px;
  padding-bottom: 50px;
  overflow: hidden;
  border-radius: 20px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1280px) {
    height: 355px;
  }
  @media screen and (max-width: 900px) {
    height: 202px;
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

const VideoFrame = ({ src }) => {
  const [source, setSource] = useState('');
  const [videoId, setVideoId] = useState('');
  const videoRef = useRef();

  useEffect(() => {
    if (src) {
      setVideoId('');
      if (src.includes('youtube.com')) setVideoId(src?.split('watch?v=')[1]?.split('&')[0]);
      videoRef.current?.load();
    }

    !src || (src === '' && setSource(process.env.PUBLIC_URL + '/assets/videos/home/Home_Media_AR1001_script.mp4'));
  }, [src]);

  return (
    <>
      {videoId ? (
        <VideoFrameWrap>
          <iframe
            width="853"
            height="480"
            scrolling="no"
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=0&rel=0`}
            frameBorder="0"
            allow=" clipboard-write; encrypted-media;  picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </VideoFrameWrap>
      ) : (
        <div style={{ position: 'relative', borderRadius: '20px' }}>
          <video
            ref={videoRef}
            playsInline
            autoPlay={false}
            controls={true}
            preload="auto"
            style={{
              width: window.innerWidth > 900 ? '86vw' : '90vw',
              height: window.innerWidth > 1280 ? '726px' : window.innerWidth > 900 ? '484px' : '202px',
            }}
          >
            <source
              src={src?.length > 0 ? src : process.env.PUBLIC_URL + '/assets/videos/home/Home_Media_AR1001_script.mp4'}
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
};

export default VideoFrame;
