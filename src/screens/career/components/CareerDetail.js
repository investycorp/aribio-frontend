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
  const [page, setPage] = useState('Career_join us');
  const [currentItem, setCurrentItem] = useState({});

  const { data, isLoading, refetch } = useCareerDetail(language, id);

  //     date: '26 JUL 2023',
  //     title:
  //       '[AP News]AriBio Co., Ltd. Announces the Successful Completion of Their End of Phase 2 Meeting With the USFDA',
  //     content: (
  //       <div>
  //       </div>
  //     ),
  //   },

  useEffect(() => {
    document.querySelector('.irpr_detailpage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    setCurrentItem({});
    if (data?.data?.success) {
      const item = data?.data?.data;
      setCurrentItem({
        id: item.id,
        date: `${item.month} ${item.day}, ${item.year}`,
        title: item.jobGroup,
        image: item.popupFileDto?.fileUrl,
        content: (
          <>
            {item.popupContents.split('\\n').map((line, index) => {
              return (
                <span key={'content line' + index} style={{ fontSize: '18', lineHeight: '23px' }}>
                  {line}
                  <br />
                </span>
              );
            })}
          </>
        ),
        url: item.url,
      });
    }
    console.log(data?.data);
  }, [data]);

  useEffect(() => {
    // refetch(outletContext[0]?.toLowerCase(), language, id);
  }, [id]);

  return (
    <HomeComponentWrap id="irpr_detailpage" style={{ backgroundColor: '#fff' }}>
      <ContainerGridLineWrap className="grid_bg" style={{ visibility: 'visible', opacity: '0.6', zIndex: '0' }}>
        <GridLineBox />
        <GridLineBox />
        <GridLineBox />
      </ContainerGridLineWrap>
      <Desktop>
        <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
          <span
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', gap: '2em' }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Image
              style={{ zIndex: '-1' }}
              src={process.env.PUBLIC_URL + '/assets/icons/circle_arrow.svg'}
              alt="go back"
            />
            <Text style={{ width: 'fit-content', margin: '1em 0', padding: '0', zIndex: '-1', color: '#414141' }}>
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
              width: '60%',
              margin: '1em 0',
              padding: '0',
              textAlign: 'start',
              fontSize: window.innerWidth > 1280 ? '32px' : '24px',
              color: '#141414',
              fontWeight: '400',
            }}
          >
            {currentItem?.title}
          </Text>
          <HR style={{ margin: '3em 0' }} $color="#B5B5B5" />
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
            onClick={() => currentItem?.url && (window.location.href = `//${currentItem.url}`)}
            style={{ width: 'fit-content', borderBottom: '1px solid #707070' }}
          >
            <span style={{ padding: '0.5rem', zIndex: '-1' }}>Apply for this job</span>{' '}
            <Image
              style={{ zIndex: '-1', width: '1rem' }}
              src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'}
              alt="print"
            />
          </Button>
        </div>
      </Desktop>
      <Mobile>
        <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
          <span
            style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Image
              style={{ zIndex: '-1', height: '2rem' }}
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
            onClick={() => currentItem?.url && (window.location.href = `//${currentItem.url}`)}
            style={{ width: '213px', borderBottom: '1px solid #707070', justifyContent: 'space-between' }}
          >
            <span style={{ padding: '0.5rem 0', zIndex: '-1', fontSize: '16px', fontWeight: '400' }}>
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
