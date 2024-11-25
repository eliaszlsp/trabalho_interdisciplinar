import { elementFooter } from "./componentes/footer.js";
import { elementHero, svgHero } from "./componentes/hero.js";
import { elementProdutos } from "./componentes/produtos.js";
import { cardsDisplay, scroll, cardsInfo } from "./componentes/cards.js";
import { headerIteracao, elementHeader } from "./componentes/header.js";
import { nossaCausa, nossaCausaIteracao } from "./componentes/nossaCausa.js";
import { sobreNos } from "./componentes/sobreNos.js";
import { upCycle } from "./componentes/upcycle.js";
import { fraseDeAutotidade } from "./componentes/fraseAutoridade.js";

// Função para criar o header
const criarHeader = () => {
  const header = document.createElement("header");
  header.innerHTML = elementHeader();
  document.body.appendChild(header);
};

// Função para criar a seção hero
const criarSectionHero = () => {
  const section = document.createElement("section");
  section.setAttribute("id", "hero");
  section.innerHTML = elementHero();
  document.body.appendChild(section);
  svgHero();
  headerIteracao();
};

// Função para criar o main
const criarMain = () => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  // Seção Sobre Nós
  const sectionSobreNos = document.createElement("section");
  sectionSobreNos.setAttribute("id", "secao_sobre_nos");
  sectionSobreNos.innerHTML = sobreNos();
  main.appendChild(sectionSobreNos);
  // frase de autoridade

  const section1 = document.createElement("section");
  section1.setAttribute("class", "fraseAutoridade");
  const svgPath1 = "/src/imagens/animacaoFrase1.svg";
  section1.innerHTML = fraseDeAutotidade(svgPath1);
  main.appendChild(section1);

  // Seção Upcycle
  const sectionUpcycle = document.createElement("section");
  sectionUpcycle.setAttribute("id", "secao_upcycle");
  sectionUpcycle.innerHTML = upCycle();
  main.appendChild(sectionUpcycle);

  // Seção Nossa Causa
  const sectionNossaCausa = document.createElement("section");
  sectionNossaCausa.setAttribute("id", "secao_nossa_causa");
  sectionNossaCausa.innerHTML = nossaCausa();
  main.appendChild(sectionNossaCausa);
  nossaCausaIteracao();

  // frase de autoridade2
  const section = document.createElement("section");
  section.setAttribute("class", "fraseAutoridade");
  const svgPath2 = "/src/imagens/animacaoFrase2.svg";
  section.innerHTML = fraseDeAutotidade(svgPath2);
  main.appendChild(section);

  // Seção Produtos
  const sectionProdutos = document.createElement("section");
  sectionProdutos.setAttribute("id", "produtos-Section");
  sectionProdutos.innerHTML = elementProdutos();
  main.appendChild(sectionProdutos);

  // Configuração de cards
  cardsDisplay();
  scroll();
  cardsInfo();
};

// Função para criar o footer
const criarFooter = () => {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");
  footer.innerHTML = elementFooter();
  document.body.appendChild(footer);
};

// Função para criar o botão flutuante do WhatsApp
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

// Função principal para montar o layout
const montarLayout = () => {
  criarHeader();
  criarSectionHero();
  criarMain();
  criarFooter();
  criarAnchor();
};

// Executa a montagem do layout
montarLayout();
