import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import history_cover from './assets/history_cover.png';
import Tab1 from './components/Tab1.js';
import Tab2 from './components/Tab2.js';
import Tab3 from './components/Tab3.js';
import { Container, HomeComponentWrap, TextWrap, Text, Tab, TabItem } from './style';

import { HeadLine, Path, MainImgWrap } from '../../../components/style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';
import Video from '../../../components/Video';

import Language from '../../../atom/Language';
import { useRecoilState } from 'recoil';
import useHistoryList from '../../../hooks/company/useHistoryList';

const History = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const [textItems, setTextItems] = useState([]);
  const [tabNames, setTabNames] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const { data, isLoading } = useHistoryList(language);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(currentTab);
    if (data?.data?.success) {
      const items = data.data.dataList;
      console.log(items);

      setTabNames([]);
      setListItems([]);
      setTextItems([]);
      items.map((item) => {
        setTabNames((prev) => [...prev, `${item.startYear}-${item.endYear}`]);
        setTextItems((prev) => [...prev, { title: item.title, subtitle: item.subtitle }]);
        const contentList = [];
        item.userHistoryDtoList?.map((content) => {
          contentList.push({ title: content.year.toString(), content: content.contents });
        });

        setListItems((prev) => [...prev, contentList]);
      });

      setCurrentTab(0);
    }
  }, [data]);

  return (
    <Container className="container">
      <Header />
      <Path>{`HOME > COMPANY > HISTORY`}</Path>
      <Video page="history" />
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>HISTORY</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap>
            <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
              HISTORY
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '8em',
                borderRight: '2px solid #ffffff',
                margin: '2rem 0',
              }}
            ></div>
            <Text
              $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '2rem 0 0 0' }}
            >
              {textItems[currentTab]?.title}
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '30px' : '14px'}
              $fontWeight="200"
              $color="#E5E5E5"
              style={{ margin: '2em 0 0 0' }}
            >
              {textItems[currentTab]?.subtitle}
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab style={{ padding: '0 7vw' }}>
          {tabNames?.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === index ? true : false}
              onClick={() => {
                setCurrentTab(index);
              }}
            >
              {item}
            </TabItem>
          ))}
        </Tab>

        <Tab1 listItems={listItems[currentTab]} index={currentTab} />
      </Desktop>
      <Mobile>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap>
            <Text $fontSize="16px" $fontWeight="300" $color="#939598">
              HISTORY
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '8em',
                borderRight: '2px solid #ffffff',
                margin: '2rem 0',
              }}
            ></div>
            <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
              Expansion Phase{' '}
            </Text>
            <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '0' }}>
              Clinical development and Pipeline Extension
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab style={{ padding: '0 7vw' }}>
          {tabNames?.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === index ? true : false}
              onClick={() => {
                setCurrentTab(item);
                console.log(index);
              }}
            >
              {item}
            </TabItem>
          ))}
        </Tab>
        <Tab1 listItems={listItems[currentTab]} index={currentTab} />
      </Mobile>
      <Footer />
    </Container>
  );
};

export default History;
