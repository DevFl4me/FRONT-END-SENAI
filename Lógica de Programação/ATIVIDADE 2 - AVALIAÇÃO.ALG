Algoritmo "ATIVIDADE 2 - AVALIAÇÃO"
//A jornada de trabalho semanal de um funcionário é de 40 horas.
//O funcionário que trabalhar mais de 40 horas receberá hora extra,
//cujo cálculo é o valor da hora regular com um acréscimo de 50%.
//Escreva um algoritmo que leia o número de horas trabalhadas em um
//mês, o salário por hora e escreva o salário total do funcionário,
//que deverá ser acrescido das horas extras, caso tenham sido
//trabalhadas (considere que o mês possua 4 semanas exatas).

Var
   horasTrabalhadas, salarioHora, salarioTotal, horasExtras: Real


Inicio

  // Solicita entrada de dados
   Escreva("Digite o número de horas trabalhadas no mês: ")
   Leia(horasTrabalhadas)

   Escreva("Digite o salário por hora: ")
   Leia(salarioHora)

   // Calcula o salário total
   Se horasTrabalhadas <= 160 Então
      salarioTotal <- horasTrabalhadas * salarioHora
   Senão
      // Calcula as horas extras
      horasExtras <- horasTrabalhadas - 160
      salarioTotal <- (160 * salarioHora) + (horasExtras * salarioHora * 1.5)
   FimSe

   // Imprime o salário total
   Escreva("O salário total do funcionário é: R$", salarioTotal)

Fimalgoritmo