
// Chamando API

let api = []


const myInit = {
  method: 'GET',
  headrs: {
    'Content-Type': 'application/json'
  },
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request("./api.json", myInit);

fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  }).then(function (d) {
    api = d
    return api
  });

  // Exercício 1:

// Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

function stockTotal() {

    const stockTotal = api.listaProdutos.reduce((acc, i) => acc + i.qtdEstoque, 0);
  
    console.log("A quantidade total de itens em estoque é: " + stockTotal);
  };
  
  // Exercicio 2:


  function amountFeaturedProduct() {
    let productFeat = 0;
    for (item in api.listaProdutos) {
        if (api.listaProdutos[item].emDestaque === 'sim') {
            productFeat += api.listaProdutos[item].qtdEstoque
        };
    };
    console.log(`Total de produtos em destaque é: ${ productFeat }`);
};

  
  // Exercicio 3: 
  
  // Quantidade total de itens disponíveis (similar ao anterior)
  
  function availableStock() {
  
    const availableStock = api.listaProdutos.filter(({ disponivel }) => disponivel === "sim").reduce((acc, i) => acc + i.qtdEstoque, 0);
  
    console.log("A quantidade total de itens disponíveis em estoque é: " + availableStock);
  };
  
  // Exercicio 4
  // Quantidade de itens disponíveis e em destaque.
  
  
  function featuredProducts () {
    let featuredProducts = 0;
  
        for (let i = 0; i < api.listaProdutos.length; i++) {
          if (api.listaProdutos[i].disponivel === "sim" && api.listaProdutos[i].emDestaque === "sim") {
            
            featuredProducts += (api.listaProdutos[i].qtdEstoque);
      
          };
        };
        console.log('Produtos disponíveis e em destaque: ' + featuredProducts);
      };

  // Exercicio 5
  // Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque - considere apenas os produtos “EM ESTOQUE”)
  
  function valueStockTaking() {
    let stockTaking = 0;
    for (i in api.listaProdutos) {
      if (api.listaProdutos[i].disponivel === "sim") {
        stockTaking += api.listaProdutos[i].qtdEstoque * api.listaProdutos[i].preco;
      };
    };
    console.log(`O valor total em estoque é ${stockTaking}`);
  };
  
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
        console.log('O produto mais caro da loja é: ' + api.listaProdutos[x].descricao + ' ' + api.listaProdutos[x].departamento.nomeDepto + ' no valor de R$' + expensiveProduct )
  };
  
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
        console.log('O produto mais barato da loja é: ' + api.listaProdutos[x].descricao + ' ' + api.listaProdutos[x].departamento.nomeDepto + ' R$' + lowestPrice) 
  }
  // Exercicio 8:

  function mostExpensiveProduct() {
    let productName = "";
    let price = 0;
    for (item in api.listaProdutos) {
        if (api.listaProdutos[item].disponivel === 'sim') {
            if ((api.listaProdutos[item].preco * api.listaProdutos[item].qtdEstoque) > price) {
                price = api.listaProdutos[item].preco * api.listaProdutos[item].qtdEstoque
                productName = api.listaProdutos[item].descricao
                productStockName = api.listaProdutos[item].departamento.nomeDepto
            }
        }
      }
      console.log(`O estoque de maior valor é do produto: ${ productName } com o valor de R$ ${price}, localizado em ${productStockName}.`);
} 

  
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
  
    let departments = api.listaProdutos.map((i) => i.departamento.nomeDepto)
    departments = departments.filter((v, i, a) => a.indexOf(v) === i)
  
    let departmentsValue = []
    let maxValuableDepartment

    for (i in departments) {
      departmentsValue.push({department: departments[i], value: 0})
    }

    for (index in departmentsValue) {
      for (i in api.listaProdutos) {
        if (departmentsValue[index].department === api.listaProdutos[i].departamento.nomeDepto) {
          departmentsValue[index].value = departmentsValue[index].value + (api.listaProdutos[i].preco * api.listaProdutos[i].qtdEstoque)
        }
      }

      maxValuableDepartment = departmentsValue.reduce((max, min) => max.value > min.value ? max : min)
    }

    console.log(`O departamento mais valioso é ${maxValuableDepartment.department} com um valor total de R$${maxValuableDepartment.value}`)
  }

  // Exercicio 15

  function departmentLessValuable() {
  
    let departments = api.listaProdutos.map((i) => i.departamento.nomeDepto)
    departments = departments.filter((v, i, a) => a.indexOf(v) === i)

    let departmentsValue = []
    let minValuableDepartment

    for (i in departments) {
      departmentsValue.push({department: departments[i], value: 0})
    }

    for (index in departmentsValue) {
      for (i in api.listaProdutos) {
        if (departmentsValue[index].department === api.listaProdutos[i].departamento.nomeDepto) {
          departmentsValue[index].value = departmentsValue[index].value + (api.listaProdutos[i].preco * api.listaProdutos[i].qtdEstoque)
        }
      }

      minValuableDepartment = departmentsValue.reduce((max, min) => max.value < min.value ? max : min)
    }

    console.log(`O departamento menos valioso é "${minValuableDepartment.department}" com um valor total de R$${minValuableDepartment.value}`)
  }

  // Roda todas funções do exercicio
  
  function runEverything() {
    console.log("Exercicio 1");
    stockTotal()
    console.log("Exercicio 2")
    amountFeaturedProduct()
    console.log("Exercicio 3")
    availableStock()
    console.log("Exercicio 4")
    featuredProducts ()
    console.log("Exercicio 5")
    valueStockTaking()
    console.log("Exercicio 6")
    expensiveProduct()
    console.log("Exercicio 7")
    lowestPrice()
    console.log("Exercicio 8")
    mostExpensiveProduct()
    console.log("Exercicio 9")
    cheapestProduct()
    console.log("Exercicio 10")
    ticketMedio()
  }
