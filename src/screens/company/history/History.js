import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';

import Tab1 from './components/Tab1.js';

import {Container, HomeComponentWrap, TextWrap, Text, Tab, TabItem} from './style';

import {HeadLine, Path} from '../../../components/style';
import {Desktop, Mobile} from '../../../utils/MediaQuery';
import Video from '../../../components/Video';

import Language from '../../../atom/Language';
import {useRecoilState} from 'recoil';
import useHistoryList from '../../../hooks/company/useHistoryList';

import {t} from 'i18next';

const History = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const [textItems, setTextItems] = useState([]);
  const [tabNames, setTabNames] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const {data, isLoading} = useHistoryList(language);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data?.data?.success) {
      const items = data.data.dataList;

      setTabNames([]);
      setListItems([]);
      setTextItems([]);

      const sortedItems = items.sort((a, b) => b.startYear - a.startYear);

      const newTabNames = sortedItems.map(item => `${item.startYear}-${item.endYear}`);
      const newTextItems = sortedItems.map(item => ({title: item.title, subtitle: item.subtitle}));

      const newListItems = sortedItems.map(item =>
        item.userHistoryDtoList.map(content => ({
          title: content.year.toString(),
          content: content.contents,
        })),
      );
      setTabNames(newTabNames);
      setTextItems(newTextItems);
      setListItems(newListItems);

      setCurrentTab(0);
    }
  }, [data]);

  return (
    <Container className="container">
      <Header />
      <Path>
        <span style={{opacity: '0.8'}}>{`HOME > COMPANY > `}</span>
        {t('history.title')}
      </Path>
      <Video
        page="history"
        src={
          window.innerWidth > 1280
            ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0400PB_VD.mp4'
            : window.innerWidth > 900
            ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1300PB_VD.mp4'
            : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2200PB_VD.mp4'
        }
      />
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine $className="midsize">{t('history.headline')}</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
            height: window.innerWidth > 1280 ? '24px' : '14px',
          }}
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap style={{padding: '15vh 7vw'}}>
          <TextWrap>
            <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
              HISTORY
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
              $fontWeight="500"
              $color="#ffffff"
              style={{margin: '2rem 0 0 0', lineHeight: '1em'}}>
              {textItems[currentTab]?.title}
            </Text>
            <div
              style={{
                alignSelf: 'center',
                width: window.innerWidth > 1280 ? '60px' : '40px',
                height: '2px',
                border: '1px solid #ffffff',
                margin: window.innerWidth > 1280 ? '80px 0' : '52px 0',
              }}
            />
            <Text $fontSize={window.innerWidth > 1280 ? '30px' : '14px'} $fontWeight="200" $color="#E5E5E5">
              {textItems[currentTab]?.subtitle}
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab style={{padding: '0 7vw'}}>
          {tabNames?.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === index ? true : false}
              onClick={() => {
                setCurrentTab(index);
              }}>
              {item}
            </TabItem>
          ))}
        </Tab>

        <Tab1 listItems={listItems[currentTab]} index={currentTab} />
      </Desktop>

      <Mobile>
        <HomeComponentWrap style={{padding: '15vh 7vw'}}>
          <TextWrap>
            <Text $fontSize="16px" $fontWeight="300" $color="#939598" style={{margin: '0'}}>
              HISTORY
            </Text>
            <div
              style={{
                alignSelf: 'center',
                width: '20px',
                height: '1px',
                border: '1px solid #ffffff',
                margin: '28px 0',
              }}
            />
            <Text $fontSize="23px" $color="#ffffff" style={{margin: '0', fontWeight: '500'}}>
              {textItems[currentTab]?.title}
            </Text>
            <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{margin: '0'}}>
              {textItems[currentTab]?.subtitle}
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab>
          {tabNames?.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === index ? true : false}
              onClick={() => {
                setCurrentTab(index);
              }}
              style={{width: 'auto', lineHeight: '1.4em', textAlign: 'center', justifyContent: 'center'}}>
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
