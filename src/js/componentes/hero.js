function elementHero (){
    return `<div class="source-div"></div>
      <div id="svg-container"></div>
      <p class="slogan">Quando você muda. O mundo muda</p>
      `
}

function svgHero (){
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
}
export {elementHero, svgHero} 