const usuarioCadastrado = "ADM";
const senhaCadastrada = "ADM";  

function login(){
    let usuarioCorreto = false;
    let tentativas =0;

    //Verifica se o login está errado, continua o lopping caso esteja.
    while(usuarioCorreto === false){ 
        let usuario = window.prompt("Digite o seu usuário:");
        let senha = window.prompt("Digite a sua senha:");
        
    if(usuario!=usuarioCadastrado || usuario!=senhaCadastrada){
        window.alert("Usuário ou senha incorretos! tente novamente!");

        tentativas++; //INCREMENTA +1 NA VARIAVEL TENTATIVAS
        window.alert("Número de tentativas (MAX DE 3), Suas tentativas ( "+tentativas+" )")
        // VERIFICA A QUANTIDADE DE TENTATIVAS SENDO ELA O MAXIMO DE 3
        if(tentativas===3){
            window.alert("Número de tentativas excedido! tente novamente mais tarde");
            break;
        }
         
        // CASO LOGIN ESTEJA CORRETO, SEJA BEM-VINDO!
    }else{
        window.prompt("Seja bem vindo!");
        // usuarioCorreto recebe true e finaliza o algoritmo.
        usuarioCorreto=true;
    }
    }

}