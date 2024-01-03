import React, {useEffect} from 'react';
import Language from '../../../atom/Language';
import {useRecoilValue} from 'recoil';
import {Container, HeadLine, HomeComponentWrap, MainImgWrap, Path} from '../../../components/style';
import Header from '../../../components/Header';
import {Trans} from 'react-i18next';
import {t} from 'i18next';
import Video from '../../../components/Video';
import {Desktop, Mobile} from '../../../utils/MediaQuery';
import {useNavigate} from 'react-router-dom';

const Moral = () => {
  const language = useRecoilValue(Language);
  const navigate = useNavigate();
  useEffect(() => {
    if (language !== 'KOR') {
      navigate('/');
    }

    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <MainImgWrap>
        <Video
          page="moral"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0500PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1400PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2300PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{opacity: '0.8'}}>{`HOME > COMPANY > `}</span>
        MORAL MANAGEMENT
      </Path>
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine $className="midsize">
          <Trans i18nKey={'moral.headline'} components={{1: <br />}} />
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
        <Desktop></Desktop>

        <Mobile></Mobile>
      </div>
    </Container>
  );
};

export default Moral;
