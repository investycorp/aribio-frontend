import { atom } from 'recoil';

const isVideoPlayed = atom({
  key: 'isVideo',
  default: true,
});

export default isVideoPlayed;
