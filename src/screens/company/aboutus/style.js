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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;

  overflow: hidden;
  z-index: 0;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-right: 2px solid rgba(177, 177, 177, 0.3);
`;

const MainImgWrap = styled.div`
  position: fixed;
  width: 100vw;
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
  z-index: 20;
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
  @media screen and (max-width: 1280px) {
    width: 60vw;
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '300')};
  color: ${(props) => (props.$color ? props.$color : ' #ffffff')};
  line-height: 1.65em;
  text-align: ${(props) => (props.$align ? props.$align : 'center')};
  margin-bottom: 2rem;
  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (max-width: 900px) {
  }
`;

const Tab = styled.div`
  position: relative;
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
  @media screen and (max-width: 900px) {
    gap: 1rem;
  }
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
  @media screen and (max-width: 1280px) {
    font-size: 22px;
  }
`;

const TabContentWrap = styled.div.attrs((props) => ({
  className: props.className,
  id: props.id,
}))`
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

  &#leadership {
    transform: translateY(20vh);
    -webkit-transform: translateY(20vh);
    opacity: 0;
  }
  &#leadership.moveup {
    transform: translateY(0);
    -webkit-transform: translateY(0);
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-bottom: 3rem;
    margin-top: 2rem;
    row-gap: 120px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 1rem;
  background-color: transparent;
  // border: 1px solid #ffffff;
  @media screen and (min-width: 901px) and (max-width: 1280px) {
    &:nth-child(3n + 1) {
      margin-bottom: 200px;
    }
    &:nth-child(3n + 2) {
      margin-top: 900px;
      margin-bottom: 200px;
    }
    &:nth-child(3n) {
      margin-top: 200px;
    }
  }
  @media screen and (min-width: 1281px) {
    &:nth-child(3n + 1) {
      margin-bottom: 800px;
    }
    &:nth-child(3n + 2) {
      margin-top: 1300px;
      margin-bottom: 300px;
    }
    &:nth-child(3n) {
      margin-top: 300px;
    }
  }
  @media screen and (max-width: 900px) {
    gap: 0.8rem;
    width: 64.26vw;
    &:nth-child(odd) {
      justify-content: center;
      align-items: end;
    }
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

const Image = styled.img.attrs((props) => ({
  className: props.$className,
}))`
  z-index: 10;
  &.toggle {
    @media screen and (max-width: 1280px) {
      height: 1.5rem;
    }
  }
`;

const DescriptionWrap = styled.ul`
  position: absolute;
  top: 5rem;
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
  @media screen and (max-width: 1280px) {
    top: 3rem;
  }
  @media screen and (max-width: 900px) {
    display: ${(props) => (props.$isActive ? 'flex' : 'none')};
    transition: all 0.2s ease-in-out;
    position: relative;
    top: 0;
    left: 0;
  }
`;
const DescriptionItem = styled.li`
  width: 100%;
  height: fit-content;
  text-align: left;
  font-size: 18px;
  color: #f2f2f2;
  font-weight: 200;
  line-height: 1.5em;
  list-style: none;
  list-style-position: outside;

  &::marker {
    content: '  •  ';
    font-size: 1em;
    text-align: left;
  }

  @media screen and (max-width: 1280px) {
    font-size: 10px;
  }

  @media screen and (max-width: 900px) {
    font-size: 16px;
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
};
