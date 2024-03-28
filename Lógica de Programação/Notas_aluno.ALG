Algoritmo "notas_aluno"

Var
alunos:vetor[1..2] de caractere
notasAval1:vetor[1..2] de real
notasAval2:vetor[1..2] de real
notasAval3:vetor[1..2] de real
contador:inteiro
mediaFinal:real

Inicio
para contador <- 1 ate 2 faca
  escreva("Digite o nome do", contador,"º"," Aluno:")
  leia(alunos[contador])
  limpatela()
  escreval("Digite a primeira nota do aluno(a):", alunos[contador])
  leia(notasAval1[contador])
  limpatela()
  escreval("Digite a segunda nota do aluno(a):", alunos[contador])
  leia(notasAval2[contador])
  limpatela()
  escreval("Digite a terceira nota do aluno(a):", alunos[contador])
  leia(notasAval3[contador])
  limpatela()

  mediaFinal <- (notasAval1[contador]+notasAval2[contador]+notasAval3[contador])/3

  se (mediaFinal >=5) entao
  escreval("Média do aluno:",mediaFinal)
  escreval("Parabéns ", alunos[contador]," Você foi aprovado!")
  senao
  escreval("Aluno reprovado, média abaixo de 5.0!")
  fimSe
  limpatela()
fimPara


Fimalgoritmo