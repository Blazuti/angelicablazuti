import React from "react";
import style from "./contact.module.css";
import img_contact from "../media/imgs/contact.png";
import img_instagram from "../media/icon/instagram.png";
import img_whatsapp from "../media/icon/whatsapp.png";


export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.container_contact}>
        <div className={style.img_contatct}>
          <img src={img_contact} alt="Contact" />
        </div>
        <div className={style.info_contact}>
          <h2>Acesse minhas redes sociais, ou entre em contato
            para mais informações sobre meus serviços.</h2>
        </div>
        <div className={style.links}>
          <div className={style.instagram}>
            <img src={img_instagram} alt="Instagram" />
            <a href="https://www.instagram.com/angelicablazuti/" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>
            </a>
          </div>
          <div className={style.whatsapp}>
            <img src={img_whatsapp} alt="WhatsApp" />
            <a href="https://wa.me/5514988074786" target="_blank" rel="noopener noreferrer">
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}