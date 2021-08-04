// Essa função é para validar o Login

// const credentials = {
//   user: 'teste@teste.com',
//   password: '123456',
// };
// function login() {
//   onclick="window.open('index.html', '_self')";
// }
// function checkLogin() {
//   const inputName = document.getElementById('inputLogin').value;
//   const inputPassword = document.getElementById('inputPassword').value;
//   if (inputName === credentials.user && inputPassword === credentials.password) {
//     alert('Olá! Esse é nosso sistema de estoque');
//   } else {
//     alert('Login ou senha inválidos.');
//   }
// }

// const buttonLogin = document.getElementById('buttonLogin');
// buttonLogin.addEventListener('click', checkLogin);

// Essa função valida as informações dos produtos.

function checkProductInfo(txtNameProduct, txtQuantityProduct, txtPriceProduct, txtCodeProduct) {
  let productName = document.getElementById(txtNameProduct).value;
  let productPrice = document.getElementById(txtPriceProduct).value;
  let productCode = document.getElementById(txtCodeProduct).value;
  let productQuantity = document.getElementById(txtQuantityProduct).value;

  if (productName == '') {
    alert('Nome do produto está em branco. Por favor preenchê-lo!');
  } else if (productQuantity == '') {
    alert('A quantidade do produto está em branco. Por favor preenchê-lo!');
  } else if (productPrice == '') {
    alert('O preço do produto está em branco. Por favor preenchê-lo!');
  } else if (productCode == '') {
    alert('Nome do produto está em branco. Por favor preenchê-lo!');
  } else registerProduct(productName, productPrice, productCode, parseInt(productQuantity));
}

// Essa função cadastra um novo produto.

function registerProduct(name, price, code, quantity) {
  let newProduct = {
    productName: name,
    productPrice: price,
    productCode: code,
    productQuantity: quantity,
  };
  if (typeof(Storage) !== 'undefined') {
    let products = localStorage.getItem('products');
    if (products == null) products = [];
    else products = JSON.parse(products);
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products))
    alert('Foram cadastrados com sucesso ' + quantity + ' unidades do produto ' + name + '!');
    updateTotalStock('totalStock');
    location.reload();
  } else alert('A versão do seu navegador é muito antiga. Não será possível executar essa aplicação.')
}

// Essa função atualiza o total do estoque.

function updateTotalStock(idField) {
  localStorage.setItem('totalStock', ++ document.getElementById(idField).innerHTML)
}

// Essa função atualiza a quantidade de estoque ao carregar a página.

function loadTotalStock(idField) {
  if (typeof(Storage) !== 'undefined') {
    let totalStock = localStorage.getItem('totalStock');
    if (totalStock == null) totalStock = 0;
    document.getElementById(idField).innerHTML = totalStock;
  } else alert('A versão do seu navegador é muito antiga. Não será possível executar essa aplicação.')
}

// Esse função lista o novo estoque na página estoque.html

function listStock() {
  if (typeof(Storage) !== 'undefined') {
    let products = localStorage.getItem('products');
    document.write(`<input type="button" value="Voltar" class="btnBack" onclick="window.open('index.html', '_self');">`)
    document.write('<h1>Estoque:</h1>')
    if (products == null)
      document.write('<h3>Ainda não há nenhum item no estoque</h3>');
    else {
      products = JSON.parse(products);
      products.forEach(product => {
        document.write('<ul>');
        document.write('<li>Nome do produto: ' + product.productName + '</li>');
        document.write('<li>Código do produto: ' + product.productCode + '</li>');
        document.write('<li>Quantidade no estoque: ' + product.productQuantity + '</li>');
        document.write('<li>Preço do produto: ' + product.productPrice + '</li>');
        document.write('</ul>');
      })
    }
  }
  else alert('A versão do seu navegador é muito antiga. Não será possível executar essa aplicação.')
}

// Requisição da API 
// const api = require("./api");


// Não estava conseguindo utilizar o module exports para testar minhas funções, coloquei meu método de requisição de API enquanto não aprendi a usar o module.exports, 
// acho que é um bom item para fazer pair

// Método fetch para requisição do arquivo api.json
let api = []

const myInit = {
  method: 'GET',
  headrs: {
      'Content-Type': 'application/json'},
      mode: 'cors',
      cache: 'default'
  }

let myRequest = new Request("./api.json", myInit)

fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  }).then(function (d) {
    api = d
    return api
    
  })




// // exercício 2
// let destaqueTotal = 0;
// let total = 0;

// function emDestaque() {
//   for (let i = 0; i < api.length; i += 1) {
//     if (listaProdutos.emDestaque === "sim") {
//       destaqueTotal = listaProdutos.emDestaque * listaProdutos.qtdEstoque;
//     }
//     return total + (listaProdutos.preco * destaqueTotal);
//   }
// }


// Exercício 1:

function stockTotal() {
  let stockTotal = 0

  for (let i = 0; i < api.listaProdutos.length; i++) {
      stockTotal += (api.listaProdutos[i].qtdEstoque)
  }

  console.log("A quantidade total de itens em estoque é: " + stockTotal)
}

// Exercicio 3: 

function availableStock() {
      let availableStock = 0

      for (let i = 0; i < api.listaProdutos.length; i++) {
          if (api.listaProdutos[i].disponivel === "sim") {
              availableStock += (api.listaProdutos[i].qtdEstoque)
          }
      }
  
      console.log("A quantidade total de itens disponíveis em estoque é: " + availableStock)
  }

// Exercicio 9:

function cheapestProduct() {
      let cheapestProductStock = []

      for (let i = 0; i < api.listaProdutos.length; i++) {
  
          if (api.listaProdutos[i].disponivel === "sim") {
              cheapestProductStock.push
                  (api.listaProdutos[i].preco * api.listaProdutos[i].qtdEstoque)
          }
      }
  
      let cheapestProduct = cheapestProductStock[0]
  
      for (let i = 0; i < cheapestProductStock.length; i++) {
  
          if (cheapestProductStock[i] < cheapestProduct) {
              cheapestProduct = cheapestProductStock[i]
          }
  
      }
      console.log("O estoque com menor valor é: " + cheapestProduct.toFixed(2))
  }

// Exercicio 10:

function ticketMedio() {

      let ticketMedio = 0
      let x = 0
      for (let i = 0; i < api.listaProdutos.length; i++) {
          if (api.listaProdutos[i].disponivel === "sim") {
              x++
              let productValue = (api.listaProdutos[i].preco * api.listaProdutos[i].qtdEstoque)
              ticketMedio += productValue
          }
      }
      ticketMedio = (ticketMedio / x)
      console.log("O ticket médio é: " + ticketMedio.toFixed(2))
  }

// Roda todas funções do exercicio

function runEverything() {
  console.log("Exercicio 1")
  stockTotal()
  console.log("Exercicio 3")
  availableStock()
  console.log("Exercicio 9")
  cheapestProduct()
  console.log("Exercicio 10")
  ticketMedio()
}