import { atom } from 'recoil';

const isVideoPlayed = atom({
  key: 'isVideo',
  default: false,
});

export default isVideoPlayed;
