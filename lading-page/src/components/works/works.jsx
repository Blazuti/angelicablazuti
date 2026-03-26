import React from "react";
import Orelha001 from "../media/imgs/piercing_orelha.png";
import Orelha002 from "../media/imgs/piercing_orelha002.png";
import style from './works.module.css'



export default function works() {

  return (
    
    <div className={style.works}>
      <div className={style.contain_works}>
        <h1>My Works</h1>
        <div className={style.container_photos_inline}>
          <div className={style.container_photo}>
            <div className={style.photo}>
              <img src={Orelha001} alt="" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}>
              <img src={Orelha002} alt="" />
            </div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}></div>
          </div>
        </div>

         <div className={style.container_photos_inline}>
          <div className={style.container_photo}>
            <div className={style.photo}></div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}></div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}></div>
          </div>
        </div>

         <div className={style.container_photos_inline}>
          <div className={style.container_photo}>
            <div className={style.photo}></div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}></div>
          </div>

          <div className={style.container_photo}>
            <div className={style.photo}></div>
          </div>
        </div>

        


      </div>
    </div>
  );
}
