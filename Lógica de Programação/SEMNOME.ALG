Algoritmo "ATIVIDADE 03 - AVALIAÇÃO"
//Faça um algoritmo para ler: número da conta do cliente, saldo,
//débito e crédito. Após, calcular e escrever o saldo atual
//(saldo atual = saldo - débito + crédito). Também testar se saldo
//atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo',
// senão escrever a mensagem 'Saldo Negativo'.

Var
 numeroConta:inteiro
 saldoAtual,saldoConta,debito,credito:real


Inicio
 escreva("Digite o numero da conta para acessar:")
 leia(numeroConta)
 limpatela()
 escreva("Digite saldo atual da sua conta:R$")
 leia(saldoConta)
 limpatela()
 escreva("Digite o valor do crédito:R$")
 leia(credito)
 limpatela()
 escreva("Digite o valor do débito:R$")
 leia(debito)
 limpatela()
 saldoAtual<-(saldoConta-debito)+credito
 se (saldoAtual>=0)entao
 escreval("Seu saldo é positivo!!")
 senao
 escreval("Saldo negativo!!")
 fimSe


Fimalgoritmo