import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  background-color: rgba(26, 26, 26, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in-out;
  z-index: 100;
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

const HeaderNavMenuWrap = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;
  min-width: fit-content;
  padding-bottom: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #ffffff' : '2px solid transparent')};
  &:hover,
  &:active {
    border-bottom: 2px solid #ffffff;
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
`;

const HeaderBottom = styled.div`
  width: 100%;
  height: 200px;
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-top: 1px solid #5d5d5d;
  transition: all 0.5s ease-in-out;
`;

const HeaderBottomLeft = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
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
  const [currentMenu, setCurrentMenu] = useState('');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <HeaderContainer>
      <HeaderTop>
        <HeaderLogoWrap>
          <img src={Logo} alt="logo" />
        </HeaderLogoWrap>
        <HeaderNavWrap>
          {menuList.map((menu) => (
            <HeaderNavMenuWrap
              key={menu}
              onClick={() => {
                setCurrentMenu((prev) => {
                  if (prev === menu) {
                    setIsMenuClicked(false);
                    return '';
                  } else {
                    setIsMenuClicked(true);
                    return menu;
                  }
                });
              }}
              $isActive={isMenuClicked && menu === currentMenu ? true : false}
            >
              {menu.toUpperCase()}
            </HeaderNavMenuWrap>
          ))}
        </HeaderNavWrap>
        <HeaderLangButton>
          <img src={lang_globe} alt="lang" />
          <div>{language.toUpperCase()}</div>
        </HeaderLangButton>
      </HeaderTop>
      <HeaderBottom $isActive={isMenuClicked}>
        <HeaderBottomLeft>
          <HeaderBottomLeftTextWrap>
            <div style={{ fontSize: '26px' }}>{currentMenu.toUpperCase()}</div>
            <div style={{ fontSize: '20px', fontWeight: '300', color: '#EDEDED' }}>
              AriBio’s Technology is Love. <br /> We Are Creating a Happier World.
            </div>
          </HeaderBottomLeftTextWrap>
          <img src={arrow} alt="arrow" />
        </HeaderBottomLeft>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
