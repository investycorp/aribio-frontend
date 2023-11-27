import React, { useEffect, useState } from 'react';
import { Desktop, Mobile } from '../utils/MediaQuery';

import styled from 'styled-components';
import scroll_bar from '../assets/images/scroll_bar.svg';

import whitedot from '../assets/images/whitedot.svg';
import reddot from '../assets/images/reddot.svg';

const SliderContainer = styled.div`
  position: fixed;
  top: 40vh;
  left: 4vw;
  width: fit-content;
  height: auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 20;
  gap: 60px;
  @media screen and (max-width: 1280px) {
    top: 40vh;
    left: 4vw;
    gap: 35px;
  }
  @media screen and (max-width: 900px) {
    position: fixed;
    grid-template-columns: repeat(5, 1fr);
    top: 93vh;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    gap: 12px;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: ${(props) => (props.$isActive ? '-12px' : '-12px')};
  left: -15px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #ffffff;
  //!!!
  /* top: 3.5px;
  left: 0px;
  width: 10px;
  height: 10px;
  background-color: #cb3063;
  border: none; */

  border-radius: 50%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? '1' : '0')};
  transition: all 0.2s ease-in-out;
  z-index: 20;
  @media screen and (max-width: 1280px) {
    width: 28px;
    height: 28px;
    left: -11px;
    top: ${(props) => (props.$isActive ? '-4px' : '-4px')};

    border: 1px solid #ffffff;
    //!!!
    /* left: 0px;
    top: 7.5px;
    width: 6px;
    height: 6px; */
  }
  @media screen and (max-width: 900px) {
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    /* top: ${(props) => (props.$isActive ? '3px' : '3px')}; */
    transform: translate(-50%, -50%);
  }
`;

const HR = styled.hr`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 108px;
  height: 1px;
  background-color: #434343;
  border: none;
  z-index: -1;
  margin: 0;
`;

const SliderImg = styled.img`
  position: absolute;

  z-index: -1;

  @media screen and (max-width: 1280px) {
    top: 6px;
    left: -0.5px;
    height: 215px;
  }
  @media screen and (max-width: 900px) {
  }
`;

const Image = styled.img`
  z-index: 10;
`;

const SideSlider = () => {
  const [offsetHeights, setOffsetHeights] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [scrollNumber, setScrollNumber] = useState(0);

  useEffect(() => {
    setOffsetHeights([]);
    for (let i = 1; i < document.getElementsByClassName('home').length + 1; i++) {
      setOffsetHeights((prev) => [
        ...prev,
        document.querySelector(`.home_${i}`)?.offsetTop + document.querySelector(`.home_${i}`)?.offsetHeight * 0.7,
      ]);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener(
      'scroll',
      () => {
        handleScroll();
      },
      false,
    );
    return () => {
      document.removeEventListener('scroll', () => handleScroll());
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    // console.log(currentScrollY, document.querySelector(`.container`).offsetHeight - window.innerHeight);

    for (let i = 1; i < document.getElementsByClassName('home').length + 1; i++) {
      if (
        currentScrollY <
        document.querySelector(`.home_${i}`)?.offsetTop + document.querySelector(`.home_${i}`)?.offsetHeight * 0.7
      ) {
        setScrollNumber(i - 1);
        break;
      }
    }
  };

  return (
    <>
      <Desktop>
        <SliderContainer
          style={{
            opacity:
              document.querySelector(`.home_3`) &&
              scrollY > document.querySelector(`.home_3`)?.offsetTop - window.innerHeight / 2
                ? 0
                : 1,
          }}
        >
          {offsetHeights?.map((location, index) => (
            <div key={`sideSlider${index}`} style={{ position: 'relative', overflowX: 'unset' }}>
              <Circle $position={scrollNumber} $isActive={scrollNumber === index ? true : false} />
              {index === 0 && <SliderImg src={scroll_bar} alt="scroll_bar" />}
              <Image
                src={scrollNumber === index ? reddot : whitedot}
                alt="whitedot"
                style={{
                  width: window.innerWidth > 1280 ? '10px' : '6px',
                  height: window.innerWidth > 1280 ? '10px' : '6px',
                }}
              />
            </div>
          ))}
        </SliderContainer>
      </Desktop>
      <Mobile>
        <SliderContainer
          id="hide"
          style={{
            opacity:
              document.querySelector(`.home_3`) &&
              scrollY > document.querySelector(`.home_3`)?.offsetTop - window.innerHeight / 2
                ? 0
                : 1,
            zIndex: '50',
            rowGap: '0',
          }}
        >
          {offsetHeights?.map((location, index) => (
            <div key={`sideSlider${index}`} style={{ position: 'relative' }}>
              <Image
                src={whitedot}
                alt="whitedot"
                style={{
                  height: '4px',
                  width: '4px',
                  padding: '4px',
                  border: '1px solid',
                  borderRadius: '50%',
                  borderColor: scrollNumber === index ? '#ffffff' : 'transparent',
                  transotion: 'all 0.2s ease-in-out',
                  zIndex: '10',
                }}
              />
            </div>
          ))}
          <div style={{ position: 'relative', gridColumnEnd: 'span 5' }}>
            <HR />
          </div>
        </SliderContainer>
      </Mobile>
    </>
  );
};

export default SideSlider;
