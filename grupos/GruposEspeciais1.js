const texto = 'João é calmo, mas no trânsito fica nervoso.';

console.log(texto.match(/[\wÀ-ü]+/gi));

// Positive lookahead
console.log(texto.match(/[\wÀ-ü]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ü]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ü]+(?=, mas)/gi));

// Negative lookahead
console.log(texto.match(/[\wÀ-ü]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ü]+[\s|\.](?!,)/gi));
