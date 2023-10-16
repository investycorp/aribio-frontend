import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: '901px' }, undefined, () => {
    window.location.reload();
  });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: '360px', maxWidth: '1280px' }, undefined, () => {
    window.location.reload();
  });
  return isTablet ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: '900px' }, undefined, () => {
    window.location.reload();
  });
  return isMobile ? children : null;
};

export { Desktop, Tablet, Mobile };
