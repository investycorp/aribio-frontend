import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from './../../assets/images/vertical_arrow.svg';
import irpr_notice_cover from './assets/irpr_notice_cover.png';
import search from './assets/icon_search.svg';
import icon_circlearrow_dark from './assets/icon_circlearrow_dark.svg';
import icon_more from './assets/icon_more.svg';
import arrow from '../../assets/images/arrow.svg';

import icon_circlearrow_white from './assets/icon_circlearrow_white.svg';

import {
  Container,
  ContainerGridLineWrap,
  GridLineBox,
  MainImgWrap,
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

import { HeadLine, Path } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import { Link, Outlet, useParams } from 'react-router-dom';

const Notice = () => {
  const { id } = useParams();
  const [hoverItem, setHoverItem] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentItem, setCurrentItem] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [detailPage, setDetailPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemList, setItemList] = useState([
    {
      date: '26 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: (
        <div>
          Today AriBio Co., Ltd. announced the completion of the end of phase 2 meeting (EOP2) with the United States
          Food and Drug Administration (FDA), Division of Neurology 1. The EOP2 meeting, which occurred April 28 th on
          Thursday morning Eastern Standard Time (EST), included several individuals from different departments within
          the FDA, including non-clinical, clinical, biostatistics, and Dr. Billy Dunn, the Director from the Office of
          Neuroscience. “AriBio is very appreciative of the time and attention the FDA provided in preparation for and
          during this EOP2 meeting,” said James Rock, CEO of AriBio USA, INC.
          <br />
          <br />
          “Importantly, AriBio was able to discuss the Phase 3 program including the target Alzheimer’s population and
          thoughts on acceptable endpoints for the study. We now have a clear understanding of FDA current thinking on
          drug development for the Alzheimer’s population, and the endpoints for a Phase 3 program,” stated Dr. Matthew
          Choung, CEO of AriBio Co., Ltd. Attendees on behalf of AriBio included clinical, non-clinical, medical,
          statistics and regulatory experts with a deep understanding of drug development for the Alzheimer’s
          population. <br />
          <br />
          <section>
            About AR1001
            <br />
            <br />
            AR1001 is a first-in-class oral drug with novel polypharmacological mechanisms for the treatment of
            Alzheimer’s disease. Pre-clinical studies have confirmed neuroprotective effects of AR1001 via inhibiting
            neuron apoptosis and restoring synaptic plasticity. AR1001 also has demonstrated notable effects against
            amyloid plaques and tau proteins via autophagy activation. The results of a Double-Blind, Randomized and
            Placebo-Controlled Study to Evaluate Efficacy and Safety of 52-Week Treatment in Patients with Mild to
            Moderate Alzheimer’s disease was reported at 14th Conference of Clinical Trials on Alzheimer’s Disease
            (CTAD) that was held in Boston, USA, from November 9-12, 2021. The study provided encouraging evidence of
            the tolerability and activity of AR1001 in slowing the progression of Alzheimer’s disease through various
            cognitive and functional assessments, subject to ongoing clinical testing.
          </section>
          <section>
            <br />
            <br />
            About AriBio Co., Ltd.
            <br />
            <br /> AriBio Co., Ltd. is a biopharmaceutical company based in South Korea with a focus on the development
            of new drugs for neurodegenerative disease. AR1001 is the lead candidate for Alzheimer’s disease, which is
            scheduled to enter a multinational Phase 3 study in the United States, Europe, and Korea in 2022.​ AriBio is
            also developing several other drug candidates for the treatment of neurodegenerative diseases.
          </section>
        </div>
      ),
    },
    {
      date: '6 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '2 APR 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '26 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '26 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: (
        <div>
          Today AriBio Co., Ltd. announced the completion of the end of phase 2 meeting (EOP2) with the United States
          Food and Drug Administration (FDA), Division of Neurology 1. The EOP2 meeting, which occurred April 28 th on
          Thursday morning Eastern Standard Time (EST), included several individuals from different departments within
          the FDA, including non-clinical, clinical, biostatistics, and Dr. Billy Dunn, the Director from the Office of
          Neuroscience. “AriBio is very appreciative of the time and attention the FDA provided in preparation for and
          during this EOP2 meeting,” said James Rock, CEO of AriBio USA, INC.
          <br />
          <br />
          “Importantly, AriBio was able to discuss the Phase 3 program including the target Alzheimer’s population and
          thoughts on acceptable endpoints for the study. We now have a clear understanding of FDA current thinking on
          drug development for the Alzheimer’s population, and the endpoints for a Phase 3 program,” stated Dr. Matthew
          Choung, CEO of AriBio Co., Ltd. Attendees on behalf of AriBio included clinical, non-clinical, medical,
          statistics and regulatory experts with a deep understanding of drug development for the Alzheimer’s
          population. <br />
          <br />
          <section>
            About AR1001
            <br />
            <br />
            AR1001 is a first-in-class oral drug with novel polypharmacological mechanisms for the treatment of
            Alzheimer’s disease. Pre-clinical studies have confirmed neuroprotective effects of AR1001 via inhibiting
            neuron apoptosis and restoring synaptic plasticity. AR1001 also has demonstrated notable effects against
            amyloid plaques and tau proteins via autophagy activation. The results of a Double-Blind, Randomized and
            Placebo-Controlled Study to Evaluate Efficacy and Safety of 52-Week Treatment in Patients with Mild to
            Moderate Alzheimer’s disease was reported at 14th Conference of Clinical Trials on Alzheimer’s Disease
            (CTAD) that was held in Boston, USA, from November 9-12, 2021. The study provided encouraging evidence of
            the tolerability and activity of AR1001 in slowing the progression of Alzheimer’s disease through various
            cognitive and functional assessments, subject to ongoing clinical testing.
          </section>
          <section>
            <br />
            <br />
            About AriBio Co., Ltd.
            <br />
            <br /> AriBio Co., Ltd. is a biopharmaceutical company based in South Korea with a focus on the development
            of new drugs for neurodegenerative disease. AR1001 is the lead candidate for Alzheimer’s disease, which is
            scheduled to enter a multinational Phase 3 study in the United States, Europe, and Korea in 2022.​ AriBio is
            also developing several other drug candidates for the treatment of neurodegenerative diseases.
          </section>
        </div>
      ),
    },
    {
      date: '6 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '2 APR 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '26 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '26 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: (
        <div>
          Today AriBio Co., Ltd. announced the completion of the end of phase 2 meeting (EOP2) with the United States
          Food and Drug Administration (FDA), Division of Neurology 1. The EOP2 meeting, which occurred April 28 th on
          Thursday morning Eastern Standard Time (EST), included several individuals from different departments within
          the FDA, including non-clinical, clinical, biostatistics, and Dr. Billy Dunn, the Director from the Office of
          Neuroscience. “AriBio is very appreciative of the time and attention the FDA provided in preparation for and
          during this EOP2 meeting,” said James Rock, CEO of AriBio USA, INC.
          <br />
          <br />
          “Importantly, AriBio was able to discuss the Phase 3 program including the target Alzheimer’s population and
          thoughts on acceptable endpoints for the study. We now have a clear understanding of FDA current thinking on
          drug development for the Alzheimer’s population, and the endpoints for a Phase 3 program,” stated Dr. Matthew
          Choung, CEO of AriBio Co., Ltd. Attendees on behalf of AriBio included clinical, non-clinical, medical,
          statistics and regulatory experts with a deep understanding of drug development for the Alzheimer’s
          population. <br />
          <br />
          <section>
            About AR1001
            <br />
            <br />
            AR1001 is a first-in-class oral drug with novel polypharmacological mechanisms for the treatment of
            Alzheimer’s disease. Pre-clinical studies have confirmed neuroprotective effects of AR1001 via inhibiting
            neuron apoptosis and restoring synaptic plasticity. AR1001 also has demonstrated notable effects against
            amyloid plaques and tau proteins via autophagy activation. The results of a Double-Blind, Randomized and
            Placebo-Controlled Study to Evaluate Efficacy and Safety of 52-Week Treatment in Patients with Mild to
            Moderate Alzheimer’s disease was reported at 14th Conference of Clinical Trials on Alzheimer’s Disease
            (CTAD) that was held in Boston, USA, from November 9-12, 2021. The study provided encouraging evidence of
            the tolerability and activity of AR1001 in slowing the progression of Alzheimer’s disease through various
            cognitive and functional assessments, subject to ongoing clinical testing.
          </section>
          <section>
            <br />
            <br />
            About AriBio Co., Ltd.
            <br />
            <br /> AriBio Co., Ltd. is a biopharmaceutical company based in South Korea with a focus on the development
            of new drugs for neurodegenerative disease. AR1001 is the lead candidate for Alzheimer’s disease, which is
            scheduled to enter a multinational Phase 3 study in the United States, Europe, and Korea in 2022.​ AriBio is
            also developing several other drug candidates for the treatment of neurodegenerative diseases.
          </section>
        </div>
      ),
    },
    {
      date: '6 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '2 APR 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
    {
      date: '26 JUL 2023',
      title:
        '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
      content: '',
    },
  ]);
  const [filteredList, setFilteredList] = useState(itemList);
  useEffect(() => {
    // window.scrollTo(0, 0);
    // if (id) {
    //   setDetailPage(true);
    //   setCurrentItem(itemList[id]);
    // } else if (!id) {
    //   console.log('!!!!!');
    //   setDetailPage(false);
    //   setCurrentItem({});
    // }
  }, []);

  useEffect(() => {
    if (detailPage) {
      window.scrollTo(0, window.innerHeight * 0.8);
    }
  }, [detailPage]);

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
    }
  }, [id]);

  const handleSearchClick = async (val) => {
    setPageNumber(1);
    const value = val.toString().toLowerCase();
    setFilteredList(
      itemList.filter((doc) => {
        if (doc.title?.toLowerCase().includes(value) || doc.date?.toLowerCase().includes(value)) {
          return doc;
        }
      }),
    );
  };

  return (
    <Container className="container">
      <ContainerGridLineWrap>
        <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.3)' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <Path>{`HOME > IR & PR > NOTICE`}</Path>
      <MainImgWrap $src={irpr_notice_cover}>
        <HeadLine>NOTICE</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>

      {detailPage ? (
        // rendering detail page and detail page footer navigation
        <>
          <Outlet context={['Notice', currentItem]} />
          <Desktop>
            <HomeComponentWrap style={{ paddingTop: '3em' }}>
              <ComponentWrap
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '0',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTop: '2px solid #ffffff',
                }}
              >
                {itemList.indexOf(currentItem) === 0 ? (
                  <div></div>
                ) : (
                  <div>
                    <Text
                      style={{
                        margin: '3em 0 2em 0',
                        padding: '0',
                        textAlign: 'start',
                        fontSize: '18px',
                        fontWeight: '200',
                      }}
                    >
                      PREV
                    </Text>
                    <HR $width="3em" />
                    <Link style={{ textDecoration: 'none' }} to={`/notice/${parseInt(id) - 1}`}>
                      <Text
                        className="prev"
                        style={{
                          width: '80%',
                          margin: '1em 0',
                          padding: '0',
                          textAlign: 'start',
                          fontSize: '18px',
                          fontWeight: '200',
                        }}
                      >
                        {itemList[itemList.indexOf(currentItem) - 1]?.title.slice(0, 60)}...
                      </Text>
                    </Link>
                  </div>
                )}
                {itemList[itemList.indexOf(currentItem) + 1] ? (
                  <div>
                    <Text
                      style={{
                        margin: '3em 0 2em 0',
                        padding: '0',
                        textAlign: 'start',
                        fontSize: '18px',
                        fontWeight: '200',
                      }}
                    >
                      NEXT
                    </Text>
                    <HR $width="3em" />
                    <Link style={{ textDecoration: 'none' }} to={`/notice/${parseInt(id) + 1}`}>
                      <Text
                        className="next"
                        style={{
                          width: '80%',
                          margin: '1em 0',
                          padding: '0',
                          textAlign: 'start',
                          fontSize: '18px',
                          fontWeight: '200',
                        }}
                      >
                        {itemList[itemList.indexOf(currentItem) + 1]?.title.slice(0, 60)}...
                      </Text>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
                {/* Notice List */}

                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    alignItems: 'end',
                  }}
                >
                  <Link style={{ textDecoration: 'none' }} to="/notice">
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
                        minWidth: 'fit-content',
                        paddingBottom: '0.7em',
                        margin: '1em 0',
                        borderBottom: '2px solid #ffffff',
                        gap: '3em',
                        zIndex: '-1',
                      }}
                    >
                      <span style={{ zIndex: '-1' }}>View List</span>
                      <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                    </Text>
                  </Link>
                </div>
              </ComponentWrap>
            </HomeComponentWrap>
          </Desktop>
          <Mobile>
            <HomeComponentWrap style={{ paddingTop: '2rem' }}>
              <ComponentWrap
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '0',
                  justifyContent: 'center',
                  alignItems: 'start',
                  borderTop: '1px solid #FDFDFD',
                }}
              >
                {itemList.indexOf(currentItem) === 0 ? (
                  <div></div>
                ) : (
                  <div style={{ width: '66.6%' }}>
                    <Text
                      style={{
                        margin: '3rem 0 1rem 0',
                        padding: '0',
                        textAlign: 'start',
                        fontSize: '14px',
                        fontWeight: '300',
                      }}
                    >
                      PREV
                    </Text>
                    <HR $width="2em" $height="1px" />
                    <Link style={{ textDecoration: 'none' }} to={`/notice/${parseInt(id) - 1}`}>
                      <Text
                        className="prev"
                        style={{
                          width: '80%',
                          margin: '1rem 0',
                          padding: '0',
                          textAlign: 'start',
                          fontSize: '16px',
                          fontWeight: '300',
                        }}
                      >
                        {itemList[itemList.indexOf(currentItem) - 1]?.title.slice(0, 60)}...
                      </Text>
                    </Link>
                  </div>
                )}
                {itemList[itemList.indexOf(currentItem) + 1] ? (
                  <div style={{ width: '66.6%' }}>
                    <Text
                      style={{
                        margin: '3rem 0 1rem 0',
                        padding: '0',
                        textAlign: 'start',
                        fontSize: '14px',
                        fontWeight: '300',
                      }}
                    >
                      NEXT
                    </Text>
                    <HR $width="2em" $height="1px" />
                    <Link style={{ textDecoration: 'none' }} to={`/notice/${parseInt(id) + 1}`}>
                      <Text
                        className="next"
                        style={{
                          width: '80%',
                          margin: '1rem 0',
                          padding: '0',
                          textAlign: 'start',
                          fontSize: '16px',
                          fontWeight: '300',
                        }}
                      >
                        {itemList[itemList.indexOf(currentItem) + 1]?.title.slice(0, 60)}...
                      </Text>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}

                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    alignItems: 'end',
                    width: '100%',
                  }}
                >
                  <Link style={{ textDecoration: 'none', width: '66.6%' }} to="/notice">
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
                        width: '100%',
                        paddingBottom: '0.7em',
                        margin: '1em 0',
                        borderBottom: '1px solid #ffffff',
                        gap: '3em',
                      }}
                    >
                      <span style={{ zIndex: '-1' }}>View List</span>
                      <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                    </Text>
                  </Link>
                </div>
              </ComponentWrap>
            </HomeComponentWrap>
          </Mobile>
        </>
      ) : (
        <>
          <Desktop>
            <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
              <TextWrap style={{ width: '70vw' }}>
                <Text $fontSize="26px" $fontWeight="300" $color="#939598">
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
                <Text $fontSize="50px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                  We Share Our Transparent Management Information.
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

                  <Image src={search} alt="search" onClick={(e) => handleSearchClick(e.target.previousSibling.value)} />
                </ComponentWrap>
              </ComponentWrap>
              <ComponentWrap style={{ justifyContent: 'center', alignItems: 'center', padding: '5em 0' }}>
                {filteredList.length > 0 ? (
                  filteredList.map((item, index) => {
                    if (index < pageNumber * itemPerPage) {
                      return (
                        <Link
                          style={{ textDecoration: 'none', width: '100%' }}
                          key={'noticeItem' + index}
                          to={`/notice/${index}`}
                        >
                          <RowWrap
                            onMouseOver={() => {
                              setHoverItem(index);
                            }}
                            onMouseLeave={() => {
                              setHoverItem();
                            }}
                            onFocus={() => {
                              setHoverItem(index);
                            }}
                            onClick={() => {
                              setDetailPage(true);
                              setCurrentItem(item);
                            }}
                          >
                            <DateWrap>
                              <Text className="date">{item.date.split(' ')[0]}</Text>
                              <Text className="month">
                                {item.date.split(' ')[1]}
                                {`\t`}
                                {item.date.split(' ')[2]}
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
                                {item.title.slice(0, 60)}...
                              </div>
                            </TitleWrap>
                            <div style={{ display: 'flex', justifyContent: 'end', padding: '1em 3em 1em 0' }}>
                              <Image
                                style={{ padding: '1em', cursor: 'pointer' }}
                                src={hoverItem === index ? icon_circlearrow_white : icon_circlearrow_dark}
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
              {pageNumber * itemPerPage < filteredList.length && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    pageNumber * itemPerPage < filteredList.length && setPageNumber(pageNumber + 1);
                  }}
                >
                  <Image style={{ zIndex: '-1' }} src={icon_more} alt="more" />
                  <Text style={{ zIndex: '-1', width: 'fit-content', margin: '0.5em' }}>View more</Text>
                </div>
              )}
            </HomeComponentWrap>
          </Desktop>
          <Mobile>
            <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
              <TextWrap style={{ width: '70vw' }}>
                <Text $fontSize="16px" $fontWeight="300" $color="#939598">
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
                <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                  We Share Our Transparent Management Information.
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
                    style={{ height: '1rem' }}
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
                          key={'noticeItem' + index}
                          to={`/notice/${index}`}
                        >
                          <RowWrap
                            onMouseOver={() => {
                              setHoverItem(index);
                            }}
                            onMouseLeave={() => {
                              setHoverItem();
                            }}
                            onFocus={() => {
                              setHoverItem(index);
                            }}
                            onClick={() => {
                              setDetailPage(true);
                              setCurrentItem(item);
                            }}
                          >
                            <DateWrap>
                              <Text className="date">{item.date}</Text>
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
                                {item.title.slice(0, 30)}...
                              </div>

                              <Image
                                style={{ padding: '0', cursor: 'pointer', height: '1.3rem' }}
                                src={hoverItem === index ? icon_circlearrow_white : icon_circlearrow_dark}
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
              {pageNumber * itemPerPage < filteredList.length && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    pageNumber * itemPerPage < filteredList.length && setPageNumber(pageNumber + 1);
                  }}
                >
                  <Image style={{ zIndex: '-1', height: '2rem' }} src={icon_more} alt="more" />
                  <Text style={{ zIndex: '-1', width: 'fit-content', margin: '0.5em', fontSize: '16px' }}>
                    View more
                  </Text>
                </div>
              )}
            </HomeComponentWrap>
          </Mobile>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default Notice;
