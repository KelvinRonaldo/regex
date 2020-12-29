const texto = `
Léo é muito legal
Emanoel foi jogar em Sergipe
Bianca é casado com Habib
`;

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gi));
console.log(texto.match(/^(\w).+\1$/gim));