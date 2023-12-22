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
  background-color: white;
`;

const Modal = () => {
  const [language, setLanguage] = useRecoilState(Language);
  const [modalClose, setModalClose] = useRecoilState(ModalClose);
  const [modalData, setModalData] = useState();
  const { data: popupData } = usePopup(language);

  useEffect(() => {
    popupData?.data?.dataList.length > 0 && setModalData(popupData?.data?.dataList);
    console
      .log
      // getMeta(popupData?.data?.dataList[0].fileDto, (err, img) => {
      //   console.log(img.naturalWidth, img.naturalHeight);
      // }),
      ();
  }, [popupData, language]);

  // const getMeta = (url, cb) => {
  //   const img = new Image();
  //   img.onload = () => cb(null, img);
  //   img.onerror = (err) => cb(err);
  //   img.src = url;
  // };

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
                  borderRadius: '5px',
                }}
                key={data.id}
              >
                <div
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                  }}
                >
                  <img
                    src={data.fileDto.fileUrl}
                    alt={data.title}
                    style={{ width: '100%', height: 'auto' }}
                    onClick={() => {
                      setTimeout(() => {
                        data?.link && window.open(`${data?.link}`, '_blank');
                      }, 10);
                    }}
                  />
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      position: 'absolute',
                      bottom: '-38px',
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
                      style={{
                        borderRadius: '5px',
                        border: '1px solid #FFFFFF',
                        padding: '5px 10px',
                        color: '#FFFFFF',
                      }}
                    >
                      Don't show this again
                    </button>
                    <button
                      onClick={() => setModalClose([...modalClose, data.id])}
                      style={{
                        borderRadius: '5px',
                        border: '1px solid #FFFFFF',
                        padding: '5px 10px',
                        color: '#FFFFFF',
                      }}
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
                  <img
                    src={data.fileDto.fileUrl}
                    alt={data.title}
                    style={{ width: '100%', height: '100%' }}
                    onClick={() => {
                      setTimeout(() => {
                        data?.link && window.open(`${data?.link}`, '_blank');
                      }, 10);
                    }}
                  />
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      gap: '20px',
                      position: 'absolute',
                      // 추후 모바일 환경에서의 팝업 버튼 엘레먼트들 위치 확인 필요
                      bottom: '-38px',
                    }}
                  >
                    <button
                      onClick={() => {
                        window.localStorage.setItem('modal' + data.id, 'false');
                        setModalClose([...modalClose, data.id]);
                      }}
                      style={{
                        color: '#FFFFFF',
                        borderRadius: '5px',
                        border: '1px solid #FFFFFF',
                        padding: '5px 10px',
                      }}
                    >
                      Don't show this again
                    </button>
                    <button
                      onClick={() => setModalClose([...modalClose, data.id])}
                      style={{
                        color: '#FFFFFF',
                        borderRadius: '5px',
                        border: '1px solid #FFFFFF',
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
