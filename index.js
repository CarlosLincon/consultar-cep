"use strict";
let modal = document.querySelector("#modal");
const preencherFormulario = (endereco) => {
    document.querySelector("#logradouro").textContent = endereco.logradouro;
    document.querySelector("#complemento").textContent = endereco.complemento;
    document.querySelector("#bairro").textContent = endereco.bairro;
    document.querySelector("#localidade").textContent = endereco.localidade;
    document.querySelector("#uf").textContent = endereco.uf;
    document.querySelector("#ibge").textContent = endereco.ibge;
    document.querySelector("#gia").textContent = endereco.gia;
    document.querySelector("#ddd").textContent = endereco.ddd;
    document.querySelector("#siafi").textContent = endereco.siafi;
    modal.classList.add("On");
};

const pesquisarCep = async() => {
    if (cep == "") {
        alert("Por favor, preencha o campo do CEP!");
    } else {
        const cep = document.querySelector("#cep").value;
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const dados = await fetch(url);
        const endereco = await dados.json();
        preencherFormulario(endereco);
    }
};

document.querySelector("#btn").addEventListener("click", pesquisarCep);

document.querySelector("#fechar").addEventListener("click", () => {
    modal.classList.remove("On");
});