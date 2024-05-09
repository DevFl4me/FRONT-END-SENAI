// Faça um site, onde você pode ter um personagem ao seu critério ( Um pokémon ou um protagonista)
//  com seus diversos atributos ( como vida, dano ou powerups).
//  e no html não só possamos acrescentar mais estatísticas a ele como possamos estar acompanhando sua evolução ( ver visualmente o acréscimo acontecendo ).

class personagem{
    constructor(vida,dano,armadura,agilidade){
        this.vida = vida;
        this.dano = dano;
        this.armadura = armadura;
        this.agilidade = agilidade;
    }

}

var donatello = new personagem(100,150,200,40);


function somarVida(vidaRecebida){
    let vidaRecebida = document.querySelector("resultado-vida");
    vidaRecebida += vidaRecebida; 

}
