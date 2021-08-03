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

function checkProductInfo(txtNomeProduto, txtQuantidadeProduto, txtPrecoProduto, txtCodigoProduto) {
  let productName = document.getElementById(txtNomeProduto).value;
  let productQuantity = document.getElementById(txtQuantidadeProduto).value;
  let productPrice = document.getElementById(txtPrecoProduto).value;
  let productCode = document.getElementById(txtCodigoProduto).value;

  if (productName == '') {
    alert('Nome do produto está em branco. Por favor preenchê-lo!');
  } else if (productQuantity == '') {
    alert('A quantidade do produto está em branco. Por favor preenchê-lo!');
  } else if (productPrice == '') {
    alert('O preço do produto está em branco. Por favor preenchê-lo!');
  } else if (productCode == '') {
    alert('Nome do produto está em branco. Por favor preenchê-lo!');
  } else registerProduct(productName, productPrice, productCode, parseInt( productQuantity));
}

// Essa função cadastra um novo produto.

function registerProduct(name, quantity, price, code) {
  let newProduct = {
    productName: name,
    productQuantity: quantity,
    productPrice: price,
    productCode: code
  };
  if (typeof(Storage) !== 'undefined') {
    let products = localStorage.getItem('products');
    if (products == null) products = [];
    else products = JSON.parse(products);
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products))
    alert('Foram cadastrados com sucesso ' + quantity + 'unidades do produto ' + name + '!');
    updateTotalStock('totalEstoque');
    location.reload();
  } else alert('A versão do seu navegador é muito antiga. Não será possível executar essa aplicação.')
}

// Essa função atualiza o total do estoque.

function updateTotalStock(idField) {
  localStorage.setItem('totalEstoque', ++ document.getElementById(idField).innerText)
}

// Essa função atualiza a quantidade de estoque ao carregar a página.

function loadTotalStock(idField) {
  if (typeof(Storage) !== 'undefined') {
    let totalStock = localStorage.getItem('totalStock');
    if (totalStock == null) totalStock = 0;
    document.getElementById(idField).innerText = totalEstoque;
  } else alert('A versão do seu navegador é muito antiga. Não será possível executar essa aplicação.')
}




// const api = require("./api");

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


