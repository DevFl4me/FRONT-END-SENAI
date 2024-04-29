// -Faça um sistema de adicionar peças de computador de forma fixa (Deixando as opções já pre selecionadas)
//  e que elas no decorrer do tempo possam serem adicionas a um array chamado carrinho

var carrinho = [];
var valorTotal = 0;

function atualizarCarrinho(){
    let carrinhoHtml = document.querySelector("#dadosCarrinho");
    carrinhoHtml.innerHTML="";

    carrinho.forEach((nomeProduto)=> {
        carrinhoHtml.innerHTML += `<div class="itemCarrinho">${nomeProduto}</div>`;
    });

}

function adicionarCarrinho(produto,valor){
    carrinho.push(produto);
    valorTotal += valor;
    atualizarCarrinho();
}

