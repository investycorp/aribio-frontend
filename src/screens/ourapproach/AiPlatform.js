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

import Video from '../../components/Video';

const AiPlatform = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [predictions, setPredictions] = useState([
    {
      title: 'Docking',
      content: [
        'Type : High Throughput, \\n Structure-based (Ligand-Protein).',
        'Technology : Machine Learning.',
        'Accuracy : \\n Correlation coefficient of 0.616.',
        'Completion Time : Approximately 10 seconds per Ligand-Protein complex.',
      ],
      width: '149px',
    },

    {
      title: 'IC50 predictor',
      content: [
        `Description : \\n

        A Machine Learning framework tailored to model a target protein’s IC50 activity.
        This model predicts the IC50 value for a specific Ligand-Protein complex,
        utilizing the Ligand’s chemical structure. It is instrumental in validating or estimating the potential
        of an interaction between a ligand and a target protein.`,
      ],
      width: '227px',
    },
    {
      title: 'Blinding Affinity Prediction',
      content: [
        'Type : Low Throughput, Structure-based (Ligand-Protein).',
        'Technology : Deep Learning (3D Convolutional Neural Networks).',
        'Accuracy : \\n Correlation coefficient of 0.827.',
        'Completion Time : Approximately 10 minutes per Ligand-Protein complex.',
      ],
      width: '352px',
    },
    {
      title: 'DrugSim',
      content: [
        `Description : \\n

        A Drug Similarity Search module, which, when provided with an input molecule,
        seeks similar drugs based not only on their chemical structures but also considering their comprehensive
        metadata within DrugBank, encompassing MOA, targets, drug-drug interactions, and more.`,
      ],
      width: '159px',
    },
    {
      title: 'Ligand Hunter',
      content: [
        `Description : \\n

        Efficiently identifies ligands that exhibit binding to a specified protein.`,
      ],
      width: '217px',
    },
    {
      title: 'BBB Predictor',
      content: [
        `Description : \\n

        Offers Blood Brain Barrier (BBB) permeability predictions, leveraging a plethora of metrics.`,
      ],
      width: '212px',
    },
    {
      title: 'Target Hunter',
      content: [
        `Description : \\n

        Determines potential targets that exhibit binding to a particular ligand.`,
      ],
      width: '215px',
    },
    {
      title: 'ARI-Net',
      content: [
        `Description : \\n

        This tool predicts disease-gene associations through random walks executed on our Knowledge Graph.
        It is pivotal for “Pathway Prediction”, implying its ability to forecast novel associations between genes and
        diseases within our knowledge graph. A foundational module for target identification in ARIS.`,
      ],
      width: '147px',
    },
    {
      title: 'ADMET Toxicity',
      content: [
        `Description : \\n

        Proffers predictions on how a specific compound might be metabolized and processed within the human body.`,
      ],
      width: '235px',
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.container')?.scrollTo(0, 0);
  }, []);

  return (
    <Container className="container">
      <MainImgWrap>
        <Video page="aiplatform" />
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

      <Desktop>
        <HomeComponentWrap>
          <TextWrap style={{ margin: '0' }}>
            <Text $fontWeight="300" $color="#939598" style={{ fontSize: window.innerWidth > 1280 ? '26px' : '18px' }}>
              AI PLATFORM
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
              AI-powered, Reverse engineered &<br /> Integrated Drug Development
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="200"
              $color="#E5E5E5"
              style={{ margin: '2em 0' }}
            >
              ARIDD™ is a drug development platform that augments the discovery and
              <br />
              development of polypharmacological drugs. To accelerate the development of drugs with
              <br />
              multiple mechanisms of action, we’ve unveiled ARIS, our cutting-edge
              <br />
              AI platform designed for dependable in-silico predictions and analyses.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
        <HomeComponentWrap>
          <TextWrap style={{ width: 'fit-content' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '21px'}
              $fontWeight="500"
              $color="#ffffff"
              style={{ margin: '2em 0 0 0' }}
            >
              ARIS Structure
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="200"
              $color="#ffffff"
              style={{ marginTop: '2em', width: '70vw' }}
            >
              Existing AI drug discovery tools often prioritize drug synthesis, intermolecular binding prediction,
              <br />
              and ADMET processes. While crucial for single-mechanism drug exploration, polypharmacological discovery
              <br />
              demands a nuanced approach.
            </Text>
          </TextWrap>
          <Image src={ourapproach_ai_middle1} alt="ai_middle1" style={{ width: '80%', marginLeft: '17.5%' }} />
          <TextWrap style={{ width: 'fit-content', marginTop: '10rem' }}>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="200"
              $color="#ffffff"
              style={{ marginTop: '2em', width: '70vw' }}
            >
              {/* ? - 디자인 반영, 시트엔 없음 */}
              Polypharmacology requires a deep understanding of interactions among drugs,
              <br />
              proteins, cells, and diseases, alongside the ability to predict and identify novel biological
              relationships.
              <br /> To address this complexity, ARIBIO’s Platform Research Center has developed ARIS:
              <br /> a proprietary AI platform optimized for predicting these multifaceted biological
              interrelationships,
              <br />
              thus advancing our drug discovery initiatives.
            </Text>
          </TextWrap>
          <TextWrap style={{ width: 'fit-content', marginTop: '10em' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '21px'}
              $fontWeight="500"
              $color="#ffffff"
              style={{ margin: '2em 0 0 0' }}
            >
              ARIS (AI-based Reliable In-Silico)
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="100"
              $color="#C9C9C9"
              style={{ marginTop: '2em', width: '70vw' }}
            >
              ARIS is fundamentally structured around two concepts,
              <br /> “BRAIN” and its “Prediction Algorithms”.
            </Text>
          </TextWrap>
          <Image src={ourapproach_ai_middle2} alt="ai_middle2" style={{ width: '80%' }} />
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
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="100"
              $color="#C9C9C9"
              style={{ marginTop: '2em', width: '70vw' }}
            >
              BRAIN, short for {`\t`}
              <span style={{ color: '#ffffff', fontWeight: '300' }}>
                “The Bridge between AI and In Silico, In Vitro, and In Vivo”,
              </span>{' '}
              <br />
              has two primary components: a Knowledge Graph (KG) and a Large Language Model (LLM).
              <br />
              Together, they form a cohesive <span style={{ color: '#ffffff', fontWeight: '300' }}>Bridge</span>,
              seamlessly linking the KG and ARIS{' '}
              <span style={{ color: '#ffffff', fontWeight: '300' }}>Prediction Algorithms</span>
              <br />
              to real-world applications across{' '}
              <span style={{ color: '#ffffff', fontWeight: '300' }}>In Silico, In Vitro, and In Vivo</span> domains.
            </Text>
          </TextWrap>
          <Image src={ourapproach_ai_middle3} alt="ai_middle3" style={{ width: '80%' }} />
        </HomeComponentWrap>
        <HomeComponentWrap>
          <TextWrap style={{ width: '100%', alignItems: 'start', justifyContent: 'center', marginBottom: '2em' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontWeight="400"
              $align="start"
              $color="#ffffff"
              style={{ margin: '1.5em 0 0 0', fontSize: window.innerWidth > 1280 ? '34px' : '21px' }}
            >
              Prediction Algorithms
            </Text>
            <Text
              $fontWeight="100"
              $color="#C9C9C9"
              $align="start"
              style={{ marginTop: '1.5em', width: '75%', fontSize: window.innerWidth > 1280 ? '23px' : '14px' }}
            >
              The “Prediction Algorithms” consist of a range of advanced AI prediction models and simulation tools
              <br />
              designed specifically for the fields of chemistry and biology. Each model and solution is carefully
              crafted to provide
              <br />
              researchers with practical and direct applications, both on its own and in collaboration with the BRAIN
              platform.
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
                style={{
                  gap: '40px',
                  border: '1px solid rgba(255,255,255,0.6)',
                  margin: '0px 0em',
                  width: window.innerWidth > 1280 ? item.width : '',
                  padding: window.innerWidth > 1280 ? '1em' : '1em 1.5em',
                  height: window.innerWidth > 1280 ? '62px' : '41px',
                  fontSize: window.innerWidth > 1280 ? '24px' : '14px',
                }}
              >
                {item.title}
              </RoundButton>
            ))}
          </ButtonWrap>
          <ComponentWrap style={{ borderTop: window.innerWidth > 1280 ? '2px solid #ffffff' : '1px solid #ffffff' }}>
            <ComponentWrap
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '30px',
                background: 'linear-gradient(to left, rgba(0,90,139,0.4), rgba(0, 26, 41, 0.4))',
                margin: '4em 0',
                padding: '4em 0',
                alignItems: 'start',
              }}
            >
              <TextWrap style={{ margin: '0', padding: '0 0 0 10vw', width: '100%', alignItems: 'start' }}>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '28px' : '16px'}
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
                  <DescriptionItem
                    key={item + index}
                    style={{
                      whiteSpace: 'pre-line',
                      width: '100%',
                      fontSize: window.innerWidth > 1280 ? '20px' : '12px',
                    }}
                  >
                    {item.replace(/\\n/g, '')}
                  </DescriptionItem>
                ))}
              </DescriptionWrap>
            </ComponentWrap>
          </ComponentWrap>
        </HomeComponentWrap>
        {/* ? - Every bits inside this tag need to be changed */}
        <HomeComponentWrap>
          <TextWrap style={{ marginBottom: '10em', width: '60vw' }}>
            <HR $height="2px" $color="#ffffff" />
            <Text
              $fontSize={window.innerWidth > 1280 ? '34px' : '21px'}
              $fontWeight="400"
              $color="#ffffff"
              style={{ margin: '2em 0 0 0' }}
            >
              Pathway Data
            </Text>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="100"
              $color="#C9C9C9"
              style={{ marginTop: '2em' }}
            >
              Since its origin, the development and objectives of ARIS have always been closely aligned with
              <br />
              AriBio’s polypharmacological approach. Hence, we emphasize harnessing contextual information
              <br />
              when discovering novel polypharmacological drug candidates.
              <br />
              When considering contextual information for polypharmacological drug discovery, pathway data is most
              critical.
              <br />
              <br />
              We extract this pathway data from various sources, leveraging two advanced Deep Learning techniques:
              <br />
              Named Entity Recognition (NER) and Relation Extraction (RE).
              <br />
              The execution flow and interplay of these methods are illustrated below:
            </Text>
          </TextWrap>
          <ComponentWrap style={{ padding: window.innerWidth > 1280 ? '0' : '4em' }}>
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
          <TextWrap style={{ width: '80vw', marginTop: '10em' }}>
            <Text
              $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
              $fontWeight="100"
              $color="#C9C9C9"
              style={{ marginTop: '2em' }}
            >
              At the heart of polypharmacological drug discovery lies the pivotal step of target identification.
              <br />
              This involves discerning which biological targets a drug should engage with, to address a specific
              disease.
              <br />
              The inherent challenge stems from the intricate interdependencies within our body; no single component
              operates in isolation.
              <br />
              A drug’s interaction with a singular protein isn’t the sole therapeutic agent; it’s the cascade of
              subsequent interactions that
              <br />
              collectively contribute to disease treatment. Hence, pinpointing a viable drug target necessitates
              <br />a profound comprehension of these protein interplays within the body —a knowledge rooted in pathway
              data.
            </Text>
          </TextWrap>
        </HomeComponentWrap>
      </Desktop>
      <Mobile>
        <div style={{ overflowX: 'hidden' }}>
          <HomeComponentWrap>
            <TextWrap style={{ margin: '0' }}>
              <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                AI PLATFORM
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '60px',
                  borderRight: '1px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text $fontSize="23px" $fontWeight="400" $color="#ffffff" style={{ margin: '0' }}>
                AI-powered, Reverse
                <br /> engineered & Integrated
                <br /> Drug Development
              </Text>
              <Text $fontSize="18px" $fontWeight="200" $color="#E5E5E5" style={{ margin: '2em 0', lineHeight: '21px' }}>
                ARIDD™ is
                <br />
                a drug development platform <br />
                that augments the discovery and
                <br />
                development of
                <br />
                polypharmacological drugs.
                <br />
                To accelerate the development of drugs
                <br />
                with multiple mechanisms of action,
                <br />
                we’ve unveiled ARIS, our cutting-edge
                <br />
                AI platform designed for dependable
                <br />
                in-silico predictions and analyses.
              </Text>
            </TextWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <TextWrap style={{ width: 'fit-content', marginBottom: '5em' }}>
              <HR $height="1px" $Width="20px" $color="#ffffff" style={{ width: '20px' }} />
              <Text $fontSize="18px" $fontWeight="500" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                ARIS Structure
              </Text>
              <Text
                $fontSize="16px"
                $fontWeight="300"
                $color="#D3D3D3"
                style={{ marginTop: '2em', width: '90vw', lineHeight: '20px' }}
              >
                At AriBio,
                <br />
                our commitment to polypharmacology
                <br />
                is fortified by the power of advanced
                <br />
                AI technologies. <br />
                With the ARIDD™ platform,
                <br />
                we delve into vast molecular databases,
                <br />
                predicting interactions that span multiple <br />
                targets and mechanisms.
                <br />
                By leveraging AI, we aim to achieve
                <br />
                heightened drug efficacy and expand
                <br />
                potential therapeutic indications,
                <br />
                positioning AriBio as a leader in innovative
                <br />
                treatments for neurodegenerative diseases.
                <br />
                <br />
                <br />
                Join our pursuit to advance the future of
                <br />
                drug discovery, where AI meets the
                <br />
                sophistication of polypharmacology,
                <br />
                to tackle the challenges posed by
                <br />
                neurodegenerative disorders.
              </Text>
            </TextWrap>
            <Image
              src={process.env.PUBLIC_URL + '/assets/images/ourapproach_aiplatform1.png'}
              alt="ai_middle1"
              style={{ width: '90vw', marginLeft: '0' }}
            />
            <TextWrap style={{ width: 'fit-content', marginTop: '5em', marginBottom: '5em' }}>
              <HR $height="1px" $color="#ffffff" style={{ width: '20px' }} />
              <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                ARIS (AI-based Reliable In-Silico)
              </Text>
              <Text $fontSize="16px" $fontWeight="300" $color="#C9C9C9" style={{ marginTop: '2em', width: '80vw' }}>
                ARIS is fundamentally structured
                <br /> around two concepts,
                <br /> “BRAIN” and its “Prediction Algorithms”.
              </Text>
            </TextWrap>
            <Image
              src={process.env.PUBLIC_URL + '/assets/images/ourapproach_aiplatform2.png'}
              alt="ai_middle2"
              style={{ width: '90%' }}
            />
            <TextWrap style={{ width: 'fit-content', marginTop: '5em', marginBottom: '5em' }}>
              <HR $height="1px" $color="#ffffff" style={{ width: '20px' }} />
              <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                BRAIN
              </Text>
              <Text $fontSize="16px" $fontWeight="200" $color="#C9C9C9" style={{ marginTop: '2em', width: '80vw' }}>
                BRAIN, short for {`\t`}
                <br />
                <span style={{ color: '#ffffff', fontWeight: '400' }}>
                  “The Bridge between AI and In Silico,
                  <br /> In Vitro, and In Vivo”,
                </span>{' '}
                <br />
                has two primary components:
                <br /> a Knowledge Graph (KG)
                <br /> and a Large Language Model (LLM).
                <br />
                Together, they form a cohesive <span style={{ color: '#ffffff', fontWeight: '400' }}>Bridge</span>,
                <br />
                seamlessly linking the KG and ARIS <br />
                <span style={{ color: '#ffffff', fontWeight: '400' }}>Prediction Algorithms</span> to real-world
                <br />
                applications across{' '}
                <span style={{ color: '#ffffff', fontWeight: '400' }}>
                  In Silico, In Vitro,
                  <br /> and In Vivo
                </span>{' '}
                domains.
              </Text>
            </TextWrap>
            <Image
              src={process.env.PUBLIC_URL + '/assets/images/ourapproach_aiplatform3.png'}
              alt="ai_middle3"
              style={{ width: '90%' }}
            />
          </HomeComponentWrap>
          <HomeComponentWrap style={{}}>
            <TextWrap style={{ width: '100%', alignItems: 'start', justifyContent: 'center', marginBottom: '2em' }}>
              <HR $height="1px" $color="#ffffff" $width="20px" />
              <Text
                $fontSize="18px"
                $fontWeight="600"
                $align="start"
                $color="#ffffff"
                style={{ margin: '1.5em 0 0 0' }}
              >
                Prediction Algorithms
              </Text>
              <Text
                $fontSize="16px"
                $fontWeight="300"
                $color="#C9C9C9"
                $align="start"
                style={{ marginTop: '1.5em', width: '100%' }}
              >
                The “Prediction Algorithms” consist of a<br />
                range of advanced AI prediction models and
                <br />
                simulation tools designed specifically for the
                <br />
                fields of chemistry and biology. Each model
                <br />
                and solution is carefully crafted to provide
                <br />
                researchers with practical and direct
                <br />
                applications, both on its own and in
                <br />
                collaboration with the BRAIN platform.
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
                  style={{ fontSize: '14px', fontWeight: '400' }}
                >
                  {item.title}
                </RoundButton>
              ))}
            </ButtonWrap>
            <ComponentWrap style={{ borderTop: '1px solid #ffffff', paddingTop: '4em', margin: '0' }}>
              <ComponentWrap
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: '10px',
                  background: 'linear-gradient(to left, rgba(0,90,139,0.4), rgba(0, 26, 41, 0.4))',
                  padding: '32px 32px',
                  alignItems: 'start',
                  height: 'fit-content',
                  gap: '1rem',
                }}
              >
                <TextWrap
                  style={{
                    margin: '0',
                    padding: '0 0 1rem 0',
                    width: '100%',
                    height: '61px',
                    alignItems: 'start',
                    borderBottom: '1px solid #6E6E6E',
                  }}
                >
                  <Text
                    $fontWeight="500"
                    $color="#ffffff"
                    style={{ fontSize: '18px', width: 'fit-content', height: 'fit-content' }}
                  >
                    •{'\t'}
                    {predictions[activeButton].title}
                  </Text>
                </TextWrap>
                <DescriptionWrap style={{ padding: '0', margin: '0', height: 'fit-content' }}>
                  {predictions[activeButton].content.map((item, index) => (
                    <DescriptionItem key={item + index} style={{ fontSize: '16px', fontWeight: '200' }}>
                      {item.split('\\n').map((line) => (
                        <span>
                          {line.includes('Description') ? (
                            <>
                              {line} <br />
                            </>
                          ) : (
                            line
                          )}
                          <br />
                        </span>
                      ))}
                    </DescriptionItem>
                  ))}
                </DescriptionWrap>
              </ComponentWrap>
            </ComponentWrap>
          </HomeComponentWrap>
          <HomeComponentWrap>
            <TextWrap style={{ marginBottom: '5em' }}>
              <HR $height="1px" $color="#ffffff" $width="20px" />
              <Text $fontSize="18px" $fontWeight="600" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                Pathway Data
              </Text>
              <Text $fontSize="16px" $fontWeight="300" $color="#C9C9C9" style={{ marginTop: '2em' }}>
                Since its origin,
                <br />
                the development and objectives of ARIS
                <br />
                have always been closely aligned with
                <br />
                AriBio’s polypharmacological approach.
                <br />
                Hence, we emphasize harnessing
                <br />
                contextual information when
                <br />
                discovering novel polypharmacological
                <br />
                drug candidates.
                <br />
                When considering contextual information
                <br />
                for polypharmacological drug discovery,
                <br />
                pathway data is most critical.
              </Text>
            </TextWrap>
            <ComponentWrap style={{ padding: '0' }}>
              <ComponentWrap style={{ flexDirection: 'column', paddingTop: '0', height: 'fit-content' }}>
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
                  height: 'fit-content',
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
            <TextWrap style={{ width: '86vw', marginTop: '10em' }}>
              <Text $fontSize="16px" $fontWeight="300" $color="#C9C9C9" style={{ marginTop: '2em' }}>
                At the heart of polypharmacological drug <br />
                discovery lies the pivotal step of target
                <br />
                identification. This involves discerning
                <br />
                which biological targets a drug
                <br />
                should engage with, to address a specific
                <br />
                disease. The inherent challenge stems
                <br />
                from the intricate interdependencies
                <br />
                within our body; no single component
                <br />
                operates in isolation.
                <br />
                A drug’s interaction with a singular protein
                <br />
                isn’t the sole therapeutic agent;
                <br />
                it’s the cascade of subsequent
                <br />
                interactions that collectively contribute
                <br />
                to disease treatment. Hence, pinpointing
                <br />
                a viable drug target necessitates
                <br />
                a profound comprehension of these
                <br />
                protein interplays within the body — <br />
                a knowledge rooted in pathway data.
                <br />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
        </div>
      </Mobile>
      <Footer />
    </Container>
  );
};

export default AiPlatform;
