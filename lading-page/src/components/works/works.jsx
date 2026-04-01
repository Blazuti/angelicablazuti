import React, { useState } from "react";
import Imagem001 from "../media/imgs/img_trabalho001.png";
import Imagem002 from "../media/imgs/img_trabalho002.png";
import Imagem003 from "../media/imgs/img_trabalho003.png";
import Imagem004 from "../media/imgs/img_trabalho004.png";
import Imagem005 from "../media/imgs/img_trabalho005.png";
import Imagem006 from "../media/imgs/img_trabalho006.png";
import ImageModal from "./ImageModal";
import img_works from "../media/imgs/img_works.png";
import style from "./works.module.css";

const images = {
  trabalho001: Imagem001,
  trabalho002: Imagem002,
  trabalho003: Imagem003,
  trabalho004: Imagem004,
  trabalho005: Imagem005,
  trabalho006: Imagem006,
};

export default function works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesArray = Object.values(images);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.works}>
      <div className={style.contain_works}>
        <div className={style.my_works}>
          <img src={img_works} alt="" />
        </div>
        <div className={style.photos} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <button className={style.prev} onClick={handlePrev}>prev</button>
          <ImageModal imageSrc={images} 
          alt="foto trabalho" 
          currentIndex={currentIndex}
          />
          <button className={style.next} onClick={handleNext}>next</button>
        </div>
      </div>
    </div>
  );
}
