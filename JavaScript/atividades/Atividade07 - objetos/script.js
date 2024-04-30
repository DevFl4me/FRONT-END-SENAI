// 1)
// Crie um objeto chamado "carro" que tenha as seguintes propriedades:
// marca: string
// modelo: string
// ano: número
// cor: string
// velocidadeMaxima: número
// velocidadeAtual: número (inicialmente 0)
// Em
// seguida, crie um método chamado "acelerar" que receba um número como
// argumento e aumente a velocidade atual do carro por esse número.
// Certifique-se de que a velocidade atual não ultrapasse a velocidade
// máxima do carro.

// 2)Faça um array de usuários, onde você possa acrescentar ao array novos usuários

// 3)Coloque no html a mensagem "Script Funcionando", bem no meio da tela estilizado

class carros{
   constructor(marca,modelo,ano,cor,velocidadeMax,velocidadeAtual){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.velocidadeMax = velocidadeMax;
    this.velocidadeAtual = velocidadeAtual;
   }
    acelerar(){
        this.velocidadeAtual += 20;

        if(this.velocidadeAtual > this.velocidadeMax){
            console.log("Erro!");
            this.velocidadeAtual = this.velocidadeMax;
        }
        
    }

}

var carro1 = new carros("Hyundai","Hyundai Tucson",2022,"vermelho",240,0)