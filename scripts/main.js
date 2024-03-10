const produtos = [
    { codigo: 1 , nome: 'Notebook', preco: 2499, unidadePreco: 'R$' },
    { codigo: 2 , nome: 'Smartphone', preco: 999, unidadePreco: 'R$' },
    { codigo: 3 , nome: 'Tablet', preco: 799, unidadePreco: 'R$' },
    { codigo: 4 , nome: 'Smartwatch', preco: 399, unidadePreco: 'R$' },
    { codigo: 5 , nome: 'Câmera', preco: 299, unidadePreco: 'R$' },
    { codigo: 6 , nome: 'Impressora', preco: 199, unidadePreco: 'R$' },
    { codigo: 7 , nome: 'Monitor', preco: 499, unidadePreco: 'R$' },
    { codigo: 8 , nome: 'Teclado', preco: 99, unidadePreco: 'R$' },
    { codigo: 9 , nome: 'Mouse', preco: 49, unidadePreco: 'R$' },
    { codigo: 10 , nome: 'Caixa de som', preco: 79 }
];

const carrinho = [];
let total = document.getElementById('total-carrinho');

function consultarPreco() {
    let listaProdutos = document.getElementById('product-list');
    const nomeBuscado = document.getElementById('search').value;
    const produto = produtos.find(produto => produto.nome.toLowerCase() === nomeBuscado.toLowerCase());
    listaProdutos.innerHTML = '';
    if (produto) {
        let divProduto = document.createElement('div');
        divProduto.className = 'product';

        let nomeProduto = document.createElement('h3');
        nomeProduto.className = 'product-name';
        nomeProduto.textContent = produto.nome;
        divProduto.appendChild(nomeProduto);

        let precoProduto = document.createElement('p');
        precoProduto.className = 'product-price';
        precoProduto.textContent = `${produto.unidadePreco} ${produto.preco.toFixed(2)}`;
        divProduto.appendChild(precoProduto);

        let botaoComprar = document.createElement('button');
        botaoComprar.className = 'buy-button';
        botaoComprar.textContent = 'Adicionar ao carrinho';

        //Exercicio 03 adicionar evento ao botao de adicionar ao carrinho
        botaoComprar.addEventListener('click', () => {
            adicionarCarrinho(produto);
            mostrarTotalCarrinho();
            atualizarQtdCarrinho();
        });

        

        divProduto.appendChild(botaoComprar);

        listaProdutos.appendChild(divProduto);

    } else {
        listaProdutos.textContent = 'Produto não encontrado';
    }
}

function adicionarCarrinho(produto) {
    carrinho.push(produto);
    console.log(carrinho);
}

//Exercicio 05 atualizar quantidade de produtos no carrinho e mostrar na tela
function atualizarQtdCarrinho() {
    const qtdCarrinhoElement = document.getElementById('qtdCarrinho');
    qtdCarrinhoElement.textContent = carrinho.length;
}

//Exercicio 04 cacular total do carrinho
function calcularTotalCarrinho() {
    let total = 0;
    carrinho.forEach(produto => {
        total += produto.preco;
    });
    if(total === 0) {
        return 'Carrinho vazio';
    } else {
        return `Valor total da compra: R$ ${total.toFixed(2)}`;
    }

}

function mostrarTotalCarrinho() {
    const totalCarrinho = calcularTotalCarrinho();
    total.textContent = totalCarrinho;
}