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
function scroll() {
  const cards = document.querySelector(".produtos-wrapper");
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", () => {
    if (window.innerWidth < 884) {
      cards.scrollBy({
        left: 270,
        behavior: "smooth",
      });
    }
    if (window.innerWidth > 885) {
      cards.scrollBy({
        left: 1150,
        behavior: "smooth",
      });
    }
  });
  // botões para navegação entre os cards esquerda
  const prevButton = document.getElementById("prev");
  prevButton.addEventListener("click", () => {
    if (window.innerWidth < 884) {
      cards.scrollBy({
        left: -270,
        behavior: "smooth",
      });
    }
    if (window.innerWidth > 885) {
      cards.scrollBy({
        left: -1150,
        behavior: "smooth",
      });
    }
  });
}

const maisCards = [
  {
    text: "A linha de bolsas da Cósmica Upcycle é um verdadeiro exemplo de sustentabilidade e inovação. Na imagem, vemos quatro bolsas dispostas em uma estrutura de metal, que simbolicamente remete a um lixo. No entanto, essa colocação não é um sinal de descaso, mas sim uma poderosa mensagem sobre a origem desses produtos. Cada uma dessas bolsas foi confeccionada a partir de tecidos velhos que, de outra forma, seriam descartados. A CósmiCa Upcycle transforma o que seria lixo em peças únicas e estilosas, promovendo a reutilização de materiais e a redução de resíduos. Essa abordagem não só contribui para a preservação do meio ambiente, mas também oferece aos consumidores produtos com uma história e um propósito. Escolher uma bolsa da CósmiCa Upcycle é optar por estilo consciente e sustentabilidade, mostrando que o luxo pode, sim, nascer do descarte.",
  },
  {
    text: 'Upeksha significa equanimidade. Mochila ideal para o dia-a-dia, possui diversos bolsos externos, bolso interno para notebook até 15,6". Forro impermeável fácil de limpar. Alças e costas acolchoadas e com tecido respirável. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance.',
  },
  {
    text: "Nossa primeira bolsa vendida aqui na Cósmica, há 4 anos ela é um sucesso entre nossos clientes. Leve e discreta seu tamanho parece pequeno, mas ela é uma bolsa muito espaçosa. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. Tem forro impermeável, alças acetinadas com 30mm, com mosquetões cromado. ",
  },
  {
    text: "Mudita significa Alegria. Mochila ideal para quem tem um dia-a-dia um pouco mais cheio ou gosta de está sempre viajando. Possui diversos bolsos externos, bolso interno para notebook até 17,3'\". Forro impermeável fácil de limpar. Alças e costas acolchoadas e com tecido respirável. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. ",
  },
  {
    text: "A pochete Luna é a bolsa ideal para quem gosta de sair com pouca coisa. Com o tamanho ideal para carregar apenas o necessário, ela é leve, discreta e confortável. Produzida de forma artesanal e afetuosa. Com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. Tem forro impermeável, alças acetinadas com 30mm, ela é colorida e contém um engate de nylon Ao comprar essa peça, você está incetivando uma economia mais justa e sustentável para o planeta.",
  },
  {
    text: "A Cósmica Upcycle transforma peças antigas em novos produtos carregados de memória e significado. Ao preferir descartar itens de valor sentimental, como uma calça de uma avó, a empresa resgata esses materiais e os transforma em mochilas, bolsas e outros acessórios. Cada peça passa por um processo cuidadoso, onde o valor emocional é preservado, mas também ganha nova vida e funcionalidade. A Cósmica Upcycle valoriza a história por trás de cada material, criando produtos que não são apenas sustentáveis, mas também repletos de afeto. É uma forma de honrar o passado enquanto se constrói um futuro mais consciente e cheio de significado.",
  },
];
function cardsInfo() {
  const produtoButton = document.querySelectorAll(".saiba-mais");
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
        infoContainer.style.height = "9.5rem";
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
}
export { cardsDisplay, scroll, cardsInfo };
