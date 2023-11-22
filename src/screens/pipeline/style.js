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
  opacity: 0.3;
  z-index: 0;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-right: 2px solid #5d5d5d;
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
  z-index: 10;
  background-image: url(${(props) => props.$src});
  overflow: hidden;
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
const HomeComponentWrap = styled.div.attrs((props) => ({
  className: props.className,
  id: props.id,
}))`
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
    div#fadeIn {
      opacity: 0.1;
      transition: all 0.3s ease-in-out;
    }
    div#fadeIn.fadeIn {
      opacity: 1;
    }
  }
`;

const TextWrap = styled.div`
  width: 90vw;
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
  background-color: rgba(12, 12, 12, 0.3);
  border: 1px solid #efefef;
`;

const TableRowWrap = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 8vw 12vw 8vw 18vw repeat(5, 8vw);
  column-gap: 0;
  justify-content: center;
  align-items: stretch;
  background-color: transparent;
  border-bottom: 2px solid #efefef;
  @media screen and (max-width: 1280px) {
    border-bottom: 1px solid #efefef;
  }

  color: #ffffff;
  &.th {
    font-size: 20px;
    font-weight: 300;
  }
  &.tr {
    grid-template-columns: 8vw 12vw 8vw 58vw;
  }
  &:last-child {
    border-bottom: none;
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
  font-weight: 200;
  height: auto;
  width: 100%;
  @media screen and (max-width: 1400px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 12px;
    border-width: 1px;
  }

  &.indication {
    display: grid;
    grid-template-columns: 1fr;
    background-color: transparent;
    padding: 0;
    justify-content: center;
    align-items: stretch;
    div {
      display: grid;
      grid-template-columns: 18vw 40vw;
      width: 100%;
      height: auto;
      justify-content: center;
      align-items: stretch;

      div.section {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 2px solid rgba(177, 177, 177, 0.3);

        padding: 1em 1em;
        border-bottom: 2px solid rgba(177, 177, 177, 0.3);
        &:last-child {
          border-bottom: none;
        }
        @media screen and (max-width: 1280px) {
          border-width: 1px;
        }
      }
      div.phase {
        display: grid;
        grid-template-columns: 8vw 8vw 8vw 8vw 8vw;
        height: auto;

        border-bottom: 2px solid rgba(177, 177, 177, 0.3);
        @media screen and (max-width: 1280px) {
          border-width: 1px;
        }

        span {
          border-right: 1px solid rgba(177, 177, 177, 0.3);
          border-bottom: none;
          &:last-child {
            border-right: 2px solid transparent;
            border-bottom: none;
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

const ContentBoxWrap = styled.div.attrs((props) => ({
  className: props.className,
  id: props.id,
}))`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  height: fit-content;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;
  @media screen and (max-width: 900px) {
    &#toggleWrap {
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    &#toggleWrap.fadein {
      opacity: 1;
    }
  }
`;

const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 0 1rem;
  text-align: left;
  color: #e8e8e8;
  gap: 0.5rem;
  width: 100%;
`;

const ContentBox = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: transparent;
  padding: 1em 0.5em;
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  height: fit-content;
  width: 100%;
  gap: 0.5rem;
  &.gridline {
    gap: 0;
    ${RowWrap} {
      position: relative;
      padding: 0;
      margin: 0;
      width: 100%;
      border-right: 1px solid #fff;
      &:last-child {
        border-right: none;
      }
      hr {
        width: 100%;
      }
      span {
        text-align: right;
        position: absolute;
        top: calc(100% + 1rem);
        right: 0;
        max-width: 16vw;
      }
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

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

const move = (start, phase, gap) => keyframes`
0% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -o-transform: translateX(0);

    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: ${`translateX(calc(${start} * ${phase} - ${gap}))`};
    -webkit-transform: ${`translateX(calc(${start} * ${phase} - ${gap}))`};
    -o-transform: ${`translateX(calc(${start} * ${phase} - ${gap}))`};
    opacity: 1;
  }
`;

const ShootingStar = styled.span.attrs((props) => ({
  className: props.className,
}))`
  opacity: 0;
  position: absolute;
  top: calc(50%-4px);
  left: 0%;
  width: 4px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 6px rgba(255, 255, 255, 0.1),
    0 0 8px rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);

  &.animate {
    opacity: 1;
    animation-name: ${(props) => move('8.1vw', props?.$phase, '10px')};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    -webkit-animation-name: ${(props) => move('8.1vw', props?.$phase, '10px')};
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
    -webkit-animation-fill-mode: forwards;
    -o-animation-name: ${(props) => move('8.1vw', props?.$phase, '10px')};
    -o-animation-duration: 2s;
    -o-animation-iteration-count: 1;
    -o-animation-timing-function: linear;
    -o-animation-fill-mode: forwards;
    -moz-animation-name: ${(props) => move('8.1vw', props?.$phase, '10px')};
    -moz-animation-duration: 2s;
    -moz-animation-iteration-count: 1;
    -moz-animation-timing-function: linear;
    -moz-animation-fill-mode: forwards;
    -ms-animation-name: ${(props) => move('8.1vw', props?.$phase, '10px')};
    -ms-animation-duration: 2s;
    -ms-animation-iteration-count: 1;
    -ms-animation-timing-function: linear;
    -ms-animation-fill-mode: forwards;

    @media screen and (max-width: 900px) {
      -ms-animation-name: ${(props) => move('18vw', props?.$phase, '10px')};
      -moz-animation-name: ${(props) => move('18vw', props?.$phase, '10px')};
      -o-animation-name: ${(props) => move('18vw', props?.$phase, '10px')};
      -webkit-animation-name: ${(props) => move('18vw', props?.$phase, '10px')};
      animation-name: ${(props) => move('18vw', props?.$phase, '10px')};
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: ${(props) => (props.$phase ? `calc(${props?.$phase}*8.1vw)` : `calc(10vw)`)};
    height: 2px;
    background: linear-gradient(270deg, #ffffff, transparent);
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
  }
`;

const ToggleButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: transparent;
  padding: 0.5rem 1.2rem;
  margin: 0;
  border: 1px solid #707070;
  border-radius: 10rem;
  font-size: 20px;
  font-weight: 400;
  color: #e8e8e8;
  position: relative;
  margin-top: 5rem;
`;
const ToggleListWrap = styled.div`
  position: absolute;
  opacity: ${(props) => (props.$toggleOn ? 1 : 0)};
  display: ${(props) => (props.$toggleOn ? 'grid' : 'none')};
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  grid-template-columns: 1fr;
  width: 90vw;
  height: fit-content;
  max-height: 50vw;
  overflow-y: scroll;
  background-color: rgba(177, 177, 177, 0.3);
  padding: 0.5rem 0;
  margin: 0;
  border: 1px solid #fff;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
`;

const ToggleList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  text-align: left;
  font-size: 18px;
  color: #e8e8e8;
  font-weight: 300;
  padding: 0.5rem 1em;
  &:hover,
  &:active,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: 500;
  }
  transition: all 0.3s ease-in-out;
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
  ToggleButton,
  ToggleListWrap,
  ToggleList,
  ContentBoxWrap,
  ContentBox,
  RowWrap,
};
