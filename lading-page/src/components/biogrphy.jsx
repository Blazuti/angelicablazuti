import React from "react";
import Title_biogrphy from "./imgs/title_biography.png";
import '../pages/styles/biography.css'

export default function biography() {
  return (
    
    <>
      <div className="biography">
        <div className="img_title_biography">
          <img src={Title_biogrphy} alt="img biography" />
        </div>
        <div className="text_biography">
          <p>
            Minha história com a modificação corporal começou em 2017. Em 2019,
            mergulhei na especialização para transformar a paixão em uma carreira
            técnica e responsável. Hoje, com 7 anos de experiência, vejo cada
            perfuração — seja um delicado Tragus, um clássico no Umbigo ou a
            técnica avançada de um Microdermal — como uma forma de elevar a
            autoestima e a identidade de quem me procura.
            </p>
            <p>
            Acredito que o meu
            trabalho não termina no momento da perfuração. Meu compromisso é com a
            saúde do cliente, por isso dedico máxima atenção ao acompanhamento de
            cada caso, garantindo que o processo de cicatrização seja perfeito.
            </p>
            <p>
                <strong>Mais do que colocar uma joia, entrego segurança e cuidado em cada detalhe.</strong>
            </p>
        </div>
        <div className="img_works"></div>
      </div>
    </>
  );
}
