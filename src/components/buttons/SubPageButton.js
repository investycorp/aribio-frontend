import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrow.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: ${(props) => (props.$align ? props.$align : 'flex-end')};
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
    img {
      box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
    }
  }
`;

const SubPageButton = ({ title, linkTo, align }) => {
  return (
    <Container $align={align}>
      <Link
        to={`/${linkTo}`}
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '26px', fontWeight: '300', marginRight: '1rem' }}>{title}</span>
        <img src={arrow} alt="arrow" style={{ border: '2px solid #ffffff', borderRadius: '50%', height: '40px' }} />
      </Link>
    </Container>
  );
};

export default SubPageButton;
