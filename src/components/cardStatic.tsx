import React from 'react';
import './css/styleCardStatic.css'; // Certifique-se de que o CSS está importado corretamente

function CardStatic(props) {
  return (
    <div className="cardStatic">
    <img 
      src={props.imagem} 
      alt={props.legenda} 
      className="cardStatic-image"
    />
    <h2 className="cardStatic-title">{props.titulo}</h2>
  </div>
  );
};

export default CardStatic;
