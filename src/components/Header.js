import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import GlobalStyle from './GlobalStyle';
import Logo from '../assets/images/logo.svg';
import lang_globe from '../assets/images/lang_globe.svg';
import arrow from '../assets/images/arrow.svg';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
  transition: all 0.2s ease-in-out;
  z-index: 100;
  &:hover {
    background-color: rgba(26, 26, 26, 0.3);
  }
`;

const HeaderTop = styled.div`
  margin: 0;
  padding: 50px 7vw 50px 7vw;
  width: 100%;
  height: 146px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogoWrap = styled.div`
  width: 122px;
`;

const HeaderNavWrap = styled.div`
  padding: 0 2rem;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const HeaderNavMenuTextWrap = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
  min-width: fit-content;
  padding-bottom: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #ffffff' : '2px solid transparent')};
  transition: all 0.3s ease-in-out;
  &:hover,
  &:active {
    border-bottom: 2px solid #ffffff;
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  }
`;

const HeaderLangButton = styled.button`
  font-size: 18px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 87px;
  padding: 15px 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: fit-content;
  gap: 0.5rem;
  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
`;

const HeaderBottom = styled.div`
  width: 100%;
  height: 200px;
  position: fixed;
  text-decoration: none;
  top: 146px;
  left: 0;
  display: flex;
  opacity: 0;
  visibility: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(26, 26, 26, 0.3);
  border-top: 1px solid #5d5d5d;
  cursor: default;
  transition: opacity 0.5s ease-in-out;
`;

const HeaderBottomLeft = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  opacity: 0;
  visibility: hidden;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  border-right: 1px solid #5d5d5d;
  padding: 50px 60px 50px 7vw;
`;
const HeaderBottomLeftTextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 1rem;
`;

const HeaderBottomRight = styled.div`
  width: 55%;
  height: 100%;
  display: grid;
  opacity: 0;
  visibility: hidden;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
`;
const HeaderBottomRightMenu = styled.div`
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-shadow: none;
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const [menuList, setMenuList] = useState([
    'Company',
    'Our Approach',
    'Pipeline',
    'IR & PR',
    'Career',
    'Contact',
    'Open Innovation',
  ]);
  const [language, setLanguage] = useState('ENG');
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState(location?.pathname?.split('/')[1] || '');
  // const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <HeaderContainer
      onMouseLeave={() => {
        // setIsMenuClicked(false);
        setCurrentMenu('');
      }}
    >
      <HeaderTop>
        <HeaderLogoWrap>
          <img src={Logo} alt="logo" />
        </HeaderLogoWrap>
        <HeaderNavWrap>
          {menuList.map((menu) => (
            <HeaderNavMenuTextWrap
              key={menu}
              onMouseOver={() => {
                setCurrentMenu(menu);
              }}
              onClick={() => {
                // setCurrentMenu((prev) => {
                //   if (prev === menu) {
                //     setIsMenuClicked(false);
                //     return '';
                //   } else {
                //     setIsMenuClicked(true);
                //     return menu;
                //   }
                // });
              }}
              $isActive={menu === currentMenu ? true : false}
            >
              {menu.toUpperCase()}
            </HeaderNavMenuTextWrap>
          ))}
        </HeaderNavWrap>
        <HeaderLangButton>
          <img src={lang_globe} alt="lang" />
          <div>{language.toUpperCase()}</div>
        </HeaderLangButton>
      </HeaderTop>
      <HeaderBottom
        className={`header-bottom ${currentMenu}`}
        style={{ visibility: currentMenu !== '' ? 'visible' : 'hidden', opacity: currentMenu !== '' ? 1 : 0 }}
      >
        <HeaderBottomLeft
          style={{ visibility: currentMenu !== '' ? 'visible' : 'hidden', opacity: currentMenu !== '' ? 1 : 0 }}
        >
          <HeaderBottomLeftTextWrap>
            <div style={{ fontSize: '26px', textShadow: 'none' }}>{currentMenu.toUpperCase()}</div>
            <div style={{ fontSize: '20px', fontWeight: '300', color: '#EDEDED', textShadow: 'none' }}>
              AriBio’s Technology is Love. <br /> We Are Creating a Happier World.
            </div>
          </HeaderBottomLeftTextWrap>
          <img
            src={arrow}
            alt="arrow"
            style={{ width: '22px', height: '22px', border: '2px solid #ffffff', borderRadius: '50%' }}
          />
        </HeaderBottomLeft>
        <HeaderBottomRight
          style={{ visibility: currentMenu !== '' ? 'visible' : 'hidden', opacity: currentMenu !== '' ? 1 : 0 }}
        >
          <HeaderBottomRightMenu>
            <HeaderNavMenuTextWrap style={{ width: 'fit-content', paddingBottom: '2px' }}>
              ABOUT US
            </HeaderNavMenuTextWrap>
          </HeaderBottomRightMenu>
          <HeaderBottomRightMenu>
            <HeaderNavMenuTextWrap style={{ width: 'fit-content', paddingBottom: '2px' }}>
              CEO MESSAGE
            </HeaderNavMenuTextWrap>
          </HeaderBottomRightMenu>
          <HeaderBottomRightMenu>
            <HeaderNavMenuTextWrap style={{ width: 'fit-content', paddingBottom: '2px' }}>CI</HeaderNavMenuTextWrap>
          </HeaderBottomRightMenu>
          <HeaderBottomRightMenu>
            <HeaderNavMenuTextWrap style={{ width: 'fit-content', paddingBottom: '2px' }}>
              HISTORY
            </HeaderNavMenuTextWrap>
          </HeaderBottomRightMenu>
          <HeaderBottomRightMenu>
            <HeaderNavMenuTextWrap style={{ width: 'fit-content', paddingBottom: '2px' }}>TEAM</HeaderNavMenuTextWrap>
          </HeaderBottomRightMenu>
        </HeaderBottomRight>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
