import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: #121212;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const MainImgWrap = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-color: green;
`;

export { Container, MainImgWrap };
