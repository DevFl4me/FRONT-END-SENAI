Algoritmo "Atividade 02 - Avalia��o"
//A jornada de trabalho semanal de um funcion�rio � de 40 horas.
//O funcion�rio que trabalhar mais de 40 horas receber� hora extra,
//cujo c�lculo � o valor da hora regular com um acr�scimo de 50%.
//Escreva um algoritmo que leia o n�mero de horas trabalhadas em um m�s,
//o sal�rio por hora e escreva o sal�rio total do funcion�rio, que
//dever� ser acrescido das horas extras, caso tenham sido trabalhadas
//(considere que o m�s possua 4 semanas exatas).

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
escreva("Qual � o salario recebido por hora? R$")
leia(salarioPorHoras)
limpatela()
salarioTotal <- horasTrabalhadas*salarioPorHoras
escreva("Quantas horas extras foram trabalhadas?")
leia(horaExtra)
limpatela()
se (horaExtra > 40)entao
horaExtra <- (50/100)*horasTrabalhadas
fimSe
escreva("O salario total do funcionario � de: R$", salarioTotal)





Fimalgoritmo