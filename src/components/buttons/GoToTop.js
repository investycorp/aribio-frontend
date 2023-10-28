import React, { useState } from 'react';
import styled from 'styled-components';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import { Desktop, Mobile } from '../../utils/MediaQuery';

const GoToTop = () => {
  const [isShow, setIsShow] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.7) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });
  return (
    <>
      <Desktop>
        <div
          style={{
            display: 'flex',
            visibility: isShow ? 'visible' : 'hidden',
            position: 'absolute',
            bottom: '28vh',
            right: '4.5vw',
            zIndex: '10',
            width: 'fit-content',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.querySelector('.container')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img
            style={{ cursor: 'pointer', width: window.innerWidth > 1280 ? '40px' : '25px' }}
            src={vertical_arrow}
            alt="vertical_arrow"
          />
        </div>
      </Desktop>
      <Mobile>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '0',
            right: '0',
            zIndex: '10',
            width: 'fit-content',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.querySelector('.container')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img
            style={{ cursor: 'pointer', width: window.innerWidth > 1280 ? '40px' : '25px' }}
            src={vertical_arrow}
            alt="vertical_arrow"
          />
        </div>
      </Mobile>
    </>
  );
};

export default GoToTop;
