import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import vertical_arrow from '../../../assets/images/vertical_arrow.svg';
import history_cover from './assets/history_cover.png';
import Tab1 from './components/Tab1.js';
import Tab2 from './components/Tab2.js';
import Tab3 from './components/Tab3.js';
import { Container, HomeComponentWrap, TextWrap, Text, Tab, TabItem } from './style';

import { HeadLine, Path, MainImgWrap } from '../../../components/style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';
import Video from '../../../components/Video';

import Language from '../../../atom/Language';
import { useRecoilState } from 'recoil';
import useHistoryList from '../../../hooks/company/useHistoryList';

const History = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const [tabNames, setTabNames] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const { data, isLoading } = useHistoryList(language);
  const [listItems, setListItems] = useState([
    {
      title: '2023',
      content: [
        'Ministry of Health and Welfare ‘2023 Electronic Medicine Technology Development Project’ Selected as a Gamma Frequency Rhythmic Vibroacoustic Device in the field of dementia',
        'Joint development and partnership agreement with Vietnam OPC Pharmaceuticals',
        'AD/PD 2023 Conference to be announced “AR1001 Plasma Biomarker Analysis from Phase 2 Trial of AR1001 in Mild to Moderate Alzheimer’s Disease Patients”',
        'Fujirebio Diagnostics, Inc. Announce Strategic Partnership to Advance Biomarker Development for Alzheimer’s Disease and Neurodegeneration',
        '6th NFAD, Neuroscience Forum on Alzheimer’s Disease, “AR1001 Phase 3 Trial Information & Plasma Biomarker Analysis from Phase 2 Trial of AR1001 in Mild to Moderate Alzheimer’s Disease Patients”',
        'Samjin Pharmaceuticals to domestic phase 3 clinical trial joint progress agreement ceremony. (AR1001)',
        'Selected as KoNECT (Korea National Enterprise for Clinical Trials) ‘Public Interest Clinical Trial Support Project’',
        '41th JP Morgan Healthcare Conference Invitation Participation (AR1001)',
      ],
    },
    {
      title: '2022',
      content: [
        'AR1001 (AD DMT) First patients phase 3 clinical trial, first medication started',
        'Awarded for Venture company Pharma/Biotech Sector Minister of SMEs and Start-ups',
        'AR1001 (AD DMT) Phase 3 IND Approval (US FDA)',
        'Selected as ‘Development and commercialization of wearable-based acoustic vibration devices to improve cognitive impairment in old age in new product development projects with purchase conditions` by Ministry of Science and ICT',
        'Published a research article on mechanisms of action of AR001 in the journal ’Alzheimer’s Research & Therapy’',
        'Selected as ‘Dementia Unit’ at Research driven Hospital Project by Ministry of Health and Welfare',
        'Selected as ‘Preliminary Unicorn’ at K- Unicorn Project by Ministry of Science and ICT',
        'Selected as ‘Bio-medical Al data Collection Leader’ by National Information Society Agency',
        'MOU with Samjin Pharmaceuticals to collaborate for the development of neurodegenerative disease and therapies',
        'AR1001 US FDA EOP2 meeting and Phase 3 Kick-off',
        'Secured workspace at CIC (Cambridge Innovation Center) in Boston, USA',
        'Selected as an awardee of ’K-Blockbuster project to support entering the US market’ by Korea Health Industry Development Institute',
        'AR1004 L/I from KOREA INSTITUTE OF ORIENTAL MEDICINE',
      ],
    },
    {
      title: '2021',
      content: [
        'MOH Minister Award on Health Industry Contribution',
        'Novel Device Designation of a Vibroacoustics for Dementia treatment by MFDS',
        'AR1001 Phase 2 Result Presentation at 14th Clinical Trials on Alzheimer’s Disease (CTAD)',
        'AR1001 Phase 2, 12month treatment complete',
        'Partnership Agreement on the development of new drugs for neurodegenerativedisease with Daegu-Gyeongbuk Medical Innovation Foundation',
      ],
    },
    {
      title: '2020',
      content: [
        'AR1001 Phase 2, 6month treatment complete',
        'MOU with Yonsei Univ Hospital to establish a Research Institute on Dementia',
        'AR1001 Polipharmacological MOA presentation (AAIC)',
        'AR1001 Phase 2 Patient recruitment Completed',
        'AR1002 License In (Columbia University)',
        'MOU of AR1003 (AD treatment) with BioTox Tech and kick-off its development',
        'Established Joint Research Agreement with Korea Institute of Science and Technology (KIST) for Development of Dementia Therapy',
      ],
    },
    {
      title: '2019',
      content: [
        'AR1002 L/I from Columbia University',
        'AR1001 (Alzheimer’s Disease) Therapeutic Agent) Approval for Phase 2Extension Study (USFDA)',
        'AR1001 (VD DMT) Phase 2 IND Approval (US FDA)',
      ],
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(currentTab);
    if (data?.data?.success) {
      const items = data.data.dataList;
      setTabNames([]);
      items.map((item) => {
        setTabNames((prev) => [...prev, `${item.startYear}-${item.endYear}`]);
      });

      setCurrentTab(0);
      console.log('currentTab: ', currentTab);

      console.log('data List: ', data.data.dataList);
    }
  }, [data]);

  return (
    <Container className="container">
      <Header />
      <Path>{`HOME > COMPANY > HISTORY`}</Path>
      <Video page="history" />
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>HISTORY</HeadLine>
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
              HISTORY
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
              Expansion Phase{' '}
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '30px' : '14px'}
              $fontWeight="200"
              $color="#E5E5E5"
              style={{ margin: '0' }}
            >
              Clinical development and Pipeline Extension
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab style={{ padding: '0 7vw' }}>
          {tabNames?.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === index ? true : false}
              onClick={() => {
                setCurrentTab(item);
                console.log(index);
              }}
            >
              {item}
            </TabItem>
          ))}
        </Tab>

        <Tab1 listItems={listItems} />
      </Desktop>
      <Mobile>
        <HomeComponentWrap style={{ padding: '15vh 7vw' }}>
          <TextWrap>
            <Text $fontSize="16px" $fontWeight="300" $color="#939598">
              HISTORY
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
            <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '2rem 0 0 0' }}>
              Expansion Phase{' '}
            </Text>
            <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '0' }}>
              Clinical development and Pipeline Extension
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <Tab style={{ padding: '0 7vw' }}>
          {tabNames?.map((item, index) => (
            <TabItem
              key={index}
              $isActive={currentTab === index ? true : false}
              onClick={() => {
                setCurrentTab(item);
                console.log(index);
              }}
            >
              {item}
            </TabItem>
          ))}
        </Tab>
        <Tab1 listItems={listItems} />
      </Mobile>
      <Footer />
    </Container>
  );
};

export default History;
