// EXERCICIO 01

var carro1;

function exercicio1(){
    let resposta1=document.querySelector("#respostaEx1");

    class Carros{
        constructor(marca,modelo,ano,cor,velMax){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.cor = cor;
            this.velMax = velMax;
            this.velAtual = 0;

            this.acelerar = function(velocidadeAcelerada){
                if(this.velAtual + velocidadeAcelerada > velMax){
                    alert("Velocidade máxima excedida!")
                }else{
                    this.velAtual +=velocidadeAcelerada;
                    resposta1.innerHTML=`
                        <div id="carro1resposta">
                            <p>Marca:${carro1.marca}</p>
                            <p>Modelo:${carro1.modelo}</p>
                            <p>Ano:${carro1.ano}</p>
                            <p>Cor:${carro1.cor}</p>
                            <p>Velocidade Máxima:${carro1.velMax} km/h</p>
                            <p>Velocidade Atual:${carro1.velAtual} km/h</p>
                            <input type="number" id="acelerar">
                            <button type="button" onclick="acelerar()">Acelerar</button>
                        </div>
                       `; 
                }
            }
        }
    };

    carro1 = new Carros("Fiat","Uno",1990,"Vermelho Ferrari",140);
    resposta1.innerHTML=`
    <div id="carro1resposta">
        <p>Marca:${carro1.marca}</p>
        <p>Modelo:${carro1.modelo}</p>
        <p>Ano:${carro1.ano}</p>
        <p>Cor:${carro1.cor}</p>
        <p>Velocidade Máxima:${carro1.velMax} km/h</p>
        <p>Velocidade Atual:${carro1.velAtual} km/h</p>
        <input type="number" id="acelerar">
        <button type="button" onclick="acelerar()">Acelerar</button>
    </div>
    `;
};

function acelerar(){
    let inputAcelerar=Number(document.querySelector("#acelerar").value);
    carro1.acelerar(inputAcelerar);
};

// -------------------------------------------------------------------------------------------------------

// EXERCICIO 02
var usuarios=[];
function exercicio2(){
    let resposta2 = document.querySelector("#respostaEx2");
    
    resposta2.innerHTML=`
        <input type="text" id="nome">
        <button type="button" onclick="cadastrar()">CADASTRAR</button>
    `
};

function cadastrar(){
    let input = document.querySelector("#nome").value;
    resposta2 = document.querySelector("#respostaEx2");

    usuarios.push(input);
    resposta2.innerHTML+=input;
}

// -------------------------------------------------------------------------------------------------------

// EXERCICIO 03
function fecharPupUp(){
    let resposta3=document.querySelector("#respostaEx3");

    resposta3.style.display = "none";
};
function exercicio3(){
    let resposta3=document.querySelector("#respostaEx3");

    resposta3.style.display = "flex";
    resposta3.innerHTML=` 
    <div id="popUp">
        <button type="button" onclick="fecharPupUp()"> X </button>
        Script Funcionando
    </div
    `;
};