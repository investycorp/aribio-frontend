import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, MainImgWrap, ContainerGridLineWrap, GridLineBox } from './style';
import SideSlider from '../../components/SideSlider';
import GoToTop from '../../components/buttons/GoToTop';

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
      <ContainerGridLineWrap>
        <GridLineBox style={{ borderLeft: '2px solid #5d5d5d' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <SideSlider />
      <MainImgWrap />

      {/* <Test />
      <Test2 />
      <Test3 />
      <Test /> */}
      <GoToTop />
      <Footer />
    </Container>
  );
};

export default Company;
