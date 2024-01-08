import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import Language from '../atom/Language';
import WindowSize from '../atom/MediaQuery';
import {Desktop, Mobile} from '../utils/MediaQuery';
import useFooter from '../hooks/footer/useFooter';

import lang_globe from '../assets/images/lang_globe.svg';
import plus from '../assets/images/plus.svg';
import minus from '../assets/images/minus_menu.svg';
import toggle from '../assets/images/toggle.svg';

import {t} from 'i18next';
import i18n from '../locales/i18n';
import FirstLoad from '../atom/FirstLoad';

const Header = () => {
  const [language, setLanguage] = useRecoilState(Language);

  const menuList = [
    {title: t('header.menu.company'), linkTo: 'company'},
    {title: t('header.menu.ourapproach'), linkTo: 'ourapproach'},
    {title: t('header.menu.pipeline'), linkTo: 'pipeline'},
    {title: t('header.menu.irpr'), linkTo: 'irpr'},
    {title: t('header.menu.career'), linkTo: 'career'},
    {title: t('header.menu.contact'), linkTo: 'contact'},
    {title: t('header.menu.innovation'), linkTo: 'openinnovation'},
  ];
  const subMenu = {
    company: [
      {title: t('header.subMenu.company.aboutus'), linkTo: 'aboutus'},
      {title: t('header.subMenu.company.history'), linkTo: 'history'},
      {title: t('header.subMenu.company.ceomessage'), linkTo: 'ceomessage'},
      {title: t('header.subMenu.company.ci'), linkTo: 'ci'},
      // language === 'KOR' ? {title: '윤리경영', linkTo: 'moral'} : {},
    ],
    ourapproach: [
      {title: t('header.subMenu.ourapproach.pp'), linkTo: 'poly-pharmacology'},
      {title: t('header.subMenu.ourapproach.ai'), linkTo: 'aiplatform'},
      {title: t('header.subMenu.ourapproach.publication'), linkTo: 'publications'},
    ],
    pipeline: [{title: t('header.subMenu.pipeline.pipeline'), linkTo: 'pipeline'}],
    career: [{title: t('header.subMenu.career.career'), linkTo: 'career/'}],
    contact: [
      {title: t('header.subMenu.contact.partner'), linkTo: 'partner'},
      {title: t('header.subMenu.contact.contactus'), linkTo: 'contactus'},
    ],
    openinnovation: [
      {title: t('header.subMenu.openinnovation.openinnovation'), linkTo: 'openinnovation'},
      {title: t('header.subMenu.openinnovation.health'), linkTo: 'digitalhealth'},
      {title: t('header.subMenu.openinnovation.memore'), linkTo: 'memoreproject'},
    ],
    irpr: [
      {title: t('header.subMenu.irpr.notice'), linkTo: 'notice/'},
      {title: t('header.subMenu.irpr.press'), linkTo: 'pressrelease/'},
      {title: t('header.subMenu.irpr.media'), linkTo: 'mediakit'},
    ],
  };

  const [fixedMenu, setFixedMenu] = useState('');
  const [navBarwidth, setNavBarWidth] = useState(0);
  const [currentMenu, setCurrentMenu] = useState('');
  const [currentTab, setCurrentTab] = useState('');
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useRecoilState(WindowSize);
  const {data, isLoading} = useFooter(language);
  const [logo, setLogo] = useState('');
  const [offset, setOffset] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data?.success) {
      setLogo(data?.data?.data?.fileDto?.fileUrl);
    }
  }, [data]);

  useEffect(() => {
    setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
    setCurrentTab(location.pathname.split('/')[1]);
  }, [document.getElementsByClassName('header-navwrap')[0]?.clientWidth, location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 0 && header) {
        header.style.opacity = '1';
      } else {
        // header.style.opacity = '0';
      }
    });

    window.addEventListener('resize', () => {
      setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
      setWindowSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setNavBarWidth(document.getElementsByClassName('header-navwrap')[0]?.clientWidth);
        setWindowSize(window.innerWidth);
      });
      window.removeEventListener('scroll', () => {
        setScrollY(window.scrollY);
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
      <Desktop>
        <>
          <HeaderContainer
            id="header"
            $home={location.pathname === '/' ? true : false}
            onMouseLeave={() => {
              (fixedMenu === '' || !fixedMenu) && setCurrentMenu('');
            }}
            onBlur={() => {
              setTimeout(() => {
                setCurrentMenu('');
                setFixedMenu('');
              }, 100);
            }}
            tabIndex={1}>
            <BlurTop />
            <HeaderTop>
              <HeaderLogoWrap>
                <Link
                  to="/"
                  onClick={() => {
                    if (location.pathname === '/') window.location.reload();
                  }}
                  style={{width: '122px'}}>
                  <img
                    style={{cursor: 'pointer', width: window.innerWidth > 1280 ? '122px' : '82px'}}
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </HeaderLogoWrap>
              <HeaderNavWrap className="header-navwrap">
                {menuList.map((menu, index) => (
                  <HeaderNavMenuTextWrap
                    key={menu.linkTo + index}
                    onMouseOver={e => {
                      if (fixedMenu === '' || !fixedMenu) {
                        setCurrentMenu(menu.linkTo);
                        if (menu.linkTo === 'openinnovation') {
                          setOffset(window.innerWidth - e.target.offsetLeft - e.target.offsetWidth);
                        } else {
                          setOffset(e.target.offsetLeft);
                        }
                      }
                    }}
                    onClick={e => {
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

                          if (menu.linkTo === 'openinnovation') {
                            setOffset(window.innerWidth - e.target.offsetLeft - e.target.offsetWidth);
                          } else {
                            setOffset(e.target.offsetLeft);
                          }
                        }
                      }
                    }}
                    $isActive={menu.linkTo === currentMenu ? true : false}
                    style={{position: 'relative'}}>
                    <div
                      style={{
                        paddingBottom: 8,
                        borderBottom:
                          currentTab === menu.linkTo && currentTab !== currentMenu
                            ? '2px solid #ffffff'
                            : '2px solid transparent',
                        zIndex: '-1',
                        position: 'relative',
                      }}>
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
                  style={{visibility: 'visible', opacity: 1, padding: '0'}}>
                  <div style={{position: 'relative', width: '100%', height: 'fit-content', display: 'flex'}}>
                    <HeaderNavWrap
                      id="header-navwrap"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 'fit-content',
                        height: 'auto',
                        // margin: '0 122px',
                        margin: '0',
                        padding: '0',
                        justifyContent: currentMenu !== 'openinnovation' ? 'start' : 'end',
                        gap: window.innerWidth > 1400 ? '105px' : window.innerWidth > 1280 ? '80px' : '50px',
                        position: 'absolute',
                        top: '-0.5em',
                        left: currentMenu !== 'openinnovation' ? `${offset}px` : 'unset',
                        right: currentMenu === 'openinnovation' ? `${offset}px` : 'unset',
                      }}>
                      {subMenu[currentMenu]?.map(menu => (
                        <Link
                          to={`/${currentMenu}/${menu.linkTo}`}
                          style={{textDecoration: 'none'}}
                          key={menu.linkTo}
                          onClick={() => {
                            if (menu.linkTo === location.pathname.split('/')[2]) {
                              window.location.reload();
                            }
                          }}>
                          <HeaderNavMenuTextWrap>{menu.title}</HeaderNavMenuTextWrap>
                        </Link>
                      ))}
                    </HeaderNavWrap>
                  </div>
                </HeaderBottom>
              </>
            )}
          </HeaderContainer>
        </>
      </Desktop>

      <Mobile>
        <HeaderContainer
          style={{display: 'grid', width: '100vw'}}
          tabIndex={1}
          onBlur={async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
            setIsToggleOpen(false);
            setSubMenuOpen('');
          }}>
          <HeaderTop style={{backgroundColor: '#121212'}}>
            <HeaderLogoWrap>
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === '/') window.location.reload();
                }}>
                <img
                  style={{cursor: 'pointer', width: '74px', paddingTop: '0.5em'}}
                  // src={process.env.PUBLIC_URL + '/assets/images/aribiologo_white.png'}
                  src={logo}
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
              }}>
              {<LangButton />}
              {!isToggleOpen ? (
                <Image
                  src={toggle}
                  alt="toggle_menu"
                  style={{margin: '1.5em 0', height: '24px', width: '24px'}}
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                />
              ) : (
                <Image
                  src={process.env.PUBLIC_URL + '/assets/icons/closeMenu.svg'}
                  alt="toggle_close"
                  style={{margin: '1.5em 0', height: '24px', width: '24px'}}
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                />
              )}
            </div>
          </HeaderTop>

          {isToggleOpen && (
            <HeaderNavWrap
              className="header-navwrap"
              $isSmall={window.innerHeight < 780}
              style={{backgroundColor: '#121212'}}>
              {menuList.map((menu, index) => (
                <HeaderNavMenuTextWrap
                  key={menu.linkTo + index}
                  onClick={() => {
                    if (menu.linkTo === 'career') {
                      navigate('/career');
                      window.location.reload();
                    }
                    if (menu.linkTo === 'pipeline') {
                      if (currentTab !== menu.linkTo) navigate(`/${menu.linkTo}`);
                      else window.location.reload();
                    }
                  }}
                  $isActive={menu.linkTo === currentMenu ? true : false}>
                  <div
                    style={{
                      height: '56px',
                      cursor: 'pointer',
                      padding: '0',
                      margin: '0',
                    }}
                    onClick={() => {
                      subMenuOpen === menu.linkTo ? setSubMenuOpen('') : setSubMenuOpen(menu.linkTo);
                    }}>
                    <span style={{fontSize: '20px', fontWeight: '300', color: '#BFBFBF', zIndex: '-1'}}>
                      {menu.title.toUpperCase()}
                    </span>
                    {menu.linkTo !== 'career' && menu.linkTo !== 'pipeline' && subMenuOpen === menu.linkTo ? (
                      <Image style={{zIndex: '-1', height: '18px', width: '18px'}} src={minus} alt="minus" />
                    ) : (
                      menu.linkTo !== 'career' &&
                      menu.linkTo !== 'pipeline' && (
                        <Image style={{zIndex: '-1', height: '18px', width: '18px'}} src={plus} alt="open" />
                      )
                    )}
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      width: '100%',
                      alignItems: 'stretch',
                      gap: '24px',
                      marginBottom: '0',
                      padding:
                        menu.linkTo !== 'career' && menu.linkTo !== 'pipeline' && subMenuOpen === menu.linkTo
                          ? '14px 0'
                          : '0',
                    }}>
                    {menu.linkTo !== 'career' &&
                      menu.linkTo !== 'pipeline' &&
                      subMenuOpen === menu.linkTo &&
                      subMenu[menu.linkTo]?.map(subMenu => (
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
                          key={'submenu' + subMenu.linkTo}>
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
                              padding: '0.2em 0',
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
                            }}>
                            <span style={{fontSize: '18px', color: '#EFEFEF'}}>{subMenu.title}</span>
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
    </>
  );
};

export default Header;

export const LangButton = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const [firstLoad, setFirstLoad] = useRecoilState(FirstLoad);
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const pathSegments = location.pathname.split('/').filter(segment => segment);

  //   if (pathSegments.length > 2) {
  //     const newPath = `/${pathSegments[0]}/${pathSegments[1]}`;
  //     navigate(newPath);
  //   } else if (pathSegments.length === 1) {
  //     navigate(`/${pathSegments[0]}`);
  //   }
  // }, [language]);

  const handleClick = () => {
    const newLang = language === 'ENG' ? 'KOR' : 'ENG';
    setLanguage(newLang);
    i18n.changeLanguage(newLang === 'ENG' ? 'en' : 'ko');
    localStorage.setItem('language', newLang);
    window.location.reload();
  };

  useEffect(() => {
    if (firstLoad) {
      let lang = localStorage.getItem('language');
      if (!lang) {
        lang = window.navigator.language.includes('en') ? 'ENG' : 'KOR';
        localStorage.setItem('language', lang);
      }
      setLanguage(lang);
      i18n.changeLanguage(lang === 'ENG' ? 'en' : 'ko');
      setFirstLoad(false);
    }
  }, [firstLoad]);

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
            marginBottom: window.innerWidth > 1280 ? '12px' : '2px',
          }}>
          <HeaderLangButton style={{cursor: 'pointer'}} onClick={handleClick}>
            <img
              style={{
                height: window.innerWidth > 1400 ? '20px' : window.innerWidth > 1280 ? '15px' : '13px',
                zIndex: '-1',
                cursor: 'pointer',
              }}
              src={lang_globe}
              alt="lang"
            />
            <div
              style={{
                fontSize: window.innerWidth > 1400 ? '18px' : window.innerWidth > 1280 ? '15px' : '11px',
                zIndex: '-1',
                cursor: 'pointer',
              }}>
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
          }}>
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
          />
          <span style={{fontWeight: '400', paddingTop: '0.1em', zIndex: '-1'}}>{language}</span>
        </div>
      </Mobile>
    </>
  );
};

const HeaderContainer = styled.div.attrs(props => ({
  $home: props.$home,
}))`
  opacity: ${props => (props.$home ? '0' : '1')};
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
    background-color: transparent;
  }
  @media screen and (max-width: 900px) {
    background-color: #121212;
    opacity: 1;
  }
`;

const HeaderTop = styled.div`
  position: relative;
  margin: 0;
  padding: 0 7vw;
  width: 100%;
  height: 118px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(10, 10, 10, 0.5);
  @media screen and (max-width: 1280px) {
    height: 74px;
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
  height: 118px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  @media screen and (max-width: 1280px) {
    height: 74px;
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

const HeaderNavWrap = styled.div.attrs(props => ({
  $offset: props.$offset,
}))`
  padding: 0;
  width: -webkit-fill-available;
  padding: ${props => (props.$offset ? `0 calc(9.63em + ${props.$offset}px)` : '0 9.63em')};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 118px;

  @media screen and (max-width: 1600px) {
    padding: 0 5em;
  }

  @media screen and (max-width: 1280px) {
    padding: ${props => (props.$offset ? `0 calc(2rem + ${props.$offset}px)` : '0 2rem')};
    height: 74px;
  }

  @media screen and (max-width: 900px) {
    display: inline-block;
    width: 100vw;
    align-items: start;
    justify-content: start;
    padding: 0 5vw;
    gap: 0;
    height: 100vh;
    max-height: calc(100vh - 97px);
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
  /* top: 2px; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: ${props => (props.$isActive ? '2px solid #ffffff' : '2px solid transparent')};
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
    font-size: 17px;
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
  height: 88px;
  position: fixed;
  text-decoration: none;
  padding: 0 7vw;
  top: 116px;
  left: 0;
  display: flex;
  opacity: 0;
  visibility: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  background-color: rgba(10, 10, 10, 0.5);
  border-top: 2px solid rgba(93, 93, 93, 0.8);
  cursor: default;
  transition: opacity 0.5s ease-in-out;
  @media screen and (max-width: 1280px) {
    top: 72px;
    height: 56px;
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
