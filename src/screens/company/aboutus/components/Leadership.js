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

const Leadership = () => {
  const [tabContents, setTabContents] = useState([
    {
      position: 'CEO & Chairman',
      name: 'Jai Jun Choung',
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
      photo: leadershipphoto1,
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
              <Text $fontSize="34px" $fontWeight="400" $align="start" style={{ margin: '0' }}>
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
                  style={{ paddingRight: index % 3 === 2 && '7vw' }}
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
                  <DescriptionItem key={index}>{item}</DescriptionItem>
                ))}
              </DescriptionWrap>
            </ContentBoxNameWrap>
          </ContentBox>
        ))}
      </TabContentWrap>
    </HomeComponentWrap>
  );
};

export default Leadership;
