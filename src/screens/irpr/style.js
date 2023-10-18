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
  &::placeholder {
    color: #ffffff;
    font-weight: 200;
    opacity: 1;
  }
`;
const ComponentWrap = styled.div.attrs((props) => ({ className: props.className }))`
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
`;

const RowWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 33.3% auto 15%;
  align-items: center;
  background-color: ${(props) => (props.$isActive ? 'rgba(203,203,203,0.2)' : 'transparent')};
  padding: 0;
  border: ${(props) => (props.$isActive ? '1px solid #C4C4C4' : '1px solid transparent')};
  border-radius: 10px;
  margin-bottom: 1em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(203, 203, 203, 0.2);
    border: 1px solid #c4c4c4;
  }
`;

const DateWrap = styled.div`
  padding: 2em 3em;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  ${Text}.date {
    font-size: 26px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 0.5em;
    padding: 0;
    text-align: center;
  }
  ${Text}.month {
    font-size: 22px;
    font-weight: 300;
    color: #d1d1d1;
    margin-bottom: 0;
    padding: 0;
    text-align: center;
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
`;

const HR = styled.div`
  width: ${(props) => (props.$width ? props.$width : '60px')};
  height: ${(props) => (props.$height ? props.$height : '2px')};
  background-color: ${(props) => (props.$color ? props.$color : '#ffffff')};
`;

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 100em;
  padding: 0.5em 1em;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
    span {
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
    }
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