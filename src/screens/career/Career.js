import React, { useEffect, useState } from 'react';

import { Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';

import career_cover from './assets/career_cover.png';
import career_middle from './assets/career_middle.png';
import icon_work from './assets/icon_work.svg';
import icon_balancedLife from './assets/icon_balancedlife.svg';
import icon_culture from './assets/icon_culture.svg';
import icon_etc from './assets/icon_etc.svg';
import career_joinus1 from './assets/career_joinus1.png';
import career_joinus2 from './assets/career_joinus2.png';

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
} from './style';

import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import useCareerList from '../../hooks/career/useCareerList';

const Career = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useCareerList();
  const [detailPage, setDetailPage] = useState(false);

  const [coreValues, setCoreValues] = useState([
    {
      title: 'Patient-Centered',
      desc: (
        <>
          Our unwavering commitment is to the well-being of patients and their families. Every project and decision
          revolves around this central principle.
        </>
      ),
    },
    {
      title: 'Collaborative Spirit',
      desc: (
        <>
          Harnessing the power of collective intelligence, we value teamwork and interdisciplinary collaboration,
          driving us forward and amplifying our impact.
        </>
      ),
    },
    {
      title: 'Integrity in Action',
      desc: (
        <>
          Upholding the highest ethical and scientific standards is paramount, establishing trust in both our results
          and our relationships.
        </>
      ),
    },
    {
      title: 'Continuous Learning',
      desc: <>We champion ongoing growth, adaptation, and education, ensuring we remain leaders in our field.</>,
    },
    {
      title: (
        <>
          <span>Resilience &</span>
          <br />
          <span>Perseverance</span>
        </>
      ),
      desc: (
        <>
          Faced with challenges, our resolve strengthens. We believe every setback is a stepping stone to a major leap
          forward.
        </>
      ),
    },
    {
      title: (
        <>
          <span>Transparent </span>
          <br />
          <span>Communication</span>
        </>
      ),
      desc: (
        <>
          Honesty is our policy. Open dialogue with our team, partners, and communities fosters mutual respect and
          understanding.
        </>
      ),
    },
    {
      title: 'Keep an Open Mind',
      desc: <>We approach every challenge with curiosity, welcoming fresh perspectives and ideas.</>,
    },
  ]);
  const [recruitmentProcess, setRecruitmentProcess] = useState([
    {
      title: 'Application Submission',
      desc: (
        <>
          Enthusiasm, positive attitude, sincerity, and social skills will be determined Successful applicants will be
          individually contacted.
        </>
      ),
    },
    {
      title: 'Primary Interview',
      desc: <>Panel interview format Practical skills and knowledge-based interview.</>,
    },
    {
      title: 'In-depth Interview',
      desc: <>One-on-one format Personality based interview.</>,
    },
    {
      title: 'Employment',
      desc: <>Announcement of successful applicants.</>,
    },
  ]);

  const [benefits, setBenefits] = useState([
    {
      title: 'Work',
      img: icon_work,
      desc: [
        'Five-day workweek',
        'Unlimited access to beverages, coffee, and snacks',
        'High processing laptops and monitors provided',
        'Lunch provided',
      ],
    },
    {
      title: 'Balanced Life',
      img: icon_balancedLife,
      desc: [
        'Financial support for special occasions',
        'Maternity leave, paternity leave',
        'Stock options',
        'Retirement benefits',
      ],
    },
    {
      title: 'Culture',
      img: icon_culture,
      desc: [
        'Annual workshops',
        'Training and seminar fee supported',
        'Literature purchase fee supported',
        'In-house hobby clubs supported',
      ],
    },
    {
      title: 'Etc',
      img: icon_etc,
      desc: [
        'Holiday gifts provided',
        'Birthday gifts provided',
        'AriBio talent of the year award',
        'Paid vacations / Paid public holidays',
        'Pleasant working environment provided',
      ],
    },
  ]);

  const [joinus, setJoinus] = useState([]);

  // const [joinus, setJoinus] = useState([
  //   {
  //     type: 'Job Openings',
  //     location: 'Global',
  //     title: 'Senior Research Engineer',
  //     img: career_joinus1,
  //     url: '',
  //   },
  //   {
  //     type: 'Job Openings',
  //     location: 'Seoul',
  //     title: 'Senior Data Engineer',
  //     img: career_joinus2,
  //     url: '',
  //   },
  //   {
  //     type: 'Job Openings',
  //     location: 'Seoul',
  //     title: 'Senior Data Engineer',
  //     img: career_joinus1,
  //     url: '',
  //   },
  //   {
  //     type: 'Job Openings',
  //     location: 'Global',
  //     title: 'Director / Sr. Director of Business Development',
  //     img: career_joinus2,
  //     url: '',
  //   },
  // ]);

  useEffect(() => {
    if (id) {
      setDetailPage(true);
    } else {
      setDetailPage(false);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        document.querySelector('.grid_bg')?.classList.add('visible');
      } else {
        document.querySelector('.grid_bg')?.classList.remove('visible');
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
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
          title: item.jobGroupList[0],
          img: item.fileDtoList.map((item) => {
            if (item.fileType === 'JOIN_US') {
              return item.fileUrl;
            }
          })[0],
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
      <Path>{`HOME > CAREER`}</Path>
      <MainImgWrap $src={career_cover}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox style={{ borderLeft: '2px solid #5d5d5d' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>CAREER</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>
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
                  CAREER
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
                  $fontWeight="400"
                  $color="#ffffff"
                  style={{ margin: '2rem 0 0 0' }}
                >
                  Pioneering Solutions for Neurodegeneration
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
                  $fontSize={window.innerWidth > 1280 ? '40px' : '30px'}
                  $fontWeight="200"
                  $color="#ffffff"
                  style={{ width: '50%', textAlign: 'start', margin: '0', height: 'fit-content', lineHeight: '1' }}
                >
                  “
                </Text>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
                  $fontWeight="300"
                  $color="#ffffff"
                  style={{ padding: '0 20px', width: '50%', textAlign: 'center', margin: '0' }}
                >
                  At Aribio, we’re at the cutting edge of tackling neurodegenerative disorders. <br />
                  Our dedicated team is set on discovering transformative treatments. <br />
                  We invite innovative minds to join our mission. <br />
                  Together, let’s usher in a new era of therapeutic breakthroughs for those in need.
                </Text>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '40px' : '30px'}
                  $fontWeight="200"
                  $color="#ffffff"
                  style={{ width: '50%', textAlign: 'end', margin: '0', lineHeight: '1' }}
                >
                  ”
                </Text>
              </TextWrap>
            </HomeComponentWrap>
            <HomeComponentWrap>
              <HR style={{ alignSelf: 'start', marginBottom: '1.5em' }} />
              <Text
                $fontSize={window.innerWidth > 1280 ? '32px' : '23px'}
                $fontWeight="300"
                $color="#E5E5E5"
                $align="start"
              >
                Core Values
              </Text>
              <div>
                {coreValues.map((item, index) => (
                  <GridContentWrap style={{ width: '100' }} key={index + 'box1'}>
                    <ContentBox style={{ paddingLeft: '8vw' }}>
                      <ContentBoxNameWrap>
                        <Text
                          $fontSize={window.innerWidth > 1280 ? '20px' : '16px'}
                          $fontWeight="100"
                          $color="#A8A8A8"
                          $align="start"
                          style={{ width: 'fit-content' }}
                        >
                          0{index + 1}
                        </Text>
                        <Text
                          $fontSize={window.innerWidth > 1280 ? '25px' : '18px'}
                          $fontWeight="300"
                          $color="#DDDDDD"
                          $align="start"
                          style={{ width: 'fit-content' }}
                        >
                          {item.title}
                        </Text>
                      </ContentBoxNameWrap>
                    </ContentBox>
                    <ContentBox style={{ paddingRight: '8vw', justifyContent: 'space-between' }}>
                      <ShootingStarWrap className="shootingstar_wrap">
                        <ShootingStar $width={document.querySelector('.shootingstar_wrap')?.offsetWidth} />
                      </ShootingStarWrap>
                      <Text
                        $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
                        $fontWeight="300"
                        $color="#C9C9C9"
                        $align="start"
                        style={{ width: '70%' }}
                      >
                        {item.desc}
                      </Text>
                    </ContentBox>
                  </GridContentWrap>
                ))}
              </div>
            </HomeComponentWrap>
            <HomeComponentWrap>
              <Text
                $fontSize={window.innerWidth > 1280 ? '32px' : '23px'}
                $fontWeight="300"
                $color="#E5E5E5"
                $align="start"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '2em',
                  marginBottom: '5em',
                }}
              >
                Recruitment Process
                <HR />
              </Text>
              <ContentBox
                className="recruitmentProcess_rowscroll"
                style={{
                  justifyContent: 'start',
                  alignItems: 'start',
                  overflowX: 'auto',
                  width: '100%',
                  gap: '0',
                  flexwrap: 'nowrap',
                  marginBottom: '5em',
                }}
              >
                {recruitmentProcess.map((item, index) => (
                  <TextWrap
                    style={{
                      flex: '0 0 33.3%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'start',
                      gap: '2em',
                      width: '33%',
                    }}
                    key={`recruitmentProcess${index}`}
                  >
                    <Text
                      $fontSize={window.innerWidth > 1280 ? '32px' : '23px'}
                      $fontWeight="400"
                      $color="#00A6FF"
                      $align="start"
                      style={{ width: 'fit-content', overflow: 'unset' }}
                    >
                      {`0${index + 1}`}
                    </Text>
                    <TextWrap style={{ alignItems: 'start', gap: '2em', width: '85%' }}>
                      <Text
                        $fontSize={window.innerWidth > 1280 ? '24px' : '18px'}
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="start"
                        style={{ width: 'auto', overflow: 'hidden' }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
                        $fontWeight="300"
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
            <HomeComponentWrap style={{ flexDirection: 'row', alignItems: 'start' }}>
              <TextWrap style={{ flex: '0 0 28.7vw', width: '28.7vw' }}>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '32px' : '23px'}
                  $fontWeight="300"
                  $color="#E5E5E5"
                  $align="start"
                >
                  Benefits
                </Text>
                <HR style={{ alignSelf: 'start', margin: '1.5em 0' }} />
              </TextWrap>
              <GridContentWrap style={{ gridTemplateColumns: '1fr 1fr', margin: '0', rowGap: '5vh' }}>
                {benefits.map((item, index) => (
                  <ContentBox
                    className="benefits"
                    key={`benefits${index}`}
                    style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'start' }}
                  >
                    <Image src={item.img} alt="icon_work" />
                    <TextWrap style={{ position: 'relative', width: 'fit-content' }}>
                      <Text
                        $fontSize={window.innerWidth > 1280 ? '24px' : '18px'}
                        $fontWeight="300"
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
                            style={{ listStyle: 'disc outside', marginLeft: '1rem' }}
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
                      $fontSize={window.innerWidth > 1400 ? '20px' : '14px'}
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
                        borderBottom: '2px solid #ffffff',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate('/company/aboutus');
                      }}
                    >
                      <span style={{ zIndex: '-1' }}>Meet Our Team</span>
                      <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                    </Text>
                    <Text
                      className="clickable"
                      $fontSize={window.innerWidth > 1400 ? '20px' : '14px'}
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
                        borderBottom: '2px solid #ffffff',
                        cursor: 'pointer',
                      }}
                      // onClick={() => downloadCi('png')}
                    >
                      <span style={{ zIndex: '-1' }}>Linked In</span>
                      <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                    </Text>
                  </ContentWrap>
                </ContentBox>
              </GridContentWrap>
            </HomeComponentWrap>
            <HomeComponentWrap>
              <TextWrap style={{ marginBottom: '5em', zIndex: '10' }}>
                <HR style={{ alignSelf: 'start', margin: '1.5em 0' }} />
                <Text
                  $fontSize={window.innerWidth > 1280 ? '32px' : '23px'}
                  $fontWeight="300"
                  $color="#E5E5E5"
                  $align="start"
                >
                  Join Us!
                </Text>
              </TextWrap>
              <GridContentWrap style={{ gridTemplateColumns: '1fr 1fr', margin: '0', rowGap: '5vh', columnGap: '2em' }}>
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
                          $fontSize={window.innerWidth > 1280 ? '18px' : '14px'}
                          $fontWeight="300"
                          $color="#DDDDDD"
                          $align="start"
                          style={{ marginBottom: '1.5em', zIndex: '-1', cursor: 'pointer' }}
                        >
                          <span style={{ margin: '0 1em 0 0' }}>·</span> {item.type}
                        </Text>
                        <Text
                          $fontSize={window.innerWidth > 1280 ? '18px' : '14px'}
                          $fontWeight="100"
                          $color="#ffffff"
                          $align="start"
                          style={{ marginBottom: '0.5em', zIndex: '-1', cursor: 'pointer' }}
                        >
                          {item.location}-
                        </Text>
                        <Text
                          style={{ zIndex: '-1', cursor: 'pointer' }}
                          $fontSize={window.innerWidth > 1280 ? '24px' : '18px'}
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
                        style={{ border: '1px solid #ffffff', borderRadius: '50%', zIndex: '-1', cursor: 'pointer' }}
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
                  CAREER
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
                <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                  Pioneering Solutions for Neurodegeneration
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
                  $fontSize="30px"
                  $fontWeight="200"
                  $color="#ffffff"
                  style={{ width: '100%', textAlign: 'start', margin: '0', height: 'fit-content', lineHeight: '1' }}
                >
                  “
                </Text>
                <Text
                  $fontSize="20px"
                  $fontWeight="300"
                  $color="#ffffff"
                  style={{ padding: '0 18px', width: '90%', textAlign: 'center', margin: '0' }}
                >
                  At Aribio, we’re at the cutting edge of tackling neurodegenerative disorders. <br />
                  Our dedicated team is set on discovering transformative treatments. <br />
                  We invite innovative minds to join our mission. <br />
                  Together, let’s usher in a new era of therapeutic breakthroughs for those in need.
                </Text>
                <Text
                  $fontSize="30px"
                  $fontWeight="200"
                  $color="#ffffff"
                  style={{ width: '100%', textAlign: 'end', margin: '0', lineHeight: '1' }}
                >
                  ”
                </Text>
              </TextWrap>
            </HomeComponentWrap>
            <HomeComponentWrap>
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
            </HomeComponentWrap>
            <HomeComponentWrap>
              <Text
                $fontSize="20px"
                $fontWeight="300"
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
                <HR $width="40px" />
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
                      $fontWeight="400"
                      $color="#00A6FF"
                      $align="start"
                      style={{ width: 'fit-content', overflow: 'hidden' }}
                    >
                      {`0${index + 1}`}
                    </Text>
                    <TextWrap style={{ alignItems: 'start', gap: '0.5rem', width: '85%' }}>
                      <Text
                        $fontSize="18px"
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="start"
                        style={{ width: 'auto', overflow: 'hidden' }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        $fontSize="16px"
                        $fontWeight="100"
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
            <HomeComponentWrap style={{ display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start' }}>
              <TextWrap style={{ width: 'fit-content', marginBottom: '3rem' }}>
                <Text $fontSize="20px" $fontWeight="300" $color="#E5E5E5" $align="start">
                  Benefits
                </Text>
                <HR style={{ alignSelf: 'start', margin: '1rem 0', width: '40px' }} />
              </TextWrap>
              <GridContentWrap style={{ gridTemplateColumns: '1fr', margin: '0', rowGap: '5vh' }}>
                {benefits.map((item, index) => (
                  <ContentBox
                    className="benefits"
                    key={`benefits${index}`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 2fr',
                      justifyContent: 'center',
                      alignItems: 'center',
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
                      <Image src={item.img} alt="icon_work" style={{ height: '3rem' }} />
                      <Text
                        $fontSize="18px"
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="center"
                        style={{ maxWidth: '80%' }}
                      >
                        {item.title}
                      </Text>
                    </div>
                    <TextWrap style={{ position: 'relative', width: 'fit-content' }}>
                      <DescriptionWrap>
                        {item.desc.map((descItem, descIndex) => (
                          <DescriptionItem
                            style={{
                              listStyle: 'disc outside',
                              marginLeft: '1rem',
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
                <ContentBox style={{ marginTop: '8em' }}>
                  <ContentWrap
                    style={{
                      flexDirection: 'column',
                      padding: '0',
                      justifyContent: 'space-between',
                      alignItems: 'end',
                    }}
                  >
                    <Text
                      $fontSize="20px"
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
                        borderBottom: '2px solid #ffffff',
                      }}
                      onClick={() => {
                        navigate('/aboutus');
                      }}
                    >
                      <span style={{ zIndex: '-1' }}>Meet Our Team</span>
                      <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                    </Text>
                    <Text
                      $fontSize="20px"
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
                        borderBottom: '2px solid #ffffff',
                      }}
                      // onClick={() => downloadCi('png')}
                    >
                      <span style={{ zIndex: '-1' }}>Linked In</span>
                      <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                    </Text>
                  </ContentWrap>
                </ContentBox>
              </GridContentWrap>
            </HomeComponentWrap>
            <HomeComponentWrap>
              <TextWrap style={{ marginBottom: '5em', zIndex: '10' }}>
                <HR style={{ alignSelf: 'start', margin: '1rem 0', width: '40px', height: '1px' }} />
                <Text $fontSize="20px" $fontWeight="300" $color="#E5E5E5" $align="start">
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
                        style={{ padding: '4em 3em', cursor: 'pointer' }}
                      >
                        <TextWrap>
                          <Text
                            $fontSize="14px"
                            $fontWeight="300"
                            $color="#DDDDDD"
                            $align="start"
                            style={{ marginBottom: '1.5em', zIndex: '-1' }}
                          >
                            <span style={{ margin: '0 1em 0 0' }}>·</span> {item.type}
                          </Text>
                          <Text
                            $fontSize="15px"
                            $fontWeight="100"
                            $color="#ffffff"
                            $align="start"
                            style={{ marginBottom: '0.5em', zIndex: '-1' }}
                          >
                            {item.location}-
                          </Text>
                          <Text
                            $fontSize="18px"
                            $fontWeight="400"
                            $color="#E3E3E3"
                            $align="start"
                            style={{ zIndex: '-1' }}
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
                            width: '20px',
                            alignSelf: 'end',
                            marginBottom: '0.2rem',
                            zIndex: '-1',
                          }}
                        />
                      </Button>
                    </ContentBox>
                  ))}
              </GridContentWrap>
            </HomeComponentWrap>
          </Mobile>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default Career;
