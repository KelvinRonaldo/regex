const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!';

console.log(texto.match(/[(abc)]/gi));		// dentro de conjuntos [], os grupos não existem
console.log(texto.match(/([abc])/gi));
console.log(texto.match(/(abc)+/gi));