import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: transparent;
  color: #ffffff;
  display: block;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const ContainerGridLineWrap = styled.div.attrs((props) => ({
  className: props.$className,
}))`
  position: absolute;
  width: 100vw;
  height: 100%;
  visibility: visible;
  opacity: 0.7;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;

  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 900px) {
    padding: 0 5vw;
  }
`;

const GridLineBox = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  border-right: 2px solid rgba(177, 177, 177, 0.3);
  z-index: 1;
  transition: all 0.5s ease-in-out;
  &:nth-child(1) {
    border-left: 2px solid rgba(177, 177, 177, 0.3);
    @media screen and (max-width: 1280px) {
      border-left: 1px solid rgba(177, 177, 177, 0.3);
    }
  }
  @media screen and (max-width: 1280px) {
    border-width: 1px;
  }

  @media screen and (max-width: 900px) {
    border-width: 1px;
  }
`;

const MainImgWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  padding-bottom: 10vh;
  z-index: 0;
  background-image: url(${(props) => props.$src});
  overflow: hidden;
`;
const Path = styled.div`
  position: absolute;
  top: 160px;
  left: 7vw;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  z-index: 20;
  @media screen and (max-width: 1280px) {
    top: 140px;
    font-size: 14px;
  }

  @media screen and (max-width: 900px) {
    font-size: 15px;
    top: 120px;
    line-height: 1.5em;
  }
`;
const HeadLineTitle = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
  z-index: 10;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    font-size: 70px;
  }

  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`;

const HeadLineText = styled.div`
  width: fit-content;
  height: fit-content;
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
  overflow: hidden;
`;

const HeadLine = styled.div.attrs((props) => ({
  className: props.$className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 200px;
  font-weight: 500;
  overflow: hidden;
  height: fit-content;

  @media screen and (max-width: 1280px) {
    font-size: 140px;
  }
  @media screen and (max-width: 1100px) {
    font-size: 110px;
  }
  @media screen and (max-width: 900px) {
    font-size: 62px;
  }
  &.midsize {
    @media screen and (max-width: 1700px) {
      font-size: 180px;
    }
    @media screen and (max-width: 1500px) {
      font-size: 150px;
    }
    @media screen and (max-width: 1280px) {
      font-size: 120px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 100px;
    }
    @media screen and (max-width: 900px) {
      font-size: 62px;
    }
    @media screen and (max-width: 600px) {
      font-size: 46px;
    }
  }
`;

const HomeComponentWrap = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 10vh 7vw;
  z-index: 10;
  @media screen and (max-width: 900px) {
    padding: 5vh 5vw;
  }
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
