Algoritmo "ATIVIDADE 4 - AVALIA��O"
//4)A prefeitura de uma cidade deseja fazer uma pesquisa entre seus
//habitantes. Fa�a um algoritmos para coletar dados sobre o sal�rio e
//n�mero de filhos de cada habitante e ap�s as leituras, escrever:
//a) M�dia de sal�rio da popula��o
//b) M�dia do n�mero de filhos
//c) Maior sal�rio dos habitantes
//d) Percentual de pessoas com sal�rio menor que R$ 150,00
//O final da leituras dos dados se dar� com a entrada de um �sal�rio negativo�
Var
salarioHabitantes:vetor[1..5] de real
filhosHabitantes:vetor[1..5] de  inteiro
contador:inteiro
mediaSalario:real
mediaFilhos:real
maiorSalario:real
menorSalario:real

Inicio
contador<-1
enquanto (contador <=5) faca
escreva("Digite o salario do", contador,"�"," habitante:R$" )
leia(salarioHabitantes[contador])
limpatela()
escreva("Digite a quantidade de filhos do", contador,"�"," habitante:")
leia(filhosHabitantes[contador])
limpatela()
contador <- contador +1
fimEnquanto
//Media salario por habitante
mediaSalario <- (salarioHabitantes[1]+salarioHabitantes[2]+salarioHabitantes[3]+salarioHabitantes[4]+salarioHabitantes[5])/5
escreval("--------- M�dia de sal�rio da popula��o ------------")
escreval("R$",mediaSalario)
escreval
//Media de filhos da popula��o
mediaFilhos<-(filhosHabitantes[1]+filhosHabitantes[2]+filhosHabitantes[3]+filhosHabitantes[4]+filhosHabitantes[5])/5
escreval("--------- M�dia de Filhos da popula��o ------------")
escreval("Media de filhos � de :",mediaFilhos)
//Maior salario
se (salarioHabitantes[1]>salarioHabitantes[2]) e (salarioHabitantes[1]>salarioHabitantes[3]) e (salarioHabitantes[1]>salarioHabitantes[4]) e (salarioHabitantes[1]>salarioHabitantes[5])entao
escreval("Maior salario dos habitantes � de:R$",salarioHabitantes[1])
senao

se (salarioHabitantes[2]>salarioHabitantes[1]) e (salarioHabitantes[2]>salarioHabitantes[3]) e (salarioHabitantes[2]>salarioHabitantes[4]) e (salarioHabitantes[2]>salarioHabitantes[5])entao
escreval("Maior salario dos habitantes � de:R$",salarioHabitantes[2])
senao

se (salarioHabitantes[3]>salarioHabitantes[1]) e (salarioHabitantes[3]>salarioHabitantes[2]) e (salarioHabitantes[3]>salarioHabitantes[4]) e (salarioHabitantes[2]>salarioHabitantes[5])entao
escreval("Maior salario dos habitantes � de:R$",salarioHabitantes[3])
senao

se (salarioHabitantes[4]>salarioHabitantes[1]) e (salarioHabitantes[4]>salarioHabitantes[2]) e (salarioHabitantes[4]>salarioHabitantes[3]) e (salarioHabitantes[4]>salarioHabitantes[5])entao
escreval("Maior salario dos habitantes � de:R$",salarioHabitantes[4])
senao

se (salarioHabitantes[5]>salarioHabitantes[1]) e (salarioHabitantes[5]>salarioHabitantes[2]) e (salarioHabitantes[5]>salarioHabitantes[3]) e (salarioHabitantes[5]>salarioHabitantes[4])entao
escreval("Maior salario dos habitantes � de:R$",salarioHabitantes[2])
senao
//Salario abaixo de 150
se (salarioHabitantes[1]<150)entao
menorSalario<-menorSalario+1
senao
se (salarioHabitantes[2]<150)entao
menorSalario<-menorSalario+1
senao
se
se (salarioHabitantes[3]<150)entao
menorSalario<-menorSalario+1
senao
se (salarioHabitantes[4]<150)entao
menorSalario<-menorSalario+1
senao
se (salarioHabitantes[5]<150)entao
menorSalario<-menorSalario+1
senao
//Imprime Media abaixo de 150
escreval("Quantidade de pessoas com sal�rio abaixo de R$150,00")
escreval("Pessoas:",menorSalario)

fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimse
Fimalgoritmo