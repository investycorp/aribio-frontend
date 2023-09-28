import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import ContainerHeight from '../../../atom/ContainerHeight';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import GetContainerHeight from '../../../utils/GetContainerHeight';
import Tab1 from './components/Tab1.js';
import Tab2 from './components/Tab2.js';
import Tab3 from './components/Tab3.js';

import {
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
} from './style';

const History = () => {
  const [tabNames, setTabNames] = useState(['2019-2023', '2013-2018', '2010-2012']);
  const [currentTab, setCurrentTab] = useState('2019-2023');

  GetContainerHeight();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //   window.addEventListener('resize', () => {
  //     setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //     console.log('RESIZE');
  //   });
  //   return () => {
  //     window.removeEventListener('resize', () => {
  //       setContainerHeight(document.getElementsByClassName('container')[0]?.clientHeight);
  //     });
  //   };
  // }, []);
  return (
    <Container className="container">
      <Header />
      <Path>{`HOME > COMPANY > HISTORY`}</Path>
      <MainImgWrap>
        <HeadLine>HISTORY</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
        <TextWrap>
          <Text $fontSize="26px" $fontWeight="300" $color="#939598">
            HISTORY
          </Text>
          <div
            style={{
              width: '50%',
              alignSelf: 'flex-start',
              height: '3em',
              borderRight: '2px solid #ffffff',
              margin: '2rem 0',
            }}
          ></div>
          <Text $fontSize="50px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
            Expansion Phase{' '}
          </Text>
          <Text $fontSize="30px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '0' }}>
            Clinical development and Pipeline Extension
          </Text>
        </TextWrap>
      </HomeComponentWrap>
      <Tab style={{ padding: '0 7vw' }}>
        {tabNames.map((item, index) => (
          <TabItem
            key={index}
            $isActive={currentTab === item ? true : false}
            onClick={() => {
              setCurrentTab(item);
              console.log(item);
            }}
          >
            {item}
          </TabItem>
        ))}
      </Tab>
      {tabNames.indexOf(currentTab) === 0 ? <Tab1 /> : tabNames.indexOf(currentTab) === 1 ? <Tab2 /> : <Tab3 />}
      <Footer />
    </Container>
  );
};

export default History;
