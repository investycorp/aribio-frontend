import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import docthumbnail from './assets/ourapproach_docthumbnail.png';
import search from './assets/icon_search.svg';

import { Container, HomeComponentWrap, TextWrap, Text, ComponentWrap, GridComponentWrap, Image } from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import usePublicationList from '../../hooks/ourapproach/usePublication';
import { useNavigate } from 'react-router-dom';

import Video from '../../components/Video';
import { t } from 'i18next';

const SearchInput = styled.input`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  margin: 0.3em 0;
  opacity: 0.5;
  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }

  &:hover {
    opacity: 1;
  }
  &::placeholder {
    color: #ffffff;
    font-weight: 200;
    @media screen and (max-width: 1280px) {
      font-size: 12px;
    }
  }
`;

const NoResult = styled.div`
  grid-column: span 2;
  width: 100%;
  height: 20vh;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  outline: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.$color};
  border-radius: 50%;
`;

const DocType = styled.span`
  width: 'fit-content';
  height: 'fit-content';
  background-color: ${(props) => props.$color};
  border: 1px solid #646464;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  @media screen and (max-width: 900px) {
    font-size: 13px;
    width: 53px;
    height: 24px;
    padding: 0;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Publications = () => {
  const navigate = useNavigate();
  const { data, isLoading } = usePublicationList();
  const [searchValue, setSearchValue] = useState('');
  const [irDocs, setIrDocs] = useState([]);
  const [filteredList, setFilteredList] = useState(irDocs);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let itemList = [];
    if (data?.data?.success) {
      console.log(data.data.dataList);
      data.data.dataList.map((item) => {
        itemList.push({
          id: item.id,
          // Unescape new line characters
          title: item.title.replaceAll('\\n', '\n'),
          image: item.fileDto?.fileUrl,
          url: item.url,
          type: item.type,
          journal: item.journal,
          date: `${item.month}, ${item.year}`,
        });
      });
    }
    setDataList(itemList);
    setFilteredList(itemList);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  const handleChange = async (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = async (e) => {
    const filtered = await dataList.filter(
      (doc) =>
        doc.title?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
        doc.journal?.toLowerCase()?.includes(searchValue?.toLowerCase()),
    );

    setFilteredList(filtered);
  };

  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="publications"
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
        <span style={{ opacity: '0.8' }}>{`HOME > OUR APPROACH > `}</span>PUBLICATIONS
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine className="midsize">{t('publication.headline')}</HeadLine>
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
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <Desktop>
          <HomeComponentWrap>
            <TextWrap style={{ margin: '0' }}>
              <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                {t('publication.title')}
              </Text>
              <div
                  style={{
                    alignSelf: 'center',
                    width: '60px',
                    height: '2px',
                    border: '1px solid #ffffff',
                    margin: window.innerWidth > 1280 ? '80px 0' : '52px 0',
                  }}
              ></div>
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="500"
                $color="#ffffff"
                style={{ margin: '0' }}
              >
                {t('publication.subtitle')}
              </Text>
            </TextWrap>
            <GridComponentWrap
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '3rem', minHeight: '50vh' }}
            >
              <ComponentWrap></ComponentWrap>

              <ComponentWrap
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0',
                  justifyContent: 'end',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',

                    width: '28.67vw',
                    color: '#ffffff',
                    marginTop: '4em',
                    borderBottom: '2px solid #ffffff',
                    padding: '0',
                    justifyContents: 'center',
                    alignItems: 'center',
                  }}
                >
                  <SearchInput
                    placeholder={t('publication.search')}
                    type="text"
                    value={searchValue}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearchClick(e);
                      }
                    }}
                    autoFocus={true}
                    style={{ opacity: searchValue ? '100%' : '50%' }}
                  />
                  <Image
                    src={search}
                    onClick={(e) => {
                      handleSearchClick(e);
                    }}
                    alt="search"
                    style={{ height: window.innerWidth > 1280 ? '24px' : '12px' }}
                  />
                </div>
              </ComponentWrap>
              <ComponentWrap
                style={{
                  display: 'flex',
                  flexDirection: 'row',

                  width: '100%',
                  gap: '1rem',
                  margin: '1rem',
                  padding: '60px 0 40px 0',
                }}
              >
                <Dot
                  $color="#004D76"
                  style={{
                    width: window.innerWidth > 1280 ? '14px' : '10px',
                    height: window.innerWidth > 1280 ? '14px' : '10px',
                  }}
                />
                <span
                  style={{
                    marginRight: '1rem',
                    fontSize: window.innerWidth > 1280 ? '20px' : '14px',
                    color: '#E6E6E6',
                  }}
                >
                  Publication
                </span>
                <Dot
                  $color="#760027"
                  style={{
                    width: window.innerWidth > 1280 ? '14px' : '10px',
                    height: window.innerWidth > 1280 ? '14px' : '10px',
                  }}
                />{' '}
                <span style={{ fontSize: window.innerWidth > 1280 ? '20px' : '14px', color: '#E6E6E6' }}>
                  Presentation
                </span>
              </ComponentWrap>
              <ComponentWrap style={{ padding: '60px 0' }}></ComponentWrap>
              {filteredList.length > 0 ? (
                filteredList.map((doc, index) => (
                  <ComponentWrap
                    key={doc.title + index}
                    className="irdoc"
                    style={{ justifyContent: 'center', alignItems: 'start', padding: '32px' }}
                  >
                    <div
                      className="readmore"
                      onClick={() => {
                        setTimeout(() => {
                          doc.url && window.open(`${doc.url}`, '_blank');
                        }, 10);
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/plus.svg'}
                        alt="read more"
                        style={{
                          cursor: 'pointer',
                          zIndex: '-1',
                          width: window.innerWidth > 1280 ? '40px' : '24px',
                          height: window.innerWidth > 1280 ? '40px' : '24px',
                        }}
                      />
                      <span
                        style={{
                          cursor: 'pointer',
                          zIndex: '-1',
                          fontSize: window.innerWidth > 1280 ? '26px' : '15px',
                        }}
                      >
                        Read More
                      </span>
                    </div>
                    <div className="wrap" style={{ alignItems: 'stretch' }}>
                      <div style={{ padding: '1rem' }}>
                        <Image
                          src={doc.image}
                          alt="doc"
                          style={{
                            width: window.innerWidth > 1280 ? '170px' : '102px',
                            height: window.innerWidth > 1280 ? '170px' : '102px',
                          }}
                        />
                      </div>
                      <div>
                        <Text
                          className="text"
                          $fontWeight="300"
                          $color="##CECECE"
                          $align="start"
                          style={{
                            margin: '0.5rem 0',
                            fontSize: window.innerWidth > 1280 ? '18px' : '11px',
                            alignItems: 'start',
                            color: '#CECECE',
                          }}
                        >
                          {doc.journal}
                        </Text>
                        <Text
                          className="text"
                          $fontSize="24px"
                          $fontWeight="500"
                          $color="#ffffff"
                          $align="start"
                          style={{
                            margin: '0.5rem 0',
                            fontSize: window.innerWidth > 1280 ? '24px' : '13px',
                            whiteSpace: 'pre-wrap',
                            alignItems: 'start',
                            paddingRight: window.innerWidth > 1280 ? '80px' : '100px',
                          }}
                        >
                          {doc.title.slice(0, 85)}
                          {doc.title.length > 85 && '...'}
                        </Text>
                        <Text
                          className="text"
                          $fontWeight="200"
                          $color="##CECECE"
                          $align="start"
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '0.5rem 0',
                            fontSize: window.innerWidth > 1280 ? '18px' : '10px',
                          }}
                        >
                          <span>{doc.date}</span>
                          {doc.type === 'CONFERENCE' ? (
                            <DocType
                              $color={'#430016'}
                              style={{
                                width: window.innerWidth > 1280 ? '154px' : '101px',
                                height: window.innerWidth > 1280 ? '36px' : '24px',
                                padding: '0',
                                fontSize: window.innerWidth > 1280 ? '18px' : '13px',
                              }}
                            >
                              Presentation
                            </DocType>
                          ) : (
                            <DocType
                              $color={'#012438'}
                              style={{
                                width: window.innerWidth > 1280 ? '159px' : '104px',
                                height: window.innerWidth > 1280 ? '36px' : '24px',
                                padding: '0',
                                fontSize: window.innerWidth > 1280 ? '18px' : '13px',
                              }}
                            >
                              Publications
                            </DocType>
                          )}
                        </Text>
                      </div>
                    </div>
                  </ComponentWrap>
                ))
              ) : (
                <NoResult>{t('publication.noresult')}</NoResult>
              )}
            </GridComponentWrap>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          <HomeComponentWrap>
            <TextWrap style={{ margin: '0' }}>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598" style={{marginBottom: '0'}}>
                {t('publication.title')}
              </Text>
              <div
                style={{
                  alignSelf: 'center',
                  width: '20px',
                  height: '1px',
                  border: '1px solid #ffffff',
                  margin: '28px 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '0' }}>
                {t('publication.subtitle')}
              </Text>
            </TextWrap>
            <GridComponentWrap
              style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '0', minHeight: '50vh', width: '90vw' }}
            >
              <ComponentWrap
                style={{
                  flexDirection: 'row',
                  color: '#ffffff',
                  marginTop: '4rem',
                  borderBottom: '1px solid #ffffff',
                  padding: '0',
                  width: '322px',
                }}
              >
                <SearchInput
                  placeholder={t('publication.search')}
                  type="text"
                  value={searchValue}
                  style={{ fontSize: '18px', width: '322px' }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchClick(e);
                    }
                  }}
                  autoFocus={true}
                />
                <Image
                  src={search}
                  onClick={(e) => {
                    handleSearchClick(e);
                  }}
                  alt="search"
                />
              </ComponentWrap>
              <ComponentWrap
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: '2rem 0 2rem 0',
                  padding: '0',
                  width: '100%',
                  gap: '1rem',
                }}
              >
                <Dot $color="#004D76" />
                <span style={{ marginRight: '1rem' }}>Publication</span>
                <Dot $color="#760027" /> <span>Conference</span>
              </ComponentWrap>
              {filteredList.length > 0 ? (
                filteredList.map((doc, index) => (
                  <ComponentWrap
                    key={doc.title + index}
                    className="irdoc"
                    style={{ justifyContent: 'center', alignItems: 'start', padding: '1rem', borderRadius: '10px' }}
                  >
                    <div
                      className="readmore"
                      onClick={() => {
                        setTimeout(() => {
                          doc.url && window.open(`${doc.url}`, '_blank');
                        }, 10);
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + '/assets/icons/plus.svg'}
                        alt="read more"
                        style={{ cursor: 'pointer', zIndex: '-1' }}
                      />
                      <span style={{ fontSize: '16px', cursor: 'pointer', zIndex: '-1' }}>Read More</span>
                    </div>
                    <div
                      className="wrap"
                      style={{ alignItems: 'stretch', gridTemplateColumns: '25vw 50vw', overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '0',
                        }}
                      >
                        {doc.type === 'CONFERENCE' ? (
                          <DocType $color={'#430016'}>Conf</DocType>
                        ) : (
                          <DocType $color={'#012438'}>Pub</DocType>
                        )}
                        <Image src={doc.image} alt="doc" style={{ width: '60px', height: '60px' }} />
                      </div>
                      <div style={{ alignItems: 'start' }}>
                        <Text
                          className="text"
                          $fontWeight="300"
                          $color="##CECECE"
                          $align="start"
                          style={{
                            margin: '0.5rem 0',
                            fontSize: '14px',
                            fontWeight: '300',
                            alignItems: 'start',
                            textAlign: 'start',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {doc.journal.slice(0, 25)}...
                        </Text>
                        <Text
                          className="text"
                          $fontSize="18px"
                          $fontWeight="400"
                          $color="#F0F0F0"
                          style={{
                            alignItems: 'start',
                            margin: '0.3rem 0 0.4rem 0',
                            textAlign: 'start',
                            flexWrap: 'wrap',
                            lineHeight: '22px',
                          }}
                        >
                          {doc.title.slice(0, 50)}
                          {doc.title.length > 50 && '...'}
                        </Text>
                        <Text
                          className="text"
                          $fontWeight="200"
                          $color="##CECECE"
                          $align="start"
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '0.5rem 0',
                            fontSize: '12px',
                            width: 'fit-content',
                          }}
                        >
                          <span>{doc.date}</span>
                        </Text>
                      </div>
                    </div>
                  </ComponentWrap>
                ))
              ) : (
                <NoResult>{t('publication.noresult')}</NoResult>
              )}
            </GridComponentWrap>
          </HomeComponentWrap>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default Publications;
