// faça dois scripts:
// 1-calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, o valor total da conta e após isso divida a conta de forma igual a todos os clientes


// Exercicio 01
var valorConta;
var clientes;
var valorTotalDividido;

window.alert("Seja bem vindo ao Divisor de contas");

 valorConta= Number (window.prompt("Digite o valor da conta a ser paga:R$"));
 clientes= Number (window.prompt("Quantas pessoas tem na mesa?"));

 valorTotalDividido = valorConta/clientes;

window.alert("O valor dividido para cliente é de:R$"+valorTotalDividido)

// Fim Exercicio 01
