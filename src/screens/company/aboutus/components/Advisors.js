import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HomeComponentWrap, Text } from '../style';
import { Desktop, Mobile } from '../../../../utils/MediaQuery';

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
  @media screen and (min-width: 901px) {
    &:nth-child(3n + 2) {
      margin-top: 8vh;
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
`;

const Advisors = () => {
  const [tabContents, setTabContents] = useState([
    { name: 'Sharon Sha', position: 'MD', description: 'Neurology, Stanford University' },
    { name: 'Sang-Yun Kim', position: 'MD, PhD', description: 'Neurology, Seoul National University Bundang Hospital' },
    {
      name: 'Jeffrey Cummings',
      position: 'MD, ScD',
      description: 'Neurology, UNLV school of integrated Health Sciences',
    },
    {
      name: 'Douglas Galasko',
      position: 'MD',
      description: 'Neurology, UCSD',
    },
    {
      name: 'Atticus Hainsworth',
      position: 'PhD',
      description: 'Neuroscience, St. George’s University of London',
    },
    {
      name: 'David Knopman',
      position: 'MD',
      description: 'Neurology, Mayo Clinic',
    },
    {
      name: 'Niels Prins',
      position: 'MD, PhD',
      description: 'CEO, Brain Research Center',
    },
    {
      name: 'Marwan Sabbagh',
      position: 'MD',
      description: 'Neurology, Barrow Neurological Institute',
    },
    {
      name: 'Charlotte Teunissen',
      position: 'PhD',
      description: 'Neurology, Barrow Neurological Institute',
    },
    {
      name: 'Kaj Blennow',
      position: 'MD, PhD',
      description: 'Neurochemistry, University of Gothenburg ',
    },
    {
      name: 'Yong-Keun Jung',
      position: 'PhD',
      description: 'Molecular Biology, College of Life Sciences, Seoul National University',
    },
    {
      name: 'Se-Kwang Ku',
      position: 'PhD',
      description: 'Toxicology, Daegu Haany University, College of Oriental Medicine',
    },
    {
      name: 'Byeongsuk Ye',
      position: 'MD,PhD',
      description: 'Neurology, Yonsei University Severance Hospital',
    },
  ]);
  return (
    <HomeComponentWrap
      style={{ minHeight: 'fit-content', justifyContent: 'start', overflow: 'hidden', paddingTop: '0' }}
    >
      <Desktop>
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
