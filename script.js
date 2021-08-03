const api = require("./api");

// exercício 2
let destaqueTotal = 0;
let total = 0;

function emDestaque() {
  for (let i = 0; i < api.length; i += 1) {
    if (listaProdutos.emDestaque === "sim") {
      destaqueTotal = listaProdutos.emDestaque * listaProdutos.qtdEstoque;
    }
    return total + (listaProdutos.preco * destaqueTotal);
  }
}


