// 1- click
// 2- pintar elemento
// 3-

document.addEventListener('DOMContentLoaded', () => {
    const assento = document.querySelectorAll('.assento');
    var assentoSelec=0;
    assento.forEach(assento => {
        assento.addEventListener('click', () => {
            if (!assento.classList.contains('selected')) {
                assento.classList.add('selected');
                assento.style.pointerEvents = 'none'; 
                assentoSelec++;
                console.log(assentoSelec);
                let resposta = document.querySelector("#resposta");
                resposta.innerHTML= `${assentoSelec}`;
            }
        });
    });
});

