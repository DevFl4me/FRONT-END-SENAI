Algoritmo "Lojinha_Brasileiras"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/02/2024
Var
  valor:real
  opcaoEscolhida:caractere


Inicio

escreval("****Brasileiras****")
escreval("A - Pendrive")
escreval("B - Açai")
escreval("C - KitKat")
escreval("D - Celular")


leia(opcaoEscolhida)
   se (opcaoEscolhida="A") entao
   escreval("O pendrive foi adicionado com sucesso!")
   valor<-50
senao
     se (opcaoEscolhida="B") entao
     escreval("O açai foi adicionado com sucesso!")
   valor<-20
senao
     se(opcaoEscolhida ="C") entao
     escreval("O Kit Kat foi adicionado com sucesso!")
     valor <-1.99
senao
     se(opcaoEscolhida = "D") entao
     escreval("O Celular foi adicionado com sucesso!")
     valor<-2
     senao
     escreval("Opção invalida, tente novamente!")
     
     fimse
    fimse
   fimse
  fimse
Fimalgoritmo