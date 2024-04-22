console.log("Olá, mundoooooo!");

// caixas de texto (input)
// prompt = recebe um texto
// window.prompt("Qual é seu nome?");

// alert = manda uma mensagem
// window.alert("FRONT É TOP");

// confirm = pergunta podendo sair verdadeiro ou falso
// window.confirm("Deseja baixar arquivo novamente?");

var nome = "Ryan";
var ligado = true;
var numero = 91;
var objeto = [];
// Objeto= tipo de coletanea de dados, onde podemos inserir,
// remover e pesquisar.

// type of = verifica o tipo da variavel

const fixo="Nao posso mudar!";
var temporaria="Sou temporário";
let temporarioVar="Fico Salvo!";

// var escopo global e sobrescrevivel
// Let escopo local e sobrescrevivel
// const escopo global e não sobrescrevivel

function teste(){
    temporaria="Sou temporário";
    temporarioVar="fico Salvo";

    console.log(temporaria);
    console.log(temporarioVar);
}

// output = resultado
// input = numero1,numero2
// Coleta dois números e soma eles, após isso, imprime na tela o resultado.
function somar(){
    window.alert("Seja bem vindo ao algoritmo de somar!");
    let numero1= Number(window.prompt("Digite o seu primeiro número:"));
    let numero2= Number(window.prompt("Digite seu segundo número:"));
    
    // ParseInt = Numeros inteiros 
    // ParseFloat = Números reais
    // Number = Numeros inteiros e reais
    
    var resultado = numero1+numero2;

    // concatenação
    window.alert("Resultado é de:"+resultado);
    window.alert(`Resultado é de:${resultado}`);
}
somar()
