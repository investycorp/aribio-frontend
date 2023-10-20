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
  MainImgWrap,
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
  ContainerGridLineWrap,
  GridLineBox,
  ContentBoxWrap,
  ContentBox,
  RowWrap,
} from './style';

import { HeadLine, Path } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

const PipeLine = () => {
  const [selectedItem, setSelectedItem] = useState('AR1001');
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
  const [data, setData] = useState([
    {
      drugCandidate: 'AR1001',
      target: 'PDE5',
      modality: 'Small molecule',
      indication: [
        { section: 'Early Alzheimer’s Disease', phase: 5 },
        { section: 'Moderate Alzheimer’s Disease', phase: 4 },
        { section: 'Dementia with Lewy Body', phase: 2 },
        { section: 'Depression', phase: 2 },
      ],
      modal: {
        title: 'Phase 3 clinical trial',
        desciption:
          'RIPK1 is a critical signaling protein in the tumor necrosis factor receptor pathway and is a regulator of inflammation and cell death. Increased RIPK1 activity drives inflammation and cell necroptosis thoroughout the body and RIPK1 inhibition has been shown to have beneficial effects in preclinical models of many systemic inflammatory diseases.',
      },
    },
    {
      drugCandidate: 'AR1002',
      target: 'PDE5',
      modality: 'Small molecule',
      indication: [{ section: 'Alzheimer’s Disease', phase: 5 }],
    },
    {
      drugCandidate: 'AR1003',
      target: 'PDE5 + Nrl2',
      modality: 'Combination Therapy',
      indication: [{ section: 'Prodromal Alzheimer’s Disease', phase: 3 }],
    },
  ]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    //animation starts on scroll event
    window.addEventListener('scroll', () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const squares = entry.target.querySelectorAll('.shooting_star');
          if (entry.isIntersecting) {
            for (const square of squares) {
              square.classList.add('animate');
            }
            return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          for (const square of squares) {
            square.classList.remove('animate');
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
    // get data from api
    // setData
    setSelectedItem(data?.[0]);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector('body').style.overflow = 'hidden';
    } else document.querySelector('body').style.overflow = 'unset';
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
      <ContainerGridLineWrap>
        <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.2)' }} />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Header />
      <Path>{`HOME > PIPELINE`}</Path>
      <MainImgWrap $src={pipeline_cover}>
        <HeadLine>PIPELINE</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </MainImgWrap>
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
              {tableHeader.map((item, index) => (
                <TableContentBox key={index}>{item}</TableContentBox>
              ))}
            </TableRowWrap>
            {data.map((item, index) => (
              <TableRowWrap className="tr" key={'tableRow' + index}>
                <TableContentBox>
                  {item.drugCandidate}
                  <img
                    style={{ padding: '1em', cursor: 'pointer' }}
                    src={icon_open}
                    alt="modal_open"
                    onClick={() => {
                      setIsModalOpen(true);
                      setModalItem({ ...item.modal, item: item.drugCandidate });
                    }}
                  />
                </TableContentBox>
                <TableContentBox>{item.target}</TableContentBox>
                <TableContentBox>{item.modality}</TableContentBox>
                <TableContentBox className="indication" style={{ padding: '0' }}>
                  {item.indication.map((indication, index) => (
                    <div key={'indication' + index}>
                      <div className="section" key={indication.section + index}>
                        {indication.section}
                      </div>
                      <div className="phase" key={'phase' + index}>
                        <span>
                          <ShootingStarWrap className="shooting_star_wrap">
                            <hr style={{ width: '100%', opacity: '0.4' }} />
                            <ShootingStar className="shooting_star" $phase={indication.phase} />
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
            item={modalItem.item}
            title={modalItem.title}
            content={modalItem.desciption}
          />
        )}
      </Desktop>
      <Mobile>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap>
            <Text $fontSize="16px" $fontWeight="300" $color="#939598">
              PIPELINE
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '8em',
                borderRight: '1px solid #ffffff',
                margin: '2rem 0',
              }}
            ></div>
            <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
              Pipeline List
            </Text>
          </TextWrap>
          <div
            id="toggleWrap"
            onBlur={(e) => {
              console.log('blur');
              handleBlur(e);
            }}
            tabIndex={1}
            style={{ width: '84vw', position: 'relative' }}
          >
            <ToggleButton
              onClick={() => {
                console.log(toggleOn);
                setToggleOn(!toggleOn);
              }}
            >
              <span>Drug Candidate</span>
              <img src={icon_opentoggle} alt="open_toggle" style={{ transform: toggleOn ? 'rotate(180deg)' : '' }} />
            </ToggleButton>

            <ToggleListWrap $toggleOn={toggleOn}>
              {data.map((item, index) => (
                <ToggleList
                  key={'toggle' + item.drugCandidate + index}
                  onClick={async () => {
                    await setSelectedItem(item);
                    setToggleOn(false);
                    window.scrollTo(0, document.querySelector('#toggleWrap')?.offsetTop + window.innerHeight * 0.3);
                  }}
                >
                  {item.drugCandidate}
                </ToggleList>
              ))}
            </ToggleListWrap>
          </div>

          <ContentBoxWrap>
            <ContentBox style={{ paddingBottom: '3rem', borderBottom: '1px solid #fff' }}>
              <RowWrap>
                <span>
                  <span style={{ marginRight: '1rem' }}>•</span>
                  <span>{selectedItem.drugCandidate}</span>
                </span>

                <img
                  style={{ padding: '1em', cursor: 'pointer' }}
                  src={icon_open}
                  alt="modal_open"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalItem({ ...selectedItem.modal, item: selectedItem.drugCandidate });
                    setToggleOn(false);
                  }}
                />
              </RowWrap>
              <RowWrap>
                <span style={{ padding: '0 0.5rem', fontWeight: '200' }}>
                  <span style={{ marginRight: '1rem' }}>•</span>
                  <span>Taget - {selectedItem.target}</span>
                </span>
              </RowWrap>
              <RowWrap>
                <span style={{ padding: '0 0.5rem', fontWeight: '200' }}>
                  <span style={{ marginRight: '1rem' }}>•</span>
                  <span>Mordality - {selectedItem.modality}</span>
                </span>
              </RowWrap>
            </ContentBox>
            <ContentBox className="table" style={{ padding: '1rem 0', gap: '1.5rem' }}>
              <RowWrap style={{ backgroundColor: 'rgba(177,177,177,0.2)', padding: '0.5rem 1rem' }}>Indication</RowWrap>
              {selectedItem?.indication?.map((indication, index) => (
                <ContentBox
                  key={'mobile_indication' + index}
                  style={{ padding: '0', fontWeight: '100', gap: '0.5rem', alignItems: 'stretch' }}
                >
                  <span>{indication.section}</span>
                  <span style={{ width: '100%' }}>
                    <ShootingStarWrap className="shooting_star_wrap">
                      <hr style={{ width: '100%', opacity: '0.4', borderTop: '1px dotted' }} />
                      <ShootingStar
                        className="shooting_star"
                        style={{
                          height: '6px',
                          width: '6px',
                        }}
                        $phase={indication.phase}
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
        </HomeComponentWrap>
        {isModalOpen && (
          <Modal
            setIsModalOpen={setIsModalOpen}
            item={modalItem.item}
            title={modalItem.title}
            content={modalItem.desciption}
          />
        )}
      </Mobile>
      <Footer />
    </Container>
  );
};

export default PipeLine;
