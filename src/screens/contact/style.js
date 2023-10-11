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
  width: 100%;
  height: 100%;
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

const HR = styled.div`
  width: ${(props) => (props.$width ? props.$width : '60px')};
  height: ${(props) => (props.$height ? props.$height : '2px')};
  background-color: ${(props) => (props.$color ? props.$color : '#ffffff')};
`;

const FormWrap = styled.div`
  width: 100%;
  height: fit-content;
  padding-left: 33.5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: transparent;
  margin-top: 5rem;
  position: relative;
`;

const Form = styled.form`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  row-gap: 3.5rem;
  overflow: hidden;
  column-gap: 0.5rem;
`;

const FormInputRowWrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  border-bottom: 2px solid #ffffff;
  padding: 0.5rem 0 0 0;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.$isFilled &&
    `
     label {
      position: absolute;
      top: -0.2em;
      left: 0;
      font-size: 14px;
      color: #707070;
    }
  `}
  &:hover,
  &:focus-within {
    label {
      position: absolute;
      top: -0.1em;
      left: 0;
      font-size: 14px;
      color: #707070;
      transition: font-size 0.2s ease-in-out;
    }
  }
`;

const Input = styled.input`
  width: 90%;
  height: 2.5rem;
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 20px;
  font-weight: 300;
  padding: 0;
  outline: none;
  &:onfocus {
    border: none;
    outline: none;
  }
`;

const Label = styled.label`
  min-width: fit-content;
  font-size: 20px;
  color: #ffffff;
`;

const Button = styled.button`
  padding: 0 1.5em 0 0;
  margin-top: 5em;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 10em;
  font-size: 20px;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    img {
      transform: translateX(5px);
      transition: all 0.2s ease-in-out;
    }
  }
`;

const RowWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ErrorBox = styled.div`
  position: absolute;
  top: -8em;
  left: 33%;
  width: fit-content;
  height: fit-content;
  padding: 1em 2em;
  background-color: rgba(203, 48, 90, 0.6);
  border: 1px solid #cb305a;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  opacity: ${(props) => (props.$isActive ? '1' : '0')};
  transition: all 0.2s ease-in-out;
`;

const SuccessBox = styled.div`
  position: absolute;
  top: -8em;
  left: 33%;
  width: fit-content;
  height: fit-content;
  padding: 1em 2em;
  background-color: rgba(0, 166, 255, 0.6);
  border: 1px solid #00a6ff;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  opacity: ${(props) => (props.$isActive ? '1' : '0')};
  transition: all 0.2s ease-in-out;
`;

const RequiredField = styled.span`
  position: absolute;
  bottom: -1.8em;
  left: 0;
  color: #cb305a;
  font-size: 20px;
  font-weight: 100;
  display: inline-block;
  gap: 0.3em;
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
  FormWrap,
  Form,
  FormInputRowWrap,
  Input,
  Label,
  Button,
  RowWrap,
  ErrorBox,
  SuccessBox,
  RequiredField,
};