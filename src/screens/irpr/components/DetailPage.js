import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { HomeComponentWrap, Text, Image, ComponentWrap, HR, Button } from '../style';
import { Desktop, Mobile } from '../../../utils/MediaQuery';
import { useRecoilValue } from 'recoil';

import useDetailContent from '../../../hooks/irpr/useDetailContent';
import Language from '../../../atom/Language';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const parser = new DOMParser();
  const [language] = useRecoilValue(Language);
  const outletContext = useOutletContext();
  const [page, setPage] = useState('');
  const [currentItem, setCurrentItem] = useState({});
  const [nextItem, setNextItem] = useState({});
  const [prevItem, setPrevItem] = useState({});
  const { data, isLoading, refetch } = useDetailContent(outletContext[0]?.toLowerCase(), language, id);

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
    setPage(outletContext[0]);
  }, []);

  useEffect(() => {
    setCurrentItem({});
    setNextItem({});
    setPrevItem({});
    if (data?.data?.success) {
      const item = data?.data.data;
      setCurrentItem({
        id: item.id,
        date: `${item.month} ${item.day}, ${item.year}`,
        title: item.title,
        image: item.image,
        content: <div>{item.contents.replace('\n', '<br/>')}</div>,
      });
      setNextItem({
        id:
          outletContext[0].toLowerCase() === 'notice'
            ? item.beforeAndAfterNoticeDto.afterNoticeId
            : item.beforeAndAfterPressReleaseDto.afterPressReleaseId,
        title:
          outletContext[0].toLowerCase() === 'notice'
            ? item.beforeAndAfterNoticeDto.afterNoticeTitle
            : item.beforeAndAfterPressReleaseDto.afterPressReleaseTitle,
      });
      setPrevItem({
        id:
          outletContext[0].toLowerCase() === 'notice'
            ? item.beforeAndAfterNoticeDto.beforeNoticeId
            : item.beforeAndAfterPressReleaseDto.beforePressReleaseId,
        title:
          outletContext[0].toLowerCase() === 'notice'
            ? item.beforeAndAfterNoticeDto.beforeNoticeTitle
            : item.beforeAndAfterPressReleaseDto.beforePressReleaseTitle,
      });
    }
    console.log(data?.data?.data?.id);
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
          {currentItem.image && (
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
          <Button onClick={() => clickPrint()}>
            <span style={{ padding: '0 0.5em', zIndex: '-1' }}>Print</span>{' '}
            <Image style={{ zIndex: '-1' }} src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'} alt="print" />
          </Button>
        </div>
        <HomeComponentWrap style={{ paddingTop: '3rem', borderTop: '2px solid #B5B5B5', marginTop: '3rem' }}>
          <ComponentWrap
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              columnGap: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {prevItem.id ? (
              <div>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${outletContext[0].toLowerCase()}/${prevItem.id}`}
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
                      width: '80%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '18px',
                      fontWeight: '400',
                      color: '#141414',
                      cursor: 'pointer',
                    }}
                  >
                    {prevItem?.title?.slice(0, 40)}...
                  </Text>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            {nextItem.id ? (
              <div>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${outletContext[0].toLowerCase()}/${nextItem.id}`}
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
                      width: '80%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '18px',
                      fontWeight: '400',
                      color: '#141414',
                    }}
                  >
                    {nextItem?.title?.slice(0, 40)}...
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
              <Link className="button" style={{ textDecoration: 'none' }} to="/irpr/notice">
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
                    minWidth: 'fit-content',
                    paddingBottom: '0.7em',
                    margin: '1em 0',
                    borderBottom: '1px solid #212121',
                    gap: '3em',
                    zIndex: '-1',
                    color: '#212121',
                    cursor: 'pointer',
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
            <span style={{ padding: '0 0.5em', zIndex: '-1', fontSize: '18px' }}>Print</span>{' '}
            <Image
              style={{ zIndex: '-1', height: '2rem' }}
              src={process.env.PUBLIC_URL + '/assets/icons/arrow.svg'}
              alt="print"
            />
          </Button>
        </div>
        <HomeComponentWrap style={{ paddingTop: '3rem', borderTop: '2px solid #B5B5B5', marginTop: '3rem' }}>
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
              <div>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${outletContext[0].toLowerCase()}/${prevItem.id}`}
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
                      width: '80%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '18px',
                      fontWeight: '400',
                      color: '#141414',
                      cursor: 'pointer',
                    }}
                  >
                    {prevItem?.title?.slice(0, 40)}...
                  </Text>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            {nextItem.id ? (
              <div>
                <Link
                  className="button"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={`/irpr/${outletContext[0].toLowerCase()}/${nextItem.id}`}
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
                      width: '80%',
                      margin: '1em 0',
                      padding: '0',
                      textAlign: 'start',
                      fontSize: '18px',
                      fontWeight: '400',
                      color: '#141414',
                    }}
                  >
                    {nextItem?.title?.slice(0, 40)}...
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
              <Link className="button" style={{ textDecoration: 'none' }} to="/irpr/notice">
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
                    minWidth: 'fit-content',
                    paddingBottom: '0.7em',
                    margin: '1em 0',
                    borderBottom: '1px solid #212121',
                    gap: '3em',
                    zIndex: '-1',
                    color: '#212121',
                    cursor: 'pointer',
                    fontSize: '18px',
                  }}
                >
                  <span style={{ zIndex: '-1' }}>View List</span>
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
      </Mobile>
    </HomeComponentWrap>
  );
};

export default DetailPage;
