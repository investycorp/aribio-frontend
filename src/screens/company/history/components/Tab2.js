import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import sidebar from '../assets/sidebar.svg';
import whitedot from '../assets/whitedot.svg';
import graydot from '../assets/graydot.svg';
import { Desktop, Mobile } from '../../../../utils/MediaQuery';

const HomeComponentWrap = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-content: center;
  align-items: start;
  background-color: transparent;
  padding: 0 20vw 10vh 7vw;
  z-index: 10;
`;

const Text = styled.div`
  width: fit-content;
  font-size: ${(props) => (props.$isActive ? '50px' : '24px')};
  font-weight: ${(props) => (props.$isActive ? '500' : '300')};
  color: ${(props) => (props.$isActive ? '#ffffff' : '#868686')};
  line-height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: ${(props) => (props.$align ? props.$align : 'start')};
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    font-weight: 500;
    font-size: 50px;
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
`;
const GridBoxContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  gap: 6.5em;
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

  &:last-child {
    margin-bottom: 60vh;
  }
`;
const DescriptionItem = styled.li`
  width: 100%;
  height: fit-content;
  text-align: left;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.5em;
  list-style: disc;
  list-style-position: outside;
`;

const Tab2 = () => {
  const [tabNames, setTabNames] = useState(['2018', '2017', '2016', '2014', '2013']);
  const refs = useRef(Array(tabNames.length).fill(React.createRef()));
  const [currentTab, setCurrentTab] = useState('2018');
  const [scrollTab, setScrollTab] = useState('2018');
  const [historyContents, setHistoryContents] = useState([
    {
      content: [
        'AR1001 (VD DMT) IND Submission (US FDA)',
        'AR1001 (VD DMT) Pre-IND Meeting (US FDA)',
        'US Office Set-up (San Diego, USA)',
      ],
    },
    {
      content: [
        'Awarded for Technological Achievements in Pharma/Biotech Sector',
        'Certification of Excellent Technology (NDB-2017)',
        'AR1001 (AD DMT) Phase 2 IND Application (US FDA)',
        'AR1001 (AD DMT) Pre-IND Meeting (US FDA)',
      ],
    },
    {
      content: [
        'Selected as Industrial Convergence Company (No. 2016-608)',
        'Certified as INNO-BIZ Company (No. 140605-00698)',
      ],
    },
    {
      content: [
        'New Excellent Technology (NET) Certification (No. 89)',
        'Clinical Science Research Lab Certified as Corporate Research Institute',
      ],
    },
    {
      content: ['Commenced Pre-Clinical Development of AR1001', 'Renewed Company Name to “AriBio Co., Ltd.”'],
    },
  ]);

  const handleScroll = () => {
    const scrollY = document.getElementsByClassName('description-grid')[0].scrollTop;
    console.log(currentTab);
    switch (true) {
      case scrollY <=
        document.getElementsByClassName('2018')[0]?.offsetTop +
          document.getElementsByClassName('2018')[0]?.offsetHeight * 0.6:
        setScrollTab('2018');
        break;
      case scrollY <=
        document.getElementsByClassName('2017')[0]?.offsetTop +
          document.getElementsByClassName('2017')[0]?.offsetHeight * 0.6:
        setScrollTab('2017');
        break;
      case scrollY <=
        document.getElementsByClassName('2016')[0]?.offsetTop +
          document.getElementsByClassName('2016')[0].offsetHeight * 0.6:
        setScrollTab('2016');
        break;
      case scrollY <=
        document.getElementsByClassName('2014')[0]?.offsetTop +
          document.getElementsByClassName('2014')[0].offsetHeight * 0.6:
        setScrollTab('2014');
        break;
      default:
        setScrollTab('2013');
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

  return (
    <>
      <Desktop>
        <HomeComponentWrap>
          <GridBox>
            <img
              src={sidebar}
              alt="sidebar"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '10',
                margin: '0 32px',
                height: '92.5%',
                transition: 'all 0.2s ease-in-out',
              }}
            />
            <GridBoxContentWrap></GridBoxContentWrap>
            {tabNames.map((tabName) => (
              <GridBoxContentWrap key={tabName}>
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
                >
                  {tabName}
                </Text>
              </GridBoxContentWrap>
            ))}
          </GridBox>
          <GridBox className="description-grid" style={{ height: '70vh', overflowY: 'scroll', marginTop: '3em' }}>
            {historyContents.map((item, index) => (
              <DescriptionWrap
                ref={refs[index]}
                className={tabNames[index]}
                key={index}
                $isActive={tabNames.indexOf(scrollTab) === index ? true : false}
              >
                {item.content.map((content, index) => (
                  <DescriptionItem key={index + content}>{content}</DescriptionItem>
                ))}
              </DescriptionWrap>
            ))}
          </GridBox>
        </HomeComponentWrap>
      </Desktop>
      <Mobile></Mobile>
    </>
  );
};

export default Tab2;
