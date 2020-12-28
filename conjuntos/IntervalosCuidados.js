const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g));	// não define um range

console.log(texto.match(/[A-z]/g)); // O intervalo usa a ordem da tabela UNICODE (ASCII)

// tem que respitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g));
// console.log(texto.match(/[4-1]/g));