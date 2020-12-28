const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46';

// para definir um quantificador use {}
console.log(texto.match(/\d{1,2}/g));		// de 1 a 2 digitos
console.log(texto.match(/[0-9]{2}/g));		// 2 digitos
console.log(texto.match(/\d{1,}/g));		// 1 ou mais digitos


console.log(texto.match(/\w{7}/g));			// Grupo de 7 caractéres
console.log(texto.match(/[\wõ]{7,}/g));		// Grupo de 7 ou mais caractéres