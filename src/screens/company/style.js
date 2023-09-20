import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 200vh;
  background-color: #121212;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  justify-content: space-between;
`;

const ContainerGridLineWrap = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  border-right: 2px solid #5d5d5d;
`;

const MainImgWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-color: green;
  z-index: 99;
`;

export { Container, MainImgWrap, ContainerGridLineWrap, GridLineBox };
