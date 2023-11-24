import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ourapproach_ai_middle1 from './assets/ourapproach_ai_middle1.png';
import ourapproach_ai_middle3 from './assets/ourapproach_ai_middle3.png';

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
} from './style';

import { HeadLine, Path, ContainerGridLineWrap, GridLineBox, MainImgWrap } from '../../components/style';
import { Desktop, Mobile } from '../../utils/MediaQuery';

import Video from '../../components/Video';
import { Trans } from 'react-i18next';
import { t } from 'i18next';

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
      title: 'Blinding Affinity \\n Prediction',
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
        <Video
          page="aiplatform"
          src={
            window.innerWidth > 1280
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB0500PB_VD.mp4'
              : window.innerWidth > 900
              ? 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB1400PB_VD.mp4'
              : 'https://aribio.s3.ap-northeast-2.amazonaws.com/static/AB2300PB_VD.mp4'
          }
        />
      </MainImgWrap>
      <Header />
      <Path>
        <span style={{ opacity: '0.8' }}>{`HOME > OUR APPROACH > `}</span>AI PLATFORM
      </Path>
      <HomeComponentWrap style={{ height: '100vh' }}>
        <HeadLine>
          {t('aiplatform.headline1')} {window.innerWidth <= 900 && <br />}
          {t('aiplatform.headline2')}
        </HeadLine>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/scroll-button.svg'}
          alt="home"
          style={{
            position: 'absolute',
            right: '7vw',
            bottom: window.innerWidth > 900 ? '5vw' : '7vh',
            height: window.innerWidth > 1280 ? '60px' : '36px',
          }}
        />
      </HomeComponentWrap>
      <div style={{ margin: '0', padding: '0', position: 'relative' }}>
        <ContainerGridLineWrap className="grid_bg" style={{ zIndex: '0' }}>
          <GridLineBox style={{ borderLeft: '2px solid rgba(177,177,177,0.2)' }} />
          <GridLineBox />
          <GridLineBox />
        </ContainerGridLineWrap>
        <Desktop>
          <HomeComponentWrap>
            <TextWrap style={{ margin: '0' }}>
              <Text $fontWeight="300" $color="#939598" style={{ fontSize: window.innerWidth > 1280 ? '26px' : '18px' }}>
                {t('aiplatform.title')}
              </Text>
              <div
                style={{
                  width: '50%',
                  alignSelf: 'flex-start',
                  height: '60px',
                  borderRight: '2px solid #ffffff',
                  margin: '2rem 0',
                }}
              ></div>
              <Text
                $fontSize={window.innerWidth > 1280 ? '50px' : '34px'}
                $fontWeight="500"
                $color="#ffffff"
                style={{ margin: '0' }}
              >
                <Trans i18nKey="aiplatform.subtitle" components={{ 1: <br /> }} />
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="200"
                $color="#E5E5E5"
                style={{ margin: '2em 0' }}
              >
                <Trans i18nKey="aiplatform.desc1" components={{ 1: <br /> }} />
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
                {t('aiplatform.subtitle2')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="200"
                $color="#ffffff"
                style={{ marginTop: '2em', width: '70vw' }}
              >
                <Trans i18nKey="aiplatform.desc2" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
            <Image
              id="fadeIn"
              src={ourapproach_ai_middle1}
              alt="ai_middle1"
              style={{
                objectFit: 'contain',
                width: window.innerWidth > 1280 ? '60vw' : '68vw',

                height: window.innerWidth > 1280 ? '80vh' : '80vh',
                marginLeft: window.innerWidth > 1280 ? '13%' : '14%',
              }}
            />
            <TextWrap style={{ width: 'fit-content', marginTop: '10rem' }}>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="200"
                $color="#ffffff"
                style={{ marginTop: '2em', width: '70vw' }}
              >
                <Trans i18nKey="aiplatform.desc2-1" components={{ 1: <br /> }} />
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
                {t('aiplatform.subtitle3')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="100"
                $color="#C9C9C9"
                style={{ marginTop: '2em', width: '70vw' }}
              >
                <Trans i18nKey="aiplatform.desc3" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
            <Image
              id="fadeIn"
              src={
                process.env.PUBLIC_URL + window.innerWidth > 1280
                  ? '/assets/interaction/1920/AB3700IT_VD.png'
                  : '/assets/interaction/1280/AB3800IT_VD.png'
              }
              alt="openinnovation_middle2"
              style={{
                objectFit: 'cover',
                width: 'auto',
                height: '80vh',
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
            <TextWrap style={{ width: 'fit-content', marginTop: '10em' }}>
              <HR $height="2px" $color="#ffffff" />
              <Text
                $fontSize={window.innerWidth > 1280 ? '34px' : '23px'}
                $fontWeight="400"
                $color="#ffffff"
                style={{ margin: '2em 0 0 0' }}
              >
                {t('aiplatform.subtitle4')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="100"
                $color="#C9C9C9"
                style={{ marginTop: '2em', width: '70vw' }}
              >
                <Trans
                  i18nKey="aiplatform.desc4"
                  components={{ 1: <br />, 2: <span style={{ color: '#ffffff', fontWeight: '300' }}></span> }}
                />
              </Text>
            </TextWrap>
            <Image
              id="fadeIn"
              src={ourapproach_ai_middle3}
              alt="ai_middle3"
              style={{ width: '65vw', marginLeft: window.innerWidth > 1280 ? '0.9vw' : '0.9vw' }}
            />
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
                {t('aiplatform.subtitle5')}
              </Text>
              <Text
                $fontWeight="100"
                $color="#C9C9C9"
                $align="start"
                style={{ marginTop: '1.5em', width: '75%', fontSize: window.innerWidth > 1280 ? '23px' : '14px' }}
              >
                <Trans i18nKey="aiplatform.desc5" components={{ 1: <br /> }} />
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
                    margin: '0px 0em',
                    width: window.innerWidth > 1280 ? item.width : '',
                    padding: window.innerWidth > 1280 ? '1em' : '1em 1.5em',
                    height: window.innerWidth > 1280 ? '62px' : '41px',
                    fontSize: window.innerWidth > 1280 ? '24px' : '14px',
                  }}
                >
                  {item.title.replace(/\\n/g, '')}
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
                <TextWrap
                  style={{
                    margin: '0',
                    padding: window.innerWidth > 1280 ? '0 0 0 160px' : '0 0 0 96px',
                    width: '100%',
                    alignItems: 'start',
                  }}
                >
                  <Text
                    $fontSize={window.innerWidth > 1280 ? '28px' : '16px'}
                    $fontWeight="400"
                    $color="#ffffff"
                    style={{
                      width: 'fit-content',
                      height: '-webkit-fill-available',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'start',
                      alignItems: 'start',
                      gap: '0.8rem',
                    }}
                  >
                    <span>•</span>
                    <span style={{ textAlign: 'start' }}>
                      {predictions[activeButton].title.split('\\n').map((line) => (
                        <span key={'prediction' + line}>
                          {line} <br />
                        </span>
                      ))}
                    </span>
                  </Text>
                </TextWrap>
                <DescriptionWrap style={{ padding: window.innerWidth > 1280 ? '0 160px 0 0' : '0 96px 0 0' }}>
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

          <HomeComponentWrap>
            <TextWrap style={{ marginBottom: '10em', width: '60vw' }}>
              <HR $height="2px" $color="#ffffff" />
              <Text
                $fontSize={window.innerWidth > 1280 ? '34px' : '21px'}
                $fontWeight="400"
                $color="#ffffff"
                style={{ margin: '2em 0 0 0' }}
              >
                {t('aiplatform.subtitle6')}
              </Text>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="100"
                $color="#C9C9C9"
                style={{ marginTop: '2em' }}
              >
                <Trans i18nKey="aiplatform.desc6" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
            <Image
              id="fadeIn"
              src={
                process.env.PUBLIC_URL + window.innerWidth > 1280
                  ? '/assets/interaction/1920/AB3400IT_VD.png'
                  : '/assets/interaction/1280/AB3500IT_VD.png'
              }
              alt="openinnovation_middle2"
              style={{
                width: '85vw',
                transition: 'opacity 0.5s ease-in-out',
              }}
            />

            <TextWrap style={{ width: '80vw', marginTop: '10em' }}>
              <Text
                $fontSize={window.innerWidth > 1280 ? '23px' : '14px'}
                $fontWeight="100"
                $color="#C9C9C9"
                style={{ marginTop: '2em' }}
              >
                <Trans i18nKey="aiplatform.desc6-2" components={{ 1: <br /> }} />
              </Text>
            </TextWrap>
          </HomeComponentWrap>
        </Desktop>
        <Mobile>
          <div style={{ overflowX: 'hidden' }}>
            <HomeComponentWrap>
              <TextWrap style={{ margin: '0' }}>
                <Text $fontSize="16px" $fontWeight="300" $color="#939598">
                  {t('aiplatform.title')}
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
                <Text $fontSize="23px" $fontWeight="500" $color="#ffffff" style={{ margin: '0', lineHeight: '1.2em' }}>
                  <Trans i18nKey="aiplatform.subtitle" components={{ 1: <br /> }} />
                </Text>
                <Text
                  $fontSize="18px"
                  $fontWeight="200"
                  $color="#E5E5E5"
                  style={{ margin: '2em 0', lineHeight: '21px' }}
                >
                  <Trans i18nKey="aiplatform_m.desc1" components={{ 1: <br /> }} />
                </Text>
              </TextWrap>
            </HomeComponentWrap>
            <HomeComponentWrap>
              <TextWrap style={{ width: 'fit-content', marginBottom: '5em' }}>
                <HR $height="1px" $Width="20px" $color="#ffffff" style={{ width: '20px' }} />
                <Text $fontSize="18px" $fontWeight="500" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                  {t('aiplatform.subtitle2')}
                </Text>
                <Text
                  $fontSize="16px"
                  $fontWeight="300"
                  $color="#D3D3D3"
                  style={{ marginTop: '2em', width: '90vw', lineHeight: '20px' }}
                >
                  <Trans i18nKey="aiplatform_m.desc2" components={{ 1: <br /> }} />
                </Text>
              </TextWrap>
              <Image
                id="fadeIn"
                src={process.env.PUBLIC_URL + '/assets/images/ourapproach_aiplatform1.png'}
                alt="ai_middle1"
                style={{ width: '90vw', marginLeft: '0' }}
              />
              <TextWrap style={{ width: 'fit-content', marginTop: '5em', marginBottom: '5em' }}>
                <HR $height="1px" $color="#ffffff" style={{ width: '20px' }} />
                <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                  {t('aiplatform.subtitle3')}
                </Text>
                <Text $fontSize="16px" $fontWeight="300" $color="#C9C9C9" style={{ marginTop: '2em', width: '80vw' }}>
                  <Trans i18nKey="aiplatform_m.desc3" components={{ 1: <br /> }} />
                </Text>
              </TextWrap>
              <Image
                id="fadeIn"
                src={process.env.PUBLIC_URL + '/assets/interaction/360/AB3900IT_VD.png'}
                alt="ai_middle2"
                style={{ width: '90%' }}
              />
              <TextWrap style={{ width: 'fit-content', marginTop: '5em', marginBottom: '5em' }}>
                <HR $height="1px" $color="#ffffff" style={{ width: '20px' }} />
                <Text $fontSize="18px" $fontWeight="400" $color="#ffffff" style={{ margin: '2em 0 0 0' }}>
                  {t('aiplatform.subtitle4')}
                </Text>
                <Text $fontSize="16px" $fontWeight="200" $color="#C9C9C9" style={{ marginTop: '2em', width: '80vw' }}>
                  <Trans
                    i18nKey="aiplatform_m.desc4"
                    components={{ 1: <br />, 2: <span style={{ color: '#ffffff', fontWeight: '400' }}></span> }}
                  />
                </Text>
              </TextWrap>
              <Image
                id="fadeIn"
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
                  {t('aiplatform.subtitle5')}
                </Text>
                <Text
                  $fontSize="16px"
                  $fontWeight="300"
                  $color="#C9C9C9"
                  $align="start"
                  style={{ marginTop: '1.5em', width: '100%' }}
                >
                  <Trans i18nKey="aiplatform_m.desc5" components={{ 1: <br /> }} />
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
                    {item.title.replace(/\\n/g, '')}
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
                    padding: '24px 24px',
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
                      height: 'fit-content',
                      alignItems: 'start',
                      justifyContent: 'start',
                      borderBottom: '1px solid #6E6E6E',
                    }}
                  >
                    <Text
                      $fontWeight="500"
                      $color="#ffffff"
                      style={{
                        fontSize: '18px',
                        width: 'fit-content',
                        height: 'fit-content',
                        lineHeight: '1em',
                      }}
                    >
                      •{'\t'}
                      {predictions[activeButton].title.replace(/\\n/g, '')}
                    </Text>
                  </TextWrap>
                  <DescriptionWrap style={{ padding: '0', margin: '0', height: 'fit-content' }}>
                    {predictions[activeButton].content.map((item, index) => (
                      <DescriptionItem key={item + index} style={{ fontSize: '16px', fontWeight: '200' }}>
                        {item.split('\\n').map((line) => (
                          <span key={'prediction' + line}>
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
                  {t('aiplatform.subtitle6')}
                </Text>
                <Text $fontSize="16px" $fontWeight="300" $color="#C9C9C9" style={{ marginTop: '2em' }}>
                  <Trans i18nKey="aiplatform_m.desc6" components={{ 1: <br /> }} />
                </Text>
              </TextWrap>
              <Image
                id="fadeIn"
                src={process.env.PUBLIC_URL + '/assets/interaction/360/AB3600IT_VD.png'}
                alt="pathwaydata"
                style={{ height: '80vh' }}
              />

              <TextWrap style={{ width: '86vw', marginTop: '4em' }}>
                <Text $fontSize="16px" $fontWeight="300" $color="#C9C9C9" style={{ marginTop: '2em' }}>
                  <Trans i18nKey="aiplatform_m.desc6-2" components={{ 1: <br /> }} />
                </Text>
              </TextWrap>
            </HomeComponentWrap>
          </div>
        </Mobile>
      </div>
      <Footer />
    </Container>
  );
};

export default AiPlatform;
