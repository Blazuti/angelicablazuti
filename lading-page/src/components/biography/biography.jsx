import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Title_biography from "../media/imgs/title_biography.png"
import style from './biography.module.css'
import img_angelica from "../media/imgs/img_angelica002.png"

export default function biography() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section className={style.my_biography}>
      <div className={style.biography}>
        <motion.div className={style.title_biography} style={{ opacity, transformOrigin: "10%" }}>
          <img src={Title_biography} alt="imagem titulo" />
        </motion.div>
        <div className={style.text_biography}>
          <p>
            Minha história com a modificação corporal começou em 2017. Em 2019,
            mergulhei na especialização para transformar a paixão em uma
            carreira técnica e responsável. Hoje, com mais de <strong>
              7 anos de
              experiência
            </strong>, vejo cada trabalho — seja um delicado Tragus, um
            clássico no Umbigo ou a técnica avançada de um Microdermal — como
            uma forma de elevar a autoestima e a identidade de quem me procura.
          </p>
          <p>
            Acredito que o meu trabalho não termina no momento da perfuração.
            Meu compromisso é com a <strong>saúde do cliente</strong>, por isso dedico máxima
            atenção ao acompanhamento de cada caso, garantindo que o processo de
            cicatrização seja perfeito.
          </p>
          <p>
            <strong>
              Mais do que colocar uma joia, entrego segurança e cuidado em cada
              detalhe.
            </strong>
          </p>
        </div>
      </div>
      <div className={style.img_biography}>
        <img src={img_angelica} alt="imagem de biografia" />
      </div>
    </section>
  );
}
