import React from "react";
import "./css/styleFooter.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="rodap-item">
          <img className="erro" src="/erro.png" alt="Ícone de erro" />
          <span className="texto-cuidado">Cuidado com pessoas que solicitam taxas antecipadas em troca de serviços de documentação!</span>
      </div>
    </footer>
  );
}

export default Footer;