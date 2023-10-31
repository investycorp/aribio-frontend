import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { HomeComponentWrap, Text, Image, ComponentWrap, HR, Button } from '../style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';
import { useRecoilValue } from 'recoil';

import useDetailContent from '../../../hooks/irpr/useDetailContent';
import Language from '../../../atom/Language';

import { ContainerGridLineWrap, GridLineBox } from '../../../components/style';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [language] = useRecoilValue(Language);
  const outletContext = useOutletContext();
  const [page, setPage] = useState('');
  const [currentItem, setCurrentItem] = useState({});
  const [nextItem, setNextItem] = useState({});
  const [prevItem, setPrevItem] = useState({});
  const { data, isLoading, refetch } = useDetailContent(outletContext[0]?.toLowerCase(), language, id);

  useEffect(() => {
    document.querySelector('.irpr_detailpage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setPage(outletContext[0].replace(' ', ''));
  }, []);

  useEffect(() => {
    console.log(data?.data);
    setCurrentItem({});
    setNextItem({});
    setPrevItem({});
    if (data?.data?.success) {
      const item = data?.data.data;
      setCurrentItem({
        id: item.id,
        date: `${item.month} ${item.day}, ${item.year}`,
        title: item?.title?.split('\\n')?.map((line, index) => (
          <span key={'title line' + index}>
            {line}
            <br />
          </span>
        )),
        image: item.image,
        content: item?.contents?.split('\\n')?.map((line, index) => (
          <span key={'content line' + index}>
            {line}
            <br />
          </span>
        )),
      });
      // outletContext[0].toLowerCase() === 'notice'
      //       ? item.beforeAndAfterNoticeDto.afterNoticeId
      //       : item.beforeAndAfterPressReleaseDto.afterPressReleaseId,
      setNextItem({
        id:
          outletContext[0].toLowerCase() === 'notice'
            ? item?.beforeAndAfterNoticeDto?.afterNoticeId
            : item?.beforeAndAfterPressReleaseDto?.afterPressReleaseId,

        title:
          outletContext[0].toLowerCase() === 'notice'
            ? item?.beforeAndAfterNoticeDto?.afterNoticeTitle
            : item?.beforeAndAfterPressReleaseDto?.afterPressReleaseTitle,
      });
      setPrevItem({
        id:
          outletContext[0].toLowerCase() === 'notice'
            ? item?.beforeAndAfterNoticeDto?.afterNoticeId
            : item?.beforeAndAfterPressReleaseDto?.beforePressReleaseId,

        title:
          outletContext[0].toLowerCase() === 'notice'
            ? item?.beforeAndAfterNoticeDto?.afterNoticeTitle
            : item?.beforeAndAfterPressReleaseDto?.beforePressReleaseTitle,
      });
    }
  }, [data]);

  useEffect(() => {
    refetch(outletContext[0]?.toLowerCase(), language, id);
  }, [id]);

  const clickPrint = () => {
    const printContents = document.getElementById('printableid').innerHTML;
    console.log(printContents.replace('style="', 'style="color: #000000 !important;'));
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <HomeComponentWrap id="irpr_detailpage" style={{ backgroundColor: '#fff' }}>
      <ContainerGridLineWrap
        className="grid_bg"
        style={{ position: 'absolute', height: '100%', visibility: 'visible', opacity: '1', zIndex: '0' }}
      >
        <GridLineBox style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }} />
        <GridLineBox style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }} />
        <GridLineBox style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }} />
      </ContainerGridLineWrap>
      <Desktop>
        <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
          <span
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: window.innerWidth > 1280 ? '2em' : '1em',
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Image
              style={{ zIndex: '-1', height: window.innerWidth > 1280 ? '44px' : '28px' }}
              src={process.env.PUBLIC_URL + '/assets/icons/circle_arrow.svg'}
              alt="go back"
            />
            <Text
              style={{
                fontSize: window.innerWidth > 1280 ? '26px' : '15px',
                width: 'fit-content',
                margin: '1em 0',
                padding: '0',
                zIndex: '-1',
                color: '#414141',
              }}
            >
              Back
            </Text>
          </span>
        </ComponentWrap>
        <ComponentWrap id="printableid" style={{ justifyContent: 'center', alignItems: 'start' }}>
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
                fontSize: window.innerWidth > 1280 ? '22px' : '12px',
              }}
            >
              {page}
            </span>
            <span
              style={{ margin: '0.5em 1em', color: '#727272', fontSize: window.innerWidth > 1280 ? '22px' : '12px' }}
            >
              <span>{currentItem?.date}</span>
            </span>
          </Text>
          <Text
            style={{
              width: '60%',
              margin: '1em 0',
              padding: '0',
              textAlign: 'start',
              fontSize: window.innerWidth > 1280 ? '32px' : '18px',
              color: '#141414',
              fontWeight: '400',
            }}
          >
            {currentItem?.title}
          </Text>
          <HR style={{ margin: '3em 0' }} $color="#B5B5B5" />
          {currentItem.image && (
            <Image src={currentItem?.image} alt="image" style={{ width: '50%', margin: '1rem 0' }} />
          )}
          <Text
            style={{
              width: '90%',
              margin: '1em 0',
              padding: '0',
              textAlign: 'start',
              fontSize: window.innerWidth > 1280 ? '20px' : '12px',
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
          <Button onClick={() => clickPrint()}>
            <span style={{ padding: '0.1em 0.5em 0 0', zIndex: '-1' }}>Print</span>{' '}
            <Image style={{ zIndex: '-1' }} src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'} alt="print" />
          </Button>
        </div>
        <HomeComponentWrap
          style={{ height: 'fit-content', padding: '3rem 0 0 0', borderTop: '2px solid #B5B5B5', marginTop: '3rem' }}
        >
          <ComponentWrap
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              columnGap: '0',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 'fit-content',
            }}
          >
            {prevItem.id ? (
              <div style={{ height: 'fit-content' }}>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${page?.toLowerCase()}/${prevItem.id}`}
                >
                  <Text
                    style={{
                      margin: '3em 0 2em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '18px',
                      fontWeight: '200',
                      color: '#909090',
                      cursor: 'pointer',
                    }}
                  >
                    PREV
                  </Text>
                  <HR $color="#909090" $width="3em" style={{ cursor: 'pointer' }} />

                  <Text
                    className="prev"
                    style={{
                      width: '90%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: window.innerWidth > 1280 ? '24px' : '13px',
                      fontWeight: '400',
                      color: '#141414',
                      cursor: 'pointer',
                    }}
                  >
                    {prevItem?.title?.slice(0, 60)}...
                  </Text>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            {nextItem.id ? (
              <div style={{ height: 'fit-content' }}>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${page?.toLowerCase()}/${nextItem.id}`}
                >
                  <Text
                    style={{
                      margin: '3em 0 2em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '18px',
                      fontWeight: '200',
                      color: '#909090',
                      cursor: 'pointer',
                    }}
                  >
                    NEXT
                  </Text>
                  <HR $color="#909090" $width="3em" style={{ cursor: 'pointer' }} />

                  <Text
                    className="next"
                    style={{
                      width: '90%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: window.innerWidth > 1280 ? '24px' : '13px',
                      fontWeight: '400',
                      color: '#141414',
                    }}
                  >
                    {nextItem?.title?.slice(0, 60)}...
                  </Text>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            <div
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                alignItems: 'end',
              }}
            >
              <Link
                className="button"
                style={{ textDecoration: 'none' }}
                to={page?.toLowerCase().includes('press') ? '/irpr/pressrelease' : 'notice'}
              >
                <Text
                  $fontSize="20px"
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: window.innerWidth > 1280 ? '260px' : '158px',
                    paddingBottom: '0.7em',
                    margin: '1em 0',
                    borderBottom: '1px solid #212121',
                    gap: '3em',
                    zIndex: '-1',
                    color: '#212121',
                    cursor: 'pointer',
                    fontSize: window.innerWidth > 1280 ? '20px' : '13px',
                  }}
                >
                  <span style={{ color: '#212121', zIndex: '-1' }}>View List</span>
                  <Image
                    src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'}
                    alt="arrow"
                    style={{ width: '1.2rem', zIndex: '-1' }}
                  />
                </Text>
              </Link>
            </div>
          </ComponentWrap>
        </HomeComponentWrap>
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
                fontSize: window.innerWidth > 1280 ? '18px' : '13px',
                color: '#414141',
              }}
            >
              Back
            </Text>
          </span>
        </ComponentWrap>
        <ComponentWrap id="printableid" style={{ justifyContent: 'center', alignItems: 'start' }}>
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
            id="printableid"
            style={{
              width: '100%',
              margin: '1rem 0',
              padding: '0',
              textAlign: 'start',
              fontSize: '21px',
              fontWeight: '400',
              lineHeight: '25px',
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
            id="printableid"
          >
            {currentItem?.content}
          </Text>
        </ComponentWrap>
        <div
          style={{
            margin: '4em 0 1em 0',
            padding: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'end',
            hover: 'none',
          }}
        >
          <Button style={{ width: '90px', height: '41px', padding: '0' }} onClick={() => clickPrint()}>
            <span style={{ padding: '0 0.5em', zIndex: '-1', fontSize: '15px', fontWeight: '400' }}>Print</span>{' '}
            <Image
              style={{ zIndex: '-1', width: '9.4px' }}
              src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'}
              alt="print"
            />
          </Button>
        </div>
        <HomeComponentWrap style={{ padding: '0', borderTop: '1px solid #B5B5B5', marginTop: '2em' }}>
          <ComponentWrap
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              columnGap: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {prevItem.id ? (
              <div style={{ height: 'fit-content' }}>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${page?.toLowerCase()}/${prevItem.id}`}
                >
                  <Text
                    style={{
                      margin: '3em 0 1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#909090',
                      cursor: 'pointer',
                    }}
                  >
                    PREV
                  </Text>
                  <HR $color="#909090" $width="35px" $height="1px" style={{ margin: '0', cursor: 'pointer' }} />

                  <Text
                    className="prev"
                    style={{
                      width: '80%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '16px',
                      fontWeight: '400',
                      color: 'rgba(75,75,75,1)',
                      cursor: 'pointer',
                    }}
                  >
                    {prevItem?.title?.slice(0, 60)}...
                  </Text>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            {nextItem.id ? (
              <div style={{ height: 'fit-content' }}>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${page?.toLowerCase()}/${nextItem.id}`}
                >
                  <Text
                    style={{
                      margin: '3em 0 1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#909090',
                      cursor: 'pointer',
                    }}
                  >
                    NEXT
                  </Text>
                  <HR $color="#909090" $width="35px" $height="1px" style={{ margin: '0', cursor: 'pointer' }} />

                  <Text
                    className="next"
                    style={{
                      width: '80%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '16px',
                      fontWeight: '400',
                      color: 'rgba(75,75,75,1)',
                    }}
                  >
                    {nextItem?.title?.slice(0, 60)}...
                  </Text>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                alignItems: 'end',
              }}
            >
              <Link
                className="button"
                style={{ textDecoration: 'none' }}
                to={page?.toLowerCase().includes('press') ? '/irpr/pressrelease' : 'notice'}
              >
                <Text
                  $fontSize="18px"
                  $fontWeight="300"
                  $color="#ffffff"
                  $align="start"
                  $clickable={true}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                    margin: '1em 0',
                    borderBottom: '1px solid #212121',
                    gap: '3em',
                    zIndex: '-1',
                    color: '#212121',
                    cursor: 'pointer',
                    width: '213px',
                  }}
                >
                  <span style={{ zIndex: '-1', fontSize: '16px', fontWeight: '400' }}>View List</span>
                  <Image
                    src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'}
                    alt="arrow"
                    style={{ width: '12px', height: '12px', zIndex: '-1' }}
                  />
                </Text>
              </Link>
            </div>
          </ComponentWrap>
        </HomeComponentWrap>
      </Mobile>
    </HomeComponentWrap>
  );
};

export default DetailPage;
