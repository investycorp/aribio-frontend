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
        console.log(data);
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
      // setItemList(items);
      setFilteredList(items);
    }
    if (pageNumber > 1) {
      if (data?.data?.success) {
        console.log('data');
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
  }, [data]);

  useEffect(() => {
    if (pageNumber > 1) {
      refetch(pageNumber, language, searchValue);
      console.log('refetch', pageNumber);
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
      console.log('page ID', id);
      setDetailPage(true);
      setCurrentItem(itemList[id]);
      console.log(itemList[id]);
    } else if (!id) {
      //when page came back from detail page by clicking view list button
      //or loaded for the first time
      setDetailPage(false);
      setCurrentItem({});
      setSearchValue('');
      setIsLoading(false);
      setFilteredList(itemList);
      setHoverItem();
      setPageNumber(1);
      refetch(pageNumber, language, searchValue);
    }
  }, [id]);

  const handleSearchClick = async (val) => {
    setPageNumber(1);
    refetch(pageNumber, language, searchValue);
    setViewMoreOn(true);
  };

  return (
    <Container className="container">
      <MainImgWrap>
        <Video page="notice" />
      </MainImgWrap>
      <Header />
      <Path>{`HOME > IR & PR > NOTICE`}</Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>NOTICE</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: '5vw',
            height: window.innerWidth > 1280 ? '60px' : '36px',
          }}
        />
      </HomeComponentWrap>
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
        {detailPage ? (
          // rendering detail page and detail page footer navigation
          <>
            <Outlet context={['Notice', currentItem]} />
          </>
        ) : (
          <>
            <Desktop>
              <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
                <TextWrap style={{ width: '70vw' }}>
                  <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                    NOTICE
                  </Text>
                  <div
                    style={{
                      width: '50%',
                      alignSelf: 'flex-start',
                      height: '8em',
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
                    Company Updates and Announcements
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
                      borderBottom: '2px solid #ffffff',
                      padding: '0',
                    }}
                  >
                    <SearchInput
                      placeholder="Please enter a search term."
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
                                  {window.innerWidth > 1500 ? item.title.slice(0, 50) : item.title.slice(0, 50)}...
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
                      <Text>There are no published posts registered.</Text>
                    </ComponentWrap>
                  )}
                </ComponentWrap>
                {(viewMoreOn || pageNumber * itemPerPage <= filteredList.length) && (
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
                  <Text $fontSize="16px" $fontWeight="300" $color="#939598" style={{ fontSize: '16px' }}>
                    NOTICE
                  </Text>
                  <div
                    style={{
                      width: '50%',
                      alignSelf: 'flex-start',
                      height: '60px',
                      borderRight: '1px solid #ffffff',
                      margin: '0',
                    }}
                  ></div>
                  <Text
                    $fontSize="23px"
                    $fontWeight="400"
                    $color="#ffffff"
                    style={{ margin: '2rem 0 0 0', fontSize: '23px' }}
                  >
                    Company Updates
                    <br /> and Announcements
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
                      placeholder="Please enter a search term."
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
                      style={{ height: '20px' }}
                    />
                  </ComponentWrap>
                </ComponentWrap>
                <ComponentWrap
                  style={{ justifyContent: 'center', alignItems: 'center', padding: '8rem 0 4rem 0', gap: '0.5rem' }}
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
                      <Text style={{ fontSize: '16px' }}>There are no published posts registered.</Text>
                    </ComponentWrap>
                  )}
                </ComponentWrap>
                {pageNumber * itemPerPage <= filteredList.length && (
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
