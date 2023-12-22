import React, { useEffect, useState, useRef } from 'react';
import browser from 'browser-detect';
import styled from 'styled-components';
import sidebar from '../assets/history_sidebar.svg';
import sidebar_short from '../assets/history_sidebar_short.svg';
import whitedot from '../assets/history_dot_white.svg';
import graydot from '../assets/history_dot_grey.svg';
import reddot from '../assets/history_dot_red.svg';

import m_sidebar from '../assets/sidebar.svg';
import m_sidebar_short from '../assets/sidebar_short.svg';
import m_whitedot from '../assets/whitedot.svg';
import m_graydot from '../assets/graydot.svg';
import m_reddot from '../../../../assets/images/reddot.svg';

import { Desktop, Mobile } from '../../../../utils/MediaQuery';

const HomeComponentWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 2em;
  justify-content: center;
  align-items: start;
  background-color: transparent;
  padding: 0 20vw 10vh 7vw;
  z-index: 10;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 5vw 10vh 5vw;
  }
`;

const Text = styled.div`
  width: fit-content;
  font-size: ${(props) => (props.$isActive ? '50px' : '24px')};
  font-weight: ${(props) => (props.$isActive ? '500' : '300')};
  color: ${(props) => (props.$isActive ? '#ffffff' : 'rgba(203,203,203,0.5)')};
  line-height: ${(props) => (props.$isActive ? '3rem' : '2rem')};
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: ${(props) => (props.$align ? props.$align : 'start')};
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    font-weight: 500;
    font-size: 50px;
  }
  @media screen and (max-width: 1280px) {
    font-size: ${(props) => (props.$isActive ? '30px' : '14px')};
    &:hover {
      color: #ffffff;
      font-weight: 500;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 900px) {
    font-size: 20px;
    &:hover {
      color: #ffffff;
      font-weight: 500;
      font-size: 20px;
    }
  }
`;

const GridBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.2rem;
  background-color: transparent;
  position: relative;
  width: 100%;
  height: fit-content;
  @media screen and (max-width: 1280px) {
    gap: 0;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 0;
  }
`;
const GridBoxContentWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  gap: 5em;
  @media screen and (max-width: 1280px) {
    height: 3rem;
    gap: 2em;
  }
  @media screen and (max-width: 900px) {
    /* gap: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    padding: 0; */
    height: fit-content;
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 8px;
  height: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 50%;
  border: ${(props) => (props.$isActive ? '2px solid #848484' : '2px solid transparent')};
  transition: border 0.3s ease-in-out;

  @media screen and (max-width: 1280px) {
    border-width: 1px;
    width: 6px;
    height: 6px;
  }

  @media screen and (max-width: 360px) {
    border-width: 1px;
    width: 8px;
    height: 8px;
  }
`;

const DescriptionItem = styled.li`
  width: 100%;
  height: fit-content;
  text-align: left;
  font-size: 20px;
  line-height: 1.5em;
  list-style: none;
  list-style-position: outside;
  &::marker {
    content: '• ';
    font-size: 1em;
    text-align: left;
  }

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

const DescriptionWrap = styled.ul`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 2em;
  background-color: transparent;
  padding: 1.5em;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1em;
  color: ${(props) => (props.$isActive ? '#ffffff' : 'rgba(203,203,203,0.5)')};

  ${DescriptionItem} {
    font-weight: 200;
  }
  &:nth-child(1) {
    margin-top: 0;
  }
  @media screen and (max-width: 1280px) {
    padding: 1em 1.5em;
    gap: 1rem;
  }
  @media screen and (min-width: 901px) {
    &:last-child {
      margin-bottom: 55vh;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 1.5em 0;
    gap: 1rem;
  }
`;

const Tab1 = ({ listItems, index }) => {
  const browserInfo = browser();
  const [tabNames, setTabNames] = useState([]);

  const refs = useRef(Array(tabNames.length).fill(React.createRef()));
  const [currentTab, setCurrentTab] = useState('');
  const [scrollTab, setScrollTab] = useState('');
  const [listContents, setListContents] = useState([]);

  const handleScroll = () => {
    if (listItems?.length > 0) {
      //Desktop
      if (window.innerWidth > 900) {
        const scrollY = document.getElementsByClassName('description-grid')[0];
        listItems.forEach((element) => {
          const elementTop = document.getElementsByClassName(element.title)[0]?.offsetTop;
          // 비율을 늘리거나, 빼는 값을 줄임
          if (elementTop - scrollY.offsetHeight * 0.05 < scrollY.scrollTop) {
            setScrollTab(element.title);
            setCurrentTab(element.title);
          }
        });
      } else {
        //Mobile

        for (let i = 0; i < listItems?.length; i++) {
          if (
            document.getElementsByClassName(listItems[i]?.title)[0]?.offsetTop + window.innerHeight * 1.2 <
            window.scrollY
          ) {
            setScrollTab(listItems[i].title);
            setCurrentTab(listItems[i].title);
          }
        }
      }
    }
  };

  useEffect(() => {
    console.log('ST', scrollTab, 'CT', currentTab);
  }, [currentTab, scrollTab]);

  useEffect(() => {
    const scrollY = document.getElementsByClassName(currentTab)[0]?.offsetTop;
    document.getElementsByClassName('description-grid')[0]?.scrollTo(0, scrollY, 'smooth');
  }, [currentTab]);

  useEffect(() => {
    console.log(browserInfo.name);
    document.getElementsByClassName('description-grid')[0]?.addEventListener('scroll', handleScroll);
    return () => {
      document.getElementsByClassName('description-grid')[0]?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (listItems?.length > 0) {
      let tabNames = [];
      let listContents = [];
      listItems?.map((item) => {
        tabNames.push(item.title);
        listContents.push(item.content);
      });

      setTabNames(tabNames);
      setListContents(listContents);
      setScrollTab(tabNames[0]);
      setCurrentTab(tabNames[0]);
    }

    if (window.innerWidth > 900) {
      document.querySelector('.description-grid')?.addEventListener('scroll', () => {
        handleScroll();
      });
    } else {
      document.addEventListener('scroll', () => {
        handleScroll();
      });
    }

    return () => {
      document.querySelector('.description-grid')?.removeEventListener('scroll', () => {
        handleScroll();
      });
      document.removeEventListener('scroll', () => {
        handleScroll();
      });
    };
  }, [listItems]);

  return (
    <>
      <Desktop>
        <HomeComponentWrap>
          <GridBox className="scrollbox">
            {browserInfo?.name === 'safari' && index === 0 && (
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  overflow: 'hidden',
                  display: 'flex',
                  zIndex: '10',
                  width: '2px',
                  borderRight: '2px dotted rgba(255, 255, 255, 0.3)',
                  left: window.innerWidth > 1280 ? '33px' : '25px',
                  top: window.innerWidth > 1280 ? '37px' : '20px',
                  height: window.innerWidth > 1280 ? '340px' : '205px',
                }}
              ></div>
            )}
            {browserInfo?.name === 'safari' && index !== 0 && tabNames?.length > 3 && (
              <img
                src={process.env.PUBLIC_URL + '/assets/images/history/indicator2.svg'}
                alt="sidebar"
                style={{
                  position: 'absolute',
                  boxSizing: 'border-box',
                  top: window.innerWidth > 1280 ? '-68px' : '-40px',
                  left: window.innerWidth > 1280 ? '28px' : '-0.8px',
                  zIndex: '10',
                  margin: index === 0 ? '0' : '0 0.15em 0 0.15em',
                  padding: window.innerWidth > 1280 ? '20px 0px 20px 0px' : '0px 23px 60px 22px',
                  height: window.innerWidth > 1280 ? '480px' : '350px',
                }}
              />
            )}
            {browserInfo?.name === 'safari' && tabNames?.length <= 3 && (
              <img
                src={sidebar_short}
                alt="sidebar_short"
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: window.innerWidth > 1280 ? '-1.2rem' : '-0.3rem',
                  left: window.innerWidth > 1280 ? '30px' : '22px',
                  zIndex: '10',
                  margin: '0',
                  padding: '0 1.5px 2.4em 1.5px',
                  width: '10px',
                  height: window.innerWidth > 1280 ? '190px' : '105px',
                }}
              />
            )}

            {browserInfo.name !== 'safari' && tabNames?.length > 3 && (
              <img
                src={sidebar}
                alt="sidebar"
                style={{
                  position: 'absolute',
                  top:
                    index === 0 ? (window.innerWidth > 1280 ? 0 : '-4px') : window.innerWidth > 1280 ? '-2rem' : '-4px',
                  left: window.innerWidth > 1280 ? '-1.5px' : '-0.8px',
                  zIndex: '10',
                  margin: index === 0 ? '0.18em 0.15em' : '-3em 0.15em 0.18em 0.15em',
                  padding: window.innerWidth > 1280 ? '2.1rem 2rem' : '1.5rem',
                  height: '-webkit-fill-available',
                }}
              />
            )}
            {browserInfo.name !== 'safari' && tabNames?.length <= 3 && (
              <img
                src={sidebar_short}
                alt="sidebar_short"
                style={{
                  position: 'absolute',
                  top: tabNames?.length > 3 ? '0' : window.innerWidth > 1280 ? '-2.9rem' : '-1.8rem',
                  left: window.innerWidth > 1280 ? '32.3px' : '25px',
                  zIndex: '10',
                  margin: '0',
                  padding: '0 0 2em 0',
                  height: '-webkit-fill-available',
                }}
              />
            )}

            {tabNames?.map((tabName) => (
              <GridBoxContentWrap id="description" key={tabName}>
                {
                  <Image
                    src={tabName === currentTab ? reddot : whitedot}
                    $isActive={tabName === currentTab ? true : false}
                    style={{
                      padding: window.innerWidth > 1280 ? '14px' : '7px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                }
                <Text
                  $isActive={tabName === currentTab ? true : false}
                  onClick={() => {
                    setCurrentTab(tabName);
                  }}
                >
                  {tabName}
                </Text>
              </GridBoxContentWrap>
            ))}
          </GridBox>
          <GridBox
            className="description-grid"
            style={{
              height: window.innerWidth > 1280 ? '62vh' : '60vh',
              overflowY: 'scroll',
            }}
          >
            {listContents?.map((item, index) => (
              <DescriptionWrap
                ref={refs[index]}
                className={tabNames[index]}
                key={'desc' + index}
                $isActive={tabNames.indexOf(currentTab) === index ? true : false}
              >
                {item?.map((content, index) => (
                  <DescriptionItem key={index + content}>{content}</DescriptionItem>
                ))}
              </DescriptionWrap>
            ))}
          </GridBox>
        </HomeComponentWrap>
      </Desktop>

      <Mobile>
        <HomeComponentWrap className="description-grid">
          {tabNames?.map((tabName, index) => (
            <GridBox
              key={'tabnames' + index}
              className={`${tabNames[index]} mobile_gridbox`}
              style={{ alignItems: 'stretch', position: 'relative' }}
            >
              <div
                style={{
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
                <Image
                  src={tabName === scrollTab ? m_reddot : m_whitedot}
                  $isActive={tabName === scrollTab ? true : false}
                  style={{
                    marginRight: '12px',
                    padding: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    width: '8px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    top: '-3px',
                    left: '9.7px',
                    width: '2px',
                    height: index !== tabNames.length - 1 ? '100%' : '10px',
                    borderRight: '2px dotted rgba(255, 255, 255, 0.5)',
                    margin: index === 0 ? '18px 0 0 0' : '0',
                  }}
                />
              </div>
              <GridBoxContentWrap key={tabName} style={{ alignItems: 'start' }}>
                <Text $isActive={tabName === scrollTab ? true : false} style={{ lineHeight: '26px' }}>
                  {tabName}
                </Text>
                <DescriptionWrap
                  ref={refs[index]}
                  key={index}
                  $isActive={tabNames.indexOf(scrollTab) === index ? true : false}
                >
                  {listContents[index]?.map((content, index) => (
                    <DescriptionItem key={index + content}>{content}</DescriptionItem>
                  ))}
                </DescriptionWrap>
              </GridBoxContentWrap>
            </GridBox>
          ))}
        </HomeComponentWrap>
      </Mobile>
    </>
  );
};

export default Tab1;
