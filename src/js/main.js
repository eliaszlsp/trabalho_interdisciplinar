import { elementFooter } from "./componentes/footer.js";
import { elementHero, svgHero } from "./componentes/hero.js";
import { elementProdutos } from "./componentes/produtos.js";
import { cardsDisplay, scroll, cardsInfo } from "./componentes/cards.js";
import { headerIteracao, elementHeader } from "./componentes/header.js";
import { nossaCausa, nossaCausaIteracao } from "./componentes/nossaCausa.js";
import { sobreNos } from "./componentes/sobreNos.js";
import { upCycle } from "./componentes/upcycle.js";
import { fraseDeAutotidade } from "./componentes/fraseAutoridade.js";

const criarHeader = () => {
  const header = document.createElement("header");
  header.innerHTML = elementHeader();
  document.body.appendChild(header);
};

const criarSectionHero = () => {
  const section = document.createElement("section");
  section.setAttribute("id", "hero");
  section.innerHTML = elementHero();
  document.body.appendChild(section);
  // svgHero();
  // headerIteracao();
};

const criarMain = () => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  function criarSecoes(id, componente) {
    const secao = document.createElement("section");
    secao.setAttribute("id", id);
    secao.innerHTML = componente;
    main.appendChild(secao);
  }

  function criarSecaoSobreNos() {
    criarSecoes("secao_sobre_nos", sobreNos());
  }

  function criarFraseDeAutoridade(svgPath) {
    const section = document.createElement("section");
    section.setAttribute("class", "fraseAutoridade");
    section.innerHTML = fraseDeAutotidade(svgPath);
    main.appendChild(section);
  }

  function criarSecaoUpcycle() {
    criarSecoes("secao_upcycle", upCycle());
  }

  function criarSecaoNossaCausa() {
    const sectionNossaCausa = document.createElement("section");
    sectionNossaCausa.setAttribute("id", "secao_nossa_causa");
    sectionNossaCausa.innerHTML = nossaCausa();
    main.appendChild(sectionNossaCausa);

    nossaCausaIteracao(sectionNossaCausa);
  }

  function criarSecaoProdutos() {
    criarSecoes("produtos-Section", elementProdutos());
  }

  // Chamando as funções para criar as seções
  criarSecaoSobreNos();
  criarFraseDeAutoridade("/src/imagens/animacaoFrase1.svg");
  criarSecaoUpcycle();

  criarSecaoNossaCausa();

  criarFraseDeAutoridade("/src/imagens/animacaoFrase2.svg");
  criarSecaoProdutos();

  // Configuração de cards
  cardsDisplay();
  scroll();
  cardsInfo();
};

const criarFooter = () => {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");
  footer.innerHTML = elementFooter();
  document.body.appendChild(footer);
};

const criarAnchor = () => {
  const anchor = document.createElement("a");
  anchor.href = "https://wa.me/5547997873644";
  anchor.target = "_blank";
  anchor.alt = "whatsapp_link";
  anchor.className = "whatsapp-float";

  const icon = document.createElement("i");
  icon.className = "fa-brands fa-whatsapp fa-flip-horizontal fa-2xl";
  anchor.appendChild(icon);

  document.body.appendChild(anchor);
};
const montarLayout = () => {
  criarHeader();
  criarSectionHero();
  criarMain();
  criarFooter();
  criarAnchor();
};

// Executa a montagem do layout
montarLayout();
