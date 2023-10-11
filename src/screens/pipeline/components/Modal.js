import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import icon_close from '../assets/icon_close.svg';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContentWrap = styled.div`
  opacity: 1;
  width: 40%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(222, 222, 222, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 2px solid #707070;
  padding: 2rem;
  z-index: 10;
  overflow: hidden;
`;

const ModalTitleWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  background-color: transparent;
  margin: 0 1em;
  padding-bottom: 2em;
  border-bottom: 2px solid rgba(112, 112, 112, 1);
  gap: 1em;
`;

const ModalDescriotionWrap = styled.div`
  opacity: 1;
  width: 100%;
  height: fit-content;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: transparent;
  line-height: 1.5em;
`;

const Modal = ({ setIsModalOpen, item, title, content }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.getElementById('Modal')?.focus();
  }, [show]);
  const handleBlur = (e) => {
    console.log('blur');
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsModalOpen(false);
      setShow(false);
    }
  };
  return (
    <ModalWrap>
      <ModalContentWrap
        id="Modal"
        onBlur={(e) => {
          console.log('blur');
          handleBlur(e);
        }}
        tabIndex="0"
      >
        <ModalTitleWrap>
          <span style={{ margin: '1.5em 0' }}>•</span>
          <div style={{ width: '100%', fontSize: '24px', fontWeight: '300' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
              <span style={{ margin: '1em 0' }}>
                {item}
                {':'}
              </span>
              <span>{title}</span>
            </div>
          </div>
          <img
            style={{ padding: '0 0 0.5em 0', height: '2em', cursor: 'pointer' }}
            src={icon_close}
            onClick={() => {
              setIsModalOpen(false);
            }}
            alt="close"
          />
        </ModalTitleWrap>

        <ModalDescriotionWrap>{content}</ModalDescriotionWrap>
      </ModalContentWrap>
    </ModalWrap>
  );
};

export default Modal;
