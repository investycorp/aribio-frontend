import React, { useEffect, useState } from 'react';

import { Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import career_middle from './assets/career_middle.png';
import icon_work from './assets/icon_work.svg';
import icon_balancedLife from './assets/icon_balancedlife.svg';
import icon_culture from './assets/icon_culture.svg';
import icon_etc from './assets/icon_etc.svg';

import icon_recruitment_1 from './assets/icon_work.svg';
import icon_recruitment_2 from './assets/icon_balancedlife.svg';
import icon_recruitment_3 from './assets/icon_culture.svg';
import icon_recruitment_4 from './assets/icon_etc.svg';

import arrow from '../../assets/images/arrow.svg';

import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
  GridContentWrap,
  ContentBox,
  ContentBoxNameWrap,
  ContentWrap,
  Image,
  DescriptionWrap,
  DescriptionItem,
  HR,
  ShootingStarWrap,
  ShootingStar,
  FilterShadow,
  Button,
  RecruitmentItemWrap,
} from './style';

import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import Video from '../../components/Video';

import { t } from 'i18next';
import { Trans } from 'react-i18next';

import useCareerList from '../../hooks/career/useCareerList';

const Career = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useCareerList();
  const [detailPage, setDetailPage] = useState(false);

  const [coreValues, setCoreValues] = useState([
    {
      title: t('career.corevalue.subtitle1'),
      desc: (
        <>
          <Trans i18nKey={'career.corevalue.desc1'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: t('career.corevalue.subtitle2'),
      desc: (
        <>
          <Trans i18nKey={'career.corevalue.desc2'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: t('career.corevalue.subtitle3'),
      desc: (
        <>
          <Trans i18nKey={'career.corevalue.desc3'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: t('career.corevalue.subtitle4'),
      desc: (
        <>
          <Trans i18nKey={'career.corevalue.desc4'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: (
        <>
          <span>
            <Trans i18nKey={'career.corevalue.subtitle5'} components={{ 1: <br /> }} />
          </span>
        </>
      ),
      desc: (
        <>
          <Trans i18nKey={'career.corevalue.desc5'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: (
        <>
          <span>
            <Trans i18nKey={'career.corevalue.subtitle6'} components={{ 1: <br /> }} />
          </span>
        </>
      ),
      desc: (
        <>
          <Trans i18nKey={'career.corevalue.desc6'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: t('career.corevalue.subtitle7'),
      desc: (
        <>
          <Trans i18nKey={'career.corevalue.desc7'} components={{ 1: <br /> }} />
        </>
      ),
    },
  ]);
  const [recruitmentProcess, setRecruitmentProcess] = useState([
    {
      title: t('career.recruitment.subtitle1'),
      img: icon_recruitment_1,
      desc: (
        <>
          <Trans i18nKey={'career.recruitment.desc1'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: t('career.recruitment.subtitle2'),
      img: icon_recruitment_2,
      desc: (
        <>
          <Trans i18nKey={'career.recruitment.desc2'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: t('career.recruitment.subtitle3'),
      img: icon_recruitment_3,
      desc: (
        <>
          <Trans i18nKey={'career.recruitment.desc3'} components={{ 1: <br /> }} />
        </>
      ),
    },
    {
      title: t('career.recruitment.subtitle4'),
      img: icon_recruitment_4,
      desc: <>{t('career.recruitment.desc4')}</>,
    },
  ]);

  const [benefits, setBenefits] = useState([
    {
      title: t('career.benefits.subtitle1'),
      img: icon_work,
      desc: [
        t('career.benefits.desc1-1'),
        t('career.benefits.desc1-2'),
        t('career.benefits.desc1-3'),
        t('career.benefits.desc1-4'),
      ],
    },
    {
      title: t('career.benefits.subtitle2'),
      img: icon_balancedLife,
      desc: [
        t('career.benefits.desc2-1'),
        t('career.benefits.desc2-2'),
        t('career.benefits.desc2-3'),
        t('career.benefits.desc2-4'),
      ],
    },
    {
      title: t('career.benefits.subtitle3'),
      img: icon_culture,
      desc: [
        t('career.benefits.desc3-1'),
        t('career.benefits.desc3-2'),
        t('career.benefits.desc3-3'),
        t('career.benefits.desc3-4'),
      ],
    },
    {
      title: t('career.benefits.subtitle4'),
      img: icon_etc,
      desc: [
        t('career.benefits.desc4-1'),
        t('career.benefits.desc4-2'),
        t('career.benefits.desc4-3'),
        t('career.benefits.desc4-4'),
        t('career.benefits.desc4-5'),
      ],
    },
  ]);

  const [joinus, setJoinus] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    if (id) {
      setDetailPage(true);
    } else {
      setDetailPage(false);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    document.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        //show grid when scroll down
        document.querySelector('.grid_bg')?.classList.add('visible');
      } else {
        document.querySelector('.grid_bg')?.classList.remove('visible');
      }

      //fade in interaction on scroll

      const coreVal = document.querySelectorAll('#core_value');
      const benef = document.querySelectorAll('#benefits');

      if (coreVal[0]?.getBoundingClientRect().y < window.innerHeight * 0.7) {
        coreVal?.forEach((item) => {
          item?.classList.add('fadein');
        });
      } else {
        coreVal?.forEach((item) => {
          item?.classList.remove('fadein');
        });
      }

      if (benef[0]?.getBoundingClientRect().y < window.innerHeight * 0.7) {
        benef.forEach((item) => {
          item?.classList.add('fadein');
        });
      } else {
        benef.forEach((item) => {
          item?.classList.remove('fadein');
        });
      }
    });
    return () => {
      document.removeEventListener('scroll', () => {
        console.log('done');
      });
    };
  }, []);

  useEffect(() => {
    if (data?.data?.success) {
      let item = data.data.dataList?.map((item) => {
        return {
          id: item.id,
          type: item.type ? item.type : 'Job Openings',
          location: item.location,
          title: item.jobGroup,
          img: item.backgroundIUrl,
          url: item.url,
          content: item.popupContents,
        };
      });
      setJoinus(item);
    }
  }, [data]);

  return (
    <Container>
      <Header />
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME > `}</span>CAREER
      </Path>
      <MainImgWrap>
        <Video
          page="career"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0800PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1700PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2600PB_VD.mp4'
          }
        />
      </MainImgWrap>

      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>CAREER</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
            height: window.innerWidth > 1280 ? '60px' : '36px',
          }}
        />
      </HomeComponentWrap>
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        {detailPage ? (
          // rendering detail page and detail page footer navigation
          <>
            <Outlet />
          </>
        ) : (
          <>
            <Desktop>
              <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
                <TextWrap>
                  <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                    {t('career.title')}
                  </Text>
                  <div
                    style={{
                      width: '50%',
                      alignSelf: 'flex-start',
                      height: '4em',
                      borderRight: '2px solid #ffffff',
                      margin: '2rem 0',
                    }}
                  ></div>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                    $fontWeight="500"
                    $color="#ffffff"
                    style={{ margin: '2rem 0 0 0' }}
                  >
                    <Trans i18nKey={'career.subtitle'} components={{ 1: <br /> }} />
                  </Text>
                </TextWrap>
              </HomeComponentWrap>
              <HomeComponentWrap
                style={{
                  backgroundImage: `url(${career_middle})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: '#121212',
                  padding: '8vh 7vw',
                  marginBottom: '20vh',
                }}
              >
                <TextWrap>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                    $fontWeight="200"
                    $color="#ffffff"
                    style={{
                      fontFamily: 'Copperplate',
                      width: '70%',
                      textAlign: 'start',
                      margin: '0',
                      height: 'fit-content',
                      lineHeight: '1',
                    }}
                  >
                    “
                  </Text>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '28px' : '18px'}
                    $fontWeight="400"
                    $color="#ffffff"
                    style={{ padding: '0 20px', width: '80%', textAlign: 'center', margin: '0' }}
                  >
                    <Trans i18nKey={'career.desc1'} components={{ 1: <br /> }} />
                  </Text>
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '40px' : '26px'}
                    $fontWeight="200"
                    $color="#ffffff"
                    style={{ fontFamily: 'Copperplate', width: '70%', textAlign: 'end', margin: '0', lineHeight: '1' }}
                  >
                    ”
                  </Text>
                </TextWrap>
              </HomeComponentWrap>
              <HomeComponentWrap>
                <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
                <Text
                  $fontSize={window.innerWidth > 1280 ? '32px' : '21px'}
                  $fontWeight="300"
                  $color="#E5E5E5"
                  $align="start"
                >
                  Core Values
                </Text>
                <div id="core_value" style={{ width: '100%' }}>
                  {coreValues.map((item, index) => (
                    <GridContentWrap style={{ width: '100' }} key={index + 'box1'}>
                      <ContentBox style={{ paddingLeft: '8vw' }}>
                        <ContentBoxNameWrap>
                          <Text
                            id="core_value"
                            $fontSize={window.innerWidth > 1280 ? '20px' : '16px'}
                            $fontWeight="100"
                            $color="#A8A8A8"
                            $align="start"
                            style={{ width: 'fit-content' }}
                          >
                            0{index + 1}
                          </Text>
                          <Text
                            id="core_value"
                            $fontSize={window.innerWidth > 1280 ? '25px' : '16px'}
                            $fontWeight="300"
                            $color="#DDDDDD"
                            $align="start"
                            style={{ width: 'fit-content' }}
                          >
                            {item.title}
                          </Text>
                        </ContentBoxNameWrap>
                      </ContentBox>
                      <ContentBox style={{ paddingRight: '0', justifyContent: 'space-between' }}>
                        <ShootingStarWrap id="core_value" className="shootingstar_wrap">
                          <ShootingStar $width={document.querySelector('.shootingstar_wrap')?.offsetWidth} />
                        </ShootingStarWrap>
                        <Text
                          id="core_value"
                          $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                          $fontWeight="300"
                          $color="#C9C9C9"
                          $align="start"
                          style={{ width: '90%' }}
                        >
                          {item.desc}
                        </Text>
                      </ContentBox>
                    </GridContentWrap>
                  ))}
                </div>
              </HomeComponentWrap>
              <HomeComponentWrap style={{ padding: '5vh 0 5vh 7vw' }}>
                <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
                <Text
                  $fontSize={window.innerWidth > 1280 ? '32px' : '21px'}
                  $fontWeight="300"
                  $color="#E5E5E5"
                  $align="start"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '2em',
                    marginBottom: '1em',
                  }}
                >
                  Recruitment Process
                </Text>
                <ContentBox
                  className="recruitmentProcess_rowscroll"
                  onWheel={(e) => {
                    const container = document.querySelector('.recruitmentProcess_rowscroll');
                    const scrollAmount = e.deltaY;
                    if (
                      (scrollAmount < 0 && container.scrollLeft === 0) ||
                      (scrollAmount > 0 && container.scrollLeft === container.scrollWidth - container.clientWidth)
                    ) {
                      window.scrollTo({
                        top: window.scrollY + scrollAmount,
                        behavior: 'auto', // You can use 'auto' instead of 'smooth' for instant scrolling
                      });
                    } else {
                      container.scrollLeft += scrollAmount;
                    }
                  }}
                  style={{
                    justifyContent: 'start',
                    alignItems: 'start',
                    overflowX: 'auto',
                    width: '100%',
                    gap: '5.555vw',
                    flexwrap: 'nowrap',
                    marginBottom: '5em',
                    padding: '5rem 0',
                  }}
                >
                  {recruitmentProcess.map((item, index) => (
                    <RecruitmentItemWrap
                      key={`recruitmentProcess${index}`}
                    >
                      <TextWrap style={{flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between'}}>
                        <Image src={item.img} />
                        <Text
                          $fontSize={window.innerWidth > 1280 ? '20px' : '12px'}
                          $fontWeight="400"
                          $color="#00A6FF"
                          $align="start"
                          style={{ width: 'fit-content', overflow: 'unset', marginLeft: index === 0 && '3px' }}
                          >
                          {`0${index + 1}`}
                        </Text>
                      </TextWrap>
                      <TextWrap style={{ alignItems: 'start', gap: '20px' }}>
                        <Text
                          $fontSize={window.innerWidth > 1280 ? '24px' : '15px'}
                          $fontWeight="300"
                          $color="#ffffff"
                          $align="start"
                          style={{ width: 'auto', overflow: 'hidden' }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          $fontSize={window.innerWidth > 1280 ? '18px' : '11px'}
                          $fontWeight="300"
                          $color="#C9C9C9"
                          $align="start"
                          style={{ width: 'auto', overflow: 'hidden' }}
                        >
                          {item.desc}
                        </Text>
                      </TextWrap>
                    </RecruitmentItemWrap>
                  ))}
                </ContentBox>
              </HomeComponentWrap>
              <HomeComponentWrap id="benefits" style={{ flexDirection: 'row', alignItems: 'start' }}>
                <TextWrap style={{ flex: '0 0 28.7vw', width: '28.7vw' }}>
                  <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '32px' : '21px'}
                    $fontWeight="300"
                    $color="#E5E5E5"
                    $align="start"
                  >
                    Benefits
                  </Text>
                  <Text
                   $fontSize={window.innerWidth > 1280 ? '20px' : '21px'}
                   $fontWeight="300"
                   $color="#CBCBCB"
                   $align="start"
                   style={{marginTop: '1.14vh'}}
                  >
                    <Trans i18nKey={'career.benefits.desc'} components={{ 1: <br /> }} />
                  </Text>
                </TextWrap>
                <GridContentWrap style={{ gridTemplateColumns: '1fr 1fr', margin: '0', rowGap: '5vh' }}>
                  {benefits.map((item, index) => (
                    <ContentBox
                      id="benefits"
                      className="benefits"
                      key={`benefits${index}`}
                      style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'start' }}
                    >
                      <Image
                        src={item.img}
                        alt="icon_work"
                        style={{
                          width: window.innerWidth > 1280 ? '64px' : '44px',
                          height: window.innerWidth > 1280 ? '60px' : '40px',
                        }}
                      />
                      <TextWrap style={{ position: 'relative', width: 'fit-content' }}>
                        <Text
                          $fontSize={window.innerWidth > 1280 ? '24px' : '15px'}
                          $fontWeight="400"
                          $color="#ffffff"
                          $align="start"
                          style={{ marginBottom: '1em' }}
                        >
                          {item.title}
                        </Text>
                        <DescriptionWrap>
                          {item.desc.map((descItem, descIndex) => (
                            <DescriptionItem
                              key={descItem + descIndex}
                              style={{
                                listStyle: 'disc outside',
                                marginLeft: '1rem',
                                lineHeight: '1.2em',
                                fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                              }}
                            >
                              {descItem}
                            </DescriptionItem>
                          ))}
                        </DescriptionWrap>
                      </TextWrap>
                    </ContentBox>
                  ))}
                  <ContentBox></ContentBox>
                  <ContentBox style={{ marginTop: '8em' }}>
                    <ContentWrap style={{ flexDirection: 'row', padding: '0', justifyContent: 'space-between' }}>
                      <Text
                        className="clickable"
                        $fontSize={window.innerWidth > 1400 ? '20px' : '12px'}
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="start"
                        $clickable={true}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '45%',
                          paddingBottom: '0.7em',
                          borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          navigate('/company/aboutus');
                        }}
                      >
                        <span style={{ zIndex: '-1' }}>{t('career.buttons.meetourleadership')}</span>
                        <Image
                          src={arrow}
                          alt="arrow"
                          style={{
                            height: window.innerWidth > 1280 ? '14px' : '12px',
                            padding: '0',
                            zIndex: '-1',
                          }}
                        />
                      </Text>
                      <Text
                        className="clickable"
                        $fontSize={window.innerWidth > 1400 ? '20px' : '12px'}
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="start"
                        $clickable={true}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '45%',
                          paddingBottom: '0.7em',
                          borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                          cursor: 'pointer',
                        }}
                        // onClick={() => downloadCi('png')}
                        //Linkedin page
                      >
                        <span style={{ zIndex: '-1' }}>Linked-In</span>
                        <Image
                          src={arrow}
                          alt="arrow"
                          style={{
                            height: window.innerWidth > 1280 ? '14px' : '12px',
                            padding: '0',
                            zIndex: '-1',
                          }}
                        />
                      </Text>
                    </ContentWrap>
                  </ContentBox>
                </GridContentWrap>
              </HomeComponentWrap>
              <HomeComponentWrap>
                <TextWrap style={{ marginBottom: '5em', zIndex: '10' }}>
                  <HR style={{ alignSelf: 'start', margin: '1.5em 0' }} />
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '32px' : '21px'}
                    $fontWeight="300"
                    $color="#E5E5E5"
                    $align="start"
                  >
                    Join Us!
                  </Text>
                </TextWrap>
                <GridContentWrap
                  style={{ gridTemplateColumns: '1fr 1fr', margin: '0', rowGap: '5vh', columnGap: '2em' }}
                >
                  {joinus.map((item, index) => (
                    <ContentBox key={`joinus${index}`} className="joinus" $src={item.img}>
                      <FilterShadow />
                      <Button
                        onClick={() => {
                          navigate(`${item.id}`);
                          console.log(item.title);
                        }}
                        style={{ padding: '4em 3em', cursor: 'pointer', zIndex: '1' }}
                      >
                        <TextWrap style={{ cursor: 'pointer', zIndex: '-1' }}>
                          <Text
                            $fontSize={window.innerWidth > 1280 ? '18px' : '10px'}
                            $fontWeight="300"
                            $color="#DDDDDD"
                            $align="start"
                            style={{ marginBottom: '1.5em', zIndex: '-1', cursor: 'pointer' }}
                          >
                            <span style={{ margin: '0 1em 0 0' }}>·</span> {item.type}
                          </Text>
                          <Text
                            $fontSize={window.innerWidth > 1280 ? '18px' : '10px'}
                            $fontWeight="100"
                            $color="#ffffff"
                            $align="start"
                            style={{ marginBottom: '0.5em', zIndex: '-1', cursor: 'pointer' }}
                          >
                            {item.location}-
                          </Text>
                          <Text
                            style={{ zIndex: '-1', cursor: 'pointer' }}
                            $fontSize={window.innerWidth > 1280 ? '24px' : '13px'}
                            $fontWeight="400"
                            $color="#E3E3E3"
                            $align="start"
                          >
                            {item.title}
                          </Text>
                        </TextWrap>
                        <Image
                          src={arrow}
                          alt="arrow"
                          style={{
                            border: '1px solid #ffffff',
                            borderRadius: '50%',
                            zIndex: '1',
                            cursor: 'pointer',
                            height: window.innerWidth > 1280 ? '14px' : '12px',
                            padding: window.innerWidth > 1280 ? '12px' : '8px',
                          }}
                          // onClick={() => {
                          //   navigate(`${item.id}`);
                          //   console.log(item.title);
                          // }}
                        />
                      </Button>
                    </ContentBox>
                  ))}
                </GridContentWrap>
              </HomeComponentWrap>
            </Desktop>
            <Mobile>
              <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
                <TextWrap>
                  <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                    {t('career.title')}
                  </Text>
                  <div
                    style={{
                      width: '50%',
                      alignSelf: 'flex-start',
                      height: '4em',
                      borderRight: '1px solid #ffffff',
                      margin: '2rem 0',
                    }}
                  ></div>
                  <Text $fontSize="23px" $fontWeight="500" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                    <Trans i18nKey={'career.subtitle'} components={{ 1: <br /> }} />
                  </Text>
                </TextWrap>
              </HomeComponentWrap>
              <HomeComponentWrap
                style={{
                  backgroundImage: `url(${career_middle})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: '#121212',
                  padding: '5vh 5vw',
                  marginBottom: '20vh',
                }}
              >
                <TextWrap style={{ width: '90vw' }}>
                  <Text
                    $fontSize="20px"
                    $fontWeight="200"
                    $color="#ffffff"
                    style={{ width: '100%', textAlign: 'start', margin: '0', height: 'fit-content', lineHeight: '1' }}
                  >
                    “
                  </Text>
                  <Text
                    $fontSize="18px"
                    $fontWeight="400"
                    $color="#EFEFEF"
                    style={{ padding: '0 4px', width: '100%', textAlign: 'center', margin: '0', lineHeight: '24px' }}
                  >
                    <Trans i18nKey={'career_m.desc1'} components={{ 1: <br /> }} />
                  </Text>
                  <Text
                    $fontSize="20px"
                    $fontWeight="200"
                    $color="#ffffff"
                    style={{ width: '100%', textAlign: 'end', margin: '0', lineHeight: '1' }}
                  >
                    ”
                  </Text>
                </TextWrap>
              </HomeComponentWrap>
              {/* <HomeComponentWrap>
              <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
              <Text $fontSize="20px" $fontWeight="300" $color="#E5E5E5" $align="start">
                Core Values
              </Text>
              <div>
                {coreValues.map((item, index) => (
                  <GridContentWrap style={{ width: '100', gridTemplateColumns: '1fr' }} key={index + 'box1'}>
                    <ContentBox
                      style={{
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: '0.5rem',
                        paddingLeft: index % 2 === 0 ? '0' : '33.3%',
                        paddingRight: index % 2 === 1 ? '0' : '33.3%',
                      }}
                    >
                      <Text
                        $fontSize="15px"
                        $fontWeight="100"
                        $color="#A8A8A8"
                        $align="start"
                        style={{ width: 'fit-content' }}
                      >
                        0{index + 1}
                      </Text>
                      <Text
                        $fontSize="18px"
                        $fontWeight="300"
                        $color="#DDDDDD"
                        $align="start"
                        style={{ width: 'fit-content' }}
                      >
                        {item.title}
                      </Text>

                      <Text
                        $fontSize="16px"
                        $fontWeight="100"
                        $color="#C9C9C9"
                        $align="start"
                        style={{ width: '100%' }}
                      >
                        {item.desc}
                      </Text>
                    </ContentBox>
                  </GridContentWrap>
                ))}
              </div>
            </HomeComponentWrap> */}
              <HomeComponentWrap>
                <Text
                  $fontSize="20px"
                  $fontWeight="500"
                  $color="#E5E5E5"
                  $align="start"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '1em',
                    marginBottom: '3em',
                  }}
                >
                  Recruitment Process
                  <HR $width="40px" $height="1px" />
                </Text>
                <ContentBox
                  className="recruitment_process"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    justifyContent: 'start',
                    alignItems: 'start',
                    width: '100%',
                    gap: '3rem',
                    flexwrap: 'nowrap',
                    paddingBottom: '5rem',
                  }}
                >
                  {recruitmentProcess.map((item, index) => (
                    <TextWrap
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        gap: '2rem',
                        width: '100%',
                      }}
                      key={`recruitmentProcess${index}`}
                    >
                      <Text
                        $fontSize="16px"
                        $fontWeight="500"
                        $color="#00A6FF"
                        $align="start"
                        style={{ width: 'fit-content', overflow: 'hidden', paddingTop: '3px' }}
                      >
                        {`0${index + 1}`}
                      </Text>
                      <TextWrap style={{ alignItems: 'start', gap: '0.5rem', width: '85%' }}>
                        <Text
                          $fontSize="18px"
                          $fontWeight="400"
                          $color="#ffffff"
                          $align="start"
                          style={{ width: 'auto', overflow: 'hidden' }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          $fontSize="16px"
                          $fontWeight="200"
                          $color="#C9C9C9"
                          $align="start"
                          style={{ width: 'auto', overflow: 'hidden' }}
                        >
                          {item.desc}
                        </Text>
                      </TextWrap>
                    </TextWrap>
                  ))}
                </ContentBox>
              </HomeComponentWrap>
              <HomeComponentWrap
                id="benefits"
                style={{ display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start' }}
              >
                <TextWrap style={{ width: 'fit-content', marginBottom: '3rem' }}>
                  <Text $fontSize="20px" $fontWeight="500" $color="#E5E5E5" $align="start">
                    Benefits
                  </Text>
                  <HR $height="1px" style={{ alignSelf: 'start', margin: '1rem 0', width: '40px' }} />
                </TextWrap>
                <GridContentWrap style={{ gridTemplateColumns: '1fr', margin: '0', rowGap: '80px' }}>
                  {benefits.map((item, index) => (
                    <ContentBox
                      id="benefits"
                      className="benefits"
                      key={`benefits${index}`}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        columnGap: '0',
                        rowGap: '2rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '1rem',
                          height: 'fit-content',
                          width: '100%',
                        }}
                      >
                        <Image src={item.img} alt="icon_work" style={{ height: '40px' }} />
                        <Text
                          $fontSize="18px"
                          $fontWeight="400"
                          $color="#ffffff"
                          $align="center"
                          style={{ maxWidth: '80%' }}
                        >
                          {item.title}
                        </Text>
                      </div>
                      <TextWrap style={{ position: 'relative', width: 'fit-content' }}>
                        <DescriptionWrap style={{ paddingRight: '0' }}>
                          {item.desc.map((descItem, descIndex) => (
                            <DescriptionItem
                              style={{
                                listStyle: 'none outside',
                                marginLeft: '1rem',
                                lineHeight: '22px',
                              }}
                              key={descItem + descIndex}
                            >
                              {descItem}
                            </DescriptionItem>
                          ))}
                        </DescriptionWrap>
                      </TextWrap>
                    </ContentBox>
                  ))}
                  <ContentBox></ContentBox>
                  <ContentBox style={{ marginTop: '0' }}>
                    <ContentWrap
                      style={{
                        flexDirection: 'column',
                        padding: '0',
                        justifyContent: 'space-between',
                        alignItems: 'end',
                      }}
                    >
                      <Text
                        $fontSize="16px"
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="start"
                        $clickable={true}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '213px',
                          paddingBottom: '0.7em',
                          borderBottom: '1px solid #ffffff',
                        }}
                        onClick={() => {
                          navigate('/aboutus');
                        }}
                      >
                        <span style={{ zIndex: '-1' }}>{t('career.buttons.meetourleadership')}</span>
                        <Image src={arrow} alt="arrow" style={{ width: '10px', zIndex: '-1' }} />
                      </Text>
                      <Text
                        $fontSize="16px"
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="start"
                        $clickable={true}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '213px',
                          paddingBottom: '0.7em',
                          borderBottom: '1px solid #ffffff',
                        }}
                        // onClick={() => downloadCi('png')}
                      >
                        <span style={{ zIndex: '-1' }}>Linked In</span>
                        <Image src={arrow} alt="arrow" style={{ height: '10px', zIndex: '-1' }} />
                      </Text>
                    </ContentWrap>
                  </ContentBox>
                </GridContentWrap>
              </HomeComponentWrap>
              <HomeComponentWrap style={{ paddingBottom: '10em' }}>
                <TextWrap style={{ marginBottom: '5em', zIndex: '10' }}>
                  <HR style={{ alignSelf: 'start', margin: '1rem 0', width: '40px', height: '1px' }} />
                  <Text $fontSize="20px" $fontWeight="600" $color="#E5E5E5" $align="start">
                    Join Us!
                  </Text>
                </TextWrap>
                <GridContentWrap style={{ gridTemplateColumns: '1fr', margin: '0', rowGap: '5vh', columnGap: '2em' }}>
                  {joinus.length > 0 &&
                    joinus?.map((item, index) => (
                      <ContentBox key={`joinus${index}`} className="joinus" $src={item.img}>
                        <FilterShadow />
                        <Button
                          onClick={() => {
                            navigate(`${item.id}`);
                          }}
                          style={{ cursor: 'pointer', height: '124px' }}
                        >
                          <TextWrap
                            style={{
                              height: '124px',
                              justifyContent: 'space-between',
                              alignItems: 'start',
                              padding: '1.5em 0 1.5em 1em',
                            }}
                          >
                            <Text
                              $fontWeight="400"
                              $color="#DDDDDD"
                              $align="start"
                              style={{ zIndex: '-1', fontSize: '14px' }}
                            >
                              <span style={{ margin: '0 0.5em 0 0' }}>·</span> {item.type}
                            </Text>
                            <Text
                              $fontSize="15px"
                              $fontWeight="200"
                              $color="#ffffff"
                              $align="start"
                              style={{ zIndex: '-1' }}
                            >
                              {item.location}-
                            </Text>
                            <div
                              style={{
                                height: 'fit-content',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'end',
                                justifyContent: 'space-between',
                                gap: '0.5em',
                                width: '100%',
                              }}
                            >
                              <Text
                                $fontSize="18px"
                                $fontWeight="400"
                                $color="#E3E3E3"
                                $align="start"
                                style={{
                                  zIndex: '-1',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  width: '100%',
                                  lineHeight: '1em',
                                }}
                              >
                                {item.title.slice(0, 30)}
                                {item.title.length > 30 && '..'}
                              </Text>
                              <Image
                                src={arrow}
                                alt="arrow"
                                style={{
                                  border: '1px solid #ffffff',
                                  borderRadius: '50%',
                                  width: '10px',
                                  padding: '5px',
                                  alignSelf: 'end',
                                  margin: '0',
                                  zIndex: '-1',
                                }}
                              />
                            </div>
                          </TextWrap>
                        </Button>
                      </ContentBox>
                    ))}
                </GridContentWrap>
              </HomeComponentWrap>
            </Mobile>
          </>
        )}
      </div>
      <Footer />
    </Container>
  );
};

export default Career;
