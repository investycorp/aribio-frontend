import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: #121212;
  color: #ffffff;
  display: block;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const ContainerGridLineWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-right: 2px solid #5d5d5d;
`;

const MainImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #121212;
  background-image: url(${(props) => props.$src});
  z-index: 10;
`;

const Path = styled.div`
  position: absolute;
  top: 160px;
  left: 7vw;
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  text-align: left;
  z-index: 20;

  @media screen and (max-width: 900px) {
    font-size: 15px;
    top: 120px;
  }
`;
const HeadLineTitle = styled.div`
  width: fit-content;
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
  z-index: 10;

  @media screen and (max-width: 1280px) {
    font-size: 70px;
  }

  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`;

const HeadLineText = styled.div`
  width: fit-content;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: medium;
  color: ${(props) => (props.$textColor ? props.$textColor : '#ffffff')};
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.3em;
  z-index: 10;
  @media screen and (max-width: 1280px) {
    font-size: 26px;
  }

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 200px;
  font-weight: 500;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 900px) {
    font-size: 62px;
  }
`;
const HomeComponentWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 10vh 7vw;
  z-index: 10;
`;

const TextWrap = styled.div`
  width: 50vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media screen and (max-width: 1500px) {
    width: 70vw;
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '300')};
  color: ${(props) => (props.$color ? props.$color : ' #ffffff')};
  line-height: 1.5em;
  text-align: ${(props) => (props.$align ? props.$align : 'center')};
  &:hover {
    cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  }
`;

const Tab = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
  background-color: transparent;
  padding-bottom: 1rem;
  margin-bottom: 7em;
  z-index: 10;
`;

const TabItem = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 36px;
  font-weight: 400;
  color: ${(props) => (props.$isActive ? '#ffffff' : '#464646')};
  border-bottom: ${(props) => (props.$isActive ? '2px solid #ffffff' : '2px solid transparent')};
  line-height: 1.8em;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
  cursor: pointer;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  background-color: transparent;
  margin-bottom: 4em;
  padding: 0 3em 0 0;
  gap: 1.5em;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 4rem;
  background-color: transparent;
  height: 100%;
`;
const ColorBarTextWrap = styled.div`
  width: 10%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  padding: 1em 0 0 0;
  gap: 0.5em;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const ColorBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  opacity: 0.3;
  padding: 2em;
  height: 140px;
  width: 80%;
  background: ${(props) => `linear-gradient(to right, ${props.$color1}, ${props.$color2})`};
  transition: all 0.2s ease-in-out;
  &:hover {
    margin-left: 7vw;
    opacity: 1;
    ${ColorBarTextWrap} {
      opacity: 1;
    }
  }
`;
const Image = styled.img`
  z-index: 10;
`;
const HR = styled.div`
  width: ${(props) => (props.$width ? props.$width : '60px')};
  height: ${(props) => (props.$height ? props.$height : '2px')};
  background-color: ${(props) => (props.$color ? props.$color : '#ffffff')};
`;

export {
  Container,
  MainImgWrap,
  ContainerGridLineWrap,
  GridLineBox,
  Path,
  HeadLine,
  HeadLineTitle,
  HeadLineText,
  HomeComponentWrap,
  TextWrap,
  Text,
  Tab,
  TabItem,
  ContentWrap,
  ContentBox,
  Image,
  ColorBar,
  ColorBarTextWrap,
  HR,
};
