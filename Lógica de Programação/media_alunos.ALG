Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/02/2024
Var
n1,n2,n3,mediaFinal:real

Inicio
escreval("Digite a primeira nota:")
  leia(n1)
    n1<-n1*2
escreval("Digite a segunda nota:")
  leia(n2)
   n2<-n2*3
escreval("Digite a terceira nota:")
  leia(n3)
   n3<-n3*5
mediafinal <- (n1+n2+n3)/10
  limpatela()
   se(mediafinal>=5) entao
escreval("Aluno aprovado!")
 escreval("Media:",mediafinal)
  senao
   escreval("Aluno não aprovado,média abaixo de 5.0!")
    escreva("Media:",mediafinal)
  fimse
Fimalgoritmo