import React from "react";
import Icon_diamond from "../media/icon/diamond.png";
import Icon_segurity from "../media/icon/segurity.png";
import Icon_star from "../media/icon/star.png";
import style from "./skills.module.css";

export default function skills() {
  return (
    <section className={style.skills}>
      <div className={style.container_skills}>
        <div className={style.card_skills}>
          <div className={style.title_card}>
            <div className={style.icon}>
              <img src={Icon_diamond} alt="img diamond" />
            </div>
            <h3>Alta Precisão</h3>
          </div>
          <p>
            Perfurações técnicas em Orelha, Umbigo e Microdermais, respeitando a
            anatomia individual.
          </p>
        </div>

        <div className={style.card_skills}>
          <div className={style.title_card}>
            <div className={style.icon}>
              <img src={Icon_segurity} alt="img segurity" />
            </div>
            <h3>Biossegurança</h3>
          </div>
          <p>
            Protocolos rigorosos de esterilização e uso exclusivo de joalheria
            de alto padrão (Titânio, Aço cirurgico, Prata e Ouro).
          </p>
        </div>

        <div className={style.card_skills}>
          <div className={style.title_card}>
            <div className={style.icon}>
              <img src={Icon_star} alt="img stars" />
            </div>
            <h3>Acompanhamento</h3>
          </div>
          <p>
            Suporte humanizado em todas as etapas, garantindo uma cicatrização
            saudável e assistida.
          </p>
        </div>
      </div>
    </section>
  );
}
