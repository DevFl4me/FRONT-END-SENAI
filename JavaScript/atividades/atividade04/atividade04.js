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
    opcao = Number(window.prompt("2-Pendrive\n1-Açai\n3-KitKat\n4-Celular\n5-Sair"));

    while(opcao!=5){
        switch(opcao){
            case 1:
                window.alert("Pendrive foi adicionado com sucesso ao carrinho");
            break;
                case 2: 
                window.alert("Açai foi adicionado com sucesso ao carrinho");
            break;
                case 3: 
                window.alert("KitKat foi adicionado com sucesso ao carrinho");
            break;
                case 4:
                window.alert("KitKat foi adicionado com sucesso ao carrinho");
            break;
                case 5:
                window.alert("Saindo do menu de compra!"); 
            break;     

        }
    }
}
