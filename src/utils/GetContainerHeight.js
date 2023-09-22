import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import ContainerHeight from '../atom/ContainerHeight';

const GetContainerHeight = () => {
  const [containerHeight, setContainerHeight] = useRecoilState(ContainerHeight);
  useEffect(() => {
    window.scrollTo(0, 0);
    setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
      console.log('RESIZE');
    });
    return () => {
      window.removeEventListener('resize', () => {
        setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
      });
    };
  }, []);
};

export default GetContainerHeight;
