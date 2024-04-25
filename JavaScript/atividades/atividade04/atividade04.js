// 1) Faça um sistema de login onde, exista um usuário com acesso "ADM" e senha "ADM", se o usuário errar a senha ou o acesso,
//  repita para que ele possa tentar novamente, se acertar recepcione o usuário com "BEM VINDO!"

function exercicio1(){
let usuarioAdm = "ADM";
let senhaAdm = "ADM";
let loginUser = (window.prompt("Digite seu nome de usuario:"));
let senhaUser = (window.prompt("Digite sua senha:"));

    while(loginUser!==usuarioAdm || senhaUser!==senhaAdm){
    window.alert("Login ou senha incorretos!");
    loginUser=window.prompt("Digite seu nome de usuario:");
    senhaUser=window.prompt("Digite sua senha:");
}
    window.alert("Logado com sucesso!");
}


// 2)Atualize a lojinha Brasileiras para o JavaScript, tendo como noção a capacidade de acrescentar valor, 
// do qual o usuário possa colocar diversos produtos até que ele de alguma forma termine o pedido ( ex: adicionando botão de : finalizar )


function exercicio2(){
    let opcao;
    window.alert("Bem vindo a loja Brasileiras!");
    window.alert("Selecione os itens que deseja comprar!");
    // input opção escolhida
    opcao = Number(window.prompt("2-Pendrive\n1-Açai\n3-KitKat\n4-Celular"));

    while()

}
