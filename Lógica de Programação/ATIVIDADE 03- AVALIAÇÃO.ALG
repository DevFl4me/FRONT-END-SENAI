Algoritmo "ATIVIDADE 03- AVALIAÇÃO"
//Faça um algoritmo para ler: número da conta do cliente, saldo,
//débito e crédito. Após, calcular e escrever o saldo atual
//(saldo atual = saldo - débito + crédito). Também testar se saldo
//atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo',
// senão escrever a mensagem 'Saldo Negativo'.

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
 escreva("Digite o valor de crédito da conta:R$")
 leia(credito)
 limpatela()
 escreva("Digite o valor de débito da conta: R$")
 leia(debito)
 limpatela()
 saldoAtual<-(saldoConta-debito)+credito
  se(saldoConta>=0)entao
   escreva("Saldo da conta positivo!!")
  senao
   escreval("Saldo negativo!!")
 fimse


Fimalgoritmo