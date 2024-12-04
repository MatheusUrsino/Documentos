import React from "react";
import "./css/styleTextCard.css";

function TextCard(props) {
  return (
    <div className={props.classe}>
      <div className="card">
        <p className={props.classeDoTexto}>{props.textoCard}</p>
        <div className="livros"></div>
      </div>
    </div>
  );
}

export default TextCard;
