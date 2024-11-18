let lastScrollTop = 0;
const header = document.querySelector("header");
const sourceDiv = document.querySelector(".source-div");
const targetDiv = document.querySelector(".nav");
const image = document.querySelector(".logo-type");
const logoNav = document.querySelector(".logo");
const linksNav = document.querySelectorAll(".navbar-menu li a");
const navHamburger = document.querySelector(".hamburger-nav");
const menuHamburger = document.querySelector("#menuHamburguer");
const menuHamburgerLinha = document.querySelectorAll(".linha");
const hero = document.querySelector("#hero");
// Escuta o evento de scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  const finalDoElento = hero.getBoundingClientRect().bottom;
  if (window.innerWidth < 884) {
    if (finalDoElento < 22 && !menuHamburger.classList.contains("ativo")) {
      targetDiv.style.backgroundColor = "#e3e6dd";

      menuHamburgerLinha.forEach((element) => {
        element.style.backgroundColor = "black";
      });
    } else {
      targetDiv.style.backgroundColor = "transparent";
      menuHamburgerLinha.forEach((element) => {
        element.style.backgroundColor = "white";
      });
    }
  } else {
    if (scrollTop >= finalDoElento) {
      if (scrollTop > 0 && scrollTop > lastScrollTop) {
        // Usuário está rolando para baixo
        if (!targetDiv.contains(image)) {
          // targetDiv.insertBefore(image, targetDiv.firstChild); // Move a imagem para o targetDiv
          logoNav.classList.add("scroll");
          logoNav.style.display = "block";
          linksNav.forEach((element) => {
            element.style.color = "#333";
            element.style.textShadow = "0 0 0";
          });
        }
      }
      header.classList.add("scroll-header");
    } else if (scrollTop < 1035) {
      header.classList.remove("scroll-header");
      logoNav.style.display = "none";
      linksNav.forEach((element) => {
        element.style.color = "#f3f0f0";
        element.style.textShadow = "0px 0px 10px rgb(0, 0, 0)";
      });
      if (scrollTop === 0) {
        // Usuário chegou no topo da página
        if (!sourceDiv.contains(image)) {
          // sourceDiv.insertBefore(image, sourceDiv.firstChild); // Move a imagem de volta para o sourceDiv
          logoNav.classList.remove("scroll");
        }
      }
    }
  }
  lastScrollTop = scrollTop;
});
// criando cards dinamicamente
const cards = document.querySelector(".produtos-wrapper");
const infosCards = [
  {
    imagem: "src/imagens/cards/Bolsas-juntas.JPEG",
    nome: "Produto 1",
    title: "Bolsas Cosmica",
    descricao: "A linha de bolsas da Cósmica Upcycle é um verdadeiro...",
  },
  {
    imagem: "src/imagens/cards/127 - CHEILAWIGGERS - 849A0239.jpg",
    nome: "Produto 2",
    title: "Mochila Upeksha",
    descricao: "Upeksha significa equanimidade. Mochila ideal para...",
  },
  {
    imagem: "src/imagens/cards/IMG_1286 (1).jpg",
    nome: "Produto 3",
    title: "Basic bag",
    descricao: "A Basic bag é a bolsa ideal para quem gosta de sair...",
  },
  {
    imagem: "src/imagens/cards/Mochila.JPEG",
    nome: "Produto 4",
    title: "Mochila Mudita",
    descricao: "Mudita significa Alegria. Mochila ideal para quem tem...",
  },
  {
    imagem: "src/imagens/cards/IMG_5863.jpg",
    nome: "Produto 5",
    title: "Pochetes",
    descricao: "A pochete Luna é a bolsa ideal para quem gosta de sair...",
  },
  {
    imagem: "src/imagens/cards/Upcycle afetivo.png",
    nome: "Produto 6",
    title: "Upcycle Afetivo",
    descricao: "A Cósmica Upcycle transforma peças antigas em novos...",
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
  if(window.innerWidth < 884){
    cards.scrollBy({
      left: 270,
      behavior: "smooth",
    });
  } 
  if (window.innerWidth > 885){
    cards.scrollBy({
      left: 1150,
      behavior: "smooth",
    });
  }
});
// botões para navegação entre os cards esquerda
const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", () => {
  if(window.innerWidth < 884){
    cards.scrollBy({
      left: -270,
      behavior: "smooth",
    });
  } 
  if (window.innerWidth > 885){
    cards.scrollBy({
      left: -1150,
      behavior: "smooth",
    });
  }
});

// Botão descrição dos produtos
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
const textCenter = document.querySelector(".circle-text");
const title1 = document.querySelector(".title1");
const text1 = document.querySelector(".text1");
const title2 = document.querySelector(".title2");
const text2 = document.querySelector(".text2");

// Defina a lista de ícones a partir de seus elementos DOM
const nossaCausa = document.querySelectorAll(".icon"); // Altere o seletor conforme sua estrutura

const itens = ["design", "make", "package", "use", "recycle"];
const texts = [
  {
    id: 1,
    title: "Criatividade e Sustentabilidade em Transformação",
    text: "O design da moda upcycle combina sustentabilidade, criatividade e inovação para transformar peças de roupas e materiais descartados em novos produtos únicos e estilizados. Essa abordagem se baseia na reinvenção, utilizando tecidos antigos, sobras de produção ou roupas com defeitos para criar algo novo e funcional, sem a necessidade de produzir novas matérias-primas.",
    centerText: "O Design da moda upcycle",
  },
  {
    id: 2,
    title: "Estilo Único com Impacto Sustentável",
    text: "Além de sua estética inovadora, o design da moda upcycle promove um impacto positivo ao reduzir o desperdício têxtil e minimizar os recursos naturais utilizados na produção. Ele também valoriza a individualidade do consumidor, oferecendo produtos que contam histórias e celebram a personalização. Dessa forma, o design upcycle não só redefine o que é considerado moda, mas também incentiva um consumo mais consciente e responsável.",
  },
  {
    id: 3,
    title: "O Processo Criativo e Sustentável da Moda Upcycle",
    text: "Processo de desenvolvimento da moda UpcycleO processo de desenvolvimento da moda upcycle envolve várias etapas criativas e sustentáveis que transformam peças de roupas ou materiais descartados em novos itens de valor. O primeiro passo é a seleção de materiais, onde roupas antigas, sobras de tecidos ou itens com defeitos são coletados. Esses materiais são então avaliados para determinar seu potencial de reaproveitamento, considerando texturas, cores e condições.",
    centerText:
      "Um Passo Sustentável para Reduzir o Desperdício e Preservar Recursos",
  },
  {
    id: 4,
    title: "Da Seleção à Criação Consciente",
    text: "Na segunda etapa, ocorre a desconstrução e preparação, onde os itens selecionados são desmontados e limpos. Em seguida, vem a fase de design e criação, na qual designers e artesãos utilizam técnicas como recorte, costura, tingimento e bordado para reinventar as peças, muitas vezes combinando elementos de diferentes itens para criar algo único. A última etapa é a finalização e acabamento, garantindo que os produtos sejam funcionais, confortáveis e esteticamente atrativos. Todo o processo é guiado por uma abordagem consciente, que valoriza a redução de desperdício e a inovação, criando peças que carregam tanto estilo quanto propósito.",
  },
  {
    id: 5,
    title: "Uma Resposta Sustentável aos Desafios da Indústria",
    text: "O método de chegada do upcycle refere-se ao modo como essa prática sustentável ganhou espaço e reconhecimento no design, na moda e em outras indústrias. Esse conceito surgiu em resposta a problemas crescentes como o desperdício excessivo, a exploração de recursos naturais e os impactos negativos da produção em massa, especialmente na indústria têxtil.",
    centerText: "A chegada da moda Upcycle",
  },
  {
    id: 6,
    title: "A Evolução do Upcycle: De Pequenos Artesãos ao Mercado Global",
    text: "Adotado por pequenos designers e artesões, o método de upcycle gradualmente conquistou espaço em grandes marcas e no mercado global, refletindo uma mudança nos valores dos consumidores. Hoje, ele é visto como uma alternativa inovadora que combina responsabilidade ambiental com estética, tornando-se uma parte essencial das estratégias de design sustentável.",
  },
  {
    id: 7,
    title: "Transformação Criativa com Propósito Sustentável",
    text: "A reciclagem na moda upcycle é uma prática que vai além do simples reaproveitamento de materiais. Diferente da reciclagem tradicional, onde os materiais são processados para serem reutilizados em novas formas, o upcycling preserva a integridade do material original, transformando roupas e tecidos descartados em peças de maior valor sem a necessidade de desmantelar ou processar quimicamente os materiais.",
    centerText: "A Reciclagem da Moda Upcycle",
  },
  {
    id: 8,
    title: "Sustentabilidade com Menos Energia e Impacto Ambiental",
    text: "Esse processo reduz significativamente o consumo de energia e a emissão de poluentes, já que evita etapas industriais complexas. Por exemplo, ao reaproveitar tecidos de roupas antigas, como jeans ou camisas, é possível criar novos designs sem a necessidade de produzir novos tecidos, o que economiza água e reduz o uso de pesticidas e produtos químicos.",
  },
  {
    id: 9,
    title: "Transformando Estilo em Impacto Ambiental Positivo",
    text: "O impacto do uso da moda upcycle é significativo tanto para o meio ambiente quanto para a sociedade. No aspecto ambiental, essa prática reduz o desperdício têxtil, desviando roupas e tecidos descartados de aterros sanitários. Além disso, diminui a necessidade de produção de novas matérias-primas, como algodão ou poliéster, que consomem grandes quantidades de água e energia e geram emissões de carbono.",
    centerText: "Uso da Moda Upcycle",
  },
  {
    id: 10,
    title:
      "Um Passo Sustentável para Reduzir o Desperdício e Preservar Recursos",
    text: "O impacto do uso da moda upcycle é significativo tanto para o meio ambiente quanto para a sociedade. No aspecto ambiental, essa prática reduz o desperdício têxtil, desviando roupas e tecidos descartados de aterros sanitários. Além disso, diminui a necessidade de produção de novas matérias-primas, como algodão ou poliéster, que consomem grandes quantidades de água e energia e geram emissões de carbono.",
  },
];

const itemToTextIds = {
  design: [1, 2],
  make: [3, 4],
  package: [5, 6],
  use: [9, 10],
  recycle: [7, 8],
};

// Define um estado inicial
let currentActive = null;

// Função para atualizar textos
function activateTexts() {
  text1.classList.add("active");
  text2.classList.add("active");
  title1.classList.add("active");
  title2.classList.add("active");
  textCenter.classList.add("active");
}

// Função para desativar os textos (caso necessário, como na inicialização)
function deactivateTexts() {
  text1.classList.remove("active");
  text2.classList.remove("active");
  title1.classList.remove("active");
  title2.classList.remove("active");
  textCenter.classList.remove("active");
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
  }, 100); // Pequeno atraso para garantir a transição
}

// Configuração inicial: exibe o texto padrão (ID 1 e 2)
document.addEventListener("DOMContentLoaded", () => {
  const defaultTextIds = itemToTextIds["design"]; // Ou outro item padrão
  updateTexts(defaultTextIds);
  currentActive = nossaCausa[0]; // Define o primeiro ícone como ativo
  currentActive.classList.add("active");
});

// Adiciona eventos aos ícones
nossaCausa.forEach((icon, index) => {
  icon.addEventListener("mouseover", () => {
    const itemName = itens[index];
    const textIds = itemToTextIds[itemName];

    if (currentActive === icon) return; // Não faz nada se o ícone já estiver ativo

    // Remove estilizações do ícone ativo anterior
    if (currentActive) {
      currentActive.classList.remove("active");
      nossaCausa.forEach((el) => el.classList.remove("inactive"));
    }

    // Atualiza o ícone ativo
    currentActive = icon;
    icon.classList.add("active");
    updateTexts(textIds); // Atualiza os textos com transição

    // Aplica opacidade reduzida aos outros ícones
    nossaCausa.forEach((el) => {
      if (el !== icon) el.classList.add("inactive");
    });
  });
});

menuHamburger.addEventListener("click", function () {
  navHamburger.classList.toggle("ativo");
  if (navHamburger.classList.contains("ativo")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});
navHamburger.addEventListener("click", function () {
  console.log("clicou");
  if (navHamburger.classList.contains("ativo")) {
    document.body.style.overflow = "visible";
    navHamburger.classList.toggle("ativo");
  }
});

const svgPath = "../src/imagens/logoAnimado.svg";
const svgContainer = document.getElementById("svg-container");
fetch(svgPath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro ao carregar o SVG: ${response.status}`);
    }
    return response.text();
  })
  .then((svgContent) => {
    svgContainer.innerHTML = svgContent;
  })
  .catch((err) => console.error(err));
