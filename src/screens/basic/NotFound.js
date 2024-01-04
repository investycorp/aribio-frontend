import Header from '../../components/Header';
import Video from '../../components/Video';
import {Container, HeadLine, HomeComponentWrap, MainImgWrap, TextWrap} from '../../components/style';
import {Text} from '../ourapproach/style';

const NotFound = () => {
  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="aiplatform"
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
      <HomeComponentWrap style={{height: '100vh'}}>
        <HeadLine $className="midsize">404</HeadLine>
        <TextWrap>
          <Text>Page not found.</Text>
        </TextWrap>
      </HomeComponentWrap>
    </Container>
  );
};

export default NotFound;
