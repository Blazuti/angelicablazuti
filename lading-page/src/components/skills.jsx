import React from "react";
import Icon_diamond from "../components/media/icon/diamond.png"
import Icon_segurity from "../components/media/icon/segurity.png"
import Icon_star from "../components/media/icon/star.png"

export default function skills() {
  return (
    <section className="skills">
      <div className="container_img_skills"></div>
      {/*<div className="description_skills">
        <p>
          <li>
            <ul>Bio Segurança e Esterilização</ul>
          </li>
          <br />
          <li>
            <ul>Anatomia e Marcação</ul>
          </li>
          <br />
          <li>
            <ul>Técnicas de Perfuração</ul>
          </li>
          <br />
          <li>
            <ul>Conhecimento de Jóias</ul>
          </li>
        </p>
      </div>*/}
      <div class="container_skills">
        <div class="card_skills">
          <div className="title_card">
            <div class="icon">
              <img src={Icon_diamond} alt="img diamond" /></div>
            <h3>Alta Precisão</h3>
          </div>
          <p>
            Perfurações técnicas em Orelha, Umbigo e Microdermais, respeitando a
            anatomia individual.
          </p>
        </div>

        <div class="card_skills">
          <div className="title_card">
            <div class="icon">
              <img src={Icon_segurity} alt="img segurity" />
            </div>
            <h3>Biossegurança</h3>
          </div>
          <p>
            Protocolos rigorosos de esterilização e uso exclusivo de joalheria
            de alto padrão (Titânio, Aço cirurgico, Prata e Ouro).
          </p>
        </div>

        <div class="card_skills">
          <div className="title_card">
            <div class="icon">
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
