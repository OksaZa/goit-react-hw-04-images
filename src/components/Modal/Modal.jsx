import css from './Modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ selectedPhoto: { src, alt }, onClose }) => {
  useEffect(() => {
    const handleKeyDawn = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDawn);
    return () => {
      window.removeEventListener('keydown', handleKeyDawn);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};
