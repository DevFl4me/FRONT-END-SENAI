// var teste = document.querySelector("#tituloPana");
// teste.innerHTML = "JQUERY É TOP"


// text() - imprime string
// html() = Imprime string interpretando comandos html
var teste = $("#tituloPagina").text(`JQUERY É TOP`);

var texto = undefined;
// document.querySelector("#textoPagina").innerHTML = texto;
$("#textoPagina").html(texto);

// var span=document.querySelector("#teste");
// span.addEventListener("click",function);
// function(){}

$("#testeImagem").on("click", function(){
    $("#teste").text("Acertou!");
    $("#teste").addClass("teste");
    $("#testeImagem").html(`<img src="..." alt="Uma imagem"> `);
    // $("#teste").remove("teste");
});


console.log(teste)