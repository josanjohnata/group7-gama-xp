// import api from "./api.js";
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
  if (typeof (Storage) !== 'undefined') {
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
  localStorage.setItem('totalStock', ++document.getElementById(idField).innerHTML)
}

// Essa função atualiza a quantidade de estoque ao carregar a página.

function loadTotalStock(idField) {
  if (typeof (Storage) !== 'undefined') {
    let totalStock = localStorage.getItem('totalStock');
    if (totalStock == null) totalStock = 0;
    document.getElementById(idField).innerHTML = totalStock;
  } else alert('A versão do seu navegador é muito antiga. Não será possível executar essa aplicação.')
}

// Esse função lista o novo estoque na página estoque.html

function listStock() {
  if (typeof (Storage) !== 'undefined') {
    let products = localStorage.getItem('products');
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


