Algoritmo "ATIVIDADE 03 - AVALIA��O"
//Fa�a um algoritmo para ler: n�mero da conta do cliente, saldo,
//d�bito e cr�dito. Ap�s, calcular e escrever o saldo atual
//(saldo atual = saldo - d�bito + cr�dito). Tamb�m testar se saldo
//atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo',
// sen�o escrever a mensagem 'Saldo Negativo'.

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
 escreva("Digite o valor do cr�dito:R$")
 leia(credito)
 limpatela()
 escreva("Digite o valor do d�bito:R$")
 leia(debito)
 limpatela()
 saldoAtual<-(saldoConta-debito)+credito
 se (saldoAtual>=0)entao
 escreval("Seu saldo � positivo!!")
 senao
 escreval("Saldo negativo!!")
 fimSe


Fimalgoritmo