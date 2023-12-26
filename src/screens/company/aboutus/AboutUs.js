import React, {useEffect, useState} from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {Container, HomeComponentWrap, TextWrap, Text, Tab, TabItem} from './style';
import {HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox} from '../../../components/style';
import Leadership from './components/Leadership';
import Advisors from './components/Advisors';
import {useRecoilState} from 'recoil';
import {Desktop, Mobile} from '../../../utils/MediaQuery';

import Video from '../../../components/Video';
import {Trans} from 'react-i18next';
import {t} from 'i18next';
import MoveUp from '../../../atom/MoveUp';

const AboutUs = () => {
  const [tabNames, setTabNames] = useState(['Leadership', 'Advisors']);
  const [currentTab, setCurrentTab] = useState('Leadership');
  const [moveUp, setMoveUp] = useRecoilState(MoveUp);
  const leader = document.querySelectorAll('#leadership');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);

    const handleScroll = () => {
      document.addEventListener('scroll', () => {
        const leader = document.querySelectorAll('#leadership');
        const advisor = document.querySelector('#advisor');

        if (leader[0]?.getBoundingClientRect().y < window.innerHeight * 0.9) {
          leader[1]?.classList.add('moveup');
          setMoveUp(true);
        } else {
          leader[1]?.classList.remove('moveup');
        }
      });
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const leaders = document.querySelectorAll('#leadership');
    if (moveUp && currentTab === 'Leadership') {
      leaders[1]?.classList?.add('moveup');
    }
  }, [currentTab]);

  return (
    <Container className="container">
      <Header />
      <Path>
        <span style={{opacity: '0.8'}}>{`HOME > COMPANY > `}</span>
        {t('aboutus.title')}
      </Path>
      <MainImgWrap>
        <Video
          page="aboutus"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0400PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1300PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2200PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine $className="midsize">
          <Trans i18nKey="aboutus.headline" components={{1: <br />}} />
        </HeadLine>
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
      <div style={{margin: '0', padding: '0', position: 'relative'}}>
        <Desktop>
          <HomeComponentWrap>
            <TextWrap>
              <Text $color="#939598" $fontWeight="300" style={{fontsize: window.innerWidth > 1280 ? '26px' : '18px'}}>
                {t('aboutus.title')}
              </Text>
              <Text $fontWeight="500" style={{fontSize: window.innerWidth > 1280 ? '50px' : '34px'}}>
                {t('aboutus.subtitle')}
              </Text>
              <hr
                style={{
                  width: window.innerWidth > 1280 ? '60px' : '40px',
                  border: '1px solid #ffffff',
                  margin: '2.5rem 0 4rem 0',
                }}
              />
              <Text $fontWeight="300" $color="#D3D3D3" style={{fontSize: window.innerWidth > 1280 ? '23px' : '14px'}}>
                <Trans i18nKey="aboutus.desc" components={{1: <br />}} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <Tab style={{padding: '0 7vw'}}>
            {tabNames.map((item, index) => (
              <TabItem
                key={index}
                $isActive={currentTab === item ? true : false}
                onClick={() => {
                  setCurrentTab(item);
                }}>
                {item}
              </TabItem>
            ))}
          </Tab>
          {currentTab === 'Leadership' ? (
            <Leadership tabShow={currentTab === 'Leadership'} />
          ) : (
            <Advisors tabShow={currentTab === 'Advisors'} />
          )}
        </Desktop>

        <Mobile>
          <HomeComponentWrap>
            <TextWrap style={{width: '100%'}}>
              <Text $color="#939598" $fontWeight="300" style={{fontSize: '16px'}}>
                {t('aboutus.title')}
              </Text>
              <Text $fontWeight="500" style={{fontSize: '23px'}}>
                {t('aboutus.subtitle')}
              </Text>
              <hr style={{width: '20px', border: '1px solid #ffffff', margin: '0 0 2rem 0'}} />
              <Text $fontSize="18px" $fontWeight="300" $color="#D3D3D3" style={{lineHeight: '20px', fontSize: '18px'}}>
                <Trans i18nKey="aboutus_m.desc" components={{1: <br />}} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <Tab style={{padding: '0 5vw'}}>
            {tabNames.map((item, index) => (
              <TabItem
                key={index}
                $isActive={currentTab === item ? true : false}
                style={{fontSize: '20px', borderWidth: '1px'}}
                onClick={() => {
                  setCurrentTab(item);
                  console.log(item);
                }}>
                {item}
              </TabItem>
            ))}
          </Tab>
          {currentTab === 'Leadership' ? <Leadership /> : <Advisors />}
        </Mobile>
      </div>

      <Footer />
    </Container>
  );
};

export default AboutUs;
