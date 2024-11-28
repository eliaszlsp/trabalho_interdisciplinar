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
    category: "design",
  },
  {
    id: 3,
    title: "O Processo Criativo e Sustentável da Moda Upcycle",
    text: "Processo de desenvolvimento da moda UpcycleO processo de desenvolvimento da moda upcycle envolve várias etapas criativas e sustentáveis que transformam peças de roupas ou materiais descartados em novos itens de valor. O primeiro passo é a seleção de materiais, onde roupas antigas, sobras de tecidos ou itens com defeitos são coletados. Esses materiais são então avaliados para determinar seu potencial de reaproveitamento, considerando texturas, cores e condições.",
    centerText:
      "Um Passo Sustentável para Reduzir o Desperdício e Preservar Recursos",
    category: "make",
  },
  {
    id: 4,
    title: "Da Seleção à Criação Consciente",
    text: "Na segunda etapa, ocorre a desconstrução e preparação, onde os itens selecionados são desmontados e limpos. Em seguida, vem a fase de design e criação, na qual designers e artesãos utilizam técnicas como recorte, costura, tingimento e bordado para reinventar as peças, muitas vezes combinando elementos de diferentes itens para criar algo único. A última etapa é a finalização e acabamento, garantindo que os produtos sejam funcionais, confortáveis e esteticamente atrativos. Todo o processo é guiado por uma abordagem consciente, que valoriza a redução de desperdício e a inovação, criando peças que carregam tanto estilo quanto propósito.",
    category: "make",
  },
  {
    id: 5,
    title: "Uma Resposta Sustentável aos Desafios da Indústria",
    text: "O método de chegada do upcycle refere-se ao modo como essa prática sustentável ganhou espaço e reconhecimento no design, na moda e em outras indústrias. Esse conceito surgiu em resposta a problemas crescentes como o desperdício excessivo, a exploração de recursos naturais e os impactos negativos da produção em massa, especialmente na indústria têxtil.",
    centerText: "A chegada da moda Upcycle",
    category: "package",
  },
  {
    id: 6,
    title: "A Evolução do Upcycle: De Pequenos Artesãos ao Mercado Global",
    text: "Adotado por pequenos designers e artesões, o método de upcycle gradualmente conquistou espaço em grandes marcas e no mercado global, refletindo uma mudança nos valores dos consumidores. Hoje, ele é visto como uma alternativa inovadora que combina responsabilidade ambiental com estética, tornando-se uma parte essencial das estratégias de design sustentável.",
    category: "package",
  },
  {
    id: 7,
    title: "Transformação Criativa com Propósito Sustentável",
    text: "A reciclagem na moda upcycle é uma prática que vai além do simples reaproveitamento de materiais. Diferente da reciclagem tradicional, onde os materiais são processados para serem reutilizados em novas formas, o upcycling preserva a integridade do material original, transformando roupas e tecidos descartados em peças de maior valor sem a necessidade de desmantelar ou processar quimicamente os materiais.",
    centerText: "A Reciclagem da Moda Upcycle",
    category: "recycle",
  },
  {
    id: 8,
    title: "Sustentabilidade com Menos Energia e Impacto Ambiental",
    text: "Esse processo reduz significativamente o consumo de energia e a emissão de poluentes, já que evita etapas industriais complexas. Por exemplo, ao reaproveitar tecidos de roupas antigas, como jeans ou camisas, é possível criar novos designs sem a necessidade de produzir novos tecidos, o que economiza água e reduz o uso de pesticidas e produtos químicos.",
    category: "recycle",
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
    category: "use",
  },
];

const itemToTextIds = {
  design: [1, 2],
  make: [3, 4],
  package: [5, 6],
  use: [9, 10],
  recycle: [7, 8],
};

function nossaCausa() {
  return `
        <div id="Nossa_causa">
          <div><h1>Nossa Causa</h1></div>
          <div class="circulo_sustentavel">

            <div class="border-circle">
              <img
                src="src/imagens/plan_circle__dnpdu0scqp4y_large.png"
                alt=""
              />
            </div>

            <div class="icon-container design">
              <div class="icon">
                <i class="fa-solid fa-scissors"></i>
              </div>
              <p class="label">DESIGN</p>
            </div>

            <div class="icon-container make">
              <div class="icon">
                <i class="fa-solid fa-compass-drafting"></i>
              </div>
              <p class="label">MAKE</p>
            </div>

            <div class="icon-container package">
              <div class="icon">
                <i class="fas fa-truck"></i>
              </div>
              <p class="label">PACKAGE</p>
            </div>

            <div class="icon-container use">
              <div class="icon">
                <i class="fa-sharp fa-solid fa-shirt"></i>
              </div>
              <p class="label">USE</p>
            </div>

            <div class="icon-container recycle">
              <div class="icon">
                <i class="fas fa-recycle"></i>
              </div>
              <p class="label">RECYCLE</p>
            </div>

            <div class="circle-text">
              <p class="textCenter">Sustentabilidade em movimento</p>
            </div>
          </div>

          <div class="texto_Nossa_causa">
            <div>
              <h3 class="title1">Texto 1</h3>
              <p class="text1"></p>
            </div>
            <div>
              <h3 class="title2">Texto 2</h3>
              <p class="text2"></p>
            </div>
          </div>
        </div>
      `;
}
let currentActive = null;

const nossaCausaIteracao = (section) => {

  const textCenter = section.querySelector(".circle-text");
  const title1 = section.querySelector(".title1");
  const text1 = section.querySelector(".text1");
  const title2 = section.querySelector(".title2");
  const text2 = section.querySelector(".text2");

  function activateTexts() {
    text1.classList.add("active");
    text2.classList.add("active");
    title1.classList.add("active");
    title2.classList.add("active");
    textCenter.classList.add("active");
  }

  // Função para desativar os textos 
  function deactivateTexts() {
    text1.classList.remove("active");
    text2.classList.remove("active");
    title1.classList.remove("active");
    title2.classList.remove("active");
    textCenter.classList.remove("active");
  }

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

  const nossaCausaIcon = section.querySelectorAll(".icon");
  const itens = ["design", "make", "package", "use", "recycle"];

  const defaultTextIds = itemToTextIds["design"]; // Ou outro item padrão
  updateTexts(defaultTextIds);
  currentActive = nossaCausaIcon[0]; // Define o primeiro ícone como ativo
  currentActive.classList.add("active");

  nossaCausaIcon.forEach((icon, index) => {
    icon.addEventListener("mouseover", () => {
      const itemName = itens[index];

      const textIds = itemToTextIds[itemName];

      if (currentActive === icon) return; // Não faz nada se o ícone já estiver ativo

      // Remove estilizações do ícone ativo anterior
      if (currentActive) {
        currentActive.classList.remove("active");
        nossaCausaIcon.forEach((el) => el.classList.remove("inactive"));
      }

      // Atualiza o ícone ativo
      currentActive = icon;
      icon.classList.add("active");
      updateTexts(textIds); // Atualiza os textos com transição

      // Aplica opacidade reduzida aos outros ícones
      nossaCausaIcon.forEach((el) => {
        if (el !== icon) el.classList.add("inactive");
      });
    });
  });
};

export { nossaCausa, nossaCausaIteracao };
