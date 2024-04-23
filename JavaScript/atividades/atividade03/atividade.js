// ATIVIDADE 3
// Crie uma aplicação capaz de identificar a faixa etária com
// base na idade informada pelo usuário. Considere os seguintes critérios:
// Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
// Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
// Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
// Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
// Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados para o usuário.


// ATIVIDADE
function FaixaEtaria(){

var idade

window.alert("Bem-vindo ao algoritmo que identifica faixa etária");

idade = Number(window.prompt("Digite a idade:"));

    // Verifica Faixa Etária
if(idade>=0 && idade<15){
    window.alert("Criança");
}
else if(idade>=15 && idade<=30){
    window.alert("Jovem");
}
else if(idade>=30 && idade<60){
    window.alert("Adulto");
}
else if(idade>=60){
    window.alert("Idoso");
}
}

// IF ELSE
function ifElse(){
    if(true){  //se colocar false ele vai para o Else
        console.log("Estou no If")
    }else{
        console.log("Estou no Else")
    }

    // VERIFICA IDADE
    // INPUT - idade
    // OUTPUT - resposta
    // Verifica a idade do usuário se é mior de idade
    window.alert("Seja bem vindo(a)");
    let idade = Number(window.prompt("Insira sua idade:"));

    if(idade>=18){
        // entrar no site
        window.alert("Aproveite nosso sistema!")
        let resposta = document.querySelector("#resposta")
        resposta.innerHTML=`${idade}`;
    }else{
        // não entrar no site  
        window.alert("Idade inválida!");
        location.href ="https://www.google.com";
    }
}

// SWITCH CASE
function switchCase(){
    window.alert("Brasileiras");
    let opcao = window.prompt("Escolha a sua opção:A - Pen drive. B- Bola. C - Chocolate");
    
    switch(opcao){
        case "B":
            window.alert("Você comprou um Pen Drive");
            break;
        case "B":
            window.alert("Você comprou uma Bola");
            break;
        case "C":
            window.alert("Você comprou um Chocolate");
            break; 
        default:
            window("Opção Inválida");                   
    }
}

 







