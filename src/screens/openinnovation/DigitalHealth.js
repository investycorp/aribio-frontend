import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
  Image,
  HR,
  ContentWrap,
  TableWrap,
  TableRowWrap,
  TableContentBox,
  ShootingStarWrap,
  ShootingStar,
  Ball,
} from './style';

import {HeadLine, Path, MainImgWrap} from '../../components/style';
import {Desktop, Mobile} from '../../utils/MediaQuery';

import openinnovation_digitalhealth_middle1 from './assets/openinnovation_digitalhealth_middle1.png';
import openinnovation_digitalhealth_middle2 from './assets/openinnovation_digitalhealth_middle2.png';
import openinnovation_digitalhealth_mobile_middle1 from './assets/openinnovation_digitalhealth_mobile_middle1.png';

import arrow from '../../assets/images/arrow.svg';
import Video from '../../components/Video';
import useLinkList from '../../hooks/link/useLink';

import {t} from 'i18next';
import {Trans} from 'react-i18next';

const DigitalHealth = () => {
  const {data: linkData} = useLinkList();
  const [tableHeader, setTableHeader] = useState([
    t('innovation.health.table.header.focus'),
    t('innovation.health.table.header.indication'),
    t('innovation.health.table.header.region'),
    t('innovation.health.table.header.discovery'),
    t('innovation.health.table.header.preclinical'),
    t('innovation.health.table.header.e_clinical'),
    t('innovation.health.table.header.p_clinical'),
    t('innovation.health.table.header.market'),
  ]);
  const [data, setData] = useState([
    {
      focus: 'Electroceutical - I',
      indication: 'MCI',
      region: 'Global',
      phase: 3,
      state: 1,
    },
    {
      focus: 'Electroceutical - II',
      indication: 'Early AD',
      region: 'Global',
      phase: 1,
      state: 2,
    },
    {
      focus: 'Digital Toolkit',
      indication: 'Preclinical-MCI',
      region: 'Global',
      phase: 1,
      state: 2,
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
    const scrollX = document.querySelector('#horizontal');
    if (scrollX && window.innerWidth <= 900) {
      scrollX.addEventListener('scroll', () => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
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
    }
    document.addEventListener('scroll', () => {
      if (window.innerWidth > 900) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
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
      }
    });
    return () => {
      document.removeEventListener('scroll', () => {
        console.log('done');
      });
    };
  }, []);
  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="digitalhealth"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1100PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2000PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2900PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{opacity: '0.8'}}>{`HOME  >  OPEN INNOVATION  > `}</span>
        {window.innerWidth <= 900 && <br />}
        {t('innovation.health.subtitle')}
      </Path>
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine $className="midsize">{t('innovation.health.title')}</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
            height: window.innerWidth > 1280 ? '24px' : '14px',
          }}
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap
          style={{
            backgroundColor: 'transparent',
            height: 'fit-content',
            overflow: 'hidden',
          }}>
          <TextWrap style={{position: 'relative', backgroundColor: 'transparent'}}>
            <Text $color="#939598" style={{fontSize: window.innerWidth > 1280 ? '26px' : '18px'}} $fontWeight="300">
              {t('innovation.health.subtitle')}
            </Text>
            <Text style={{fontSize: window.innerWidth > 1280 ? '50px' : '34px'}} $fontWeight="500">
              <Trans i18nKey={'innovation.health.subdesc'} components={{1: <br />}} />
            </Text>
            <div
              style={{
                alignSelf: 'center',
                width: window.innerWidth > 1280 ? '60px' : '40px',
                height: '2px',
                border: '1px solid #ffffff',
                margin: window.innerWidth > 1280 ? '80px 0' : '52px 0',
              }}></div>
            <Text style={{fontSize: window.innerWidth > 1280 ? '23px' : '14px'}} $fontWeight="300" $color="#C9C9C9">
              <Trans i18nKey={'innovation.health.approach.desc'} components={{1: <br />}} />
            </Text>
          </TextWrap>
          <TextWrap style={{margin: '5em', gap: '2em'}}>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="500"
              $color="#C9C9C9"
              style={{margin: '0'}}>
              {t('innovation.health.challenge.title')}
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="300"
              $color="#C9C9C9"
              style={{margin: '0'}}>
              <Trans i18nKey={'innovation.health.challenge.desc'} components={{1: <br />}} />
            </Text>
          </TextWrap>
          <TextWrap style={{margin: '5em', gap: '2em'}}>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="500"
              $color="#C9C9C9"
              style={{margin: '0'}}>
              {t('innovation.health.power.title')}
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="300"
              $color="#C9C9C9"
              style={{margin: '0'}}>
              <Trans i18nKey={'innovation.health.power.desc'} components={{1: <br />}} />
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{justifyContent: 'center'}}>
          <ContentWrap style={{padding: '0'}}>
            <TextWrap style={{width: '100%', alignItems: 'center', margin: '0', gap: '2em'}}>
              <HR $color="#F8F8F8" style={{alignSelf: 'center'}} />
              <Text
                style={{fontSize: window.innerWidth > 1280 ? '34px' : '19px', margin: '0'}}
                $fontWeight="500"
                $color="#F4F4F4">
                {t('innovation.health.approach.title')}
              </Text>
            </TextWrap>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
              <Image
                id="fadeIn"
                src={openinnovation_digitalhealth_middle1}
                alt="openinnovation_middle1"
                style={{width: '70vw', marginTop: '5em'}}
              />
            </div>
          </ContentWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{justifyContent: 'center'}}>
          <ContentWrap style={{padding: '0'}}>
            <TextWrap style={{width: '100%', alignItems: 'center', margin: '0', gap: '2em'}}>
              <HR $color="#F8F8F8" style={{alignSelf: 'center'}} />
              <Text
                $fontSize={window.innerWidth > 1280 ? '34px' : '19px'}
                $fontWeight="500"
                $color="#F4F4F4"
                style={{margin: '0'}}>
                {t('innovation.health.pipeline.title')}
              </Text>
            </TextWrap>
          </ContentWrap>
          <TableWrap className="table">
            <TableRowWrap className="th">
              {tableHeader.map((item, index) => (
                <TableContentBox style={{fontSize: window.innerWidth > 1280 ? '24px' : '13px'}} key={index}>
                  {item}
                </TableContentBox>
              ))}
            </TableRowWrap>
            {data.map((item, index) => (
              <TableRowWrap key={'digitalhealth' + index} className="tr">
                <TableContentBox style={{fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}>
                  {item.focus}
                </TableContentBox>
                <TableContentBox style={{fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}>
                  {item.indication}
                </TableContentBox>
                <TableContentBox style={{fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}>
                  {item.region}
                </TableContentBox>

                <TableContentBox style={{padding: '0', flexDirection: 'row'}}>
                  <TableContentBox
                    style={{height: '100%', fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}
                  />
                  <TableContentBox
                    style={{height: '100%', fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}
                  />
                  <TableContentBox
                    style={{height: '100%', fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}
                  />
                  <TableContentBox
                    style={{height: '100%', fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}
                  />
                  <TableContentBox
                    style={{height: '100%', fontSize: window.innerWidth > 1280 ? '24px' : '13px', fontWeight: '300'}}
                  />
                  <ShootingStarWrap className="shooting_star_wrap">
                    <hr style={{width: '100%', border: '1px dotted', opacity: '0'}} />
                    <ShootingStar className="shooting_star" $state={item.state} $phase={item.phase}>
                      <Ball className="ball" />
                    </ShootingStar>
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
            }}>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
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
              }}>
              {t('innovation.health.pipeline.desc')}
            </Text>
          </ContentWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{justifyContent: 'center'}}>
          <ContentWrap style={{padding: '0', marginBottom: '14em'}}>
            <TextWrap style={{alignItems: 'center', margin: '0', gap: '2em', width: '100%'}}>
              <HR $color="#F8F8F8" />
              <Text
                $fontSize={window.innerWidth > 1280 ? '34px' : '19px'}
                $fontWeight="600"
                $color="#F4F4F4"
                $align="center"
                style={{margin: '0'}}>
                {t('innovation.health.electro.title')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '12px'}
                $fontWeight="100"
                $color="#C9C9C9"
                $align="center"
                style={{margin: '0'}}>
                <Trans i18nKey={'innovation.health.electro.desc1'} components={{1: <br />}} />
              </Text>
            </TextWrap>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
              <Image
                id="fadeIn"
                src={openinnovation_digitalhealth_middle2}
                alt="openinnovation_middle2"
                style={{width: '70vw', margin: '5em 0', padding: '0'}}
              />
            </div>
            <Text
              $align="center"
              $color="#C9C9C9"
              $fontSize={window.innerWidth > 1280 ? '23px' : '12px'}
              $fontWeight="100"
              style={{width: '80vw'}}>
              <Trans i18nKey={'innovation.health.electro.desc2'} components={{1: <br />}} />
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
            }}>
            <Text
              $fontSize={window.innerWidth > 1280 ? '20px' : '14px'}
              $fontWeight="300"
              $color="#ffffff"
              $align="center"
              $clickable={true}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: window.innerWidth > 1280 ? '260px' : '158px',
                paddingBottom: '0.7em',
                borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                gap: '1em',
                margin: '0',
                cursor: 'pointer',
              }}
              onClick={() => window.open(linkData?.data?.data?.goToHorizon, '_blank')}>
              <span style={{zIndex: '-1'}}>{t('innovation.health.button.herizon')}</span>
              <Image
                src={arrow}
                alt="arrow"
                style={{
                  height: window.innerWidth > 1280 ? '14px' : '12px',
                  zIndex: '-1',
                }}
              />
            </Text>
          </ContentWrap>
        </HomeComponentWrap>
      </Desktop>

      <Mobile>
        <HomeComponentWrap
          style={{
            backgroundColor: 'transparent',
            height: 'fit-content',
            overflow: 'hidden',
          }}>
          <TextWrap style={{position: 'relative', backgroundColor: 'transparent', width: '100%'}}>
            <Text $color="#939598" $fontSize="16px" $fontWeight="300">
              {t('innovation.health_m.subtitle')}
            </Text>
            <Text $fontSize="23px" $fontWeight="500" style={{margin: '0', lineHeight: '26px'}}>
              <Trans i18nKey={'innovation.health_m.subdesc'} components={{1: <br />}} />
            </Text>
            <hr style={{width: '20px', border: '1px solid #C9C9C9', margin: '2rem 0'}} />
            <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{lineHeight: '21px'}}>
              <Trans i18nKey={'innovation.health_m.approach.desc'} components={{1: <br />}} />
            </Text>
          </TextWrap>
          <TextWrap style={{margin: '3rem', gap: '2em', width: '100%'}}>
            <Text $fontSize="20px" $fontWeight="400" $color="#E6E6E6" style={{margin: '0', lineHeight: '23px'}}>
              {t('innovation.health_m.challenge.title')}
            </Text>
            <Text $fontSize="18px" $fontWeight="300" $color="#C9C9C9" style={{margin: '0', lineHeight: '21px'}}>
              <Trans i18nKey={'innovation.health_m.challenge.desc'} components={{1: <br />}} />
            </Text>
          </TextWrap>
          <TextWrap style={{margin: '3rem', gap: '2em', width: '100%'}}>
            <Text $fontSize="20px" $fontWeight="400" $color="#E6E6E6" style={{margin: '0'}}>
              {t('innovation.health_m.power.title')}
            </Text>
            <Text $fontSize="18px" $fontWeight="300" $color="#C9C9C9" style={{margin: '0', lineHeight: '21px'}}>
              <Trans i18nKey={'innovation.health_m.power.desc'} components={{1: <br />}} />
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{justifyContent: 'start'}}>
          <ContentWrap style={{padding: '0'}}>
            <TextWrap style={{width: '100%', alignItems: 'start', margin: '0', gap: '0.5em'}}>
              <HR $color="#F8F8F8" $width="20px" $height="1px" style={{margin: '0', alignSelf: 'center'}} />
              <Text $fontSize="20px" $fontWeight="300" $color="#E5E5E5" style={{margin: '0', alignSelf: 'center'}}>
                {t('innovation.health_m.approach.title')}
              </Text>
            </TextWrap>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Image
                id="fadeIn"
                src={openinnovation_digitalhealth_mobile_middle1}
                alt="openinnovation_mobile_middle1"
                style={{height: '80vh', width: 'auto', padding: '2em 0', filter: 'brightness(80%)'}}
              />
            </div>
          </ContentWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{justifyContent: 'start'}}>
          <ContentWrap style={{padding: '0'}}>
            <TextWrap style={{width: '100%', alignItems: 'start', margin: '0', gap: '0.5em'}}>
              <HR $color="#F8F8F8" $width="20px" $height="1px" style={{alignSelf: 'center'}} />
              <Text $fontSize="20px" $fontWeight="300" $color="#E5E5E5" style={{margin: '0', alignSelf: 'center'}}>
                {t('innovation.health_m.pipeline.title')}
              </Text>
            </TextWrap>
          </ContentWrap>
          <div id="horizontal" style={{overflowX: 'scroll', width: '100vw'}}>
            <div
              style={{
                display: 'flex',
                width: 'fit-content',
                padding: '0 0 0 5vw',
              }}>
              <TableWrap
                className="table"
                style={{width: 'fit-content', alignSelf: 'start', margin: '4em 5vw 0 0', padding: '0'}}>
                <TableRowWrap className="th">
                  {tableHeader.map((item, index) => (
                    <TableContentBox key={index} style={{fontSize: '16px', fontWeight: '300', color: '#CECECE'}}>
                      {item}
                    </TableContentBox>
                  ))}
                </TableRowWrap>
                {data.map((item, index) => (
                  <TableRowWrap key={'digitalhealth' + index} className="tr">
                    <TableContentBox style={{fontSize: '15px', fontWeight: '300', color: '#F4F4F4'}}>
                      {item.focus}
                    </TableContentBox>
                    <TableContentBox style={{fontSize: '15px', fontWeight: '300', color: '#F4F4F4'}}>
                      {item.indication}
                    </TableContentBox>
                    <TableContentBox style={{fontSize: '15px', fontWeight: '300', color: '#F4F4F4'}}>
                      {item.region}
                    </TableContentBox>
                    <TableContentBox style={{padding: 0}}>
                      <ShootingStarWrap className="shooting_star_wrap">
                        <hr style={{width: '100%', opacity: '0.4', border: '1px dotted'}} />
                        <ShootingStar className="shooting_star" $phase={item.phase}>
                          <Ball className="ball" />
                        </ShootingStar>
                      </ShootingStarWrap>
                    </TableContentBox>
                  </TableRowWrap>
                ))}
              </TableWrap>
            </div>
          </div>
          <ContentWrap
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'end',
              padding: '0',
              margin: '2em',
            }}>
            <Text
              $fontWeight="100"
              $align="start"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 'auto',
                gap: '1em',
                margin: '0',
                textAlign: 'right',
                fontSize: '14px',
                color: '#E5E5E5',
                lineHeight: '17px',
              }}>
              <Trans i18nKey={'innovation.health_m.pipeline.desc'} components={{1: <br />}} />
            </Text>
          </ContentWrap>
        </HomeComponentWrap>
        <HomeComponentWrap style={{justifyContent: 'start'}}>
          <ContentWrap style={{padding: '0', marginBottom: '6rem'}}>
            <TextWrap style={{alignItems: 'start', margin: '0', gap: '0.5em', width: '100%'}}>
              <HR $color="#F8F8F8" $width="20px" $height="1px" style={{alignSelf: 'center'}} />
              <Text
                $fontSize="20px"
                $fontWeight="500"
                $color="#E5E5E5"
                style={{alignSelf: 'center', margin: '0 0 2em 0'}}>
                {t('innovation.health_m.electro.title')}
              </Text>
              <Text
                $fontSize="16px"
                $fontWeight="200"
                $color="#D3D3D3"
                $align="center"
                style={{margin: '0', lineHeight: '20px'}}>
                <Trans i18nKey={'innovation.health_m.electro.desc1'} components={{1: <br />}} />
              </Text>
            </TextWrap>
            <Image
              id="fadeIn"
              src={process.env.PUBLIC_URL + '/assets/images/openinnovation_digital2.png'}
              alt="openinnovation_mobile_middle2"
              style={{width: '100%', marginTop: '0', padding: '0 0 0 0'}}
            />
            <Image
              id="fadeIn"
              src={process.env.PUBLIC_URL + '/assets/images/openinnovation_digital3.png'}
              alt="openinnovation_mobile_middle3"
              style={{width: '100%', marginTop: '2em', padding: '3em 0', borderTop: '1px solid #696969'}}
            />
            <Text $align="center" $color="#D3D3D3" $fontSize="16px" $fontWeight="200" style={{lineHeight: '20px'}}>
              <Trans i18nKey={'innovation.health_m.electro.desc2'} components={{1: <br />}} />
            </Text>
          </ContentWrap>
          <ContentWrap
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'end',
              padding: '0 0 10em 33%',
              columnGap: '2em',
              rowGap: '4em',
            }}>
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
                width: '213px',
                height: '2.5em',

                borderBottom: '1px solid #FDFDFD',

                margin: '0',
              }}
              onClick={() => window.open(linkData?.data?.data?.goToHorizon, '_blank')}>
              <span style={{zIndex: '-1', fontSize: '16px', fontWeight: '400'}}>
                {t('innovation.health.button.herizon')}
              </span>
              <Image src={arrow} alt="arrow" style={{width: '10px', zIndex: '-1'}} />
            </Text>
          </ContentWrap>
        </HomeComponentWrap>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default DigitalHealth;
