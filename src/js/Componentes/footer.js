function elementFooter(){
  return `
      <div class="footer-container">
        <div class="footer-logo">
          <a href="#"
            ><img src="src/imagens/logoBranca.png" alt="Logo Cosmica"
          /></a>
          <p>
            Somos uma marca de moda sustentável que escolheu criar a partir de
            matérias que na perspectiva de algumas pessoas já cumpriram sua
            função no mundo, mas que na minha eles ainda tem muito a o que
            oferecer. Acreditamos na economia circular.
          </p>
        </div>

        <div class="footer-menu">
          <h3>Menu</h3>
          <ul>
            <li><a href="#Sobre_nos">Sobre Nós</a></li>
            <li><a href="#Upcycle">Upcycle</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#produtos-Section">Produtos</a></li>
            <li><a href="#Nossa_causa">Nossa causa</a></li>
          </ul>
        </div>

        <div class="footer-social">
          <h3>Redes Sociais</h3>
          <div class="social-icons">
            <a href="https://www.instagram.com/cosmicacria/" target="_blank"
              ><img src="src/imagens/logoInstagramBranco.png" alt="Instagram"
            /></a>
            <a href="#"
              ><img
                id="LinkedIn"
                src="src/imagens/logoLinkedinBranco.svg"
                src="src/imagens/logoLinkedinBranco.svg"
                alt="LinkedIn"
            /></a>
            <a href="#"
              ><img src="src/imagens/logoFacebookBranco.png" alt="Facebook"
            /></a>
          </div>
          <div class="propaganda">
            <a target="_blank" href="https://morellicai.github.io/DevTeam/"
              ><img src="src/imagens/logo-DevTeam.svg" alt="" height="40px"
            /></a>
          </div>
        </div>
      </div>
    `
}
export {elementFooter}