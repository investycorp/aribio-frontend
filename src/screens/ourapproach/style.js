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
  z-index: 0;
`;

const Path = styled.div`
  position: absolute;
  top: 160px;
  left: 7vw;
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  align: left;
  z-index: 20;
`;

const ContainerGridLineWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  border-right: 2px solid rgba(177, 177, 177, 0.2);
  z-index: 1;
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 200px;
  font-weight: 500;

  @media (max-width: 1650px) {
    font-size: 170px;
  }
  @media (max-width: 1450px) {
    font-size: 150px;
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
  overflow-x: hidden;
  @media and screen (max-width: 900px) {
    padding: 5vh 5vw;
  }
`;

const TextWrap = styled.div.attrs((props) => ({ className: props.className }))`
  position: relative;
  width: 50vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 0 0 10em 0;

  @media (max-width: 1500px) {
    width: 70vw;
  }
  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const Text = styled.div.attrs((props) => ({ className: props.className }))`
  width: 100%;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '300')};
  color: ${(props) => (props.$color ? props.$color : ' #ffffff')};
  line-height: 1.5em;
  text-align: ${(props) => (props.$align ? props.$align : 'center')};
  &:hover {
    cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  }

  &.pathwaydata_text {
    img {
      width: 0.7rem;
      padding: 0.35rem 0;
    }

    @media screen and (max-width: 1550px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1350px) and (min-width: 901px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
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

const ButtonWrap = styled.div`
  padding-right: 20%;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  margin: 4rem 0;
  gap: 1.5rem;
  @media screen and (max-width: 900px) {
    padding-right: 0;
    gap: 1rem;
    margin: 2rem 0;
  }
`;

const RoundButton = styled.button`
  margin: 0 0.5em;
  padding: 1em;
  width: fit-content;
  height: ${(props) => (props.$height ? props.$height : '60px')};
  background-color: ${(props) => (props.$isActive ? '#9d9d9d' : 'transparent')};
  border: 2px solid ${(props) => (props.$isActive ? '#9d9d9d;' : '#ffffff')};
  border-radius: 50px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: 9d9d9d;
    border: 2px solid #9d9d9d;
  }
  @media screen and (max-width: 1280px) {
    font-size: 18px;
    height: 50px;
  }

  @media screen and (max-width: 900px) {
    padding: 0.5rem 1rem;
    margin: 0;
    font-size: 14px;
    height: 40px;
    border-width: 1px;
  }
`;

const ComponentWrap = styled.div.attrs((props) => ({ className: props.className }))`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  padding: 4em 0;
  @media (max-width: 1500px) {
    padding: 0;
  }
  &.pathwaydata_wrap_top {
    padding: 0 12em 0 12em;
    @media (max-width: 1500px) {
      padding: 0 5em;
    }
  }
  &.pathwaydata_wrap {
    justify-content: end;
    padding: 8em 12em 0 0;
    @media (max-width: 1500px) {
      justify-content: center;
      align-items: center;
      padding: 8em 0 0 0;
    }
  }
`;

const GridComponentWrap = styled.div.attrs((props) => ({ className: props.className }))`
  margin: 3em 0;
  width: 100%;
  height: 'fit-content';
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: start;
  align-items: start;
  background-color: transparent;
  // animation: fadeInAnimation 2s;
  // animation-fill-mode: forwards;
  // -webkit-animation: fadeInAnimation 2s;
  // -webkit-animation-fill-mode: forwards;
  // @keyframes fadeInAnimation {
  //   0% {
  //     opacity: 0.5;
  //     transform: translateY(5%);
  //     -webkit-transform: translateY(5%);
  //   }
  //   100% {
  //     opacity: 1;
  //     transform: translateY(0);
  //     -webkit-transform: translateY(0);
  //   }
  // }
  // @-webkit-keyframes fadeInAnimation {
  //   0% {
  //     opacity: 0;
  //   }
  //   100% {
  //     opacity: 1;
  //   }
  // }
  // opacity: 0;
  // transition: opacity 1s;
  // -webkit-transition: opacity 1s;

  ${ComponentWrap}.irdoc {
    position: relative;
    align-items: center;
    padding: 0;
    border: 1px solid #707070;
    border-radius: 20px;
    padding: 2rem 1rem;
    cursor: pointer;
    .readmore {
      position: absolute;
      border-radius: 20px;
      top: 0;
      left: 0;
      height: 180px;
      display: none;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: rgba(13, 32, 40, 0.9);
      color: #e5e5e5;
      font-size: 26px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      z-index: 20;
      @media (max-width: 1280px) {
        font-size: 21px;
      }
      @media (max-width: 900px) {
      }
    }

    &:hover,
    &:active,
    &:focus {
      .readmore {
        display: flex;

        opacity: 1;
      }
    }
    div.wrap {
      display: grid;
      grid-template-columns: 1fr 3fr;
      column-gap: 1rem;
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        width: 100%;
      }
    }

    &:nth-child(even) {
      @media (max-width: 900px) {
        margin-top: 1rem;
      }
      margin-top: 3rem;
      div.wrap {
      }
    }
    &:nth-child(odd) {
      @media (max-width: 900px) {
        margin-top: 1rem;
      }
      div {
      }
    }

    @media (max-width: 900px) {
      max-width: 90vw;
      height: 180px;
      &:nth-child(odd) {
        align-items: end;
        ${Text} {
          text-align: right;
        }
      }
      &:nth-child(even) {
        align-items: start;
        ${Text} {
          text-align: left;
        }
      }
    }
    ${Text} {
      &:active {
        background-color: rgba(203, 203, 203, 0.2);
      }
    }

    @media (max-width: 1450px) {
      div.text {
        font-size: 18px;
      }
    }
  }
`;

const DescriptionWrap = styled.ul`
  width: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.5rem;
  background-color: transparent;
  padding: 0;
  transition: all 0.2s ease-in-out;
  list-style: none outside;

  @media screen and (max-width: 900px) {
    list-style: none;
    margin-top: 1rem;
  }
`;

const DescriptionItem = styled.li`
  margin-left: 0.5em;
  width: 80%;
  height: fit-content;
  text-align: left;
  font-size: 20px;
  color: #f2f2f2;
  font-weight: 100;
  line-height: 1.5em;

  @media screen and (min-width: 901px) {
    &::marker {
      content: ' • ';
      font-size: 1em;
      text-align: left;
    }
  }

  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
    margin-left: 0;
    width: 100%;
  }
`;

const UnderLineWrap = styled.span`
  position: relative;
  min-width: fit-content;
  text-align: left;
`;

const Underline = styled.span`
  position: absolute;
  bottom: 0.1em;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
`;

export {
  Container,
  ContainerGridLineWrap,
  GridLineBox,
  MainImgWrap,
  Path,
  HeadLine,
  HomeComponentWrap,
  TextWrap,
  Text,
  ButtonWrap,
  RoundButton,
  GridComponentWrap,
  ComponentWrap,
  DescriptionWrap,
  DescriptionItem,
  Tab,
  TabItem,
  ContentWrap,
  ContentBox,
  Image,
  ColorBar,
  ColorBarTextWrap,
  HR,
  UnderLineWrap,
  Underline,
};
