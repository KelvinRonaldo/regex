const texto = 'Bom\ndia';

console.log(texto.match(/.../g));
console.log(texto.match(/..../g)); // o ponto não engloba o \n

// dotall - algumas linguagens possuem um flag (s -> /exp/s), mas JS não!