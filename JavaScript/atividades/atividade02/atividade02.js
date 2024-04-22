// 2-Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem: o numero anterior a ele, o próprio número escolhido
//  e o número sucessor a ele.
let numero;
let antecessor;
let sucessor;

window.alert("Bem-vindo")

numero = Number(window.prompt("Digite um numero:"))
antecessor = numero-1;
sucessor = numero+1;

window.alert("O sucessor do numero é " +sucessor+" e o antecessor é "+antecessor)