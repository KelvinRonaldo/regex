const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!!';
const texto2 = 'There is s big fog in NYC';

// + = Uma ou mais ocorrências
const regex = /fogo+/gi;
console.log(texto.match(regex));
console.log(texto2.match(regex));

const texto3 = 'Os números 0123456789';
console.log(texto3.match(/[0-9]/g));
console.log(texto3.match(/[0-9]+/g));