import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import vertical_arrow from '../../assets/images/vertical_arrow.svg';
import ourapproach_ai_cover from './assets/ourapproach_ai_cover.png';
import ourapproach_ai_middle1 from './assets/ourapproach_ai_middle1.png';
import ourapproach_ai_middle2 from './assets/ourapproach_ai_middle2.png';
import ourapproach_ai_middle3 from './assets/ourapproach_ai_middle3.png';
import docthumbnail from './assets/ourapproach_docthumbnail.png';
import ourapproach_ai_pathwaydata2 from './assets/ourapproach_ai_pathwaydata2.png';
import ourapproach_ai_pathwaydata3 from './assets/ourapproach_ai_pathwaydata3.png';
import arrow_thin from './assets/arrow_thin.svg';
import ner from './assets/ner.svg';
import re from './assets/re.svg';
import {
  Container,
  HomeComponentWrap,
  TextWrap,
  Text,
  ButtonWrap,
  RoundButton,
  ComponentWrap,
  DescriptionWrap,
  DescriptionItem,
  Image,
  HR,
  UnderLineWrap,
  Underline,
} from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

const AiPlatform = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [predictions, setPredictions] = useState([
    {
      title: 'Docking',
      content: [
        'Type : High Throughput, Structure-based (Ligand-Protein).',
        'Technology : Machine Learning.',
        'Accuracy : Correlation coefficient of 0.616.',
        'Completion Time : Approximately 10 seconds per Ligand-Protein complex.',
      ],
    },

    {
      title: 'IC50 predictor',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
    {
      title: 'Blinding Affinity Prediction',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
    {
      title: 'DrugSim',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
    {
      title: 'Ligand Hunter',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
    {
      title: 'BBB Predictor',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
    {
      title: 'Target Hunter',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
    {
      title: 'ARI-Net',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
    {
      title: 'ADMET Toxicity',
      content: ['Sample : Sample text', 'Sample : Sample text', 'Sample : Sample text'],
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <MainImgWrap $src={ourapproach_ai_cover}>
        <ContainerGridLineWrap className="grid_bg">
          <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.2)' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
      </MainImgWrap>
      <Header />
      <Path>{`HOME > OUR APPROACH > AI PLATFORM`}</Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>AI {window.innerWidth <= 900 && <br />}PLATFORM</HeadLine>
        <img
          style={{ position: 'absolute', top: '90vh', right: '10vw', rotate: '180deg', height: '3.3vh' }}
          src={vertical_arrow}
          alt="vertical_arrow"
        />
      </HomeComponentWrap>

      <Desktop>
        <HomeComponentWrap>
          <TextWrap style={{ margin: '0' }}>
            <Text $fontSize="26px" $fontWeight="300" $color="#939598">
              AI Platform
            </Text>
            <div
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                height: '4em',
                borderRight: '2px solid #ffffff',
                margin: '2rem 0',
              }}
            ></div>
            <Text
              $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '0' }}
            >
              ARIDD™
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
              $fontWeight="200"
              $color="#E5E5E5"
              style={{ margin: '2em 0' }}
            >
              ARIDDTM is a drug development platform that augments the discovery and development of polypharmacological
              drugs. To accelerate the development of drugs with multiple mechanisms of action, we’ve unveiled ARIS –
              our cutting-edge AI platform designed for dependable in-silico predictions and analyses.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap>
          <TextWrap style={{ width: 'fit-content' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '23px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '2em 0 0 0' }}
            >
              ARIS Structure
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
              $fontWeight="200"
              $color="#ffffff"
              style={{ marginTop: '2em', width: '70vw' }}
            >
              Existing AI drug discovery tools often prioritize drug synthesis, intermolecular binding prediction, and
              ADMET processes. While crucial for single-mechanism drug exploration, polypharmacological discovery
              demands a nuanced approach. Polypharmacology requires a deep understanding of interactions among drugs,
              proteins, cells, and diseases, alongside the ability to predict and identify novel biological
              relationships. To address this complexity, ARIBIO’s Platform Research Center has developed ARIS: a
              proprietary AI platform optimized for predicting these multifaceted biological interrelationships, thus
              advancing our drug discovery initiatives.
            </Text>
          </TextWrap>
          <Image src={ourapproach_ai_middle1} alt="ai_middle1" style={{ width: '90%', marginLeft: '17.5%' }} />
          <TextWrap style={{ width: 'fit-content', marginTop: '10em' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '23px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '2em 0 0 0' }}
            >
              ARIS (AI-based Reliable In-Silico)
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
              $fontWeight="100"
              $color="#C9C9C9"
              style={{ marginTop: '2em', width: '70vw' }}
            >
              ARIS is fundamentally structured around two concepts, “BRAIN” and its “Prediction Algorithms”.
            </Text>
          </TextWrap>
          <Image src={ourapproach_ai_middle2} alt="ai_middle2" style={{ width: '90%' }} />
          <TextWrap style={{ width: 'fit-content', marginTop: '10em' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '23px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '2em 0 0 0' }}
            >
              BRAIN
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
              $fontWeight="100"
              $color="#C9C9C9"
              style={{ marginTop: '2em', width: '70vw' }}
            >
              BRAIN, short for {`\t`}
              <span style={{ color: '#ffffff', fontWeight: '300' }}>
                “The Bridge between AI and In Silico, In Vitro, and In Vivo”,
              </span>{' '}
              has two primary components: a Knowledge Graph (KG) and a Large Language Model (LLM). Together, they form a
              cohesive <span style={{ color: '#ffffff', fontWeight: '300' }}>Bridge</span>, seamlessly linking the KG
              and ARIS{' '}
              <span style={{ color: '#ffffff', fontWeight: '300' }}>
                Prediction Algorithms to real-world applications across In Silico, In Vitro, and In Vivo{' '}
              </span>{' '}
              domains.
            </Text>
          </TextWrap>
          <Image src={ourapproach_ai_middle3} alt="ai_middle3" style={{ width: '90%' }} />
        </HomeComponentWrap>
        <HomeComponentWrap>
          <TextWrap style={{ width: '100%', alignItems: 'start', justifyContent: 'center', marginBottom: '2em' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '23px'}
              $fontWeight="400"
              $align="start"
              $color="#ffffff"
              style={{ margin: '1.5em 0 0 0' }}
            >
              Prediction Algorithms
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
              $fontWeight="100"
              $color="#C9C9C9"
              $align="start"
              style={{ marginTop: '1.5em', width: '60%' }}
            >
              The “Prediction Algorithms” encompass a suite of AI prediction models and simulation tools, each with a
              function in either the chemical or biological domain. These tools are given to BRAIN, which appropriately
              selects and executes the tools necessary to accomplish a given task.
            </Text>
          </TextWrap>
          <ButtonWrap>
            {predictions.map((item, index) => (
              <RoundButton
                key={item + index}
                $isActive={activeButton === index}
                onClick={() => {
                  setActiveButton(index);
                }}
              >
                {item.title}
              </RoundButton>
            ))}
          </ButtonWrap>
          <ComponentWrap style={{ borderTop: '2px solid #ffffff' }}>
            <ComponentWrap
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '30px',
                background: 'linear-gradient(to left, rgba(0,90,139,0.4), rgba(0, 26, 41, 0.4))',
                margin: '8em 0',
                padding: '4em 0',
                alignItems: 'start',
              }}
            >
              <TextWrap style={{ margin: '0', padding: '0 0 0 10vw', width: '100%', alignItems: 'start' }}>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '28px' : '23px'}
                  $fontWeight="400"
                  $color="#ffffff"
                  style={{ width: 'fit-content', height: '-webkit-fill-available' }}
                >
                  •{'\t'}
                  {predictions[activeButton].title}
                </Text>
              </TextWrap>
              <DescriptionWrap style={{ padding: '0 10vw 0 0' }}>
                {predictions[activeButton].content.map((item, index) => (
                  <DescriptionItem key={item + index}>{item}</DescriptionItem>
                ))}
              </DescriptionWrap>
            </ComponentWrap>
          </ComponentWrap>
        </HomeComponentWrap>
        <HomeComponentWrap>
          <TextWrap style={{ marginBottom: '10em' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '23px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '2em 0 0 0' }}
            >
              Pathway Data
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
              $fontWeight="100"
              $color="#C9C9C9"
              style={{ marginTop: '2em' }}
            >
              Since its origin, the development and objectives of ARIS have always been closely aligned with AriBio’s
              polypharmacological approach. Hence, we emphasize harnessing contextual information when discovering novel
              polypharmacological drug candidates. When considering contextual information for polypharmacological drug
              discovery, pathway data is most critical. <br /> <br />
              We extract this pathway data from various sources, leveraging two advanced Deep Learning techniques: Named
              Entity Recognition (NER) and Relation Extraction (RE). The execution flow and interplay of these methods
              are illustrated below:
            </Text>
          </TextWrap>
          <ComponentWrap style={{ padding: '0' }}>
            <ComponentWrap style={{ flexDirection: 'row', paddingTop: '8em', height: '-webkit-fill-available' }}>
              <ComponentWrap
                className="pathwaydata_wrap_top"
                style={{ flexDirection: 'row', alignItems: 'stretch', minHeight: '286px' }}
              >
                <Image src={docthumbnail} alt="ai_pathwaydata" style={{ height: '286px', alignSelf: 'center' }} />
                <TextWrap
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'auto',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    padding: '0 4em',
                    margin: '0',
                    height: 'auto',
                    gap: '2em',
                  }}
                >
                  <Text
                    className="pathwaydata_text"
                    $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                    $fontWeight="100"
                    $color="#C9C9C9"
                    $align="start"
                    style={{ margin: '0', fontStyle: 'italic' }}
                  >
                    “Thus, unlike other PDE5 inhibitors, mirodneafil may upregulate both the autophagy-lysosome pathway
                    and the ubiquitin-proteasome system (UPS) for efficient degradation of Toxic proteins, resulting in
                    improved cognitive functions.”
                  </Text>
                  <Text
                    className="pathwaydata_text"
                    $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                    $fontWeight="100"
                    $color="#C9C9C9"
                    $align="start"
                    style={{ margin: '0', fontStyle: 'italic' }}
                  >
                    “Thus, unlike other PDE5 inhibitors,{`\t`}
                    <UnderLineWrap>
                      {'Mirodenafil'}
                      <Underline color="#0086CE" />
                    </UnderLineWrap>
                    {`\t`} may{`\t`}
                    <UnderLineWrap>
                      {'Upregulate'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    {`\t`}
                    both the{`\t`}
                    <UnderLineWrap>
                      {'autophagy-lysosome pathway'}

                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    {`\t`}and the{`\t`}
                    <UnderLineWrap>
                      {'ubiquitin-proteasome system (UPS)'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    {`\t`}for efficient{`\t`}
                    <UnderLineWrap>
                      {'degradation'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    {`\t`}of{`\t`}
                    <UnderLineWrap>
                      {'Toxic proteins'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    ,{`\t`}
                    <UnderLineWrap>
                      {'resulting'}

                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    {`\t`}in{`\t`}
                    <UnderLineWrap>
                      {'improved cognitive functions'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    .”
                  </Text>
                </TextWrap>
                <div style={{ position: 'relative' }}>
                  <Image
                    src={ourapproach_ai_pathwaydata2}
                    alt="ai_pathwaydata2"
                    style={{ height: 'auto', padding: '3em 0' }}
                  />
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                    $fontWeight="300"
                    $color="#C9C9C9"
                    $align="start"
                    style={{
                      margin: '0',
                      position: 'absolute',
                      top: '50%',
                      right: '-3em',
                      width: 'fit-content',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    NER
                  </Text>
                </div>
              </ComponentWrap>
            </ComponentWrap>
            <ComponentWrap
              className="pathwaydata_wrap"
              style={{
                flexDirection: 'row',
                height: '-webkit-fill-available',
              }}
            >
              <TextWrap
                style={{
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'start',
                  margin: '0',
                  padding: '4em',
                  gap: '2em',
                  border: '2px solid #838383',
                  minWidth: 'fit-content',
                }}
              >
                <Image
                  src={ourapproach_ai_pathwaydata3}
                  alt="ai_pathwaydata3"
                  style={{ position: 'absolute', bottom: '50%', left: '-100px', height: 'auto', padding: '0' }}
                />
                <Text
                  $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                  $fontWeight="300"
                  $color="#C9C9C9"
                  $align="start"
                  style={{
                    margin: '0',
                    position: 'absolute',
                    top: '20%',
                    left: '-10vw',
                    width: 'fit-content',
                  }}
                >
                  RE
                </Text>
                <Text
                  className="pathwaydata_text"
                  $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                  $color="#C9C9C9"
                  $fontWeight="100"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '1em',
                  }}
                >
                  <UnderLineWrap>
                    {'Mirodenafil'}
                    <Underline color="#0086CE" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Upregulate'}
                    <Underline color="#92F22F" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Autophagy-lysosome pathway'}
                    <Underline color="#E2D800" />
                  </UnderLineWrap>
                </Text>
                <Text
                  className="pathwaydata_text"
                  $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                  $color="#C9C9C9"
                  $fontWeight="100"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '1em',
                  }}
                >
                  <UnderLineWrap>
                    {'Mirodenafil'}
                    <Underline color="#0086CE" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Upregulate'}
                    <Underline color="#92F22F" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Ubiquitin-proteasome system (UPS)'}
                    <Underline color="#E2D800" />
                  </UnderLineWrap>
                </Text>
                <Text
                  className="pathwaydata_text"
                  $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                  $color="#C9C9C9"
                  $fontWeight="100"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '1em',
                  }}
                >
                  <UnderLineWrap>
                    {'Mirodenafil'}
                    <Underline color="#0086CE" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Improves'}
                    <Underline color="#92F22F" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Cognitive functions'}
                    <Underline color="#E2D800" />
                  </UnderLineWrap>
                </Text>
                <Text
                  className="pathwaydata_text"
                  $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                  $color="#C9C9C9"
                  $fontWeight="100"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '1em',
                  }}
                >
                  <UnderLineWrap>
                    {'Ubiquitin-proteasome system (UPS)'}
                    <Underline color="#E2D800" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Degrade'}
                    <Underline color="#92F22F" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Toxic proteins'}
                    <Underline color="#E2D800" />
                  </UnderLineWrap>
                </Text>
                <Text
                  className="pathwaydata_text"
                  $fontSize={window.innerWidth > 1280 ? '23px' : '18px'}
                  $color="#C9C9C9"
                  $fontWeight="100"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '1em',
                  }}
                >
                  <UnderLineWrap>
                    {'Autophagy-lysosome pathway'}
                    <Underline color="#E2D800" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Degrade'}
                    <Underline color="#92F22F" />
                  </UnderLineWrap>
                  <Image src={arrow_thin} alt="arrow" />
                  <UnderLineWrap>
                    {'Toxic proteins'}
                    <Underline color="#E2D800" />
                  </UnderLineWrap>
                </Text>
              </TextWrap>
            </ComponentWrap>
          </ComponentWrap>
        </HomeComponentWrap>
      </Desktop>
      <Mobile>
        <div style={{ overflowX: 'hidden' }}>
          <HomeComponentWrap>
            <TextWrap style={{ margin: '0' }}>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                AI Platform
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '4em',
                  borderRight: '2px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '0' }}>
                ARIDD™
              </Text>
              <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '2em 0' }}>
                ARIDDTM is a drug development platform that augments the discovery and development of
                polypharmacological drugs. To accelerate the development of drugs with multiple mechanisms of action,
                we’ve unveiled ARIS – our cutting-edge AI platform designed for dependable in-silico predictions and
                analyses.
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <TextWrap style={{ width: 'fit-content', marginBottom: '5em' }}>
              <HR $height="2px" $color="#ffffff" />
              <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                ARIS Structure
              </Text>
              <Text $fontSize="16px" $fontWeight="200" $color="#ffffff" style={{ marginTop: '2em', width: '80vw' }}>
                Existing AI drug discovery tools often prioritize drug synthesis, intermolecular binding prediction, and
                ADMET processes. While crucial for single-mechanism drug exploration, polypharmacological discovery
                demands a nuanced approach. Polypharmacology requires a deep understanding of interactions among drugs,
                proteins, cells, and diseases, alongside the ability to predict and identify novel biological
                relationships. To address this complexity, ARIBIO’s Platform Research Center has developed ARIS: a
                proprietary AI platform optimized for predicting these multifaceted biological interrelationships, thus
                advancing our drug discovery initiatives.
              </Text>
            </TextWrap>
            <Image src={ourapproach_ai_middle1} alt="ai_middle1" style={{ width: '80%', marginLeft: '17.5%' }} />
            <TextWrap style={{ width: 'fit-content', marginTop: '5em', marginBottom: '5em' }}>
              <HR $height="2px" $color="#ffffff" />
              <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                ARIS (AI-based Reliable In-Silico)
              </Text>
              <Text $fontSize="16px" $fontWeight="100" $color="#C9C9C9" style={{ marginTop: '2em', width: '80vw' }}>
                ARIS is fundamentally structured around two concepts, “BRAIN” and its “Prediction Algorithms”.
              </Text>
            </TextWrap>
            <Image src={ourapproach_ai_middle2} alt="ai_middle2" style={{ width: '90%' }} />
            <TextWrap style={{ width: 'fit-content', marginTop: '5em', marginBottom: '5em' }}>
              <HR $height="2px" $color="#ffffff" />
              <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                BRAIN
              </Text>
              <Text $fontSize="16px" $fontWeight="100" $color="#C9C9C9" style={{ marginTop: '2em', width: '80vw' }}>
                BRAIN, short for {`\t`}
                <span style={{ color: '#ffffff', fontWeight: '300' }}>
                  “The Bridge between AI and In Silico, In Vitro, and In Vivo”,
                </span>{' '}
                has two primary components: a Knowledge Graph (KG) and a Large Language Model (LLM). Together, they form
                a cohesive <span style={{ color: '#ffffff', fontWeight: '300' }}>Bridge</span>, seamlessly linking the
                KG and ARIS{' '}
                <span style={{ color: '#ffffff', fontWeight: '300' }}>
                  Prediction Algorithms to real-world applications across In Silico, In Vitro, and In Vivo{' '}
                </span>{' '}
                domains.
              </Text>
            </TextWrap>
            <Image src={ourapproach_ai_middle3} alt="ai_middle3" style={{ width: '90%' }} />
          </HomeComponentWrap>
          <HomeComponentWrap>
            <TextWrap style={{ width: '100%', alignItems: 'start', justifyContent: 'center', marginBottom: '2em' }}>
              <HR $height="2px" $color="#ffffff" $width="24px" />
              <Text
                $fontSize="18px"
                $fontWeight="400"
                $align="start"
                $color="#ffffff"
                style={{ margin: '1.5em 0 0 0' }}
              >
                Prediction Algorithms
              </Text>
              <Text
                $fontSize="16px"
                $fontWeight="100"
                $color="#C9C9C9"
                $align="start"
                style={{ marginTop: '1.5em', width: '100%' }}
              >
                The “Prediction Algorithms” encompass a suite of AI prediction models and simulation tools, each with a
                function in either the chemical or biological domain. These tools are given to BRAIN, which
                appropriately selects and executes the tools necessary to accomplish a given task.
              </Text>
            </TextWrap>
            <ButtonWrap>
              {predictions.map((item, index) => (
                <RoundButton
                  key={item + index}
                  $isActive={activeButton === index}
                  onClick={() => {
                    setActiveButton(index);
                  }}
                >
                  {item.title}
                </RoundButton>
              ))}
            </ButtonWrap>
            <ComponentWrap style={{ borderTop: '2px solid #ffffff' }}>
              <ComponentWrap
                style={{
                  display: 'grid',
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: '10px',
                  background: 'linear-gradient(to left, rgba(0,90,139,0.4), rgba(0, 26, 41, 0.4))',
                  marginTop: '3rem',
                  padding: '1rem',
                  alignItems: 'start',
                }}
              >
                <TextWrap
                  style={{
                    margin: '0',
                    padding: '0 0 1rem 0',
                    width: '100%',
                    alignItems: 'start',
                    borderBottom: '1px solid #6E6E6E',
                  }}
                >
                  <Text
                    $fontSize="18px"
                    $fontWeight="400"
                    $color="#ffffff"
                    style={{ width: 'fit-content', height: '-webkit-fill-available' }}
                  >
                    •{'\t'}
                    {predictions[activeButton].title}
                  </Text>
                </TextWrap>
                <DescriptionWrap style={{ padding: '0' }}>
                  {predictions[activeButton].content.map((item, index) => (
                    <DescriptionItem key={item + index}>{item}</DescriptionItem>
                  ))}
                </DescriptionWrap>
              </ComponentWrap>
            </ComponentWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <TextWrap style={{ marginBottom: '5em' }}>
              <HR $height="2px" $color="#ffffff" />
              <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                Pathway Data
              </Text>
              <Text $fontSize="16px" $fontWeight="100" $color="#C9C9C9" style={{ marginTop: '2em' }}>
                Since its origin, the development and objectives of ARIS have always been closely aligned with AriBio’s
                polypharmacological approach. Hence, we emphasize harnessing contextual information when discovering
                novel polypharmacological drug candidates. When considering contextual information for
                polypharmacological drug discovery, pathway data is most critical. <br /> <br />
                We extract this pathway data from various sources, leveraging two advanced Deep Learning techniques:
                Named Entity Recognition (NER) and Relation Extraction (RE). The execution flow and interplay of these
                methods are illustrated below:
              </Text>
            </TextWrap>
            <ComponentWrap style={{ padding: '0' }}>
              <ComponentWrap style={{ flexDirection: 'column', paddingTop: '0', height: '-webkit-fill-available' }}>
                <ComponentWrap
                  className="pathwaydata_wrap_top"
                  style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    minHeight: '108px',
                    padding: '0',
                    margin: '1rem 0',
                  }}
                >
                  <Image src={docthumbnail} alt="ai_pathwaydata" style={{ width: '20vw', alignSelf: 'center' }} />
                  <TextWrap
                    className="pathwaydata_textwrap"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: 'auto',
                      alignItems: 'start',
                      justifyContent: 'center',
                      padding: '0 0 0 2rem',
                      margin: '0',
                      height: 'auto',
                      gap: '2em',
                    }}
                  >
                    <Text
                      className="pathwaydata_text"
                      $fontWeight="100"
                      $color="#C9C9C9"
                      $align="start"
                      style={{ margin: '0', fontStyle: 'italic', height: 'fit-content' }}
                    >
                      “Thus, unlike other PDE5 inhibitors, mirodneafil may upregulate both the autophagy-lysosome
                      pathway and the ubiquitin-proteasome system (UPS) for efficient degradation of Toxic proteins,
                      resulting in improved cognitive functions.”
                    </Text>
                  </TextWrap>
                </ComponentWrap>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: '1rem',
                  }}
                >
                  <Image src={ner} alt="ner" style={{ paddingLeft: '35%' }} />
                  <span>NER</span>
                </div>
                <TextWrap
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'end',
                    width: '100%',
                    margin: '1rem 0',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10%',
                      left: '0',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transform: 'translate(30%,50%)',
                    }}
                  >
                    <span>RE</span>
                    <Image src={re} alt="re" />
                  </div>
                  <Text
                    className="pathwaydata_text"
                    $fontWeight="100"
                    $color="#C9C9C9"
                    $align="start"
                    style={{ margin: '0', fontStyle: 'italic', width: '66%' }}
                  >
                    “Thus, unlike other PDE5 inhibitors,{`\t`}
                    <UnderLineWrap>
                      {'Mirodenafil'}
                      <Underline color="#0086CE" />
                    </UnderLineWrap>
                    {`\t`} may{`\t`}
                    <UnderLineWrap>
                      {'Upregulate'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    {`\t`}
                    both the{`\t`}
                    <UnderLineWrap>
                      {'autophagy-lysosome pathway'}

                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    {`\t`}and the{`\t`}
                    <UnderLineWrap>
                      {'ubiquitin-proteasome system (UPS)'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    {`\t`}for efficient{`\t`}
                    <UnderLineWrap>
                      {'degradation'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    {`\t`}of{`\t`}
                    <UnderLineWrap>
                      {'Toxic proteins'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    ,{`\t`}
                    <UnderLineWrap>
                      {'resulting'}

                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    {`\t`}in{`\t`}
                    <UnderLineWrap>
                      {'improved cognitive functions'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                    .”
                  </Text>
                </TextWrap>
              </ComponentWrap>
              <ComponentWrap
                className="pathwaydata_wrap"
                style={{
                  flexDirection: 'row',
                  height: '-webkit-fill-available',
                  paddingTop: '3rem',
                }}
              >
                <TextWrap
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'start',
                    margin: '0',
                    padding: '1rem 0.5rem',
                    gap: '2em',
                    border: '2px solid #838383',
                    minWidth: 'fit-content',
                  }}
                >
                  <Text
                    className="pathwaydata_text"
                    $color="#C9C9C9"
                    $fontWeight="100"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      gap: '0.3rem',
                    }}
                  >
                    <UnderLineWrap>
                      {'Mirodenafil'}
                      <Underline color="#0086CE" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Upregulate'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      <UnderLineWrap>
                        {`Autophagy-`}
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                      <br />
                      <UnderLineWrap>
                        lysosome pathway
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                    </UnderLineWrap>
                  </Text>
                  <Text
                    className="pathwaydata_text"
                    $color="#C9C9C9"
                    $fontWeight="100"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      gap: '0.5em',
                    }}
                  >
                    <UnderLineWrap>
                      {'Mirodenafil'}
                      <Underline color="#0086CE" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Upregulate'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      <UnderLineWrap>
                        {'Ubiquitin-'}
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                      <br />
                      <UnderLineWrap>
                        proteasome system
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                      <br />
                      <UnderLineWrap>
                        (UPS)
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                    </UnderLineWrap>
                  </Text>
                  <Text
                    className="pathwaydata_text"
                    $fontSize="13px"
                    $color="#C9C9C9"
                    $fontWeight="100"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.5em',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <UnderLineWrap>
                      {'Mirodenafil'}
                      <Underline color="#0086CE" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Improves'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Cognitive functions'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                  </Text>
                  <Text
                    className="pathwaydata_text"
                    $fontSize="13px"
                    $color="#C9C9C9"
                    $fontWeight="100"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      gap: '0.5rem',
                    }}
                  >
                    <UnderLineWrap>
                      <UnderLineWrap>
                        {'Ubiquitin-'}
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                      <br />
                      <UnderLineWrap>
                        proteasome system
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                      <br />
                      <UnderLineWrap>
                        (UPS)
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Degrade'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Toxic proteins'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                  </Text>
                  <Text
                    className="pathwaydata_text"
                    $fontSize="13px"
                    $color="#C9C9C9"
                    $fontWeight="100"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      gap: '0.5rem',
                    }}
                  >
                    <UnderLineWrap>
                      <UnderLineWrap>
                        {'Autophagy-'}
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                      <br />
                      <UnderLineWrap>
                        lysosome pathway
                        <Underline color="#E2D800" />
                      </UnderLineWrap>
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Degrade'}
                      <Underline color="#92F22F" />
                    </UnderLineWrap>
                    <Image src={arrow_thin} alt="arrow" />
                    <UnderLineWrap>
                      {'Toxic proteins'}
                      <Underline color="#E2D800" />
                    </UnderLineWrap>
                  </Text>
                </TextWrap>
              </ComponentWrap>
            </ComponentWrap>
          </HomeComponentWrap>
        </div>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default AiPlatform;
