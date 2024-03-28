Algoritmo "Contador_Decrescente"
//2)Faça um algoritmo para ler 10 números e armazenar em um vetor
//após a leitura de todos eles, o algoritmo deverá escrever eles de
//forma inversa
//(Desconsiderando os valores dos números)
Var
 contador:inteiro
 numeros : vetor [1..10] de inteiro

Inicio
para contador <- 1 ate 10 faca
     leia(numeros[contador])
fimPara
escreval("-------Contagem Descrescente-------")
para contador <-10 ate 1 passo-1 faca
       escreval(numeros[contador])
fimPara

Fimalgoritmo