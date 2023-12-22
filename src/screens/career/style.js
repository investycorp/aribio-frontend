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
  opacity: 0.3;
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
  background-image: url(${props => props.$src});
  z-index: 5;
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

const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 200px;
  font-weight: 500;
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
  @media screen and (max-width: 900px) {
    padding: 5vh 5vw;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 10;
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
  }
`;

const Text = styled.div.attrs(props => ({className: props.className, id: props.id}))`
  width: ${props => (props.$width ? props.$width : '100%')};
  font-size: ${props => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: ${props => (props.$fontWeight ? props.$fontWeight : '300')};
  color: ${props => (props.$color ? props.$color : ' #ffffff')};
  line-height: 1.5em;
  text-align: ${props => (props.$align ? props.$align : 'center')};
  &.clickable {
    cursor: pointer;
    &:active {
      background-color: rgba(203, 203, 203, 0.2);
    }
  }
  &#core_value {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  &#core_value.fadein {
    opacity: 1;
  }
`;

const GridContentWrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex-wrap: wrap;
  justify-content: start;
  align-items: left;
  background-color: transparent;
  padding: 2.5em 0;

  @media screen and (max-width: 1280px) {
    padding: 1.5em 0;
  }
`;

const Image = styled.img`
  z-index: 10;
`;

const FilterShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.5;
  background-color: #1f1f1f;
  z-index: 1;
  @media screen and (max-width: 900px) {
    border-radius: 10px;
  }
`;

const ContentBox = styled.div.attrs(props => ({className: props.className}))`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: transparent;

  &#benefits {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  &#benefits.fadein {
    opacity: 1;
  }

  &.benefits {
    @media screen and (min-width: 901px) {
      &:nth-child(odd) {
        img {
          position: absolute;
          top: 0;
          left: calc(-5vw - 64px);
        }
      }
      &:nth-child(even) {
        gap: 5vw;
      }
    }
  }

  &.recruitmentProcess_rowscroll {
    /* &:hover {
      background-color: rgba(255, 255, 255, 0.06);
    } */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  &.joinus {
    border-radius: 20px;
    background-color: #121212;
    background-image: url(${props => props.$src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: space-between;
    // &:active {
    //   ${FilterShadow} {
    //     background-color: #fff;
    //     opacity: 0.3;
    //   }
    //   ${Text} {
    //     color: #1f1f1f;
    //     font-weight: 500;
    //   }
    // }
    @media screen and (min-width: 901px) {
      &:nth-child(odd) {
        margin-bottom: 2em;
      }
      &:nth-child(even) {
        /* margin-top: 2em; !!!*/
      }
    }

    @media screen and (max-width: 900px) {
      height: 124px;
      width: 90vw;
      padding: 23px;
      border-radius: 10px;
    }

    @media screen and (max-width: 1280px) {
      gap: 25px;
    }

    @media screen and (max-width: 900px) {
      height: 124px;
      padding: 24px 16px 24px 16px;
      border-radius: 10px;
    }
  }
`;
const ContentBoxNameWrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 2em;
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
`;

const DescriptionItem = styled.li`
  width: auto;
  height: fit-content;
  text-align: left;
  font-size: 10px;
  color: #f2f2f2;
  font-weight: 100;
  line-height: 1.5em;
  list-style: none outside;
  &::marker {
    content: '•    ';
    font-weight: 200;
    font-size: 10px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
    font-weight: 200;
  }
`;

const HR = styled.div`
  width: ${props => (props.$width ? props.$width : '60px')};
  height: ${props => (props.$height ? props.$height : '2px')};
  background-color: ${props => (props.$color ? props.$color : '#ffffff')};
  @media screen and (max-width: 1280px) {
    width: 40px;
  }
`;

const ShootingStarWrap = styled.section`
  position: relative;
  width: 20%;
  height: 4em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &#core_value {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  &#core_value.fadein {
    opacity: 1;
  }
`;

const ShootingStar = styled.span`
  position: absolute;
  left: 0%;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 10px rgba(255, 255, 255, 0.1),
    0 0 15px rgba(255, 255, 255, 0.1);
  transform: rotate(180deg);
  animation: animate 2s linear infinite;
  -webkit-animation: animate 2s linear infinite;

  &:before {
    content: '';
    position: absolute;
    top: 30%;
    right: 0;
    width: calc(10vw);
    height: 2px;
    background: linear-gradient(270deg, #ffffff, transparent);
  }
  @-webkit-keyframes animate {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(10vw));
      opacity: 0;
    }
  }

  @keyframes animate {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(10vw));
      opacity: 0;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  z-index: 10;
`;

const ComponentWrap = styled.div.attrs(props => ({className: props.className}))`
  width: 100%;
  height: 'fit-content';
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  &.pathwaydata_wrap_top {
    padding: 0 12em 0 12em;
    @media (max-width: 1500px) {
      padding: 0 5em;
    }
  }
  @media print {
    color: #000000;
  }
  &.mediakit_item {
    div {
      cursor: pointer;
      &:active {
        background-color: rgba(203, 203, 203, 0.2);
      }
    }
  }
  .button {
    &:hover {
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

const RecruitmentItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 28.7vw;
  gap: 24px;
  max-width: 442px;
  padding: 40px 30px 40px 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  @media screen and (max-width: 1920px) {
    height: 308px;
  }

  @media screen and (max-width: 1280px) {
    max-width: 278px;
    height: 194px;
    padding: 26px;
    gap: 15px;
  }

  @media screen and (max-width: 900px) {
    padding: 24px 15px 24px 24px;
    width: auto !important;
    max-width: 100%;
    height: auto !important;
  }
`;

export {
  Container,
  MainImgWrap,
  ContainerGridLineWrap,
  GridLineBox,
  Path,
  HeadLine,
  HomeComponentWrap,
  ComponentWrap,
  TextWrap,
  Text,
  GridContentWrap,
  ContentBox,
  ContentBoxNameWrap,
  ContentWrap,
  Image,
  DescriptionWrap,
  DescriptionItem,
  HR,
  ShootingStarWrap,
  ShootingStar,
  FilterShadow,
  Button,
  RecruitmentItemWrap,
  ImageBackground,
};
