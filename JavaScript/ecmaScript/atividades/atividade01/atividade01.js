/* 1) Fazer um input de pesquisa onde irá pesquisar se o nome de um jogo (em um array de pelomenos 3 elementos) existe, se existir, mande uma mensagem que ele foi encontrado
caso não, mande uma mensagem que não foi encontrado!
2) Fazer um site de escrever textos onde possa implementar as funções de replace e replace all */

var jogos = ["God of War","Valorant","Dota 2"];

function pesquisaJogos(){
    var jogoSelecionado = document.querySelector("#pesquisaJogo").value;
    var validaJogoSelecionado = jogos.includes(jogoSelecionado);

    respostaQuestao = document.querySelector("#resposta");
    respostaQuestao.innerHTML = `<p>${validaJogoSelecionado}</p>`;
    // VERIFICA JOGO DIGITADO PELO USUARIO
    if(validaJogoSelecionado == true){
        respostaQuestao.innerHTML = `o jogo ${jogoSelecionado} foi encontrado na lista de jogos`;
        
    }else{
        respostaQuestao.innerHTML = `o jogo ${jogoSelecionado} não foi encontrado na lista de jogos`;
    };

};