algoritmo "Atividade 01 - Vetor"
//1) Uma loja est� levantando o valor total 3 mercadorias em  estoque.
//Escreva um algoritmo que permita a entrada das seguintes informa��es:
//a) o valor de cada mercadoria. Ao final imprimir o valor total em estoque
// e a m�dia de valor das mercadorias.
//b)E AGORA ele ir� salvar o nome de cada produto!

var
mercadorias:vetor[1..3] de caractere
valorMercadoria:vetor[1..3] de real
quantidadeEstoque:vetor[1..3]de inteiro
valorTotal: real
valorMedia:real
contador:inteiro

inicio
para contador <- 1 ate 3 faca//Inicio repeti��o para
 escreva("Digite o nome da", contador ,"�"," mercadoria:"  )
   leia(mercadorias[contador])//armazena o  espa�o do vetor valorMercadoria[1]
     escreva("Digite o valor da mercadoria:R$")
       leia(valorMercadoria[contador])//armazena o valor do produto no vetor valorMercadoria[1]
         escreva ("Quantas unidades possui em estoque?")
          leia(quantidadeEstoque[contador])//Armazena quantidade do produto em estoque no vetor quantidadeEstoque[1]
       limpatela()//limpa tela
     fimPara// Fim do la�o de repeti��o
   para contador<-1 ate 3 faca//Inicio repeti��o para
     escreval("Nome da mercadoria:",mercadorias[contador])//Imprime valores
       escreval("Valor da mercadoria:R$", valorMercadoria[contador])//Imprime valores
         escreval("Quantidade em estoque:", quantidadeEstoque[contador])//Imprime valores
          escreval("--------------------------------------------------")
       limpatela()//Limpa tela
     escreval("--------Valor em Estoque---------")
      valorTotal<- valorMercadoria[1]+valorMercadoria[2]+valorMercadoria[3]// Recebe soma dos produtos
       escreval("R$",valorTotal)//Imprime valor total dos produtos
        escreval("---------Valor M�dio de Produtos----------")
         valorMedia <- valorTotal/3
       escreval("R$",valorMedia)//Imprime m�dia dos produtos
   fimPara
fimalgoritmo