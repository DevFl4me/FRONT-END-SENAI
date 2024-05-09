function replaceEcma(){
    // colocando frase base
    var frase = "Olá mundo, o mundo está maravilhoso, poís todo mundo está sorrindo";
    var resposta = document.querySelector(`#resposta`);
        
    resposta.innerHTML = frase;
    // replace = substitui um termo da string
    var fraseModificada = frase.replace("mundo","Ryan");
    resposta.innerHTML += `<br>${fraseModificada}`;

    // replaceAll = substitui todos os termos de string
    var fraseModificada2 = frase.replaceAll("mundo","bolo");
    resposta.innerHTML += `<br>${fraseModificada2}`;
};

function pesquisar(){
    // includes apenas verifica se termo existe!
    var filmes = ["Era do gelo","Pokemon","Vingadores","Batman","Coringa"];
    var pesquisa = filmes.includes("Vingadores"); // retorna true ou false.
   
    var resposta2=document.querySelector("#resposta2");
    resposta2.innerHTML = pesquisa;
    
    if(pesquisa==true){
        resposta2.innerHTML=`Opa o termo foi encontrado!`;
    }else{
        resposta2.innerHTML = `o termo não foi encontrado!`;
    }

    // indexOf verifica se existe, também retorna indice
    var termoPesquisado = "Era do gelo"
    var pesquisa2 = filmes.indexOf(termoPesquisado);

    if(pesquisa2 == -1 ){
        resposta2.innerHTML += `<br> elemento ${termoPesquisado} não foi encotrado!`;
    }else{
        resposta2.innerHTML += `<br>o elemento ${filmes[pesquisa2]} foi encontrado!`;
    } 

};

function pad(){
    var nome = "Victor";
    var sobreNome = "Santos";
    var cartaoFinal = "9999";
    var totalCaracteres = (nome + sobreNome).length +1
    var resposta3 = document.querySelector("#resposta3");

    resposta3.innerHTML = nome.padStart(totalCaracteres,sobreNome);
    resposta3.innerHTML +=`<br>`+nome.padEnd(totalCaracteres," "+sobreNome);
    resposta3.innerHTML += "<br>"+cartaoFinal.padStart(16,"*");


};

function objectEntries(){
    const aluno = {
        matricula : 180,
        cursosFinalizados : ["Front","UX","Banco de dados"],
        cursoAtual : "Dominó",
        nome : "Raul",
    };

    // retorna todos atributos do objeto (matricula, cursoFinalizados e outros.....)
    var alunoKey = Object.keys(aluno);
    console.log(alunoKey);
    // retorna todos atributos e seus valores (matricula, 180/ cursosFinalizados, Array)
    var alunoEntries = Object.entries(aluno);
    console.log(alunoEntries)

    // retorna somente valor (Domino, Array)
    console.log(aluno.matricula);

    //map - faz um processo para cada elemento do nosso array
    var teste = ["Matricula","Front End"];
    var mapResultado = teste.map((elemento)=>`<li>${elemento}</li>`)
    console.log(mapResultado);
};

function Promisses(){
    var promessa = new Promisses((resolve,reject)=>{
        let usuario = "ADM";
        
        if(usuario == "ADM"){
            resolve("o usuario é administrador");
        }else{
            reject("O usuario não é adm!");
        }

    });

    promessa.then((resultado)=>{
        console.log(resultado);
    })
};

// executa functions
replaceEcma();
pesquisar();
pad();
objectEntries();
promisses()