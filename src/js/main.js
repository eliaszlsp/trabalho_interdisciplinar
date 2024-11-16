let lastScrollTop = 0;
const header = document.querySelector('header');
const sourceDiv = document.querySelector(".source-div");
const targetDiv = document.querySelector(".nav");
const image = document.querySelector(".logo-type");
const logoNav = document.querySelector(".logo");
const linksNav = document.querySelectorAll(".navbar-menu li a");
console.log(linksNav);
// Escuta o evento de scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop >= 1035){
      if (scrollTop > 0 && scrollTop > lastScrollTop) {
        // Usuário está rolando para baixo
        if (!targetDiv.contains(image)) {
          // targetDiv.insertBefore(image, targetDiv.firstChild); // Move a imagem para o targetDiv
          logoNav.classList.add('scroll');
          logoNav.style.display = 'block';
          linksNav.forEach((element) =>{
            element.style.color = '#333';
            element.style.textShadow = '0 0 0'; 
          })
        }
      } 
      header.classList.add('scroll-header');
    } else if (scrollTop < 1035){
      header.classList.remove('scroll-header');
      logoNav.style.display = 'none';
      linksNav.forEach((element) =>{
        element.style.color = '#f3f0f0';
        element.style.textShadow = '0px 0px 10px rgb(0, 0, 0)'; 
      })
      if (scrollTop === 0) {
        // Usuário chegou no topo da página
        if (!sourceDiv.contains(image)) {
          // sourceDiv.insertBefore(image, sourceDiv.firstChild); // Move a imagem de volta para o sourceDiv
          logoNav.classList.remove('scroll');
        }
      }
    }
    lastScrollTop = scrollTop;
});
// criando cards dinamicamente
const cards = document.querySelector(".produtos-wrapper");
const infosCards = [
  {
    imagem: "src/imagens/cards/_DSC0180.JPG",
    nome: "Produto 1",
    title: "Produto Sustentável 1",
    descricao: "Descrição breve do produto eco-friendly...",
  },
  {
    imagem: "src/imagens/cards/127 - CHEILAWIGGERS - 849A0239.jpg",
    nome: "Produto 2",
    title: "Produto Sustentável 2",
    descricao: "Descrição breve do produto eco-friendly...",
  },
  {
    imagem: "src/imagens/cards/IMG_1286 (1).jpg",
    nome: "Produto 3",
    title: "Produto Sustentável 3",
    descricao: "Descrição breve do produto eco-friendly...",
  },
  {
    imagem: "src/imagens/cards/IMG_3202.jpg",
    nome: "Produto 4",
    title: "Produto Sustentável 4",
    descricao: "Descrição breve do produto eco-friendly...",
  },
  {
    imagem: "src/imagens/cards/IMG_5863.jpg",
    nome: "Produto 5",
    title: "Produto Sustentável 5",
    descricao: "Descrição breve do produto eco-friendly...",
  },
  {
    imagem: "src/imagens/cards/Upcycle afetivo.png",
    nome: "Produto 6",
    title: "Produto Sustentável 6",
    descricao: "Descrição breve do produto eco-friendly...",
  },
];
// função para mostrar os cards na tela
const produtos = document.querySelector("#produtos");
function cardsDisplay(newProductDisplay) {
  newProductDisplay.forEach((card) => {
    const produto = document.createElement("div");
    produto.className = "produto";
    produto.innerHTML = `
        <img src="${card.imagem}" alt="${card.nome}"/>
        <div class="produto-info">
            <div class="texto-produtos">
                <h3 class='product-title'>${card.title}</h3>
                <p class='product-text'>${card.descricao}</p>
            </div>             
            <button class="saiba-mais">+</button>
        </div>`;
    produtos.appendChild(produto);
  });
}
cardsDisplay(infosCards);

// botões para navegação entre os cards direita
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
  cards.scrollBy({
    left: 1150,
    behavior: "smooth",
  });
}); 
// botões para navegação entre os cards esquerda
const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", () => {
  cards.scrollBy({
    left: -1150,
    behavior: "smooth",
  });
});

// Botão descrição dos produtos
const maisCards = [
  {
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
];
const produtoButton = document.querySelectorAll(".saiba-mais");
const produtoInfo = document.querySelectorAll(".produto-info");
const titleProduct = document.querySelectorAll(".product-title");
const textProduct = document.querySelectorAll(".product-text");
const product = document.querySelectorAll(".produto-info");

produtoButton.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const infoContainer = product[index];
    const isOpened = infoContainer.classList.contains("expanded");
    if (isOpened) {
      infoContainer.classList.remove("expanded");
      textProduct[index].textContent = infosCards[index].descricao;
      infoContainer.style.height = "120px";
      button.style.transform = "rotate(0deg)";
    } else {
      infoContainer.classList.add("expanded");
      textProduct[index].textContent = maisCards[index].text;
      infoContainer.style.height = "200px";
      infoContainer.style.overflow = "hidden";
      infoContainer.style.height = "100%";
      button.style.transform = "rotate(45deg)";
    }
  });
});
// Fim section cards

// inicio Nossa Causa
// const nossaCausa = document.querySelectorAll(".icon");
const textNossaCausa = document.querySelector(".texto_Nossa_causa");
const textCenter = document.querySelector('.circle-text');
const title1 = document.querySelector('.title1');
const text1 = document.querySelector('.text1');
const title2 = document.querySelector('.title2');
const text2 = document.querySelector('.text2');

// Defina a lista de ícones a partir de seus elementos DOM
const nossaCausa = document.querySelectorAll('.icon'); // Altere o seletor conforme sua estrutura

const itens = ["design", "make", "package", "use", "recycle"];
const texts = [
    { id: 1, title: "Texto 1", text: "Lorem ipsum 1", centerText: "Center 1" },
    { id: 2, title: "Texto 2", text: "Lorem ipsum 2" },
    { id: 3, title: "Texto 3", text: "Lorem ipsum 3", centerText: "Center 2" },
    { id: 4, title: "Texto 4", text: "Lorem ipsum 4" },
    { id: 5, title: "Texto 5", text: "Lorem ipsum 5", centerText: "Center 3" },
    { id: 6, title: "Texto 6", text: "Lorem ipsum 6" },
    { id: 7, title: "Texto 7", text: "Lorem ipsum 7", centerText: "Center 4" },
    { id: 8, title: "Texto 8", text: "Lorem ipsum 8" },
    { id: 9, title: "Texto 9", text: "Lorem ipsum 9", centerText: "Center 5" },
    { id: 10, title: "Texto 10", text: "Lorem ipsum 10" }
];

const itemToTextIds = {
    design: [1, 2],
    make: [3, 4],
    package: [5, 6],
    use: [9, 10],
    recycle: [7, 8]
};

// Define um estado inicial
let currentActive = null;

// Função para atualizar textos
function activateTexts() {
  text1.classList.add('active');
  text2.classList.add('active');
  title1.classList.add('active');
  title2.classList.add('active');
  textCenter.classList.add('active');
}

// Função para desativar os textos (caso necessário, como na inicialização)
function deactivateTexts() {
  text1.classList.remove('active');
  text2.classList.remove('active');
  title1.classList.remove('active');
  title2.classList.remove('active');
  textCenter.classList.remove('active');
}

// Função para atualizar os textos com um pequeno atraso para ativar os efeitos
function updateTexts(textIds) {
  if (!textIds) return;

  const text1Id = textIds[0] - 1;
  const text2Id = textIds[1] - 1;

  if (text1Id >= 0 && text1Id < texts.length) {
      textCenter.textContent = texts[text1Id].centerText || "";
      text1.textContent = texts[text1Id].text;
      title1.textContent = texts[text1Id].title;
  }
  if (text2Id >= 0 && text2Id < texts.length) {
      text2.textContent = texts[text2Id].text;
      title2.textContent = texts[text2Id].title;
  }

  // Garante que a classe seja removida antes de reativar
  deactivateTexts();

  // Reativa os textos com efeito após pequeno atraso
  setTimeout(() => {
      activateTexts();
  }, 300); // Pequeno atraso para garantir a transição
}

// Configuração inicial: exibe o texto padrão (ID 1 e 2)
document.addEventListener("DOMContentLoaded", () => {
    const defaultTextIds = itemToTextIds["design"]; // Ou outro item padrão
    updateTexts(defaultTextIds);
    currentActive = nossaCausa[0]; // Define o primeiro ícone como ativo
    currentActive.classList.add('active');
});

// Adiciona eventos aos ícones
nossaCausa.forEach((icon, index) => {
  icon.addEventListener("mouseover", () => {
      const itemName = itens[index];
      const textIds = itemToTextIds[itemName];

      if (currentActive === icon) return; // Não faz nada se o ícone já estiver ativo

      // Remove estilizações do ícone ativo anterior
      if (currentActive) {
          currentActive.classList.remove('active');
          nossaCausa.forEach(el => el.classList.remove('inactive'));
      }

      // Atualiza o ícone ativo
      currentActive = icon;
      icon.classList.add('active');
      updateTexts(textIds); // Atualiza os textos com transição

      // Aplica opacidade reduzida aos outros ícones
      nossaCausa.forEach(el => {
          if (el !== icon) el.classList.add('inactive');
      });
  });
});