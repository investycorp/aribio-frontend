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
  overflow-x: hidden;
  justify-content: space-between;
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
  z-index: 0;
`;

const GridLineBox = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  border-right: 2px solid rgba(177, 177, 177, 0.3);
  z-index: 1;
`;

const MainImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #00010c;
  padding-bottom: 10vh;
  z-index: 5;
  background-image: url(${(props) => props.$src});
`;

const MainImgTextWrap = styled.div`
  width: fit-contennt;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-bottom: 5vh;
`;

const FilterShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.3;
  background-color: #000000;
`;

const HomeComponentWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 10vh 7vw;
  z-index: 10;
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
  z-index: 10;
`;

const HeadLineText = styled.div`
  width: fit-content;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: medium;
  color: ${(props) => (props.$textColor ? props.$textColor : '#ffffff')};
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.3em;
  z-index: 10;
`;

const ComponentGridWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  padding: 3rem 0;
`;

const HomeComponentImageWrap = styled.div`
  background-size: 28.7vw 28.7vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #121212;
  background-image: url(${(props) => props.$src});
  display: flex;
  width: 28.7vw;
  height: 28.7vw;
  justify-self: flex-end;
  border-radius: 20px;
`;

const ComponentTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: fit-content;
  width: 100%;
  padding: 2rem 5rem;
  gap: 2rem;
  justify-self: center;
`;

const ComponentText = styled.span`
  line-height: 1.3em;
`;

const HomeVideoWrap = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  background-image: ${(props) => props.$src};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 40vw;
`;

export {
  Container,
  MainImgWrap,
  MainImgTextWrap,
  ContainerGridLineWrap,
  GridLineBox,
  HeadLineTitle,
  HeadLineText,
  HomeComponentWrap,
  HomeAboutUsTextWrap,
  HomeComponentImageWrap,
  ComponentGridWrap,
  ComponentTextWrap,
  ComponentText,
  HomeVideoWrap,
  FilterShadow,
};
