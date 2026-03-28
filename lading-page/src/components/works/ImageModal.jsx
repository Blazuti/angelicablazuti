import React, { useState } from 'react';
import style from './ImageModal.module.css'; // Vou criar o CSS também

export default function ImageModal({ imageSrc, alt, list }) {
  const imageList = list ? Object.values(list) : [imageSrc];
  const initialIndex = imageList.indexOf(imageSrc);
  const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % imageList.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

  return (
    <>
      <img src={imageSrc} alt={alt} onClick={openModal} style={{ cursor: 'pointer' }} />
      <div className={`${style.modalOverlay} ${isOpen ? style.open : ''}`} onClick={closeModal}>
        <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
          <img key={currentIndex} src={imageList[currentIndex]} alt={alt} className={style.expandedImage} />
          <button onClick={closeModal} className={style.closeButton}>Close</button>
          <button onClick={nextImage} className={style.next}></button>
          <button onClick={prevImage} className={style.prev}></button>
        </div>
      </div>
    </>
  );
}