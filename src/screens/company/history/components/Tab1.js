import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import sidebar from '../assets/sidebar.svg';
import whitedot from '../assets/whitedot.svg';
import graydot from '../assets/graydot.svg';

const HomeComponentWrap = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-content: center;
  align-items: start;
  background-color: transparent;
  padding: 0 20vw 10vh 7vw;
  z-index: 10;
`;

const Text = styled.div`
  width: fit-content;
  font-size: ${(props) => (props.$isActive ? '50px' : '24px')};
  font-weight: ${(props) => (props.$isActive ? '500' : '300')};
  color: ${(props) => (props.$isActive ? '#ffffff' : '#868686')};
  line-height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: ${(props) => (props.$align ? props.$align : 'start')};
  transition: all 0.2s linear;
  cursor: pointer;
`;

const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 2rem;
  background-color: transparent;
  position: relative;
  width: 100%;
  height: fit-content;
`;
const GridBoxContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  gap: 6.5em;
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 50%;
  border: ${(props) => (props.$isActive ? '2px solid #848484' : '2px solid transparent')};
  transition: border 0.3s ease-in-out;
`;

const DescriptionWrap = styled.ul`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 2em;
  background-color: transparent;
  padding: 1.5em;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1em;
  color: ${(props) => (props.$isActive ? '#ffffff' : '#707070')};

  &:last-child {
    margin-bottom: 55vh;
  }
`;
const DescriptionItem = styled.li`
  width: 100%;
  height: fit-content;
  text-align: left;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.5em;
  list-style: disc;
  list-style-position: outside;
`;

const Tab1 = () => {
  const [tabNames, setTabNames] = useState(['2023', '2022', '2021', '2020', '2019']);
  const refs = useRef(Array(tabNames.length).fill(React.createRef()));
  const [currentTab, setCurrentTab] = useState('2023');
  const [scrollTab, setScrollTab] = useState('2023');
  const [historyContents, setHistoryContents] = useState([
    {
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
      content: [
        'MOH Minister Award on Health Industry Contribution',
        'Novel Device Designation of a Vibroacoustics for Dementia treatment by MFDS',
        'AR1001 Phase 2 Result Presentation at 14th Clinical Trials on Alzheimer’s Disease (CTAD)',
        'AR1001 Phase 2, 12month treatment complete',
        'Partnership Agreement on the development of new drugs for neurodegenerativedisease with Daegu-Gyeongbuk Medical Innovation Foundation',
      ],
    },
    {
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
      content: [
        'AR1002 L/I from Columbia University',
        'AR1001 (Alzheimer’s Disease) Therapeutic Agent) Approval for Phase 2Extension Study (USFDA)',
        'AR1001 (VD DMT) Phase 2 IND Approval (US FDA)',
      ],
    },
  ]);

  const handleScroll = () => {
    const scrollY = document.getElementsByClassName('description-grid')[0].scrollTop;
    console.log(currentTab);
    switch (true) {
      case scrollY <=
        document.getElementsByClassName('2023')[0].offsetTop +
          document.getElementsByClassName('2023')[0].offsetHeight * 0.7:
        setScrollTab('2023');
        break;
      case scrollY <=
        document.getElementsByClassName('2022')[0].offsetTop +
          document.getElementsByClassName('2022')[0].offsetHeight * 0.7:
        setScrollTab('2022');
        break;
      case scrollY <=
        document.getElementsByClassName('2021')[0].offsetTop +
          document.getElementsByClassName('2021')[0].offsetHeight * 0.7:
        setScrollTab('2021');
        break;
      case scrollY <=
        document.getElementsByClassName('2020')[0].offsetTop +
          document.getElementsByClassName('2020')[0].offsetHeight * 0.7:
        setScrollTab('2020');
        break;
      default:
        setScrollTab('2019');
    }
  };

  useEffect(() => {
    const scrollY = document.getElementsByClassName(currentTab)[0].offsetTop;
    document.getElementsByClassName('description-grid')[0].scrollTo(0, scrollY, 'smooth');
  }, [currentTab]);

  useEffect(() => {
    document.getElementsByClassName('description-grid')[0]?.addEventListener('scroll', handleScroll);
    return () => {
      document.getElementsByClassName('description-grid')[0]?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HomeComponentWrap>
      <GridBox>
        <img
          src={sidebar}
          alt="sidebar"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '10',
            margin: scrollTab === '2019' ? '35px 34px' : scrollTab === '2023' ? '50px 34px' : '35px 34px',
            height: '84%',
            transition: 'all 0.2s ease-in-out',
          }}
        />
        {tabNames.map((tabName) => (
          <GridBoxContentWrap key={tabName}>
            {
              <Image
                src={tabName === scrollTab ? whitedot : graydot}
                $isActive={tabName === scrollTab ? true : false}
                style={{ padding: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              />
            }
            <Text
              $isActive={tabName === scrollTab ? true : false}
              onClick={() => {
                setCurrentTab(tabName);
              }}
            >
              {tabName}
            </Text>
          </GridBoxContentWrap>
        ))}
      </GridBox>
      <GridBox className="description-grid" style={{ height: '70vh', overflowY: 'scroll' }}>
        {historyContents.map((item, index) => (
          <DescriptionWrap
            ref={refs[index]}
            className={tabNames[index]}
            key={index}
            $isActive={tabNames.indexOf(scrollTab) === index ? true : false}
          >
            {item.content.map((content, index) => (
              <DescriptionItem key={index + content}>{content}</DescriptionItem>
            ))}
          </DescriptionWrap>
        ))}
      </GridBox>
    </HomeComponentWrap>
  );
};

export default Tab1;
