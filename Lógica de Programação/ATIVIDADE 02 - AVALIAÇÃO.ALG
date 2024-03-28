Algoritmo "Atividade 02 - Avaliação"
//A jornada de trabalho semanal de um funcionário é de 40 horas.
//O funcionário que trabalhar mais de 40 horas receberá hora extra,
//cujo cálculo é o valor da hora regular com um acréscimo de 50%.
//Escreva um algoritmo que leia o número de horas trabalhadas em um mês,
//o salário por hora e escreva o salário total do funcionário, que
//deverá ser acrescido das horas extras, caso tenham sido trabalhadas
//(considere que o mês possua 4 semanas exatas).

//Calculo da porcentagem
// 40 x valorSalario = resultado; Divida o resultado obtido por 100.
Var
 horasTrabalhadas:real
 horaRegular:real
 horasSemana:real
 salarioPorHoras:real
 salarioTotal:real
 horaExtra:real
Inicio
escreva("Quantas horas foram trabalhadas no mes:")
leia(horasTrabalhadas)
limpatela()
escreva("Qual é o salario recebido por hora? R$")
leia(salarioPorHoras)
limpatela()
salarioTotal <- horasTrabalhadas*salarioPorHoras
escreva("Quantas horas extras foram trabalhadas?")
leia(horaExtra)
limpatela()
se (horaExtra > 40)entao
horaExtra <- (50/100)*horasTrabalhadas
fimSe
escreva("O salario total do funcionario é de: R$", salarioTotal)





Fimalgoritmo