import { nossaCausa, nossaCausaIteracao } from "./componentes/nossaCausa.js";
import { sobreNos } from "./componentes/sobreNos.js";
import { upCycle } from "./componentes/upcycle.js";

// Função para criar o header
const criarHeader = () => {
  const header = document.createElement("header");
  document.body.appendChild(header);
};

// Função para criar a section principal
const criarSectionHero = () => {
  const section = document.createElement("section");
  section.setAttribute("id", "hero");
  document.body.appendChild(section);
};

// Função para criar o main com o conteúdo
const criarMain = () => {
  const main = document.createElement("main");

  // Adiciona o conteúdo de upCycle, sobreNos e nossaCausa
  main.innerHTML = upCycle();
  main.innerHTML += sobreNos();
  main.innerHTML += nossaCausa();

  // Adiciona o main ao body
  document.body.appendChild(main);

  // Chama nossaCausaIteracao após o conteúdo ser inserido
  nossaCausaIteracao();
};

// Função para criar o footer
const criarFooter = () => {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");
  document.body.appendChild(footer);
};

// Função para criar o anchor (link)
const criarAnchor = () => {
  const anchor = document.createElement("a");
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

// Chama a função para montar o layout completo
montarLayout();
