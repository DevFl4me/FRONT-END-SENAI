// faça dois scripts:
// 1-calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, o valor total da conta e após isso divida a conta de forma igual a todos os clientes
function atividade1(){
    let valorConta;
    let clientes;
    let valorTotalDividido;

window.alert("Seja bem vindo ao Divisor de contas");

    valorConta= Number (window.prompt("Digite o valor da conta a ser paga:R$"));
    clientes= Number (window.prompt("Quantas pessoas tem na mesa?"));
    valorTotalDividido = (valorConta/clientes).toFixed(2);

window.alert("O valor dividido para cliente é de:R$"+valorTotalDividido)

}
function atividade2(){
    let numero;
    let antecessor;
    let sucessor; 

window.alert("Bem-vindo")

    numero = Number(window.prompt("Digite um numero:"))
    antecessor = numero-1;
    sucessor = numero+1;

window.alert("O sucessor do numero é " +sucessor+" e o antecessor é "+antecessor)
}
