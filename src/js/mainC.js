import { elementFooter } from './componentes/footer.js';
import { elementHero, svgHero } from './componentes/hero.js';
import { elementProdutos } from './componentes/produtos.js';
import { cardsDisplay, scroll, cardsInfo } from './componentes/cards.js';
import { headerIteracao, elementHeader } from './componentes/header.js';

const header = document.createElement("header");
header.innerHTML += elementHeader();

const section = document.createElement("section");
section.setAttribute("id", "hero");
section.innerHTML += elementHero();

const main = document.createElement("main");
const sectionProdutos = document.createElement("section");
sectionProdutos.innerHTML = elementProdutos();
sectionProdutos.setAttribute("id", "produtos-Section");
main.appendChild(sectionProdutos);


const footer = document.createElement("footer");
footer.setAttribute("class", "footer");
footer.innerHTML += elementFooter();

// Criando o elemento <a>
const anchor = document.createElement("a");
anchor.href = "https://wa.me/5547997873644";
anchor.target = "_blank";
anchor.alt = "whatsapp_link";
anchor.className = "whatsapp-float";

const icon = document.createElement("i");
icon.className = "fa-brands fa-whatsapp fa-flip-horizontal fa-2xl";
anchor.appendChild(icon);

document.body.appendChild(header);

document.body.appendChild(section);
headerIteracao();
svgHero();

document.body.appendChild(main);
cardsDisplay();
scroll();
cardsInfo();

document.body.appendChild(footer);

document.body.appendChild(anchor);