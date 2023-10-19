import React, { useEffect, useState } from 'react';
import leadershipphoto1 from '../../../../assets/images/aboutus/leadershipphoto1.png';
import minus from '../../../../assets/images/aboutus/minus.svg';
import plus from '../../../../assets/images/aboutus/plus.svg';
import {
  HomeComponentWrap,
  Text,
  TabContentWrap,
  ContentBox,
  ContentBoxNameWrap,
  Image,
  DescriptionWrap,
  DescriptionItem,
} from '../style';
import aboutus_ceo from '../assets/aboutus_ceo.png';
import aboutus_coo from '../assets/aboutus_coo.png';
import aboutus_cio from '../assets/aboutus_cio.png';
import aboutus_cmo from '../assets/aboutus_cmo.png';
import aboutus_cfo from '../assets/aboutus_cfo.png';
import aboutus_clo from '../assets/aboutus_clo.png';
import aboutus_cqo from '../assets/aboutus_cqo.png';
import aboutus_brchead from '../assets/aboutus_brchead.png';
import aboutus_rndhead from '../assets/aboutus_rndhead.png';
import aboutus_cco from '../assets/aboutus_cco.png';
import { Desktop, Mobile } from '../../../../utils/MediaQuery';

const Leadership = () => {
  const [tabContents, setTabContents] = useState([
    {
      position: 'CEO & Chairman',
      name: 'Jai Jun Choung',
      photo: aboutus_ceo,
      isOpen: true,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
        'Yonsei University College of Medicine, Department of Internal Medicine, Adjunct Professor',
        'New drug development and license consulting, including Pacific, SK Holdings, and Anguk Pharm.',
        'Leading the development of more than 40 non-clinical, clinical phase 1, 2, and 3 new drug development projects',
        'Technology transfer to Schwarz Pharma, Pfizer, P&G, etc.',
      ],
    },
    {
      position: 'Chief Operating Officer',
      name: 'Myung-Yoon, Chun',
      photo: aboutus_coo,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'Chief Information Officer',
      name: 'Jin-Woo, Kim',
      photo: aboutus_cio,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'Chief Medical Officer',
      name: 'Dr. Greeley',
      photo: aboutus_cmo,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'Chief Finance Officer',
      name: 'Hyuk, Song',
      photo: aboutus_cfo,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'Chief Legal Officer',
      name: 'Ju-Hyung, Lee',
      photo: aboutus_clo,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'Chief Quality Officer',
      name: 'Na-Young, Kim',
      photo: aboutus_cqo,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'BRC Head',
      name: 'Dong-Keun, Song',
      photo: aboutus_brchead,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'R&BD Head',
      name: 'Jae-Young, Ha',
      photo: aboutus_rndhead,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
    {
      position: 'Chief Clinical Officer',
      name: 'James Rock',
      photo: aboutus_cco,
      isOpen: false,
      description: [
        'University of Glasgow, Physiological Biochemistry, PhD',
        'EU Biotech Development Ltd. CEO',
        'AriBio Co.,Ltd. Central Research Institute CTO',
      ],
    },
  ]);
  return (
    <HomeComponentWrap style={{ width: '100vw', padding: '0', justifyContent: 'start', overflow: 'hidden' }}>
      <Desktop>
        <TabContentWrap>
          {tabContents.map((item, index) => (
            <ContentBox key={index}>
              <Text
                $align="start"
                $color="#F2F2F2"
                $fontSize="20px"
                style={{ paddingLeft: index % 3 === 0 ? '7vw' : '0', margin: '0' }}
              >
                {item.position}
              </Text>
              <Image src={item.photo} alt="leadershipphoto1" />
              <ContentBoxNameWrap style={{ paddingLeft: (index + 1) % 3 !== 1 && '0' }}>
                <Text
                  $fontSize={window.innerWidth > 1280 ? '34px' : '20'}
                  $fontWeight="400"
                  $align="start"
                  style={{ margin: '0' }}
                >
                  {item.name}
                </Text>
                {item.isOpen ? (
                  <Image
                    className="toggle"
                    onClick={() => {
                      const newTabContents = tabContents.map((item, idx) => {
                        if (idx === index) {
                          return { ...item, isOpen: !item.isOpen };
                        }
                        return item;
                      });
                      setTabContents(newTabContents);
                    }}
                    src={minus}
                    alt="minus"
                    style={{ paddingRight: index % 3 === 2 && '7vw' }}
                  />
                ) : (
                  <Image
                    className="toggle"
                    onClick={() => {
                      const newTabContents = tabContents.map((item, idx) => {
                        if (idx === index) {
                          return { ...item, isOpen: !item.isOpen };
                        }
                        return item;
                      });
                      setTabContents(newTabContents);
                    }}
                    src={plus}
                    alt="plus"
                    style={{ paddingRight: index % 3 === 2 && '7vw' }}
                  />
                )}
                <DescriptionWrap
                  style={{
                    padding: index % 3 === 0 ? ' 0 40px 0 10vw' : index % 3 === 1 ? '0 40px 0 3vw' : '0 10vw 0 3vw',
                  }}
                  $isActive={item.isOpen}
                >
                  {item.description.map((item, index) => (
                    <DescriptionItem key={'description' + index}>{item}</DescriptionItem>
                  ))}
                </DescriptionWrap>
              </ContentBoxNameWrap>
            </ContentBox>
          ))}
        </TabContentWrap>
      </Desktop>

      <Mobile>
        <TabContentWrap>
          {tabContents.map((item, index) => (
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: `${index % 2 === 0 ? 'flex-start' : 'flex-end'}`,
              }}
              key={'tabcontent' + index}
            >
              <ContentBox key={index}>
                <Text
                  $align="start"
                  $color="#F2F2F2"
                  $fontSize="20px"
                  style={{ paddingLeft: `${index % 2 === 0 ? '7vw' : '0'}`, margin: '0' }}
                >
                  {item.position}
                </Text>
                <Image src={item.photo} alt="leadershipphoto" style={{ width: '100%' }} />
                <ContentBoxNameWrap style={{ paddingLeft: `${index % 2 === 0 ? '7vw' : '0'}` }}>
                  <Text $fontSize="18px" $fontWeight="400" $align="start" style={{ margin: '0' }}>
                    {item.name}
                  </Text>
                  {item.isOpen ? (
                    <Image
                      onClick={() => {
                        const newTabContents = tabContents.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item.isOpen };
                          }
                          return item;
                        });
                        setTabContents(newTabContents);
                      }}
                      src={minus}
                      alt="minus"
                      style={{ height: '1.5rem' }}
                    />
                  ) : (
                    <Image
                      onClick={() => {
                        const newTabContents = tabContents.map((item, idx) => {
                          if (idx === index) {
                            return { ...item, isOpen: !item.isOpen };
                          }
                          return item;
                        });
                        setTabContents(newTabContents);
                      }}
                      src={plus}
                      alt="plus"
                      style={{ height: '1.5rem' }}
                    />
                  )}
                </ContentBoxNameWrap>
                <DescriptionWrap
                  style={{
                    padding: index % 3 === 0 ? ' 0 40px 0 10vw' : index % 3 === 1 ? '0 40px 0 3vw' : '0 10vw 0 3vw',
                  }}
                  $isActive={item.isOpen}
                >
                  {item.description.map((item, index) => (
                    <DescriptionItem key={item + index}>{item}</DescriptionItem>
                  ))}
                </DescriptionWrap>
              </ContentBox>
            </div>
          ))}
        </TabContentWrap>
      </Mobile>
    </HomeComponentWrap>
  );
};

export default Leadership;
