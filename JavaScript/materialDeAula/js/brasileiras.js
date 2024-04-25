//getElement = seleciona o elemento pelo ID
// document.getElementById("teste");

// querySelector = seleciona a primeira tag a que estiver no documento
// document.querySelector("a")

// querySelectorAll = seleciona todas tags a
// document.querySelectorAll("a")

let valorTotal = 0;

function atualizarValorTotal(){
    let valorTotalHtml = document.getElementById("valorTotal");
    valorTotalHtml.innerHTML = `VALOR TOTAL : R$ ${valorTotal.toFixed(2)}`;
}
function adicionarValorTotal(valorItem){
    valorTotal += valorItem;
    atualizarValorTotal();
}