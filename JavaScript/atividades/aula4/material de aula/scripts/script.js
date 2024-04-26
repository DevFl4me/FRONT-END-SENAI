// var filme1 = "Era do gelo"
// var filme2 = "Jack Estripador"
// var filme3 = "V de vingança"
// var filme4 = "Harry Potter"

//ARRAY

var filmes = Array();

filmes[0] = "Era do gelo";
filmes[1] = "Jack Estripador";
filmes[2] = "V de vingança";
filmes[3] = "Harry Potter";
let main = document.querySelector("main");


for(var i = 0 ; i<=3 ; i++){
    main.innerHTML+=`<div class="posts">
        ${filmes[i]}
    </div>`;
}
main.innerHTML +=`<h1>MÉTODO 2</h1>`;

//metodo 2 
var produtos = ["Pen drive","X salada","Chocolate","Açai","Ps5"];

// ---------------- Comandos de array --------------------

// Adicionar no fim do array
produtos.push("Bicicleta");

//remover
produtos.pop(); //remove o ultimo elemento do array

// adicionar no começo
produtos.unshift("Pipa");

//remover no começo
produtos.shift(); // remove o primeiro elemento do array

//adiciona ou remove de acordo com o elemento, índice, quantos serão afetados.
//qual elemento adicionado
//segundo valor = deletCount - quantos deletados
produtos.splice(2,1,"Bota");

// clona o array para uma nova variavel
var produtosNovos = produtos.slice();



    produtos.forEach((elemento)=>{
        main.innerHTML+=`<div class="posts">
        ${elemento}
    </div>`; 
   
});



