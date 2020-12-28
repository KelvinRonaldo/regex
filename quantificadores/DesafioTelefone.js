const texto = `Lista telefônica:
- (11) 98756-1212
- 98765-4321
- (89) 2244-5442
- (22)96547-8542`;

const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g;

console.log(texto.match(regex));