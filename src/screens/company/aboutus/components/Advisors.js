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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10rem 8rem;
  margin-top: 4vh;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-bottom: 3rem;
    margin-top: 2rem;
    row-gap: 5rem;
  }

  @media screen and (max-width: 1280px) {
    gap: 5rem 8rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  height: fit-content;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.5em;
  // padding: 0 0 0 3em;
  // border-left: 2px solid #ffffff;
  background-color: transparent;

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
  line-height: 32px;

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  ul li {
    position: relative;
    padding-left: 1em;
  }

  ul li:before {
    content: "  •  ";
    position: absolute;
    left: 0;
    top: 0; // 필요에 따라 조절
  }

  @media screen and (max-width: 1280px) {
    font-size: 10px;
    line-height: 18px;
  }

  @media screen and (max-width: 360px) {
    line-height: 1.5em;

    ul li {
    padding-left: 0.75rem;
  }
  }


`;

const Advisors = () => {
  const [language] = useRecoilValue(Language);
  const { data, isLoading } = useAdvisorList(language);
  const [tabContents, setTabContents] = useState([]);

  useEffect(() => {
    let itemList = [];
    data?.data?.dataList?.map((item, index) => {
      itemList.push({
        id: item?.id,
        position: item?.position,
        name: item?.name,
        description: item?.contents.split(`\\n`),
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
        <TabContentWrap style={{
          marginBottom: window.innerWidth > 1280 ? '512px' : '344px',
        }}>
          {tabContents?.map((item, index) => (
            <ContentBox
              key={index}
              style={{
                minHeight: '135px',
                gap: window.innerWidth > 1280 ? '3rem' : '1rem',
                width: window.innerWidth > 1280 ? 454 : 274,
            }}>
              <ContentBoxNameWrap
                style={{ paddingLeft: (index + 1) % 3 !== 1 && '0', justifyContent: 'start', alignItems: 'end' }}
              >
                <Text
                  $fontSize={window.innerWidth > 1280 ? '30px' : '18px'}
                  $fontWeight="600"
                  $align="start"
                  style={{ margin: '0' }}
                >
                  {item?.name}
                  <span
                    style={{
                      fontSize: window.innerWidth > 1280 ? '20px' : '12px',
                      marginLeft: window.innerWidth > 1280 ? '2rem' : '1rem',
                      fontWeight: '400',
                    }}
                  >
                    {item?.position}
                  </span>
                </Text>
              </ContentBoxNameWrap>
              {/* <hr
                style={{
                  width: window.innerWidth > 1280 ? '40px' : '25px',
                  border: '1px solid #ffffff',
                  margin: window.innerWidth > 1280 ? '1.5rem 0 1rem 0' : '1rem 0 0.5rem 0',
                  borderWeight: window.innerWidth > 1280 ? '2px' : '1px',
                }}
              /> */}
              <SchoolText>
                <ul>
                  {item?.description.slice('\\n').map(text => {
                    return (
                      <li>
                        <span>{text}</span>
                        <br/>
                      </li>
                    );
                  })}
                </ul>
              </SchoolText>
            </ContentBox>
          ))}
        </TabContentWrap>
      </Desktop>


      <Mobile>
        <TabContentWrap style={{ width: '90vw' }}>
          {tabContents?.map((item, index) => (
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 10px 0 0',
              }}
              key={'tabContent' + index}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <ContentBox
                  style={{
                    width: 'fit-content',
                    border: 'none',
                    margin: '0',
                    padding: 0,
                  }}
                  key={index}
                >
                  <ContentBoxNameWrap style={{ width: 'fit-content' }}>
                    <Text $fontSize="18px" $fontWeight="700" $align="start" style={{ margin: '0', padding: '0' }}>
                      {item?.name}
                      <span style={{ fontSize: '15px', fontWeight: '300', marginLeft: '1rem' }}>{item?.position}</span>
                    </Text>
                  </ContentBoxNameWrap>

                  <SchoolText style={{ fontSize: '16px', fontWeight: '100', paddingRight: '0' }}>
                    <ul>
                    {item?.description.slice('\\n').map(text => {
                      return (
                        <li>
                          <span>{text}</span>
                          <br/>
                        </li>
                      );
                    })}
                    </ul>
                  </SchoolText>
                </ContentBox>
                {/* {index % 2 === 1 && <div style={{ width: '1px', height: '60px', backgroundColor: '#B1B1B1' }}></div>} */}
              </div>
            </div>
          ))}
        </TabContentWrap>
      </Mobile>
    </HomeComponentWrap>
  );
};

export default Advisors;
