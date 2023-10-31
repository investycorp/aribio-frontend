import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Language from '../atom/Language';
import WindowSize from '../atom/MediaQuery';
import { Desktop, Mobile } from '../utils/MediaQuery';

import lang_globe from '../assets/images/lang_globe.svg';
import plus from '../assets/images/plus.svg';
import minus from '../assets/images/minus_menu.svg';
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
  overflow: hidden;
  &:hover {
    background-color: rgba(26, 26, 26, 0.3);
  }
  @media screen and (max-width: 900px) {
    background-color: #121212;
  }
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
  justify-content: center;
  z-index: 100;
  @media screen and (max-width: 1280px) {
    height: 97px;
  }
  @media screen and (max-width: 900px) {
    justify-content: space-between;
    padding: 0 5vw;
  }
`;

const BlurTop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 144px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  @media screen and (max-width: 1280px) {
    height: 97px;
  }
`;

const HeaderLogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 122px;
  @media screen and (max-width: 1280px) {
    img {
    }
  }
`;

const HeaderNavWrap = styled.div`
  padding: 0;
  width: -webkit-fill-available;
  padding: 0 5em;
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
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    justify-content: start;
    padding: 0 5vw;
    gap: 0;
    height: 683px;
    overflow-y: scroll;
    z-index: 100;
    backdrop-filter: blur(200px);
    -webkit-backdrop-filter: blur(200px);
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
    width: 90vw;
    align-items: start;
    height: fit-content;
    padding: 0;
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
  justify-content: center;
  gap: 0.5rem;
  width: 122px;
  height: 52px;
  gap: 0.5rem;
  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 1460px) {
    margin-bottom: 1em;

    padding: 0.6em 1em;
    font-size: 14px;
    width: 82px;
    height: 34px;
  }
  @media screen and (max-width: 1280px) {
    width: 80px;
    padding: 0.5em 0.3em;
    margin-bottom: 1em;
    font-size: 10px;
    img {
      height: 10px;
    }
  }
`;

const HeaderBottom = styled.div`
  width: 100%;
  height: 105px;
  position: fixed;
  text-decoration: none;
  padding: 0 7vw;
  top: 144px;
  left: 0;
  display: flex;
  opacity: 0;
  visibility: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  background-color: rgba(26, 26, 26, 0.3);
  border-top: 2px solid #5d5d5d;
  cursor: default;
  transition: opacity 0.5s ease-in-out;
  @media screen and (max-width: 1280px) {
    top: 95px;
    height: 72px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0 5vw;
  }
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
    { title: 'Contact', linkTo: 'contact' },
    { title: 'Open Innovation', linkTo: 'openinnovation' },
  ]);
  const [subMenu, setSubMenu] = useState({
    company: [
      { title: 'ABOUT US', linkTo: 'aboutus' },
      { title: 'HISTORY', linkTo: 'history' },
      { title: 'CEO MESSAGE', linkTo: 'ceomessage' },
      { title: 'CORPORATE IDENTITY', linkTo: 'ci' },
    ],
    ourapproach: [
      { title: 'POLY-PHARMACOLOGY', linkTo: 'poly-pharmacology' },
      { title: 'AI PLATFORM', linkTo: 'aiplatform' },
      { title: 'PUBLICATION', linkTo: 'publications' },
    ],
    pipeline: [{ title: 'PIPELINE', linkTo: 'pipeline' }],
    career: [{ title: 'CAREER', linkTo: 'career' }],
    contact: [
      { title: 'PARTNER', linkTo: 'partner' },
      { title: 'CONTACT US', linkTo: 'contactus' },
    ],
    openinnovation: [
      { title: 'Open Innovation', linkTo: 'openinnovation' },
      { title: 'Digital Health', linkTo: 'digitalhealth' },
      { title: 'MEMO:RE PROJECT', linkTo: 'memoreproject' },
    ],
    irpr: [
      { title: 'NOTICE', linkTo: 'notice/' },
      { title: 'PRESS RELEASE', linkTo: 'pressrelease/' },
      { title: 'MEDIA', linkTo: 'mediakit' },
    ],
  });
  const [fixedMenu, setFixedMenu] = useState('');
  const [navBarwidth, setNavBarWidth] = useState(0);
  const [currentMenu, setCurrentMenu] = useState('');
  const [currentTab, setCurrentTab] = useState('');
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useRecoilState(WindowSize);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
    setCurrentTab(location.pathname.split('/')[1]);
  }, [document.getElementsByClassName('header-navwrap')[0]?.clientWidth, location.pathname]);

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

  useEffect(() => {
    //Mobile body Scroll Lock on Toggle
    if (isToggleOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }
  }, [isToggleOpen]);

  useEffect(() => {
    fixedMenu !== '' && document.getElementById('header').focus();
  }, [fixedMenu]);

  return (
    <>
      <Mobile>
        <HeaderContainer
          style={{ display: 'grid', width: '100vw' }}
          tabIndex={1}
          onBlur={async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));
            setIsToggleOpen(false);
            setSubMenuOpen('');
          }}
        >
          <HeaderTop style={{ backgroundColor: '#121212' }}>
            <HeaderLogoWrap>
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === '/') window.location.reload();
                }}
              >
                <img
                  style={{ cursor: 'pointer', width: '74px', paddingTop: '0.5em' }}
                  src={process.env.PUBLIC_URL + '/assets/images/header_logo.png'}
                  alt="logo"
                />
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
              {/* isToggleOpen && */}
              {<LangButton />}
              {!isToggleOpen ? (
                <Image
                  src={toggle}
                  alt="toggle_menu"
                  style={{ margin: '1.5em 0', height: '24px', width: '24px' }}
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                />
              ) : (
                <Image
                  src={process.env.PUBLIC_URL + '/assets/icons/closeMenu.svg'}
                  alt="toggle_close"
                  style={{ margin: '1.5em 0', height: '24px', width: '24px' }}
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                />
              )}
            </div>
          </HeaderTop>

          {isToggleOpen && (
            <HeaderNavWrap className="header-navwrap" style={{ backgroundColor: '#121212' }}>
              {menuList.map((menu, index) => (
                <HeaderNavMenuTextWrap
                  key={menu.linkTo + index}
                  // onClick={() => {
                  //   if (menu.linkTo === 'career' || menu.linkTo === 'openinnovation' || menu.linkTo === 'pipeline') {
                  //     if (currentTab !== menu.linkTo) navigate(`/${menu.linkTo}`);
                  //     else window.location.reload();
                  //   }
                  // }}
                  $isActive={menu.linkTo === currentMenu ? true : false}
                >
                  <div
                    style={{
                      height: '56px',
                      cursor: 'pointer',
                      padding: '0',
                      margin: '0',
                    }}
                    onClick={() => {
                      subMenuOpen === menu.linkTo ? setSubMenuOpen('') : setSubMenuOpen(menu.linkTo);
                    }}
                  >
                    <span style={{ fontSize: '20px', fontWeight: '300', color: '#BFBFBF', zIndex: '-1' }}>
                      {menu.title.toUpperCase()}
                    </span>
                    {subMenuOpen === menu.linkTo ? (
                      <Image style={{ zIndex: '-1', height: '18px', width: '18px' }} src={minus} alt="minus" />
                    ) : (
                      <Image style={{ zIndex: '-1', height: '18px', width: '18px' }} src={plus} alt="open" />
                    )}
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      width: '100%',
                      alignItems: 'stretch',
                      gap: '24px',
                      marginBottom: '0',
                      padding: subMenuOpen === menu.linkTo ? '14px 0' : '0',
                    }}
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
                            width: '90vw',
                          }}
                          key={'submenu' + subMenu.linkTo}
                        >
                          <Link
                            to={
                              menu.linkTo === 'pipeline' || menu.linkTo === 'career'
                                ? `/${menu.linkTo}`
                                : `/${menu.linkTo}/${subMenu.linkTo}`
                            }
                            style={{
                              textDecoration: 'none',
                              color: '#EFEFEF',
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '0.2em',
                              borderBottom:
                                location.pathname?.split('/')[2] === subMenu.linkTo ||
                                (menu.linkTo === 'career' && location.pathname === '/career') ||
                                (menu.linkTo === 'pipeline' && location.pathname === '/pipeline')
                                  ? '1px solid #fff'
                                  : '1px solid transparent',
                            }}
                            key={subMenu.linkTo}
                            onClick={() => {
                              if (subMenu.linkTo !== 'pipeline' && subMenu.linkTo !== 'career') {
                                if (subMenu.linkTo === location.pathname.split('/')[2]) {
                                  window.location.reload();
                                }
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
            id="header"
            onMouseLeave={() => {
              (fixedMenu === '' || !fixedMenu) && setCurrentMenu('');
            }}
            onBlur={() => {
              console.log('blur');
              setTimeout(() => {
                setCurrentMenu('');
                setFixedMenu('');
              }, 200);
            }}
            tabIndex={1}
          >
            <BlurTop />
            <HeaderTop>
              <HeaderLogoWrap>
                <Link
                  to="/"
                  onClick={() => {
                    if (location.pathname === '/') window.location.reload();
                  }}
                  style={{ width: '122px' }}
                >
                  <img
                    style={{ cursor: 'pointer', width: window.innerWidth > 1280 ? '122px' : '82px' }}
                    src={process.env.PUBLIC_URL + '/assets/images/header_logo.png'}
                    alt="logo"
                  />
                </Link>
              </HeaderLogoWrap>
              <HeaderNavWrap className="header-navwrap">
                {menuList.map((menu, index) => (
                  <HeaderNavMenuTextWrap
                    key={menu.linkTo + index}
                    onMouseOver={() => {
                      (fixedMenu === '' || !fixedMenu) && setCurrentMenu(menu.linkTo);
                    }}
                    onClick={() => {
                      //menu.linkTo === 'career' || menu.linkTo === 'openinnovation'
                      if (menu.linkTo === 'pipeline' || menu.linkTo === 'career') {
                        if (menu.linkTo === 'career') navigate(`/${menu.linkTo}`);
                        if (currentTab !== menu.linkTo) navigate(`/${menu.linkTo}`);
                        else window.location.reload();
                      } else {
                        if (fixedMenu === menu.linkTo) {
                          setFixedMenu('');
                          setCurrentMenu('');
                        } else {
                          setFixedMenu(menu.linkTo);
                          setCurrentMenu(menu.linkTo);
                        }
                      }
                    }}
                    $isActive={menu.linkTo === currentMenu ? true : false}
                  >
                    <div
                      style={{
                        paddingBottom: '0.6em',
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
            {currentMenu !== 'pipeline' && currentMenu !== 'career' && currentMenu !== '' && (
              <>
                <HeaderBottom
                  className={`header-bottom ${currentMenu}`}
                  // style={{ visibility: currentMenu !== '' ? 'visible' : 'hidden', opacity: currentMenu !== '' ? 1 : 0 }}
                  style={{ visibility: 'visible', opacity: 1 }}
                >
                  <HeaderNavWrap
                    style={{
                      width: 'webkit-fill-available',
                      margin: '0 122px',
                      padding: '0 5em',
                      gap: '5em',
                      justifyContent: 'start',
                    }}
                  >
                    {subMenu[currentMenu]?.map((menu) => (
                      <Link
                        to={`/${currentMenu}/${menu.linkTo}`}
                        style={{ textDecoration: 'none' }}
                        key={menu.linkTo}
                        onClick={() => {
                          if (menu.linkTo === location.pathname.split('/')[2]) {
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '122px',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
          <HeaderLangButton style={{ cursor: 'pointer' }} onClick={handleClick}>
            <img
              style={{ height: window.innerWidth > 1280 ? '20px' : '13px', zIndex: '-1', cursor: 'pointer' }}
              src={lang_globe}
              alt="lang"
            />
            <div style={{ fontSize: window.innerWidth > 1280 ? '18px' : '11px', zIndex: '-1', cursor: 'pointer' }}>
              {language}
            </div>
          </HeaderLangButton>
        </div>
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
          <span
            style={{
              height: '4px',
              width: '4px',
              zIndex: '-1',
              cursor: 'pointer',
              fontSize: '14px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              marginTop: '1px',
            }}
          ></span>
          <span style={{ fontWeight: '400', paddingTop: '0.1em', zIndex: '-1' }}>{language}</span>
        </div>
      </Mobile>
    </>
  );
};
export { LangButton };
