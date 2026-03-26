import React, { useState } from 'react';
import style from './ImageModal.module.css'; // Vou criar o CSS também

export default function ImageModal({ imageSrc, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <img src={imageSrc} alt={alt} onClick={openModal} style={{ cursor: 'pointer' }} />
      <div className={`${style.modalOverlay} ${isOpen ? style.open : ''}`} onClick={closeModal}>
        <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
          <img src={imageSrc} alt={alt} className={style.expandedImage} />
          <button onClick={closeModal} className={style.closeButton}>Close</button>
        </div>
      </div>
    </>
  );
}