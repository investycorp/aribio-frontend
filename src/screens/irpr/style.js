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
`;

const Text = styled.div.attrs((props) => ({ className: props.className }))`
  width: 100%;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '300')};
  color: ${(props) => (props.$color ? props.$color : ' #ffffff')};
  line-height: 1.5em;
  text-align: ${(props) => (props.$align ? props.$align : 'center')};
  margin-bottom: 2rem;
  &.prev,
  &.next {
    &:hover {
      cursor: pointer;
    }
  }
  @media print {
    color: #000000;
  }
  @media screen and (max-width: 1280px) {
    font-size: 21px;
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

const TabContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 35.7vw 28.5vw 35.7vw;
  grid-template-rows: 1fr;
  flex-wrap: wrap;
  justify-content: start;
  align-items: left;
  background-color: transparent;
  margin-top: 3rem;
  padding-bottom: 10rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 2rem;
  background-color: transparent;
  // border: 1px solid #ffffff;
  &:nth-child(3n + 1) {
    margin-bottom: 20vh;
  }
  &:nth-child(3n + 2) {
    margin-top: 90vh;
    margin-bottom: 7vh;
  }
  &:nth-child(3n) {
    margin-top: 20vh;
  }
`;
const ContentBoxNameWrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 7vw;
`;

const Image = styled.img`
  z-index: 10;
`;

const DescriptionWrap = styled.ul`
  position: absolute;
  top: 4em;
  left: 0;
  height: fit-content;
  display: flex;
  visibility: ${(props) => (props.$isActive ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isActive ? '1' : '0')};
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.5rem;
  background-color: transparent;
  padding: 0 40px 0 3.1vw;
  transition: all 0.2s ease-in-out;
`;
const DescriptionItem = styled.li`
  width: 100%;
  height: fit-content;
  text-align: left;
  font-size: 18px;
  color: #f2f2f2;
  font-weight: 100;
  line-height: 1.5em;
  list-style: disc;
  list-style-position: outside;
`;

const SearchInput = styled.input`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  margin: 0.3em 0;
  opacity: 0.5;
  &:active,
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
  &::placeholder {
    color: #ffffff;
    font-weight: 200;
    @media screen and (max-width: 1280px) {
      font-size: 12px;
    }
    @media screen and (max-width: 900px) {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;
const ComponentWrap = styled.div.attrs((props) => ({ className: props.className }))`
  position: relative;
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
      }
    }
  }
`;

const RowWrap = styled.div`
  width: 100%;
  height: 147px;
  display: grid;
  grid-template-columns: 33.3% auto 15%;
  align-items: center;
  background-color: ${(props) => (props.$isActive ? 'rgba(203,203,203,0.2)' : 'transparent')};
  padding: 0;
  border: ${(props) => (props.$isActive ? '1px solid #C4C4C4' : '1px solid rgba(196, 196, 196, 0.5)')};
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(203, 203, 203, 0.2);
    border: 1px solid #c4c4c4;
  }
  @media screen and (max-width: 1280px) {
    height: 89px;
    border-radius: 10px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
  }
`;

const DateWrap = styled.div`
  padding: 0 3em;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  gap: 0.5em;
  @media screen and (max-width: 1280px) {
    padding: 0 2em;
    gap: 0.25em;
  }
  @media screen and (max-width: 900px) {
    padding: 0;
  }

  ${Text}.date {
    font-size: 26px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0;
    padding: 0;
    text-align: center;
    @media screen and (max-width: 1280px) {
      font-size: 17px;
      color: #bababa;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      color: #bababa;
    }
  }
  ${Text}.month {
    font-size: 22px;
    font-weight: 300;
    color: #d1d1d1;
    margin-bottom: 0;
    padding: 0;
    text-align: center;
    @media screen and (max-width: 1280px) {
      font-size: 13px;
      color: #bababa;
    }
  }
`;

const TitleWrap = styled.div`
  width: auto;
  height: fit-content;
  font-size: 26px;
  font-weight: 300;
  color: #e5e5e5;
  margin: 0;
  padding: 0;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    font-size: 14px;
    div {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 900px) {
    font-size: 18px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const HR = styled.div`
  width: ${(props) => (props.$width ? props.$width : '60px')};
  height: ${(props) => (props.$height ? props.$height : '2px')};
  background-color: ${(props) => (props.$color ? props.$color : '#ffffff')};
`;

const Button = styled.button`
  width: 130px;
  height: 62px;
  display: flex;
  flex-direction: row;
  gap: 0.3em;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid #414141;
  border-radius: 100em;
  padding: 0.5em 1em;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #414141;
  cursor: pointer;

  img {
    height: 20px;
  }

  &:hover {
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    span {
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
  }
  @media screen and (max-width: 1280px) {
    border-width: 1px;
    width: 79px;
    height: 39px;
    span {
      font-size: 12px;
    }
    img {
      height: 12px;
    }
  }

  @media screen and (max-width: 900px) {
    border: 1px solid #414141;
    font-size: 15px;
    font-weight: 300;
    padding: 0.3rem 0.5rem;
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
  TextWrap,
  Text,
  Tab,
  TabItem,
  TabContentWrap,
  ContentBox,
  ContentBoxNameWrap,
  Image,
  DescriptionWrap,
  DescriptionItem,
  SearchInput,
  ComponentWrap,
  RowWrap,
  DateWrap,
  TitleWrap,
  HR,
  Button,
};
