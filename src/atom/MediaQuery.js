import { atom } from 'recoil';

const WindowSize = atom({
  key: 'MediaQuery',
  default: window.innerWidth,
});

export default WindowSize;
