import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';

import Tab1 from './components/Tab1.js';

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
      <Path>
        <span style={{ opacity: '0.5' }}>{`HOME > COMPANY > `}</span>HISTORY
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
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>HISTORY</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: '5vw',
            height: window.innerWidth > 1280 ? '60px' : '36px',
          }}
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
              $fontWeight="500"
              $color="#ffffff"
              style={{ margin: '2rem 0 0 0', lineHeight: '1em' }}
            >
              {textItems[currentTab]?.title}
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '30px' : '14px'}
              $fontWeight="200"
              $color="#E5E5E5"
              style={{ margin: '24px 0 0 0' }}
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
            <Text $fontSize="16px" $fontWeight="300" $color="#939598" style={{ margin: '0' }}>
              HISTORY
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '60px',
                borderRight: '1px solid #ffffff',
                margin: '20px 0',
              }}
            ></div>
            <Text $fontSize="23px" $color="#ffffff" style={{ margin: '0', fontWeight: '500' }}>
              {textItems[currentTab]?.title}
            </Text>
            <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '0' }}>
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
              style={{ lineHeight: '1.4em' }}
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
