import api from "./api.js";

function listaProdutos2() {
  const list = document.querySelector("#productsList");
  const listaProdutos = api.listaProdutos.map((product) => {
    const department = document.createElement("li");
    department.innerHTML = `Departamento: ${product.departamento.nomeDepto}`;
    list.appendChild(department);
    const description = document.createElement("li");
    description.innerHTML = `Descrição: ${product.descricao}`;
    list.appendChild(description);
    const productCode = document.createElement("li");
    productCode.innerHTML = `Código do produto: ${product.codProduto}`;
    list.appendChild(productCode);
    const quatStock = document.createElement("li");
    quatStock.innerHTML = `Quantidade no estoque: ${product.qtdEstoque}`;
    list.appendChild(quatStock);
    const price = document.createElement("li");
    price.innerHTML = `Preço do produto: ${product.preco}`;
    list.appendChild(price);
  });
  return listaProdutos;
}

listaProdutos2();
