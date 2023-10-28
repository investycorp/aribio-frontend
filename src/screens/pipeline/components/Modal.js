import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import icon_close from '../assets/icon_close.svg';
import { Desktop, Mobile } from '../../../utils/MediaQuery';

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
  width: 818px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 2px solid #707070;
  padding: 2rem;
  z-index: 10;
  overflow: hidden;
  @media (max-width: 1280px) {
    width: 656px;
  }
  @media (max-width: 900px) {
    width: 84vw;
  }
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
  padding-bottom: 1em;
  border-bottom: 2px solid rgba(112, 112, 112, 1);
  gap: 1em;
`;

const ModalDescriotionWrap = styled.div`
  opacity: 1;
  width: 100%;
  height: fit-content;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: transparent;
  line-height: 1.5em;
  font-size: 20px;
  font-weight: 100;
  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const Modal = ({ setIsModalOpen, item, title, content }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.getElementById('Modal')?.focus();
  }, [show]);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsModalOpen(false);
      setShow(false);
    }
  };

  return (
    <ModalWrap>
      <Desktop>
        <ModalContentWrap
          id="Modal"
          onBlur={(e) => {
            handleBlur(e);
          }}
          tabIndex={1}
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
      </Desktop>
      <Mobile>
        <ModalContentWrap
          id="Modal"
          onBlur={(e) => {
            handleBlur(e);
          }}
          tabIndex={1}
        >
          <ModalTitleWrap>
            <span style={{ margin: '1em 0' }}>•</span>
            <div style={{ width: '100%', fontSize: '16px', fontWeight: '300' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ margin: '1em 0' }}>{item}</span>
                  <img
                    style={{ padding: '0', height: '24px', cursor: 'pointer' }}
                    src={icon_close}
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                    alt="close"
                  />
                </div>
                <span>{title}</span>
              </div>
            </div>
          </ModalTitleWrap>
          <ModalDescriotionWrap>{content}</ModalDescriotionWrap>
        </ModalContentWrap>
      </Mobile>
    </ModalWrap>
  );
};

export default Modal;
