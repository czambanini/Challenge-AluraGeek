import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-cards]");

export default function constroiCard(nome, preco, imagem, id) {
    const card = document.createElement('li');
    card.className = "main__produtos__card";
    card.innerHTML = `<img class="card_image" src="${imagem}">
    <p class="card_title">${nome}</p>
    <p class="card_price">M$ ${preco}</p>
    <img class="card_trash" src="./assets/trashcan.png" data-id="${id}" data-delete>`

    const botaoDelete = card.querySelector("[data-delete]");
    botaoDelete.addEventListener("click", () => deletarCard(id));

    return card;
}

async function listaCards() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)))
}

listaCards();

async function deletarCard(id) {
    try {
        await conectaApi.deletarProduto(id);
        // Atualizar a lista de produtos após deletar
        lista.innerHTML = "";
        listaCards();
    } catch (error) {
        alert(error);
    }
}