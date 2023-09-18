import styled from 'styled-components';
import scroll_bar from '../assets/images/scroll_bar.svg';
import React, { useEffect, useState } from 'react';

const SliderContainer = styled.div`
  position: fixed;
  top: 410px;
  left: 98px;
  width: fit-content;
  height: fit-content;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
`;

const Circle = styled.div`
  position: absolute;
  top: ${(props) => props.position}px;
  left: -15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const SliderImg = styled.img`
  position: relative;
`;

const SideSlider = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollNumber, setScrollNumber] = useState('-15');

  // Function to update scrollY value
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    switch (true) {
      case currentScrollY <= window.innerHeight * 0.5:
        setScrollNumber('-15');
        break;
      case currentScrollY <= window.innerHeight * 1.5:
        setScrollNumber('63');
        break;
      case currentScrollY <= window.innerHeight * 2.5:
        setScrollNumber('141');
        break;
      case currentScrollY <= window.innerHeight * 3.5:
        setScrollNumber('219');
        break;
      default:
        setScrollNumber('297');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollNumber);
  }, [scrollNumber]);

  return (
    <SliderContainer style={{ opacity: scrollY > window.innerHeight * 4.2 ? 0 : 1 }}>
      <Circle position={scrollNumber} />
      <SliderImg src={scroll_bar} alt="scroll_bar" />
    </SliderContainer>
  );
};

export default SideSlider;
