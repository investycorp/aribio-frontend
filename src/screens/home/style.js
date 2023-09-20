import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: #121212;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  justify-content: space-between;
`;

const ContainerGridLineWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  height: ${(props) => props.$height}px;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  border-right: 2px solid #5d5d5d;
  z-index: 1;
`;

const MainImgWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  padding-bottom: 10vh;
  z-index: 99;
`;

const HomeComponentWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0 7vw;
  z-index: 99;
`;

const HomeAboutUsTextWrap = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const HeadLineTitle = styled.div`
  width: fit-content;
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
  z-index: 99;
`;

const HeadLineText = styled.div`
  width: fit-content;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: medium;
  color: ${(props) => (props.$textColor ? props.$textColor : '#ffffff')};
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.3em;
  z-index: 99;
`;

const OurApproachGridWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;
  padding: 3rem 0;
`;

const OurApproachImageWrap = styled.div`
  background-size: 28.4vw 28.4vw;
  background-position: center;
  width: 28.4vw;
  height: 28.4vw;
  justify-self: flex-end;
  margin: 0 3px;
`;

const OurApproachTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: fit-content;
  width: 100%;
  padding: 2rem 5rem;
  gap: 2rem;
  justify-self: center;
`;

const OurApproachText = styled.span`
  line-height: 1.3em;
`;

const HomeVideoWrap = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  background-color: aquamarine;
  width: 100vw;
  height: 40vw;
`;

export {
  Container,
  MainImgWrap,
  ContainerGridLineWrap,
  GridLineBox,
  HeadLineTitle,
  HeadLineText,
  HomeComponentWrap,
  HomeAboutUsTextWrap,
  OurApproachImageWrap,
  OurApproachGridWrap,
  OurApproachTextWrap,
  OurApproachText,
  HomeVideoWrap,
};
