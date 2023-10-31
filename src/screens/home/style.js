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

const ContainerGridLineWrap = styled.div.attrs((props) => ({
  className: props.$className,
}))`
  width: 100vw;
  height: 100vh;
  visibility: visible;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 7vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  transition: visibility 0.1s ease-in-out;
  &.visible {
    visibility: visible;
  }
  @media screen and (max-width: 900px) {
    padding: 0 5vw;
  }
`;

const GridLineBox = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  border-right: 2px solid rgba(177, 177, 177, 0.3);
  z-index: 1;
`;

const MainImgWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  padding-bottom: 10vh;
  z-index: 0;
  background-image: url(${(props) => (props.$src ? props.$src : '')});
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
  @media screen and (max-width: 900px) {
    opacity: 0.5;
    border-radius: 10px;
  }
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

const HomeAboutUsTextWrap = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media screen and (max-width: 900px) {
    width: 90vw;
  }
`;

const HeadLineTitle = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
  z-index: 10;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    font-size: 70px;
  }

  @media screen and (max-width: 900px) {
    font-size: 30px;
    width: 100%;
  }
`;

const HeadLineText = styled.div.attrs((props) => ({
  className: props.$className,
}))`
  width: fit-content;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '26px')};
  font-weight: medium;
  color: ${(props) => (props.$textColor ? props.$textColor : '#ffffff')};
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.3em;
  color: #ffffff;
  z-index: 10;
  span.highlight {
    font-size: 60px;
    //add text color changing animation here
    color: rgba(255, 255, 255, 0.5);
    @media screen and (max-width: 1280px) {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 1280px) {
    font-size: 32px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 23px;
    line-height: 31px;
  }
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
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: start;
    align-items: center;
  }
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
  @media screen and (max-width: 900px) {
    width: 100%;
  }
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
  @media screen and (max-width: 900px) {
    font-size: 20px;
    padding: 0;
    gap: 1rem;
  }
`;

const ComponentText = styled.span`
  line-height: 1.3em;
  @media screen and (max-width: 900px) {
    gap: 1rem;
    padding: 0 0.5rem 0 1rem;
  }
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
