import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';

import {
  Container,
  ContainerGridLineWrap,
  GridLineBox,
  MainImgWrap,
  Path,
  HeadLine,
  HomeComponentWrap,
  TextWrap,
  Text,
  Image,
  HR,
  ContentWrap,
  TableWrap,
  TableRowWrap,
  TableContentBox,
  Tab,
  ShootingStarWrap,
  ShootingStar,
} from './style';
import openinnovation_digitalhealth_cover from './assets/openinnovation_digitalhealth_cover.png';
import openinnovation_digitalhealth_middle1 from './assets/openinnovation_digitalhealth_middle1.png';
import openinnovation_digitalhealth_middle2 from './assets/openinnovation_digitalhealth_middle2.png';
import arrow from '../../assets/images/arrow.svg';

const DigitalHealth = () => {
  const navigate = useNavigate();
  const [tableHeader, setTableHeader] = useState([
    'Focus',
    'Indication',
    'Region',
    'Discovery',
    'Preclinical',
    'Early Clinical',
    'Pivotal Clinical',
    'In market',
  ]);
  const [data, setData] = useState([
    {
      focus: 'Electroceutical - I',
      indication: 'MCI',
      region: 'Global',
      phase: 5,
    },
    {
      focus: 'Electroceutical - II',
      indication: 'Early AD',
      region: 'Global',
      phase: 3,
    },
    {
      focus: 'Digital Toolkit',
      indication: 'Preclinical-MCI',
      region: 'Global',
      phase: 2,
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const squares = entry.target.querySelectorAll('.shooting_star');
          if (entry.isIntersecting) {
            for (const square of squares) {
              square.classList.add('animate');
            }
            return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          for (const square of squares) {
            square.classList.remove('animate');
          }
        });
      });
      if (document.querySelector('.table')) observer.observe(document.querySelector('.table'));
    });
    return () => {
      window.removeEventListener('scroll', () => {
        console.log('done');
      });
    };
  }, []);
  return (
    <Container className="container">
      <ContainerGridLineWrap>
        <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <Path>{`HOME > OPEN INNOVATION > DIGITAL HEALTH`}</Path>
      <MainImgWrap $src={openinnovation_digitalhealth_cover}>
        <HeadLine>DIGITAL HEALTH</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
      <HomeComponentWrap
        style={{
          backgroundColor: 'transparent',
          height: 'fit-content',
          overflow: 'hidden',
        }}
      >
        <TextWrap style={{ position: 'relative', backgroundColor: 'transparent' }}>
          <Text $color="#939598" $fontSize="26px" $fontWeight="300">
            DIGITAL HEALTH
          </Text>
          <div
            style={{
              width: '50%',
              alignSelf: 'flex-start',
              height: '6em',
              borderRight: '2px solid #ffffff',
              margin: '2rem 0',
            }}
          ></div>
          <Text $fontSize="50px" $fontWeight="400">
            Leveraging Digital Health Technologies for Early Dementia Detection and Intervention
          </Text>
          <hr style={{ width: '4em', border: '2px solid #C9C9C9', margin: '3.5rem 0 5rem 0' }} />
          <Text $fontSize="23px" $fontWeight="100" $color="#C9C9C9">
            In today’s rapidly evolving world, where technology continues to reshape our lives, it’s only fitting that
            we turn to innovative digital health technologies to address one of the most pressing healthcare challenges
            of our time – dementia. Our dedicated digital health team is on a mission to leverage the power of these
            digital tools to advance the early detection and intervention of dementia, ultimately improving the lives of
            those affected by this devastating condition.
          </Text>
        </TextWrap>
        <TextWrap style={{ margin: '5em', gap: '2em' }}>
          <Text $fontSize="23px" $fontWeight="300" $color="#C9C9C9" style={{ margin: '0' }}>
            Understanding the Challenge
          </Text>
          <Text $fontSize="23px" $fontWeight="100" $color="#C9C9C9" style={{ margin: '0' }}>
            Dementia is a complex and progressive neurological disorder that affects millions of individuals worldwide.
            It not only robs people of their memories and cognitive abilities but also places a significant burden on
            their families and caregivers. Early detection and intervention are crucial to slowing down the progression
            of the disease and enhancing the quality of life for those affected.
          </Text>
        </TextWrap>
        <TextWrap style={{ margin: '5em', gap: '2em' }}>
          <Text $fontSize="23px" $fontWeight="300" $color="#C9C9C9" style={{ margin: '0' }}>
            The Power of Digital Health
          </Text>
          <Text $fontSize="23px" $fontWeight="100" $color="#C9C9C9" style={{ margin: '0' }}>
            In an age where smartphones, wearables, and smart home devices have become integral parts of our daily
            lives, we have an incredible opportunity to harness the potential of these technologies for healthcare
            purposes. By doing so, we can revolutionize the way we approach dementia care.
          </Text>
        </TextWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ justifyContent: 'start' }}>
        <ContentWrap style={{ padding: '0' }}>
          <TextWrap style={{ width: 'fit-content', alignItems: 'start', margin: '0', gap: '2em' }}>
            <HR $color="#F8F8F8" />
            <Text $fontSize="34px" $fontWeight="300" $color="#F4F4F4" style={{ margin: '0' }}>
              Our Approach
            </Text>
          </TextWrap>
          <Image
            src={openinnovation_digitalhealth_middle1}
            alt="openinnovation_middle1"
            style={{ width: '-webkit-fill-available', marginTop: '5em', padding: '7em' }}
          />
        </ContentWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ justifyContent: 'start' }}>
        <ContentWrap style={{ padding: '0' }}>
          <TextWrap style={{ width: 'fit-content', alignItems: 'start', margin: '0', gap: '2em' }}>
            <HR $color="#F8F8F8" />
            <Text $fontSize="34px" $fontWeight="300" $color="#F4F4F4" style={{ margin: '0' }}>
              Pipeline
            </Text>
          </TextWrap>
        </ContentWrap>
        <TableWrap className="table">
          <TableRowWrap className="th">
            {tableHeader.map((item, index) => (
              <TableContentBox key={index}>{item}</TableContentBox>
            ))}
          </TableRowWrap>
          {data.map((item, index) => (
            <TableRowWrap key={'digitalhealth' + index} className="tr">
              <TableContentBox>{item.focus}</TableContentBox>
              <TableContentBox>{item.indication}</TableContentBox>
              <TableContentBox>{item.region}</TableContentBox>
              <TableContentBox>
                <ShootingStarWrap className="shooting_star_wrap">
                  <hr style={{ width: '100%', opacity: '0.4' }} />
                  <ShootingStar
                    className="shooting_star"
                    style={{
                      height: '8px',
                      width: '2px',
                    }}
                    $phase={item.phase}
                  />
                </ShootingStarWrap>
              </TableContentBox>
            </TableRowWrap>
          ))}
        </TableWrap>
        <ContentWrap
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'end',
            padding: '0',
            margin: '2em',
          }}
        >
          <Text
            $fontSize="23px"
            $fontWeight="100"
            $color="#C9C9C9"
            $align="start"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 'auto',
              gap: '1em',
              margin: '0',
            }}
          >
            *Electroceutical - II & Digital Toolkit projects are confidential.
          </Text>
        </ContentWrap>
      </HomeComponentWrap>
      <HomeComponentWrap style={{ justifyContent: 'start' }}>
        <ContentWrap style={{ padding: '0', marginBottom: '14em' }}>
          <TextWrap style={{ alignItems: 'start', margin: '0', gap: '2em' }}>
            <HR $color="#F8F8F8" />
            <Text $fontSize="34px" $fontWeight="300" $color="#F4F4F4" $align="start" style={{ margin: '0' }}>
              Electroceutical - I
            </Text>
            <Text $fontSize="23px" $fontWeight="100" $color="#C9C9C9" $align="start" style={{ margin: '0' }}>
              Our product, MDAR3001, harnesses a proprietary sound source, designed to induce neuronal differentiation
              through tactile vibrations and auditory stimulation via bone conduction. Additionally, targeted vibrations
              may enhance cerebral blood flow. Paired with familiar music, this approach aims to boost memory and
              cognition by invoking autobiographical memory recall in patients.
            </Text>
          </TextWrap>
          <Image
            src={openinnovation_digitalhealth_middle2}
            alt="openinnovation_middle2"
            style={{ width: '-webkit-fill-available', marginTop: '5em', padding: '7em' }}
          />
          <Text $align="start" $color="#C9C9C9" $fontSize="23px" $fontWeight="100" style={{ width: '75vw' }}>
            In a world where technology continually evolves, our commitment remains steadfast – to leverage digital
            health technologies for the early detection and intervention of dementia. Our mission is to improve the
            quality of life for individuals affected by dementia, and we believe that by working together, we can make a
            significant impact.
          </Text>
        </ContentWrap>

        <ContentWrap
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'end',
            padding: '0',
            columnGap: '2em',
            rowGap: '4em',
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
              width: 'auto',
              paddingBottom: '0.7em',
              borderBottom: '2px solid #ffffff',
              gap: '1em',
              margin: '0',
            }}
            onClick={() => navigate('/')}
          >
            <span style={{ zIndex: '-1' }}>Go to HERIZON</span>
            <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
          </Text>
        </ContentWrap>
      </HomeComponentWrap>
      <Footer />
    </Container>
  );
};

export default DigitalHealth;
