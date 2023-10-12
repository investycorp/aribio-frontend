import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import irpr_notice_cover from '../assets/irpr_notice_cover.png';
import icon_circlearrow_dark from '../assets/icon_circlearrow_dark.svg';
import { useParams, Link, useNavigate } from 'react-router-dom';

import {
  Container,
  ContainerGridLineWrap,
  GridLineBox,
  MainImgWrap,
  Path,
  HeadLine,
  HomeComponentWrap,
  TextWrap,
  Text,
  Tab,
  TabItem,
  SearchInput,
  Image,
  ComponentWrap,
  RowWrap,
  DateWrap,
  TitleWrap,
  HR,
  Button,
} from '../style';
import DetailPage from '../components/DetailPage';
import arrow from '../../../assets/images/arrow.svg';

const NoticeDetailPage = ({ setDetailPage, currentItem, page }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
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
      {/* <DetailPage setDetailPage={setDetailPage} currentItem={currentItem} page={page} /> */}

      <Footer />
    </Container>
  );
};

export default NoticeDetailPage;
