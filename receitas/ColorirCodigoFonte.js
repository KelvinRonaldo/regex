const aplicarCor = (texto, regex, cor) => texto.replace(regex, `<span style="color: #${cor}"><b>$1</b></span>`);

const files = require('./Files');
const texto = files.read('codigoFonte.html');

const codeRegex = /<code>[\s\S]*<\/code>/i;
let codigo = texto.match(codeRegex)[0];

// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'CC9178');

// Palavras reservadas...
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'D857CF');

// Tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2');

// Comentários de multiplas linhas...
	codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703');

// comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/ .*)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo);
files.write('codigoFonte.html', conteudoFinal);