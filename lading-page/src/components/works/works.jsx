import React from "react";
import Imagem001 from "../media/imgs/img_trabalho001.png";
import Imagem002 from "../media/imgs/img_trabalho002.png";
import Imagem003 from "../media/imgs/img_trabalho003.png";
import Imagem004 from "../media/imgs/img_trabalho004.png";
import Imagem005 from "../media/imgs/img_trabalho005.png";
import Imagem006 from "../media/imgs/img_trabalho006.png";
import ImageModal from "./ImageModal";
import style from './works.module.css';

const images ={
  trabalho001: Imagem001,
  trabalho002: Imagem002,
  trabalho003: Imagem003,
  trabalho004: Imagem004,
  trabalho005: Imagem005,
  trabalho006: Imagem006,
};



export default function works() {

  return (
    
    <div className={style.works}>
      <div className={style.contain_works}>
        <h1>My Works</h1>
        <div className={style.container_photos_inline}>
          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={images.trabalho001} alt="foto trabalho" list={images} />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={images.trabalho002} alt="foto trabalho" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={images.trabalho003} alt="foto trabalho" />
            </div>
          </div>
        </div>

         <div className={style.container_photos_inline}>
          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={images.trabalho004} alt="foto trabalho" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={images.trabalho005} alt="foto trabalho" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={images.trabalho006} alt="foto trabalho" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
