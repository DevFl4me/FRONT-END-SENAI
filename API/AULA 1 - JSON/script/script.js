const resposta = document.querySelector("#resposta");

fetch(`http://127.0.0.1:5500/API/AULA%201%20-%20JSON/`).then((response) =>{
    response.json().then((dados) => {
       resposta.innerHTML = carros
       return carros.json()
    })
})

var cep = document.querySelector("#cep");

cep.addEventListener("focusout",pesquisar)


function pesquisar(){
fetch(`https://viacep.com.br/ws/${cep.value}/json/`).then((response)=>{
    return response.json()
}).then(dados =>{
   resposta.innerHTML = `
    <input id="Localidade"value="${dados.localidade}">
    <input id="UF"value="${dados.uf}">
    <input id="Bairro"value="${dados.bairro}">
    <input id="ddd"value="${dados.ddd}">
   `
})
}