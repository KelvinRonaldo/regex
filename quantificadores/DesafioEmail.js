const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.bradesco.com.br
- kelvin@ronaldo.com.
- ronaldo@kelvin.gov.com.br
`

const regex = /[\w.]+@[\w]{2,}.[\w.]{2,}/g;

console.log(texto.match(regex));



// https://github.com/cod3rcursos/curso-regex/blob/master/quantificadores/Desafios.txt