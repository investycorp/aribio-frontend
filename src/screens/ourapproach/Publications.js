import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import ourapproach_publications_cover from './assets/ourapproach_publications_cover.png';
import docthumbnail from './assets/ourapproach_docthumbnail.png';
import arrow from '../../assets/images/arrow.svg';
import search from './assets/icon_search.svg';

import { Container, HomeComponentWrap, TextWrap, Text, ComponentWrap, GridComponentWrap, Image } from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

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
  &::placeholder {
    color: #ffffff;
    font-weight: 200;
    opacity: 1;
  }
`;

const NoResult = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 10vh;
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

const Publications = () => {
  const [searchValue, setSearchValue] = useState('');
  const [irDocs, setIrDocs] = useState([
    {
      title: 'K-OTC Technical Analysis Report for Corporate Investment',
      image: docthumbnail,
      downloadUrl: 'Download',
    },
    {
      title: 'K-OTC Technical Analysis Report for Corporate Investment',
      image: docthumbnail,
      downloadUrl: 'Download',
    },
    {
      title: 'K-OTC Technical Analysis Report for Corporate Investment',
      image: docthumbnail,
      downloadUrl: 'Download',
    },
    {
      title: 'K-OTC Technical Analysis Report for Corporate Investment',
      image: docthumbnail,
      downloadUrl: 'Download',
    },
  ]);
  const [filteredList, setFilteredList] = useState(irDocs);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  const downloadDoc = (title, downloadUrl) => {
    const link = document.createElement('a');
    link.download = `${title}.pdf`;
    link.href = `${downloadUrl}`;
    link.click();
  };

  const handleChange = async (e) => {
    setSearchValue(e.target.value);
    const filtered = await irDocs.filter((doc) => doc.title.includes(e.target.value));
    await setFilteredList(filtered);
  };

  return (
    <Container className="container">
      <MainImgWrap $src={ourapproach_publications_cover}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.2)' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <Header />
      <Path>{`HOME > OUR APPROACH > PUBLICATIONS`}</Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>PUBLICATIONS</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap>
          <TextWrap style={{ margin: '0' }}>
            <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
              PUBLICATION
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
              style={{ margin: '0' }}
            >
              IR Documents
            </Text>
          </TextWrap>
          <GridComponentWrap
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', rowGap: '3em', minHeight: '50vh' }}
          >
            <ComponentWrap></ComponentWrap>
            <ComponentWrap></ComponentWrap>
            <ComponentWrap
              style={{
                flexDirection: 'row',
                color: '#ffffff',
                marginTop: '4em',
                borderBottom: '2px solid #ffffff',
                padding: '0',
              }}
            >
              <SearchInput
                placeholder="Please enter a search term."
                type="text"
                value={searchValue}
                onChange={(e) => {
                  handleChange(e);
                }}
                autoFocus={true}
              />
              <Image src={search} alt="search" />
            </ComponentWrap>
            {filteredList.length > 0 ? (
              filteredList.map((doc, index) => (
                <ComponentWrap
                  key={doc.title + index}
                  className="irdoc"
                  style={{ justifyContent: 'center', alignItems: 'start' }}
                >
                  <div className="wrap">
                    <Image src={doc.image} alt="doc" style={{ width: '14vw' }} />
                    <Text
                      className="text"
                      $fontSize="26px"
                      $fontWeight="300"
                      $color="#ffffff"
                      $align="start"
                      style={{ margin: '1em 0' }}
                    >
                      {doc.title}
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
                        width: 'fit-content',
                        padding: '0.7em 0',
                        borderBottom: '2px solid #ffffff',
                        zIndex: '1',
                      }}
                      onClick={() => {
                        console.log(doc.title, doc.downloadUrl);
                        // downloadDoc(doc.title, doc.downloadUrl);
                      }}
                    >
                      <span style={{ zIndex: '-1' }}>Download</span>
                      <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                    </Text>
                  </div>
                </ComponentWrap>
              ))
            ) : (
              <NoResult>No Result</NoResult>
            )}
          </GridComponentWrap>
        </HomeComponentWrap>
      </Desktop>
      <Mobile>
        <HomeComponentWrap>
          <TextWrap style={{ margin: '0' }}>
            <Text $fontSize="16px" $fontWeight="300" $color="#939598">
              PUBLICATION
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
            <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '0' }}>
              IR Documents
            </Text>
          </TextWrap>
          <GridComponentWrap style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '3em', minHeight: '50vh' }}>
            <ComponentWrap
              style={{
                flexDirection: 'row',
                color: '#ffffff',
                marginTop: '4em',
                borderBottom: '2px solid #ffffff',
                padding: '0',
              }}
            >
              <SearchInput
                placeholder="Please enter a search term."
                type="text"
                value={searchValue}
                onChange={(e) => {
                  handleChange(e);
                }}
                autoFocus={true}
              />
              <Image src={search} alt="search" />
            </ComponentWrap>
            {filteredList.length > 0 ? (
              filteredList.map((doc, index) => (
                <ComponentWrap
                  key={doc.title + index}
                  className="irdoc"
                  style={{ justifyContent: 'center', padding: '0' }}
                >
                  <Image src={doc.image} alt="doc" style={{ width: '56.67vw' }} />
                  <Text
                    className="text"
                    $fontSize="26px"
                    $fontWeight="300"
                    $color="#ffffff"
                    style={{ margin: '1em 0' }}
                  >
                    {doc.title}
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
                      padding: '0.7em 0',
                      borderBottom: '2px solid #ffffff',
                    }}
                    onClick={() => {
                      console.log(doc.title, doc.downloadUrl);
                      // downloadDoc(doc.title, doc.downloadUrl);
                    }}
                  >
                    <span style={{ zIndex: '-1' }}>Download</span>
                    <Image src={arrow} alt="arrow" style={{ width: '1.5em', zIndex: '-1' }} />
                  </Text>
                </ComponentWrap>
              ))
            ) : (
              <NoResult>No Result</NoResult>
            )}
          </GridComponentWrap>
        </HomeComponentWrap>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default Publications;
