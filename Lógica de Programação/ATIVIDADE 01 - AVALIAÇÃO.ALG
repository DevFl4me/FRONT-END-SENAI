Algoritmo "Atividade 01 - Avalia��o"
//1) Escreva um algoritmo com ENQUANTO que permita a leitura das notas
//de uma turma de 5 alunos. Calcular a m�dia da turma e contar quantos
//alunos obtiveram nota acima desta m�dia calculada. Escrever a m�dia
//da turma e o resultado da contagem
Var
alunos:vetor [1..5]de caractere
contador:inteiro
notas:vetor [1..5]de real
somaNotas:real
alunosAcimaDaMedia:real
Inicio
contador <- 1
escreval("--------- Sistema de M�dia dos Alunos ---------")
 enquanto (contador<=5) faca
  escreva ("Digite o nome do ",contador,"�"," aluno(a):" )
    leia(alunos[contador])//Armazena no vetor alunos
     escreva ("Digite a M�dia do ",alunos[contador],":")
      leia(notas[contador])//Armazena no vetor notas
      se (notas[contador]>5 )entao//Servir� para inserir a quantidade de alunos acima da media.
        alunosAcimaDaMedia <- alunosAcimaDaMedia+1
      fimse
         limpatela()//limpa tela do cmd
          contador <- contador+1
 fimEnquanto
 somaNotas <- (notas[1]+notas[2]+notas[3]+notas[4]+notas[5]) / 5 // Somando media da turma com base nas notas e quantidade dos alunos
  limpatela()
 escreval("--------Media da Turma--------")
 escreval("M�dia turma:", somaNotas)//Imprime media da turma
 escreval
 escreval("Quantidade de alunos acima da m�dia:", alunosAcimaDaMedia)//Mostra quantidade de alunos acima da media, porem nao especifica os nomes
Fimalgoritmo