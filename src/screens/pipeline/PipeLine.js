import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import pipeline_cover from './assets/pipeline_cover.png';
import icon_open from './assets/icon_open.svg';
import Modal from './components/Modal';
import {
  Container,
  MainImgWrap,
  Path,
  HeadLine,
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
} from './style';

const PipeLine = () => {
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);

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

  return (
    <Container className="container">
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
      <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
        <TextWrap>
          <Text $fontSize="26px" $fontWeight="300" $color="#939598">
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
          <Text $fontSize="50px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
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
            <TableRowWrap className="tr" key={index}>
              <TableContentBox>
                {item.drugCandidate}
                <img
                  style={{ padding: '1em' }}
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
                          <ShootingStar
                            className="shooting_star"
                            style={{
                              height: '8px',
                              width: '2px',
                            }}
                            $phase={indication.phase}
                          />
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
      <Footer />
    </Container>
  );
};

export default PipeLine;
