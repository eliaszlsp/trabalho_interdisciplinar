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

  // Função para observar e carregar conteúdo
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;
          switch (section.id) {
            case "secao_sobre_nos":
              section.innerHTML = sobreNos();
              observer.unobserve(section); // Para de observar após carregar
              break;

            case "secao_upcycle":
              section.innerHTML = upCycle();
              observer.unobserve(section);
              break;

            case "secao_nossa_causa":
              section.innerHTML = nossaCausa();
              nossaCausaIteracao(section);
              observer.unobserve(section);
              break;

            case "produtos-Section":
              section.innerHTML = elementProdutos();
              observer.unobserve(section);
              cardsDisplay();
              scroll();
              cardsInfo();
              break;

            default:
              break;
          }
        }
      });
    },
    { root: null, rootMargin: "200px", threshold: 0.1 } // Margem para pré-carregar
  );

  // Função para criar seções genéricas
  function criarSecao(id) {
    const section = document.createElement("section");
    section.setAttribute("id", id);
    main.appendChild(section);
    observer.observe(section); // Adiciona a seção ao observer
  }
  function criarFraseDeAutoridade(svgPath) {
    const section = document.createElement("section");
    section.setAttribute("class", "fraseAutoridade");
    section.innerHTML = fraseDeAutotidade(svgPath);
    main.appendChild(section);
  }

  criarSecao("secao_sobre_nos");
  criarFraseDeAutoridade("/src/imagens/animacaoFrase1.svg");
  criarSecao("secao_upcycle");
  criarSecao("secao_nossa_causa");
  criarFraseDeAutoridade("/src/imagens/animacaoFrase2.svg");
  criarSecao("produtos-Section");
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
