algoritmo "Atividade 01 - Vetor"
//1) Uma loja está levantando o valor total 3 mercadorias em  estoque.
//Escreva um algoritmo que permita a entrada das seguintes informações:
//a) o valor de cada mercadoria. Ao final imprimir o valor total em estoque
// e a média de valor das mercadorias.
//b)E AGORA ele irá salvar o nome de cada produto!

var
mercadorias:vetor[1..3] de caractere
valorMercadoria:vetor[1..3] de real
quantidadeEstoque:vetor[1..3]de inteiro
valorTotal: real
valorMedia:real
contador:inteiro

inicio
para contador <- 1 ate 3 faca//Inicio repetição para
 escreva("Digite o nome da", contador ,"°"," mercadoria:"  )
   leia(mercadorias[contador])//armazena o  espaço do vetor valorMercadoria[1]
     escreva("Digite o valor da mercadoria:R$")
       leia(valorMercadoria[contador])//armazena o valor do produto no vetor valorMercadoria[1]
         escreva ("Quantas unidades possui em estoque?")
          leia(quantidadeEstoque[contador])//Armazena quantidade do produto em estoque no vetor quantidadeEstoque[1]
       limpatela()//limpa tela
     fimPara// Fim do laço de repetição
   para contador<-1 ate 3 faca//Inicio repetição para
     escreval("Nome da mercadoria:",mercadorias[contador])//Imprime valores
       escreval("Valor da mercadoria:R$", valorMercadoria[contador])//Imprime valores
         escreval("Quantidade em estoque:", quantidadeEstoque[contador])//Imprime valores
          escreval("--------------------------------------------------")
       limpatela()//Limpa tela
     escreval("--------Valor em Estoque---------")
      valorTotal<- valorMercadoria[1]+valorMercadoria[2]+valorMercadoria[3]// Recebe soma dos produtos
       escreval("R$",valorTotal)//Imprime valor total dos produtos
        escreval("---------Valor Médio de Produtos----------")
         valorMedia <- valorTotal/3
       escreval("R$",valorMedia)//Imprime média dos produtos
   fimPara
fimalgoritmo