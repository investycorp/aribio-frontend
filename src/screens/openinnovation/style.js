import styled, { keyframes } from 'styled-components';

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
  overflow-x: hidden;
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
  opacity: 0.5;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-right: 2px solid rgba(177, 177, 177, 0.2);
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
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 900px) {
    padding: 5vh 5vw;
  }
`;

const TextWrap = styled.div`
  width: 70vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media (max-width: 1500px) {
    width: 80vw;
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '300')};
  color: ${(props) => (props.$color ? props.$color : ' #ffffff')};
  line-height: 1.5em;
  text-align: ${(props) => (props.$align ? props.$align : 'center')};
  margin-bottom: 2rem;

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
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

const TableWrap = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 10em 0 0 0;
  padding: 0;
  background-color: transparent;
  border: 1px solid #efefef;
  &.table {
    &:focus,
    &:active {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  @media screen and (max-width: 1280px) {
    margin: 5em 0 0 0;
  }
`;

const TableRowWrap = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr;
  justify-content: center;
  align-items: stretch;
  background-color: transparent;
  border-bottom: 2px solid #efefef;
  color: #ffffff;
  &.th {
    font-size: 20px;
    font-weight: 300;
  }
  &.tr {
    grid-template-columns: 4fr 3fr 3fr 15fr;
  }
  &:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 900px) {
    &.th {
      grid-template-columns: 171px 151px 78px repeat(5, 135px);
    }
    &.tr {
      grid-template-columns: 171px 151px 78px 675px;
    }
  }
`;

const TableContentBox = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-right: 2px solid rgba(177, 177, 177, 0.3);
  padding: 1em 0.5em;
  text-align: center;
  font-size: 20px;
  font-weight: 100;
  height: auto;
  width: 100%;
  &.phase {
    padding: 0;
    width: fit-parent;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    border-bottom: 2px solid rgba(177, 177, 177, 0.3);
    span {
      border-right: 2px solid rgba(177, 177, 177, 0.3);
      height: 100%;

      &:last-child {
        border-right: 2px solid transparent;
      }
    }
  }

  &.indication {
    display: grid;
    grid-template-columns: 1fr;
    background-color: transparent;
    padding: 0;
    div {
      display: grid;
      grid-template-columns: 17vw 40vw;
      width: 100%;
      height: 100%;
      div.section {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 2px solid rgba(177, 177, 177, 0.3);
        border-bottom: 2px solid rgba(177, 177, 177, 0.3);
        padding: 1em 1em;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  &:last-child {
    border-right: none;
  }

  .font_xl {
    font-weight: 500;
    font-size: 26px;
  }

  .font_lg {
    font-size: 24px;
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
  className: props.className,
  id: props.id,
}))`
  z-index: 10;
  &#fadeIn {
    opacity: 0;
    &.fadein {
      opacity: 1;
    }
  }
`;

const ContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  background-color: transparent;
  padding: 0 3em 0 0;
  gap: 1.5em;
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
const HR = styled.div`
  width: ${(props) => (props.$width ? props.$width : '60px')};
  height: ${(props) => (props.$height ? props.$height : '2px')};
  background-color: ${(props) => (props.$color ? props.$color : '#ffffff')};
`;

const ShootingStarWrap = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShootingStar = styled.span.attrs((props) => ({
  className: props.className,
}))`
  opacity: 0;
  position: absolute;
  top: calc(50%-4px);
  left: 0%;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 6px rgba(255, 255, 255, 0.1),
    0 0 8px rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transform: rotate(180deg);

  &.animate {
    opacity: 1;
    animation-name: ${(props) => move(props.$phase)};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    -webkit-animation-name: ${(props) => move(props.$phase)};
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
    -webkit-animation-fill-mode: forwards;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: ${(props) => (props.$phase ? `calc(${props.$phase}*10.2vw)` : `calc(10vw)`)};
    height: 2px;
    background: linear-gradient(270deg, #ffffff, transparent);
    transform: translate(0, -50%);
  }
`;

const move = (phase) => keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(${phase ? `calc(${phase}*10.2vw)` : `calc(10vw)`});
    opacity: 1;
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
  HR,
  ContentWrap,
  TableWrap,
  TableRowWrap,
  TableContentBox,
  ShootingStarWrap,
  ShootingStar,
};
