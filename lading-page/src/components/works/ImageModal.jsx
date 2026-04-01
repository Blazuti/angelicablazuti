import React from "react";
import style from "./works.module.css";

export default function ImageModal({ imageSrc, alt, currentIndex }) {
  const imagesArray = Object.values(imageSrc);

  return (
    <div className={style.imageContainer} key={currentIndex}>
      <img
        src={imagesArray[currentIndex]}
        alt={alt}
        key={`img-${currentIndex}`}
        className={style.img_works}
      />
      <div className={style.elementFooter}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
