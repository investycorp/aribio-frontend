import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import pipeline_cover from './assets/pipeline_cover.png';
import icon_open from './assets/icon_open.svg';
import icon_opentoggle from './assets/icon_opentoggle.svg';
import Modal from './components/Modal';
import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
  Tab,
  TabItem,
  TableWrap,
  TableRowWrap,
  TableContentBox,
  ShootingStarWrap,
  ShootingStar,
  ToggleButton,
  ToggleListWrap,
  ToggleList,
  ContentBoxWrap,
  ContentBox,
  RowWrap,
} from './style';

import { HeadLine, Path, MainImgWrap, ContainerGridLineWrap, GridLineBox } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import usePipelineList from '../../hooks/pipeline/usePipelineList';
import Language from '../../atom/Language';
import { useRecoilState } from 'recoil';

import Video from '../../components/Video';

const PipeLine = () => {
  const [lan] = useRecoilState(Language);
  const { data: list, isLoading } = usePipelineList(lan);
  const [selectedItem, setSelectedItem] = useState(); //mobile
  const [toggleOn, setToggleOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [tableHeader, setTableHeader] = useState([
    <span>
      Drug <br />
      Candidate
    </span>,
    'Target',
    'Modality',
    'Indication',
    'IND-Enabling',
    'Phase 1',
    'Phase 2',
    'Phase 3',
    'Approval',
  ]);
  const [data, setData] = useState([]);
  // const [data, setData] = useState([
  //   {
  //     drugCandidate: 'AR1001',
  //     target: 'PDE5',
  //     modality: 'Small molecule',
  //     indication: [
  //       { section: 'Early Alzheimer’s Disease', phase: 5 },
  //       { section: 'Moderate Alzheimer’s Disease', phase: 4 },
  //       { section: 'Dementia with Lewy Body', phase: 2 },
  //       { section: 'Depression', phase: 2 },
  //     ],
  //     modal: {
  //       title: 'Phase 3 clinical trial',
  //       desciption:
  //         'RIPK1 is a critical signaling protein in the tumor necrosis factor receptor pathway and is a regulator of inflammation and cell death. Increased RIPK1 activity drives inflammation and cell necroptosis thoroughout the body and RIPK1 inhibition has been shown to have beneficial effects in preclinical models of many systemic inflammatory diseases.',
  //     },
  //   },
  // ]);

  useEffect(() => {
    const itemList = [];
    if (list) {
      list.data.dataList.map((item) => {
        itemList.push({
          id: item.id,
          drugCandidate: item.drugCandidate,
          target: item.target,
          modality: item.modality.replace('\\n', ' '),
          indication: item.pipelineIndicationDtoList?.map((indication) => {
            return { id: indication.id, section: indication.indication, phase: indication.phase + 1 };
          }),
          modal: {
            title: item.popUpTitle,
            desciption: item.popUpContents,
          },
        });
      });
    }
    setData(itemList);
    console.log(itemList);
    setSelectedItem(itemList?.[0]);
  }, [list]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = 'unset';
    }
    return () => {
      document.body.style.height = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    //animation starts on scroll event
    window.addEventListener('scroll', () => {
      let fadeIn = document.querySelector('#fadeIn');
      let getY = fadeIn?.getBoundingClientRect().top;
      if (getY && getY < window.innerHeight * 0.5) {
        fadeIn?.classList.add('fadeIn');
      } else {
        fadeIn?.classList.remove('fadeIn');
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          //add animation class if intersecting
          const squares = entry.target.querySelectorAll('.shooting_star');
          if (entry.isIntersecting) {
            for (const square of squares) {
              square?.classList.add('animate');
            }
            return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          for (const square of squares) {
            square?.classList.remove('animate');
          }
        });
      });
      if (document.querySelector('.table')) observer.observe(document.querySelector('.table'));
    });
    return () => {
      window.removeEventListener('scroll', () => {
        console.log('done');
      });
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container').scrollTo(0, 0);
    setSelectedItem(data?.[0]);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('body').style.height = '100vh';
    } else {
      document.querySelector('#modalOff')?.scrollIntoView({});
      document.querySelector('body').style.overflow = 'unset';
      document.querySelector('body').style.height = 'unset';
    }
    return () => {
      document.querySelector('body').style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (toggleOn) {
      document.getElementById('toggleWrap').focus();
    }
  }, [toggleOn]);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToggleOn(false);
    }
  };

  return (
    <Container className="container">
      <MainImgWrap>
        <Video page="pipeline" />
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <Header />
      <Path>{`HOME > PIPELINE`}</Path>

      {!isLoading && (
        <>
          <HomeComponentWrap style={{ height: '100vh', width: '100vw' }}>
            <HeadLine>PIPELINE</HeadLine>
            <img
              style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
              src={vertical_arrow}
              alt="vertical_arrow"
            />
          </HomeComponentWrap>

          <Desktop>
            <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
              <TextWrap>
                <Text $fontSize={window.innerWidth > 1280 ? '26px' : '18px'} $fontWeight="300" $color="#939598">
                  PIPELINE
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
                <Text
                  $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                  $fontWeight="400"
                  $color="#ffffff"
                  style={{ margin: '2rem 0 0 0' }}
                >
                  Pipeline List
                </Text>
              </TextWrap>
              <TableWrap className="table">
                <TableRowWrap className="th">
                  {tableHeader?.map((item, index) => (
                    <TableContentBox key={index}>{item}</TableContentBox>
                  ))}
                </TableRowWrap>
                {data?.map((item, index) => (
                  <TableRowWrap className="tr" key={'tableRow' + index}>
                    <TableContentBox style={{ fontWeight: '600' }}>
                      {item?.drugCandidate}
                      <img
                        style={{ padding: '1em', cursor: 'pointer' }}
                        src={icon_open}
                        alt="modal_open"
                        onClick={() => {
                          setIsModalOpen(true);
                          setModalItem({ ...item.modal, item: item?.drugCandidate });
                        }}
                      />
                    </TableContentBox>
                    <TableContentBox>{item.target}</TableContentBox>
                    <TableContentBox>{item.modality}</TableContentBox>
                    <TableContentBox className="indication" style={{ padding: '0' }}>
                      {item?.indication.map((indication, index) => (
                        <div key={'indication' + index}>
                          <div className="section" key={indication?.section + index}>
                            {indication?.section}
                          </div>
                          <div className="phase" key={'phase' + index}>
                            <span>
                              <ShootingStarWrap className="shooting_star_wrap">
                                <hr style={{ width: '100%', opacity: '0.4' }} />
                                <ShootingStar className="shooting_star" $phase={indication?.phase} />
                              </ShootingStarWrap>
                            </span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      ))}
                    </TableContentBox>
                  </TableRowWrap>
                ))}
              </TableWrap>
            </HomeComponentWrap>
            {isModalOpen && (
              <Modal
                setIsModalOpen={setIsModalOpen}
                item={modalItem?.item}
                title={modalItem?.title}
                content={modalItem?.desciption}
              />
            )}
          </Desktop>
          <Mobile>
            <HomeComponentWrap style={{ padding: '5vh 5vw', marginBottom: '10em' }}>
              <TextWrap>
                <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                  PIPELINE
                </Text>
                <div
                  id="modalOff"
                  style={{
                    width: '50%',
                    alignSelf: 'flex-start',
                    height: '60px',
                    borderRight: '1px solid #ffffff',
                    margin: '2rem 0',
                  }}
                ></div>
                <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                  Pipeline List
                </Text>
              </TextWrap>
              <div style={{ width: '100%' }} id="fadeIn">
                <div
                  onBlur={(e) => {
                    console.log('blur');
                    handleBlur(e);
                  }}
                  tabIndex={1}
                  style={{ width: '100%', position: 'relative' }}
                >
                  <ToggleButton
                    onClick={() => {
                      setToggleOn(!toggleOn);
                    }}
                    style={{}}
                  >
                    <span style={{ fontSize: '20px', fontWeight: '600', color: '#E8E8E8' }}>Drug Candidate</span>
                    <img
                      src={icon_opentoggle}
                      alt="open_toggle"
                      style={{ transform: toggleOn ? 'rotate(180deg)' : '' }}
                    />
                  </ToggleButton>

                  <ToggleListWrap $toggleOn={toggleOn}>
                    {data?.map((item, index) => (
                      <ToggleList
                        key={'toggle' + item?.drugCandidate + index}
                        style={{ fontSize: '18px', fontWeight: '300' }}
                        onClick={async () => {
                          await setSelectedItem(item);
                          setToggleOn(false);
                          window.scrollTo(
                            0,
                            document.querySelector('#toggleWrap')?.offsetTop + window.innerHeight * 0.3,
                          );
                        }}
                      >
                        {item?.drugCandidate}
                      </ToggleList>
                    ))}
                  </ToggleListWrap>
                </div>

                <ContentBoxWrap>
                  <ContentBox style={{ paddingBottom: '3rem', borderBottom: '1px solid #fff' }}>
                    <RowWrap style={{ padding: '0 0 0 1em' }}>
                      <span>
                        <span style={{ marginRight: '1em' }}>•</span>
                        <span style={{ fontSize: '16px', fontWeight: '300' }}>{selectedItem?.drugCandidate}</span>
                      </span>

                      <img
                        style={{ padding: '0', cursor: 'pointer', height: '24px' }}
                        src={icon_open}
                        alt="modal_open"
                        onClick={() => {
                          setIsModalOpen(true);
                          setModalItem({ ...selectedItem?.modal, item: selectedItem?.drugCandidate });
                          setToggleOn(false);
                        }}
                      />
                    </RowWrap>
                    <RowWrap style={{ padding: '0' }}>
                      <span style={{ width: '100%', padding: '0 0 0 2em', fontWeight: '200' }}>
                        <span style={{ marginRight: '1em', fontSize: '10px' }}>•</span>
                        <span style={{ fontSize: '16px', fontWeight: '300', padding: '0' }}>
                          Taget - {selectedItem?.target}
                        </span>
                      </span>
                    </RowWrap>
                    <RowWrap style={{ padding: '0' }}>
                      <span style={{ width: '100%', padding: '0 0 0 2em', fontWeight: '200' }}>
                        <span style={{ marginRight: '1em', fontSize: '10px' }}>•</span>
                        <span style={{ fontSize: '16px', fontWeight: '300', width: '100%', padding: '0' }}>
                          Mordality - {selectedItem?.modality}
                        </span>
                      </span>
                    </RowWrap>
                  </ContentBox>
                  <ContentBox className="table" style={{ padding: '1rem 0', gap: '1.5rem' }}>
                    <RowWrap style={{ backgroundColor: 'rgba(177,177,177,0.2)', padding: '0.5rem 1rem' }}>
                      Indication
                    </RowWrap>
                    {selectedItem?.indication?.map((indication, index) => (
                      <ContentBox
                        key={'mobile_indication' + index}
                        style={{ padding: '0', fontWeight: '100', gap: '0.5rem', alignItems: 'stretch' }}
                      >
                        <span>{indication?.section}</span>
                        <span style={{ width: '100%' }}>
                          <ShootingStarWrap className="shooting_star_wrap">
                            <hr style={{ width: '100%', opacity: '0.4', borderTop: '1px dotted' }} />
                            <ShootingStar
                              className="shooting_star"
                              style={{
                                height: '6px',
                                width: '6px',
                              }}
                              $phase={indication?.phase}
                            />
                          </ShootingStarWrap>
                        </span>
                      </ContentBox>
                    ))}
                  </ContentBox>
                  <ContentBox
                    className="gridline"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '1rem 0' }}
                  >
                    <RowWrap>
                      <hr />
                      <span>
                        IND- <br />
                        Enabling
                      </span>
                    </RowWrap>
                    <RowWrap>
                      <hr />
                      <span>
                        Phase <br />1
                      </span>
                    </RowWrap>
                    <RowWrap>
                      <hr />
                      <span>
                        Phase
                        <br />2
                      </span>
                    </RowWrap>
                    <RowWrap>
                      <hr />
                      <span>
                        Phase <br />3
                      </span>
                    </RowWrap>
                    <RowWrap>
                      <hr />
                      <span>Approval</span>
                    </RowWrap>
                  </ContentBox>
                </ContentBoxWrap>
              </div>
            </HomeComponentWrap>
            {isModalOpen && (
              <Modal
                setIsModalOpen={setIsModalOpen}
                item={modalItem?.item}
                title={modalItem?.title}
                content={modalItem?.desciption}
              />
            )}
          </Mobile>
          <Footer />
        </>
      )}
    </Container>
  );
};

export default PipeLine;
