import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDestop = useMediaQuery({ minWidth: '1281px' }, undefined, () => {
    window.location.reload();
  });
  return isDestop ? children : null;
};

// const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: '360px', maxWidth: '1280px' }, undefined, () => {
//     window.location.reload();
//   });
//   return isTablet ? children : null;
// };

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: '360px' }, undefined, () => {
//     window.location.reload();
//   });
//   return isMobile ? children : null;
// };

export { Desktop };
