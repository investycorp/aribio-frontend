import React, { useEffect, useState } from 'react';
import icon_circlearrow_dark from '../assets/icon_circlearrow_dark.svg';
import arrow from '../../../assets/images/arrow.svg';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { HomeComponentWrap, Text, Image, ComponentWrap, HR, Button, RowWrap } from '../style';

const DetailPage = () => {
  const navigate = useNavigate();
  const outletContext = useOutletContext();
  const [page, setPage] = useState('');
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    setCurrentItem(outletContext[1]);
    setPage(outletContext[0]);
  }, []);

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
    <HomeComponentWrap>
      <ComponentWrap style={{ justifyContent: 'center', alignItems: 'start' }}>
        <span
          style={{ display: 'flex', flexDirection: 'row', gap: '2em' }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <Image style={{ transform: 'rotate(180deg)', zIndex: '-1' }} src={icon_circlearrow_dark} alt="go back" />
          <Text style={{ width: 'fit-content', margin: '1em 0', padding: '0', zIndex: '-1' }}>Back</Text>
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
              borderRight: '1px solid #ffffff',
            }}
          >
            {page}
          </span>
          <span style={{ margin: '0.5em 1em', color: '#B2B2B2' }}>
            <span>
              {currentItem?.date?.split(' ')[1]}
              {'\t'}
            </span>
            <span>
              {currentItem?.date?.split(' ')[0]}
              {',\t'}
            </span>
            <span>{currentItem?.date?.split(' ')[2]}</span>
          </span>
        </Text>
        <Text style={{ width: '60%', margin: '1em 0', padding: '0', textAlign: 'start', fontSize: '32px' }}>
          {currentItem?.title}
        </Text>
        <HR style={{ margin: '3em 0' }} />
        <Text
          style={{
            width: '90%',
            margin: '1em 0',
            padding: '0',
            textAlign: 'start',
            fontSize: '20px',
            fontWeight: '200',
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
          <Image style={{ zIndex: '-1' }} src={arrow} alt="print" />
        </Button>
      </div>
    </HomeComponentWrap>
  );
};

export default DetailPage;
