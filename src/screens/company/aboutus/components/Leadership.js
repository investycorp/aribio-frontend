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
  CeoBox,
  MemberListWrap,
  TextWrap,
  HeadListWrap,
  HeadItemWrap,
} from '../style';
import { Desktop, Mobile } from '../../../../utils/MediaQuery';
import useLeadershipList from '../../../../hooks/company/useLeadershipList';
import Language from '../../../../atom/Language';
import { useRecoilValue } from 'recoil';
import { ContentWrap, HR } from '../../../../components/style';
import { t } from 'i18next';

const Leadership = () => {
  const [language] = useRecoilValue(Language);
  const { data, isLoading } = useLeadershipList('leadership', language);
  const [ceoContents, setCeoContents] = useState({});
  const [usContents, setUsContents] = useState([]);
  const [headContents, setHeadContents] = useState([]);

  useEffect(() => {
    setCeoContents(data?.data?.data?.ceo);
    setUsContents(data?.data?.data?.usList);
    setHeadContents(data?.data?.data?.headList);
  }, [data]);

  return (
    <HomeComponentWrap
      id="leadership"
      style={{ width: '100vw', padding: '0', justifyContent: 'start', overflow: 'hidden' }}
    >
      <Desktop>
        <TabContentWrap id="leadership">
          {ceoContents && (
            <CeoBox
              style={{
                padding: window.innerWidth > 1280 ? '0 7vw 504px' : '0 7vw 255px'
              }}
            >
              <Image
                width={window.innerWidth > 1280 ? 835 : 478}
                height={window.innerWidth > 1280 ? 555 : 315}
                src={ceoContents?.fileDto?.fileUrl}
                alt="ceoProfilePicture"
              />
              <TextWrap
                style={{
                  width: window.innerWidth > 1280 ? 835 : 478,
                  height: window.innerWidth > 1280 ? 555 : 315,
                }}
              >
                <TextWrap
                  style={{
                    width: window.innerWidth > 1280 ?  500 : 280,
                  }}
                >
                  <Text
                    $align="start"
                    $color="#F2F2F2"
                    $fontWeight='500'
                    style={{
                      margin: '0',
                      fontSize: window.innerWidth > 1280 ? '20px' : '11px',
                    }}
                  >
                    {ceoContents?.position}
                  </Text>
                  <Text
                    $align="start"
                    $color="#F2F2F2"
                    $fontWeight='700'
                    style={{
                      margin: '0',
                      marginBottom: '2vh',
                      fontSize: window.innerWidth > 1280 ? '36px' : '20px',
                    }}
                    >
                    {ceoContents?.name}
                  </Text>
                  {/* <HR $width={window.innerWidth > 1280 ? '60px' : '24px'} style={{alignSelf:'start', marginTop: window.innerWidth > 1280 ? 75 : 29 }} /> */}
                  <Text
                    $align="start"
                    $color="#F2F2F2"
                    style={{
                      margin: '0',
                      paddingLeft: window.innerWidth > 1280 ? '1rem' : '0.5rem',
                      fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                    }}
                  > 
                    <ul>
                    {ceoContents?.contents?.split("\\n").map((item, index) => (
                        <DescriptionItem key={index}
                          style={{
                            listStyle: 'disc',
                            lineHeight: window.innerWidth > 1280 ? '2rem' : '1.25rem',
                            fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                          }}
                        >
                          {item}
                        </DescriptionItem>
                      ))}
                    </ul>
                  </Text>
                </TextWrap>
              </TextWrap>
          </CeoBox>
          )}
         <TextWrap
          style={{
            width: '100%',
            paddingLeft: '7vw'
          }}
         >
          <HR $width={window.innerWidth > 1280 ? '60px' : '24px'} style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
          <Text
            $fontSize={window.innerWidth > 1280 ? '34px' : '20px'}
            $fontWeight="500"
            $color="#E5E5E5"
            $align="start"
            style={{marginBottom: window.innerWidth > 1280 ? 150 : 100}}
          >
            {t('home.aboutus.subtitle.us')}
          </Text>
         </TextWrap>
         <ContentWrap
          style={{padding: 0}}
         >
          <MemberListWrap>
            {usContents?.map((item, index) => (
              <ContentBox
                key={index}
                style={{
                  width: window.innerWidth > 1280 ? 454 : 274,
                }}
              >
                <Image
                  src={item?.fileDto?.fileUrl}
                  alt="leadershipphoto1"
                  width={window.innerWidth > 1280 ? 454 : 274}
                  height="auto"
                  style={{marginBottom: window.innerWidth > 1280 ? 106 : 24}}
                />
                <ContentBoxNameWrap>
                  <Text
                    $align="start"
                    $color="rgba(255,255,255,0.9)"
                    style={{
                      margin: '0',
                      fontSize: window.innerWidth > 1280 ? '20px' : '12px',
                    }}
                  >
                    {item?.position}
                  </Text>
                  <Text
                    $fontWeight="700"
                    $align="start"
                    style={{ margin: window.innerWidth > 1280 ? '0.5rem 0 2.5rem 0' : '0.5rem 0 1.563rem 0', fontSize: window.innerWidth > 1280 ? '34px' : '20px' }}
                  >
                    {item?.name}
                  </Text>
                  <Text
                    $align="start"
                    $color="#F2F2F2"
                    style={{
                      margin: '0',
                      fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                      paddingLeft: window.innerWidth > 1280 ? '1.125rem' : '0.45rem',
                    }}
                  >
                    <ul>
                      {item?.contents?.split("\\n").map((item, index) => (
                        <DescriptionItem 
                        key={index}
                        style={{
                          listStyle: 'disc',
                          fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                        }}
                        >
                            {item}
                          </DescriptionItem>
                      ))}
                    </ul>
                  </Text>
                </ContentBoxNameWrap>
              </ContentBox>
            ))}       
          </MemberListWrap>
         </ContentWrap>
          <TextWrap
            style={{
              padding: '0 7vw'
            }}
          >
            <HR $width={window.innerWidth > 1280 ? '60px' : '24px'} style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '20px'}
              $fontWeight="600"
              $color="#E5E5E5"
              $align="start"
              style={{marginBottom: window.innerWidth > 1280 ? 150 : 120}}
            >
              {t('home.aboutus.subtitle.head')}
            </Text>
          </TextWrap>
          <ContentWrap
            style={{padding: 0}}
          >
            <HeadListWrap>
            {headContents?.map((item, index) => (
              <ContentBox
                key={index}
                style={{
                  width: window.innerWidth > 1280 ? 454 : 274,
                  marginBottom: window.innerWidth > 1280 ? '12.75vh' : '6vh'
                }}
              >
                <ContentBoxNameWrap>
                  <div style={{display: 'flex', flexDirection: 'row'}}>

                    {/* <HR style={{backgroundColor: '#B1B1B1', width: 2, height:  window.innerWidth > 1280 ? '5rem' : '3.25rem', marginRight: '2.0833vw'}}/> */}
                    <TextWrap>
                      <Text
                        $align="start"
                        $color="rgba(255, 255, 255, 0.9)"
                        style={{
                          margin: '0',
                          fontSize: window.innerWidth > 1280 ? '20px' : '12px',
                        }}
                        >
                        {item?.position}
                      </Text>
                      <Text
                        $fontWeight="700"
                        $align="start"
                        style={{ margin: '0.5rem 0 2.5rem 0', fontSize: window.innerWidth > 1280 ? '34px' : '20px' }}
                        >
                        {item?.name}
                      </Text>
                    </TextWrap>
                  </div>
                  <Text
                    $align="start"
                    $color="#F2F2F2"
                    style={{
                      margin: '0',
                      fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                      // paddingLeft:  window.innerWidth > 1280 ? '3.625rem' : '2.25rem',
                    }}
                  >
                    <ul style={{paddingLeft: window.innerWidth > 1280 ? '1rem' : '0.5rem'}}>
                      {item?.contents?.split("\\n").map((item, index) => (
                        <DescriptionItem key={item + index} 
                          style={{
                            listStyle: 'disc',
                            fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                          }}
                        >
                          {item}
                        </DescriptionItem>
                      ))}
                    </ul>
                  </Text>
                </ContentBoxNameWrap>
              </ContentBox>
            ))}
                        
            </HeadListWrap>
          </ContentWrap>
        </TabContentWrap>
      </Desktop>




      <Mobile>
        <TabContentWrap
           style={{padding: '0 19px', marginBottom: 160}}
          >
            <Image
              width={322}
              height={236}
              src={ceoContents?.fileDto?.fileUrl}
              alt="ceoProfilePicture"
              style={{
                marginBottom: 45
              }}
            />
            <TextWrap style={{width: '100%'}}>
              <Text
                $align="start"
                $color="#F2F2F2"
                $fontWeight='500'
                style={{
                  margin: '0',
                  fontSize: 15,
                }}
              >
                {ceoContents?.position}
              </Text>
              <Text
                $align="start"
                $color="#F2F2F2"
                $fontWeight='700'
                style={{
                  margin: '0',
                  marginBottom: 16,
                  fontSize: 18,
                }}
                >
                {ceoContents?.name}
              </Text>
            </TextWrap>
            <TextWrap style={{width: '100%'}}>
              <Text
                $align="start"
                $color="#F2F2F2"
                style={{
                  margin: '0',
                  fontSize: 16,
                  fontWeight: 300,
                }}
              >
                  <ul style={{paddingLeft: '0.8rem'}}>
                    {ceoContents?.contents?.split("\\n").map((item, index) => (
                      <DescriptionItem 
                      key={index}
                      style={{
                        listStyle: 'disc',
                        fontSize: '16px',
                      }}
                      >
                          {item}
                        </DescriptionItem>
                    ))}
                  </ul>
              </Text>
            </TextWrap>
         </TabContentWrap>
         <div
          style={{
            alignSelf: 'start',
            paddingLeft: 19
          }}
          >
          <HR $width="40px" style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
          <Text
            $fontSize={window.innerWidth > 1280 ? '34px' : '20px'}
            $fontWeight="600"
            $color="#E5E5E5"
            $align="start"
            style={{marginBottom: 48}}
            >
            {t('home.aboutus.subtitle.us')}
          </Text>
        </div>
        <TabContentWrap>
          {usContents?.map((item, index) => (
            <div
              id="fadeIn"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 19px',
              }}
              key={'tabcontent' + index}
            >
              <ContentBox key={index}>

                <Image src={item?.fileDto.fileUrl} alt="leadershipphoto" style={{ width: 322, height: 200 }} />
                <ContentBoxNameWrap>
                  <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <TextWrap>
                    <Text
                      $align="start"
                      $color="#F2F2F2"
                      $fontSize="20px"
                      style={{ margin: '0', fontSize: '15px' }}
                      >
                      {item?.position}
                    </Text>
                    <Text $fontSize="18px" $fontWeight="600" $align="start" style={{ margin: '0' }}>
                      {item?.name}
                    </Text>
                  </TextWrap>
                  {item?.isOpen ? (
                    <Image
                      onClick={() => {
                        const newTabContents = usContents?.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item?.isOpen };
                          }
                          return item;
                        });
                        setUsContents(newTabContents);
                      }}
                      src={minus}
                      alt="minus"
                      style={{ height: '20px' }}
                    />
                  ) : (
                    <Image
                      onClick={() => {
                        const newTabContents = usContents.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item?.isOpen };
                          }
                          return item;
                        });
                        setUsContents(newTabContents);
                      }}
                      src={plus}
                      alt="plus"
                      style={{ height: '20px' }}
                    />
                  )}
                </div>
                </ContentBoxNameWrap>
                {item?.isOpen && (

                  <ul style={{paddingLeft: '1.4rem'}}>
                    {item?.contents?.split("\\n").map((item, index) => (
                      <DescriptionItem 
                      key={index}
                      style={{
                        listStyle: 'disc',
                        fontSize: '16px',
                      }}
                      >
                          {item}
                        </DescriptionItem>
                    ))}
                </ul>
                    )}
              </ContentBox>
            </div>
          ))}
        </TabContentWrap>
        <div
          style={{
            alignSelf: 'start',
            paddingLeft: 19
          }}
        >
          <HR $width="40px" style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
          <Text
            $fontSize={window.innerWidth > 1280 ? '34px' : '20px'}
            $fontWeight="600"
            $color="#E5E5E5"
            $align="start"
            style={{marginBottom: 48}}
            >
            {t('home.aboutus.subtitle.head')}
          </Text>
        </div>
        <TabContentWrap>
          {headContents?.map((item, index) => (
            <div
              id="fadeIn"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 19px',
              }}
              key={'tabcontent' + index}
            >
              <HeadItemWrap key={index}>
                <ContentBoxNameWrap>
                  <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <TextWrap>
                    <Text
                      $align="start"
                      $color="#F2F2F2"
                      $fontSize="20px"
                      style={{ margin: '0', fontSize: '15px' }}
                      >
                      {item?.position}
                    </Text>
                    <Text $fontSize="18px" $fontWeight="600" $align="start" style={{ margin: '0' }}>
                      {item?.name}
                    </Text>
                  </TextWrap>
                  {item?.isOpen ? (
                    <Image
                      onClick={() => {
                        const newTabContents = headContents?.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item?.isOpen };
                          }
                          return item;
                        });
                        setHeadContents(newTabContents);
                      }}
                      src={minus}
                      alt="minus"
                      style={{ height: '20px' }}
                    />
                  ) : (
                    <Image
                      onClick={() => {
                        const newTabContents = headContents?.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item?.isOpen };
                          }
                          return item;
                        });
                        setHeadContents(newTabContents);
                      }}
                      src={plus}
                      alt="plus"
                      style={{ height: '20px' }}
                    />
                  )}
                </div>
                </ContentBoxNameWrap>
                {item?.isOpen && (

                  <ul style={{paddingLeft: '1.4rem'}}>
                    {item?.contents?.split("\\n").map((item, index) => (
                      <DescriptionItem 
                      key={index}
                      style={{
                        listStyle: 'disc',
                        fontSize: '16px',
                      }}
                      >
                          {item}
                        </DescriptionItem>
                    ))}
                </ul>
                    )}
              </HeadItemWrap>
            </div>
          ))}
        </TabContentWrap>
      </Mobile>
    </HomeComponentWrap>
  );
};

export default Leadership;
