import React, { useState } from 'react';
import styled from 'styled-components';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';

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
    <div
      style={{
        display: 'flex',
        visibility: isShow ? 'visible' : 'hidden',
        position: 'absolute',
        bottom: '28vh',
        right: '4.5vw',
        zIndex: '10',
        width: '2vw',
        cursor: 'pointer',
      }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <img style={{ cursor: 'pointer' }} src={vertical_arrow} alt="vertical_arrow" />
    </div>
  );
};

export default GoToTop;
