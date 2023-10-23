import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
  font-weight: 500;
  z-index: 100;
`;

const Loading = () => {
  return <Container>Loading</Container>;
};

export default Loading;
