Algoritmo "Exercicio 01"
//1. Ler três números diferentes e mostrá-los em ordem crescente.
// Idem para ordem decrescente.
//(dica salve em variaveis o maior, meio e menor)
Var
 n1,n2,n3:inteiro
 maior,meio,menor:inteiro

Inicio
  escreval("Digite o primeiro numero:")
    leia(n1)
  escreval("Digite o segundo numero:")
    leia(n2)
  escreval("Digite o terceiro numero:")
    leia(n3)
//Maior
  se (n1>n2) e (n1>n3)entao
   maior <- n1
senao
  se(n2>n1) e (n2>n3)entao
  maior <-n2
senao
  se(n3>n1) e (n3>n2)entao
  maior <- n3
fimse
fimse
fimse
//Menor
se (n1<n2) e (n1<n3)entao
   menor <- n1
senao
  se(n2<n1) e (n2<n3)entao
  menor <-n2
senao
  se(n3<n1) e (n3<n2)entao
  menor <- n3
fimse
fimse
fimse
//Meio
 se (n1<>maior) e (n1<>menor)entao
    meio <- n1
senao
 se (n2<>maior) e (n2<>menor)entao
    meio<-n2
senao
 se (n3<>maior) e (n3<>menor)entao
 meio<-n3
fimSe
fimSe
fimSe
//-------------------------Imprimir na tela-----------------
escreval("------Ordem Decrescente-------")
escreval("Maior:",maior)
escreval("Medio:",meio)
escreval("Menor:",menor)

escreval("------Ordem Crescente-------")
escreval("Menor:",menor)
escreval("Medio:",meio)
escreval("Maior:",maior)
Fimalgoritmo