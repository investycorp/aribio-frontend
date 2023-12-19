import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Desktop, Mobile } from '../utils/MediaQuery';
import { useRecoilState } from 'recoil';
import Language from '../atom/Language';
import ModalClose from '../atom/ModalClose';

import usePopup from '../hooks/popup/usePopup';

const ModalContainer = styled.div`
  position: fixed;

  z-index: 100;
  overflow: hidden;
  background-color: white;
`;

const Modal = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const [modalClose, setModalClose] = useRecoilState(ModalClose);
  const [modalData, setModalData] = useState();
  const { data: popupData } = usePopup(language);

  useEffect(() => {
    popupData?.data?.dataList.length > 0 && setModalData(popupData?.data?.dataList);
  }, [popupData, language]);

  return (
    <>
      <Desktop>
        {modalData?.map(
          (data) =>
            localStorage.getItem('modal' + data.id) !== 'false' &&
            data?.language?.slice(0, 3) === language &&
            !modalClose?.includes(data.id) &&
            data.type === 'PC' && (
              <ModalContainer
                style={{
                  top: `${data.topSide}px`,
                  left: `${data.leftSide}px`,
                  width: `${data.width}px`,
                  height: `${data.length}px`,
                  border: '2px solid #121212',
                  borderRadius: '5px',
                }}
                key={data.id}
              >
                <h2 style={{ backgroundColor: '#121212', color: '#989898', width: '100%', padding: '0 10px' }}>
                  {data.title}
                </h2>
                <div
                  style={{
                    display: 'block',

                    width: '100%',
                    height: '100%',
                    padding: '20px 10px 10px 10px',
                    borderRadius: '5px',
                  }}
                >
                  <img src={data.fileDto.fileUrl} alt={data.title} style={{width: '100%', height: 'auto'}} />
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',

                      width: '100%',
                      marginTop: '20px',
                      gap: '20px',
                    }}
                  >
                    <button
                      onClick={() => {
                        window.localStorage.setItem('modal' + data.id, 'false');
                        setModalClose([...modalClose, data.id]);
                      }}
                      style={{ borderRadius: '5px', border: '1px solid #121212', padding: '5px 10px' }}
                    >
                      Don't show this again
                    </button>
                    <button
                      onClick={() => setModalClose([...modalClose, data.id])}
                      style={{ borderRadius: '5px', border: '1px solid #121212', padding: '5px 10px' }}
                    >
                      Close
                    </button>
                  </p>
                </div>
              </ModalContainer>
            ),
        )}
      </Desktop>
      <Mobile>
        {modalData?.map(
          (data, index) =>
            localStorage.getItem('modal' + data.id) !== 'false' &&
            data?.language?.slice(0, 3) === language &&
            !modalClose?.includes(data.id) &&
            data.type === 'MOBILE' && (
              <ModalContainer
                style={{
                  top: `${data.topSide}px`,
                  left: `${data.leftSide}px`,
                  width: `${data.width}px`,
                  height: `${data.length}px`,
                  borderRadius: '5px',
                  border: '2px solid #989898',
                  backgroundColor: '#121212',
                }}
                key={data.id}
              >
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                  }}
                >
                  <h2 style={{ backgroundColor: '#121212', color: '#989898', width: 'auto', padding: '5px 10px' }}>
                    {data.title}
                  </h2>
                  <img src={data.fileDto.fileUrl} alt={data.title} style={{ width: '100%', height: '100%' }} />
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',

                      gap: '20px',
                    }}
                  >
                    <button
                      onClick={() => {
                        window.localStorage.setItem('modal' + data.id, 'false');
                        setModalClose([...modalClose, data.id]);
                      }}
                      style={{
                        color: '#989898',
                        borderRadius: '5px',
                        border: '1px solid #989898',
                        padding: '5px 10px',
                      }}
                    >
                      Don't show this again
                    </button>
                    <button
                      onClick={() => setModalClose([...modalClose, data.id])}
                      style={{
                        color: '#989898',
                        borderRadius: '5px',
                        border: '1px solid #989898',
                        padding: '5px 10px',
                      }}
                    >
                      Close
                    </button>
                  </p>
                </div>
              </ModalContainer>
            ),
        )}
      </Mobile>
    </>
  );
};

export default Modal;
