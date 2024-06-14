import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-form]")

async function criarCard(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const imagem = document.getElementById("imagem").value;
    try {
        await conectaApi.criarProduto(nome, preco, imagem);
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener("submit", evento => criarCard(evento));