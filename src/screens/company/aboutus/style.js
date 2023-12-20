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
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;

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
  @media screen and (max-width: 1280px) {
    gap: 80px;
  }
  @media screen and (max-width: 360px){
    gap: 16px;
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
  color: ${(props) => (props.$isActive ? '#ffffff' : 'rgba(255,255,255,0.5)')};
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: transparent;
  margin-top: 3rem;
  padding-bottom: 10rem;

  @media screen and (min-width: 901px) {
    &#leadership {
      transform: translateY(20vh);
      -webkit-transform: translateY(20vh);
      -o-transform: translateY(20vh);
      -ms-transform: translateY(20vh);
      -moz-transform: translateY(20vh);
      transition: all 0.5s ease-in-out;
      -webkit-transition: all 0.5s ease-in-out;
      opacity: 0;
    }
    &#leadership.moveup {
      transform: translateY(0);
      -webkit-transform: translateY(0);
      -o-transform: translateY(0);
      -ms-transform: translateY(0);
      -moz-transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 900px) {
    display: block;
    padding-bottom: 3rem;
    margin-top: 2rem;
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
  
  }
  @media screen and (min-width: 1281px) {
  
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 120px;
    gap: 0.8rem;
  }
`;

const ContentBoxNameWrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
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
    top: 4rem;
  }
  @media screen and (max-width: 900px) {
    display: ${(props) => (props.$isActive ? 'flex' : 'none')};
    transition: all 0.2s ease-in-out;
    position: relative;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 360px) {
    display: ${(props) => (props.$isActive ? 'flex' : 'none')};
    transition: all 0.2s ease-in-out;
    position: relative;
     padding: 0 0 0 3.1vw;
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
    line-height: 1.2em;
  }
`;

const CeoBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // gap: 9.5139vw;
`;

const MemberListWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 7vw;
  gap: 12rem 8rem;
  margin-bottom: 25vh;
`;

const HeadListWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 10vw;
  gap: 4rem 6rem;

  @media screen and (max-width: 1280px){
    gap: 7vh 5rem;
    padding: 0 12vw;
  }
`;

const HeadItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  max-width: 442px;
  min-height: 143px;
  margin-bottom: 24px;
  padding: 40px 28px 40px 24px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
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
  CeoBox,
  MemberListWrap,
  HeadListWrap,
  HeadItemWrap,
};
