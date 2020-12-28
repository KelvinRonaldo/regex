const texto = `CPF dos aprovados:
- 600.567.890-12
- 765.998.345-23
- 254.698.315-20
- 210.032.987-54
- 246.987.300-41
`

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;

console.log(texto.match(regex));
