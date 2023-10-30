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
  &:focus,
  &:active,
  &:hover {
    opacity: 1;
  }
  &::placeholder {
    color: #ffffff;
    font-weight: 200;
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
  font-size: 0.8rem;
  font-weight: 300;
  color: #ffffff;
`;

const Publications = () => {
  const navigate = useNavigate();
  const { data, isLoading } = usePublicationList();
  const [searchValue, setSearchValue] = useState('');
  const [irDocs, setIrDocs] = useState([]);
  const [filteredList, setFilteredList] = useState(irDocs);

  useEffect(() => {
    let itemList = [];
    if (data?.data?.success) {
      console.log(data.data.dataList);
      data.data.dataList.map((item) => {
        itemList.push({
          id: item.id,
          title: item.title,
          image: item.fileDto?.fileUrl,
          url: item.url,
          type: item.type,
          journal: item.journal,
          date: `${item.month}, ${item.year}`,
        });
      });
    }
    setFilteredList(itemList);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  const handleChange = async (e) => {
    setSearchValue(e.target.value);
    const filtered = await irDocs.filter((doc) => doc.title.includes(e.target.value));
    await setFilteredList(filtered);
  };

  return (
    <Container className="container">
      <MainImgWrap>
        <Video page="publications" />
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.2)' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <Header />
      <Path>{`HOME > OUR APPROACH > PUBLICATIONS`}</Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine className="midsize">PUBLICATIONS</HeadLine>
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
              Explore Our Research
            </Text>
          </TextWrap>
          <GridComponentWrap
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '3rem', minHeight: '50vh' }}
          >
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
                style={{ opacity: searchValue ? '100%' : '50%' }}
              />
              <Image src={search} alt="search" />
            </ComponentWrap>
            <ComponentWrap
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '2rem',
                width: '100%',
                gap: '1rem',
                margin: '1rem',
              }}
            >
              <Dot $color="#004D76" style={{ width: '14px', height: '14px' }} />
              <span style={{ marginRight: '1rem', fontSize: '20px', color: '#E6E6E6' }}>Publication</span>
              <Dot $color="#760027" style={{ width: '14px', height: '14px' }} />{' '}
              <span style={{ fontSize: '20px', color: '#E6E6E6' }}>Conference</span>
            </ComponentWrap>
            <ComponentWrap></ComponentWrap>
            {filteredList.length > 0 ? (
              filteredList.map((doc, index) => (
                <ComponentWrap
                  key={doc.title + index}
                  className="irdoc"
                  style={{ justifyContent: 'center', alignItems: 'start' }}
                >
                  <div
                    className="readmore"
                    onClick={() => {
                      document.location.href = `//${doc.url}`;
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/assets/icons/plus.svg'}
                      alt="read more"
                      style={{ cursor: 'pointer', zIndex: '-1' }}
                    />
                    <span style={{ cursor: 'pointer', zIndex: '-1' }}>Read More</span>
                  </div>
                  <div className="wrap" style={{ alignItems: 'stretch' }}>
                    <div style={{ padding: '1rem' }}>
                      <Image src={docthumbnail} alt="doc" style={{ width: '10vw', height: '10vw' }} />
                    </div>
                    <div>
                      <Text
                        className="text"
                        $fontWeight="300"
                        $color="##CECECE"
                        $align="start"
                        style={{
                          margin: '0.5rem 0',
                          fontSize: window.innerWidth > 1280 ? '18px' : '12px',
                          alignItems: 'start',
                          color: '#CECECE',
                        }}
                      >
                        {doc.journal}
                      </Text>
                      <Text
                        className="text"
                        $fontSize="26px"
                        $fontWeight="300"
                        $color="#ffffff"
                        $align="start"
                        style={{ margin: '0.5rem 0' }}
                      >
                        {doc.title}
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
                          fontSize: window.innerWidth > 1280 ? '18px' : '12px',
                        }}
                      >
                        <span>{doc.date}</span>
                        {doc.type === 'CONFERENCE' ? (
                          <DocType $color={'#430016'}>Conference</DocType>
                        ) : (
                          <DocType $color={'#012438'}>Publications</DocType>
                        )}
                      </Text>
                    </div>
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
                borderRight: '1px solid #ffffff',
                margin: '2rem 0',
              }}
            ></div>
            <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '0' }}>
              Explore Our Research
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
                placeholder="Please enter a search term."
                type="text"
                value={searchValue}
                style={{ fontSize: '18px', width: '322px' }}
                onChange={(e) => {
                  handleChange(e);
                }}
                autoFocus={true}
              />
              <Image src={search} alt="search" />
            </ComponentWrap>
            <ComponentWrap
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '6rem 0 2rem 0',
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
                  style={{ justifyContent: 'center', alignItems: 'start', padding: '1rem' }}
                >
                  <div
                    className="readmore"
                    onClick={() => {
                      document.location.href = `//${doc.url}`;
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/assets/icons/plus.svg'}
                      alt="read more"
                      style={{ cursor: 'pointer', zIndex: '-1' }}
                    />
                    <span style={{ fontSize: '16px', cursor: 'pointer', zIndex: '-1' }}>Read More</span>
                  </div>
                  <div className="wrap" style={{ alignItems: 'stretch', gridTemplateColumns: '1fr 2fr' }}>
                    <div style={{ padding: '0' }}>
                      {doc.type === 'CONFERENCE' ? (
                        <DocType $color={'#430016'}>Conf</DocType>
                      ) : (
                        <DocType $color={'#012438'}>Pub</DocType>
                      )}
                      <Image src={docthumbnail} alt="doc" style={{ width: '60px', height: '60px' }} />
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
                          fontWeight: '400',
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
                        $fontWeight="300"
                        $color="#F0F0F0"
                        style={{
                          alignItems: 'start',
                          margin: '0.5rem 0',
                          textAlign: 'start',
                          flexWrap: 'wrap',
                          lineHeight: '22px',
                        }}
                      >
                        {doc.title.slice(0, 50)}..
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
