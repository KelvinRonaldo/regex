// No início...
// Um byte (8 bits) - 256 caracteres
// Simbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500 caractesres
// +Simbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes vari´vel - Expansível
// Suporta mais de 1M de caracteres
// Atualmente tem mais de 100k caracteres atribuídos
// https://unicode-table.com/pt/

const texto = 'aʬc௵d';

console.log(texto.match(/\U02AC|\U0BF5/g));