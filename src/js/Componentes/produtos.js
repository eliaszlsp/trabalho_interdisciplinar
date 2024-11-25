function elementProdutos (){
    return `
    <h1 class="produtos-titulo">Nossos Produtos</h1>
        <div class="produtos-wrapper">
          <div class="produtos" id="produtos"></div>
        </div>
        <div class="produto-botao">
          <button class="nav-btn" id="prev">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button class="nav-btn" id="next">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>`;
}
// função para mostrar os cards na tela
export {elementProdutos};