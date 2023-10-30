import React, { useEffect, useState } from 'react';
import minus from '../../../../assets/images/aboutus/minus.svg';
import plus from '../../../../assets/images/aboutus/plus.svg';
import {
  HomeComponentWrap,
  Text,
  TabContentWrap,
  ContentBox,
  ContentBoxNameWrap,
  Image,
  DescriptionWrap,
  DescriptionItem,
} from '../style';
import { Desktop, Mobile } from '../../../../utils/MediaQuery';
import useLeadershipList from '../../../../hooks/company/useLeadershipList';
import Language from '../../../../atom/Language';
import { useRecoilValue } from 'recoil';

const Leadership = () => {
  const [language] = useRecoilValue(Language);
  const { data, isLoading } = useLeadershipList('leadership', language);
  const [tabContents, setTabContents] = useState([]);

  useEffect(() => {
    let itemList = [];
    data?.data?.dataList?.map((item, index) => {
      itemList.push({
        id: item.id,
        position: item.position,
        name: item.name,
        photo: item?.fileDto?.fileUrl,
        isOpen: index === 0 ? true : false,
        description: item.contents.split(`\\n`),
      });
    });
    setTabContents(itemList);
  }, [data]);

  return (
    <HomeComponentWrap
      id="leadership"
      style={{ width: '100vw', padding: '0', justifyContent: 'start', overflow: 'hidden' }}
    >
      <Desktop>
        <TabContentWrap id="leadership">
          {tabContents.map((item, index) => (
            <ContentBox key={index}>
              <Text
                $align="start"
                $color="#F2F2F2"
                style={{
                  paddingLeft: index % 3 === 0 ? '7vw' : '0',
                  margin: '0',
                  fontSize: window.innerWidth > 1280 ? '20px' : '12px',
                }}
              >
                {item.position}
              </Text>
              <Image src={item.photo} alt="leadershipphoto1" style={{ width: '100%' }} />
              <ContentBoxNameWrap style={{ paddingLeft: (index + 1) % 3 !== 1 && '0' }}>
                <Text
                  $fontWeight="600"
                  $align="start"
                  style={{ margin: '0.5rem 0 0 0', fontSize: window.innerWidth > 1280 ? '34px' : '20px' }}
                >
                  {item.name}
                </Text>
                {item.isOpen ? (
                  <Image
                    className="toggle"
                    onClick={() => {
                      const newTabContents = tabContents.map((item, idx) => {
                        if (idx === index) {
                          return { ...item, isOpen: !item.isOpen };
                        }
                        return item;
                      });
                      setTabContents(newTabContents);
                    }}
                    src={process.env.PUBLIC_URL + '/assets/icons/circle_minus_white.svg'}
                    alt="minus"
                    style={{
                      paddingRight: index % 3 === 2 && '7vw',
                      cursor: 'pointer',
                      height: window.innerWidth > 1280 ? '40px' : '28px',
                    }}
                  />
                ) : (
                  <Image
                    className="toggle"
                    onClick={() => {
                      const newTabContents = tabContents.map((item, idx) => {
                        if (idx === index) {
                          return { ...item, isOpen: !item.isOpen };
                        }
                        return item;
                      });
                      setTabContents(newTabContents);
                    }}
                    src={plus}
                    alt="plus"
                    style={{
                      paddingRight: index % 3 === 2 && '7vw',
                      cursor: 'pointer',
                      height: window.innerWidth > 1280 ? '40px' : '28px',
                    }}
                  />
                )}
                <DescriptionWrap
                  style={{
                    padding: index % 3 === 0 ? ' 0 0 0 10vw' : index % 3 === 1 ? '0 40px 0 3vw' : '0 7vw 0 3vw',
                  }}
                  $isActive={item.isOpen}
                >
                  {item.description.map((item, index) => (
                    <DescriptionItem key={'description' + index}>{item}</DescriptionItem>
                  ))}
                </DescriptionWrap>
              </ContentBoxNameWrap>
            </ContentBox>
          ))}
        </TabContentWrap>
      </Desktop>

      <Mobile>
        <TabContentWrap id="leadership">
          {tabContents.map((item, index) => (
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: `${index % 2 === 0 ? 'flex-start' : 'flex-end'}`,
              }}
              key={'tabcontent' + index}
            >
              <ContentBox key={index}>
                <Text
                  $align="start"
                  $color="#F2F2F2"
                  $fontSize="20px"
                  style={{ paddingLeft: `${index % 2 === 0 ? '5vw' : '0'}`, margin: '0', fontSize: '15px' }}
                >
                  {item.position}
                </Text>
                <Image src={item.photo} alt="leadershipphoto" style={{ width: '100%' }} />
                <ContentBoxNameWrap style={{ padding: `${index % 2 === 0 ? ' 0 0 0 5vw' : ' 0 5vw 0 0'}` }}>
                  <Text $fontSize="18px" $fontWeight="700" $align="start" style={{ margin: '0' }}>
                    {item.name}
                  </Text>
                  {item.isOpen ? (
                    <Image
                      onClick={() => {
                        const newTabContents = tabContents.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item.isOpen };
                          }
                          return item;
                        });
                        setTabContents(newTabContents);
                      }}
                      src={minus}
                      alt="minus"
                      style={{ height: '20px' }}
                    />
                  ) : (
                    <Image
                      onClick={() => {
                        const newTabContents = tabContents.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item.isOpen };
                          }
                          return item;
                        });
                        setTabContents(newTabContents);
                      }}
                      src={plus}
                      alt="plus"
                      style={{ height: '20px' }}
                    />
                  )}
                </ContentBoxNameWrap>
                <DescriptionWrap
                  style={{
                    padding: index % 2 === 0 ? ' 0 0 0 9vw' : '0 0 0 0',
                  }}
                  $isActive={item.isOpen}
                >
                  {item.description.map((item, index) => (
                    <DescriptionItem key={item + index}>{item}</DescriptionItem>
                  ))}
                </DescriptionWrap>
              </ContentBox>
            </div>
          ))}
        </TabContentWrap>
      </Mobile>
    </HomeComponentWrap>
  );
};

export default Leadership;
