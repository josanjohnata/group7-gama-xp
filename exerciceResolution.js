let api = []

const myInit = {
  method: 'GET',
  headrs: {
    'Content-Type': 'application/json'
  },
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

  // Exercício 1:

// Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

function stockTotal() {

    const stockTotal = api.listaProdutos.reduce((acc, i) => acc + i.qtdEstoque, 0)
  
    console.log("A quantidade total de itens em estoque é: " + stockTotal)
  }
  
  // Exercicio 2:


// let destaqueTotal = 0;
// let total = 0;

// function emDestaque() {
//   for (let i = 0; i < api.length; i += 1) {
//     if (listaProdutos.emDestaque === "sim") {
//       destaqueTotal = api.listaProdutos.emDestaque * listaProdutos.qtdEstoque;
//     }
//     return total + (listaProdutos.preco * destaqueTotal);
//   }
// }

  
  // Exercicio 3: 
  
  // Quantidade total de itens disponíveis (similar ao anterior)
  
  function availableStock() {
  
    const availableStock = api.listaProdutos.filter(({ disponivel }) => disponivel === "sim").reduce((acc, i) => acc + i.qtdEstoque, 0)
  
    console.log("A quantidade total de itens disponíveis em estoque é: " + availableStock)
  }
  
  // Exercicio 4
  // Quantidade de itens disponíveis e em destaque.
  
  
  function featuredProducts () {
    let featuredProducts = 0;
  
        for (let i = 0; i < api.listaProdutos.length; i++) {
          if (api.listaProdutos[i].disponivel === "sim" && api.listaProdutos[i].emDestaque === "sim") {
            
            featuredProducts += (api.listaProdutos[i].qtdEstoque)
      
          }
        }
        console.log('Produtos disponíveis e em destaque: ' + featuredProducts)
      }
  // Exercicio 5
  // Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque - considere apenas os produtos “EM ESTOQUE”)
  
  function valueStockTaking() {
    let stockTaking = 0;
    for ( i in api.listaProdutos ) {
      if (api.listaProdutos[i].disponivel === "sim") {
        stockTaking += api.listaProdutos.qtdEstoque * api.listaProdutos.preco;
      }
    }
    console.log(stockTaking);
  }
  
  // Exercicio 6
  // Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)
  
  function expensiveProduct() {
        let expensiveProduct = api.listaProdutos[0].preco;
        let x = 0;
        for (let i = 0; i < api.listaProdutos.length; i++) {
  
          if (api.listaProdutos[i].preco > expensiveProduct) {
            expensiveProduct = api.listaProdutos[i].preco;
            x = i;
          };
        };
        console.log(api.listaProdutos[x].descricao + ' ' + api.listaProdutos[x].departamento.nomeDepto + ' R$ ' + expensiveProduct)
  };
  
  
  // 6 - Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)
  
  function expensiveProduct() {
  
    let expensiveProduct = api.listaProdutos[0].preco
    let x = 0
  
    console.log(expensiveProduct)
  
    for (let i = 0; i < api.listaProdutos.length; i++) {
      if (api.listaProdutos[i].preco > expensiveProduct) {
        expensiveProduct = api.listaProdutos[i].preco
        x = i
      }
    }
  
    console.log(api.listaProdutos[x])
  
  }
  
  // Exercicio 7
  //Produto mais barato da loja (bem como seu departamento - considere apenas o preço dele)
  
  function lowestPrice() {
        let lowestPrice = api.listaProdutos[0].preco
        let x = 0
        for (let i = 0; i < api.listaProdutos.length; i++) {
  
          if (api.listaProdutos[i].preco < lowestPrice) {
            lowestPrice = api.listaProdutos[i].preco
            x = i
          }
        }
        console.log(api.listaProdutos[x].descricao + ' ' + api.listaProdutos[x].departamento.nomeDepto + ' R$' + lowestPrice) 
  }
  // Exercicio 8
  
  // Exercicio 9:
  
  // Produto em estoque menos valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)
  
  function cheapestProduct() {
  
    let cheapestStock = []
  
    let cheapestProductStock = api.listaProdutos.filter(({ disponivel }) => disponivel === "sim")
    
    let cheapestProduct = cheapestProductStock[0].preco * cheapestProductStock[0].qtdEstoque  
  
    function totalStockPrice(listaProdutos, i, a) {
      let sum = listaProdutos.preco * listaProdutos.qtdEstoque
      
      if (sum < cheapestProduct) {
        cheapestProduct = sum
        cheapestStock = listaProdutos
    }}
  
    cheapestProductStock.forEach(totalStockPrice)
  
    console.log('O produto com menor valor é o(a) ' + cheapestStock.descricao + ' do departamento ' + cheapestStock.departamento.nomeDepto + ' com o valor de estoque estimado em R$' + cheapestProduct)
  
  }
  
  // Exercicio 10:
  
  // Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens - considere TODOS os produtos, porém considere apenas 1 exemplar por produto)
  
  function ticketMedio() {
  
    let ticketMed = 0
    for (let i = 0; i < api.listaProdutos.length; i++) {
      ticketMed += (api.listaProdutos[i].preco * api.listaProdutos[i].qtdEstoque)
    }
    ticketMed = (ticketMed / api.listaProdutos.length)
    console.log("O ticket médio é: " + ticketMed.toFixed(2))
  }
  
  // Exercicio 11
  
  // Exercicio 12
  
  // Exercicio 13
  
  // Exercicio 14
  
  // Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens - Considere todos os departamentos)
  
  function departmentMostValuable() {
  
    let departaments = api.listaProdutos.map((i) => i.departamento.nomeDepto)
    departaments = departaments.filter((v, i, a) => a.indexOf(v) === i)
  
    for (let i = 0; i < departaments.length; i++) {
      for (let a = 0; a < api.listaProdutos.length; a++) {
        if (departaments[i] === api.listaProdutos.departamento.nomeDepto) {
  
        }
      }
    }
  
  }
  // Exercicio 15
  
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