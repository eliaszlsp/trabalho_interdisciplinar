const infosCards = [
    {
      imagem: "src/imagens/cards/Bolsas-juntas.JPEG",
      nome: "Produto 1",
      title: "Bolsas Cosmica",
      descricao: "A linha de bolsas da Cósmica Upcycle é um verdadeiro...",
      link: "#",
    },
    {
      imagem: "src/imagens/cards/127 - CHEILAWIGGERS - 849A0239.jpg",
      nome: "Produto 2",
      title: "Mochila Upeksha",
      descricao: "Upeksha significa equanimidade. Mochila ideal para...",
      link: "#",
    },
    {
      imagem: "src/imagens/cards/IMG_1286 (1).jpg",
      nome: "Produto 3",
      title: "Basic bag",
      descricao: "A Basic bag é a bolsa ideal para quem gosta de sair...",
      link: "#",
    },
    {
      imagem: "src/imagens/cards/Mochila.JPEG",
      nome: "Produto 4",
      title: "Mochila Mudita",
      descricao: "Mudita significa Alegria. Mochila ideal para quem tem...",
      link: "#",
    },
    {
      imagem: "src/imagens/cards/IMG_5863.jpg",
      nome: "Produto 5",
      title: "Pochetes",
      descricao: "A pochete Luna é a bolsa ideal para quem gosta de sair...",
      link: "#",
    },
    {
      imagem: "src/imagens/cards/Upcycle afetivo.png",
      nome: "Produto 6",
      title: "Upcycle Afetivo",
      descricao: "A Cósmica Upcycle transforma peças antigas em novos...",
      link: "#",
    },
  ];
  function cardsDisplay() {
  const produtos = document.querySelector("#produtos");
  infosCards.forEach((card) => {
    const produto = document.createElement("div");
    produto.className = "produto";
    produto.innerHTML = `
        <img src="${card.imagem}" alt="${card.nome}"/>
        <div class="produto-info">
            <div class="texto-produtos">
               <h3 class='product-title'><a href="${card.link}" class="product-link">${card.title}</a>
                <p class='product-text'>${card.descricao}</p>
            </div>             
            <button class="saiba-mais">+</button>
        </div>`;
    produtos.appendChild(produto);
  });
  return produtos;
}
export {cardsDisplay}