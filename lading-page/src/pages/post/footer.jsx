import React from "react";
import style from "./footer.module.css";

export default function footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerSection}>
          <h3>Angélica</h3>
          <p>Body Piercing</p>
          <p>Transformando seu visual, criando experiências incríveis.</p>
        </div>
        <div className={style.footerSection}>
          <h4>Contato</h4>
          <p>Email: angelicablazuti@gmail.com</p>
          <p>Telefone: (14) 98807-4786</p>
        </div>
        <div className={style.footerSection}>
          <h4>Redes Sociais</h4>
          <ul className={style.socialLinks}>
            
            <li><a href="https://www.instagram.com/angelicablazuti/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/5514988074786" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
          </ul>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>&copy; 2026 Angélica. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
