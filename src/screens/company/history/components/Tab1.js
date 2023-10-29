import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import sidebar from '../assets/sidebar.svg';
import sidebar_short from '../assets/sidebar_short.svg';
import whitedot from '../assets/whitedot.svg';
import graydot from '../assets/graydot.svg';
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
  color: ${(props) => (props.$isActive ? '#ffffff' : '#868686')};
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
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 2rem;
  background-color: transparent;
  position: relative;
  width: 100%;
  height: fit-content;
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
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  gap: 5em;
  @media screen and (max-width: 1280px) {
    gap: 2em;
  }
  @media screen and (max-width: 900px) {
    gap: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    padding: 0;
  }
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 50%;
  border: ${(props) => (props.$isActive ? '2px solid #848484' : '2px solid transparent')};
  transition: border 0.3s ease-in-out;
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
  color: ${(props) => (props.$isActive ? '#ffffff' : '#707070')};
  &:nth-child(1) {
    margin-top: 3em;
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
const DescriptionItem = styled.li`
  width: 100%;
  height: fit-content;
  text-align: left;
  font-size: 20px;
  font-weight: 200;
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

const Tab1 = ({ listItems, index }) => {
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
          if (
            document.getElementsByClassName(element.title)[0]?.offsetTop - scrollY.offsetHeight * 0.2 <
            scrollY.scrollTop
          ) {
            setScrollTab(element.title);
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
          }
        }
      }
    }
  };

  useEffect(() => {
    const scrollY = document.getElementsByClassName(currentTab)[0]?.offsetTop;
    document.getElementsByClassName('description-grid')[0]?.scrollTo(0, scrollY, 'smooth');
  }, [currentTab]);

  useEffect(() => {
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
      window.addEventListener('scroll', () => {
        handleScroll();
      });
    }

    return () => {
      document.querySelector('.description-grid')?.removeEventListener('scroll', () => {
        handleScroll();
      });
      window.removeEventListener('scroll', () => {
        handleScroll();
      });
    };
  }, [listItems]);

  useEffect(() => {
    console.log('listContents', listContents);
    console.log('tabNames', tabNames);
  }, [listContents]);

  return (
    <>
      <Desktop>
        <HomeComponentWrap>
          <GridBox className="scrollbox">
            {tabNames?.length > 3 ? (
              <img
                src={sidebar}
                alt="sidebar"
                style={{
                  position: 'absolute',
                  top: index === 0 ? '0' : '-6rem',
                  left: window.innerWidth > 1280 ? '-1px' : '0',
                  zIndex: '10',
                  margin: index === 0 ? '0.18em 0.15em' : '0.10em',
                  padding: '2rem',
                  height: '-webkit-fill-available',
                }}
              />
            ) : (
              <img
                src={sidebar_short}
                alt="sidebar_short"
                style={{
                  position: 'absolute',
                  top: index === 0 ? '0' : '-3.9rem',
                  left: '2.06em',
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
                    src={tabName === scrollTab ? whitedot : graydot}
                    $isActive={tabName === scrollTab ? true : false}
                    style={{ padding: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  />
                }
                <Text
                  $isActive={tabName === scrollTab ? true : false}
                  onClick={() => {
                    setCurrentTab(tabName);
                  }}
                  style={{ height: '3rem' }}
                >
                  {tabName}
                </Text>
              </GridBoxContentWrap>
            ))}
          </GridBox>
          <GridBox className="description-grid" style={{ height: '70vh', overflowY: 'scroll' }}>
            {listContents?.map((item, index) => (
              <DescriptionWrap
                ref={refs[index]}
                className={tabNames[index]}
                key={'desc' + index}
                $isActive={tabNames.indexOf(scrollTab) === index ? true : false}
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
                  src={tabName === scrollTab ? whitedot : graydot}
                  $isActive={tabName === scrollTab ? true : false}
                  style={{
                    marginRight: '12px',
                    padding: '8px',
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
                    top: '0',
                    left: '13px',
                    width: '2px',
                    height: index !== tabNames.length - 1 ? '100%' : '18px',
                    borderRight: '2px dotted rgba(255, 255, 255, 0.5)',
                    margin: index === 0 ? '18px 0 0 0' : '0',
                  }}
                ></div>
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
