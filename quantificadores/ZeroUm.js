const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!!';
const texto2 = 'There is s big fog in NYC';

// ? = Zero ou Um (opcional)
const regex = /fogo?/gi;
console.log(texto.match(regex));
console.log(texto2.match(regex));