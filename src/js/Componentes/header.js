function elementHeader (){
    return `<nav class="nav">
        <a href="#hero"
          ><img class="logo" src="src/imagens/Group.png" alt="logo_cosmica"
        /></a>
        <a href="#hero">
          <img
            id="logo-menu-responsivo"
            src="src/imagens/Group.png"
            alt="logo_cosmica"
          />
        </a>
        <div class="menu-hamburguer" id="menuHamburguer">
          <div class="linha"></div>
          <div class="linha"></div>
          <div class="linha"></div>
        </div>
        <ul class="navbar-menu hamburger-nav">
          <li><a class="menu" href="#Sobre_nos">Sobre Nós</a></li>
          <li><a class="menu" href="#Upcycle">Upcycle</a></li>
          <li><a class="menu" href="#">Home</a></li>
          <li><a class="menu" href="#produtos-Section">Produtos</a></li>
          <li><a class="menu" href="#Nossa_causa">Nossa causa</a></li>
        </ul>
      </nav>`
}
export {elementHeader}