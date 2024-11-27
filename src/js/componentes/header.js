function elementHeader() {
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
      </nav>`;
}

function headerIteracao() {
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
  const logoNavResponsivo = document.querySelector("#logo-menu-responsivo");
  // Escuta o evento de scroll
  window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const finalDoElento = hero.getBoundingClientRect().bottom;

    if (window.innerWidth < 1024) {
      if (finalDoElento < 22 && !menuHamburger.classList.contains("ativo")) {
        targetDiv.style.backgroundColor = "#e3e6dd";
        logoNavResponsivo.style.display = "block";
        menuHamburgerLinha.forEach((element) => {
          element.style.backgroundColor = "black";
        });
      } else {
        targetDiv.style.backgroundColor = "transparent";
        menuHamburgerLinha.forEach((element) => {
          element.style.backgroundColor = "white";
          logoNavResponsivo.style.display = "none";
        });
      }
    } else {
      if (scrollTop >= finalDoElento) {
        if (scrollTop > 0 && scrollTop > lastScrollTop) {
          // Usuário está rolando para baixo
          if (!targetDiv.contains(image)) {
            // targetDiv.insertBefore(image, targetDiv.firstChild); // Move a imagem para o targetDiv
            logoNav.classList.add("scroll");

            if (window.innerWidth > 1280) {
              logoNav.style.display = "block";
              linksNav.forEach((element) => {
                element.style.color = "#333";
                element.style.textShadow = "0 0 0";
              });
            }
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

  menuHamburger.addEventListener("click", function () {
    menuHamburger.classList.toggle("ativo");
    navHamburger.classList.toggle("ativo");

    // Controla o scroll do corpo
    if (navHamburger.classList.contains("ativo")) {
      document.body.style.overflow = "hidden"; // Desativa o scroll
    } else {
      document.body.style.overflow = "visible"; // Ativa o scroll
    }
  });

  navHamburger.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navHamburger.classList.remove("ativo");
      menuHamburger.classList.remove("ativo");
      document.body.style.overflow = "visible";

      // Ativa o scroll
    }
  });
}
export { headerIteracao, elementHeader };
