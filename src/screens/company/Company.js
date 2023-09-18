import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, MainImgWrap } from './style';
import SideSlider from '../../components/SideSlider';

const Test = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;

const Test2 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
`;

const Test3 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellow;
`;

const Company = () => {
  return (
    <Container>
      <SideSlider />
      <MainImgWrap />
      <Header />
      <Test />
      <Test2 />
      <Test3 />
      <Test />
      <Footer />
    </Container>
  );
};

export default Company;
