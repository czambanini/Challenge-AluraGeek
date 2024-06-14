async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/projetos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(nome, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/projetos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível salvar item")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function deletarProduto(id) {
    const conexao = await fetch(`http://localhost:3000/projetos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível deletar o item")
    }

    return;
}

export const conectaApi = {
    listaProdutos, criarProduto, deletarProduto
}