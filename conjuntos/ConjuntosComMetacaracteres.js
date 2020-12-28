const texto = '.$+*?-';

console.log(texto.match(/[+.?*$]/g));	// metacaracteres dentro de um conjunto, se comportam como caracteres literais(não precisa de escape)
console.log(texto.match(/[+.?*$]./g));

console.log(texto.match(/[$-?]/g));		// isso é um intervalo (range)

// NÃO é um intervalo (range)
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

// pode precisar de escape dentro do conjunto: - [ ] ^