import PropTypes from 'prop-types';

import Button from '../commons/Button';
import useModal from '../../hooks/useModal';
import { useEffect } from 'react';

ModalWithOption.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func,
};

export default function ModalWithOption() {
  const { modal, closeModal } = useModal();

  useEffect(() => {
    return () => {
      if (modal.callback) {
        modal.callback();
      }
    };
  });

  return (
    <>
      {modal.isOpen && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-1 opacity-50 !m-0 !p-0 z-10"></div>
          <div className="fixed top-0 left-0 w-screen h-screen !m-0 !p-0 flex justify-center items-center z-20 ">
            <div className="w-64 h-30 bg-white rounded-xl px-6  flex flex-col justify-between">
              <Button type={'primary'} onClick={closeModal}>
                수정하기
              </Button>
              <Button type={'primary'} onClick={closeModal}>
                삭제하기
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
