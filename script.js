// Essa função é para validar o Login

const credentials = {
  user: 'teste@teste.com',
  password: '123456',
};

function checkLogin() {
  const inputName = document.getElementById('inputLogin').value;
  const inputPassword = document.getElementById('inputPassword').value;
  if (inputName === credentials.user && inputPassword === credentials.password) {
    alert('Olá! Esse é nosso sistema de estoque');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const buttonLogin = document.getElementById('buttonLogin');
buttonLogin.addEventListener('click', checkLogin);









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


