import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Language from '../atom/Language';

import Logo from '../assets/images/logo.svg';
import lang_globe from '../assets/images/lang_globe.svg';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
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

const BlurBoxTop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 146px;
  background-color: transparent;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;
const BlurBoxBottom = styled.div`
  position: absolute;
  top: 146px;
  width: 100%;
  height: 105px;
  opacity: 0;
  background-color: transparent;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  transition: opacity 0.3s ease-in-out;
`;

const HeaderTop = styled.div`
  margin: 0;
  padding: 0 7vw;
  width: 100%;
  height: 146px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const HeaderLogoWrap = styled.div`
  width: 122px;
`;

const HeaderNavWrap = styled.div`
  padding: 0 2rem;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;

  @media screen and (max-width: 1460px) {
    gap: 1rem;
  }
`;

const HeaderNavMenuTextWrap = styled.div`
  height: 100%;
  font-size: 20px;
  font-weight: 300;
  color: #ffffffcc;
  display: flex;
  flex-direction: column;
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
    color: #ffffff;
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  @media screen and (max-width: 1460px) {
    font-size: 19px;
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
  width: 120px;
  gap: 0.5rem;
  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
`;

const HeaderBottom = styled.div`
  width: 100%;
  height: 105px;
  position: fixed;
  text-decoration: none;
  top: 146px;
  left: 0;
  display: flex;
  opacity: 0;
  visibility: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(26, 26, 26, 0.3);
  border-top: 2px solid #5d5d5d;
  cursor: default;
  transition: opacity 0.5s ease-in-out;
`;

const Header = () => {
  const [menuList, setMenuList] = useState([
    { title: 'Company', linkTo: 'company' },
    { title: 'Our Approach', linkTo: 'ourapproach' },
    { title: 'Pipeline', linkTo: 'pipeline' },
    { title: 'IR & PR', linkTo: 'irpr' },
    { title: 'Career', linkTo: 'career' },
    { title: 'Contact', linkTo: 'contact' },
    { title: 'Open Innovation', linkTo: 'openinnovation' },
  ]);
  const [subMenu, setSubMenu] = useState({
    company: [
      { title: 'ABOUT US', linkTo: 'aboutus' },
      { title: 'HISTORY', linkTo: 'history' },
      { title: 'CEO MESSAGE', linkTo: 'ceomessage' },
      { title: 'CI', linkTo: 'ci' },
    ],
    ourapproach: [
      { title: 'POLY-PHARMACOLOGY', linkTo: 'poly-pharmacology' },
      { title: 'AI Platform', linkTo: 'aiplatform' },
      { title: 'Publications', linkTo: 'publications' },
    ],
  });
  const [navBarwidth, setNavBarWidth] = useState(0);
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState('');
  const [currentTab, setCurrentTab] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
    setCurrentTab(location.pathname.split('/')[1]);
  }, [document.getElementsByClassName('header-navwrap')[0]?.clientWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
      });
    };
  }, []);

  useEffect(() => {
    if (
      location.pathname.split('/')[1] === 'aboutus' ||
      location.pathname.split('/')[1] === 'history' ||
      location.pathname.split('/')[1] === 'ceomessage' ||
      location.pathname.split('/')[1] === 'ci'
    ) {
      setCurrentTab('company');
    } else {
      setCurrentTab(location.pathname.split('/')[1]);
    }
  }, [location.pathname]);

  return (
    <HeaderContainer
      onMouseLeave={() => {
        setCurrentMenu('');
      }}
    >
      <BlurBoxTop />
      <HeaderTop>
        <HeaderLogoWrap>
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') window.location.reload();
            }}
          >
            <img src={Logo} alt="logo" />
          </Link>
        </HeaderLogoWrap>
        <HeaderNavWrap className="header-navwrap">
          {menuList.map((menu, index) => (
            <HeaderNavMenuTextWrap
              key={menu.linkTo + index}
              onMouseOver={() => {
                setCurrentMenu(menu.linkTo);
              }}
              onClick={() => {
                if (menu.linkTo === 'career') {
                  if (currentTab !== 'career') navigate('/career');
                  else window.location.reload();
                }
              }}
              $isActive={menu.linkTo === currentMenu ? true : false}
            >
              <div
                style={{
                  paddingBottom: '0.3rem',
                  borderBottom:
                    currentTab === menu.linkTo && currentTab !== currentMenu
                      ? '2px solid #ffffff'
                      : '2px solid transparent',
                  zIndex: '-1',
                }}
              >
                {menu.title.toUpperCase()}
              </div>
            </HeaderNavMenuTextWrap>
          ))}
        </HeaderNavWrap>
        <LangButton />
      </HeaderTop>
      {currentMenu !== 'career' && (
        <>
          <BlurBoxBottom
            style={{ visibility: currentMenu !== '' ? 'visible' : 'hidden', opacity: currentMenu !== '' ? 1 : 0 }}
          />
          <HeaderBottom
            className={`header-bottom ${currentMenu}`}
            style={{ visibility: currentMenu !== '' ? 'visible' : 'hidden', opacity: currentMenu !== '' ? 1 : 0 }}
          >
            <HeaderNavWrap style={{ width: navBarwidth, gap: '5em', justifyContent: 'start' }}>
              {subMenu[currentMenu]?.map((menu) => (
                <Link
                  to={`/${menu.linkTo}`}
                  style={{ textDecoration: 'none' }}
                  key={menu.linkTo}
                  onClick={() => {
                    if (menu.linkTo === location.pathname.split('/')[1]) {
                      window.location.reload();
                    }
                  }}
                >
                  <HeaderNavMenuTextWrap>{menu.title.toUpperCase()}</HeaderNavMenuTextWrap>
                </Link>
              ))}
            </HeaderNavWrap>
          </HeaderBottom>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;

const LangButton = () => {
  const [language, setLanguage] = useRecoilState(Language);

  const handleClick = () => {
    if (language === 'ENG') setLanguage('KOR');
    else setLanguage('ENG');
  };
  return (
    <HeaderLangButton onClick={handleClick}>
      <img src={lang_globe} alt="lang" />
      <div>{language}</div>
    </HeaderLangButton>
  );
};
export { LangButton };
