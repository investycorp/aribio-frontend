import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HomeComponentWrap, Text } from '../style';

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
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.5em;
  padding: 3em 3em;
  border-left: 1px solid #ffffff;
  background-color: transparent;
  &:nth-child(3n + 2) {
    margin-top: 10vh;
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
`;

const Advisors = () => {
  const [tabContents, setTabContents] = useState([
    { name: 'Sharon Sha', position: 'MD', description: 'Neurology, Stanford University' },
    { name: 'Sharon Sha', position: 'MD', description: 'Neurology, Stanford University' },
    { name: 'Sharon Sha', position: 'MD', description: 'Neurology, Stanford University' },
  ]);
  return (
    <HomeComponentWrap
      style={{ minHeight: 'fit-content', justifyContent: 'start', overflow: 'hidden', paddingTop: '0' }}
    >
      <TabContentWrap>
        {tabContents?.map((item, index) => (
          <ContentBox key={index}>
            <ContentBoxNameWrap style={{ paddingLeft: (index + 1) % 3 !== 1 && '0' }}>
              <Text $fontSize="34px" $fontWeight="400" $align="start" style={{ margin: '0' }}>
                {item.name}
                <span style={{ fontSize: '20px', marginLeft: '2rem' }}>{item.position}</span>
              </Text>
            </ContentBoxNameWrap>
            <hr style={{ width: '2em', border: '1px solid #ffffff', margin: '1rem 0 0 0' }} />
            <SchoolText>{item.description}</SchoolText>
          </ContentBox>
        ))}
      </TabContentWrap>
    </HomeComponentWrap>
  );
};

export default Advisors;
