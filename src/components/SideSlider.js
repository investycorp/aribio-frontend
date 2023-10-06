import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import scroll_bar from '../assets/images/scroll_bar.svg';

import whitedot from '../assets/images/whitedot.svg';

const SliderContainer = styled.div`
  position: fixed;
  top: 40vh;
  left: 4vw;
  width: fit-content;
  height: auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 10;
  gap: 60px;
`;

const Circle = styled.div`
  position: absolute;
  top: ${(props) => (props.$isActive ? '-12px' : '-12px')};
  left: -15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? '1' : '0')};
  transition: all 0.2s ease-in-out;
`;

const SliderImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

const Image = styled.img`
  z-index: 10;
`;

const SideSlider = () => {
  const [offsetHeights, setOffsetHeights] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [scrollNumber, setScrollNumber] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(document.querySelector(`.container`).offsetHeight - window.innerHeight);
    setOffsetHeights([]);
    for (let i = 1; i < document.getElementsByClassName('home').length + 1; i++) {
      setOffsetHeights((prev) => [
        ...prev,
        document.querySelector(`.home_${i}`).offsetTop + document.querySelector(`.home_${i}`).offsetHeight * 0.7,
      ]);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    // console.log(currentScrollY, document.querySelector(`.container`).offsetHeight - window.innerHeight);

    for (let i = 1; i < document.getElementsByClassName('home').length + 1; i++) {
      if (
        currentScrollY <
        document.querySelector(`.home_${i}`).offsetTop + document.querySelector(`.home_${i}`).offsetHeight * 0.7
      ) {
        setScrollNumber(i - 1);
        break;
      }
    }
  };

  return (
    <SliderContainer
      style={{
        opacity:
          document.querySelector(`.container`) &&
          scrollY > document.querySelector(`.container`)?.offsetHeight - window.innerHeight * 1.3
            ? 0
            : 1,
      }}
    >
      {offsetHeights?.map((location, index) => (
        <div key={`sideSlider${index}`} style={{ position: 'relative' }}>
          <Circle $position={scrollNumber} $isActive={scrollNumber === index ? true : false} />
          {index === 0 && <SliderImg src={scroll_bar} alt="scroll_bar" />}
          <Image src={whitedot} alt="whitedot" />
        </div>
      ))}
    </SliderContainer>
  );
};

export default SideSlider;
