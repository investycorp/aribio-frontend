import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from './../../assets/images/vertical_arrow.svg';
import irpr_notice_cover from './assets/irpr_notice_cover.png';
import search from './assets/icon_search.svg';
import icon_circlearrow_dark from './assets/icon_circlearrow_dark.svg';
import icon_more from './assets/icon_more.svg';

import icon_circlearrow_white from './assets/icon_circlearrow_white.svg';

import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
  SearchInput,
  Image,
  ComponentWrap,
  RowWrap,
  DateWrap,
  TitleWrap,
  HR,
} from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import { Link, Outlet, useParams } from 'react-router-dom';
import useNoticeList from '../../hooks/irpr/useNoticeList';
import Video from '../../components/Video';

import { Trans } from 'react-i18next';
import { t } from 'i18next';

import Language from '../../atom/Language';
import { useRecoilValue } from 'recoil';

const Notice = () => {
  const { id } = useParams();
  const [language] = useRecoilValue(Language);

  const [hoverItem, setHoverItem] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentItem, setCurrentItem] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [searchTermShown, setSearchTermShown] = useState('');
  const [detailPage, setDetailPage] = useState(false);

  const [itemList, setItemList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);
  const { data, isLoading: loading, refetch } = useNoticeList(searchValue, language, pageNumber);
  const [isLoading, setIsLoading] = useState(loading);
  const [viewMoreOn, setViewMoreOn] = useState(true);

  useEffect(() => {
    if (pageNumber === 1) {
      const items = [];
      if (data?.data) {
        data?.data.data.noticeDtoList.map((item) => {
          items.push({
            id: item.id,
            date: item.day,
            month: item.month,
            year: item.year,
            title: item.title,
            content: item.content,
          });
        });
      }

      setFilteredList(items);
    }
    if (pageNumber > 1) {
      if (data?.data?.success) {
        data?.data.data.noticeDtoList.map((item) => {
          setFilteredList((prev) => [
            ...prev,
            {
              id: item.id,
              date: item.day,
              month: item.month,
              year: item.year,
              title: item.title,
              content: item.content,
            },
          ]);
        });
      }
    }
    setViewMoreOn(pageNumber !== data?.data?.data?.totalPages);
  }, [data]);

  useEffect(() => {
    if (pageNumber > 1) {
      refetch(pageNumber, language, searchValue);
    }
  }, [pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (detailPage) {
      window.scrollTo(0, window.innerHeight * 0.8);
    }
  }, [detailPage]);

  useEffect(() => {
    setPageNumber(1);
    setViewMoreOn(false);
  }, [searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(window.scrollY);
    if (id) {
      //when page has refreshed from detail page

      setDetailPage(true);
      setCurrentItem(filteredList[id]);
    } else if (!id) {
      //when page came back from detail page by clicking view list button
      //or loaded for the first time

      // setSearchValue('');

      setDetailPage(false);
      // refetch(1, language, '');
      setCurrentItem({});

      setIsLoading(false);
      // setFilteredList(itemList);
      setHoverItem();
    }
  }, [id]);

  const handleSearchClick = async (val) => {
    setPageNumber(1);
    refetch(1, language, val);
    setSearchTermShown(val);
    // setViewMoreOn(true);
  };

  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="notice"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0700PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1600PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2500PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME > IR & PR > `}</span>NOTICE
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine $className="midsize">NOTICE</HeadLine>
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
        {detailPage ? (
          // rendering detail page and detail page footer navigation
          <>
            <Outlet context={['Notice', currentItem]} setPageNumber={setPageNumber} />
          </>
        ) : (
          <>
            <Desktop>
              <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
                <TextWrap style={{ width: '70vw' }}>
                  <Text
                    style={{ fontSize: window.innerWidth > 1280 ? '26px' : '18px' }}
                    $fontWeight="300"
                    $color="#939598"
                  >
                    {t('notice.title')}
                  </Text>
                  <div
                    style={{
                      alignSelf: 'center',
                      width: window.innerWidth > 1280 ? '60px' : '40px',
                      height: '2px',
                      border: '1px solid #ffffff',
                      margin: window.innerWidth > 1280 ? '80px 0' : '52px 0',
                    }}
                  ></div>
                  <Text
                    $fontWeight="500"
                    $color="#ffffff"
                    style={{ fontSize: window.innerWidth > 1280 ? '50px' : '34px' }}
                  >
                    {t('notice.subtitle')}
                  </Text>
                </TextWrap>
              </HomeComponentWrap>
              <HomeComponentWrap>
                <ComponentWrap style={{ justifyContent: 'center', alignItems: 'end' }}>
                  <ComponentWrap
                    style={{
                      width: '33.3%',
                      flexDirection: 'row',
                      color: '#ffffff',
                      borderBottom: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff',
                      padding: '0',
                    }}
                  >
                    <SearchInput
                      placeholder={t('notice.placeholder')}
                      type="text"
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                      }}
                      autoFocus={true}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearchClick(e.target.value);
                        }
                      }}
                    />

                    <Image
                      src={search}
                      alt="search"
                      onClick={(e) => handleSearchClick(e.target.previousSibling.value)}
                      style={{ height: window.innerWidth > 1280 ? '24px' : '12px' }}
                    />
                  </ComponentWrap>
                </ComponentWrap>
                <ComponentWrap
                  style={{ justifyContent: 'center', alignItems: 'center', padding: '5em 0', rowGap: '1em' }}
                >
                  {filteredList.length > 0 ? (
                    filteredList.map((item, index) => {
                      if (index < pageNumber * itemPerPage) {
                        return (
                          <Link
                            style={{ textDecoration: 'none', width: '100%' }}
                            key={'noticeItem' + item.id}
                            to={`/irpr/notice/${item.id}`}
                          >
                            <RowWrap
                              onMouseOver={() => {
                                setHoverItem(item.id);
                              }}
                              onMouseLeave={() => {
                                setHoverItem();
                              }}
                              onFocus={() => {
                                setHoverItem(item.id);
                              }}
                              onClick={() => {
                                setDetailPage(true);
                                setCurrentItem(item);
                              }}
                            >
                              <DateWrap>
                                <Text className="date">{item.date}</Text>
                                <Text className="month year">
                                  {item.month}
                                  {`\t`}
                                  {item.year}
                                </Text>
                              </DateWrap>
                              <TitleWrap style={{ overflow: 'hidden' }}>
                                <div
                                  className="ticker_item"
                                  style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  {window.innerWidth > 1500 ? item.title.slice(0, 50) : item.title.slice(0, 60)}...
                                </div>
                              </TitleWrap>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'end',
                                  padding: window.innerWidth > 1280 ? '1em 3em 1em 0' : '0',
                                }}
                              >
                                <Image
                                  style={{
                                    padding: window.innerWidth > 1280 ? '1em 2em' : '0.5em 2em',
                                    cursor: 'pointer',
                                    zIndex: '20',
                                    height: window.innerWidth > 1280 ? '44px' : '27px',
                                  }}
                                  src={hoverItem === item.id ? icon_circlearrow_white : icon_circlearrow_dark}
                                  alt="icon_circlearrow_dark"
                                />
                              </div>
                            </RowWrap>
                          </Link>
                        );
                      }
                    })
                  ) : (
                    <ComponentWrap style={{ gap: '2em', height: '50vh', justifyContent: 'center' }}>
                      <HR />
                      {data?.data.data.noticeDtoList?.length < 1 && (!searchTermShown || searchTermShown === '') ? (
                        <Text>There are no published posts registered.</Text>
                      ) : (
                        <Text>No result found for '{searchTermShown}'</Text>
                      )}
                    </ComponentWrap>
                  )}
                </ComponentWrap>
                {filteredList.length > 0 && (viewMoreOn || pageNumber * itemPerPage <= filteredList.length) && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      if (pageNumber * itemPerPage <= filteredList.length) {
                        setPageNumber(pageNumber + 1);
                      }
                    }}
                  >
                    <Image
                      style={{ zIndex: '-1', height: window.innerWidth > 1280 ? '40px' : '24px' }}
                      src={icon_more}
                      alt="more"
                    />
                    <Text
                      style={{
                        zIndex: '-1',
                        width: 'fit-content',
                        margin: '0.5em',
                        fontSize: window.innerWidth > 1280 ? '26px' : '15px',
                      }}
                    >
                      View more
                    </Text>
                  </div>
                )}
              </HomeComponentWrap>
            </Desktop>
            <Mobile>
              <HomeComponentWrap>
                <TextWrap style={{ width: '90vw' }}>
                  <Text
                    $fontSize="16px"
                    $fontWeight="300"
                    $color="#939598"
                    style={{ marginBottom: '0', fontSize: '16px' }}
                  >
                    {t('notice.title')}
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
                  <Text $fontSize="23px" $fontWeight="500" $color="#ffffff" style={{ fontSize: '23px' }}>
                    <Trans i18nKey="notice.subtitle_m" components={{ 1: <br /> }} />
                  </Text>
                </TextWrap>
              </HomeComponentWrap>
              <HomeComponentWrap>
                <ComponentWrap style={{ justifyContent: 'center', alignItems: 'end' }}>
                  <ComponentWrap
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      color: '#ffffff',
                      borderBottom: '1px solid #ffffff',
                      padding: '0',
                    }}
                  >
                    <SearchInput
                      placeholder={t('notice.placeholder')}
                      type="text"
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                      }}
                      autoFocus={false}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearchClick(e.target.value);
                        }
                      }}
                    />

                    <Image
                      src={search}
                      alt="search"
                      onClick={(e) => handleSearchClick(e.target.previousSibling.value)}
                      style={{ height: '20px' }}
                    />
                  </ComponentWrap>
                </ComponentWrap>
                <ComponentWrap
                  style={{ justifyContent: 'center', alignItems: 'center', padding: '100px 0 4rem 0', gap: '18px' }}
                >
                  {filteredList.length > 0 ? (
                    filteredList.map((item, index) => {
                      if (index < pageNumber * itemPerPage) {
                        return (
                          <Link
                            style={{ textDecoration: 'none', width: '100%' }}
                            key={'noticeItem' + item.id}
                            to={`/irpr/notice/${item.id}`}
                          >
                            <RowWrap
                              onMouseOver={() => {
                                setHoverItem(item.id);
                              }}
                              onMouseLeave={() => {
                                setHoverItem();
                              }}
                              onFocus={() => {
                                setHoverItem(item.id);
                              }}
                              onClick={() => {
                                setDetailPage(true);
                                setCurrentItem(item);
                              }}
                            >
                              <DateWrap>
                                <Text className="date">{`${item.month} ${item.date}, ${item.year}`}</Text>
                              </DateWrap>
                              <TitleWrap style={{ overflow: 'hidden' }}>
                                <div
                                  className="ticker_item"
                                  style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    marginRight: '1rem',
                                    fontSize: '18px',
                                  }}
                                >
                                  {item.title.slice(0, 25)}...
                                </div>

                                <Image
                                  style={{ padding: '0', cursor: 'pointer', height: '20px' }}
                                  src={hoverItem === item.id ? icon_circlearrow_white : icon_circlearrow_dark}
                                  alt="icon_circlearrow_dark"
                                />
                              </TitleWrap>
                            </RowWrap>
                          </Link>
                        );
                      }
                    })
                  ) : (
                    <ComponentWrap style={{ gap: '2em', height: '30vh', justifyContent: 'center' }}>
                      <HR style={{ width: '24px', height: '1px' }} />
                      {data?.data.data.noticeDtoList?.length < 1 && (!searchTermShown || searchTermShown === '') ? (
                        <Text style={{ fontSize: '16px' }}>There are no published posts registered.</Text>
                      ) : (
                        <Text style={{ fontSize: '16px' }}>No result found for '{searchTermShown}'</Text>
                      )}
                    </ComponentWrap>
                  )}
                </ComponentWrap>
                {filteredList.length > 0 && pageNumber * itemPerPage <= filteredList.length && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={async () => {
                      if (pageNumber * itemPerPage <= filteredList.length) {
                        setPageNumber(pageNumber + 1);
                      }
                    }}
                  >
                    <Image style={{ zIndex: '-1', height: '24px' }} src={icon_more} alt="more" />
                    <Text style={{ zIndex: '-1', width: 'fit-content', margin: '0.5em', fontSize: '16px' }}>
                      View more
                    </Text>
                  </div>
                )}
              </HomeComponentWrap>
            </Mobile>
          </>
        )}
      </div>
      <Footer />
    </Container>
  );
};

export default Notice;
