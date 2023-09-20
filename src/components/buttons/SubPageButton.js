import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrow.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: ${(props) => (props.align ? props.align : 'flex-end')};
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
    img {
      box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
    }
  }
`;

const SubPageButton = ({ linkTo, align }) => {
  const navigate = useNavigate();
  const link = linkTo;

  return (
    <Container onClick={() => navigate('/')} align={align}>
      <span style={{ fontSize: '26px', fontWeight: '300', marginRight: '1rem' }}>{link}</span>
      <img src={arrow} alt="arrow" style={{ border: '2px solid #ffffff', borderRadius: '50%', height: '40px' }} />
    </Container>
  );
};

export default SubPageButton;
