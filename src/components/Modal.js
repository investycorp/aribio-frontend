import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;

  z-index: 100;
  background-color: white;
`;

const Modal = ({ setModalOpen, modalData }) => {
  return (
    <>
      {modalData.map((data) =>
        localStorage.getItem('modal' + data.id) === 'false' ? null : (
          <ModalContainer
            style={{
              top: `${data.top} px`,
              left: `${data.left} px`,
              width: `${data.width} px`,
              height: `${data.length} px`,
              border: '5px solid #989898',
            }}
            key={data.id}
          >
            <div style={{ display: 'block', position: 'relative' }}>
              <h2 style={{ color: 'black' }}>{data.title}</h2>
              <img src={data?.fileDto?.fileUrl} alt={data.title} style={{ width: '100%', height: '100%' }} />
              <p
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'end',
                  width: '100%',
                  marginTop: '20px',
                  gap: '20px',
                }}
              >
                <button
                  // style={{ position: 'absolute', top: '10px', right: '0' }}
                  onClick={() => {
                    window.localStorage.setItem('modal' + data.id, 'false');
                    setModalOpen(false);
                  }}
                >
                  Close Pop-Up for 24 hours'
                </button>
                <button
                  // style={{ position: 'absolute', top: '10px', right: '0' }}
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </p>
            </div>
          </ModalContainer>
        ),
      )}
    </>
  );
};

export default Modal;
