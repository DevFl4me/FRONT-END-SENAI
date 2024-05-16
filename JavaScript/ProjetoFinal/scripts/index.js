// 1- click
// 2- pintar elemento
// 3-
// document.addEventListener('DOMContentLoaded',()=>{
//     const assento=document.querySelectorAll('.assento');
//     assento.forEach(assento=>{
//         assento.addEventListener("click",() =>{
//             if(!assento.classList.add('selected')){
//                 assento.classList.add('selected');
//                 assento.style.pointerEvents ='none';
//             }
//         });

// });

document.addEventListener('DOMContentLoaded', () => {
    const assento= document.querySelectorAll('.assento');

    assento.forEach(assento => {
        assento.addEventListener('click', () => {
            if (!assento.classList.contains('selected')) {
                assento.classList.add('selected');
                assento.style.pointerEvents = 'none'; 
            }
        });
    });
});