import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HomeComponentWrap, Text } from '../style';
import { Desktop, Mobile } from '../../../../utils/MediaQuery';

import useAdvisorList from '../../../../hooks/company/useAdvisorList';
import Language from '../../../../atom/Language';
import { useRecoilValue } from 'recoil';

const TabContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 28.7vw 28.7vw 28.7vw;
  grid-template-rows: 1fr;
  flex-wrap: wrap;
  justify-content: start;
  align-items: left;
  background-color: transparent;
  row-gap: 5em;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-bottom: 3rem;
    margin-top: 2rem;
    row-gap: 5rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.5em;
  padding: 0 0 0 3em;
  margin: 3em 0;
  border-left: 1px solid #ffffff;
  background-color: transparent;
  &:nth-child(3n + 2) {
    margin-top: 10vh;
  }

  @media screen and (min-width: 901px) and (max-width: 1280px) {
    padding: 0 0 0 1.5rem;
    &:nth-child(3n + 2) {
      margin-top: 15vh;
    }
  }
  @media screen and (max-width: 900px) {
    width: 66.7%;
    padding: 0 0 0 1.5rem;
  }
`;

const ContentBoxNameWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SchoolText = styled.div`
  font-size: 18px;
  color: #e3e3e3;
  font-weight: 100;
  line-height: 1.5em;
  @media screen and (max-width: 1280px) {
    font-size: 10px;
  }
`;

const Advisors = () => {
  const [language] = useRecoilValue(Language);
  const { data, isLoading } = useAdvisorList(language);
  const [tabContents, setTabContents] = useState([]);
  // const [tabContents, setTabContents] = useState([
  //   { name: 'Sharon Sha', position: 'MD', description: 'Neurology, Stanford University' },
  //   { name: 'Sang-Yun Kim', position: 'MD, PhD', description: 'Neurology, Seoul National University Bundang Hospital' },
  //   {
  //     name: 'Jeffrey Cummings',
  //     position: 'MD, ScD',
  //     description: 'Neurology, UNLV school of integrated Health Sciences',
  //   },
  // ]);

  useEffect(() => {
    let itemList = [];
    data?.data?.dataList?.map((item, index) => {
      itemList.push({
        id: item.id,
        position: item.position,
        name: item.name,
        description: item.contents.split(`\\n`),
      });
    });
    setTabContents(itemList);
    console.log(data);
  }, [data]);

  return (
    <HomeComponentWrap
      style={{ minHeight: 'fit-content', justifyContent: 'start', overflow: 'hidden', paddingTop: '0' }}
    >
      <Desktop>
        <TabContentWrap>
          {tabContents?.map((item, index) => (
            <ContentBox key={index}>
              <ContentBoxNameWrap
                style={{ paddingLeft: (index + 1) % 3 !== 1 && '0', justifyContent: 'start', alignItems: 'end' }}
              >
                <Text
                  $fontSize={window.innerWidth > 1280 ? '34px' : '18px'}
                  $fontWeight="400"
                  $align="start"
                  style={{ margin: '0' }}
                >
                  {item.name}
                  <span
                    style={{
                      fontSize: window.innerWidth > 1280 ? '20px' : '12px',
                      marginLeft: window.innerWidth > 1280 ? '2rem' : '1rem',
                    }}
                  >
                    {item.position}
                  </span>
                </Text>
              </ContentBoxNameWrap>
              <hr
                style={{
                  width: '2em',
                  border: '1px solid #ffffff',
                  margin: window.innerWidth > 1280 ? '1rem 0 0 0' : '0.5rem 0 0 0',
                }}
              />
              <SchoolText>{item.description}</SchoolText>
            </ContentBox>
          ))}
        </TabContentWrap>
      </Desktop>
      <Mobile>
        <TabContentWrap>
          {tabContents?.map((item, index) => (
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: `${index % 2 === 0 ? 'flex-start' : 'flex-end'}`,
              }}
              key={'tabContent' + index}
            >
              <ContentBox key={index}>
                <ContentBoxNameWrap style={{ paddingLeft: (index + 1) % 3 !== 1 && '0' }}>
                  <Text $fontSize="18px" $fontWeight="400" $align="start" style={{ margin: '0' }}>
                    {item.name}
                    <span style={{ fontSize: '15px', marginLeft: '1rem' }}>{item.position}</span>
                  </Text>
                </ContentBoxNameWrap>

                <SchoolText style={{ fontSize: '16px' }}>{item.description}</SchoolText>
              </ContentBox>
            </div>
          ))}
        </TabContentWrap>
      </Mobile>
    </HomeComponentWrap>
  );
};

export default Advisors;
