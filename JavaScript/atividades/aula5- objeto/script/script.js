// var cliente1Nome="Leo"
// var clienteAgencia="12345-x"
// var clienteTipoDeConta = "Corrente"
// var clienteCpf = "9999999999"
// var clienteSaldo="0";

// clienteSaldo="100"

class Cliente{
    nome;
    agencia;
    tipoDeConta;
    cpf;
    saldo;
    depositar(valor){
        this.saldo += valor;
        let resultado = document.querySelector("#teste1");
        resultado.innerHTML = `
        <p>NOME DA CONTA: ${this.nome}</p>
        <p>O SALDO DA CONTA : ${this.saldo}</p>
        `;
    }
    sacar(valor){
        this.saldo -= valor;
        let resultado = document.querySelector("#teste1");
        resultado.innerHTML = `
        <p>NOME DA CONTA: ${this.nome}</p>
        <p>O SALDO DA CONTA : ${this.saldo}</p>
        `;
    }
}
function depositar(){
    let valorInput = Number(document.querySelector("#cadastrar").value);
    cliente1.depositar(valorInput);
}
function sacar(){
    let valorInput = Number(document.querySelector("#sacar").value);
    cliente1.depositar(valorInput);
}

var cliente1 = new Cliente();
cliente1.nome = "Miqueias";
cliente1.agencia = "12345-x";
cliente1.tipoDeConta = "Poupança";
cliente1.cpf = "9999999-99";
cliente1.saldo = 0;

console.log(cliente1);

var cliente2 = new Cliente();
var cliente3 = new Cliente();

class ClientePremium{
    constructor(nome,cpf,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
    }
}
var clienteEspecial = new ClientePremium("César","888888",1000000);
console.log(clienteEspecial)