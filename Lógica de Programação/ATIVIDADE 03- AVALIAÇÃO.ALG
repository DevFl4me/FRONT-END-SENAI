Algoritmo "ATIVIDADE 03- AVALIA��O"
//Fa�a um algoritmo para ler: n�mero da conta do cliente, saldo,
//d�bito e cr�dito. Ap�s, calcular e escrever o saldo atual
//(saldo atual = saldo - d�bito + cr�dito). Tamb�m testar se saldo
//atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo',
// sen�o escrever a mensagem 'Saldo Negativo'.

Var
 numeroConta:inteiro
 saldoConta,saldoAtual,debito,credito:real


Inicio
 escreva("Digite o numero da conta para acessar:")
 leia(numeroConta)
 limpatela()
 escreva("Digite o saldo da conta:R$")
 leia(saldoConta)
 limpatela()
 escreva("Digite o valor de cr�dito da conta:R$")
 leia(credito)
 limpatela()
 escreva("Digite o valor de d�bito da conta: R$")
 leia(debito)
 limpatela()
 saldoAtual<-(saldoConta-debito)+credito
  se(saldoConta>=0)entao
   escreva("Saldo da conta positivo!!")
  senao
   escreval("Saldo negativo!!")
 fimse


Fimalgoritmo