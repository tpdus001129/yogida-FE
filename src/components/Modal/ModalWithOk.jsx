import PropTypes from 'prop-types';

import Button from '../commons/Button';
import useModal from '../../hooks/useModal';
import { useEffect } from 'react';

ModalWithOk.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func,
};

ModalWithOk.defaultProps = {
  message: '기본 모달 메시지',
};

export default function ModalWithOk() {
  const { modal, closeModal } = useModal();

  useEffect(() => {
    return () => {
      if (modal.callback) {
        modal.callback();
      }
    };
  });

  const calendarStyle =
    modal.type === 'calendar'
      ? 'w-[90%] bg-white rounded-xl flex flex-col gap-[16px]'
      : 'w-64 h-48 bg-white rounded-xl px-6 pb-6 flex flex-col';
  return (
    <>
      {modal.isOpen && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-1 opacity-50 !m-0 !p-0 z-10"></div>
          <div className="fixed top-0 left-0 w-screen h-screen !m-0 !p-0 flex justify-center items-center z-20 ">
            <div className={calendarStyle}>
              <p className="w-full text-center break-keep whitespace-pre-wrap grow flex justify-center items-center">
                {modal.message}
              </p>
              <Button type={'primary'} onClick={closeModal}>
                확인
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
