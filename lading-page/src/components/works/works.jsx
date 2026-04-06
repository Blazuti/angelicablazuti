import React from "react";
import Imagem001 from "../media/imgs/img_trabalho001.png";
import Imagem002 from "../media/imgs/img_trabalho002.png";
import Imagem003 from "../media/imgs/img_trabalho003.png";
import Imagem004 from "../media/imgs/img_trabalho004.png";
import Imagem005 from "../media/imgs/img_trabalho005.png";
import Imagem006 from "../media/imgs/img_trabalho006.png";
import style from "./works.module.css";

const images = [Imagem001, Imagem002, Imagem003, Imagem004, Imagem005, Imagem006];

export default function Works() {


  return (
    <div className={style.works}>
<div className={style.container_works}>
  
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={img} className="d-block w-100" alt={`Imagem dos trabalhos feitos ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
</div>
      </div>








    </div>
  );
}
