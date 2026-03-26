import React from "react";
import Imagem001 from "../media/imgs/img_trabalho001.png";
import Imagem002 from "../media/imgs/img_trabalho002.png";
import Imagem003 from "../media/imgs/img_trabalho003.png";
import Imagem004 from "../media/imgs/img_trabalho004.png";
import Imagem005 from "../media/imgs/img_trabalho005.png";
import Imagem006 from "../media/imgs/img_trabalho006.png";
import ImageModal from "./ImageModal";
import style from './works.module.css'



export default function works() {

  return (
    
    <div className={style.works}>
      <div className={style.contain_works}>
        <h1>My Works</h1>
        <div className={style.container_photos_inline}>
          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={Imagem001} alt="foto trabalho" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={Imagem002} alt="foto trabalho" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={Imagem003} alt="foto trabalho" />
            </div>
          </div>
        </div>

         <div className={style.container_photos_inline}>
          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={Imagem004} alt="foto trabalho" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={Imagem005} alt="foto trabalho" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <ImageModal imageSrc={Imagem006} alt="foto trabalho" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
