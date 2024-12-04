import React from "react";
import HeaderDocs from "./Header";
import TextCard from "./textCard";
import "../App.css";
import Card from "./card";
import CardStatic from "./cardStatic";
import Footer from "./final";
function DocsNecessariosPage() {
  return (
    <>
      <div className="content">
        <div className="header">
          <HeaderDocs />
        </div>
        <div className="section">
          <div className="texto">
            <h2 className="highlightAqua">
              Aqui te informamos tudo que precisa para sua{" "}
              <span className="highlightBlue">nova jornada!</span>
            </h2>
          </div>
          <TextCard
            classe=".box-livros"
            classeDoTexto="textoDoCard"
            textoCard={
              <>
                Estar com a documentação em dia é{" "}
                <span className="highlightAqua">essencial!</span>
              </>
            }
          />
          <img src="/airplane.svg" alt="" className="airplane" />

          <TextCard
            classe=".box-livrosDireita"
            classeDoTexto="textoDoCardDireita"
            textoCard={
              <>
                Estar com a documentação em dia é{" "}
                <span className="highlightAqua">essencial!</span>
              </>
            }
          />
          <div className="texto">
            <h2 className="highlightBlue">
              Facilitando a <span className="highlightOrange">integração </span>
              celebrando a <span className="highlightAqua">diversidade. </span>
            </h2>
          </div>

          <div className="contentSectionFirst">
            <CardStatic
              imagem="/Documentos.svg"
              legenda="Documentos"
              titulo="Documentação Necessária"
            />
            <CardStatic
              imagem="/hospital.png"
              legenda="Documentos"
              titulo="Serviços Públicos"
            />
            <CardStatic
              imagem="/direitos.png"
              legenda="Documentos"
              titulo="Direitos e Deveres do imigrante"
            />
          </div>
          <div className="texto">
            <h2 className="highlightBlue">Perguntas Frequentes:</h2>
          </div>
          <div className="contentSection">
            <Card
              bgColor="#006182"
              textoFrente="Qual é o prazo para obter um visto?"
              textoVerso="O prazo varia de acordo com o tipo de visto e a demanda do consulado, mas pode levar de algumas semanas a vários meses."
              imagemFrente="/relogio.png"
              legendaImagemFrente="imagem"
            />
            <Card
              bgColor="#F3B95A"
              textoFrente="O que devo fazer se perder meus documentos no Brasil?"
              textoVerso="Em caso de perda, é importante registrar um boletim de ocorrência e entrar em contato com o consulado ou embaixada do seu país para orientações sobre a reemissão dos documentos."
              imagemFrente="/perderDocs.png"
              legendaImagemFrente="imagem"
            />
            <Card
              bgColor="#198168"
              textoFrente="Posso trabalhar no Brasil enquanto aguardo meu visto?"
              textoVerso="Não, você deve ter um visto de trabalho válido para exercer atividades remuneradas no país."
              imagemFrente="/trabalho.png"
              legendaImagemFrente="imagem"
            />
            <Card
              bgColor="#F6794A"
              textoFrente="Preciso traduzir meus documentos?"
              textoVerso="Sim, muitos documentos precisam ser traduzidos por um tradutor juramentado para serem aceitos pelas autoridades brasileiras."
              imagemFrente="/traduzir.png"
              legendaImagemFrente="imagem"
            />
          </div>
        </div>
        <div className="footerFinal">
            <Footer />
          </div>
      </div>
    </>
  );
}

export default DocsNecessariosPage;
