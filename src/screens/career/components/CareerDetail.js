import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { HomeComponentWrap, Text, Image, ComponentWrap, HR, Button } from '../style';
import { ContainerGridLineWrap, GridLineBox } from '../../../components/style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';
import { useRecoilValue } from 'recoil';

import useCareerDetail from '../../../hooks/career/useCareerDetail';
import Language from '../../../atom/Language';

const CareerDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const parser = new DOMParser();
  const [language] = useRecoilValue(Language);
  const outletContext = useOutletContext();
  const [page, setPage] = useState('Career');
  const [currentItem, setCurrentItem] = useState({});

  const { data, isLoading, refetch } = useCareerDetail(language, id);

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.querySelector('.irpr_detailpage')?.scrollIntoView({ block: 'start' });
  }, []);

  useEffect(() => {
    setCurrentItem({});
    const getHTMl = (content) => {
      let regex = /<b>(.*?)<\/b>|([^<>]+)/g;
      let matches;
      let result = [];
      while ((matches = regex.exec(content))) {
        if (matches[1]) {
          result.push(`<span style="font-weight: bold">${matches[1]}<br/></span>`);
        }
        // If the match is outside <b> tags, push the captured content
        else if (matches[2]) {
          result.push(`<span >${matches[2]}<br/><span>`);
        }
      }

      return result;
    };
    if (data?.data?.success) {
      const item = data?.data?.data;
      const temp = getHTMl(item.popupContents);
      setCurrentItem({
        id: item.id,
        date: `${item.month} ${item.day}, ${item.year}`,
        title: `[${item.location}] ${item.jobGroup}`,
        image: item.popupFileDto?.fileUrl,
        content: (
          <>
            {temp?.map((line, index) => (
              <span key={'content line' + index} dangerouslySetInnerHTML={{ __html: line }}></span>
            ))}
          </>
        ),
        url: item.url,
      });
    }
    console.log(data?.data?.data);
  }, [data]);

  useEffect(() => {
    // refetch(outletContext[0]?.toLowerCase(), language, id);
  }, [id]);

  return (
    <HomeComponentWrap id="irpr_detailpage" style={{ backgroundColor: '#fff' }}>
      <Desktop>
        <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
          <span
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              gap: window.innerWidth > 1280 ? '2em' : '1em',
              zIndex: '10',
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Image
              style={{ zIndex: '-1', height: window.innerWidth > 1280 ? '44px' : '28px', margin: 'auto' }}
              src={process.env.PUBLIC_URL + '/assets/icons/circle_arrow.svg'}
              alt="go back"
            />
            <Text
              style={{
                width: 'fit-content',
                margin: '1em 0',
                padding: '0',
                zIndex: '-1',
                color: '#414141',
                fontSize: window.innerWidth > 1280 ? '26px' : '15px',
              }}
            >
              Back
            </Text>
          </span>
        </ComponentWrap>
        <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
          <Text
            style={{
              display: 'grid',
              gridTemplateColumns: 'fit-content(20em) fit-content(20em)',
              Width: 'fit-content',
              margin: '0',
              padding: '0',
              textAlign: 'start',
              lineHeight: '1em',
            }}
          >
            <span
              style={{
                width: 'auto',
                padding: '0 1em 0 0',
                margin: '0.5em 0',
                borderRight: '1px solid #727272',
                color: '#005684',
                fontSize: window.innerWidth > 1280 ? '22px' : '12px',
                lineHeight: '1em',
              }}
            >
              {page}
            </span>
            <span
              style={{
                width: 'auto',
                fontSize: window.innerWidth > 1280 ? '22px' : '12px',
                lineHeight: '1em',
                margin: '0.5em 1em',
                color: '#727272',
              }}
            >
              <span>{currentItem?.date}</span>
            </span>
          </Text>
          <Text
            style={{
              width: '60%',
              margin: window.innerWidth > 1280 ? '1em 0' : '0.5em 0',
              padding: '0',
              textAlign: 'start',
              fontSize: window.innerWidth > 1280 ? '32px' : '18px',
              color: '#141414',
              fontWeight: '400',
              whiteSpace: 'pre-line',
            }}
          >
            {currentItem?.title}
          </Text>
          <HR style={{ margin: window.innerWidth > 1280 ? '3em 0' : '3em 0 1em 0' }} $color="#B5B5B5" />
          {currentItem?.image && (
            <Image src={currentItem?.image} alt="image" style={{ width: '50%', margin: '1rem 0' }} />
          )}
          <Text
            style={{
              width: '90%',
              margin: '1em 0',
              padding: '0',
              textAlign: 'start',
              fontSize: window.innerWidth > 1280 ? '20px' : '14px',
              fontWeight: '200',
              color: '#272727',
              whiteSpace: 'pre-line',
            }}
          >
            {currentItem?.content}
          </Text>
        </ComponentWrap>
        <div
          style={{
            margin: '3em',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'end',
            hover: 'none',
          }}
        >
          <Button
            onClick={() => window.open(currentItem?.url, '_blank')}
            style={{
              width: window.innerWidth > 1280 ? '260px' : '158px',
              justifyContent: 'space-between',
              borderBottom: '1px solid #212121',
            }}
          >
            <span style={{ fontSize: window.innerWidth > 1280 ? '20px' : '12px', padding: '0.5rem 0', zIndex: '-1' }}>
              Apply for this job
            </span>{' '}
            <Image
              style={{ zIndex: '-1', width: window.innerWidth > 1280 ? '14px' : '9px' }}
              src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'}
              alt="print"
            />
          </Button>
        </div>
      </Desktop>
      <Mobile>
        <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
          <span
            style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Image
              style={{ zIndex: '-1', height: '20px' }}
              src={process.env.PUBLIC_URL + '/assets/icons/circle_arrow.svg'}
              alt="go back"
            />
            <Text
              style={{
                width: 'fit-content',
                margin: '1em 0',
                padding: '0',
                zIndex: '-1',
                fontSize: '18px',
                color: '#414141',
              }}
            >
              Back
            </Text>
          </span>
        </ComponentWrap>
        <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
          <Text
            style={{
              display: 'grid',
              gridTemplateColumns: 'fit-content(20em) fit-content(20em)',
              Width: 'fit-content',
              margin: '0',
              padding: '0',
              textAlign: 'start',
              lineHeight: '1em',
              fontSize: '16px',
            }}
          >
            <span
              style={{
                width: 'fit-content',
                padding: '0 1em 0 0',
                margin: '0.5em 0',
                borderRight: '1px solid #727272',
                color: '#005684',
              }}
            >
              {page}
            </span>
            <span style={{ margin: '0.5em 1em', color: '#727272' }}>
              <span>{currentItem?.date}</span>
            </span>
          </Text>
          <Text
            style={{
              width: '100%',
              margin: '1rem 0',
              padding: '0',
              textAlign: 'start',
              fontSize: '21px',
              color: '#141414',
              whiteSpace: 'pre-line',
            }}
          >
            {currentItem?.title}
          </Text>
          <HR style={{ margin: '1rem 0', width: '40px', height: '1px' }} $color="#B5B5B5" />
          {currentItem.image && (
            <Image src={currentItem?.image} alt="image" style={{ width: '50%', margin: '1rem 0' }} />
          )}
          <Text
            style={{
              width: '100%',
              margin: '1em 0',
              padding: '0',
              textAlign: 'start',
              fontSize: '18px',
              lineHeight: '23px',
              fontWeight: '200',
              color: '#272727',
              whiteSpace: 'pre-line',
            }}
          >
            {currentItem?.content}
          </Text>
        </ComponentWrap>
        <div
          style={{
            margin: '3em',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'end',
            hover: 'none',
          }}
        >
          <Button
            onClick={() => window.open(currentItem?.url, '_blank')}
            style={{ width: '213px', borderBottom: '1px solid #707070', justifyContent: 'space-between' }}
          >
            <span style={{ color: '#212121', padding: '0.5rem 0', zIndex: '-1', fontSize: '16px', fontWeight: '400' }}>
              Apply for this job
            </span>
            <Image
              style={{ zIndex: '-1', height: '10px' }}
              src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'}
              alt="print"
            />
          </Button>
        </div>
      </Mobile>
    </HomeComponentWrap>
  );
};

export default CareerDetail;
