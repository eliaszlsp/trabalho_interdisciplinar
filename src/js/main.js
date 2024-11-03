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
    left: 700,
    behavior: "smooth",
  });
});
// botões para navegação entre os cards esquerda
const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", () => {
  cards.scrollBy({
    left: -700,
    behavior: "smooth",
  });
});

// Botão descrição dos produtos
const maisCards = [
  {
    title: "Lorem1",
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    title: "Lorem2",
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    title: "Lorem3",
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    title: "Lorem4",
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    title: "Lorem5",
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
  {
    title: "Lorem6",
    text: "Descrição breve do produto eco-friendly... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam perspiciatis expedita tempore odit illo voluptatum, blanditiis eum? Quisquam provident obcaecati iure aliquid. Consequatur debitis dolorum quae sapiente corporis numquam!",
  },
];
const produtoButton = document.querySelectorAll(".saiba-mais");
const produtoInfo = document.querySelectorAll(".produto-info");
const titleProduct = document.querySelectorAll(".product-title");
const textProduct = document.querySelectorAll(".product-text");
const product = document.querySelectorAll(".produto-info");
// const product = document.querySelectorAll('.texto-produtos');

produtoButton.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const infoContainer = product[index];
    const isOpened = infoContainer.classList.contains("expanded");
    if (isOpened) {
      infoContainer.style.height = "120px";
      titleProduct[index].textContent = infosCards[index].title;
      textProduct[index].textContent = infosCards[index].descricao;
      infoContainer.classList.remove("expanded");
      button.style.transform = "rotate(0deg)";
    } else {
      titleProduct[index].textContent = maisCards[index].title;
      textProduct[index].textContent = maisCards[index].text;
      infoContainer.style.height = "200px";
      infoContainer.style.overflow = "hidden";
      void infoContainer.offsetHeight;
      infoContainer.style.height = "100%";
      button.style.transform = "rotate(45deg)";
      infoContainer.classList.add("expanded");
      titleProduct[index].style.textAlign = "center";
    }
    infoContainer.style.transition = "height 0.6s ease";
    button.style.transition = "all 0.5s ease";
  });
});
// Fim section cards
