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
const nossaCausa = document.querySelectorAll(".icon-container");
const textNossaCausa = document.querySelector(".texto_Nossa_causa");
const textCenter = document.querySelector('.circle-text');
const title = document.querySelector('title');
const itens = [
    "design",
    "make",
    "package",
    "use",
    "recycle"
];
const texts = [
    {
        id: 1, 
        title: "Texto 1", 
        text: "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
        centerText: "1Lorem ipsum dolor sit amet, consectetur"
    }, 
    {
        id: 2, 
        title: "Texto 2", 
        text: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
    },
    {
        id: 3, 
        title: "Texto 3", 
        text: "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
        centerText: "2Lorem ipsum dolor sit amet, consectetur"
    },
    {
        id: 4, 
        title: "Texto 4", 
        text: "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
    },
    {
        id: 5, 
        title: "Texto 5", 
        text: "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
        centerText: "3Lorem ipsum dolor sit amet, consectetur"
    },
    {
        id: 6, 
        title: "Texto 6", 
        text: "6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
    }, 
    {
        id: 7, 
        title: "Texto 7", 
        text: "7Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
        centerText: "4Lorem ipsum dolor sit amet, consectetur"
    },
    {
        id: 8, 
        title: "Texto 8", 
        text: "8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
    },
    {
        id: 9, 
        title: "Texto 9", 
        text: "9Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
        centerText: "5Lorem ipsum dolor sit amet, consectetur"
    },
    {
        id: 10, 
        title: "Texto 10", 
        text: "10Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum officia cum assumenda accusantium expedita aliquid quod molestias, maxime nam fuga, atque quos dolorum. Voluptatem atneque dolorum nulla quis?",
    }
];
const itemToTextIds = {
  design: [1, 2], 
  make: [3, 4],
  package: [5, 6],
  use: [9, 10],
  recycle: [7, 8]
};
const center = [
  { id: 1, text: "1Lorem ipsum dolor sit amet, consectetur" },
  { id: 2, text: "2Lorem ipsum dolor sit amet, consectetur" },
  { id: 3, text: "3Lorem ipsum dolor sit amet, consectetur" },
  { id: 4, text: "4Lorem ipsum dolor sit amet, consectetur" },
  { id: 5, text: "5Lorem ipsum dolor sit amet, consectetur" },
]
const title1 = document.querySelector('.title1');
const text1 = document.querySelector('.text1');
const title2 = document.querySelector('.title2');
const text2 = document.querySelector('.text2');

nossaCausa.forEach((icon, index) => {
  icon.addEventListener("mouseover", (event) => {
    event.preventDefault();
    
    text1.classList.add('show');
    text2.classList.add('show');
    title1.classList.add('show');
    title2.classList.add('show');

    const itemName = itens[index];
    const textIds = itemToTextIds[itemName];

    if (textIds) { // Testa se o Text id existe (se não for undefined ou null)
      const text1Id = textIds[0] - 1;
      const text2Id = textIds[1] - 1;

      setTimeout(() => {

        if (text1Id >= 0 && text1Id < texts.length) {
          textCenter.textContent = texts[text1Id].centerText;
          text1.textContent = texts[text1Id].text;
          text1.classList.add('show');
        }
        if (text2Id >= 0 && text2Id < texts.length) {
          text2.textContent = texts[text2Id].text;
          title1.textContent = texts[text1Id].title;
          title2.textContent = texts[text2Id].title;
        }
        text1.classList.remove('show');
        text2.classList.remove('show');
        title1.classList.remove('show');
        title2.classList.remove('show');
      }, 300)
    }
  });
});
