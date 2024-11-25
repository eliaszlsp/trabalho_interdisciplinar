const fraseDeAutotidade = (svgPath) => {
  return ` <object
          type="image/svg+xml"
          data=${svgPath}
          style="border: none"
        ></object>`;
};

export { fraseDeAutotidade };
