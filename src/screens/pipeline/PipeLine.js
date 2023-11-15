import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import icon_open from './assets/icon_open.svg';
import icon_opentoggle from './assets/icon_opentoggle.svg';
import Modal from './components/Modal';
import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
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
  const [scrollPosition, setScrollPosition] = useState(0);
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
    //animation starts on scroll event

    document.addEventListener('scroll', () => {
      //add fadeIn animation
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
    document.querySelector('.container')?.scrollTo(0, 0);
    setSelectedItem(data?.[0]);
  }, []);

  useEffect(() => {
    handleScroll();
  }, [isModalOpen]);

  useEffect(() => {
    //mobile toggle focus
    if (toggleOn) {
      // document.getElementById('toggleWrap')?.focus();
    }
  }, [toggleOn]);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToggleOn(false);
    }
  };

  const handleScroll = async () => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
    }
  };

  return (
    <Container className="container">
      <MainImgWrap>
        <Video
          page="pipeline"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0601PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1500PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2401PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{ opacity: '0.5' }}>{`HOME > `}</span>
        PIPELINE
      </Path>

      <HomeComponentWrap style={{ height: '100vh', width: '100vw' }}>
        <HeadLine>PIPELINE</HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: '5vw',
            height: window.innerWidth > 1280 ? '60px' : '36px',
          }}
        />
      </HomeComponentWrap>

      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>

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
                Our Path to Pioneering Treatments for
                <br />
                Neurodegenerative Diseases,
                <br />
                Offering Innovative Therapies for a Brighter Future
                <br />
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
                    <span style={{ padding: '0.5em', cursor: 'pointer' }}>{item?.drugCandidate}</span>
                    <img
                      style={{ padding: '0.5em', cursor: 'pointer' }}
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
                    {item?.indication.map((indication_item, index) => (
                      <div key={'indication' + index}>
                        <div
                          className="section"
                          key={indication_item?.section + index}
                          style={{ borderBottom: item?.indication.length - 1 === index && 'none' }}
                        >
                          {indication_item?.section}
                        </div>
                        <div
                          className="phase"
                          key={'phase' + index}
                          style={{ borderBottom: item?.indication.length - 1 === index && 'none' }}
                        >
                          <span>
                            <ShootingStarWrap className="shooting_star_wrap">
                              <hr style={{ width: '100%', opacity: '0.4', border: 'dotted 1px' }} />
                              <ShootingStar className="shooting_star" $phase={indication_item?.phase} />
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
              <Text $fontSize="23px" $fontWeight="500" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
                Our Path to Pioneering
                <br />
                Treatments for
                <br />
                Neurodegenerative Diseases,
                <br />
                Offering Innovative Therapies
                <br />
                for a Brighter Future
                <br />
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
                  <span style={{ fontSize: '20px', fontWeight: '500', color: '#E8E8E8' }}>Drug Candidate</span>
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
                      style={{ fontSize: '18px' }}
                      onClick={async () => {
                        await setSelectedItem(item);
                        setToggleOn(false);
                        window.scrollTo(
                          0,
                          document.getElementById('toggleWrap')
                            ? document.getElementById('toggleWrap').scrollIntoView()
                            : window.innerHeight * 1.3,
                        );
                      }}
                    >
                      {item?.drugCandidate}
                    </ToggleList>
                  ))}
                </ToggleListWrap>
              </div>

              <ContentBoxWrap>
                <ContentBox style={{ padding: '28px 0.5em', borderBottom: '1px solid #fff', gap: '18px' }}>
                  <RowWrap style={{ padding: '0 0 0 1em' }}>
                    <span>
                      <span style={{ marginRight: '1em' }}>•</span>
                      <span style={{ fontSize: '16px', fontWeight: '500' }}>{selectedItem?.drugCandidate}</span>
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
                  <ContentBox
                    className="gridline"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      padding: '1rem 0',
                      margin: '0 0 60px 0',
                      fontSize: '13px',
                      fontWeight: '300',
                    }}
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
                  {selectedItem?.indication?.map((indication, index) => (
                    <ContentBox
                      key={'mobile_indication' + index}
                      style={{ padding: '0', fontWeight: '100', gap: '0.5rem', alignItems: 'stretch' }}
                    >
                      <span>{indication?.section}</span>
                      <span style={{ width: '100%' }}>
                        <ShootingStarWrap className="shooting_star_wrap">
                          <hr style={{ width: '100%', opacity: '0.4', border: '1px dotted' }} />
                          <ShootingStar
                            className="shooting_star animation_mobile"
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
      </div>
      <Footer />
    </Container>
  );
};

export default PipeLine;
