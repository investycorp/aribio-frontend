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
  position: relative;
`;

const ContainerGridLineWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;
  position: absolute;
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
  z-index: 5;
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

const Text = styled.div`
  width: 100%;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '300')};
  color: ${(props) => (props.$color ? props.$color : ' #ffffff')};
  line-height: 1.5em;
  text-align: ${(props) => (props.$align ? props.$align : 'center')};
  margin-bottom: 2rem;
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

const TableWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 10em 0 0 0;
  padding: 0;
  background-color: transparent;
  border: 1px solid #efefef;
`;

const TableRowWrap = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 8vw 12vw 8vw 17vw 8vw 8vw 8vw 8vw 8vw;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-bottom: 2px solid #efefef;
  color: #ffffff;
  &.th {
    font-size: 20px;
    font-weight: 300;
  }
  &.tr {
    grid-template-columns: 8vw 12vw 8vw 57vw;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const TableContentBox = styled.div.attrs((props) => ({
  className: props.className,
}))`
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
  height: 100%;
  width: 100%;

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
      div.phase {
        display: grid;
        grid-template-columns: 8vw 8vw 8vw 8vw 8vw;
        border-bottom: 2px solid rgba(177, 177, 177, 0.3);
        span {
          border-right: 2px solid rgba(177, 177, 177, 0.3);
          height: 100%;

          &:last-child {
            border-right: 2px solid transparent;
          }
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

const ShootingStarWrap = styled.section`
  position: relative;
  width: 40vw;
  height: 100%;
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
    0 0 0 10px rgba(255, 255, 255, 0.1),
    0 0 15px rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transform: rotate(180deg);

  &.animate {
    opacity: 1;
    animation-name: ${(props) => move(props.$phase)};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: ${(props) => (props.$phase ? `calc(${props.$phase}*8vw)` : `calc(10vw)`)};
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
    transform: ${`translateX(calc(8vw * ${phase} - 10px))`};
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
  TableWrap,
  TableRowWrap,
  TableContentBox,
  ContentBoxNameWrap,
  Image,
  DescriptionWrap,
  DescriptionItem,
  ShootingStarWrap,
  ShootingStar,
};
