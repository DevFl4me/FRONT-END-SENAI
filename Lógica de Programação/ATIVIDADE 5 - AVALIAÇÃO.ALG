Algoritmo "ATIVIDADE 5 - AVALIA��O"
//5) Fa�a um algoritmo para ler dois vetores V1 e V2 de 5 n�meros cada
//Calcular e escrever a quantidade de vezes que V1 e V2 possuem os
//mesmos n�meros e nas mesmas posi��es.
Var
V1:vetor[1..5] de inteiro
v2:vetor[1..5] de inteiro
 contadorIguais:inteiro
 i:inteiro
Inicio
//incremento no vetor V1
para i de 1 ate 5 faca
   escreval("Digite o",i,"� numero para o vetor V1:")
   leia(v1[i])
   limpatela()
fimPara
//Incremento no Vetor V2
para i de 1 ate 5 faca
   escreval("Digite o",i,"�"," numero para o vetor V2:")
   leia(v2[i])
   limpatela()
fimpara
contadoriguais<-1
//Verifica iguais
para i de 1 ate 5 faca
se v1[i]= v2[i] entao
contadorIguais :=contadorIguais+1
limpatela()
fimse
fimpara
//Imprime Resultado
escreval("Os numeros digitados repitidos deram um total de:", contadorIguais," repeti��es")
Fimalgoritmo