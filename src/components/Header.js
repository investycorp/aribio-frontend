import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Language from '../atom/Language';
import WindowSize from '../atom/MediaQuery';
import { Desktop, Mobile } from '../utils/MediaQuery';

import Logo from '../assets/images/logo.svg';
import lang_globe from '../assets/images/lang_globe.svg';
import plus from '../assets/images/plus.svg';
import toggle from '../assets/images/toggle.svg';

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
  position: relative;
  margin: 0;
  padding: 0 7vw;
  width: 100%;
  height: 146px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  @media screen and (max-width: 1024px) {
  }
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

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 900px) {
    display: grid;
    width: -webkit-fill-available;
    align-items: start;
    justify-content: start;
    height: fit-content;
    padding: 1em 7vw;
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
  div {
    padding-top: 0.3em;
    @media screen and (max-width: 900px) {
      display: flex;
      font-size: 20px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 1460px) {
    font-size: 19px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  @media screen and (max-width: 900px) {
    border-bottom: 1px solid #464646;
    width: 84vw;
    align-items: start;
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

  @media screen and (max-width: 1460px) {
    padding: 0.6em 1em;
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
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 0.5em;
`;

const Header = () => {
  const [menuList, setMenuList] = useState([
    { title: 'Company', linkTo: 'company' },
    { title: 'Our Approach', linkTo: 'ourapproach' },
    { title: 'Pipeline', linkTo: 'pipeline' },
    { title: 'IR & PR', linkTo: 'irpr' },
    { title: 'Career', linkTo: 'career' },
    { title: 'Contact', linkTo: 'contactus' },
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
      { title: 'AI PLATFORM', linkTo: 'aiplatform' },
      { title: 'PUBLICATION', linkTo: 'publications' },
    ],
    pipeline: [{ title: 'PIPELINE', linkTo: 'pipeline' }],
    career: [{ title: 'CAREER', linkTo: 'career' }],
    contactus: [
      { title: 'PARTNER', linkTo: 'partner' },
      { title: 'CONTACT US', linkTo: 'contactus' },
    ],
    openinnovation: [
      { title: 'Open Innovation', linkTo: 'openinnovation' },
      { title: 'Digital Health', linkTo: 'digitalhealth' },
      { title: 'MEMO:RE PROJECT', linkTo: 'memoreproject' },
    ],
    irpr: [
      { title: 'NOTICE', linkTo: 'notice' },
      { title: 'PRESS RELEASE', linkTo: 'pressrelease' },
    ],
  });
  const [navBarwidth, setNavBarWidth] = useState(0);
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState('');
  const [currentTab, setCurrentTab] = useState('');
  const [windowSize, setWindowSize] = useRecoilState(WindowSize);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
    setCurrentTab(location.pathname.split('/')[1]);
  }, [document.getElementsByClassName('header-navwrap')[0]?.clientWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
      setWindowSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
        setWindowSize(window.innerWidth);
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
    <>
      <Mobile>
        <HeaderContainer style={{ display: 'grid', backgroundColor: '#121212' }}>
          <HeaderTop>
            <HeaderLogoWrap>
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === '/') window.location.reload();
                }}
              >
                <img style={{ cursor: 'pointer', width: '74px', paddingTop: '0.5em' }} src={Logo} alt="logo" />
              </Link>
            </HeaderLogoWrap>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1em',
              }}
            >
              {isToggleOpen && <LangButton />}
              <Image
                src={toggle}
                alt="toggle_menu"
                style={{ padding: '1.5em' }}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
              />
            </div>
          </HeaderTop>
          {isToggleOpen && (
            <HeaderNavWrap className="header-navwrap">
              {menuList.map((menu, index) => (
                <HeaderNavMenuTextWrap
                  key={menu.linkTo + index}
                  onClick={() => {
                    if (menu.linkTo === 'career' || menu.linkTo === 'openinnovation' || menu.linkTo === 'pipeline') {
                      if (currentTab !== menu.linkTo) navigate(`/${menu.linkTo}`);
                      else window.location.reload();
                    }
                  }}
                  $isActive={menu.linkTo === currentMenu ? true : false}
                >
                  <div
                    style={{
                      paddingBottom: '0.3rem',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      subMenuOpen === menu.linkTo ? setSubMenuOpen('') : setSubMenuOpen(menu.linkTo);
                      console.log(menu.linkTo);
                    }}
                  >
                    <span style={{ zIndex: '-1' }}>{menu.title.toUpperCase()}</span>
                    <Image style={{ zIndex: '-1' }} src={plus} alt="open" />
                  </div>
                  <div
                    style={{ display: 'grid', width: '100%', alignItems: 'stretch', gap: '1em', marginBottom: '1em' }}
                  >
                    {subMenuOpen === menu.linkTo &&
                      subMenu[menu.linkTo]?.map((subMenu) => (
                        <div
                          style={{
                            textDecoration: 'none',
                            color: '#EFEFEF',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '84vw',
                          }}
                        >
                          <Link
                            to={`/${subMenu.linkTo}`}
                            style={{
                              textDecoration: 'none',
                              color: '#EFEFEF',
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '0.2em',
                              borderBottom:
                                currentTab === menu.linkTo && currentTab !== currentMenu
                                  ? '2px solid #ffffff'
                                  : '2px solid transparent',
                            }}
                            key={subMenu.linkTo}
                            onClick={() => {
                              if (subMenu.linkTo === location.pathname.split('/')[1]) {
                                window.location.reload();
                              }
                              setIsToggleOpen(false);
                              setSubMenuOpen('');
                            }}
                          >
                            <span style={{ fontSize: '18px', color: '#EFEFEF' }}>{subMenu.title.toUpperCase()}</span>
                          </Link>
                        </div>
                      ))}
                  </div>
                </HeaderNavMenuTextWrap>
              ))}
            </HeaderNavWrap>
          )}
        </HeaderContainer>
      </Mobile>
      <Desktop>
        <>
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
                  <img style={{ cursor: 'pointer' }} src={Logo} alt="logo" />
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
                      if (menu.linkTo === 'career' || menu.linkTo === 'openinnovation' || menu.linkTo === 'pipeline') {
                        if (currentTab !== menu.linkTo) navigate(`/${menu.linkTo}`);
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
                      <span>{menu.title.toUpperCase()}</span>
                    </div>
                  </HeaderNavMenuTextWrap>
                ))}
              </HeaderNavWrap>
              <LangButton />
            </HeaderTop>
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
          </HeaderContainer>
        </>
      </Desktop>
    </>
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
    <>
      <Desktop>
        <HeaderLangButton style={{ cursor: 'pointer' }} onClick={handleClick}>
          <img style={{ zIndex: '-1', cursor: 'pointer' }} src={lang_globe} alt="lang" />
          <div style={{ zIndex: '-1', cursor: 'pointer' }}>{language}</div>
        </HeaderLangButton>
      </Desktop>
      <Mobile>
        <div
          onClick={handleClick}
          style={{
            cursor: 'pointer',
            fontSize: '14px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <img style={{ zIndex: '-1', cursor: 'pointer', height: '14px' }} src={lang_globe} alt="lang" />
          <span style={{ paddingTop: '0.1em', zIndex: '-1' }}>{language}</span>
        </div>
      </Mobile>
    </>
  );
};
export { LangButton };
