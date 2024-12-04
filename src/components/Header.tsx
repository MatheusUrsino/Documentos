import React from "react";
import "./css/styleHeader.css";

function HeaderDocs(props) {
  return (
    <>
      <header>
        <div className="bgImage">
          <img src="/bgBanner.svg" alt="" />
        </div>
        <div className="box-title">
          <img
            className="DocsImg"
            src="/papel.png"
            alt="Descripción de la Imagen"
          />
          <div className="text-container">
            <h1 className="titulo">Documentos:</h1>

            <h2 className="subtitulo">
              Verifique o guia completo de{" "}
              <span className="highlightyellow">documentos</span> para viver no{" "}
              <span className="highlightyellow">Brasil</span>!
            </h2>
          </div>
        </div>

        <div className="btnSeusLivros"></div>
      </header>
    </>
  );
}

export default HeaderDocs;
