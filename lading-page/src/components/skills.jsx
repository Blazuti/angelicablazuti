import React from "react";
import '../pages/styles/skills.css'

export default function skills() {
  return (
    <div className="container_skills">
        <div class="container">
          <div class="card">
            <div class="icon">💎</div>
            <h3>Alta Precisão</h3>
            <p>
              Perfurações técnicas em Tragus, Umbigo e Microdermais, respeitando
              a anatomia individual.
            </p>
          </div>

          <div class="card">
            <div class="icon">🛡️</div>
            <h3>Biossegurança</h3>
            <p>
              Protocolos rigorosos de esterilização e uso exclusivo de joalheria
              de alto padrão (Titânio/Grau Implante).
            </p>
          </div>

          <div class="card">
            <div class="icon">✨</div>
            <h3>Acompanhamento</h3>
            <p>
              Suporte humanizado em todas as etapas, garantindo uma cicatrização
              saudável e assistida.
            </p>
          </div>
        </div>
    </div>
  );
}
